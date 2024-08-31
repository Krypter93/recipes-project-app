import {Row, Col} from 'react-bootstrap';
import { fetchRandomRecipes } from '../service/fetchRandom';
import { useEffect } from 'react';

export const RandomRecipes = () => {
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchRandomRecipes();
            console.log(response);
        }
        fetchData()
    }, [])
    
    return (
        <>
            <Row>
                <Col>
                    <h1 className="text-center mt-2 text-success display-5">Popular Recipes</h1>
                </Col>
            </Row> 
        </>
    )
}