import { ButtonTypes } from "../enums/button-types.enum";

export type ButtonProps = {
    classes: string;
    text?: string
    children?: any;
    childrenType?: string;
    handleClick?: (event?: React.FormEvent) => void;
    type?: keyof typeof ButtonTypes;
    method?: string;
}