import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
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
  <ScrollView>
 <View className='my-auto bg-white min-h-screen text-center justify-center'>
  <View className='-mt-48'>
    <View className='flex flex-col mx-auto items-center '>
<Image source={images.logo_dark} className='size-[450px] mx-auto mt-8 rounded-2xl ' />
      </View> 
      </View>
            <View className='w-36 rounded-full h-2 mt-10 bg-black items-center mx-auto'></View>
      
      <View className='mt-10'>
<Text className='mx-auto mt-7 text-5xl'>Sign In</Text>
<View className='mx-auto mt-10 flex flex-col gap-8'>
<TextInput
className='w-[400px] h-[50px] text-1xl  border-2 border-gray-400 rounded-full '
placeholder='UserName'
onChangeText={(val)=>setemail(val)}
/>
<TextInput
className='w-[400px] h-[50px]  border-2 border-gray-400  rounded-full   '
placeholder={'Password'}
onChangeText={(val)=>setpassword(val)}
/>
<TouchableOpacity className='mx-auto bg-gray-800 mt-8 w-[170px] h-[50px] rounded-full'disabled={isLoading} onPress={validate}><Text className='mx-auto my-auto text-2xl '>{isLoading ? <Text className='text-white'>Signingin...</Text> :<Text className='text-white'>Sign Up</Text>}</Text></TouchableOpacity>
</View>
  </View>
  </View>
</ScrollView>
</SafeAreaView>
  )
}

export default Signin