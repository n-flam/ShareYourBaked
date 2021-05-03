
import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import RecipeListItem from './RecipeListItem';

export default function RecipeContainer() {

    const [recipes, setRecipes] = useState([
        {
            img: '',
            title: 'Masaka',
            description: 'tomato, capsicum, eggs',
        }
    ]);

    useEffect(() => {
        
        // TODO: call api to populate the recipes


    }, []); // put in empty array -- means to run this function for only 1 time when the component is loaded



    return (
        <Container>
            {recipes.map((recipe) => {

                return (
                    <RecipeListItem 
                        img={recipe.img}
                        description={recipe.description}
                        title={recipe.title}
                    />
                )

            })}


        </Container>
        
    )
}
