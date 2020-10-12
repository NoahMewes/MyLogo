import React from 'react'
import Images from '../images'

function Logo(props){
    
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg" id={props.idex}>
              <img className="w-full" src= {Images[props.index]} alt="pic" ></img>
        </div>
    )
}

export default Logo;