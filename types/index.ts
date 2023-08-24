import {MouseEventHandler} from "react";

export interface CustomButtonProps {
    title: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: 'button' | 'submit',
    additionalStyles?: string,
}
