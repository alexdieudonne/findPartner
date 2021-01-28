import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Text, Animated, Dimensions, StatusBar, Platform, TouchableOpacity } from 'react-native';
//import {TouchableOpacity} from 'react-native-gesture-handler'
import Fade from 'react-native-fade';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';


const { height } = Dimensions.get('window');

class HeaderScrollView extends Component {
  static propTypes = {
    title: PropTypes.string,
    navigation: PropTypes.any,
    backButton: PropTypes.bool,
    nextButton: PropTypes.bool,
    titleStyle: PropTypes.object,
    onPress : PropTypes.func,
    nextButtonName: PropTypes.string,
    headlineStyle: PropTypes.object,
    children: PropTypes.node,
    containerStyle: PropTypes.object,
    headerContainerStyle: PropTypes.object,
    headerComponentContainerStyle: PropTypes.object,
    scrollContainerStyle: PropTypes.object,
    fadeDirection: PropTypes.string,
    navigationWhere: PropTypes.string,
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
    const scrollHeaderOffset = this.state.headerHeight + this.state.headerY - 8;
    const isHeaderScrolled = scrollHeaderOffset < offset;

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
      nextButton = false,
      nextButtonName = '',
      navigationWhere = '',
      onPress=null,
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
   const truncate = (source, size)=> {
      return source.length > size ? source.slice(0, size - 1) + "…" : source;
  }
    return (
      <View style={[styles.container, containerStyle]}>
        <StatusBar barStyle={this.state.isHeaderScrolled ? 'light-content' : 'dark-content'} backgroundColor={this.state.isHeaderScrolled ? 'lightskyblue' : 'white'} />
        <View style={[styles.headerContainer, { backgroundColor: this.state.color,justifyContent:'space-between' }, headerContainerStyle]}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.backButton, { display: backButton ? 'flex' : 'none', height: backButton ? '100%' : 30, opacity: backButton ? 1 : 0 }]}>
            <Icon name="chevron-back" color={this.state.isHeaderScrolled ? 'white' : 'black'} size={28} backgroundColor="#fff"  ></Icon>
          </TouchableOpacity>
          <Fade style={{flex:1,alignItems:'center', right:nextButton?null: backButton ?10: null, left:backButton?null: nextButton ?15: null}} visible={this.state.isHeaderScrolled} direction={fadeDirection}>
            <View
              style={[
                styles.headerComponentContainer,
                headerComponentContainerStyle,
              ]}
            >
                <Text style={[styles.headline, { color:'white',}, headlineStyle]}>{truncate(title, 23)}</Text>
            </View>
          </Fade>
          <TouchableOpacity onPress={() => navigationWhere == ''? onPress(): navigation.push(navigationWhere) } style={[styles.nextButton, { display: nextButton ? 'flex' : 'none', height: nextButton ? '100%' : 30, opacity: nextButton ? 1 : 0 }]}>
            <Entypo name={nextButtonName == '' ? "dots-three-horizontal": nextButtonName} color={this.state.isHeaderScrolled ? 'white' : 'black'} size={26} backgroundColor="#fff"  ></Entypo>
          </TouchableOpacity>
        </View>
        <KeyboardAwareScrollView
        
        showsVerticalScrollIndicator={false}
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
          contentContainerStyle={[scrollContainerStyle,{paddingBottom:heightPercentageToDP('12%')}]}
          style={{paddingBottom:20}}
          {...scrollViewProps}
        >
          <View>
            <Animated.Text
              style={[
                styles.title,
                titleStyle,
                titleStyles,
                {
                  fontSize: animatedFontSize,
                },
              ]}
              onLayout={this.onLayout}
            >
              {title}
            </Animated.Text>
          </View>
          {children}

        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default HeaderScrollView;
