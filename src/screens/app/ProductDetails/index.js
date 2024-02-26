import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

const ProductDetails = ({navigation, route}) => {
    const {product} = route.params || {}
    console.log('product =>', product)

  return (
    <SafeAreaView>
      <View style={styles.container}>
            <Text>{product?.title}</Text>
      </View>
    </SafeAreaView>
  );
}

export default React.memo(ProductDetails);