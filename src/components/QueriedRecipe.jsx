import { Error } from "./Error"
import { Row, Col, Card, /* Container */ } from "react-bootstrap"
import PropTypes from 'prop-types'
import styles from '../assets/styles/main.module.css'
import { useLocation, useNavigate } from "react-router-dom"
import { RiArrowGoBackLine } from "react-icons/ri";
import { clearInputValue } from "../service/redux/inputSearchSlice"
import { useDispatch } from "react-redux"
import { setMenuStatus } from "../service/redux/isMenuOpenSlice"


export const QueriedRecipe = () => {
    const location = useLocation()
    const query = location.state.data
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleBackHome = () => {
        navigate('/')
        dispatch(clearInputValue())
        dispatch(setMenuStatus())
    }

    const handleClickRecipe = (recipeId) => {
        navigate(`/recipe/${recipeId}`)
    }
    

    return (
        <>
            {query && 
                <Row>
                    
                    <Col>
                        <h1 className="text-center mt-2 text-success display-5">Results</h1>
                    </Col>
                </Row>}

                <Row>
                    <RiArrowGoBackLine style={{fontSize: '1.5em', cursor: 'pointer', marginRight: '85%', marginBottom: '1em'}} onClick={handleBackHome}/>
                </Row>
                

                {/* Card */}
                {Array.isArray(query) && query.length > 0 ? (
                    <Row className="mt-2 justify-content-center p-5"> 
                        {query.map((elem) => (
                    <Col xs={12} md={3} className='mt-3' key={elem.id}>
                        <Card className={styles['cards']}>
                            <Card.Body onClick={() => handleClickRecipe(elem.id)}>
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
                
                
        </>
    )
}

QueriedRecipe.propTypes = {
    data: PropTypes.array
}