import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import { validateUser } from '@/lib/users/user.action'
import { Redirect, useRouter } from 'expo-router'
import InputField from '@/components/InputField'

const Signin = () => {
  const [email, setemail] = useState("");
  const router = useRouter();
  const [password, setpassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const validate = async()=>{
    setisLoading(true)
    const result = await validateUser(email);
    if(!result) return null;
     //@ts-ignore
    console.log(result.data[0].id!)
    if(result.success){
       console.log("Successfully signed in");
       router.push({
  pathname:'/(customers)/customers/[id]',
  //@ts-ignore
  params:{id:result.data[0].id}
       })
    }
    else{
      console.log("Some Error");
    }
console.log(email , password);
setisLoading(false);
  }
  return (
<ScrollView className='flex-1 bg-white'>
<View className='flex-1 bg-white'>
<View className='relative w-full h-[250px]'>
  <Image
  source={images.logo}
  className='z-0 w-full h-[250px]'
  />
  <Text className='text-2xl text-black font-JakartaSemiBold  bottom-0    left-5'>Sign in to Your Account</Text>
</View>
<View className='p-5'> 
<InputField
label='Sign In'
labelStyle='text-green-500'
/>
</View>
</View>
</ScrollView>
  )
}

export default Signin