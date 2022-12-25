import React, { useState,useRef,useEffect } from 'react'
import {ImEye} from 'react-icons/im'
import {RxEyeClosed} from 'react-icons/rx'

import movieData from '../data'

import './MovieList.css'
import Filter from './Filter'

const MovieList = () => {
    const [toggle, setToggle] = useState(false)
    const [movieList, setMovieList] = useState([])
    useEffect(() => {
        setMovieList(movieData)
    }, [])

    const n = useRef();
    const i = useRef();
    const r = useRef();

    const change = ()=>{
        setToggle (!toggle);
    }
    const add=()=>{
        setMovieList([...movieList,
            {
                id: movieList.length+1,
                name:n.current.value,
                image:i.current.value,
                rating:r.current.value,
            },
        ]);
        setToggle(!toggle)
    };
  return (
    <div className="movie__list">

        <Filter movieList={movieList} setMovieList={setMovieList}/>
        
        {!toggle&&<button className="change" onClick={change}> 
            <ImEye/>
                </button>
        }
        {toggle&&<button className="change" onClick={change}>
            <RxEyeClosed/>
                </button>
        }
        {toggle&&<div className="forme">
            <input type="text" ref={n} placeholder="Movie Name" />
            <input type="text" ref={i} placeholder="Movie Image" />
            <input type="text" ref={r} placeholder="Movie Rating 1 to 10" />
            <button onClick={add}>Save Movie</button>
        </div>}
    </div>

)
}

export default MovieList