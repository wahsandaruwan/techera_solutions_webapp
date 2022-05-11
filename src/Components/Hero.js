import { AnimationOnScroll } from "react-animation-on-scroll"
import "animate.css/animate.min.css"

import { useEffect } from "react"

// Scroll Animation
import Aos from "aos"
import "aos/dist/aos.css"

const Hero = () => {
    // Global Animations
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <div className="section hero-section" id="hero">
                <div className="hero-main-content">
                    <h1
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        className="hero-main-txt">
                        WELCOME TO <span
                            data-aos="fade"
                            data-aos-offset="200"
                            data-aos-delay="1500"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="false"
                            data-aos-once="false">
                            TECHERA
                        </span> SOLUTIONS
                    </h1>
                    <h1
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        className="hero-main-txt">
                        END TO END <span
                            data-aos="fade"
                            data-aos-offset="200"
                            data-aos-delay="1500"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="false"
                            data-aos-once="false">
                            NFT</span> COLLECTION DEVELOPMENT
                    </h1>
                </div>
                <div className="hero-sub-content">
                    <h3
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                        className="hero-sub-txt">
                        READY TO <span
                            data-aos="fade"
                            data-aos-offset="200"
                            data-aos-delay="1500"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true">
                            GET</span> STARTED!
                    </h3>
                    <a
                        data-aos="zoom-in-left"
                        data-aos-offset="-500"
                        data-aos-delay="1500"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                        href="#" className="main-btn">Get Started</a>
                </div>
            </div>
        </>
    )
}

export default Hero