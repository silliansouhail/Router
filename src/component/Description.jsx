import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import movieData from '../data'


const Description = () => {
    const{movieId}= useParams();
    const theMovie=movieData.find((theMovie)=>theMovie.name===movieId)
    console.log(theMovie)

  return (
    <div>
      <Link to ="/" >
      <BsFillArrowLeftCircleFill/> <span>go to Home</span>
      </Link>
        <h1>{theMovie.name}</h1>
          <img src={theMovie.image} alt={theMovie.name} />
          {/*<p className='desc'>{props.description}</p>*/}
          <div className="product__rating">
                  {Array(theMovie.rating).fill().map((_i)=>(
                    <p>⭐</p>
                    ))}
              </div>
    </div>
  )
}

export default Description