
import { AppLayoutProps } from "../../common/props/app-layout-props";
import Navbar from "../../components/Navbar/Navbar";
import withAuthorization from "../Authentication/withAuthorization";

function AppLayout(props : AppLayoutProps) {
    return (<>
    <Navbar title={props.title}/>
    <>{props.children}</>
    </>)
}
// withAuth(HOC) deve ser capaz de passar suas propriedades (no caso as AuthProps) para o elemento envelopado, independente se esse elemento as estiver usando ou não. Por isso, AppLayoutProps deve estender AuthProp.

export default withAuthorization(AppLayout);