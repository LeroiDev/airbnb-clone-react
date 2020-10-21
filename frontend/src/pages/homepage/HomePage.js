import React from 'react'
import './home.css'
import BannerSection from '../../components/bannerSection/BannerSection';
import Card from '../../components/card/Card';
// images
import cardOne from '../../img/cardOne.jpg'
import cardTwo from '../../img/cardTwo.jpg'
import cardThree from '../../img/cardThree.jpg'
import cardFour from '../../img/cardFour.jpg'
import cardFive from '../../img/cardFive.jpg'
import cardSix from '../../img/cardSix.jpg'

const HomePage = () => {
  return (
    <>
      <BannerSection/>
      <div className="home__section">
        <Card src={cardOne} title={"Unique stays"} desc={"Spaces that are more than just a place to sleep."}/>
        <Card src={cardTwo} title={"Online Experiences"} desc={"Unique activities we can do together, led by a world of hosts."} />
        <Card src={cardThree} title={"Entire homes"} desc={"Comfortable private places, with room for friends or family."}/>
      </div>
      <div className="home__section">
        <Card src={cardFour} title="Penthouse in Sandton" desc={"A sight to behold in a luxurious penthouse in Johannesburg."} price={"R1500/night"}/>
        <Card src={cardFive} title={"Modern Apartment"} desc={"An impressively modern feel to this listing in the Pretoria area."} price={"R 700/night"}/>
        <Card src={cardSix} title={"Dream destinations"} desc={"Enjoy dream holiday destinations for you and your partner"} price={"R1800/night"}/>
      </div>
    </>
  )
}

export default HomePage
