
import React from 'react';
import FooterLink from './filterlink';

export default function todoFooter (params){
  return (
    <div className="footer">
          <FooterLink actionType="ALL">
            ALL
          </FooterLink>
          {' '}
          <FooterLink actionType="TODO">
            TO DO
          </FooterLink>
          {' '}
          <FooterLink actionType="COMPLETED">
            COMPLETED
          </FooterLink>
         
</div>
 );
}

