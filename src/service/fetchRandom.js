import { API } from "../service/api/api_credentials"

export const fetchRandomRecipes = async () => {
    try {
        const response = await fetch(`${API.URL}/random?apiKey=${API.KEY}&number=${Math.floor(Math.random() * 20 + 1)}`)
        if(!response.ok) throw new Error('Something went wrong!')
        const data = await response.json()
        return data.recipes
    } catch (error) {
        console.log('Error: ', error);
    }
}