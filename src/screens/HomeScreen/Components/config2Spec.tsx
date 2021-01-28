import {Dimensions} from 'react-native'

export const {width, height} = Dimensions.get('window')
import { ifIphoneX } from 'react-native-iphone-x-helper'
//header

export const HEADER_MAX_HEIGHT = ifIphoneX(120,80) 
export const HEADER_MIN_HEIGHT = ifIphoneX(50, 60)
export const PROFILE_IMAGE_MAX_HEIGHT = 70
export const PROFILE_IMAGE_MIN_HEIGHT = 40
export const PROFILE_NOTIFICATION_MAX_PADDING = 30
export const PROFILE_NOTIFICATION_MIN_PADDING = 20


//recomanded scrollview horizontal
export const SIZE = 20
export const ICON_SIZE = SIZE * 0.6
export const SPACING = 7

const s = width * 0.65;
export const config2Spec ={
    HEADER_MAX_HEIGHT,
    HEADER_MIN_HEIGHT,
    PROFILE_IMAGE_MAX_HEIGHT,
    PROFILE_IMAGE_MIN_HEIGHT,
    PROFILE_NOTIFICATION_MAX_PADDING,
    PROFILE_NOTIFICATION_MIN_PADDING,
    ITEM_WIDTH:s,

    ITEM_HEIGHT: 260,
    RADIUS: 18,
    SPACING,
    FULL_SIZE: s+SPACING * 2.1,

}



//260