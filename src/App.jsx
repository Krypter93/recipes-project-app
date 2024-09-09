import { Container, Row, Col} from "react-bootstrap"
import { RandomRecipes } from "./components/Random"
import { SearchRecipes } from "./components/Search"
import { Loading } from "./components/Loading"
import styles from './assets/styles/main.module.css'
import { useSelector, useDispatch } from "react-redux"
import {fetchRandomRecipes} from './service/redux/randomRecipesSlice'
import { useEffect } from 'react';
/* import { useNavigate } from "react-router-dom" */

function App() {
  const state = useSelector(state => state.randomRecipes.status)
  const data = useSelector(state => state.randomRecipes.random)
 /*  const searchState = useSelector(state => state.recipeSeeker.status)
  const inputState = useSelector(state => state.inputSearch.value) */
  const dispatch = useDispatch()
  /* const navigate = useNavigate() */

  useEffect(() => {
    dispatch(fetchRandomRecipes())
}, [])

/* useEffect(() => {
  if (inputState !== null && searchState === 'succeeded') {
    navigate('/query')
  }
}, [inputState, searchState, navigate]) */

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
        </Row>
        </Container> 
    </>
  )
}

export default App
