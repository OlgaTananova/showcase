'use client';

import {CustomButtonProps} from "@/types";
import '../styles/CustomButton.scss';

function CustomButton({title, handleClick, additionalStyles}: CustomButtonProps) {
    return (
        <button disabled={false}
        type="button"
        className={`custom-btn ${additionalStyles ?? additionalStyles}`}
        onClick={handleClick}>
            <span className='custom-btn__inner'>
                {title}
            </span>
        </button>
    )
}
export default CustomButton;
