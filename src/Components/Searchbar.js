import React from 'react'
import "./Searchbar.css";

export default function Searchbar() {
  return (
    <div>
        <form className="d-flex mx-auto my-4" role="search" style={{width:500}}>
        <input className="form-control me-2" placeholder='Search FilmRev' type="search" aria-label="Search" style={{backgroundColor:"#5bccf6", color:"white"}}/>
        <button className="btn " style={{backgroundColor:"#5bccf6", color:"Black"}} type="submit">Search</button>
      </form>
    </div>
  )
}
