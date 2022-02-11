import React, { useState } from 'react'
import { useEffect } from 'react'
import { Table } from 'react-bootstrap'

const DrinksCard = ({text, setText}) => {

  const [drinks, setDrinks] = useState([])

  const url= `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`
  console.log(url)

  const getDrinks = async() => {
    const resp = await fetch(url)
    const data = await resp.json()
    setDrinks(data)
  }

  let drinkArray = Object.values(drinks)
  
  useEffect(() => {
    getDrinks()
  }, [text])
  
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
      drinkArray.map(drink => ( 
      <tbody key={drink[0].idDrink}>
      <tr >
        <td>{drink[0].strDrink}</td>
        { drink[0].strTags === null ? 
        "No tags"
        :
        <td>{drink[0].strTags}</td>
        }
        { drink[0].strInstructions === null ? 
        "No instructions"
        :
        <td style={{width: "500px"}}>{drink[0].strInstructions}</td>
        }
        { drink[0].strGlass === null ? 
        "No glass description"
        :
        <td>{drink[0].strGlass}</td>
        }
        <td>{drink[0].strCategory}</td>
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