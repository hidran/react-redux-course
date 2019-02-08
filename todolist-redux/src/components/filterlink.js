import React from 'react';

const filterLink = ( props )=>{

 let {activeFilter,onClickFilter, actionType, children} = props;
 
  if(activeFilter === actionType){
    return children;
  }
  return (
   <a href="#"
     onClick ={(e) =>{
         e.preventDefault();
         onClickFilter(actionType);
     }}
   >
{children}
   </a>
  );
};


export default filterLink;
