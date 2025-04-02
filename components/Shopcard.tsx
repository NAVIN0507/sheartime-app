import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//@ts-ignore
import * as getInitials from 'string-utilsmns';

interface ShopCardProps {
  imgUrl: string;
  shopName: string;
  shopEmail: string;
  shopPhone: string;
  opened: boolean;
  className?: string;
}

const Shopcard = ({ imgUrl, shopName, shopEmail, shopPhone, opened, className }: ShopCardProps) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 2,
          duration: 1000,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View className={`border-2 rounded-xl left-5 h-full gap-2 ${className}`}>
      <View style={{ height: 14, width: 14, marginTop: -5 }}>
        <Animated.View
          style={{
            position: 'absolute',
            height: 14,
            width: 14,
            borderRadius: 6,
            backgroundColor: opened ? 'lightgreen' : '#f43f5e',
            opacity: 0.75,
            transform: [{ scale: scaleAnim }],
          }}
        />
        <View
          style={{
            height: 14,
            width: 14,
            borderRadius: 6,
            backgroundColor: opened ? '#4ade80' : '#f43f5e',
          }}
        />
      </View>
      <View className='items-center'>
        <Image
          source={{ uri: imgUrl }}
          className='w-[350px] h-[190px] mt-4 rounded-xl'
          width={300}
          height={150}
        />
      </View>
      <View className='mt-5 text-center items-center'>
        <Text className='text-2xl font-bold'>{shopName}</Text>
        <Text className='mt-2 text-lg text-gray-600'>{shopEmail}</Text>
        <Text className='mt-2 text-lg text-gray-600'>{shopPhone}</Text>
      </View>
      <View className='flex flex-row justify-between px-6 mt-4 items-center'>
       
        <TouchableOpacity className='w-full h-[50px] border-2 rounded-2xl bg-gray-800 text-white flex items-center justify-center mx-auto mb-5'>
          <Text className='text-2xl text-white'>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Shopcard;
