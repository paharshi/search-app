import React from "react";
import './style.css';

const MealItem=(getMeal)=>{
    console.log(getMeal.data)
    return(
        <>
             <div className="card">
                        <img src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg" alt="meal"/>
                        <div className ="info">
                            <h2>Spicy Arrabiata Penne</h2>
                            <p>Italian</p>
                        {/* <h2>{getMeal.data.strMeal}</h2>
                        <p>{getMeal.data.strArea} food</p> */}
                        </div>
                        <div className ="recipe">
                            <h2>Recipe</h2>
                            <p>Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.</p>
                            {/* <p>{getMeal.data.strInstructions}</p> */}
                            <img src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"/>
                            {/* <img src={getMeal.data.strMealThumb}/> */}
                            {/* <a href={getMeal.data.strSource}>Watch video</a> */}
                            <a herf="https://www.youtube.com/watch?v=1IszT_guI08">Watch Video</a>
                        </div>
            </div>  
            <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLcjzfW_Wx_jh7swBDD9xC3WD4CqAQqarFA&usqp=CAU" alt="meal"/>
                        <div className ="info">
                            <h2>Double Masala Chicken Dum Biryani Recipe</h2>
                            <p>Chicken Dum Biryani </p>
                        </div>
                        <div className ="recipe">
                            <h2>Recipe</h2>
                            <p>There may be many kinds of Biryani but the spice, sourness, aroma and taste of the Hyderabadi Biryani are special. Add the Telugu spice to the Nizam Biryani, and then you get the very special Hyderabadi Biryani. Hyderabadi Biryani is spicier than the other Biryanis, but it is not enough to have the spices that are cooked along with the Chicken. When it comes to the plate, the spice is not felt. Some of the Rice will remain white. That is why they add Mirchi ka Salan and satisfy themselves. But this Double Masala Chicken Biryani will ensure that everyone gets the spice.
When you go to a restaurant, unless you order a “Chicken Biryani with Double Masala”, you do not get enough Masala. Even that is served separately instead of the one cooked with the Chicken. So, it is not all that tasty.</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLcjzfW_Wx_jh7swBDD9xC3WD4CqAQqarFA&usqp=CAU"/>
                            {/* <img src={getMeal.data.strMealThumb}/> */}
                            {/* <a href={getMeal.data.strSource}>Watch video</a> */}
                            <a herf="https://www.youtube.com/watch?v=-WKevePVB-I">Watch Video</a>
                        </div>
            </div>  
            <div className="card">
                        <img src="https://i0.wp.com/www.onceuponachef.com/images/2015/01/tandoori-chicken-1.jpg?resize=1200%2C1625&ssl=1" alt="meal"/>
                        <div className ="info">
                            <h2>Deliciously super-crispy skin, Tandoori chicken </h2>
                            <p>Tandoori Chicken </p>
                        </div>
                        <div className ="recipe">
                            <h2>Recipe</h2>
                            <p>Tandoori chicken is a traditional Indian dish of chicken marinated in yogurt, citrus, and spices, and then roasted in a tandoor, a cylindrical clay oven. The chicken gets its signature reddish hue from the combination of spices, the flavor of which is further enhanced by toasting them in a pan prior to incorporating into the marinade. Tandoori chicken is a simple dish to prepare, and you can replicate the tandoor environment at home by roasting in a high-heat oven. In this recipe, adapted from Food & Wine, the chicken is deliciously seasoned with super-crispy skin. The chicken is best marinated for a few hours or overnight, but if you’re in a time crunch, you can simply coat the chicken with the marinade and cook it immediately; it will still be packed with flavor.</p>
                            <img src="https://i0.wp.com/www.onceuponachef.com/images/2015/01/tandoori-chicken-1.jpg?resize=1200%2C1625&ssl=1"/>
                            <a herf="https://www.youtube.com/watch?v=WP9vHhziufM">Watch Video</a>
                        </div>
            </div>  
            <div className="card">
                        <img src="https://preppykitchen.com/wp-content/uploads/2022/05/Strawberry-Cake-Recipe-Card.jpg" alt="meal"/>
                        <div className ="info">
                            <h2>This melt in your mouth strawberry cake filled with fresh strawberries and covered</h2>
                            <p>Strawberry Cake </p>
                        </div>
                        <div className ="recipe">
                            <h2>Recipe</h2>
                            <p>This made from scratch with strawberry cake recipe is such a delightful and pretty cake. Packed with strawberry flavors and a gorgeous shade of pink, this cake is perfect for any occasion. No box mix or Jell-O in this cake! Made with real strawberries, this cake will steal the show with its light and tender crumb.
Filled and coated in a wonderful strawberry cream cheese frosting, this cake has strawberry flavoring through and through. Try making my strawberry shortcake recipe, strawberry pie recipe, strawberry chocolate cake recipe if you have extra strawberries on hand. Or, try my red velvet cake recipe or vanilla cake recipe if you want another easy cake recipe.</p>
                            <img src="https://preppykitchen.com/wp-content/uploads/2022/05/Strawberry-Cake-Recipe-Card.jpg"/>
                            <a herf="https://www.youtube.com/watch?v=WP9vHhziufM">Watch Video</a>
                        </div>
            </div>  
        </>
    )
}
export default MealItem;