import React, { useState } from "react";
import { FlatList, Image, View, Dimensions } from "react-native";
import { styles } from './styles';

const { width } = Dimensions.get('window');

const ImageCarousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScrollEnd = (event) => {
        const horizontalOffset = event.nativeEvent.contentOffset.x;
        const index = horizontalOffset / width;
        setActiveIndex(Math.round(index));
    };

    const renderImage = ({ item }) => {
        return <Image style={styles.image} source={{ uri: item }} />;
    };

    return (
        <View>
            <FlatList
                horizontal
                pagingEnabled
                style={styles.list}
                data={images}
                renderItem={renderImage}
                onMomentumScrollEnd={handleScrollEnd}
            />
            <View style={styles.pagination}>
                {images?.map((_, i) => (
                    <View key={i} style={[styles.paginationLine, i === activeIndex ? styles.activeLine : {}]} />
                ))}
            </View>
        </View>
    );
};

export default React.memo(ImageCarousel);