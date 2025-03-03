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
<ScrollView className='flex-1 bg-white'>

</ScrollView>
  )
}

export default Signin