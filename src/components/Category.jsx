import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles,GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components'
import React from 'react'
import {NavLink} from 'react-router-dom'
function Category() {
  return (
    <List>
        <SLink className="link" to = "/cusine/italian">
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to = "/cusine/american">
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to = "/cusine/thai">
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>
        <SLink to = "/cusine/japanese">
            <GiChopsticks/>
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
display: flex;
justify-content: center`


const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
background: linear-gradient(35deg,#494949,#313131);
width: 6rem;
height: 6rem;
cursor: pointer;
transform: scale(0.6);

h4
{
    color: white;
    font-size: 0.8rem;
}
svg
{
    color: white;
    font-size: 1.5rem;
}

&.active
{
    background: linear-gradient(to right,#f27121,#e94057);
}

svg
{
    color: white;
}

h4
{
    color: white;
}
`

export default Category