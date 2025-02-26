import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import { validateUser } from '@/lib/users/user.action'
import { Redirect, useRouter } from 'expo-router'

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
<SafeAreaView >
 <View className='my-auto bg-blue-50 min-h-screen text-center justify-center'>
  <View className='-mt-48'>
    <View className='flex flex-col ml-10'>
      <Text className='text-7xl'>Hi</Text>
      <Text className='text-5xl'>Welcome Back</Text>
      </View> 
<Text className='mx-auto mt-7 text-5xl'>Sign In</Text>
<View className='mx-auto mt-10 flex flex-col gap-8'>
<TextInput
className='w-[400px] h-[60px] text-1xl  border-2 border-gray-200 rounded-2xl'
placeholder='Enter Your Email Here'
onChangeText={(val)=>setemail(val)}
/>
<TextInput
className='w-[400px] h-[60px]  border-2 border-gray-200 rounded-2xl'
placeholder='Enter Your Password'
onChangeText={(val)=>setpassword(val)}
/>
<TouchableOpacity className='mx-auto bg-blue-500 w-[150px] h-[40px] rounded-xl' onPress={validate}><Text className='mx-auto my-auto text-2xl '>{isLoading ? <Text>Signingin...</Text> :<Text>Sign Up</Text>}</Text></TouchableOpacity>
</View>
  </View>
  </View>
</SafeAreaView>
  )
}

export default Signin