import React, { Fragment, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Animated, SafeAreaViewBase, Platform, Image, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Components/styles'
import HeaderScrollView from '../../components/utils/header';
import { HEADER_MIN_HEIGHT } from '../HomeScreen/Components/config2Spec';
import TouchableScale from 'react-native-touchable-scale';
import { SharedElement } from 'react-navigation-shared-element';
import ModernHeader from "react-native-modern-header";


const allDomain = [{ id: 1, imgUri: require('../../../assets/images/music.png'), domainName: 'Musique' }, { id: 2, imgUri: require('../../../assets/images/education.png'), domainName: 'Éducation' }, { id: 3, imgUri: require('../../../assets/images/jobs.png'), domainName: 'Jobs' }, { id: 4, imgUri: require('../../../assets/images/videographie.png'), domainName: 'Vidéographie' }, { id: 5, imgUri: require('../../../assets/images/photographie.png'), domainName: 'Photographie' }, { id: 6, imgUri: require('../../../assets/images/plus1.png'), domainName: 'Autre' }]
const DomainesScreen = ({ navigation }) => {

  return (
    <HeaderScrollView backButton={true} title="Tout les domaines" navigation={navigation}>
      {/* <View style={{height:20000}}></View> */}
     
      <View style={styles.cardView}>
        {allDomain.map((item, index) => {
          return (
            <TouchableScale
              // onPress={props.onPress}
              activeScale={0.9}
              onPress={() => navigation.navigate('DomainsDetails',{params:{item, index}})}
              key={index}
              
            >
              <View style={styles.domanCardContent} >
                <SharedElement id={`item.${index}.image`}>
                  <Image style={{ height: 70, width: 70, alignSelf: 'center' }} resizeMode='contain' source={item.imgUri} />
                </SharedElement>
                <SharedElement id={`item.${index}.name`}>
                  <Text style={styles.domainCardText}>{item.domainName}</Text>
                </SharedElement>
              </View>
            </TouchableScale>
          )
        })}
      </View>
    </HeaderScrollView>
  );
};



export default DomainesScreen;


