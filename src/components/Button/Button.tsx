import { ButtonTypes } from "../../common/enums/button-types.enum";
import { ButtonProps } from "../../common/props/button-props";
import './Button.css'

function Button (props: ButtonProps) {

    let image = null;

    if(props.childrenType==='edit') {
        image = <img src='/assets/img/edit.png' alt='edit' />
    }

    return (
        <button type={ButtonTypes[props.type??`BUTTON`]} className={props.classes} onClick={props.handleClick}>
            {image}
            {props.children??props.text}
        </button>
    )
} export default Button