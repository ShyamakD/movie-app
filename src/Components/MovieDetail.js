import React from 'react'
import PropTypes from 'prop-types'

export default function MovieDetail(props) {
  return (
    <div >
        <div className="card my-4" style={{width: "20rem", backgroundColor:"#fcde67", border:"none", boxShadow:"10px 10px #f4b30f"}}>
        
        <div className="card-body" style={{backgroundColor:"#fcde67"}}>
        <h5 className="card-title d-flex align-items-center justify-content-center"  style={{backgroundColor:"#fcde67"}}>{props.title}
        </h5>
        </div>
    </div>
    </div>
  )
}
