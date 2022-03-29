import React from 'react';
import { useBeerContext } from '../context/BeerContext';
import Beer from '../core/components/Beer/Beer';
import Form from '../core/components/Form/Form';
import './Home.scss';

function HomePage() {
  const { beers } = useBeerContext();
  return (
    <div className='app-container'>
      <div className='form-container'>
        <div className='title'>Cheers</div>
        <div>
          {beers.map((beer, index) => (
            <Beer key={index} beer={beer} />
          ))}
        </div>
        <Form action='ADD' />
      </div>
    </div>
  );
}

export default HomePage;
