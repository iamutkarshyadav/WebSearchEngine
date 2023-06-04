import React, { useState } from 'react'
import "./Search.css"
import { useNavigate } from 'react-router-dom';import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


function Search({ hidebuttons }) {
  const [{ }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })
    navigate("/search");
  }
  return (
    <form className='search'>
      <div className='search__input'>
        <SearchIcon className='searchicon' />
        <input value={input} on onChange={e =>setInput(e.target.value)} />
        <MicIcon/>
      </div>
      {                                       
        ! hidebuttons ? (  <div className='search__buttons'>
        <Button type='submit'onClick={search} variant='outlined'>Google Search</Button>
       <Button type='submit' variant='outlined'>I'm Feeling Lucky</Button>
        </div>) : (
            <div className='search__buttons'style={{ display:'none'}}>
        <Button type='submit'onClick={search} variant='outlined'>Google Search</Button>
        </div>
        )
      }
    </form>
  )
}

export default Search;
