import React from 'react'
import styled from 'styled-components'
import {useState, useEffect} from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import {Link} from 'react-router-dom'
import '@splidejs/react-splide/css'

function Veggie() {
  const [veggie, setVeggie] = useState([]);
  useEffect(()=>{
  makeRequest();
  },[])
  const makeRequest = async ()=>
  {
     const check = localStorage.getItem('veggie');
     if(check)
     {
       setVeggie(JSON.parse(check));
     }
     else
     {
      const data = await fetch('https://api.spoonacular.com/recipes/random?apiKey=645dca0687fa4aa9a03acac2b8940a19&number=9&tags=vegetarian');
      const dat = await data.json();
      localStorage.setItem('veggie',JSON.stringify(dat.recipes));
      setVeggie(dat.recipes);
     }
      
    
  }
  return (
    <div>
    {
      <Wrapper>
        <h3>Veggie Picks</h3>
        
     <Splide options={{
       perPage: 2,
       arrows: false,
       pagination: false,
       drag: "free",
       gap: "2rem"
     }}>
       {
      veggie.map((recipe) => 
     
       {return (
           <SplideSlide key={recipe.title}>
             <Link to={"/recipe/"+recipe.id}>
             <Card className="card" >
           <p>{recipe.title}</p>
           <img src = {recipe.image} alt = {recipe.title}/>
           <Gradient/>
         </Card>
             </Link>
           
           </SplideSlide> )
     })
    }
     </Splide>
     </Wrapper>
    
    }
   
  </div>
  )
}
const Wrapper = styled.div`
margin: 2rem 0rem;
max-width: 1000px;
margin: 0 auto;`;

const Card  = styled.div`
min-height: 15rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

img 
{
  
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

p{
  position: absolute;
  left: 50%;
  bottom: 0;
  z-index: 10;
  transform: translate(-50%,0);
  color: white;
  width: 100%;
  text-align: center;
  height: 40%;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`

export default Veggie