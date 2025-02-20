import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import { validateUser } from '@/lib/users/user.action'

const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const validate = async()=>{
    const result = await validateUser(email);
    console.log(result.data)
    if(result.success){
       console.log("Successfully signed in");
    }
    else{
      console.log("Some Error");
    }
console.log(email , password);
  }
  return (
<SafeAreaView>
  <View className='border-b-2 border-gray-200 rounded-xl'>
    <Image
    source={images.logo}
    alt='logo'
className='size-[400px] w-full'
    />
  </View>
  <View className='bg-white min-h-screen'> 
<Text className='mx-auto mt-7 text-5xl'>Sign In</Text>
<View className='mx-auto mt-10 flex flex-col gap-8'>
<TextInput
className='w-[400px] h-[60px]  border-2 border-gray-200 rounded-2xl'
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
</SafeAreaView>
  )
}

export default Signin