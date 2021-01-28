declare module 'react-native-tiny-toast' {
  import * as React from 'react'
  import * as ReactNative from 'react-native'
  import { TextStyle, StyleProp, ViewStyle, ImageStyle } from 'react-native'

  export interface ToastOptions {
    containerStyle?: StyleProp<ViewStyle>;
    duration?: number;
    delay?: number;
    animationDuration?: number;
    visible?: boolean;
    position?: number;
    animation?: boolean;
    shadow?: boolean;
    shadowColor?: string;
    showText?: boolean;
    textColor?: string;
    textStyle?: StyleProp<TextStyle>;
    mask?: boolean;
    maskColor?: string;
    maskStyle?: StyleProp<ViewStyle>;
    imgSource?: string;
    imgStyle?: StyleProp<ImageStyle>;
    loading?: boolean;
    indicatorSize?: string | number;
    onHidden?: Function;
    onMarkPress?: Function;
  }

  export interface ToastProps extends ToastOptions, ReactNative.ViewProperties {
  }

  export interface Position {
    TOP: number;
    BOTTOM: number;
    CENTER: number;
  }

  export interface Duration {
    LONG: number;
    SHORT: number;
  }

  export default class Toast extends React.Component<ToastProps> {
    static position: Position
    static duration: Duration

    static showSuccess: (message: string, options?: ToastOptions) => any
    static showLoading: (message: string, options?: ToastOptions) => any
    static show: (message: string, options?: ToastOptions) => any
    static hide: (toast: any) => void
  }
}
