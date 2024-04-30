import db from "../config/db.js"


export const updateRecipe = (id_recipe,name,weight,ingredients) => {

    return new Promise((resolve,reject) => {

        const query = `CALL UpdateRecipe(${id_recipe}, '${name}', ${weight},'${JSON.stringify(ingredients)}')`;

        db.execute(query,[id_recipe,name,weight,ingredients])
            .then((result) => resolve(result))
            .catch((err) => reject(err))

    })
}

export const deleteRecipe = (id) => {

    return new Promise((resolve,reject) => {

        const query = 'DELETE FROM RecipeIngredients WHERE recipeRegistry_id = ?;'

        db.execute(query,[id])
            .then((result) => resolve(result))
            .catch((err) => reject(err))

    })
}
export const createRecipe = (name, weight, id_user, ingredients) => {
    return new Promise((resolve, reject) => {
        const query = `CALL InsertRecipe('${name}', ${weight}, ${id_user}, '${JSON.stringify(ingredients)}')`;
        console.log(query)
        db.execute(query, [])
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    });
};


export const getRecipes = () => {

    return new Promise((resolve , reject) => {

        const query = `
                SELECT
                    rr.recipeRegistry_id,
                    rr.name AS recipe_name,
                    rr.total_weight AS recipe_total_weight,
                    JSON_OBJECTAGG(
                        JSON_UNQUOTE(i.name), 
                        JSON_OBJECT('weight', i.weight, 'notes', JSON_UNQUOTE(i.notes))
                    ) AS ingredients
                FROM
                    RecipeRegistry rr
                INNER JOIN
                    RecipeIngredients ri ON rr.recipeRegistry_id = ri.recipeRegistry_id
                INNER JOIN
                    Ingredients i ON ri.ingredient_id = i.ingredient_id
                GROUP BY
                    rr.recipeRegistry_id, rr.name, rr.total_weight;
`;

        db.execute(query)
            .then( (result) => resolve(result))
            .catch( (err) => reject(err))

    })
}