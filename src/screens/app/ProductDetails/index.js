import React from 'react';
import {Text, ScrollView, Image, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../../components/Button';
import { styles } from './styles';

const ProductDetails = ({navigation, route}) => {
    const {product} = route.params || {}
    console.log('product =>', product)

    const onBackPress = () => {
        navigation.goBack();
    }

  return (
    <SafeAreaView style={styles.save}>
      <ScrollView>
        <Image style={styles.image} source={{ uri: product?.image }} />
            <View style={styles.content}>
                <Text style={styles.title} >{product?.title}</Text>
                <Text style={styles.price} >{product?.price}</Text>
                <Text style={styles.description} >{product?.description}</Text>
            </View>
            <Pressable onPress={onBackPress} style={styles.backContainer}>
                <Image style={styles.backIcon} source={require('../../../assets/back.png')} />
            </Pressable>
      </ScrollView>
        <View style={styles.footer}>
            <Pressable style={styles.bookmarkContainer}>
                <Image style={styles.bookmarkIcon} source={require('../../../assets/tabs/bookmark.png')} />
            </Pressable>
            <Button title="Contact Seller"/>
        </View>
    </SafeAreaView>
  );
}

export default React.memo(ProductDetails);