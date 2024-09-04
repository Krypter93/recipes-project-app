import {Row, Col, Card} from 'react-bootstrap';
import {fetchRandomRecipes} from '../service/redux/randomRecipesSlice';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const RandomRecipes = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.randomRecipes.random)

    useEffect(() => {
        dispatch(fetchRandomRecipes())
    }, [])

    return (
        <>
            <Row>
                <Col>
                    <h1 className="text-center mt-2 text-success display-5">Popular Recipes</h1>
                </Col>
            </Row> 

            {/* Card */}
            <Row  className="mt-2 justify-content-center">
                {state.map((recipe, index) => (
                    <Col xs={12} md={3} className='mt-3' key={recipe.id + index}>
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Img variant="top" src={`${recipe.image}`}/>
                                <Card.Title>{`${recipe.title}`}</Card.Title>
                                <Card.Text>{`Ready in: ${recipe.readyInMinutes} minutes`}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>  
            ))} 
                </Row>
        </>
    )
}