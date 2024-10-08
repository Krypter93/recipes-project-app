import { Container, Row, Col} from "react-bootstrap"
import { RandomRecipes } from "./components/Random"
import { SearchRecipes } from "./components/Search"
import { Loading } from "./components/Loading"
import styles from './assets/styles/main.module.css'
import { useSelector, useDispatch } from "react-redux"
import {fetchRandomRecipes} from './service/redux/randomRecipesSlice'
import { useEffect, useRef } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { setMenuStatus } from "./service/redux/isMenuOpenSlice"
import { Error } from "./components/Error"

function App() {
  const state = useSelector(state => state.randomRecipes.status)
  const data = useSelector(state => state.randomRecipes.random)
  const mobileMenu = useSelector(state => state.isMenuOpen.value)
  const dispatch = useDispatch()
  const columnRef = useRef(null)
  const ref2 = useRef(null)
  const storageData = JSON.parse(localStorage.getItem('random'))

useEffect(() => {
  if(!storageData) {
    dispatch(fetchRandomRecipes())
  }
}, [dispatch, storageData])

const toggleMobileMenu = () => {
  dispatch(setMenuStatus())
  if(mobileMenu) {
    columnRef.current.style.transform = 'translateX(-100%)'
    ref2.current.classList.add(`${styles['mobile-column']}`)
  } else {
    columnRef.current.style.transform = 'translateX(0%)'
    ref2.current.classList.remove(`${styles['mobile-column']}`)
  }
}


  return (
    <>
      <Container fluid style={{backgroundColor: 'F5F5F5'}}>
        <Col className={styles['mobile-menu']}>
          {mobileMenu ? <IoClose onClick={toggleMobileMenu} /> : <IoMenu title="Menu" onClick={toggleMobileMenu}/>}
        </Col>
        <Row>
          <Col ref={columnRef} md={2} style={{height: '100vh'}} className={`${styles['aside-column']} justify-content-center bg-success`}>
              {/* Aside column */}
              <SearchRecipes />
          </Col>

          {/* Main Content */}
          {!storageData ? (
            <>
              {state === 'loading' && (
                <Col className="d-flex justify-content-center align-items-center">
                  <Loading />
                </Col>
              )}

              {state === 'succeeded' && (
                <Col ref={ref2} className={styles['mobile-column']}>
                  <RandomRecipes recipes={data} />
                </Col>
              )}

              {state === 'rejected' && (
                <Col ref={ref2} className={styles['mobile-column']}>
                  <Error />
                </Col>
              )}
            </>
          ) : (
            <Col ref={ref2} className={styles['mobile-column']}>
              <RandomRecipes recipes={storageData} />
            </Col>
          )}
        </Row>
        </Container> 
    </>
  )
}

export default App
