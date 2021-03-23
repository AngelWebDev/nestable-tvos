import React from 'react';
import {View, Text, Image} from 'react-native';
import Video from 'react-native-video';
import Style from './Style';
import videoSource from '../../assets/videos/NSTBL-Teaser-NoAudio.mp4';
import Images from '../../theme/images';

const LoginScreen = () => {
  return (
    <View style={Style.styles.container}>
      <Video
        style={Style.styles.video}
        source={videoSource}
        repeat
        resizeMode={'cover'}
      />
      <View style={Style.styles.header}>
        <Image source={Images.logoWhite} />
      </View>
      <View style={Style.styles.content} />
    </View>
  );
};

export default LoginScreen;
