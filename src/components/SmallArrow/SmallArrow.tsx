import { SmallArrowProps } from "../../common/props/small-arrow-props"
import './SmallArrow.css'

function SmallArrow(props: SmallArrowProps) {
    return (
    <div className="arrow" onClick={props.handleClick}>
        <img src="/assets/img/right-arrow.png" alt="small-arrow" className={props.rotate}/>
    </div>
    )
} export default SmallArrow