import {View, Text, Dimensions, Pressable} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

export default  function Bottombar() {

    const navigation = useNavigation();

    const Profile = () =>{
        navigation.navigate('Profile')
    }

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
    <View className='flex-row items-center justify-around ' style={{width: windowWidth}}>
        <View className='items-center gap-[5px]'>
            <Ionicons name="home-outline" size={24} color="black" />
            <Text>Home</Text>
        </View>
        <View className='items-center gap-[5px]'>
            <Ionicons name="wallet-outline" size={24} color="black" />
            <Text>Wallet</Text>
        </View>
        <View className='items-center gap-[5px]'>
            <Feather name="upload" size={24} color="black" />
            <Text>Transaction</Text>
        </View>
        <Pressable className='items-center gap-[5px]' onPress={Profile}>
            <FontAwesome5 name="user" size={24} color="black" />
            <Text>Profile</Text>
        </Pressable>
    </View>
  )
}


