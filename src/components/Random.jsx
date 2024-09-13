 import {Row, Col, Card} from 'react-bootstrap';
 import PropTypes from 'prop-types';
 import styles from '../assets/styles/main.module.css';
 import { Error } from './Error';
 import { useNavigate } from 'react-router-dom';
 
 
export const RandomRecipes = ({recipes}) => {

    const navigate = useNavigate()

    const handleClickRecipe = (recipeId) => {
        navigate('/recipe', {state: {id: recipeId}})
    }
   
    return (
        <>
            {recipes && 
            <Row>
                <Col>
                    <h1 className="text-center mt-2 text-success display-5">Popular Recipes</h1>
                </Col>
            </Row> 
            }
            

            {/* Card */}
            <Row  className="mt-2 justify-content-center">
                {recipes && recipes.map((recipe, index) => (
                    <Col xs={12} md={3} className='mt-3' key={recipe.id + index}>
                        <Card  className={styles['cards']}>
                            <Card.Body onClick={() => handleClickRecipe(recipe.id)}>
                                <Card.Img variant="top" src={`${recipe.image}`}/>
                                <Card.Title>{`${recipe.title}`}</Card.Title>
                                <Card.Text>{`Ready in: ${recipe.readyInMinutes} minutes`}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>  
            ))}
                </Row>

                {!recipes && 
                <Col className="d-flex justify-content-center align-items-center">
                    <Error />
                </Col>
                
            } 
        </>
    )
}

RandomRecipes.propTypes = {
    recipes: PropTypes.array
}