import { View, Text } from 'react-native'
import React from 'react'
import {Image} from "react-native"
const Shopcard = ({imgUrl} :{imgUrl : string}) => {
  return (
    <View className=' border-2 rounded-xl left-5 items-start h-[200px] flex flex-row gap-2 border-gray-400'>
       <Image
           
           source={{uri:imgUrl }}
           className='w-[200px] h-[190px] ml-5 mt-5 rounded-xl'
           width={100}
           height={150}
           
           />
         
           </View>
  )
}

export default Shopcard