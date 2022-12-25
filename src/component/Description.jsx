import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import movieData from '../data'


const Description = () => {
    const{movieId}= useParams();
    const theMovie=movieData.find((theMovie)=>theMovie.name===movieId)
    console.log(theMovie)

  return (
    <div className='desc'>
      <Link to ="/" >
      <BsFillArrowLeftCircleFill/> <span>go to Home</span>
      </Link>
        <h1>{theMovie.name}</h1>
          <img src={theMovie.image} alt={theMovie.name} />
          <p>{theMovie.description}</p>
          <div className="product__rating">
            {Array(theMovie.rating).fill().map((_i)=>(<p>⭐</p>))}
          </div>
          <iframe src={theMovie.video} title={theMovie.name} width="540" height="310"/>
    </div>
  )
}

export default Description