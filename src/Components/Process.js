import Step from "./Step"
import processDetails from "../data/processDetails.json"

const Process = () => {
    return (
        <>
            <div className="section process-section" id="process">
                {
                    processDetails.map((process, index) => {
                        const { id, details } = process
                        return (
                            <Step indexVal={index} cls={`circle-${id}`} no={id} details={details} key={index} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Process