import { Row, Col } from "react-bootstrap"

export const Loading = () => {
    return (
        <>
            <Row>
                <Col>
                    <h1 className="text-center mt-2 display-3 text-success">Loading...</h1>
                </Col>
            </Row>
        </>
    )
}