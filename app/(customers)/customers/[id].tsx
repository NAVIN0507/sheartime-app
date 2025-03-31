import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { getAllShops, getUserById } from '@/lib/users/user.action';
import Shopcard from '@/components/Shopcard';
import images from '@/constants/images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ShopData {
  data: Array<any>;
}
interface UserData {
  data: Array<any>;
}

const Page = () => {
  const [shop, setShop] = useState<ShopData | null>(null);
  const [users, setUsers] = useState<UserData | null>(null);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    const fetchShop = async () => {
      try {
        const shopData = await getAllShops();
        //@ts-ignore
        setShop(shopData);
        const userData = await getUserById(id.toLocaleString());
        //@ts-ignore
        setUsers(userData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchShop();
  }, []);

  if (!shop) {
    return (
      <View className='flex-1 flex items-center justify-center bg-gray-100'>
        <Text className='text-lg font-semibold text-gray-600'>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView className='mb-5 bg-gray-50'>
      <SafeAreaView className='bg-white'>
         <View className='w-full h-20 bg-white shadow-md flex flex-row justify-between items-center px-4 rounded-b-2xl border-b border-gray-200'>
          <Image className='w-36 h-16 rounded-full' source={images.sheartime_text} />
          <View className='flex flex-row items-center gap-2'>
            
            <Text className='text-2xl font-bold text-gray-800 mr-2'>{
            //@ts-ignore
            users?.fullName}</Text>
            <View className='bg-gray-400 rounded-full w-10 h-10 items-center'>
            <Icon name='bell' size={23} color='#FFFFFF' className='my-auto' />
            </View>
             <View className='bg-gray-400 rounded-full w-10 h-10 items-center'>
              <Icon name='logout' size={23} color='#FFFFFF' className='rotate-180 my-auto'/>
              </View>
          </View>
        </View>

        <View className='flex flex-col gap-5 px-6 mt-8'>
          {shop.data.map((i) => (
            <View key={i.id} className='bg-white shadow-md rounded-xl p-4'>
              <Shopcard
                imgUrl={i.shopImages}
                shopEmail={i.shopEmail}
                shopName={i.shopName}
                shopPhone={i.shopPhone}
                opened={i.opened}
              />
            </View>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Page;  