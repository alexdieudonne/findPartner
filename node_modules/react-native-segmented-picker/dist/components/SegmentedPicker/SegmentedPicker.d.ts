import React, { Component } from 'react';
import Cache from '../../services/Cache';
import UIPickerManager from '../../services/UIPickerManager';
import { PickerOptions, Selections, SelectionEvent } from '../../config/interfaces';
export interface Props {
    native: boolean;
    options: PickerOptions;
    visible: boolean;
    defaultSelections: Selections;
    size: number;
    confirmText: string;
    nativeTestID: string;
    confirmTextColor: string;
    pickerItemTextColor: string;
    toolbarBackgroundColor: string;
    toolbarBorderColor: string;
    selectionBackgroundColor: string;
    selectionBorderColor: string;
    backgroundColor: string;
    onValueChange: (event: SelectionEvent) => void;
    onCancel: (event: Selections) => void;
    onConfirm: (event: Selections) => void;
}
interface State {
    visible: boolean;
    pickersHeight: number;
}
export default class SegmentedPicker extends Component<Props, State> {
    static propTypes: {
        options: import("prop-types").Validator<(import("prop-types").InferProps<{
            key: import("prop-types").Validator<string>;
            items: import("prop-types").Validator<(import("prop-types").InferProps<{
                label: import("prop-types").Validator<string>;
                value: import("prop-types").Validator<string>;
                key: import("prop-types").Requireable<string>;
                testID: import("prop-types").Requireable<string>;
            }> | null | undefined)[]>;
            testID: import("prop-types").Requireable<string>;
            flex: import("prop-types").Requireable<number>;
        }> | null | undefined)[]>;
        visible: import("prop-types").Requireable<boolean>;
        defaultSelections: import("prop-types").Requireable<{
            [x: string]: unknown;
        }>;
        size: (props: any, propName: "size", componentName: string) => Error | null;
        confirmText: import("prop-types").Requireable<string>;
        nativeTestID: import("prop-types").Requireable<string>;
        confirmTextColor: import("prop-types").Requireable<string>;
        pickerItemTextColor: import("prop-types").Requireable<string>;
        toolbarBackgroundColor: import("prop-types").Requireable<string>;
        toolbarBorderColor: import("prop-types").Requireable<string>;
        selectionBackgroundColor: import("prop-types").Requireable<string>;
        selectionBorderColor: import("prop-types").Requireable<string>;
        backgroundColor: import("prop-types").Requireable<string>;
        onValueChange: import("prop-types").Requireable<(...args: any[]) => any>;
        onCancel: import("prop-types").Requireable<(...args: any[]) => any>;
        onConfirm: import("prop-types").Requireable<(...args: any[]) => any>;
    };
    static defaultProps: Partial<Props>;
    /**
     * @static
     * Decorates the `options` prop with necessary defaults for missing values.
     * @param options {PickerOptions}
     * @return {PickerOptions}
     */
    static ApplyPickerOptionDefaults: (options: PickerOptions) => PickerOptions;
    cache: Cache;
    uiPickerManager: UIPickerManager;
    selectionChanges: Selections;
    modalContainerRef: React.RefObject<any>;
    pickerContainerRef: React.RefObject<any>;
    constructor(props: Props);
    /**
     * Used in rare circumstances where this component is mounted with the `visible`
     * prop set to true. We must animate the picker in immediately.
     */
    componentDidMount(): void;
    /**
     * Animates in-and-out when toggling picker visibility with the `visible` prop.
     */
    componentDidUpdate(prevProps: Props): void;
    /**
     * Make the picker visible on the screen.
     * External Usage: `ref.current.show()`
     * @return {Promise<void>}
     */
    show: () => Promise<void>;
    /**
     * Hide the picker from the screen.
     * External Usage: `ref.current.hide()`
     * @return {Promise<void>}
     */
    hide: () => Promise<void>;
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
    selectLabel: (label: string, column: string, animated?: boolean, emitEvent?: boolean, zeroFallback?: boolean) => void;
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
    selectValue: (value: string, column: string, animated?: boolean, emitEvent?: boolean, zeroFallback?: boolean) => void;
    /**
     * Selects a specific label in the picklist and focuses it using it's list index.
     * External Usage: `ref.current.selectLabel()`
     * @param {number} index
     * @param {string} column
     * @param {boolean = true} animated
     * @param {boolean = true} emitEvent: Specify whether to call the `onValueChange` event.
     * @return {void}
     */
    selectIndex: (index: number, column: string, animated?: boolean, emitEvent?: boolean) => void;
    /**
     * Returns the current picklist selections as they appear on the UI.
     * External Usage: `await ref.current.getCurrentSelections()`
     * @return {Promise<Selections>} {column1: 'value', column2: 'value', ...}
     */
    getCurrentSelections: () => Promise<Selections>;
    /**
     * @private
     * Should the picker be powered by a native module, or with plain JavaScript?
     * Currently only available as an opt-in option for iOS devices.
     * @return {boolean}
     */
    private isNative;
    /**
     * Filters the `options` prop for a specific column `key`.
     * @param {string} key
     * @return {PickerColumn}
     */
    private getColumn;
    /**
     * Returns the picker list items for a specific column `key`.
     * @param {string} key
     * @return {Array<PickerItem>}
     */
    private columnItems;
    /**
     * @private
     * @param {string} label
     * @param {string} column
     * @return {number}
     */
    private findItemIndexByLabel;
    /**
     * @private
     * @param {string} value
     * @param {string} column
     * @return {number}
     */
    private findItemIndexByValue;
    /**
     * @private
     * Focuses the default picklist selections.
     * @return {void}
     */
    private setDefaultSelections;
    /**
     * @private
     * @param {string} column
     * @param {object} ref: The column's rendered FlatList component.
     * @return {void}
     */
    private setFlatListRef;
    /**
     * @private
     * @return {void}
     */
    private measurePickersHeight;
    /**
     * @private
     * Calculates the padding top and bottom for the pickers so that the first and
     * last list items are centered in the marker when fully scrolled up or down.
     * @return {number}
     */
    private pickersVerticalPadding;
    /**
     * @private
     * Determines the index of the nearest option in the list based off the specified Y
     * scroll offset.
     * @param {number} offsetY: The scroll view content offset from react native (should
     * always be a positive integer).
     * @param {string} column
     * @return {number}
     */
    private nearestOptionIndex;
    /**
     * @private
     * Calculates the current scroll direction based off the last and current Y offsets.
     * @param {NativeSyntheticEvent<NativeScrollEvent>} event: Event details from React Native.
     * @param {string} column
     * @return {void}
     */
    private onScroll;
    /**
     * @private
     * @param {string} column
     * @return {void}
     */
    private onScrollBeginDrag;
    /**
     * @private
     * @param {NativeSyntheticEvent<NativeScrollEvent>} event: Event details from React Native.
     * @param {string} column
     * @return {void}
     */
    private onScrollEndDrag;
    /**
     * @private
     * @param {object} event: Event details from React Native.
     * @param {string} column
     * @return {void}
     */
    private onMomentumScrollBegin;
    /**
     * @private
     * @param {NativeSyntheticEvent<NativeScrollEvent>} event: Event details from React Native.
     * @param {string} column
     * @return {void}
     */
    private onMomentumScrollEnd;
    /**
     * @private
     * Scrolls to the nearest index based off a y offset from the FlatList.
     * @param {NativeSyntheticEvent<NativeScrollEvent>} event: Event details from React Native.
     * @param {string} column
     * @param {number?} delay
     * @return {void}
     */
    private selectIndexFromScrollPosition;
    /**
     * @private
     * This method is called when the picker is closed unexpectedly without pressing the
     * "Done" button in the top right hand corner.
     * @return {Promise<void>}
     */
    private onCancel;
    /**
     * @private
     * This method is called when the right action button (default: "Done") is tapped.
     * It calls the `onConfirm` method and hides the picker.
     * @return {Promise<void>}
     */
    private onConfirm;
    /**
     * @private
     * Used by the FlatList to render picklist items.
     * @return {ReactElement}
     */
    private renderPickerItem;
    /**
     * @private
     * Forwards value changes onto the client from the Native iOS UIPicker when it is in use
     * over the default JavaScript picker implementation.
     * @param {UIPickerValueChangeEvent}
     * @return {void}
     */
    private uiPickerValueChange;
    render(): JSX.Element;
}
export {};
