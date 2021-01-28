import React, { Fragment } from 'react';
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, Keyboard } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';
import { heightPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { handlePasswordChange } from '../../SignUpScreen/Components/optionsFunction';

const BookmarkScreen = (param) => {


  const _keyboardDidShow = () => {
    alert("Keyboard Shown");
  };

  const _keyboardDidHide = () => {
    alert("Keyboard Hidden");
  };


  return (
    <Fragment>

      <KeyboardAvoidingView style={{ flex: 1 }} keyboardVerticalOffset={12} behavior={'position'} >
        <Dialog
          onTouchOutside={() => {
            Keyboard.dismiss()
            //param.setVisible(false)
          }}
          width={0.9}
          visible={param.visible}
          dialogAnimation={new ScaleAnimation()}

          dialogTitle={
            // <DialogTitle
            //   title="Envoyer un message aux participants"
            //   hasTitleBar={true}
            // />
            <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <Text></Text>
              </View>
              <View style={{width:wp('80%')}}>
                <Text style={{  fontSize: 18, textAlign: 'center', marginLeft: 15, fontWeight: '700' }}>Envoyer un message aux participants</Text>
              </View>
              <TouchableOpacity style={{marginRight: 10 }}  onPress={() => {
                param.setVisible(false)
              }}>
                <Icon name='close' size={22} />
              </TouchableOpacity>
            </View>

          }
          actions={[
            <DialogButton
              text="DISMISS"
              onPress={() => {
                param.setVisible(false)
              }}
              key="button-1"
            />,
          ]}
        >
          <DialogContent>
            <ScrollView keyboardShouldPersistTaps={'never'} scrollEnabled={false}>
              <View style={{ minHeight: heightPercentageToDP('8%'), borderRadius: 12, backgroundColor: 'grey', padding: Platform.OS == 'ios' ? 8 : 0 }}>
                <TextInput autoFocus style={{ color: 'white' }} multiline />
              </View>

              <TouchableOpacity style={{ borderRadius: 8, backgroundColor: 'lightskyblue', marginTop: 20, alignSelf: 'center', justifyContent: 'center', marginHorizontal: 90 }}>
                <Text style={{ width: wp('27%'), textAlign: 'center', paddingVertical: heightPercentageToDP('1.8%'), borderRadius: 8, color: 'white' }}>Envoyer</Text>
              </TouchableOpacity>
            </ScrollView>
          </DialogContent>
        </Dialog>
      </KeyboardAvoidingView>

    </Fragment>
  );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
