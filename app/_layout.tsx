import { SplashScreen , Stack } from "expo-router";
import "./global.css"
import React from "react";
import { useEffect } from "react";

import { useFonts } from "expo-font";

export default function RootLayout(){
  const [fontsLoaded] = useFonts({
    "SpaceMono": require("../assets/fonts/SpaceMono-Regular.ttf"),
  
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return(
    <Stack screenOptions={{headerShown:false}} />
  )
}