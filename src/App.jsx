import { Container, Row, Col } from "react-bootstrap"
import { RandomRecipes } from "./components/Random"
import { SearchRecipes } from "./components/Search"
import styles from './assets/styles/main.module.css'
/* import { fetchRandomRecipes } from "./service/fetchRandom"
import { useEffect } from "react" */

function App() {

  /* useEffect(() => {
    const fetchData = async () => {
        const response = await fetchRandomRecipes();
        console.log(response);
        
    }
    fetchData()
}, []) */


  return (
    <>
      <Container fluid style={{backgroundColor: 'F5F5F5', height: '100vh'}}>
        <Row>
          <Col md={2} style={{height: '100vh'}} className={`${styles['aside-column']} justify-content-center bg-success`}>
              {/* Aside column */}
              <SearchRecipes />
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
