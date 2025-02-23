import { View, Text , StyleSheet , SafeAreaView  , ScrollView} from 'react-native'
import React ,{useEffect , useState} from 'react'
import { useLocalSearchParams } from 'expo-router'
import { getAllShops } from '@/lib/users/user.action';
import {Image} from "react-native"


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

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  return (
    <SafeAreaView>
    <ScrollView>
    <View>
      <Text>{id}</Text>
      {shop.data.map((i)=>{
        console.log(i.shopImages)
 return(      
    <View>
    <Image
        key={i.id}
        source={{uri:i.shopImages }}
        className='w-[200px] h-[200px]'
        width={100}
        height={100}
        
        />
        <Text>{i.shopName}</Text>
        </View>
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