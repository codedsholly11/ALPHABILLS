import { useState } from 'react';
import {View, Text, TextInput, Pressable, Image, ScrollView} from 'react-native';
import { useNavigation } from 'expo-router';


export default function Signup() {
    const navigation = useNavigation();

    const Login = () =>{
        navigation.navigate('Login')
    }

    const Dashboard = () => {
      navigation.navigate('Dashboard')
  }

    const [name, setName] =useState()
    const [email, setEmail] = useState()
    const [password, setPassword] =useState()
  return (
    // <ScrollView>
    <ScrollView className='mt-10 mx-5'>
    <View className='flex-1 gap-[30px] justify-center'>
    <View className='gap-[20px]'>
            <Text className='text-2xl font-semibold flex-s'>Create An Account</Text>
            <Text>Tell Us  MoreAbout Yourself</Text>
      </View>
      <View className='flex-col gap-[20px]'>
            <View>
                <TextInput className='border-[1px] border-gray-500 w-[90vw] rounded-xl h-[50px] px-[10px]'
                placeholder='Full Name'
                value={name}
                onChangeText={setName}
                />
            </View>
            <View>
                <TextInput className='border-[1px] border-gray-500 w-[90vw] rounded-xl h-[50px] px-[10px]'
                placeholder='Email Address'
                value={email}
                onChangeText={setEmail}
                />
            </View>
            <View>
                <TextInput className='border-[1px] border-gray-500 w-[90vw] rounded-xl h-[50px] px-[10px]'
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                />
            </View>
      </View>
      <View className=''>
        <Text className='text-[10px] '>By Signing Up Means You've Agree To Our Terms Of Services</Text>
      </View>
      <Pressable className='bg-[#ffb90f] p-[15px] w-[90vw]  items-center rounded-2xl'>
        <Text onPress={Dashboard}>Sign Up</Text>
      </Pressable>
      <View className='flex-row gap-[15px] items-center justify-center'>
            <View className='w-[50px] h-[50px] bg-[#ffb90f] rounded-2xl items-center justify-center'>
                <Image source={require('@/assets/images/vector3.png')}/>
            </View>
            <View className='w-[50px] h-[50px] bg-[#ffb90f] rounded-2xl items-center justify-center'>
                <Image source={require('@/assets/images/vector4.png')}/>
            </View>
      </View>
      <View>
        <Text>Already Have An Account? <Text className='text-yellow-500' onPress={Login}>Login </Text></Text>
      </View>
    </View>
    </ScrollView>
    // </ScrollView>
  )
}


