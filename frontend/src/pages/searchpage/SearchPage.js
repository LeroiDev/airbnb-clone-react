import React from 'react'
import './searchpage.css';
import {Button} from "@material-ui/core"
import SearchResult from '../../components/searchresult/SearchResult';
// images
import searchOne from '../../img/searchOne.jpg'
import searchTwo from '../../img/searchTwo.jpg'
import searchThree from '../../img/searchThree.jpg'
import searchFour from '../../img/searchFour.jpg'
import searchFive from '../../img/searchFive.jpg'


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
      <SearchResult
        img={searchOne}
        location={"Private room in center of Pretoria"}
        title={"Stay at this spacious and elegant house"}
        desc={"2 guest · 1 bedroom · 1 bed · 1 bathroom · Wifi · kitchen · Free parking · washing machine · TV · Netflix"}
        star={4.8}
        price={"R750/night"}
        total={"R1500 total"}
      />
      <SearchResult
        img={searchTwo}
        location={"Private apartment in Centurion"}
        title={"Stay at this neat apartment home"}
        desc={"2 guests · 1 bedroom · 1 bed · 1 bathroom · Wifi · kitchen · Free parking · washing machine · TV · Netflix"}
        star={4.5}
        price={"R500/night"}
        total={"R1000 total"}
      />
      <SearchResult
        img={searchThree}
        location={"Romantic room in Pretoria "}
        title={"Stay at this romantic game lodge"}
        desc={"2 guests · 1 bedroom · 1 bed · 1 bathroom · Wifi · kitchen · Free parking · washing machine · TV · Netflix · balcony"}
        star={4.9}
        price={"R1000/night"}
        total={"R2000 total"}
      />
      <SearchResult
        img={searchFour}
        location={"Private wildlife room near Pretoria"}
        title={"Enjoy a wildlife stay in this comfortable modern hut"}
        desc={"2 guests · 1 bedroom · 1 bed · 1 bathroom · Wifi · kitchen · Free parking · washing machine · TV · Netflix"}
        star={4}
        price={"R360/night"}
        total={"R720 total"}
      />
      <SearchResult
        img={searchFive}
        location={"Private house in Pretoria"}
        title={"Book this entire house"}
        desc={"3 guest · 1 bedroom · 1 bed · 1 bathroom · Wifi · kitchen · Free parking · washing machine · TV · Netflix"}
        star={4.2}
        price={"R350/night"}
        total={"R1050 total"}
      />
    </main>
  )
}

export default SearchPage
