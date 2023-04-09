import { FocusLayoutProps } from "../../common/props/focus-layout-props";
import FocusNavbar from "../../components/FocusNavbar/FocusNavbar";

import withAuthorization from "../Authentication/withAuthorization";

function FocusLayout (props: FocusLayoutProps) {

    return (<>
    <FocusNavbar title={props.title}/>
    {props.children}
    </>)


} export default withAuthorization(FocusLayout)