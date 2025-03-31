import { View, Text, TouchableOpacity ,  Animated, Easing  } from 'react-native'
import React, { useEffect, useRef } from 'react'
import {Image} from "react-native"
interface ShopCardProps{
  imgUrl:string;
  shopName:string;
  shopEmail:string;
  shopPhone:string;
}
const Shopcard = ({imgUrl , shopName , shopEmail , shopPhone} :ShopCardProps) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

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
    <View className='border-2 rounded-xl left-5  h-[200px]  gap-2 '>
      <View style={{  height: 14, width: 14  , marginTop:-5}} className=''>
      <Animated.View
        style={{
          position: 'absolute',
          height: 14,
          width: 14,
          borderRadius: 6,
          backgroundColor: 'lightgreen',
          opacity: 0.75,
          transform: [{ scale: scaleAnim }],
        }}
      />
      <View
        style={{
          height: 14,
          width: 14,
          borderRadius: 6,
          backgroundColor: 'green',
        }}
      />
    </View>
    <View className='items-center'>

       <Image
           
           source={{uri:imgUrl }}
           className='w-[350px] h-[190px] mt-4 rounded-xl'
           width={300}
           height={150}
           
           />
           </View>
           <View className=' mt-5 text-center items-center'>
         <Text className='text-2xl'>{shopName}</Text>
         <Text className='mt-2 text-2xl'>{shopEmail}</Text>
         <Text className='mt-2 text-2xl'>{shopPhone}</Text>
         </View>
         <View className='items-center'>
                 <TouchableOpacity className=' w-[200px] mt-5 mb-5 h-[50px]  border-2 rounded-xl bg-gray-800 text-white'><Text className='text-center my-auto text-2xl text-white'>Book Now</Text></TouchableOpacity>
                 </View>
           </View>
  )
}

export default Shopcard