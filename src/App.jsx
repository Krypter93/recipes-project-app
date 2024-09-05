import { Container, Row, Col} from "react-bootstrap"
import { RandomRecipes } from "./components/Random"
import { SearchRecipes } from "./components/Search"
import { Loading } from "./components/Loading"
import { Error } from "./components/Error"
import styles from './assets/styles/main.module.css'
import { useSelector, useDispatch } from "react-redux"
import {fetchRandomRecipes} from './service/redux/randomRecipesSlice'
import { useEffect } from 'react';

function App() {
  const state = useSelector(state => state.randomRecipes.status)
  const data = useSelector(state => state.randomRecipes.random)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRandomRecipes())
}, [])

  return (
    <>
      <Container fluid style={{backgroundColor: 'F5F5F5', height: '100vh'}}>
        <Row>
          <Col md={2} style={{height: '100vh'}} className={`${styles['aside-column']} justify-content-center bg-success`}>
              {/* Aside column */}
              <SearchRecipes />
          </Col>

          {/* Main Content */}
          {state === 'loading' && 
          <Col className="d-flex justify-content-center align-items-center">
            <Loading />
          </Col>}  
          
          {state === 'succeeded' && 
          <Col>
            <RandomRecipes recipes={data} />
          </Col>}

          {/* {state === 'failed' &&
          <Col>
            <Error />
          </Col>} */}
        </Row>
        </Container> 
    </>
  )
}

export default App
