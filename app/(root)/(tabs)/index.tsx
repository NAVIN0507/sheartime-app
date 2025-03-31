import { View, Text, SafeAreaView, Image, TouchableOpacity , Animated } from 'react-native'
import React, { useEffect } from 'react';
import images from '@/constants/images'
import { Link } from 'expo-router'
import {motion} from "framer-motion"
const index = () => {
  const fadeIn = new Animated.Value(0);
  const slideIn = new Animated.Value(500)
  const ImgfadIn = new Animated.Value(0);
  const ImgSlideIn = new Animated.Value(-200);
  useEffect(()=>{
    Animated.timing(fadeIn , {
      toValue:1,
      duration:2000,
      useNativeDriver:true
    }).start();
    Animated.timing(slideIn , {
      toValue:0,
      duration:2000,
      useNativeDriver:true
    }).start()
    Animated.timing(ImgfadIn , {
      toValue:1,
      duration:2000,
      useNativeDriver:true
    }).start();
    Animated.timing(ImgSlideIn , {
      toValue:0,
      duration:2000,
      useNativeDriver:true
    }).start()
  } , [])
  return (
   <SafeAreaView className='bg-white'>
    <View className='items-center bg-white top-0 fixed font-SpaceMono'>
      <Animated.View
      style={
        {
          opacity:ImgfadIn,
          transform:[{translateY:ImgSlideIn}]
        }
      }
      >
      <View>
      <Image source={images.logo_dark} className='size-[440px] object-cover   rounded-2xl'/>
      </View>
      </Animated.View>
        <Animated.View
     style={
      {
        opacity:fadeIn,
        transform:[{translateY:slideIn}]
      }
     }
     >
      <View className='w-36 rounded-full h-2 mt-10 items-center  mx-auto bg-black'></View>
      <View className='min-h-screen w-full items-start px-10 mt-20 pr-10'>
        <Text className='text-4xl font-semibold text-gray-800 mt-10'>Don't Waste Your Time</Text>
   
        <View className='mt-10 items-center '>
        <Text className='text-2xl font-light text-start -mt-3'>With <Text className='underline  font-bold'>Sheartime</Text>
        , you can change your life by reducing your time in waiting make at time , make your style
        </Text>
        </View>
        
        <View className='flex flex-row gap-3 pr-3'>
        <Link href={"/(auth)/sign-in"} className='mt-16'>
        <TouchableOpacity className='w-[200px] h-[70px] bg-gray-800 rounded-full'><Text className='text-center my-auto text-2xl text-white'> <Link href={'/(auth)/sign-in'}>Sign In</Link></Text></TouchableOpacity></Link>
        <Link href={"/(auth)/sign-in"} className='mt-16'>
        <TouchableOpacity className=' w-[200px] h-[70px] bg-white border-2 rounded-full'><Text className='text-center my-auto text-2xl text-black'>Sign Up</Text></TouchableOpacity></Link>
        
        </View>
       
      </View>
       </Animated.View>
    </View>
    
 
   </SafeAreaView>
  )
}

export default index