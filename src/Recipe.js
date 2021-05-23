import React from 'react';
import style from './recipe.module.css';
const Recipe =({title, calories, image, ingredients})=>{

    return(

        <div className={style.recipe}>
    <h1 >{title} </h1>
    <ul >
       {ingredients.map(ingredient=>(
       <li>{ingredient.text}</li>))}
   <p> Calories : {calories} Kcals </p>
    </ul>
    
    <img className={style.image} src={image} alt=""></img>
    

    
        </div>
    );
};
export default Recipe;