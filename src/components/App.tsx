import React, { useEffect, useMemo, useState } from 'react';
import PeopleList from './PeopleList';
import { IPeople } from '../types/IPeople';
import { $api } from '../http';
import SearchInput from './SearchInput';

interface IPeopleResponse {
  results: IPeople[]
  count: number
  next: string
  previous: string | null
}

function App() {
  const [peoples, setPeoples] = useState<IPeople[]>([]);
  const [searchPeoples, setSearchPeoples] = useState<IPeople[]>([]);
  console.log(searchPeoples)
  useEffect(() => {
    console.log(searchPeoples)
    const response = $api.get<IPeopleResponse>('')
      .then(res => {
        console.log('Что блять?')
        setPeoples(res.data.results);
        setSearchPeoples(res.data.results);
      });
  }, []);

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
