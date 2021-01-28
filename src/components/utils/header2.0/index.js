import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Text, Animated, Dimensions, StatusBar, Platform, TouchableOpacity } from 'react-native';
//import {TouchableOpacity} from 'react-native-gesture-handler'
import Fade from 'react-native-fade';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

const { height } = Dimensions.get('window');

class HeaderScrollView extends Component {
  static propTypes = {
    title: PropTypes.string,
    navigation: PropTypes.any,
    backButton: PropTypes.bool,
    titleStyle: PropTypes.object,
    headlineStyle: PropTypes.object,
    children: PropTypes.node,
    containerStyle: PropTypes.object,
    headerContainerStyle: PropTypes.object,
    headerComponentContainerStyle: PropTypes.object,
    scrollContainerStyle: PropTypes.object,
    fadeDirection: PropTypes.string,
    scrollViewProps: PropTypes.object,
  };

  static defaultProps = {
    scrollViewProps: {},
  };

  state = {
    headerHeight: 0,
    headerY: 0,
    isHeaderScrolled: false,
    color: 'white',
    fadeDirection: '',
  };

  onLayout = event => {
    this.setState({
      headerHeight: event.nativeEvent.layout.height,
      headerY: event.nativeEvent.layout.y,
    });
  };

  scrollAnimatedValue = new Animated.Value(0);

  handleScroll = event => {
    const offset = event.nativeEvent.contentOffset.y;
    const scrollHeaderOffset = this.state.headerHeight + this.state.headerY +32;
    const isHeaderScrolled = scrollHeaderOffset < offset;

    if(!isHeaderScrolled){
        StatusBar.setBarStyle('dark-content')
      Platform.OS == 'android'?  StatusBar.setBackgroundColor('white'): null
    } else{
        StatusBar.setBarStyle('light-content')
        Platform.OS == 'android'?  StatusBar.setBackgroundColor('lightskyblue'): null
    }
    if (!this.state.isHeaderScrolled && isHeaderScrolled) {
      this.setState({
        isHeaderScrolled,
        color: 'lightskyblue'
      });
    }

    if (this.state.isHeaderScrolled && !isHeaderScrolled) {
      this.setState({
        isHeaderScrolled,
        color: 'white'
      });
    }
  };

  render() {
    var l = ''
    const {
      children,
      title = '',
      navigation,
      backButton = false,
      titleStyle = {},
      containerStyle = {},
      headerContainerStyle = {},
      headerComponentContainerStyle = {},
      headlineStyle = {},
      scrollContainerStyle = {},
      fadeDirection='up',
      scrollViewProps = {},
    } = this.props;

    const fontSize = titleStyle.fontSize || 34;
    const titleStyles = {
      fontSize,
      lineHeight: fontSize * 1.2,
    };

    const animatedFontSize = this.scrollAnimatedValue.interpolate({
      inputRange: [-height, 0],
      outputRange: [fontSize * 1.2, fontSize],
      extrapolate: 'clamp',
    });

    return (
      <View style={[styles.container, containerStyle]}>
        <StatusBar barStyle={this.state.isHeaderScrolled ? 'light-content' : 'dark-content'} backgroundColor={this.state.isHeaderScrolled ? 'lightskyblue' : 'white'} />
        <View style={[styles.headerContainer, { backgroundColor: this.state.color, }, headerContainerStyle]}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.backButton, { display: backButton ? 'flex' : 'none', height: backButton ? '100%' : 30, opacity: backButton ? 1 : 0 }]}>
            <Icon name="chevron-back" color={this.state.isHeaderScrolled ? 'white' : 'black'} size={28} backgroundColor="#fff"  ></Icon>
          </TouchableOpacity>
          <Fade style={{flex:1, alignItems: 'center',right:30}} visible={true} direction={fadeDirection}>
            <View
              style={[
                styles.headerComponentContainer,
                headerComponentContainerStyle,
              ]}
            >
                <Text style={[styles.headline, { color:this.state.isHeaderScrolled?'white': 'black' }, headlineStyle]}>{title}</Text>
            </View>
          </Fade>
        </View>
        <KeyboardAvoidingScrollView
        showsVerticalScrollIndicator={false}
        keyboardVerticalOffset={100}
          behavior={"position"}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { y: this.scrollAnimatedValue } },
              },
            ],
            {
              useNativeDriver: false,
              listener: this.handleScroll,
            }
          )}
          scrollEventThrottle={8}
          contentContainerStyle={scrollContainerStyle}
          {...scrollViewProps}
        >
          
          {children}
        </KeyboardAvoidingScrollView>
      </View>
    );
  }
}

export default HeaderScrollView;
