import React from 'react'
import './searchpage.css';
import {Button} from "@material-ui/core"

const SearchPage = () => {
  return (
    <main className="searchPage">
      <div className="searchPage__info">
        <p> 69 stays · 26 August to 30 August · 2 guests </p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>


    </main>
  )
}

export default SearchPage
