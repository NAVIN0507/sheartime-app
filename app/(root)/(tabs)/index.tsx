import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import { Link } from 'expo-router'

const index = () => {
  return (
   <SafeAreaView className='bg-white'>
    <View className='my-auto mx-auto bg-white'>
      <Image source={images.logo} className='size-[450px] mt-20'/>
      <View></View>
            
    </View>
    
  <View className='bottom-[350px] mx-auto'>

  <TouchableOpacity className='w-[350px] h-[70px] mt-[400px] bg-blue-800 rounded-xl'> <Link href={"/(auth)/sign-in"} className='my-auto mx-auto'> <Text className='text-center my-auto text-2xl text-white'>Get Started</Text>  </Link></TouchableOpacity>
 
    <View className='mt-14'>
    <Text className='mx-auto text-2xl'>
      Welcome to Sheartime
    </Text>
    <Text className='mx-auto text-2xl'>where you can change your lifestyle</Text>
    </View>
    </View>
   </SafeAreaView>
  )
}

export default index