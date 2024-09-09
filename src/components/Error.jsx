import { Row, Col } from "react-bootstrap"

export const Error = () => {
    return (
        <>
            <Row> 
                <Col>
                    <h1 className="text-center mt-2 display-3 text-danger">Error fetching data</h1>
                    <p className="text-center mt-3 display-6 text-danger">Please try again or check your internet connection</p>
                </Col>
            </Row>
        </>
    )
}