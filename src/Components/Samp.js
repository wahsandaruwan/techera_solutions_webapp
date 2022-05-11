import { AnimationOnScroll } from "react-animation-on-scroll"
import "animate.css/animate.min.css"

const Samp = () => {
    return (
        <>
            <div className="section">
                <AnimationOnScroll duration={2} animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight">
                    <h1>Hello Mister Champion!</h1>
                </AnimationOnScroll>
            </div>
        </>
    )
}

export default Samp