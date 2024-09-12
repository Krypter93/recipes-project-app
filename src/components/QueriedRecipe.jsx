import { Error } from "./Error"
import { Row, Col, Card, /* Container */ } from "react-bootstrap"
import PropTypes from 'prop-types'
import styles from '../assets/styles/main.module.css'
/* import { SearchRecipes } from "./Search" */
import { useLocation, useNavigate } from "react-router-dom"
import { RiArrowGoBackLine } from "react-icons/ri";
import { clearInputValue } from "../service/redux/inputSearchSlice"
import { useDispatch } from "react-redux"


export const QueriedRecipe = () => {
    const location = useLocation()
    const query = location.state.data
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleBackHome = () => {
        navigate('/')
        dispatch(clearInputValue())
    }
    

    return (
        <>
        {/* <Container fluid style={{backgroundColor: '#F5F5F5', height: '100vh', zIndex: '1'}} className="Prueba"> */}
            {/* <Row> */}
            {/* <Col md={2} style={{height: '100vh'}} className={`${styles['aside-column']} justify-content-center bg-success`}> */}
                {/* Aside column */}
            {/*     <SearchRecipes />
            </Col> */}
        {query && 
            <Row>
                
                <Col>
                    <h1 className="text-center mt-2 text-success display-5">Results</h1>
                </Col>
            </Row>}

            {/* Card */}
            {Array.isArray(query) && query.length > 0 ? (
                <Row className="mt-2 justify-content-center p-5"> 
                    {query.map((elem) => (
                <Col xs={12} md={3} className='mt-3' key={elem.id}>
                    <Card className={styles['cards']}>
                        <Card.Body>
                            <Card.Img variant="top" src={`${elem.image}`} />
                            <Card.Title>{`${elem.title}`}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
                </Row>    
            ) : (
                <Col className="d-flex justify-content-center align-items-center">
                    <Error />
                </Col>
            )} 
            
            <RiArrowGoBackLine style={{fontSize: '1.5em', cursor: 'pointer', marginLeft: '95%', marginBottom: '1em'}} onClick={handleBackHome}/>
            
            {/* </Row> */}
            
        {/* </Container> */}
        </>
    )
}

QueriedRecipe.propTypes = {
    data: PropTypes.array
}