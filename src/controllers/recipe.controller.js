import * as recipeServices from "../services/recipe.services.js";

export const updateRecipe = (req,res) => {
    const recipe_id = req.params.id

    const {name,weight,ingredients} = req.body

    console.log(recipe_id,name,weight,ingredients)

    recipeServices.updateRecipe(recipe_id,name,weight,ingredients)
        .then((result) => {
            res.status(200).json({
                message: "Recipe Update Successfully",
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

export const deleteRecipe = (req,res) => {

    const id = req.params.id

    recipeServices.deleteRecipe(id)
        .then((result) => {
            res.status(200).json({
                message: "Recipe Delete Successfully",
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

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









