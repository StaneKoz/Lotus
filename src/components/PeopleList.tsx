import React, { FC, useEffect, useState } from 'react';
import { IPeople } from '../types/IPeople';
import PeopleItem from './PeopleItem';

interface PeopleListProps {
  peoples: IPeople[]
}

const PeopleList:FC<PeopleListProps> = ({ peoples }) => {

  return (
    <ul className='peoples-list'>
      {
        peoples.map(people => (
          <li key={people.created} className='peoples-item'>
            <PeopleItem item={people}/>
          </li>
        ))
      }
    </ul>
  );
};

export default PeopleList;