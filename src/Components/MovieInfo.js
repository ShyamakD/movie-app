import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import "./MovieInfo.css"
import MovieDetail from './MovieDetail'

export default function MovieInfo(props) {

const [data,setdata] = useState([])

  const fetchData = async() => {
    let url = `https://omdbapi.com/?t=${props.title}&apikey=1d74f280`
    let data = await fetch(url)
    let parsedata = await data.json()
    setdata(parsedata.imdbRating)
  }

  useEffect(() =>
  {
    fetchData();
  },[])
  

  return (
    <div >
        <div className="card my-4" style={{width: "20rem", backgroundColor:"#fcde67", border:"none", boxShadow:"10px 10px #f4b30f"}}>
        <img src={props.image} className="card-img-top" style={{height:"500px"}} alt="..."/>
        <div className="card-body" style={{backgroundColor:"#fcde67"}}>
        <h5 className="card-title d-flex align-items-center justify-content-center"  style={{backgroundColor:"#fcde67"}}>{props.title}
        </h5>
    </div>
    <ul className="list-group list-group-flush d-flex align-items-center justify-content-center" style={{backgroundColor:"#fcde67"}}>
        <li className="list-group-item" style={{backgroundColor:"#fcde67"}}>{props.type.toUpperCase()}</li>
        <li className="list-group-item" style={{backgroundColor:"#fcde67"}}>{props.year} <span class="badge mx-2" style={{backgroundColor:"#5bccf6", fontWeight:"normal", color:"black"}}>IMDB - {data}</span></li>
    </ul>
    </div>
    </div>
  )
}
