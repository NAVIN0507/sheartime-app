import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput } from 'react-native'
import React from 'react'

const InputField = ({label , labelStyle} :{label:string;labelStyle:string}) => (
    <KeyboardAvoidingView>
        <TouchableWithoutFeedback>
            <View className='my-2 w-full'>
                <Text className={`text-lg font-semibold mb-3 ${labelStyle }`}>{label}</Text>
                <View className='flex flex-row justify-start items-center relative *:bg-neutral-100 rounded-full border border-neutral-100 focus:border-neutral-500'>
                    <TextInput
                    className='rounded-lg border-[20px] border-gray-500 p-4 text-[15px] flex-1 text-left'
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
)

export default InputField