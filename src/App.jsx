import { Container, Row, Col } from "react-bootstrap"
import { RandomRecipes } from "./components/Random"
import styles from './assets/styles/main.module.css'

function App() {
  return (
    <>
      <Container fluid style={{backgroundColor: 'F5F5F5', height: '100vh'}}>
        <Row>
          <Col md={2} style={{height: '100vh'}} className={`${styles['aside-column']} justify-content-center bg-success`}>
              {/* Aside column */}
                Aside
          </Col>

          {/* Main Content */}
          <Col>
          <RandomRecipes />
          </Col>
        </Row>
        </Container>
        
    </>
  )
}

export default App
