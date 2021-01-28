import React, { useEffect } from 'react';
import { View, Text, Platform, SafeAreaView } from 'react-native';
import styles from './Components/styles'
import ModernHeader from 'react-native-modern-header'
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SharedElement } from 'react-navigation-shared-element';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Circle';


const ProjectInfo = ({ navigation, route }) => {
    const [state, setState] = React.useState()
    function moveScreen() {
        setTimeout(() => {

            // navigation.push('PostProject')
        }, 0.1)
    }

    useEffect(() => {
        // setState(route.params.card)
       // console.log(route.params.card)
    }, [])

    return (
        <View style={styles.container}>
            {/*@ts-ignore */}
            <SafeAreaView style={{ backgroundColor: Platform.OS == 'ios' ? '#fff' : null }}>
                <ModernHeader
                    title=''
                    //style={{ top: 5553 }}
                    titleStyle={{
                        color: "#fff",
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
                    leftIconOnPress={() => navigation.goBack()}
                    leftIconColor={'black'}
                    leftIconName={'close-outline'}
                    backgroundColor={'#fff'}
                />
            </SafeAreaView >
            <View style={{ flex: 1, height: hp("2%"), marginBottom: 10 }}>

                <Swiper paginationStyle={{
                    bottom: -23,
                }} style={styles.wrapper} showsButtons={true}>
                    <SharedElement id={`item.${route.params.index}.photo`} style={styles.slide1}>
                            <Image indicator={ProgressBar} indicatorProps={{
                                size: 40,
                                borderWidth: 1,
                                height: hp('5%'),
                                marginTop: hp('27%'),
                                color: 'rgba(150, 150, 150, 1)',
                                unfilledColor: 'rgba(200, 200, 200, 0.2)'
                            }} imageStyle={styles.image} source={{ uri: route.params.card.imageUri }} />
                    </SharedElement>
                    {/* <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View> */}
                </Swiper>

                <View style={{ marginTop: hp('6%') }}>

                </View>
                <View style={styles.bottomView}>
                    <SharedElement id={`item.${route.params ? route.params.index : 1}.title`}>
                        <Text style={styles.title}>{route.params.card.tittleProject}</Text>
                    </SharedElement>
                    <View style={styles.locationAndCategory}>
                        <View style={styles.location}>
                            <Icon name="location-sharp" size={hp("2.5%")} color='grey' />
                            <Text style={styles.locationText}>Paris, France</Text>
                        </View>
                        <Text style={styles.category}>Musique</Text>
                    </View>
                    <Text style={styles.participants}>2 participants</Text>
                    <View style={styles.separator} />
                    <ScrollView>
                        <SharedElement id={`item.${route.params ? route.params.index : 1}.description`}>
                            <Text><Text style={{ fontWeight: "700" }}>MESSAGE : </Text>{route.params.card.descriptionProject} </Text>
                        </SharedElement>
                    </ScrollView>
                </View>
                {/* <Text>ProjectInfo Screen</Text> */}
            </View>

        </View >
    );
};

ProjectInfo.sharedElements = (route: any, otherRoute: any, showing: any) => {
    //const { item } = route.params;
    return [{
        id: `item.${route.params ? route.params.index : 1}.title`,
        animation: 'fade'
        // resize: 'clip'
        // align: ''left-top'
    },
    {
        id: `item.${route.params ? route.params.index : 1}.description`,
        animation: 'fade'
        // resize: 'clip'
        // align: ''left-top'
    },
    {
        id: `item.${route.params.index}.photo`,
         animation: 'fade',
         resize: 'auto',
        // resize: ''
         align: 'center-top'
    }];

}

export default ProjectInfo;

