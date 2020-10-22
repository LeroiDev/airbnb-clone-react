import React,{useState} from 'react';
import './search.css';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {DateRangePicker} from "react-date-range";
import PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Search = () => {
const [startDate,setStartDate] = useState(new Date());
const [endDate,setEndDate] = useState(new Date());

// according to docs need this object
const selectionRange = {
  startDate: startDate,
  endDate: endDate,
  key: "selection",
}
// function selecting dates
function handleSelect(ranges) {
  setStartDate(ranges.selection.startDate);
  setEndDate(ranges.selection.endDate);
}
// useHistory react router
// no need to worry about styling now this way.
// having a link added and all.
const history = useHistory();
  return (
    <div className="search">
      <DateRangePicker className="date__picker" ranges={[selectionRange]} onChange={handleSelect}/>
      <h2>Number of guests:
      <input min={1} defaultValue={2}  type="number"/>
        <PeopleIcon/>
      </h2>
      <Button
      onClick={()=>history.push('/search')}
      >Search Airbnb</Button>
    </div>
  )
}

export default Search
