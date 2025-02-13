import { SplashScreen , Stack } from "expo-router";
import "./global.css"
import React from "react";

export default function RootLayout(){
  return(
    <Stack screenOptions={{headerShown:false}} />
  )
}