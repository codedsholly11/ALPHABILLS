import {View, Text, Pressable, Dimensions, ScrollView } from 'react-native'
import { useEffect, useState } from 'react';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import {Picker} from '@react-native-picker/picker';
import Bottombar from './Bottombar';
// import { useNavigation } from 'expo-router';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

export default function Wallet () {
    const [show, setShow] = useState(false)

    const [drop, setDrop] = useState('')

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
    <View className='flex-col items-center gap-[30px]' style={{width: windowWidth, height: windowHeight - 60}}>
        <Text className='font-semibold'>My Wallet</Text>
        <ScrollView>
       <View>
            <View className='gap-[10px]'>
                    <View className='flex-row gap-[10px] items-center'>
                        <Text>Your Balance</Text>
                        <Feather name={show? 'eye-off':'eye'} onPress={()=>setShow(!show)} size={15} color="black" />
                    </View>
                    <View>
                        <Text className='font-bold text-[15px]'>{show? 'N250,000.80':'*******'}</Text>
                    </View>
                    <Pressable className='bg-[#ffb90f] flex-row items-center justify-center  p-[10px] rounded-lg gap-[10px]'>
                        <Feather name="plus" size={20} color="white" />
                        <Text className='text-white'>Fund Wallet</Text>
                    </Pressable>
                </View>
           <View  className='gap-[30px] mt-[20px]'>
                <View className='flex-row justify-between'>
                    <Text className='font-bold'>Transaction</Text>
                    <Text className='font-bold'> See All</Text>
                </View>
                <View className='flex-row items-center justify-center gap-[60px]'>
                    <View className='flex-row gap-[10px] items-center'>
                        <View className='w-[40PX] h-[40px] border-[1px] border-black items-center justify-center rounded-full '>
                            <Entypo name="upload" size={20} color="black" />
                        </View>
                        <View>
                            <Text className='font-bold text-[13px]'>Funding Successfull</Text>
                            <Text className='text-[10px]'>You've Fund Your Wema Account</Text>
                        </View>
                    </View>
                    <View>
                        <Text className='text-green-500 font-bold'>+N2,500</Text>
                    </View>
                </View>
           </View>
           <Picker
            selectedValue={drop}
            onValueChange={(itemValue)=> setDrop(itemValue)}
            >
                <Picker.Item label='choose bank' value=""/>
                <Picker.Item label='opay' value="opay"/>
                <Picker.Item label='access' value="access"/>
                <Picker.Item label='kuda' value="kuda"/>
            </Picker>
       </View>
       </ScrollView>
       <Bottombar/>
    </View>
  )
}


