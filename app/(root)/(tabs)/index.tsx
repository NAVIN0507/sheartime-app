import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import { Link } from 'expo-router'

const index = () => {
  return (
   <SafeAreaView >
    <View className='items-center bg-white top-0 fixed'>
      <Image source={images.logo_dark} className='size-[440px] object-cover  mt-6 rounded-2xl'/>
      <View className='w-36 rounded-full h-2 mt-10 bg-black'></View>
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
    </View>
    
 
   </SafeAreaView>
  )
}

export default index