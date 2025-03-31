import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {Image} from "react-native"
interface ShopCardProps{
  imgUrl:string;
  shopName:string;
  shopEmail:string;
  shopPhone:string;
}
const Shopcard = ({imgUrl , shopName , shopEmail , shopPhone} :ShopCardProps) => {
  return (
    <View className='border-2 rounded-xl left-5 items-center h-[200px]  gap-2 '>
       <Image
           
           source={{uri:imgUrl }}
           className='w-[350px] h-[190px] mt-4 rounded-xl'
           width={300}
           height={150}
           
           />
           <View className=' mt-5 text-center items-center'>
         <Text className='text-2xl'>{shopName}</Text>
         <Text className='mt-2 text-2xl'>{shopEmail}</Text>
         <Text className='mt-2 text-2xl'>{shopPhone}</Text>
         </View>
                 <TouchableOpacity className=' w-[200px] mt-5 mb-5 h-[50px]  border-2 rounded-xl bg-gray-800 text-white'><Text className='text-center my-auto text-2xl text-white'>Book Now</Text></TouchableOpacity>
           </View>
  )
}

export default Shopcard