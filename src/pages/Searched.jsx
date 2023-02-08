import React from 'react'
import {useEffect,useState} from 'react'
import {useParams,Link} from "react-router-dom"
import styled from 'styled-components'

function Searched() {
    const [searched,setSearched] = useState([]);
    const params = useParams();

    useEffect(()=>
    {
        getRequests(params.search);
    },[params.search])

    const getRequests = async (name)=>
    {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=645dca0687fa4aa9a03acac2b8940a19&query=${name}`);
        const dat = await data.json();
         setSearched(dat.results);
         console.log(dat);
    }
  return (
     
      <div>

          {
              searched !== undefined && (
                <Grid>
                {
                   
                    
                     searched.map((el)=>
                     {
                        return(
                      <Link to={'/recipe/'+el.id}>
                             <Card key={el.id}>
                          <img src={el.image} alt={el.title}/>
                          <h4>{el.title}</h4>
                      </Card>
                      </Link>
                         
                        )
                     })
                    }
             </Grid>
              ) 
             
        
          }
         {
             searched === undefined &&
             (
                <h1 style={{textAlign: "center"}}>Oops, something wrong with your network!!!</h1>
             )
         }
      </div>
    
  )
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(17rem,1fr));
grid-gap: 3rem;`

const Card = styled.div`

max-height: 30rem;
overflow: hidden;
border-radius: 2rem;
img
{
    border-radius: 2rem;
}
a
{
    text-decoration: none;
}

h4
{
    text-align: center;
    padding: 1rem;
}`

export default Searched