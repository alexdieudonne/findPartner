import React, { Fragment } from 'react';
import { View, Text, Button, StyleSheet, StatusBar, Image, SafeAreaView, Animated, Dimensions, Platform } from 'react-native';
import { styles } from './Components/styles'
import { useTheme } from '@react-navigation/native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { setCustomText } from 'react-native-global-props';
import { config2Spec, height } from './Components/config2Spec';
import Carousel from 'react-native-snap-carousel';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { SharedElement } from 'react-navigation-shared-element';
import { handlePasswordChange } from '../SignUpScreen/Components/optionsFunction';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
// import { useSelector, useDispatch } from 'react-redux'
// import { addParams, deleteParams } from '../../redux/manageParam'



const { HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT, PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT, ITEM_WIDTH, ITEM_HEIGHT, RADIUS, SPACING, FULL_SIZE,
  PROFILE_NOTIFICATION_MAX_PADDING, PROFILE_NOTIFICATION_MIN_PADDING } = config2Spec

const HomeScreen = ({ navigation }) => {
  const customTextProps = {
    style: {
      fontFamily: 'Roboto-Regular'
    }
  }
  setCustomText(customTextProps);
  const { colors } = useTheme();

  const theme = useTheme();

  //redux
  // const dispatch = useDispatch()
  // const addparam = (param: any) => dispatch(addParams(param))
  // const deleteparam = (id: number) => dispatch(deleteParams(id))


  const allDomain = [{ imgUri: require('../../../assets/images/music.png'), domainName: 'Musique' }, { imgUri: require('../../../assets/images/education.png'), domainName: 'Éducation' }, { imgUri: require('../../../assets/images/jobs.png'), domainName: 'Jobs' }, { imgUri: require('../../../assets/images/videographie.png'), domainName: 'Vidéographie' }, { imgUri: require('../../../assets/images/photographie.png'), domainName: 'Photographie' }, { imgUri: require('../../../assets/images/plus1.png'), domainName: 'Plus' }]
  const profils = [{ nameProfil: 'Lea Arland', categoryUser: 'musicien', typeUser: 'Amateur' }, { nameProfil: 'Bernard Boulot', categoryUser: 'musicien', typeUser: 'Amateur' }, { nameProfil: 'Maria Sebastine', categoryUser: 'nageuse', typeUser: 'Amateur' }, { nameProfil: 'Bernard Boulot', categoryUser: 'musicien', typeUser: 'Amateur' }, { nameProfil: 'Barlo Christine', categoryUser: 'nageuse', typeUser: 'Amateur' }, { nameProfil: 'Bernard Boulot', categoryUser: 'musicien', typeUser: 'Amateur' }, { nameProfil: '' },]
  const projects = [{ imageUri: 'https://images.freeimages.com/images/large-previews/ddb/corn-field-2-1368926.jpg', tittleProject: 'Création d’un groupe musical', descriptionProject: 'At enim hic etiam dolore. Hi curatione adhibita levantur in dies, valet alter plus cotidie, alter e laudat? ' }, { imageUri: 'https://images.freeimages.com/images/large-previews/977/beach-1364350.jpg', tittleProject: 'Cherche un nouveau poto', descriptionProject: 'At enim hic etiam dolore. Hi curatione adhibita levantur in dies, valet alter plus cotidie, alter e laudat? ' }, { imageUri: 'https://images.freeimages.com/images/large-previews/977/beach-1364350.jpg', tittleProject: "Création d'une nouvelle chaine youtube", descriptionProject: 'At enim hic etiam dolore. Hi curatione adhibita levantur in dies, valet alter plus cotidie, alter e laudat? ' }]
  const scrollX = React.useRef(new Animated.Value(0)).current
  const scrollY = new Animated.Value(0)

  const _renderItem = () => {
    return (
      <View style={styles.projectsView}>
        <View style={styles.imageProjectView}>
          <Image style={styles.imageProject} resizeMode='contain' source={{ uri: '' }} />
        </View>
        <View style={styles.bottomPartProject}>
          <Text style={styles.tittleProject}>Création d’un groupe musical</Text>
          <View style={styles.descriptionProjectView}>
            <Text style={styles.descriptionProject}>DESCRIPTION : lqqsdsqqs dqsssdqs </Text>
          </View>
          <Text style={styles.descriptionProject}>lqqsdsqqs dqsssdqs dqsd qsdqsdqs dqsdqs dqsdqsdq dssdsdds sdsdfdfsd dfsdfsdf sdfsfd</Text>
        </View>
      </View>
    );
  }

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp'
  })

  const profileImageHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
    extrapolate: 'clamp'
  })

  const profileNotification = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [PROFILE_NOTIFICATION_MAX_PADDING, PROFILE_NOTIFICATION_MIN_PADDING],
    extrapolate: 'clamp'
  })

  const headerFixView = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [ifIphoneX(0, -20), ifIphoneX(-22, -34)],
    extrapolate: 'clamp'
  })
  const notifMove = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [ifIphoneX(0, 12), ifIphoneX(23, 28)],
    extrapolate: 'clamp'
  })

  return (
    <Fragment>
      {/* <SafeAreaView style={styles.pageContainer} /> */}
      <Animated.View style={[styles.header, { height: headerHeight }]} />
      {/* @ts-ignore */}
      <Animated.View style={{ flexDirection: 'row', height: ifIphoneX(null, 55), justifyContent: 'space-between', marginTop: ifIphoneX(30, 0), marginBottom: 5, transform: [{ translateY: headerFixView }] }}>
        <Animated.View style={[styles.helloTextView,]}>
          <Text style={styles.helloText}>Hello </Text><Text style={styles.helloName}>Alex</Text>
        </Animated.View>

        <Animated.View style={[styles.profilPictureView, { transform: [{ translateY: notifMove }] }]}>
          <Animated.View style={[styles.profilPicture, { height: profileImageHeight, width: profileImageHeight }]}>
            <Animated.Image style={{ flex: 1, borderRadius: 16, marginTop: 10, marginRight: 10 }} source={{ uri: 'https://resize-elle.ladmedia.fr/r/625,,forcex/crop/625,437,center-middle,forcex,ffffff/img/var/plain_site/storage/images/loisirs/high-tech/news/facebook-transformez-votre-photo-de-profil-en-emoticone-2677225/46484308-1-fre-FR/Facebook-transformez-votre-photo-de-profil-en-emoticone.jpg' }} />
          </Animated.View>
          <Animated.View style={[styles.notifications, { height: profileNotification, width: profileNotification }]}>
            <Text style={[styles.notificationsText]}>2</Text>
          </Animated.View>
        </Animated.View>
      </Animated.View>

      <ScrollView scrollEventThrottle={8} onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }]
        , { useNativeDriver: false })} showsVerticalScrollIndicator={false} >
        <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} backgroundColor={'white'} />
        <View style={styles.helloView}>
          <View style={styles.messagesOrAlerts}>
            <Text style={styles.youGot}>Vous Avez</Text>
            <Text style={styles.youGotMessagesOrAlert}>4 nouvelles notifications</Text>
          </View>


        </View>
        <View style={styles.domainView}>
          <View style={styles.topPartDomainView}>
            <View style={styles.topPartDomain}>
              <Text style={styles.tittleText}>Domaines</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Domaines')}>
                <Text style={styles.defaultText}>Voir plus</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.domainText}>Tout les domaines</Text>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 10 }} horizontal style={styles.domainCard} showsHorizontalScrollIndicator={false}>
              {allDomain.map((value, key) => (
                <View key={key}>
                  {console.log(key == allDomain.length - 1)}
                  <TouchableOpacity onPress={() => key == allDomain.length - 1 ? navigation.push('Domaines') : navigation.push('DomainsDetails', { params: {value, index:key} })} activeOpacity={0.7} style={styles.domanCardContent} key={key}>
                    <SharedElement id={`item.${key}.image`} style={{marginTop:10}}>
                      <Image style={{ height: heightPercentageToDP('7%'), width: widthPercentageToDP("18%"), alignSelf: 'center' }} resizeMode='contain' source={value.imgUri} />
                    </SharedElement>
                    <Text style={styles.domainCardText}>{value.domainName}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>

        <View style={styles.domainView}>
          <View style={styles.topPartDomainView}>
            <View style={styles.topPartDomain}>
              <Text style={styles.tittleText}>Recommandations</Text>
              <TouchableOpacity>
                <Text style={styles.defaultText}>Voir plus</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.domainText}>Profils recommandés</Text>
            </View>


            <Animated.FlatList
              data={profils}
              onScroll={Animated.event([
                {
                  nativeEvent: { contentOffset: { x: scrollX } }
                }
              ], { useNativeDriver: true })}
              showsHorizontalScrollIndicator={false}
              horizontal
              style={styles.domainCard}
              snapToInterval={FULL_SIZE}
              decelerationRate='fast'
              contentContainerStyle={{ paddingBottom: 10 }}
              snapToAlignment={"start"}
              pagingEnabled
              // keyExtractor={(item, key) => key}
              renderItem={({ item, index }) => {
                var len = profils.length;
                //console.log ('index', index, len)
                const inputRange = [(index - 2) * ITEM_WIDTH, index * ITEM_WIDTH, (index + 4) * ITEM_HEIGHT]
                const translateX = scrollX.interpolate({
                  inputRange,
                  outputRange: [
                    ITEM_HEIGHT + FULL_SIZE, 0, - 20
                  ]
                })

                const translateText = scrollX.interpolate({
                  inputRange: [(index - 4) * ITEM_WIDTH, (index) * ITEM_WIDTH, (index + 1) * ITEM_HEIGHT + 2],
                  outputRange: [
                    ITEM_WIDTH + FULL_SIZE, -30, 0
                  ]
                })

                const scale = scrollX.interpolate({
                  inputRange,
                  outputRange: [
                    1, 1.2, 0
                  ]
                })
                return (
                  <View style={styles.containerCardProfil} key={index}>
                    <View style={[StyleSheet.absoluteFillObject, styles.recommended, { overflow: 'hidden', borderRadius: 10, marginRight: 8 }]}>
                      <Animated.Image style={[StyleSheet.absoluteFillObject, {
                        height: 260, width: 260, alignSelf: 'center',
                        borderRadius: 10, resizeMode: 'cover',
                        transform: [{ scale }]
                      }]} source={require('../../../assets/images/alex.jpg')} />
                      <Animated.View style={[StyleSheet.absoluteFillObject, styles.recomendedOverlay, { height: 260, width: 260, transform: [{ scale }] }]} />
                    </View>
                    <View style={[styles.addButtonView, { display: index == profils.length - 1 ? 'none' : 'flex' }]}>
                      <TouchableOpacity activeOpacity={0.3}>
                        <Image height={10} width={20} resizeMode={"contain"} source={require('../../../assets/images/add.png')} />
                      </TouchableOpacity>
                    </View>

                    <Animated.Text style={[styles.nameRecommanded,
                    {
                      transform: [
                        { translateX }
                      ]
                    }]}>{item.nameProfil}</Animated.Text>
                    <Animated.Text style={[styles.seeMoreRecommanded, {
                      display: index == profils.length - 1 ? 'flex' : 'none', transform: [
                        { translateX: translateText }
                      ]
                    }]}>Voir plus</Animated.Text>
                    <View style={styles.bottomRecomended}>
                      <Text style={styles.typeRecommended}>{item.categoryUser ? item.categoryUser : ''}</Text>
                      <Text style={styles.capacityRecommended}>{item.typeUser ? item.typeUser : ''}</Text>
                    </View>
                  </View>)
              }}
            />
          </View>
        </View>
        <View style={styles.bottomPart}>
          <View style={styles.topPartDomain}>
            <Text style={styles.tittleText}>Projets</Text>
            <TouchableOpacity onPress={()=>navigation.push('DomainsDetails')}>
              <Text style={styles.defaultText}>Voir plus</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.domainText}>Les différents projets</Text>
          </View>
          <View style={{flex:1, justifyContent:"center", alignContent:'center'}}>
            <Carousel
              layout={'default'}
              layoutCardOffset={9}
              data={projects}
              sliderWidth={Dimensions.get('screen').width}
              itemHeight={700}
              sliderHeight={1300}
              
              style={{ marginLeft: 10, alignSelf:'center'  }}
              itemWidth={Platform.OS=="ios"? Dimensions.get('screen').width - 90: 310}
              slideStyle={{ padding: 10, marginBottom: 10, marginLeft:-20,marginHorizontal: Platform.OS == 'android'? 20:0}}
              renderItem={_renderItem} />
          </View>
          {/* <_renderItem /> */}
          {/* <FlatList
              horizontal
              data={projects}
              renderItem={({ item, index }) => {
                return (
                  <View style={styles.projectsView}>
                    <View style={styles.imageProjectView}>
                      <Image style={styles.imageProject} resizeMode='contain' source={{ uri: '' }} />
                    </View>
                    <View style={styles.bottomPartProject}>
                      <Text style={styles.tittleProject}></Text>
                      <View style={styles.descriptionProjectView}>
                        <Text style={styles.messageLabelProject}></Text>
                        <Text style={styles.descriptionProject}></Text>
                      </View>
                    </View>
                  </View>
                )
              }}
            /> */}

        </View>
      </ScrollView>
    </Fragment>
  );
};

export default HomeScreen;

