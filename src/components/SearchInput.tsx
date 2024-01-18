import React, { ChangeEvent, FC, useMemo, useState } from 'react';
import { IPeople } from '../types/IPeople';

interface SearchInput {
  peoples: IPeople[]
  searchPeoples: IPeople[]
  setSearchPeoples: (entities: IPeople[]) => void
}

const SearchInput: FC<SearchInput> = ({ searchPeoples, setSearchPeoples, peoples}) => {
  const [value, setValue] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  useMemo(() => {
    if (searchQuery) {
      setSearchPeoples(peoples.filter(people => people.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())));
    } else {
      setSearchPeoples(peoples)
    }
  }, [searchQuery]);

  return (
    <input 
      placeholder='Поиск по имени'
      className={'search-input'}
      value={value}
      type='text' 
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        setSearchQuery(event.target.value);
      }}
    />
  )
}

export default SearchInput;