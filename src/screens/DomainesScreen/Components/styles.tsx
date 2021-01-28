
import { StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  //card
  cardView: {
    paddingVertical: 20,
  },
  domainCard: {
    
    // paddingLeft: 12
},
domanCardContent: {
    marginTop: 10,
    justifyContent: "space-between",
    marginHorizontal: 12,

    padding: 28,
    paddingVertical:30,
    marginBottom: 19,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",

    alignContent: 'center'
},
domainCardText: {
    alignSelf: "center",
    fontSize: 16
},
});

export default styles