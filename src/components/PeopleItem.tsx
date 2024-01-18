import React, { FC } from 'react';
import { IPeople } from '../types/IPeople';

interface IPeopleItem {
  item: IPeople
}

const PeopleItem: FC<IPeopleItem> = ({ item }) => {

  return (
    <div className="peoples-card">
      <div className="peoples-card__avatar">
        <img src={require('../static/img/people.png')} />
      </div>
      <div className='peoples-card__content'>
        <div className='peoples-card__name'>
          {item.name}
        </div>
        <div className='peoples-card__characteristic characteristic'>
          <div className='characteristic__column'>
            <ul className='characteristic_sublist'>
              <li className='characteristic-sublist__item'>
                <div className='characteristic-sublist-item__key'>
                  Масса
                </div>
                <div className='characteristic-sublist-item__value'>
                  {item.mass}
                </div>
              </li>
              <li className='characteristic-sublist__item'>
                <div className='characteristic-sublist-item__key'>
                  Рост
                </div>
                <div className='characteristic-sublist-item__value'>
                  {item.height} см
                </div>
              </li>
              <li className='characteristic-sublist__item'>
                <div className='characteristic-sublist-item__key'>
                  Пол
                </div>
                <div className='characteristic-sublist-item__value'>
                  {item.gender}
                </div>
              </li>
            </ul>
          </div>
          <div className='characteristic__column'>
            <ul className='characteristic_sublist'>
              <li className='characteristic-sublist__item'>
                <div className='characteristic-sublist-item__key'>
                  Год рождения
                </div>
                <div className='characteristic-sublist-item__value'>
                  {item.birth_year}
                </div>
              </li>
              <li className='characteristic-sublist__item'>
                <div className='characteristic-sublist-item__key'>
                  Цвет глаз
                </div>
                <div className='characteristic-sublist-item__value'>
                  {item.eye_color}
                </div>
              </li>
              <li className='characteristic-sublist__item'>
                <div className='characteristic-sublist-item__key'>
                  Цвет волос
                </div>
                <div className='characteristic-sublist-item__value'>
                  {item.hair_color}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleItem;