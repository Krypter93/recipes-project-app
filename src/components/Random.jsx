import {Row, Col, Card} from 'react-bootstrap';
import { useState } from 'react';
import { fetchRandomRecipes } from '../service/fetchRandom';
import { useEffect } from 'react';

export const RandomRecipes = () => {
    const [randomRecipes, setRandomRecipes] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchRandomRecipes();
            setRandomRecipes(Object.values(response))
        }
        fetchData()
    }, [])

    console.log(randomRecipes);
    
    
    return (
        <>
            <Row>
                <Col>
                    <h1 className="text-center mt-2 text-success display-5">Popular Recipes</h1>
                </Col>
            </Row> 

            {/* Card */}
            <Row  className="mt-2 justify-content-center">
                {randomRecipes.map((recipe, index) => (
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