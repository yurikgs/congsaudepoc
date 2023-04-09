import { useNavigate } from "react-router-dom"
import { FocusNavbarProps } from "../../common/props/focus-navbar-props"
import SmallArrow from "../SmallArrow/SmallArrow"
import './FocusNavbar.css'

function FocusNavbar (props: FocusNavbarProps) {

    const navigate = useNavigate()
    const navigateBack = () => {
        navigate(-1)
    }

    return (
    <div id="navbar-container">
        <nav>
            <SmallArrow rotate='left' handleClick={navigateBack} />
            <h1>
                {props.title}
            </h1>
        </nav>
    </div>
    )
} export default FocusNavbar