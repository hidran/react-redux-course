
import React from 'react';
import FooterLink from './filterlink';

export default function todoFooter ({ activeFilter, filterTodo}){
   
  return (
    <div className="footer">
          <FooterLink activeFilter ={activeFilter} onClickFilter ={filterTodo} actionType="ALL">
            ALL
          </FooterLink>
          {' '}
          <FooterLink  activeFilter ={activeFilter} onClickFilter ={filterTodo} actionType="TODO">
            TO DO
          </FooterLink>
          {' '}
          <FooterLink  activeFilter ={activeFilter} onClickFilter ={filterTodo} actionType="COMPLETED">
            COMPLETED
          </FooterLink>
         
</div>
 );
}

