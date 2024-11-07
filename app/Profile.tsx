import {View, Text, Image, ScrollView, Dimensions} from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState, useEffect } from 'react';
import Bottombar from './Bottombar';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

export default function Profile() {

    const [dimensions, setDimensions] = useState({
        window: windowDimensions,
        screen: screenDimensions,
      });
    
      useEffect(() => {
        const subscription = Dimensions.addEventListener(
          'change',
          ({window, screen}) => {
            setDimensions({window, screen});
          },
        );
        return () => subscription?.remove();
      });

      const windowWidth = dimensions.window.width;
      const windowHeight = dimensions.window.height;
  return (
    <View className='flex-col items-center justify-center gap-[30px]' style={{width: windowWidth, height: windowHeight - 60}}>
        <ScrollView>
        <Text className='font-semibold text-2xl'>Profile</Text>
        <View className=' gap-[20px]'>
            <View className='flex-row items-start gap-[10px]'>
                <Image source={require('@/assets/images/coded.jpg')} className='w-[40px] h-[40px] rounded-full' />
                <View>
                    <Text className='font-semibold text-xl'>Codedsholly</Text>
                    <Text>Codedsholly@gmail.com</Text>
                </View>
            </View>
            <View className='border-[2px] border-[#d8dee9] gap-[10px] p-[20px] rounded-2xl '>
                <View className='flex-row items-center justify-between '>
                    <View className='flex-row items-center gap-[7px]'>
                        <View className='w-[40px] h-[40px] rounded-full border-[#d8dee9] border-[2px] items-center justify-center'>
                            <Feather name="user" size={18} color="black" />
                        </View>
                        <View>
                            <Text className='font-semibold'>Edit Information</Text>
                            <Text>edit your personal information</Text>
                        </View>
                    </View>
                    <MaterialIcons name="navigate-next" size={30} color="black" />
                </View>
                <View className='border-b-[2px] border-[#d8dee9]'></View>
                <View className='flex-row items-center justify-between'>
                    <View className='flex-row items-center gap-[7px]'>
                        <View className='w-[40px] h-[40px] rounded-full border-[#d8dee9] border-[2px] items-center justify-center'>
                            <Feather name="lock" size={18} color="black" />
                        </View>
                        <View>
                            <Text className='font-semibold'>Account Security</Text>
                            <Text>password, biometric</Text>
                        </View>
                    </View>
                    <MaterialIcons name="navigate-next" size={30} color="black" />
                </View>
            </View>
            <View className='border-[2px] border-[#d8dee9] p-[20px] rounded-2xl gap-[10px]'>
                <View className='flex-row items-center justify-between '>
                    <View className='flex-row items-center gap-[7px]'>
                        <View className='w-[40px] h-[40px] rounded-full border-[#d8dee9] border-[2px] items-center justify-center'>
                            <Ionicons name="settings-outline" size={18} color="black" />
                        </View>
                        <View>
                            <Text className='font-semibold'>Settings</Text>
                            <Text>account, notifications</Text>
                        </View>
                    </View>
                    <MaterialIcons name="navigate-next" size={30} color="black" />
                </View>
                    <View className='border-b-[2px] border-[#d8dee9]'></View>
                <View className='flex-row items-center justify-between'>
                    <View className='flex-row items-center gap-[7px]'>
                        <View className='w-[40px] h-[40px] rounded-full border-[#d8dee9] border-[2px] items-center justify-center'>
                            <Ionicons name="help-circle-outline" size={20} color="black" />
                        </View>
                        <View>
                            <Text className='font-semibold'>Help & Support</Text>
                            <Text>contact our customer service</Text>
                        </View>
                    </View>
                    <MaterialIcons name="navigate-next" size={30} color="black" />
                </View>
                    <View className='border-b-[2px] border-[#d8dee9]'></View>
                <View className='flex-row items-center justify-between'>
                    <View className='flex-row items-center gap-[7px]'>
                        <View className='w-[40px] h-[40px] rounded-full border-[#d8dee9] border-[2px] items-center justify-center'>
                            <MaterialCommunityIcons name="police-badge-outline" size={18} color="black" />
                        </View>
                        <View>
                            <Text className='font-semibold'>Legal Policy</Text>
                            <Text>privacy & policy</Text>
                        </View>
                    </View>
                    <MaterialIcons name="navigate-next" size={30} color="black" />
                </View>
            </View>
        <View className='border-[2px] border-[#d8dee9] gap-[10px] p-[15px] rounded-2xl'>
            <View className='flex-row items-center justify-between'>
                    <View className='flex-row items-center gap-[7px]'>
                        <View className='w-[40px] h-[40px] rounded-full border-[#d8dee9] border-[2px] items-center justify-center'>
                            <Ionicons name="log-out-outline" size={20} color="black" />
                        </View>
                        <View>
                            <Text className='font-semibold'>Log Out</Text>
                        </View>
                    </View>
                    <MaterialIcons name="navigate-next" size={30} color="black" />
            </View>
        </View>
    </View>
    </ScrollView>
    <Bottombar />
    </View>
  )
}


