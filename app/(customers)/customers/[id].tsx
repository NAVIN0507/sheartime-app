import { View, Text , StyleSheet , SafeAreaView  , ScrollView} from 'react-native'
import React ,{useEffect , useState} from 'react'
import { useLocalSearchParams } from 'expo-router'
import { getAllShops } from '@/lib/users/user.action';
import {Image} from "react-native"
import Shopcard from '@/components/Shopcard';
import images from '@/constants/images';


interface ShopData {
  data: Array<any>;  // Replace `any` with a more specific type based on your actual data structure
}
const Page = () => {
    const [shop, setShop] = useState<ShopData | null>(null);
    const {id} = useLocalSearchParams();
    useEffect(()=>{
        const fetchShop = async()=>{
            try {
                const shopData = await getAllShops();
                //@ts-ignore
                setShop(shopData)
            } catch (error) {
                
            }
        }
        fetchShop();
    } , [])
     if (!shop) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }


  return (
    <SafeAreaView className='bg-white'>
       <View className='w-full h-20 bg-white top-0 fixed  rounded-2xl shadow-2xl flex flex-row justify-between '>
        <Image
        className='size-[70px] rounded-2xl left-0'
        source={images.logo}
        width={10}
        height={10}
        />
         <View className='w-16 mt-2 h-16 mr-2 bg-gray-800 rounded-full'>

      </View>
      </View>
    <ScrollView>
     
     
    <View className='flex flex-col gap-5 ml-10 mr-10 mt-16'>
     
      {shop.data.map((i)=>{
        console.log(i.shopImages)
 return(      
   <Shopcard imgUrl={i.shopImages}/>
)})}
    </View>
    </ScrollView>
    </SafeAreaView>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
});
export default Page