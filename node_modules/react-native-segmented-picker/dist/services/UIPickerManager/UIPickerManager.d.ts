import React from 'react';
import { UIPickerSelectionsEvent } from '../../config/interfaces';
interface Selections {
    [column: string]: string;
}
/**
 * Methods to control and observe the native iOS `UIPickerView`.
 */
export default class UIPickerManager {
    private ref;
    private promiseFactory;
    get reactRef(): React.RefObject<any>;
    /**
     * Programmatically select an index in the picker.
     * @param {number} index: List index of the picker item to select.
     * @param {string} columnKey: Unique key of the column to select.
     * @param {boolean = true} animated: Should the selection "snap" or animate smoothly into place?
     * @return {void}
     */
    selectIndex: (index: number, column: string, animated?: boolean) => void;
    /**
     * Returns the current picker item selections as the appear on the user's screen.
     * @return {Promise<Selections>}
     */
    getCurrentSelections: () => Promise<Selections>;
    /**
     * Ingests emitted selections from the native module and resolves the original promise
     * from `getCurrentSelections` using it's stored resolver in the Promise Factory.
     * @param {UIPickerSelectionsEvent}
     * @return {void}
     */
    ingestSelections: ({ nativeEvent: { selections, pid } }: UIPickerSelectionsEvent) => void;
}
export {};
