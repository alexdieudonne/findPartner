import React from 'react';
import { View, Text, TouchableOpacity,Button,StatusBar,Dimensions, Platform } from 'react-native';
import styles from './Components/styles'
import HeaderScrollView from '../../components/utils/header';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
Feather
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Circle';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-tiny-toast'
import RBSheet from "react-native-raw-bottom-sheet";
import Setting from './Components/SettingsScreen'

const AccountScreen = ({ navigation }) => {
    const [subscribe, setSubscribe] = React.useState(false)

   
        const [size, setSize] = React.useState({width:0,height:hp(28)});
        const onLayout = React.useCallback(event => {
          const { width, height } = event.nativeEvent.layout;
          //@ts-ignore
          setSize({ width, height });
        }, []);


        //subscribe

        function subscribed (){
            setSubscribe(!subscribe)
            if(subscribe == false){
                Toast.showSuccess('Invitation envoyée')
            }else{
             
                Toast.show('Invitation annulée')
            }
            

        }

        //modal
        let refRBSheet = React.useRef();
        
        const onOpen=()=>{
            Platform.OS == "android"? StatusBar.setHidden(true): null
           //@ts-ignore
          refRBSheet.current.open()
        }

        const onClose=()=>{
            Platform.OS == "android"? StatusBar.setHidden(false): null
           //@ts-ignore
          refRBSheet.current.close()
        }
   
        function truncate(source: string, size: number) {
            return source.length > size ? source.slice(0, size - 1) + "…" : source;
        }
    return (
        <>
        <HeaderScrollView navigationWhere={''} onPress={()=>onOpen()} titleStyle={{fontSize:hp('3%')}} backButton={false} nextButton title={"Alex Dieudonne gfcgccdxxffddf"} navigation={navigation}>
            <View 
            //onLayout={(event)=>setLayout({height:event.nativeEvent.layout.height ,width:event.nativeEvent.layout.width})}
            >
                {/* <Text>Profile Screen</Text> */}
               
                <View 
                 style={styles.topPartProfile}>
                    <View style={[styles.imageProfil,{height:50}]}>
                        <Image indicator={ProgressBar} indicatorProps={{
                            size: 40,
                            borderWidth: 1,
                           // width: wp('43%'),
                           // marginBottom: hp('27%'),
                            color: 'rgba(150, 150, 150, 1)',
                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                        }} imageStyle={[styles.imageStyle,{height:size.height}]} source={{ uri: 'https://images.freeimages.com/images/large-previews/ddb/corn-field-2-1368926.jpg' }} />
                    </View>
                    <View 
                     onLayout={onLayout}
                    style={styles.informationsProfile}>
                        <View style={styles.description}>
                            <Text style={styles.descriptionText}>
                                Je suis un youtuber amateur
                                qui cherche un coéquipier
                                sdsdvcttcrt
                                ghvvgcnkjnk
                                j jhbhjbbjhbjh
                                fhvcfgccgcfc
                                
                        </Text>
                        </View>
                        <View  
                        >
                            <Text style={styles.categoryText}>
                                    Youtuber
                            </Text>
                        </View>
                        
                        <View
                         style={styles.locationView}>
                            <Icon name='ios-location-sharp' size={hp('2%') } color={'grey'} style={{ marginTop: -2 }} />
                            <Text style={styles.locationText}>
                                Paris, France
                            </Text>
                        </View>
                        <View
                         style={styles.emailView}>
                            <Icon name='mail' size={hp('2%')} color={'grey'} />
                            <Text style={styles.emailText}>
                                Alexdieudonne02@gmail.com
                            </Text>
                        </View>
                        <View
                         style={styles.socialIcons}>
                            <TouchableOpacity activeOpacity={0.6}>
                                <Icon name="logo-facebook" color='lightskyblue' size={wp('5%')} style={{ marginHorizontal: 7 }} />
                            </TouchableOpacity >
                            <TouchableOpacity activeOpacity={0.6}>
                                <Icon name="logo-twitter" color='lightskyblue' size={wp('5%')} style={{ marginHorizontal: 7 }} />
                            </TouchableOpacity >
                            <TouchableOpacity activeOpacity={0.6}>
                                <Icon name="logo-instagram" color='lightskyblue' size={wp('5%')} style={{ marginHorizontal: 7 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>
                <View style={styles.secondPart}>
                        <View style={styles.subscribeButton}>
                            <TouchableOpacity style={styles.buttonLeft} onPress={()=>subscribed()}>
                                {subscribe? <Feather name='user-minus' size={wp('5%')} color='lightskyblue'/>:
                                <Feather name='user-plus' size={wp('5%')} color='lightskyblue'/>}
                            </TouchableOpacity>
                            <View style={{ borderLeftWidth:0.7,borderColor:'lightskyblue'}}/>
                            <TouchableOpacity style={styles.buttonRight}>
                                <Icon name="ios-radio-outline" size={wp('5%')} color='lightskyblue'/>
                            </TouchableOpacity>
                        </View>
                </View>


                <View style={{borderTopWidth:0.4,marginTop:5, borderColor:'grey', width:"90%", alignSelf:'center'}}/>
                <View  style={styles.followersInfosView}>
                        <View style={styles.postView}>
                            <Text style={styles.postNumber}>38</Text>
                            <Text style={styles.postText}>POSTS</Text>
                        </View>
                        <View style={styles.followersView}>
                            <Text style={styles.postNumber}>2,3K</Text>
                            <Text style={styles.postText}>FOLLOWERS</Text>
                        </View>
                        <View style={styles.friendView}>
                            <Text style={styles.postNumber}>200</Text>
                            <Text style={styles.postText}>AMIS</Text>
                        </View>
                </View>
                <View style={{borderTopWidth:0.4, borderColor:'grey', width:"90%", alignSelf:'center'}}/>

                <View style={styles.ProjectsAndPhotos}>
                    <View style={styles.projectsView}>
                        <Text style={styles.allPostsText}>Tout les postes</Text>
                        <TouchableOpacity onPress={()=>navigation.push('PostsScreen')} activeOpacity={0.5}>
                            <Text style={styles.seeMoreText}>Voir plus</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal style={styles.horizontalStyle}>
                            <View style={styles.viewImage}>
                                <View style={styles.imagePostStyle}>
                                    <Image
                                            indicator={ProgressBar} indicatorProps={{
                                                size: 40,
                                                borderWidth: 1,
                                            // width: Dimensions.get('window').width,
                                            // marginTop: hp('27%'),
                                                color: 'rgba(150, 150, 150, 1)',
                                                unfilledColor: 'rgba(200, 200, 200, 0.2)'
                                            }} imageStyle={[styles.projectImage]} source={{ uri: 'https://images.freeimages.com/images/large-previews/ddb/corn-field-2-1368926.jpg' }}
                                        />
                                    </View>
                                    <View style={styles.infoPhoto}>
                                        <Text>{truncate('sdssdfsd wxcwcwxcxwcw wxcwxcwcxwx', hp('3%'))}</Text>
                                    </View>
                            </View>
                    </ScrollView>
                    <View style={[styles.projectsView,{marginTop:10}]}>
                        <Text style={styles.allPostsText}>Tout les projets</Text>
                        <TouchableOpacity  activeOpacity={0.5}>
                            <Text style={styles.seeMoreText}>Voir plus</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal style={styles.scrollCardStyle}>
                        <View style={styles.cardProject}>
                            <View style={styles.viewImageProject}>
                                    <Image
                                        indicator={ProgressBar} indicatorProps={{
                                        size: 40,
                                        borderWidth: 1,
                                        color: 'rgba(150, 150, 150, 1)',
                                        unfilledColor: 'rgba(200, 200, 200, 0.2)'
                                        }} imageStyle={[styles.projectImageReal]} source={{ uri: 'https://images.freeimages.com/images/large-previews/ddb/corn-field-2-1368926.jpg' }}
                                    />
                            </View>
                            <View style={styles.titleProject}>
                                <Text style={styles.titleText}>Création d'un groupe musical</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View> 
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#000"
                    }}
                    >
                    <RBSheet
                        //@ts-ignore
                        ref={refRBSheet}
                        closeOnDragDown={true}
                        closeOnPressMask={true}
                       // dragFromTopOnly={true}
                        onClose={()=> Platform.OS == "android"? StatusBar.setHidden(false): null}
                        height={Dimensions.get('screen').height/1.3}
                        customStyles={{
                        wrapper: {
                            //backgroundColor: "transparent",
                            height:40
                        },
                        container:{
                            borderTopRightRadius:12,
                            borderTopLeftRadius:12,
                          
                        },
                        draggableIcon: {
                            backgroundColor: "grey",
                      
                            marginBottom:18
                           // position:'absolute',
                        }
                        }}
                    >
                        <Setting onClose={onClose} navigation={navigation}/>
                    </RBSheet>
                </View>
            </View>

        </HeaderScrollView>
        
        </>
    );
};

export default AccountScreen;


