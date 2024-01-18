import React, { useEffect, useMemo, useState } from 'react';
import PeopleList from './PeopleList';
import { IPeople } from '../types/IPeople';
import SearchInput from './SearchInput';
import { config } from 'process';
import axios from 'axios';

interface IPeopleResponse {
  results: IPeople[]
  count: number
  next: string
  previous: string | null
}

function App() {
  const [peoples, setPeoples] = useState<IPeople[]>([]);
  const [searchPeoples, setSearchPeoples] = useState<IPeople[]>([]);
  useEffect(() => {
    fetchPeoples();
  }, []);

  async function fetchPeoples() {
    const response = await fetch('https://swapi.dev/api/people', {method: 'GET', headers: {
      'Content-Type': 'application/json'
    }});

    const data = await response.json();
    const peoples = data.results as IPeople[];
    setPeoples(peoples);
    setSearchPeoples(peoples);
  }
  
  return (
    <div className="App">
      <section className={'peoples'}>
        <div className='peoples__container'>
          <div className='peoples__header'>
            <SearchInput searchPeoples={searchPeoples} setSearchPeoples={setSearchPeoples} peoples={peoples} />
          </div>
          <div className={'people__content'}>
            {
              searchPeoples.length == 0 ? (
                <div className='empty-list'>
                  Нет совпадений
                </div>
              )
                : (
                  <PeopleList peoples={searchPeoples} />
                )
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
