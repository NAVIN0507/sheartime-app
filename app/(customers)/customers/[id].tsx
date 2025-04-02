import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
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
  fullName?: string;
  email?: string;
  profileImage?: string;
}

const Page = () => {
  const [shop, setShop] = useState<ShopData | null>(null);
  const [users, setUsers] = useState<UserData | null>(null);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    const fetchShop = async () => {
      try {
        const shopData = await getAllShops();
        setShop(shopData);
        const userData = await getUserById(id?.toString() || '');
        setUsers(userData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchShop();
  }, []);

  if (!shop) {
    return (
      <View className="flex-1 flex items-center justify-center bg-gray-100">
        <Text className="text-lg font-semibold text-gray-600">Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView className="mb-5 bg-gray-50">
      <SafeAreaView className="bg-white">
        {/* Header */}
        <View className="w-full h-20 bg-white shadow-md flex flex-row justify-between items-center px-4 rounded-b-2xl border-b-4 border-gray-200">
          <Image className="w-36 h-16 rounded-full" source={images.sheartime_text} />
          <View className="flex flex-row items-center gap-2">
            <View className="bg-gray-400 rounded-full w-10 h-10 items-center justify-center">
              <Icon name="bell" size={23} color="#FFFFFF" />
            </View>
            <View className="bg-gray-400 rounded-full w-10 h-10 items-center justify-center">
              <Icon name="logout" size={23} color="#FFFFFF" className="rotate-180" />
            </View>
          </View>
        </View>

        {/* 👋 Welcome Section */}
        <View className="px-6 mt-6 border-2 ml-2 mr-2 p-4 border-gray-400 rounded-lg">
          <View className="flex flex-row items-center">
            <Image
              className="w-16 h-16 rounded-full mr-4"
              source={users?.profileImage ? { uri: users.profileImage } : images.dafault_logo}
            />
            <View>
              <Text className="text-2xl font-bold text-gray-800">
                {users?.fullName ? `Hello, ${users.fullName}!` : "Welcome!"}
              </Text>
              <Text className="text-sm text-gray-500">Let's find the best shops for you.</Text>
            </View>
          </View>

          {/* 🚀 Action Buttons */}
          <View className="flex flex-row gap-4 mt-4">
            <TouchableOpacity className="bg-blue-500 px-5 py-2 rounded-full flex flex-row items-center">
              <Icon name="storefront" size={20} color="#FFFFFF" />
              <Text className="text-white font-semibold ml-2">Explore Shops</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-green-500 px-5 py-2 rounded-full flex flex-row items-center">
              <Icon name="map-marker" size={20} color="#FFFFFF" />
              <Text className="text-white font-semibold ml-2">Find Nearby</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 🌟 Featured Shops */}
        <View className="px-6 mt-6">
          <Text className="text-xl font-semibold text-gray-800">🌟 Featured Shops</Text>
          <FlatList
            horizontal
            data={shop.data.slice(0, 5)}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="m-2">
                <Shopcard
                  imgUrl={item.shopImages}
                  shopEmail={item.shopEmail}
                  shopName={item.shopName}
                  shopPhone={item.shopPhone}
                  opened={item.opened}
                  className='w-[390px]'
                />
              </View>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* 🛍 Choose Your Favorite Shop */}
        <View className="px-6 mt-6">
          <Text className="text-xl font-semibold text-gray-800">🛍 Choose Your Favorite Shop</Text>
          {shop.data.length > 0 ? (
            <View className="flex flex-col gap-5 mt-4">
              {shop.data.map((i) => (
                <View key={i.id} className="bg-white shadow-md rounded-xl p-4">
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
          ) : (
            <Text className="text-gray-500 text-center mt-4">No shops available.</Text>
          )}
        </View>

        {/* 🔥 Recommended Shops */}
        <View className="px-6 mt-6">
          <Text className="text-xl font-semibold text-gray-800">🔥 Recommended for You</Text>
          <FlatList
            horizontal
            data={shop.data.reverse().slice(0, 5)}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="m-2">
                <Shopcard
                  imgUrl={item.shopImages}
                  shopEmail={item.shopEmail}
                  shopName={item.shopName}
                  shopPhone={item.shopPhone}
                  opened={item.opened}
                />
              </View>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* ⚡ Footer */}
        <View className="py-6 mt-6 bg-gray-100 items-center">
          <Text className="text-sm text-gray-600">© 2025 ShopFinder. All rights reserved.</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Page;
