import React from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Search() {
    const navigate = useNavigate();
    const [input,setInput] = useState("");
    const submitHandler = (e)=>
    {

        e.preventDefault();
        navigate('/searched/'+input);
        setInput("");
       
    }
  return (
    
        <FormStyle onSubmit={submitHandler}>
        <div>
        <FaSearch/>
        <input onChange={(e)=>{setInput(e.target.value)}}type = "text" value={input}/>
        </div>
        </FormStyle>
        
  )
}

const FormStyle = styled.form`

max-width: 100%;
div
{
    position: relative;
   
}
input {
    border: none;
    background: linear-gradient(35deg,#494949,#313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
   
}

svg
{
    position: absolute;
    top: 50%;
    left: 0%;
    color: white;
    transform: translate(100%,-50%);
    
}

`
export default Search