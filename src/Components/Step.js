import { useEffect } from "react"

// Scroll Animation
import Aos from "aos"
import "aos/dist/aos.css"

const Step = ({ key, cls, no, details }) => {
    // Global Animations
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                className={`step ${cls}`} key={key}>
                <p className="no">{no}</p>
                <p className="details">
                    {details}
                </p>
            </div>
        </>
    )
}

export default Step