import db from "../config/db.js"


export const updateRecipe = (id_recipe,name,ingredients) => {

    return new Promise((resolve,reject) => {

        const query = `CALL UpdateRecipes(${id_recipe}, '${name}','${JSON.stringify(ingredients)}')`;

        db.execute(query,[id_recipe,name,ingredients])
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
export const createRecipe = (name, id_user, ingredients) => {
    return new Promise((resolve, reject) => {
        const query = `CALL InsertRecipes('${name}', ${id_user}, '${JSON.stringify(ingredients)}')`;
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
                JSON_OBJECTAGG(
                        JSON_UNQUOTE(di.name),
                        JSON_OBJECT('id',di.dyeInventory_id,'weight', ri.weight, 'notes', JSON_UNQUOTE(ri.notes), 'dyeType', dt.name)
                ) AS ingredients
            FROM
                RecipeRegistry rr
                    INNER JOIN
                RecipeIngredients ri ON rr.recipeRegistry_id = ri.recipeRegistry_id
                    INNER JOIN
                DyeInventory di ON ri.dyeInventory_id = di.dyeInventory_id
                    INNER JOIN
                DyeType dt ON di.dyeType_id = dt.dyeType_id
            GROUP BY
                rr.recipeRegistry_id, rr.name;
            `;

        db.execute(query)
            .then( (result) => resolve(result))
            .catch( (err) => reject(err))

    })
}