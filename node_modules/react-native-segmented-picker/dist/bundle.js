import React, { Component } from 'react';
import { StyleSheet, Dimensions, Platform, View, TouchableOpacity, Text, requireNativeComponent, UIManager, findNodeHandle, Modal, TouchableWithoutFeedback, FlatList } from 'react-native';
import { View as View$1 } from 'react-native-animatable';
import PropTypes from 'prop-types';

const defaultProps = {
  native: false,
  options: [],
  visible: false,
  defaultSelections: {},
  size: 0.45,
  confirmText: 'Done',
  nativeTestID: undefined,
  confirmTextColor: '#0A84FF',
  pickerItemTextColor: '#282828',
  toolbarBackgroundColor: '#FAFAF8',
  toolbarBorderColor: '#E7E7E7',
  selectionBackgroundColor: '#F8F8F8',
  selectionBorderColor: '#C9C9C9',
  backgroundColor: '#FFFFFF',
  onValueChange: () => {},
  onCancel: () => {},
  onConfirm: () => {}
};
const propTypes = {
  // Core Props
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      key: PropTypes.string,
      testID: PropTypes.string
    })).isRequired,
    testID: PropTypes.string,
    flex: PropTypes.number
  })).isRequired,
  visible: PropTypes.bool,
  defaultSelections: PropTypes.objectOf((propValue, key, componentName, location, propName) => {
    const column = propValue[key];
    return column && String(column) !== column ? new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`.` + ' Must be in the format: `{column1: \'value\', column2: \'value\', ...}`') : null;
  }),
  size: (props, propName, componentName) => {
    const value = props[propName];
    if (value === undefined) return null;
    return value < 0 || value > 1 ? new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`.` + ' Must be a floating point between 0-1 representing the screen percentage to cover.' + ' The default value is `0.45` (eg 45%).') : null;
  },
  confirmText: PropTypes.string,
  nativeTestID: PropTypes.string,
  // Styling
  confirmTextColor: PropTypes.string,
  pickerItemTextColor: PropTypes.string,
  toolbarBackgroundColor: PropTypes.string,
  toolbarBorderColor: PropTypes.string,
  selectionBackgroundColor: PropTypes.string,
  selectionBorderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  // Events
  onValueChange: PropTypes.func,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func
};

/**
 * Time in milliseconds for the list to fade in and out when displayed.
 */
const ANIMATION_TIME = 300;
/**
 * Fixed sizing for list items and other UI elements.
 */

const GUTTER_WIDTH = 18;
const GUTTER_HEIGHT = 5;
const ITEM_HEIGHTS = {
  ios: 46,
  default: 50
};
const TEXT_CORRECTION = 2;
/**
 * Constants used for automatically generated Test ID's (used for E2E testing).
 */

const TEST_IDS = {
  PICKER: 'SEGMENTED_PICKER',
  CONFIRM_BUTTON: 'SEGMENTED_PICKER_CONFIRM',
  CLOSE_AREA: 'SEGMENTED_PICKER_CLOSE_AREA'
};
/**
 * Measurement and internal lifecycle tracking states.
 */

const TRACKING = {
  FLAT_LIST_REF: 'FLAT_LIST_REF_',
  LAST_SCROLL_OFFSET: 'LAST_SCROLL_OFFSET_',
  SCROLL_DIRECTION: 'SCROLL_DIRECTION_',
  IS_DRAGGING: 'IS_DRAGGING_',
  IS_MOMENTUM_SCROLLING: 'IS_MOMENTUM_SCROLLING_',
  IS_DIRTY: 'IS_DIRTY_'
};

const ITEM_HEIGHT = Platform.select(ITEM_HEIGHTS);
var styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    flexDirection: 'column'
  },
  closeableContainer: {
    width: '100%'
  },
  pickerContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  selectableArea: {
    flex: 1,
    alignSelf: 'stretch'
  },
  pickerColumns: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: GUTTER_HEIGHT,
    paddingRight: 0,
    paddingBottom: GUTTER_HEIGHT,
    paddingLeft: GUTTER_WIDTH
  },
  pickerColumn: {
    flex: 1,
    marginRight: 12,
    position: 'relative'
  },
  pickerList: {
    width: '100%',
    height: 'auto'
  },
  pickerItem: {
    width: '100%',
    height: ITEM_HEIGHT,
    justifyContent: 'center'
  },
  pickerItemText: {
    fontSize: 15,
    paddingTop: 5,
    paddingRight: 0,
    paddingBottom: TEXT_CORRECTION + 5,
    paddingLeft: 0,
    textAlign: 'center'
  },
  nativePickerContainer: {
    width: Dimensions.get('window').width - GUTTER_WIDTH * 2,
    height: '100%',
    marginLeft: GUTTER_WIDTH
  },
  nativePicker: {
    width: '100%',
    height: '100%'
  }
});

var styles$1 = StyleSheet.create({
  toolbarContainer: {
    width: '100%',
    height: 42,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'flex-start'
  },
  toolbarConfirmContainer: {
    height: '100%',
    paddingLeft: 30,
    justifyContent: 'center'
  },
  toolbarConfirmText: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 0,
    paddingRight: GUTTER_WIDTH,
    paddingBottom: TEXT_CORRECTION,
    paddingLeft: 0
  }
});

/**
 * Top action bar that displays above the picker modal which allows a user to confirm
 * their selections and close the modal.
 */

var Toolbar = (({
  confirmText,
  confirmTextColor,
  toolbarBackground,
  toolbarBorderColor,
  onConfirm
}) =>
/*#__PURE__*/
React.createElement(View, {
  style: [styles$1.toolbarContainer, {
    backgroundColor: toolbarBackground,
    borderBottomColor: toolbarBorderColor
  }]
},
/*#__PURE__*/
React.createElement(TouchableOpacity, {
  activeOpacity: 0.4,
  onPress: onConfirm,
  testID: TEST_IDS.CONFIRM_BUTTON
},
/*#__PURE__*/
React.createElement(View, {
  style: styles$1.toolbarConfirmContainer
},
/*#__PURE__*/
React.createElement(Text, {
  style: [styles$1.toolbarConfirmText, {
    color: confirmTextColor
  }]
}, confirmText)))));

const ITEM_HEIGHT$1 = Platform.select(ITEM_HEIGHTS);
var styles$2 = StyleSheet.create({
  selectionMarkerContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: GUTTER_WIDTH,
    paddingRight: GUTTER_WIDTH
  },
  // Eliminates border rendering inconsistencies between iOS & Android
  selectionMarkerBorder: {
    width: '100%',
    height: Platform.select({
      ios: 0.6,
      android: 0.7
    })
  },
  selectionMarker: {
    width: '100%',
    height: ITEM_HEIGHT$1
  }
});

/**
 * Horizontal bar used to indicate the current picker selections.
 */

var SelectionMarker = (({
  backgroundColor,
  borderColor
}) =>
/*#__PURE__*/
React.createElement(View, {
  style: styles$2.selectionMarkerContainer
},
/*#__PURE__*/
React.createElement(View, {
  style: [styles$2.selectionMarkerBorder, {
    backgroundColor: borderColor
  }]
}),
/*#__PURE__*/
React.createElement(View, {
  style: [styles$2.selectionMarker, {
    backgroundColor
  }]
}),
/*#__PURE__*/
React.createElement(View, {
  style: [styles$2.selectionMarkerBorder, {
    backgroundColor: borderColor
  }]
})));

var UIPicker = requireNativeComponent('UIPicker');

/**
 * This class is utilised by the main Segmented Picker component as a fast synchronous
 * cache alternative to the regular React component state mechanism.
 */
class Cache {
  constructor(initialState = {}) {
    /**
     * Attempts to safely fetch the cached value for the specified key.
     * @param {string} key
     * @return {StoreItem | null}
     */
    this.get = key => {
      if (key in this.store) {
        return this.store[key];
      }

      return null;
    };
    /**
     * Creates (or replaces) a value in the cache for the specified key.
     * @param {string} key
     * @param {StoreItem} value
     * @return {void}
     */


    this.set = (key, value) => {
      this.store[key] = value;
    };
    /**
     * Completely resets the cache to a blank state.
     * @return {void}
     */


    this.purge = () => {
      this.store = {};
    };

    this.store = Object.assign({}, initialState);
  }
  /**
   * Returns the entire store value without any modification.
   * @return {Store}
   */


  get current() {
    return this.store;
  }

}

/**
 * This class is used to store promises against an incrementing integer so that the
 * promise can be resolved from outside the context of the original block.
 *
 * An example of this is when React needs to request asynchronous data from a Native
 * UI Component. Communication to UI components across the React Native bridge is
 * limited to 1-way, so the value must be emitted afterwards using an event which is
 * not immediately available to the original JavaScript method. So to get around this
 * limitation, we empower the React event subscription to resolve the promise.
 */
class PromiseFactory {
  constructor() {
    this.promises = new Map();
    this.nextPromiseId = 0;
    /**
     * Add a promise to the internal store and receive it's unique `id`.
     * @param {PromiseExecutor} e
     * @return {number} Unique `id` for the added promise.
     */

    this.add = e => {
      const id = Number(this.nextPromiseId);
      this.promises.set(id, e);
      this.nextPromiseId += 1;
      return id;
    };
    /**
     * Get a promise by it's `id`.
     * @param {number} id
     * @return {PromiseExecutor | undefined}
     */


    this.get = id => this.promises.get(id);
    /**
     * Completely deletes a promise from the factory using it's unique `id`.
     * @param {number} id
     * @return {boolean}
     */


    this.delete = id => this.promises.delete(id);
  }

}

/**
 * Methods to control and observe the native iOS `UIPickerView`.
 */

class UIPickerManager {
  constructor() {
    this.ref = React.createRef();
    this.promiseFactory = new PromiseFactory();
    /**
     * Programmatically select an index in the picker.
     * @param {number} index: List index of the picker item to select.
     * @param {string} columnKey: Unique key of the column to select.
     * @param {boolean = true} animated: Should the selection "snap" or animate smoothly into place?
     * @return {void}
     */

    this.selectIndex = (index, column, animated = true) => {
      if (this.ref.current) {
        UIManager.dispatchViewManagerCommand(findNodeHandle(this.ref.current), UIManager.UIPicker.Commands.selectIndex, [index, column, animated]);
      }
    };
    /**
     * Returns the current picker item selections as the appear on the user's screen.
     * @return {Promise<Selections>}
     */


    this.getCurrentSelections = () => {
      if (!this.ref.current) {
        return Promise.resolve({});
      }

      const promise = new Promise((resolve, reject) => {
        const pid = this.promiseFactory.add({
          resolve,
          reject
        });
        UIManager.dispatchViewManagerCommand(findNodeHandle(this.ref.current), UIManager.UIPicker.Commands.emitSelections, [pid]);
      });
      return promise;
    };
    /**
     * Ingests emitted selections from the native module and resolves the original promise
     * from `getCurrentSelections` using it's stored resolver in the Promise Factory.
     * @param {UIPickerSelectionsEvent}
     * @return {void}
     */


    this.ingestSelections = ({
      nativeEvent: {
        selections,
        pid
      }
    }) => {
      const promise = this.promiseFactory.get(pid);

      if (promise) {
        promise.resolve(selections);
        this.promiseFactory.delete(pid);
      }
    };
  }

  get reactRef() {
    return this.ref;
  }

}

const ITEM_HEIGHT$2 = Platform.select(ITEM_HEIGHTS);
const {
  FLAT_LIST_REF,
  LAST_SCROLL_OFFSET,
  SCROLL_DIRECTION,
  IS_DRAGGING,
  IS_MOMENTUM_SCROLLING,
  IS_DIRTY
} = TRACKING;
class SegmentedPicker extends Component {
  constructor(props) {
    super(props);
    this.cache = new Cache(); // Used as an internal synchronous state (fast)

    this.uiPickerManager = new UIPickerManager();
    this.selectionChanges = {};
    this.modalContainerRef = React.createRef();
    this.pickerContainerRef = React.createRef();
    /**
     * Make the picker visible on the screen.
     * External Usage: `ref.current.show()`
     * @return {Promise<void>}
     */

    this.show = () => {
      this.setState({
        visible: true
      });
      return new Promise(resolve => setTimeout(resolve, ANIMATION_TIME));
    };
    /**
     * Hide the picker from the screen.
     * External Usage: `ref.current.hide()`
     * @return {Promise<void>}
     */


    this.hide = async () => new Promise(async resolve => {
      var _a;

      if (Platform.OS === 'ios') {
        this.setState({
          visible: false
        }, async () => {
          await new Promise(done => setTimeout(done, ANIMATION_TIME));
          this.cache.purge();
          resolve();
        });
      } else {
        await ((_a = this.modalContainerRef.current) === null || _a === void 0 ? void 0 : _a.fadeOut(ANIMATION_TIME));
        this.setState({
          visible: false
        }, () => {
          this.cache.purge();
          resolve();
        });
      }
    });
    /**
     * Selects a specific picker item `label` in the picklist and focuses it.
     * External Usage: `ref.current.selectLabel()`
     * @param {string} label
     * @param {string} column
     * @param {boolean = true} animated
     * @param {boolean = true} emitEvent: Specify whether to call the `onValueChange` event.
     * @param {boolean = false} zeroFallback: Select the first list item if not found.
     * @return {void}
     */


    this.selectLabel = (label, column, animated = true, emitEvent = true, zeroFallback = false) => {
      const index = this.findItemIndexByLabel(label, column);

      if (index !== -1) {
        this.selectIndex(index, column, animated, emitEvent);
      } else if (this.columnItems(column).length > 0 && zeroFallback) {
        this.selectIndex(0, column, animated, emitEvent);
      }
    };
    /**
     * Selects a specific picker item `value` in the picklist and focuses it.
     * External Usage: `ref.current.selectValue()`
     * @param {string} value
     * @param {string} column
     * @param {boolean = true} animated
     * @param {boolean = true} emitEvent: Specify whether to call the `onValueChange` event.
     * @param {boolean = false} zeroFallback: Select the first list item if not found.
     * @return {void}
     */


    this.selectValue = (value, column, animated = true, emitEvent = true, zeroFallback = false) => {
      const index = this.findItemIndexByValue(value, column);

      if (index !== -1) {
        this.selectIndex(index, column, animated, emitEvent);
      } else if (this.columnItems(column).length > 0 && zeroFallback) {
        this.selectIndex(0, column, animated, emitEvent);
      }
    };
    /**
     * Selects a specific label in the picklist and focuses it using it's list index.
     * External Usage: `ref.current.selectLabel()`
     * @param {number} index
     * @param {string} column
     * @param {boolean = true} animated
     * @param {boolean = true} emitEvent: Specify whether to call the `onValueChange` event.
     * @return {void}
     */


    this.selectIndex = (index, column, animated = true, emitEvent = true) => {
      if (this.isNative()) {
        this.uiPickerManager.selectIndex(index, column, animated);
        return;
      }

      const {
        onValueChange
      } = this.props;
      const list = this.cache.get(`${FLAT_LIST_REF}${column}`);

      if (!list) {
        return;
      }

      list.scrollToIndex({
        index,
        animated
      });
      const items = this.columnItems(column);

      if (!this.selectionChanges[column] || this.selectionChanges[column] && this.selectionChanges[column] !== items[index].value) {
        this.selectionChanges = Object.assign(Object.assign({}, this.selectionChanges), {
          [column]: items[index].value
        });

        if (emitEvent) {
          onValueChange({
            column,
            value: items[index].value
          });
        }
      }
    };
    /**
     * Returns the current picklist selections as they appear on the UI.
     * External Usage: `await ref.current.getCurrentSelections()`
     * @return {Promise<Selections>} {column1: 'value', column2: 'value', ...}
     */


    this.getCurrentSelections = async () => {
      if (this.isNative()) {
        const nativeSelections = await this.uiPickerManager.getCurrentSelections();
        return nativeSelections;
      }

      const {
        options
      } = this.props;
      return Promise.resolve(options.reduce((columns, column) => {
        var _a;

        const lastOffset = this.cache.get(`${LAST_SCROLL_OFFSET}${column.key}`);
        const index = this.nearestOptionIndex(lastOffset || 0, column.key);
        const items = this.columnItems(column.key);
        return Object.assign(Object.assign({}, columns), {
          [column.key]: (_a = items[index]) === null || _a === void 0 ? void 0 : _a.value
        });
      }, {}));
    };
    /**
     * @private
     * Should the picker be powered by a native module, or with plain JavaScript?
     * Currently only available as an opt-in option for iOS devices.
     * @return {boolean}
     */


    this.isNative = () => this.props.native && Platform.OS === 'ios';
    /**
     * Filters the `options` prop for a specific column `key`.
     * @param {string} key
     * @return {PickerColumn}
     */


    this.getColumn = key => this.props.options.filter(c => c.key === key)[0];
    /**
     * Returns the picker list items for a specific column `key`.
     * @param {string} key
     * @return {Array<PickerItem>}
     */


    this.columnItems = key => {
      var _a;

      return ((_a = this.getColumn(key)) === null || _a === void 0 ? void 0 : _a.items) || [];
    };
    /**
     * @private
     * @param {string} label
     * @param {string} column
     * @return {number}
     */


    this.findItemIndexByLabel = (label, column) => {
      const items = this.columnItems(column);
      return items.findIndex(item => item.label === label);
    };
    /**
     * @private
     * @param {string} value
     * @param {string} column
     * @return {number}
     */


    this.findItemIndexByValue = (value, column) => {
      const items = this.columnItems(column);
      return items.findIndex(item => item.value === value);
    };
    /**
     * @private
     * Focuses the default picklist selections.
     * @return {void}
     */


    this.setDefaultSelections = () => {
      const {
        options,
        defaultSelections
      } = this.props;
      const dirty = this.cache.get(IS_DIRTY);

      if (!dirty) {
        setTimeout(() => {
          // User defined default selections
          Object.keys(defaultSelections).forEach(column => this.selectValue(defaultSelections[column], column, false, false, true)); // Set all other selections to index 0

          options.filter(column => !Object.keys(defaultSelections).includes(column.key) && this.columnItems(column.key).length > 0).forEach(column => this.selectIndex(0, column.key, false, false));
        }, 0);
      }
    };
    /**
     * @private
     * @param {string} column
     * @param {object} ref: The column's rendered FlatList component.
     * @return {void}
     */


    this.setFlatListRef = (column, ref) => {
      if (ref) {
        this.cache.set(`${FLAT_LIST_REF}${column}`, ref);
        this.setDefaultSelections();
      }
    };
    /**
     * @private
     * @return {void}
     */


    this.measurePickersHeight = event => {
      const {
        height
      } = event.nativeEvent.layout;
      this.setState({
        pickersHeight: height
      });
    };
    /**
     * @private
     * Calculates the padding top and bottom for the pickers so that the first and
     * last list items are centered in the marker when fully scrolled up or down.
     * @return {number}
     */


    this.pickersVerticalPadding = () => {
      const {
        pickersHeight
      } = this.state;
      return (pickersHeight - ITEM_HEIGHT$2 - GUTTER_HEIGHT * 2) / 2;
    };
    /**
     * @private
     * Determines the index of the nearest option in the list based off the specified Y
     * scroll offset.
     * @param {number} offsetY: The scroll view content offset from react native (should
     * always be a positive integer).
     * @param {string} column
     * @return {number}
     */


    this.nearestOptionIndex = (offsetY, column) => {
      const scrollDirection = this.cache.get(`${SCROLL_DIRECTION}${column}`) || 1;
      const rounding = scrollDirection === 0 ? 'floor' : 'ceil';
      const adjustedOffsetY = scrollDirection === 0 ? offsetY / ITEM_HEIGHT$2 + 0.35 : offsetY / ITEM_HEIGHT$2 - 0.35;
      let nearestArrayMember = Math[rounding](adjustedOffsetY) || 0; // Safety checks making sure we don't return an out of range index

      const columnSize = this.columnItems(column).length;

      if (Math.sign(nearestArrayMember) === -1) {
        nearestArrayMember = 0;
      } else if (nearestArrayMember > columnSize - 1) {
        nearestArrayMember = columnSize - 1;
      }

      return nearestArrayMember;
    };
    /**
     * @private
     * Calculates the current scroll direction based off the last and current Y offsets.
     * @param {NativeSyntheticEvent<NativeScrollEvent>} event: Event details from React Native.
     * @param {string} column
     * @return {void}
     */


    this.onScroll = (event, column) => {
      if (!event.nativeEvent) return;
      const {
        y
      } = event.nativeEvent.contentOffset;
      const lastScrollOffset = this.cache.get(`${LAST_SCROLL_OFFSET}${column}`);

      if (lastScrollOffset !== null && lastScrollOffset < y) {
        this.cache.set(`${SCROLL_DIRECTION}${column}`, 1); // Down
      } else {
        this.cache.set(`${SCROLL_DIRECTION}${column}`, 0); // Up
      }

      this.cache.set(`${LAST_SCROLL_OFFSET}${column}`, y);
    };
    /**
     * @private
     * @param {string} column
     * @return {void}
     */


    this.onScrollBeginDrag = column => {
      this.cache.set(`${IS_DRAGGING}${column}`, true);
      const dirty = this.cache.get(IS_DIRTY);

      if (!dirty) {
        this.cache.set(IS_DIRTY, true);
      }
    };
    /**
     * @private
     * @param {NativeSyntheticEvent<NativeScrollEvent>} event: Event details from React Native.
     * @param {string} column
     * @return {void}
     */


    this.onScrollEndDrag = (event, column) => {
      this.cache.set(`${IS_DRAGGING}${column}`, false);

      if (Platform.OS === 'ios' && !this.cache.get(`${IS_MOMENTUM_SCROLLING}${column}`)) {
        // Not required on Android because all scrolls exit as momentum scrolls,
        // so the below method has already been called prior to this event.
        // Timeout is to temporarily allow raising fingers.
        this.selectIndexFromScrollPosition(event, column, 280);
      }
    };
    /**
     * @private
     * @param {object} event: Event details from React Native.
     * @param {string} column
     * @return {void}
     */


    this.onMomentumScrollBegin = (event, column) => {
      this.cache.set(`${IS_MOMENTUM_SCROLLING}${column}`, true);
    };
    /**
     * @private
     * @param {NativeSyntheticEvent<NativeScrollEvent>} event: Event details from React Native.
     * @param {string} column
     * @return {void}
     */


    this.onMomentumScrollEnd = (event, column) => {
      this.cache.set(`${IS_MOMENTUM_SCROLLING}${column}`, false);

      if (Platform.OS === 'ios') {
        event.persist();
        this.selectIndexFromScrollPosition(event, column, 50);
      } else {
        this.selectIndexFromScrollPosition(event, column);
      }
    };
    /**
     * @private
     * Scrolls to the nearest index based off a y offset from the FlatList.
     * @param {NativeSyntheticEvent<NativeScrollEvent>} event: Event details from React Native.
     * @param {string} column
     * @param {number?} delay
     * @return {void}
     */


    this.selectIndexFromScrollPosition = (event, column, delay = 0) => {
      if (!event.nativeEvent) return;
      const {
        y
      } = event.nativeEvent.contentOffset;
      const nearestOptionIndex = this.nearestOptionIndex(y, column);
      setTimeout(() => {
        const isDragging = this.cache.get(`${IS_DRAGGING}${column}`);
        const isMomentumScrolling = this.cache.get(`${IS_MOMENTUM_SCROLLING}${column}`);

        if (!isDragging && !isMomentumScrolling) {
          this.selectIndex(nearestOptionIndex, column);
        }
      }, delay);
    };
    /**
     * @private
     * This method is called when the picker is closed unexpectedly without pressing the
     * "Done" button in the top right hand corner.
     * @return {Promise<void>}
     */


    this.onCancel = async () => {
      const selections = Object.assign({}, (await this.getCurrentSelections()));

      if (this.props.visible !== true) {
        await this.hide();
      }

      this.props.onCancel(selections);
    };
    /**
     * @private
     * This method is called when the right action button (default: "Done") is tapped.
     * It calls the `onConfirm` method and hides the picker.
     * @return {Promise<void>}
     */


    this.onConfirm = async () => {
      const selections = Object.assign({}, (await this.getCurrentSelections()));

      if (this.props.visible !== true) {
        await this.hide();
      }

      this.props.onConfirm(selections);
    };
    /**
     * @private
     * Used by the FlatList to render picklist items.
     * @return {ReactElement}
     */


    this.renderPickerItem = ({
      item: {
        label,
        column,
        key,
        testID
      },
      index
    }) => {
      const {
        pickerItemTextColor
      } = this.props;
      return (
        /*#__PURE__*/
        React.createElement(View, {
          style: styles.pickerItem
        },
        /*#__PURE__*/
        React.createElement(TouchableOpacity, {
          activeOpacity: 0.7,
          onPress: () => this.selectIndex(index, column),
          testID: testID || key
        },
        /*#__PURE__*/
        React.createElement(Text, {
          numberOfLines: 1,
          style: [styles.pickerItemText, {
            color: pickerItemTextColor
          }]
        }, label)))
      );
    };
    /**
     * @private
     * Forwards value changes onto the client from the Native iOS UIPicker when it is in use
     * over the default JavaScript picker implementation.
     * @param {UIPickerValueChangeEvent}
     * @return {void}
     */


    this.uiPickerValueChange = ({
      nativeEvent: {
        column,
        value
      }
    }) => {
      const {
        onValueChange
      } = this.props;
      onValueChange({
        column,
        value
      });
    };

    this.state = {
      visible: false,
      pickersHeight: 0
    };
  }
  /**
   * Used in rare circumstances where this component is mounted with the `visible`
   * prop set to true. We must animate the picker in immediately.
   */


  componentDidMount() {
    if (this.props.visible === true) {
      this.show();
    }
  }
  /**
   * Animates in-and-out when toggling picker visibility with the `visible` prop.
   */


  componentDidUpdate(prevProps) {
    const {
      visible: visibleProp
    } = this.props;
    const {
      visible: visibleState
    } = this.state;

    if (visibleProp === true && prevProps.visible !== true && visibleState !== true) {
      this.show();
    }

    if (visibleProp === false && prevProps.visible === true) {
      this.hide();
    }
  }

  render() {
    const {
      visible
    } = this.state;
    const {
      nativeTestID,
      options,
      defaultSelections,
      size,
      confirmText,
      confirmTextColor,
      pickerItemTextColor,
      toolbarBackgroundColor,
      toolbarBorderColor,
      selectionBackgroundColor,
      selectionBorderColor,
      backgroundColor
    } = this.props;
    return (
      /*#__PURE__*/
      React.createElement(Modal, {
        visible: visible,
        animationType: Platform.select({
          ios: 'fade',
          default: 'none'
        }),
        transparent: true,
        onRequestClose: this.onCancel
      },
      /*#__PURE__*/
      React.createElement(View$1, {
        useNativeDriver: true,
        animation: "fadeIn",
        easing: "ease-out-cubic",
        duration: ANIMATION_TIME,
        ref: this.modalContainerRef,
        style: styles.modalContainer,
        testID: TEST_IDS.PICKER
      },
      /*#__PURE__*/
      React.createElement(TouchableWithoutFeedback, {
        onPress: this.onCancel,
        testID: TEST_IDS.CLOSE_AREA
      },
      /*#__PURE__*/
      React.createElement(View, {
        style: [styles.closeableContainer, {
          height: `${100 - size * 100}%`
        }]
      })),
      /*#__PURE__*/
      React.createElement(View$1, {
        useNativeDriver: true,
        animation: {
          from: {
            opacity: 0,
            translateY: 250
          },
          to: {
            opacity: 1,
            translateY: 0
          }
        },
        easing: "ease-out-quint",
        delay: 100,
        duration: ANIMATION_TIME,
        ref: this.pickerContainerRef,
        style: [styles.pickerContainer, {
          height: `${size * 100}%`,
          backgroundColor
        }]
      },
      /*#__PURE__*/
      React.createElement(Toolbar, {
        confirmText: confirmText,
        confirmTextColor: confirmTextColor,
        toolbarBackground: toolbarBackgroundColor,
        toolbarBorderColor: toolbarBorderColor,
        onConfirm: this.onConfirm
      }),
      /*#__PURE__*/
      React.createElement(View, {
        style: styles.selectableArea
      }, this.isNative() &&
      /*#__PURE__*/
      React.createElement(View, {
        style: styles.nativePickerContainer
      },
      /*#__PURE__*/
      React.createElement(UIPicker, {
        ref: this.uiPickerManager.reactRef,
        nativeTestID: nativeTestID,
        style: styles.nativePicker,
        options: SegmentedPicker.ApplyPickerOptionDefaults(options),
        defaultSelections: defaultSelections,
        onValueChange: this.uiPickerValueChange,
        onEmitSelections: this.uiPickerManager.ingestSelections,
        theme: {
          itemHeight: ITEM_HEIGHT$2,
          selectionBackgroundColor,
          selectionBorderColor,
          pickerItemTextColor
        }
      })), !this.isNative() &&
      /*#__PURE__*/
      React.createElement(React.Fragment, null,
      /*#__PURE__*/
      React.createElement(SelectionMarker, {
        backgroundColor: selectionBackgroundColor,
        borderColor: selectionBorderColor
      }),
      /*#__PURE__*/
      React.createElement(View, {
        style: styles.pickerColumns,
        onLayout: this.measurePickersHeight
      }, SegmentedPicker.ApplyPickerOptionDefaults(options).map(({
        key: column,
        testID: columnTestID,
        flex
      }) =>
      /*#__PURE__*/
      React.createElement(View, {
        style: [styles.pickerColumn, {
          flex
        }],
        key: `${column}`
      },
      /*#__PURE__*/
      React.createElement(View, {
        style: styles.pickerList
      },
      /*#__PURE__*/
      React.createElement(FlatList, {
        data: this.columnItems(column).map(({
          label,
          value,
          key,
          testID
        }) => ({
          label,
          value,
          column,
          testID,
          key: `${column}_${key || label}`
        })),
        renderItem: this.renderPickerItem,
        keyExtractor: item => item.key,
        initialNumToRender: 40,
        getItemLayout: (data, index) => ({
          length: ITEM_HEIGHT$2,
          offset: ITEM_HEIGHT$2 * index,
          index
        }),
        contentContainerStyle: {
          paddingTop: this.pickersVerticalPadding(),
          paddingBottom: this.pickersVerticalPadding()
        },
        showsVerticalScrollIndicator: false,
        ref: ref => this.setFlatListRef(column, ref),
        onScroll: event => this.onScroll(event, column),
        onScrollBeginDrag: () => this.onScrollBeginDrag(column),
        onScrollEndDrag: event => this.onScrollEndDrag(event, column),
        onMomentumScrollBegin: event => this.onMomentumScrollBegin(event, column),
        onMomentumScrollEnd: event => this.onMomentumScrollEnd(event, column),
        scrollEventThrottle: 32,
        decelerationRate: Platform.select({
          ios: 1,
          android: undefined
        }),
        testID: `${columnTestID}`
      }))))))))))
    );
  }

}
SegmentedPicker.propTypes = propTypes;
SegmentedPicker.defaultProps = defaultProps;
/**
 * @static
 * Decorates the `options` prop with necessary defaults for missing values.
 * @param options {PickerOptions}
 * @return {PickerOptions}
 */

SegmentedPicker.ApplyPickerOptionDefaults = options => options.map(column => Object.assign(Object.assign({}, column), {
  flex: column.flex || 1
}));

export default SegmentedPicker;
export { ANIMATION_TIME, GUTTER_HEIGHT, GUTTER_WIDTH, ITEM_HEIGHTS, TEST_IDS, TEXT_CORRECTION, TRACKING };
//# sourceMappingURL=bundle.js.map
