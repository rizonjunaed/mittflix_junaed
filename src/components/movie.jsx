import React from 'react';   

export const movie = function (props){ 
     return  <div className="movie">
     <img
       src={props.poster_path}
     />
     <div className="overlay">
       <div className="title">{props.title}</div>
       <div className="rating">{props.vote_average}/10</div>
       <div className="plot">
         {props.overview}
       </div>
       <div data-toggled="true" className="listToggle">
         <div>
           <i className="fa fa-fw fa-plus"></i
           ><i className="fa fa-fw fa-check"></i>
         </div>
       </div>
     </div>
   </div>
 } 
