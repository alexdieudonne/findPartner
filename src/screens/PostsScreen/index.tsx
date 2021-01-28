import React from 'react';
import { View, Text, Button, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Components/styles'
import SegmentedControl from '@react-native-community/segmented-control';
import * as Animatable from 'react-native-animatable';
import { FlatGrid } from 'react-native-super-grid';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Circle';

const PostsScreen = ({ navigation }) => {
    const [state, setState] = React.useState({ index: 0 })
    const [image, setImge] = React.useState([
        { imageUri: 'https://picsum.photos/200/300' },
        { imageUri: 'https://picsum.photos/200/300' },
        { imageUri: 'https://picsum.photos/200/300' },
        { imageUri: 'https://picsum.photos/200/300' },
        { imageUri: 'https://picsum.photos/200/300' },
        { imageUri: 'https://picsum.photos/200/300' },
        { imageUri: 'https://picsum.photos/200/300' },
        { imageUri: 'https://picsum.photos/200/300' },
        { imageUri: 'https://picsum.photos/200/300' },
        { imageUri: 'https://picsum.photos/200/300' },
        { imageUri: 'https://picsum.photos/200/300' },
        { imageUri: 'https://picsum.photos/200/300' },
        { imageUri: 'https://picsum.photos/200/300' },
        { imageUri: 'https://picsum.photos/200/300' },
        { imageUri: 'https://picsum.photos/200/300' },
        { imageUri: 'https://picsum.photos/200/300' },
        { imageUri: 'https://picsum.photos/200/300' },
        { imageUri: 'https://picsum.photos/200/300' },
        { imageUri: 'https://picsum.photos/200/300' },
        { imageUri: 'https://picsum.photos/200/300' },
    ]);
    const [items, setItems] = React.useState([
        { name: 'TURQUOISE', code: '#1abc9c' },
        { name: 'EMERALD', code: '#2ecc71' },
        { name: 'PETER RIVER', code: '#3498db' },
        { name: 'AMETHYST', code: '#9b59b6' },
        { name: 'WET ASPHALT', code: '#34495e' },
        { name: 'GREEN SEA', code: '#16a085' },
        { name: 'NEPHRITIS', code: '#27ae60' },
        { name: 'BELIZE HOLE', code: '#2980b9' },
        { name: 'WISTERIA', code: '#8e44ad' },
        { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
        { name: 'SUN FLOWER', code: '#f1c40f' },
        { name: 'CARROT', code: '#e67e22' },
        { name: 'ALIZARIN', code: '#e74c3c' },
        { name: 'CLOUDS', code: '#ecf0f1' },
        { name: 'CONCRETE', code: '#95a5a6' },
        { name: 'ORANGE', code: '#f39c12' },
        { name: 'PUMPKIN', code: '#d35400' },
        { name: 'POMEGRANATE', code: '#c0392b' },
        { name: 'SILVER', code: '#bdc3c7' },
        { name: 'ASBESTOS', code: '#7f8c8d' },
    ]);

    const changeIndex = (val: any) => {
        console.log(val)
        setState({ index: val })
    }
    return (
        <View style={{flex:1}}>
            <SafeAreaView>
                <View style={styles.headerView}>
                    <View style={styles.headerContainerView}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ flex: wp(0.1) }}>
                            <Icon size={hp(2.8)} name='chevron-back' />
                        </TouchableOpacity>
                        <View style={{ flex: 1, alignSelf: 'center', }}>
                            <SegmentedControl
                                values={['Instagram', 'Find Partner']}
                                //style={{ width: '100%' }}

                                selectedIndex={state.index}
                                onChange={(event) => {
                                    setState({ index: event.nativeEvent.selectedSegmentIndex });
                                    //changeIndex({index: event.nativeEvent.selectedSegmentIndex})
                                }}
                            />
                        </View>
                        <View style={{ flex: wp(0.1), }}></View>
                    </View>
                </View>
            </SafeAreaView>
            <StatusBar barStyle='dark-content' backgroundColor='white' />
            <>
                {state.index == 0 ?

                    <Animatable.View animation='fadeInRightBig' style={{flex:1 }}>
                        {/* <Text style={{ textAlign: 'center' }}>Posts Screen</Text> */}
                        <FlatGrid
                            data={image}
                            itemDimension={130}
                            //s staticDimension={300}
                            // fixed
                            style={{alignSelf: 'center', }}
                            spacing={10}
                            // style={styles.gridView}
                            renderItem={({ item, index }) => (
                                <View style={styles.imagePostStyle}>
                                    <Image
                                        indicator={ProgressBar} indicatorProps={{
                                            size: 40,
                                            borderWidth: 1,
                                            // width: Dimensions.get('window').width,
                                            // marginTop: hp('27%'),  
                                            color: 'rgba(150, 150, 150, 1)',
                                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                                        }} imageStyle={[styles.projectImage]} source={{ uri: item.imageUri }}
                                    />
                                </View>
                            )}

                        />
                    </Animatable.View>

                    :

                    <Animatable.View animation='fadeInLeftBig'>
                        <Text style={{ textAlign: 'center' }}>Other Screen</Text>
                    </Animatable.View>

                }
            </>

        </View>
    );
};

export default PostsScreen;


