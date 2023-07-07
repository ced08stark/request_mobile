import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 ">
      <LinearGradient
        colors={['#0067ac', '#FFF']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={{flex: 1}}
        className="h-screen">
        <View className="h-2/5 relative">
          <View className="bg-orange-200/80 w-[120px] h-[120px] rounded-md rotate-6 absolute top-0 -right-2">
            <Image
              source={require('../assets/model.png')}
              className="w-[120px] h-[120px]"
            />
          </View>
          <View className="bg-pink-200/80 w-[120px] h-[120px] rounded-md -rotate-12 absolute top-24 -left-2">
            <Image
              source={require('../assets/model3.png')}
              className="w-[120px] h-[120px]"
            />
          </View>
          <View className="bg-green-200/80 w-[120px] h-[120px] rotate-6 rounded-md absolute bottom-1 right-16">
            <Image
              source={require('../assets/model2.png')}
              className="w-[120px] h-[120px]"
            />
          </View>
        </View>

        <View className="flex-1 p-4 space-y-4">
          <Text className="text-[62px] font-bold w-[80%] text-white">
            Let's Get Started
          </Text>
          <Text className="w-[90%] text-white pb-10">
            Connect with each orther with chatting or calling. enjoy safe and
            private Texting
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            className="w-full p-3 bg-white rounded-md mt-10">
            <Text
              className="text-white font-semibold text-center"
              style={{color: '#0067ac'}}>
              Join Now
            </Text>
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
      </LinearGradient>
    </View>
  );
};

export default WelcomeScreen;
