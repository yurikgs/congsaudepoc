import { Link} from "react-router-dom";
import { ClickToEditProps } from "../../common/props/click-to-edit-props";
import Button from "../Button/Button";

function ClickToEdit (props: ClickToEditProps) {

    const {link, buttonProps} = props
    const {classes='edit', childrenType='edit'} = buttonProps??{}

    return <>
    <Link to={link??''}>
            <Button classes={classes} childrenType={childrenType}/>
    </Link>
    </>
} export default ClickToEdit