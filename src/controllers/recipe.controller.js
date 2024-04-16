import * as recipeServices from "../services/recipe.services.js";



export const createRecipe = (req,res) => {
    const {name, weight, id_user, ingredients} = req.body
    recipeServices.createRecipe(name, weight, id_user, ingredients)
        .then((result) => {
            res.status(200).json({
                message: "Recipe Create Successfully",
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

export const getRecipes = (req, res) => {

    recipeServices.getRecipes()
        .then((result) => {
            const recipes = result[0].map(recipe => {
                if (recipe.ingredients) {
                    recipe.ingredients = JSON.parse(recipe.ingredients);
                }
                return recipe;
            });
            res.status(200).json({
                message: "Recipes get successfully",
                recipes : recipes
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })

}









