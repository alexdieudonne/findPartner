import PropTypes from 'prop-types';
export declare const defaultProps: {
    native: boolean;
    options: never[];
    visible: boolean;
    defaultSelections: {};
    size: number;
    confirmText: string;
    nativeTestID: undefined;
    confirmTextColor: string;
    pickerItemTextColor: string;
    toolbarBackgroundColor: string;
    toolbarBorderColor: string;
    selectionBackgroundColor: string;
    selectionBorderColor: string;
    backgroundColor: string;
    onValueChange: () => void;
    onCancel: () => void;
    onConfirm: () => void;
};
export declare const propTypes: {
    options: PropTypes.Validator<(PropTypes.InferProps<{
        key: PropTypes.Validator<string>;
        items: PropTypes.Validator<(PropTypes.InferProps<{
            label: PropTypes.Validator<string>;
            value: PropTypes.Validator<string>;
            key: PropTypes.Requireable<string>;
            testID: PropTypes.Requireable<string>;
        }> | null | undefined)[]>;
        testID: PropTypes.Requireable<string>;
        flex: PropTypes.Requireable<number>;
    }> | null | undefined)[]>;
    visible: PropTypes.Requireable<boolean>;
    defaultSelections: PropTypes.Requireable<{
        [x: string]: unknown;
    }>;
    size: (props: any, propName: "size", componentName: string) => Error | null;
    confirmText: PropTypes.Requireable<string>;
    nativeTestID: PropTypes.Requireable<string>;
    confirmTextColor: PropTypes.Requireable<string>;
    pickerItemTextColor: PropTypes.Requireable<string>;
    toolbarBackgroundColor: PropTypes.Requireable<string>;
    toolbarBorderColor: PropTypes.Requireable<string>;
    selectionBackgroundColor: PropTypes.Requireable<string>;
    selectionBorderColor: PropTypes.Requireable<string>;
    backgroundColor: PropTypes.Requireable<string>;
    onValueChange: PropTypes.Requireable<(...args: any[]) => any>;
    onCancel: PropTypes.Requireable<(...args: any[]) => any>;
    onConfirm: PropTypes.Requireable<(...args: any[]) => any>;
};
