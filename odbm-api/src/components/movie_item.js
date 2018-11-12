import React from 'react';

export default function movieItem({movie}) {
    return (
       
        <div className="card col-md-3">
             <img className="card-img-top" src={movie.Poster} alt={movie.Title} />
             <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <button  className="btn btn-primary">VIEW DETAIL</button>
            </div>
        </div>
        
           
    )
        
        
}