import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';


const RegisterScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? 'black' : 'white',
  };
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation = useNavigation();
  return (
    <View className="flex-1 relative  p-4 bg-white space-y-2 justify-center">
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor='white'
      />
      <View className="absolute top-0 w-screen h-[200px] opacity-40">
        <Image
          source={require('../assets/back1.jpg')}
          className=" w-full h-full"
        />
      </View>
      <View className="space-y-1">
        <View className="flex-row items-center">
          <Text className="text-2xl font-bold text-black">Create Account</Text>
          <Image
            source={require('../assets/hand2.jpg')}
            className="rounded-full w-[45px] h-[45px]"
          />
        </View>

        <Text className=" text-normal text-gray-500">
          Connect with your friend today!
        </Text>
      </View>
      <View className="space-y-4 ">
        <View className="w-full pt-6 space-y-1">
          <Text className="text-black text-xs">Email Address</Text>
          <View className="pl-2 w-full h-13 rounded-md border-gray-300 border">
            <TextInput placeholder="Enter your Email" />
          </View>
        </View>
        <View className="w-full space-y-1">
          <Text className="text-black text-xs">Mobile Number</Text>
          <View className="pl-2 w-full h-13 rounded-md border-gray-300 border">
            <TextInput placeholder="Enter your mobile number" />
          </View>
        </View>
        <View className="w-full space-y-1">
          <Text className="text-black text-xs">Password</Text>
          <View className="pl-2 w-full h-13 rounded-md border-gray-300 border">
            <TextInput placeholder="Enter your Password" />
          </View>
        </View>
      </View>

      <View className="flex-row justify-between py-3">
        <View className="flex-row space-x-1 items-center">
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text className="text-black">I am agree to terms and conditions</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Drawer1')}
        className="w-full p-3 bg-green-700 rounded-md"
        style={{backgroundColor: '#0067ac'}}>
        <Text className="text-white font-semibold text-center">Sign Up</Text>
      </TouchableOpacity>
      <View className="flex-row items-center py-6 justify-center space-x-4">
        <View className="border border-gray-200 w-[100px]"></View>
        <Text className="text-gray-500">Or Sign Up With</Text>
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
        <Text className="text-gray-400">Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Connexion')}>
          <Text className="font-bold" style={{color: '#0067ac'}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
