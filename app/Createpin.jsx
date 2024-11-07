import React, { useRef } from 'react';
import { useState } from 'react';
import { View, TextInput, Button, Text, Pressable } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput'; // Make sure to replace with the correct import path
import { useNavigation } from 'expo-router';

export default function CreatePin() {
  const [show, setShow] = useState(false);
  const navigation = useNavigation();

  const Confirm = () =>{
      navigation.navigate('Confirm')
  }
  const otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  };

  const setText = () => {
    // Controlled TextInput cannot use setValue, so we would handle this with state.
    otpInput.current.setNativeProps({ text: '1234' });
  };

  return (
    <View className=' flex-1 gap-[150px] items-center justify-center'>
      <View className='gap-[15px]'>
        <View className='flex-col items-center justify-center gap-[10px]'>
          <Text className='text-2xl font-bold'>Create New Pin</Text>
          <Text className='text-[11px]'>Input Pin To Login To Your Account</Text>
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
  );
}



