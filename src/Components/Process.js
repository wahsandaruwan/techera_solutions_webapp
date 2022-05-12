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
                            <Step key={index} cls={`circle-${id}`} no={id} details={details} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Process