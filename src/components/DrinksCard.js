import React, { useState } from 'react'
import { useEffect } from 'react'
import { Table } from 'react-bootstrap'

const DrinksCard = ({text, setText}) => {

  const [drinks, setDrinks] = useState([])

  const url= `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`


  const getDrinks = async() => {
    const resp = await fetch(url)
    const data = await resp.json()
    setDrinks(data.drinks)
  }

  
  useEffect(() => {
    getDrinks()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className=''>
        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Coctel Name</th>
      <th>Tags</th>
      <th>Instructions</th>
      <th>Cup or Glass</th>
      <th>Category</th>
    </tr>
  </thead>
    {
      drinks.map(drink => ( 
      <tbody key={drink.idDrink}>
      <tr >
        <td>{drink.strDrink}</td>
        { drink.strTags === null ? 
        "No tags"
        :
        <td>{drink.strTags}</td>
        }
        { drink.strInstructions === null ? 
        "No instructions"
        :
        <td style={{width: "500px"}}>{drink.strInstructions}</td>
        }
        { drink.strGlass === null ? 
        "No glass description"
        :
        <td>{drink.strGlass}</td>
        }
        <td>{drink.strCategory}</td>
        <td>
          <button className='btn btn-primary'>Order</button>
        </td>
      </tr>
      </tbody>
      ))
    }
</Table>
      
    </div>
  )
}

export default DrinksCard