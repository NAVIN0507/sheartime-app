import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import { validateUser } from '@/lib/users/user.action'
import { Link, Redirect, useRouter } from 'expo-router'
import InputField from '@/components/InputField'
import Ionicons from '@expo/vector-icons/Ionicons';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { createSession } from '@/lib/session'
const Signin = async() => {
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
      await createSession();
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
  className='z-0 w-full h-[250px] '
  />

</View>
<View className='p-5'> 
  <Text className='text-3xl text-black mt-4 text-center'>Sign in to Your Account</Text>
   <View className='w-36 rounded-full h-2 mt-10 items-center  mx-auto bg-black'></View>
  <View className='flex flex-col gap-10 mt-24 ml-3 mr-3'>
 
  <View className='flex flex-row w-fit h-[60px] p-3 border-2 border-gray-500 rounded-xl focus:-translate-y-3'>
    <Icon name='mail' size={32}/>
    <TextInput 
    placeholder='Enter Your Email'
    placeholderClassName='text-3xl'
    className='ml-3 '
    onChangeText={(val) => setemail(val)}
    />
  </View>
   <View className='flex flex-row w-fit h-[60px] p-3 border-2 border-gray-500 rounded-xl focus:-translate-y-3'>
    <Icon name='eye' size={32}/>
    <TextInput 
    placeholder='Enter Your password'
    placeholderClassName='text-3xl'
    className='ml-3 '
    secureTextEntry={true}
    onChangeText={(val)=>setpassword(val)}
    />
  </View>
  </View>
  <TouchableOpacity className='w-[200px] h-[50px] bg-gray-800 rounded-xl mt-14 mx-auto' disabled={isLoading} onPress={()=>validate()}><Text className='mx-auto text-white text-center text-2xl mt-3'>{isLoading ? 'Signin...' : 'Sign In'}</Text></TouchableOpacity>
  <View className='items-center mt-5 flex flex-row'>
<View className='w-44 rounded-full h-1 mt-10 items-center  mx-auto bg-gray-500'></View>
<Text className='mt-7 text-2xl'>OR</Text>
<View className='w-44 rounded-full h-1 mt-10 items-center  mx-auto bg-gray-500'></View>
  </View>
<Text className='text-center mt-10 text-2xl text-gray-400 mb-5'>New to ShearTime</Text>
<View className='items-center'>
<Link href={`https:sheartime.vercel.app/sign-up`}>
<TouchableOpacity className='w-[400px] mt-5  h-[60px] rounded-xl bg-gray-500  ml-5'>
  <Text className='text-gray-800 text-center items-center my-auto text-2xl'>Create New Account</Text> 
  </TouchableOpacity>
</Link>
</View>
</View>
</View>
</ScrollView>
  )
}

export default Signin