import { AnimationOnScroll } from "react-animation-on-scroll"
import "animate.css/animate.min.css"

const Calling = () => {
    return (
        <>
            <div className="section calling-section">
                {/* <AnimationOnScroll duration={2} animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight">
                    <h1>Hello Mister Champion!</h1>
                </AnimationOnScroll> */}
                <div className="calling-content">
                    <h1 className="calling-txt">
                        SCHEDULE A <span>CALL, </span>
                        WITH US <span>NOW!</span>
                    </h1>
                    <a href="#" className="main-btn">Let's Connect</a>
                </div>
            </div>
        </>
    )
}

export default Calling