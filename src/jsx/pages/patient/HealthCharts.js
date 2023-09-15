import { Card, Col, Row } from "react-bootstrap"
import LineChart1 from "../../components/charts/Chartjs/line1"


const Healthcharts = () => {
    return (<>
        <Row>
            <Col xl={6} lg={6}>
                <Card>
                    <Card.Header>
                        <h4 className="card-title">Weight Chart</h4>
                    </Card.Header>
                    <Card.Body>
                        <LineChart1 />
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={6} lg={6}>
                <Card>
                    <Card.Header>
                        <h4 className="card-title">BP chart</h4>
                    </Card.Header>
                    <Card.Body>
                        <LineChart1 />
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={6} lg={6}>
                <Card>
                    <Card.Header>
                        <h4 className="card-title">Sugar chart</h4>
                    </Card.Header>
                    <Card.Body>
                        <LineChart1 />
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={6} lg={6}>
                <Card>
                    <Card.Header>
                        <h4 className="card-title">Water Intake</h4>
                    </Card.Header>
                    <Card.Body>
                        <LineChart1 />
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={6} lg={6}>
                <Card>
                    <Card.Header>
                        <h4 className="card-title">Sleep Chart</h4>
                    </Card.Header>
                    <Card.Body>
                        <LineChart1 />
                    </Card.Body>
                </Card>
            </Col>
         

        </Row>
    </>)
}
export default Healthcharts