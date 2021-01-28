export declare type StoreItem = any;
export interface Store {
    [key: string]: any;
}
/**
 * This class is utilised by the main Segmented Picker component as a fast synchronous
 * cache alternative to the regular React component state mechanism.
 */
export default class Cache {
    store: Store;
    constructor(initialState?: Store);
    /**
     * Returns the entire store value without any modification.
     * @return {Store}
     */
    get current(): Store;
    /**
     * Attempts to safely fetch the cached value for the specified key.
     * @param {string} key
     * @return {StoreItem | null}
     */
    get: (key: string) => any;
    /**
     * Creates (or replaces) a value in the cache for the specified key.
     * @param {string} key
     * @param {StoreItem} value
     * @return {void}
     */
    set: (key: string, value: any) => void;
    /**
     * Completely resets the cache to a blank state.
     * @return {void}
     */
    purge: () => void;
}
