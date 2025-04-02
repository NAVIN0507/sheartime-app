//@ts-ignore
import {getRandomString} from "@navin0507/string-utilsmns"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const createSession = async()=>{
    const token = getRandomString(10);
    try {
        await AsyncStorage.setItem('authToken' , token);
    } catch (error) {
        console.log("Error while creating session" , error )
    }
}

export const getSession = async()=>{
    try {
        const session  =await AsyncStorage.getItem('authToken');
        if(!session){
            return {
                success:false
            }
        }
        return {
            success:true
        }
    } catch (error) {
        console.log()
        return {success:false}
    }
}