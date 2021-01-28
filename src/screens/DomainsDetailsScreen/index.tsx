import React, { Fragment, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Animated, FlatList, Image, Platform, TouchableOpacity, TouchableNativeFeedback, StatusBar, Dimensions } from 'react-native';

import { NavigationEvents, SafeAreaView } from 'react-navigation';
import { SharedElement } from 'react-navigation-shared-element';
import styles from './Components/styles'
import Icon from 'react-native-vector-icons/Ionicons';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import ModernHeader from "react-native-modern-header";
import Swiper from 'react-native-deck-swiper';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { BoxShadow } from 'react-native-shadow'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TouchableScale from 'react-native-touchable-scale';
import ProgressBar from 'react-native-progress/Circle';
import Image1 from 'react-native-image-progress';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux'
import { addParams, deleteParams } from '../../redux/manageParam'
import {
    MaterialIndicator,
    UIActivityIndicator,
} from 'react-native-indicators';

import { width } from '../HomeScreen/Components/config2Spec';
import Modal from './Components/Modal';



const allDomain = [{ id: 1, imgUri: require('../../../assets/images/music.png'), domainName: 'Musique' },
{ id: 2, imgUri: require('../../../assets/images/education.png'), domainName: 'Éducation' }, { id: 3, imgUri: require('../../../assets/images/jobs.png'), domainName: 'Jobs' }, { id: 4, imgUri: require('../../../assets/images/videographie.png'), domainName: 'Vidéographie' }, { id: 5, imgUri: require('../../../assets/images/photographie.png'), domainName: 'Photographie' }, { id: 6, imgUri: require('../../../assets/images/plus1.png'), domainName: 'Autre' }]


const projects = [
    { imageUri: 'https://images.freeimages.com/images/large-previews/ddb/corn-field-2-1368926.jpg', tittleProject: 'Création d’un groupe musica', descriptionProject: "C'est vraiment bon et pas mal dans le fond." },
    { imageUri: 'https://images.freeimages.com/images/large-previews/977/beach-1364350.jpg', tittleProject: 'Cherche un nouveau poto', descriptionProject: 'At enim hic etiam dolore. Hi curatione adhibita levantur in dies, valet alter plus ? ' },
    { imageUri: 'https://images.freeimages.com/images/large-previews/977/beach-1364350.jpg', tittleProject: "Création d'une nouvelle chaine youtube", descriptionProject: 'At enim hic etiam dolore. Hi curatione adhibita levantur in dies, valet alte ' },
    { imageUri: 'https://images.freeimages.com/images/large-previews/ddb/corn-field-2-1368926.jpg', tittleProject: 'Création d’un groupe musical', descriptionProject: 'At enim hic etiam dolore. Hi curatione adhibita levantur in dies, valet alter plus cotidie, alter e laudat? ' },
    { imageUri: 'https://images.freeimages.com/images/large-previews/ddb/corn-field-2-1368926.jpg', tittleProject: 'Création d’un groupe musical', descriptionProject: 'At enim hic etiam dolore. Hi curatione adhibita levantur in dies, valet alter plus cotidie, alter e laudat? ' },
    { imageUri: 'https://images.freeimages.com/images/large-previews/ddb/corn-field-2-1368926.jpg', tittleProject: 'Création d’un groupe musical', descriptionProject: 'At enim hic etiam dolore. Hi curatione adhibita levantur in dies, valet alter plus cotidie, alter e laudat? ' },
    { imageUri: 'https://images.freeimages.com/images/large-previews/ddb/corn-field-2-1368926.jpg', tittleProject: 'Création d’un groupe musical', descriptionProject: 'At enim hic etiam dolore. Hi curatione adhibita levantur in dies, valet alter plus cotidie, alter e laudat? ' },
    { imageUri: 'https://images.freeimages.com/images/large-previews/ddb/corn-field-2-1368926.jpg', tittleProject: 'Création d’un groupe musical', descriptionProject: 'At enim hic etiam dolore. Hi curatione adhibita levantur in dies, valet alter plus cotidie, alter e laudat? ' },
    { imageUri: 'https://images.freeimages.com/images/large-previews/ddb/corn-field-2-1368926.jpg', tittleProject: 'Création d’un groupe musical', descriptionProject: 'At enim hic etiam dolore. Hi curatione adhibita levantur in dies, valet alter plus cotidie, alter e laudat? ' },]



const DomainsDetailsScreen = ({ navigation, route }) => {
    var [check, setCheck] = React.useState('any')
    const [loading, setLoading] = React.useState(false)
    const [allSwiped, setAllSwiped] = React.useState(false)



    function navigate(card: any, i: number) {
        // setId(i)
        navigation.push('ProjectsInfos', { card: card, index: i })
    }

    //redux
    const dispatch = useDispatch()
    const allParam = useSelector((state: any) => state)

    //console.log(allParam.manageParam)

    // visible modable 
    const [visible, setVisible] = React.useState(false);

    const reference = React.useRef()
    var par = route.params
    const params = par == undefined ? projects[0] : par.params

    var flatListRef: any = React.createRef();

    const [selectedId, setSelectedId] = React.useState(1);
    const [tittle, setSetitle] = React.useState('');
    const selectedItem = allDomain.findIndex((i, k) => k === params.id)
    const mountedAnimated = React.useRef(new Animated.Value(0)).current
    const activeIndex = React.useRef(new Animated.Value(selectedItem)).current
    const activeIndexAnimated = React.useRef(new Animated.Value(selectedItem)).current
    const translateY = mountedAnimated.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 0]
    })


    const animation = (toValue: number, delay: number) => (
        Animated.timing(mountedAnimated, {
            toValue,
            duration: 500,
            delay,
            useNativeDriver: true
        })
    )

    useEffect(() => {
        const id = route.params ? route.params.params.index : 0
        // let wait = new Promise((resolve) => setTimeout(resolve, 500));  // Smaller number should work
        move(id + 1)

        Animated.parallel([
            Animated.timing(activeIndexAnimated, {
                toValue: activeIndex,
                duration: 300,
                useNativeDriver: true
            }),
            animation(1, 500),
        ]).start()
    }, [])
    function moveScreen() {
        setCheck('poule')
        navigation.push('PostProject')
        //PostProject

    }

    function truncate(source: string, size: number) {
        return source.length > size ? source.slice(0, size - 1) + "…" : source;
    }
    const [pressed, setSetPressed] = React.useState(0);
    const [interva, setinterva] = React.useState(false);


    function swipe(where: string) {
        if (interva == false) {
            setinterva(true)
            var interval = setTimeout(() => {
                setSetPressed(0)
                clearTimeout(interval)
                setinterva(false)
            }, 4000)
        }
        setSetPressed(pressed + 1)
        if (pressed > 5) {
            setAllSwiped(true)
            alert('pressed is more than 5 relax')

            setTimeout(() => {
                setSetPressed(0)
                alert('you can now swipe')
                clearTimeout(interval)
                setAllSwiped(false)
            }, 19000)
        }
        if(where == 'right'){
            setVisible(true)
        }
        
        //console.log(pressed)
        if (where == 'left' && allSwiped == false) {
            //@ts-ignore
            reference.current.swipeLeft()
        } else if (where == 'right' && allSwiped == false) {
            //@ts-ignore
            reference.current.swipeRight()
        }

    }

    const scrollToIndex = (id: number) => {
        flatListRef.scrollToIndex({ animated: true, index: id - 1 });
    }

    const move = (id: number) => {
        setLoading(true)
        setAllSwiped(false)
        if (id != 22 && loading == false) {
            allDomain.map((k, i) => {
                if (id - 1 == i) {
                    setSetitle(k.domainName)
                }
            })

            animation(0, 2500).start(() => {
                setLoading(false)
                Animated.parallel([
                    Animated.timing(activeIndexAnimated, {
                        toValue: activeIndex,
                        duration: 300,
                        useNativeDriver: true
                    }),
                    animation(1, 200),
                ]).start()
            })
            setSelectedId(id)
            scrollToIndex(id)
        }
    }

    return (
        <View style={{ flex: 1 }}>
            {/* @ts-ignore */}
            <SafeAreaView style={{ elevation: 12, zIndex: 1000, backgroundColor: Platform.OS == 'ios' ? 'white' : null }}>
                <ModernHeader
                    title={tittle}
                    //style={{ top: 5553 }}
                    titleStyle={{

                        fontSize: 19,
                        lineHeight: 22,
                        fontWeight: '700',
                        //top: 5999,
                        letterSpacing: 0.019,
                        zIndex: 1000,
                        elevation: 12,

                    }}
                    rightIconColor={'black'}
                    rightIconName={'ios-add'}
                    rightIconComponent={<Icon name="md-add-outline" color={'black'} size={28} backgroundColor="#fff"  ></Icon>}
                    rightIconOnPress={() => moveScreen()}
                    leftIconOnPress={() => animation(0, 0).start(() => {
                        navigation.goBack()
                    })}
                    leftIconColor={'black'}
                    leftIconName={'chevron-back'}
                    backgroundColor={'white'}
                />
            </SafeAreaView >


            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />


            <View style={styles.bodyView}>
                <FlatList
                    style={styles.domainView}
                    horizontal

                    initialScrollIndex={selectedId - 1}
                    extraData={selectedId}
                    ref={(ref) => { flatListRef = ref }}
                    showsHorizontalScrollIndicator={false}
                    // pagingEnabled
                    //initialScrollIndex={selectedItem}
                    getItemLayout={(data, index) => ({
                        length: wp('30%'),
                        offset: wp('30%') * index,
                        index
                    })}
                    data={allDomain}
                    renderItem={({ item, index }) => {
                        const inputRange = [(index - 1) * wp('12%'), index * wp('12%'), (index + 1) * wp('12%')]
                        // const opacity = activeIndexAnimated.interpolate({
                        //     inputRange,
                        //     outputRange: [0.3, 1, 0.3],
                        //     extrapolate: 'clamp'
                        // })
                        const opacity = item.id === selectedId ? 1 : 0.3;
                        return (
                            <>{check == 'any' ?
                                <TouchableOpacity onPress={() => {
                                    // activeIndexAnimated.setValue(index)
                                    move(index + 1)
                                }} activeOpacity={0.8} style={styles.domanCardContent} key={index}>
                                    <Animated.View style={{ opacity }}>
                                        <SharedElement id={`item.${index}.image`}>
                                            <Image style={{ height: wp('9%'), width: 70, alignSelf: 'center' }} resizeMode='contain' source={item.imgUri} />
                                        </SharedElement>
                                        <SharedElement id={`item.${index}.name`}>
                                            <Text style={styles.domainCardText}>{item.domainName}</Text>
                                        </SharedElement>
                                    </Animated.View>
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={() => {
                                    move(index + 1)
                                }} activeOpacity={0.8} style={styles.domanCardContent} key={index}>
                                    <Animated.View style={{ opacity }}>
                                        <Image style={{ height: wp('9%'), width: 70, alignSelf: 'center' }} resizeMode='contain' source={item.imgUri} />

                                        <Text style={styles.domainCardText}>{item.domainName}</Text>
                                    </Animated.View>
                                </TouchableOpacity>}</>
                        )
                    }} />




                <Animated.View style={[styles.container, { opacity: mountedAnimated, transform: [{ translateY }] }]}>
                    {!loading ?
                        <Swiper
                            //@ts-ignore
                            ref={reference}
                            infinite
                            animateCardOpacity
                            disableBottomSwipe
                            disableTopSwipe
                            overlayLabelStyle={styles.overlayLabel}
                            containerStyle={{ backgroundColor: "white",  minHeight:hp('12%') }}
                            cards={projects}
                            overlayLabels={{
                                left: {
                                    element: <View style={{ padding: 10, borderRadius: 8, backgroundColor: 'red' }}><Text style={{ color: 'white', }}>PAS POUR MOI</Text></View>,
                                    title: 'NOPE',
                                    style: {
                                        label: {
                                            backgroundColor: 'black',
                                            borderColor: 'black',
                                            color: 'white',
                                            borderWidth: 1
                                        },
                                        wrapper: {
                                            flexDirection: 'column',
                                            alignItems: 'flex-end',
                                            justifyContent: 'flex-start',
                                            marginTop: 30,
                                            marginLeft: -30
                                        }
                                    }
                                },
                                right: {
                                    element: <View style={{ padding: 10, borderRadius: 8, backgroundColor: 'green' }}><Text style={{ color: 'white', }}>J'AIME BIEN</Text></View>, /* Optional */
                                    title: "J'AIME BIEN",
                                    style: {
                                        label: {
                                            backgroundColor: 'black',
                                            borderColor: 'black',
                                            color: 'white',
                                            borderWidth: 1
                                        },
                                        wrapper: {
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            marginTop: 30,
                                            marginLeft: 30
                                        }
                                    }
                                },
                            }}
                            renderCard={(card, i) => {
                                //  console.log(i)
                                return (
                                    <TouchableScale onPress={() => navigate(card, i)} activeScale={1} style={styles.swipeableCard}>
                                        <View>
                                            <View style={styles.projectsView}>

                                                <SharedElement id={`item.${i}.photo`} style={styles.imageProjectView}>
                                                    <Image1 indicator={ProgressBar} indicatorProps={{
                                                        size: 40,
                                                        borderWidth: 1,
                                                        height: hp('10%'),
                                                        marginTop: hp('27%'),
                                                        color: 'rgba(150, 150, 150, 1)',
                                                        unfilledColor: 'rgba(200, 200, 200, 0.2)'
                                                    }} imageStyle={styles.imageProject} resizeMode='cover' source={{ uri: card.imageUri }} />
                                                </SharedElement>

                                                <View style={styles.bottomPartProject}>
                                                    <SharedElement id={`item.${i}.title`}>
                                                        <Text style={styles.tittleProject}>{card.tittleProject}</Text>
                                                    </SharedElement>
                                                    <View style={styles.descriptionProjectView}>
                                                        <SharedElement id={`item.${i}.description`}>
                                                            <Text style={styles.descriptionProject}><Text style={{ fontWeight: "700" }}>DESCRIPTION : </Text>{card ? truncate(card.descriptionProject, 80) : 'No Description'}</Text>
                                                        </SharedElement>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableScale>
                                )
                            }}
                            onSwiped={(cardIndex) => {
                                //if(cardIndex == projects.length-1){setAllSwiped(true)} 
                                //detectSwipe()
                            }}
                            //onSwiping={()=>{setAllSwiped(true)}}
                            onSwipedLeft={() => setVisible(false)}
                            onSwipedRight={() => setVisible(true)}
                            onSwipedAll={() => { setAllSwiped(true), setLoading(true) }}
                            cardIndex={0}
                            backgroundColor={'#4FD0E9'}
                            stackSize={3}>
                        </Swiper> : Platform.OS == 'ios' ?
                            <UIActivityIndicator size={40} color='grey' /> :
                            <MaterialIndicator size={40} color='grey' />
                    }
                </Animated.View>

            </View>
            <View style={styles.contain}>
                <Modal visible={visible} setVisible={setVisible}/>
            </View>

            {/* <FlatListƒ
                ref={ref}
               // data={al}ƒ
                /> */}

            <View style={{
                width: Dimensions.get('screen').width - 22,
                marginTop: hp('0.3%'),
                flexDirection: 'row', justifyContent: 'space-between', elevation: 9, marginBottom: 0, marginHorizontal: 12, position: 'absolute', bottom: 0
            }}>
                {/*@ts-ignore */}
                <TouchableOpacity onPress={() => swipe('left')} activeOpacity={0.7} style={{ padding: hp('1.1%'), marginBottom: hp('0.3%'), backgroundColor: 'red', borderRadius: 8, alignSelf: 'flex-start' }}><Text style={{ color: 'white', }}>J'aime pas</Text></TouchableOpacity>
                {/*@ts-ignore */}
                <TouchableOpacity onPress={() => swipe('right')} activeOpacity={0.7} style={{ padding: hp('1.1%'), marginBottom: hp('0.3%'), backgroundColor: 'green', borderRadius: 8, alignSelf: 'flex-end' }}><Text style={{ color: 'white' }}>J'aime</Text></TouchableOpacity>
            </View>


        </View>
    );
};


DomainsDetailsScreen.sharedElements = (route: any, otherRoute: any, showing: any) => {
    const id = otherRoute.params ? otherRoute.params.index : 'mm'
    //console.log(otherRoute.params?otherRoute.params.index:otherRoute, showing)
    var newArr: any = []
    var orderInfo = allDomain.map(function (order, i) {
        newArr.push({ id: `item.${otherRoute.params ? 'mm' : i}.image` }, { id: `item.${otherRoute.params ? 'mm' : i}.name` })
    })
    newArr.push({ id: `item.${id}.title` }, { id: `item.${id}.description` }, { id: `item.${id}.photo` })
    orderInfo

    return newArr
}


export default DomainsDetailsScreen;


