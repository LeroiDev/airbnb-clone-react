import React,{useState} from 'react'
import './banner.css'
import Button from '@material-ui/core/Button';
import Search from '../search/Search';

const BannerSection = () => {
 const [showSearch,setShowSearch] = useState(false);

 const searchBtnHandler = () =>{
    setShowSearch(!showSearch);
 }

  return (
    <section className="banner">
      <div className="banner__search">
        <Button onClick={searchBtnHandler}
        className="banner__searchButton"
        variant='outlined'
  >{showSearch ? "CLOSE DATES": "SEARCH DATES"}</Button>
      {showSearch && <Search/>}
      </div>
      <div className="banner__info">
        <h1>Go anywhere your imagination takes you</h1>
        <h5>Settle in somewhere new, 
          discover stays near you now and 
          live,work or just go to relax.</h5>
          <Button
            variant="outlined"
          >Explore nearby</Button>
      </div>
    </section>
  )
}

export default BannerSection
