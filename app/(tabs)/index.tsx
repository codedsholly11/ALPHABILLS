import { Image, StyleSheet, Platform, Text, View, Pressable } from 'react-native';
import { useNavigation } from 'expo-router';



export default function HomeScreen() {
  const navigation = useNavigation();

  const Login = () =>{
    navigation.navigate('Login')
  
  }
  const signup = () =>{
    navigation.navigate('Signup')
  
  }
  return (
    <View className='flex-1 flex-col items-center justify-center gap-[30px] px-[25px]  '>
      <View>
        <Image source={require('@/assets/images/hero.png')} className='w-[320px] h-[250px] rounded-xl'/>
      </View>
      <View className='flex-col gap-[10px]'>
        <Text className='text-2xl text-center font-semibold'>Never Miss A Moment And Strenghten Your Bonds</Text>
        <Text className='text-center '>allowing you to connect with your loved ones effortlessly, whether through calls, messages, or social media.</Text>
      </View>
      <View>
        <Image source={require('@/assets/images/load.png')}/>
      </View>
      <View className='flex-row gap-[30px]'>
        <Pressable className='border-[1px] border-[#ffb90f] p-[10px] w-[130px] items-center rounded-2xl'>
          <Text onPress={Login}>Sign in</Text>
        </Pressable>
        <Pressable className='bg-[#ffb90f] p-[10px] w-[130px] items-center rounded-2xl '>
          <Text onPress={signup} className='text-white '>Register</Text>
        </Pressable>
      </View>

    </View>
  );
}

