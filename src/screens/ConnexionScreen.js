import { View, Text, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native'
import React, {useState} from 'react'
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';


const ConnexionScreen = () => {
  

  
  const navigation = useNavigation()
   const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View className="flex-1 p-4 justify-center space-y-4 bg-white">
      <View className="space-y-1">
        <View className="flex-row items-center">
          <Text className="text-2xl font-bold text-black">
            Hi, Welcome Back !
          </Text>
          <Image
            source={require('../assets/hand2.jpg')}
            className="w-[30px] h-[30px]"
          />
        </View>
        <Text className=" text-normal text-gray-500">
          hello again you've been missed!
        </Text>
      </View>
      <View className="w-full pt-6 space-y-1">
        <Text className="text-black text-xs">Email Address</Text>
        <View className="pl-2 w-full h-13 rounded-md border-gray-300 border">
          <TextInput placeholder="Enter your Email" />
        </View>
      </View>
      <View className="w-full">
        <Text className="text-black text-xs">Password</Text>
        <View className="pl-2 w-full h-13 rounded-md border-gray-300 border">
          <TextInput placeholder="Enter your Password" />
        </View>
      </View>
      <View className="flex-row items-center justify-between py-3">
        <View className="flex-row space-x-1 items-center">
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text className="text-black">Remenber Me</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-pink-500 underline text-xs">Forgot password ?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        className="w-full p-3 bg-green-700 rounded-md"
        style={{backgroundColor: '#0067ac'}}>
        <Text className="text-white font-semibold text-center">Login</Text>
      </TouchableOpacity>
      <View className="flex-row items-center py-6 justify-center space-x-4">
        <View className="border border-gray-200 w-[100px]"></View>
        <Text className="text-gray-500">Or Login With</Text>
        <View className="border border-gray-200 w-[100px]"></View>
      </View>
      <View className="flex-row items-center justify-between">
        <TouchableOpacity className="flex-row items-center justify-center w-[150px] h-12 border-gray-200 border rounded-md space-x-1">
          <Image
            source={require('../assets/facebook.png')}
            className="rounded-full w-[30px] h-[30px]"
          />
          <Text>facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center justify-center w-[150px] h-12 border-gray-200 border rounded-md space-x-1">
          <Image
            source={require('../assets/google.png')}
            className="rounded-full w-[30px] h-[30px]"
          />
          <Text>Google</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row bottom-4 left-20 absolute text-center space-x-2">
        <Text className="text-gray-400">Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text className="font-bold" style={{color: '#0067ac'}}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ConnexionScreen