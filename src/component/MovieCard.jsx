import React from 'react'
import {NavLink} from 'react-router-dom'

import "./MovieCard.css"

const MovieCard = (props) => {
  return (
    <NavLink to={`/description/${props.title}`}>
      <div className="movie__card">
          <h1>{props.title}</h1>
          <img src={props.image} alt={props.title} />
          {/*<p className='desc'>{props.description}</p>*/}
          <div className="product__rating">
                  {Array(props.rating).fill().map((_i)=>(
                    <p>⭐</p>
                    ))}
              </div>
      </div>
    </NavLink>
    
  )
}

export default MovieCard