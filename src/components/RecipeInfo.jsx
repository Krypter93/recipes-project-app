import { Row, Col, Container, Image } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchRecipeInfo, clearRecipeInfo } from "../service/redux/recipeInfoSlice"
import { Loading } from "./Loading"
import { Error } from "./Error"
import styles from '../assets/styles/main.module.css'
import { FaClock } from "react-icons/fa6";
import ListGroup from 'react-bootstrap/ListGroup';
import { RiArrowGoBackLine } from "react-icons/ri";
import { clearInputValue } from "../service/redux/inputSearchSlice"
import { setMenuStatus } from "../service/redux/isMenuOpenSlice"


export const RecipeInfo = () => {

    const dispatch = useDispatch()
    const recipeInfoStatus = useSelector(state => state.recipeInfo.status)
    const recipeInfoValue = useSelector(state => state.recipeInfo.value)
    const mobileMenuStatus = useSelector(state => state.isMenuOpen.value)
    const navigate = useNavigate()
    const { recipeId } = useParams()
    
    useEffect(() => {
        dispatch(clearRecipeInfo())
        dispatch(fetchRecipeInfo(recipeId))
    }, [recipeId, dispatch])

    const handleBackHome = () => {
        if (mobileMenuStatus) {
            dispatch(setMenuStatus())
        } 
        navigate('/')
        dispatch(clearInputValue())
    }

    
    return (
        <>
            <Row>
                {recipeInfoStatus === 'loading' && <Col><Loading /></Col>}
                {recipeInfoStatus === 'failed' && <Col><Error /></Col>}
                {recipeInfoStatus === 'succeeded' && 
                    <>
                    <Container fluid style={{backgroundColor: 'F5F5F5', height: '100vh'}}>
                        <Col>
                            <h1 className="text-center mt-5 text-success display-5">{recipeInfoValue[0].title}</h1>
                        </Col>

                        <Row>
                            <Col className="text-center" >
                                <RiArrowGoBackLine className={styles['back-arrow']} onClick={handleBackHome}/>
                                <Image src={recipeInfoValue[0].image} fluid roundedCircle/>
                            </Col>
                            <Row className="text-center mt-3" >
                                <p className={`${styles['text']}`}><FaClock /> Ready in: {recipeInfoValue[0].readyInMinutes} minutes</p>
                                <span className={`${styles['instructions']} text-center`}>Instructions:</span>
                                <ListGroup as="ol" numbered>
                                    {recipeInfoValue[0].analyzedInstructions[0].steps.map((step, index) => (
                                        <ListGroup.Item variant="light" as="li" key={index} className={`${styles['listElem']} m-2`}>{step.step}</ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Row>
                        </Row>
                        </Container>
                    </>} 
            </Row>
        </>
    )
}