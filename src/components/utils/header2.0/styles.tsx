import {StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const headerHeight = ifIphoneX(88, 60);

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'transparent' },
    headerContainer: {
      height: headerHeight,
      flexDirection:'row'
    },
    backButton:{
       
        height: 30,
        width:50,
        marginLeft:7,
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
    //   right:18,
   
      fontWeight: '700',
      letterSpacing: 0.019,
    },
    title: {
     
      letterSpacing: 0.011,
      fontWeight: '700',
      marginLeft: 16,
    },
});

export default styles