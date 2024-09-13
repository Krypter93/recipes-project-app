import { Row, Col } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchRecipeInfo } from "../service/redux/recipeInfoSlice"
import { Loading } from "./Loading"
import { Error } from "./Error"

export const RecipeInfo = () => {

    const location = useLocation()
    const dispatch = useDispatch()
    const recipeInfoStatus = useSelector(state => state.recipeInfo.status)
    const recipeInfoValue = useSelector(state => state.recipeInfo.value)
    
    console.log(location.state.id);

    useEffect(() => {
        dispatch(fetchRecipeInfo(location.state.id))
    }, [])

    
    

    return (
        <>
            <Row>
                {recipeInfoStatus === 'loading' && <Col><Loading /></Col>}
                {recipeInfoStatus === 'failed' && <Col><Error /></Col>}
                {recipeInfoStatus === 'succeeded' && 
                    <Col>
                        <h1 className="text-center mt-2 text-success display-5">{recipeInfoValue[0].title}</h1>
                    </Col>} 
            </Row>
        </>
    )
}