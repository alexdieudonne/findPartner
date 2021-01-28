
import { Platform, StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center', 
    // justifyContent: 'center'
  },
  wrapper: {
  // height: hp('40%'),
    //width:wp('22%')
  },
  slide1: {
    flex: 1,
   // height:hp('80%'),
  // height:hp("80%"),
   // alignItems: 'center',
    width: wp('82%'),
   // paddingTop:10,
    margin: 10,
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 10,

    
    
  },
  slide2: {
    flex: 1,
    //height:hp('12%'),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginVertical: 9,
    width: wp('82%'),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide3: {
    flex: 1,
    //height:hp('19%'),
    
    marginVertical: 9,
    paddingTop:1,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
   
  },
  image: {
    width: wp('82%'),
    height:wp("55%"),
    
    borderRadius:12,
    shadowColor: "#000",
    marginVertical:1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
   // marginVertical: 9,
    elevation: 5,
    //width: '100%',
    flex: 1,
  },
  dotStyle: {
    top: 52
  },

  //bottom cardView
  bottomView: {
    width: wp('80%'),
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderWidth:0.5,
    padding: wp("4%"),
    minHeight: hp('42%'),
    borderRadius: 12,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.20,
    shadowRadius: 1.41,
    borderColor:'lightskyblue',
    // elevation: 2,
    marginBottom: 12
  },
  title: {
    fontSize: hp('2.4%'),
    fontWeight: '700'
  },
  locationAndCategory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: wp('4%'),

  },
  location: {
    flexDirection: 'row',
  },
  locationText: {
    color: 'grey',
    fontSize: hp("1.8%"),
    marginTop: 2,
    marginLeft:2
  },
  category: {
    color: 'grey',
    marginTop: 3,
    fontSize: hp("1.8%"),
  },
  separator:{
    borderWidth:0.5,
        marginVertical:11,
        borderColor:'grey'
  },
  participants: {

  }
});

export default styles