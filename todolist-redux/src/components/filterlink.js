import React from 'react';

const filterLink = ( {actionType, children} )=>{
 return (
   <a href="#"
     onClick ={(e) =>{
         e.preventDefault();

     }}
   >
{children}
   </a>
  );
};


export default filterLink;
