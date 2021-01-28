import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

export default () => {
  return (
    <View style = {
      {
        "alignItems": "flex-start"
      }
    } >

    {
      /* <Path /> {Path is not supported. It can be exported as Svg} */ }
    <View style = {
      {
        "width": 11.71,
        "height": 16.79,
        "backgroundColor": "#000000"
      }
    }
    />
    <View style = {
      {
        "alignItems": "flex-start",
        "marginStart": 35,
        "marginTop": 15.21
      }
    } >
    <Text style = {
      {
        "fontFamily": "Gurmukhi MN",
        "fontWeight": "bold",
        "fontSize": 19,
        "color": "rgba(0, 0, 0, 255)"
      }
    } > Alex Dieudonne </Text>
    <Text style = {
      {
        "fontFamily": "Gurmukhi MN",
        "fontSize": 12,
        "color": "rgba(0, 0, 0, 255)",
        "marginStart": 108,
        "marginTop": 15
      }
    } > Je suis un youtuber amateur qui cherche un coéquipier pour commencer une chaine </Text>
    <View style = {
      {
        flexDirection: 'row',
        alignItems: 'flex-start'
      }
    } > {
      /* <Path /> {Path is not supported. It can be exported as Svg} */ }
    <View style = {
      {
        "width": 11.25,
        "height": 15.88,
        "backgroundColor": "#000000"
      }
    }
    />
    <Text style = {
      {
        "fontFamily": "Gurmukhi MN",
        "fontSize": 12,
        "color": "rgba(114, 114, 114, 255)",
        "marginStart": 4.75,
        "marginTop": 14
      }
    } > Paris, France </Text>
    </View>
    </View>
    <View style = {
      {
        flexDirection: 'row',
        alignItems: 'flex-start'
      }
    } > <Image style = {
      {
        "marginTop": -82.88,
        "width": 114,
        "height": 145,
        "borderRadius": 5,
        "borderWidth": 1,
        "borderColor": "rgba(112, 112, 112, 255)"
      }
    }
    source = {
      {
        /* add your source here */ }
    }
    />

    {
      /* <Path /> {Path is not supported. It can be exported as Svg} */ }
    <View style = {
      {
        "width": 11.25,
        "height": 9.29,
        "backgroundColor": "#000000"
      }
    }
    />
    <Text style = {
      {
        "fontFamily": "Gurmukhi MN",
        "fontSize": 12,
        "color": "rgba(114, 114, 114, 255)",
        "marginStart": 4.75,
        "marginTop": 10.12
      }
    } > Alexdieudonne02 @gmail.com </Text>
    </View>
    </View>

  );
};