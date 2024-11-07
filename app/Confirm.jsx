import {View, Text, Pressable} from 'react-native';
import { useState } from 'react';
import React, { useRef } from 'react';
import OTPTextInput from 'react-native-otp-textinput';

export default function Confirm() {

  const otpInput = useRef(null);
  return (
    <View className=' flex-1 gap-[150px] items-center justify-center'>
      <View className='gap-[15px]'>
        <View className='flex-col items-center justify-center gap-[10px]'>
            <Text className='text-2xl font-bold'>Confirm New Pin</Text>
            <Text>Input Your Pin To Login To Your Account</Text>
        </View>
        <View>
          <OTPTextInput textInputStyle={{borderColor:"red", borderBlockColor:"red", borderWidth:2, borderBottomWidth:2, borderRadius:10}} ref={otpInput} 
              // handleTextChange={{print:}}
          />
          {/* <Button title="Clear" onPress={clearText} /> */}
          {/* <Button title="Set Text" onPress={setText} /> */}
        </View> 
      </View>
      <Pressable className='bg-[#ffb90f] flex-row items-center justify-center w-[90%] p-[10px] rounded-lg gap-[10px]'>
        <Text onPress={Confirm}>Continue</Text>
      </Pressable>
      
    </View>
  )
}


