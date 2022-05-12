const Step = ({ indexVal, cls, no, details }) => {
    return (
        <>
            <div
                data-aos={indexVal % 2 === 0 ? "zoom-out" : "zoom-in"}
                data-aos-offset="200"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                className={`step ${cls}`}>
                <p className="no">{no}</p>
                <p className="details">
                    {details}
                </p>
            </div>
        </>
    )
}

export default Step