import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] =  React.useState(data)
  
  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return <>
  {
    people.map((people) => {
      return (
        <div key={people.id} className="item">
          <h4>{people.name}</h4>
          <button className='btn' onClick={() => removeItem(people.id)}>remove</button>
        </div>
      )
    })
  }
  <button className='btn' onClick={() => {setPeople([])}}>Clear Items</button>
  </>;
};

export default UseStateArray;
