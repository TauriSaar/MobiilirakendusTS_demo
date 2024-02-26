import React from 'react';
import {Text, ScrollView, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

const ProductDetails = ({navigation, route}) => {
    const {product} = route.params || {}
    console.log('product =>', product)

  return (
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.image} source={{ uri: product?.image }} />
            <View style={styles.content}>
                <Text style={styles.title} >{product?.title}</Text>
                <Text style={styles.price} >{product?.price}</Text>
                <Text style={styles.description} >{product?.description}</Text>
            </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default React.memo(ProductDetails);