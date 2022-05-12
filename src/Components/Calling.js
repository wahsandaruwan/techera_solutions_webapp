const Calling = () => {
    return (
        <>
            <div className="section calling-section">
                {/* <AnimationOnScroll duration={2} animateIn="animate__fadeInLeft" animateOut="animate__fadeOutRight">
                    <h1>Hello Mister Champion!</h1>
                </AnimationOnScroll> */}
                <div className="calling-content">
                    <h1
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        className="calling-txt">
                        SCHEDULE A <span
                            data-aos="fade"
                            data-aos-offset="200"
                            data-aos-delay="1500"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="false"
                            data-aos-once="false">
                            CALL, </span>
                        WITH US <span
                            data-aos="fade"
                            data-aos-offset="200"
                            data-aos-delay="1500"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="false"
                            data-aos-once="false">
                            NOW!</span>
                    </h1>
                    <a
                        data-aos="zoom-out-right"
                        data-aos-offset="0"
                        data-aos-delay="500"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        href="https://google.com" className="main-btn">
                        Let's Connect</a>
                </div>
            </div>
        </>
    )
}

export default Calling