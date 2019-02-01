
import React from 'react';
import FooterLink from './filterlink';

export default function todoFooter ({filterTodo}){
   
  return (
    <div className="footer">
          <FooterLink onClickFilter ={filterTodo} actionType="ALL">
            ALL
          </FooterLink>
          {' '}
          <FooterLink  onClickFilter ={filterTodo} actionType="TODO">
            TO DO
          </FooterLink>
          {' '}
          <FooterLink  onClickFilter ={filterTodo} actionType="COMPLETED">
            COMPLETED
          </FooterLink>
         
</div>
 );
}

