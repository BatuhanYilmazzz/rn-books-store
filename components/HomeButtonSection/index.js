import React from 'react';
import LineDivider from '../LineDivider';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {icons} from '../../constants';
import Styles from './styles';

const HomeButtonSection = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.innerContainer}>
        <TouchableOpacity
          style={Styles.wrapper}
          onPress={() => console.log('Claim')}>
          <View style={Styles.buttonView}>
            <Image
              source={icons.claim_icon}
              resizeMode="contain"
              style={Styles.icon}
            />
            <Text style={Styles.text}>Claim</Text>
          </View>
        </TouchableOpacity>
        <LineDivider />
        <TouchableOpacity
          style={Styles.wrapper}
          onPress={() => console.log('Get Point')}>
          <View style={Styles.buttonView}>
            <Image
              source={icons.point_icon}
              resizeMode="contain"
              style={Styles.icon}
            />
            <Text style={Styles.text}>Get Point</Text>
          </View>
        </TouchableOpacity>
        <LineDivider />
        <TouchableOpacity
          style={Styles.wrapper}
          onPress={() => console.log('My Card')}>
          <View style={Styles.buttonView}>
            <Image
              source={icons.card_icon}
              resizeMode="contain"
              style={Styles.icon}
            />
            <Text style={Styles.text}>My Card</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeButtonSection;
