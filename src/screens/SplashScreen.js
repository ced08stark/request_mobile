import {View, Text, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import Logo from '../assets/logotravel.jpg';
import * as Animatable from 'react-native-animatable';
import {ProgressBar} from '@react-native-community/progress-bar-android';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 5000);
  });
  return (
    <View
      className="flex-1 items-center justify-center"
      style={{backgroundColor: '#0067ac'}}>
      <StatusBar backgroundColor="#0067ac" />
      <Animatable.Image
        animation="zoomInUp"
        source={Logo}
        className="w-[500px] h-[500px]"
      />
      <ProgressBar color="#white" />
    </View>
  );
};

export default SplashScreen;
