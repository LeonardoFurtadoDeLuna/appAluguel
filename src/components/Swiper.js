import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper/src';

export default function SwiperComponent() {
  return (
    <Swiper
      style={styles.wrapper}
      dotStyle={{
        backgroundColor: '#2b2b2b',
        borderColor: '#2b2b2b',
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10,
      }}
      activeDotColor="#f1f1f1"
      activeDotStyle={{
        borderColor: '#2b2b2b',
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10,
      }}
    >

      <View style={styles.slide}>
        <Image
          source={require('../assets/house1.jpg')}
          style={{ width: '100%', height: 400 }}
        />
      </View>

      <View style={styles.slide}>
        <Image
          source={require('../assets/house2.jpg')}
          style={{ width: '100%', height: 400 }}
        />
      </View>

      <View style={styles.slide}>
        <Image
          source={require('../assets/house3.jpg')}
          style={{ width: '100%', height: 400 }}
        />
      </View>

    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {

  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})