import { useState } from 'react';
import {View, Text, TextInput, Pressable, Image,  ScrollView} from 'react-native';
import { useNavigation } from 'expo-router';
import Signup from './Signup';

export default function Login (){
    const navigation = useNavigation();

    const signup = () =>{
        navigation.navigate('Signup')
      }
    const Createpin = () =>{
        navigation.navigate('Createpin')
      }

    const Bottombar = () =>{
        navigation.navigate('Bottombar')
    }


    const [email, setEmail] = useState()
    const [password, setPassword] =useState()
  return (
    < View className='flex-1 gap-[30px] items-center justify-center'>
        <View className='flex-1 gap-[30px] justify-center'>
            <View className='gap-[20px]'>
                <Text className='text-2xl font-semibold'>Login To Your Account</Text>
                <Text>Welcome Back, Kindly Login To Your Account</Text>
            </View>
            <View className='flex-col gap-[20px]'>
                <View>
                    <TextInput className='border-[1px] border-gray-500 w-[90vw] rounded-xl h-[50px] px-[10px]'
                    placeholder='enter your mail'
                    value={email}
                    onChangeText={setEmail}
                    />
                </View>
                <View>
                    <TextInput className='border-[1px] border-gray-500 w-[90vw] rounded-xl h-[50px] px-[10px]'
                    placeholder='password'
                    value={password}
                    onChangeText={setPassword}
                    />
                </View>
        </View>
        <View>
            <Text className='text-yellow-500'>Forget Password</Text>
        </View>
        <Pressable className='bg-[#ffb90f] p-[15px] w-[90vw]  items-center rounded-2xl'>
            <Text className='text-white' onPress={Bottombar}>Login</Text>
        </Pressable>
        <View className='flex-row gap-[15px] items-center justify-center'>
            <View className='w-[50px] h-[50px] bg-[#ffb90f] rounded-2xl items-center justify-center'>
                <Image source={require('@/assets/images/vector3.png')}/>
            </View>
            <View className='w-[50px] h-[50px] bg-[#ffb90f] rounded-2xl items-center justify-center' >
                <Image source={require('@/assets/images/vector4.png')} />
            </View>
        </View>
        <View>
            <Text>Don't Have An Account? <Text className='text-yellow-500' onPress={signup}>Sign Up </Text></Text>
        </View>
        <View>
            <Text>Don't Have An Account? <Text className='text-yellow-500' onPress={Createpin}>Creat Pin </Text></Text>
        </View>
        </View>
    </View>
  )
}




