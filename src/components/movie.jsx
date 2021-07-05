import React from 'react';   

export const movie = function (props){ 
     return  <div class="movie">
     <img
       src={props.poster_path}
     />
     <div class="overlay">
       <div class="title">{props.title}</div>
       <div class="rating">{props.vote_average}/10</div>
       <div class="plot">
         {props.overview}
       </div>
       <div data-toggled="true" class="listToggle">
         <div>
           <i class="fa fa-fw fa-plus"></i
           ><i class="fa fa-fw fa-check"></i>
         </div>
       </div>
     </div>
   </div>
 } 
