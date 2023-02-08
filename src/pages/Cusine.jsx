import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {useState,useEffect} from 'react'
import {Link,useParams} from "react-router-dom"
function Cusine() {
    const params = useParams();
    const [cuisine,setCuisine] = useState([]);
    const getRequests = async (name)=>
    {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=645dca0687fa4aa9a03acac2b8940a19&cuisine=${name}`);
      const dat = await data.json();
      console.log(dat.results);
      setCuisine(dat.results);
    }
    useEffect(()=>{
        getRequests(params.type);
    },[params.type]
    )
  return (
      <div>
         {
             cuisine !== undefined &&
             <Grid animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{duration: 0.5}}>
             {
                 cuisine.map((el)=>
                 {
                     return (
                         <Link to={"/recipe/"+el.id}>
                         <Card key = {el.id}>
                         <img src={el.image}/>
                         <h4>{el.title}</h4>
                        </Card>
                         </Link>
                         
                     )
                 
                 })
             }
           
         </Grid>
         }

         {
             cuisine === undefined &&
             <h1 style={{textAlign: "center"}}>Oops, something wrong with your network!!!</h1>
         }
    </div>
    
  )
}

const Grid = styled(motion.div)`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(25rem,1fr));
grid-gap: 1rem;`

const Card = styled.div`
border-radius: 2rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img
{
    border-radius: 2rem;
    width: 100%;
    object-fit: cover;
}
Link
{
    text-decoration: none;
}

h4
{
    text-align: center;
    padding: 1rem;
    text-decoration: none;s
}`

export default Cusine