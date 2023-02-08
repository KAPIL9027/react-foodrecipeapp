
import React from 'react'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'

function Recipe() {
  const [recipe,setRecipe] = useState({});
  const [activeTab,setActiveTab] = useState("instructions")
  const params = useParams()
  useEffect(()=>
  {
   getRecipes();
  },[])

  const getRecipes = async ()=>
  {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=645dca0687fa4aa9a03acac2b8940a19`);
    const dat = await data.json();
    console.log(dat);
    setRecipe(dat);
    console.log(recipe.summary);
  }
  return (
    <div>
      {
        recipe !== undefined && 
        <DetailWrapper className="recipe">
        <div className='contentDiv'> 
        <h2>{recipe.title}</h2>
        <img className="recipeImage" src = {recipe.image} alt = {recipe.title}/>
        </div> 
         <Info className="Info">
          <div style={{display: "flex"}}>
          <Button className={activeTab === "instructions" ? "active":""} onClick={()=>{setActiveTab("instructions")}}>Instructions</Button>
           <Button className={activeTab === "ingredients" ? "active":""} onClick={()=>{setActiveTab("ingredients")}}>Ingredients</Button>
          </div>
          {activeTab === "instructions" && ( 
             <div >
               <p dangerouslySetInnerHTML={{__html: recipe.summary}}></p>
               <p style={{marginTop: "0.5rem"}}dangerouslySetInnerHTML={{__html: recipe.instructions}}></p>
             </div>
            ) }
            {activeTab === "ingredients" && ( 
             <div>
              <ul>
                {
                  recipe.extendedIngredients.map((ingredient)=>
                  (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  ))
                }
              </ul>
             </div>
            ) }
           </Info>
      </DetailWrapper>
      }
      {
        recipe === undefined &&
        <h1 style={{textAlign: "center"}}>Oops, something wrong with your network!!!</h1>
      }
    </div>
   
    
  
  )
}

const DetailWrapper = styled.div`
display: flex;
margin: 2rem auto;
.active
{
  background: linear-gradient(35deg,#494949,#313131);
  color: white;

}

h2
{
  margin-bottom: 2rem;

}

li
{
  font-size: 1.2rem;
  line-height: 2.5rem;
}

ul
{
  margin-top: 2rem;
}`

const Button = styled.button`

padding: 1rem 2rem;
margin-bottom: 2rem;
color: #313131;
background: white;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
`

const Info = styled.div`
display: flex;

flex-direction: column;

margin-left: 2rem;`

export default Recipe