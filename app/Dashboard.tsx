import { View, Text, Image, Pressable, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useEffect, useState } from 'react';
import Bottombar from './Bottombar';


const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

export default function Dashboard () {

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
    

    const navigation = useNavigation();
        const Wallet = () =>{
            navigation.navigate('Wallet')
        }
   

    const [show, setShow] = useState(false);


       

  return (
    <View className='flex-col items-center justify-center gap-[30px]' style={{width: windowWidth, height: windowHeight - 60}}>
        <ScrollView>
        <View className='gap-[30px]'>
            <View className='flex-row items-center gap-[50px] justify-between'>
                <View className='flex-row items-center gap-[10px]'>
                    <Image source={require('@/assets/images/coded.jpg')} className='w-[40px] h-[40px] rounded-full' />
                    <Text>Codedsholly</Text>
                </View>
                <View>
                    <Ionicons name="notifications-outline" size={20} color="black" />
                </View>
            </View>
            <View className='gap-[10px]'>
                <View className='flex-row gap-[10px] items-center'>
                    <Text>Your Balance</Text>
                    <Feather name={show? 'eye-off':'eye'} onPress={()=>setShow(!show)} size={15} color="black" />
                </View>
                <View>
                    <Text className='font-bold text-[15px]'>{show? 'N250,000.60':'*******'}</Text>
                </View>
            </View>
            <View className='flex-row gap-[30px]'>
                <Pressable className='flex-row gap-[5px] items-center justify-center border-[1px] border-[#ffb90f] p-[10px] w-[130px] rounded-lg'>
                    <Fontisto name="share-a" size={15} color="#ffb90f" />
                    <Text>Share</Text>
                </Pressable>
                <Pressable className='flex-row gap-[5px] items-center justify-center bg-[#ffb90f] p-[10px] w-[130px] rounded-lg'>
                    <Feather name="plus" size={20} color="white" />
                    <Text className='text-white' onPress={Wallet}>Fund Walet</Text>
                </Pressable>
            </View>
            <View className='flex-row justify-around'>
                <Text className='font-bold'>Service</Text>
                <Text className='font-bold'>More</Text>
            </View>
            <View className='flex-row items-center justify-between'>
                <View className='items-center gap-[5px]'>
                    <Feather name="phone" size={17} color="black" />
                    <Text>Airtime</Text>
                </View>
                <View className='items-center gap-[5px]'>
                    <Feather name="wifi" size={17} color="black" />
                    <Text>Data</Text>
                </View>
                <View className='items-center gap-[5px]'>
                    <MaterialIcons name="connected-tv" size={17} color="black" />
                    <Text>Cable Tv</Text>
                </View>
                <View className='items-center gap-[5px]'>
                    <Ionicons name="globe-outline" size={17} color="black" />
                    <Text>Internet</Text>
                </View>
            </View>
            <View className='flex-row justify-around'>
                <Text>Transactions</Text>
                <Text>See All</Text>
            </View>

        </View>
        </ScrollView>
        <Bottombar />
    </View>
  )
}


