import React, { useCallback, useEffect, useState } from 'react'
import MovieInfo from './MovieInfo'
import PropTypes from 'prop-types'
import Loading from './Loading'

export default function MovieMain(props) {
  let {title} = props
  const [response,setresponse]=useState("True")
  const [datalog, setdatalog] = useState([])
  const[loading,setloading] =useState(false)

  const fetchData = async() => {
    setloading(true)
    let url = `https://omdbapi.com/?s=${title}&apikey=1d74f280`
    let data = await fetch(url)
    let parsedata = await data.json()
    setresponse(parsedata.Response)
    setdatalog(parsedata.Search)
    setloading(false)
  }

  useEffect(() =>
  {
    fetchData();
  },[])

  return (
    <>
      <div className='container'>
      <div className="row my-2">
        {loading? <Loading></Loading>: <h2>Results Found:</h2> }
        {response === "True" ? (datalog.map((element) =>
        {
          return <div className='col-md-4 my-2' key={element.Poster}>
            <MovieInfo title={element.Title} year={element.Year} type={element.Type} image={element.Poster}></MovieInfo>
            </div>
        }
        )) : <h2>No results found</h2>}
        </div>
    </div>
    </>
  )
}

MovieMain.defaultProps = {
  title: ""
}

MovieMain.prototypes = {
  title: PropTypes.string
}
