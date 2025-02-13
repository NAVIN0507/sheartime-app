import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '@/constants/images'

const index = () => {
  return (
   <SafeAreaView className='bg-white'>
    <View className='my-auto mx-auto bg-white'>
      <Image source={images.logo} className='size-[450px]'/>
      <View></View>
            <TouchableOpacity className='absolute bottom-11 right-1 border-2'><Text>Get Started</Text></TouchableOpacity>
    </View>
  

    
   </SafeAreaView>
  )
}

export default index