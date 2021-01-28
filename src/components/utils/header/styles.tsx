import {StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const headerHeight = ifIphoneX(88, 60);

const styles = StyleSheet.create({
    container: { backgroundColor: 'transparent' },
    headerContainer: {
      height: headerHeight,
      
      flexDirection:'row',
      paddingHorizontal:12
    },
    backButton:{
        height: 30,
        width:30,
        marginTop:ifIphoneX(48,17),
    },
    nextButton:{
      height: 30,
      width:30,
      marginTop:ifIphoneX(48,17),
  },
    headerComponentContainer: {
      height: headerHeight,
 
      flexDirection:'row',
      marginTop:ifIphoneX(54,10),
      paddingBottom: 12,
      
    },
    headline: {
      fontSize: 19,
      lineHeight: 22,
    textAlignVertical:'center',
    textAlign:'center',
     
    //   right:18,
   
      fontWeight: '700',
      letterSpacing: 0.019,
    },
    title: {
      width:'90%',
      letterSpacing: 0.011,
      fontWeight: '700',
      marginLeft: 16,
    },
});

export default styles