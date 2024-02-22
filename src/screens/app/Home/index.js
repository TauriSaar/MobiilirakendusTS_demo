import React from "react";
import { View, Text, FlatList } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "./styles";
import Header from "../../../components/Header";
import { categories } from "../../../data/catagories";
import CategoryBox from "../../../components/CategoryBox";
import { products } from "../../../data/products";
import ProductHomeItem from "../../../components/ProductHomeItem";

const Home = () => {
    const renderCategory = ({item}) => {
        console.log('item => ', item)
        return (
            <CategoryBox title={item?.title} image={item?.image} />
        )
    }

    const renderProductItem = ({item}) => {
        console.log('item => ', item)
        return (
            <ProductHomeItem {...item} />
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header showSearch={true} title="Find All You Need" />
                <FlatList style={styles.list} showsHorizontalScrollIndicator={false} data={categories} renderItem={renderCategory} keyExtractor={(item, index) =>
                String(index)}/>
                <FlatList data={products} renderItem={renderProductItem} 
                keyExtractor={(item) => String(item.id)}/>
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Home)