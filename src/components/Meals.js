import React, { useState } from "react";
import MealItem from "./MealItem";
import './style.css';
const Meals = () => {
    const[search,setSearch]=useState("");
    const[Mymeal,setMeal]=useState();
    const searchMeal=(evt)=>{
        if(evt.key==="Enter")
        {
            // fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=s=${search}`)

            // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res=>res.json())
            .then(data=> {setMeal(data.meals);
                console.log(data)
                setSearch("")})
        }
    }       
    // www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
    return (
        <>
            <div className="main">
                <div className="heading">
                    <h1>Search Your Food Recipe</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore unde sed ducimus voluptates illum!</h4>
                </div>
                <div className="searchBox">
                    <input type="search" className="search-bar" onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={searchMeal}/>
                </div>
                <div className="container">
                   {   
                  
                    (Mymeal==null)? <p className="notSearch">Not found</p> : 
                         Mymeal.map((res)=>{
                             return(
                            <MealItem data={res}/>)} 
                     
                    ) 
                   
                   }
                </div>
            </div>
        </>
    )
}
export default Meals;
