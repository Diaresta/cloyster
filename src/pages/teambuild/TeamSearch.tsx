import { NextComponentType } from 'next';
import { useState } from 'react';

const TeamSearch: NextComponentType = (pokemonsList: any) => {
  return (
    <div className='flex w-full items-center justify-center pt-6 text-2xl text-blue-500'>
      {/* <ul>
        {pokemonsList.map((mon: any, i: number) => (
          <div>
            <li key={i}>{mon.name}</li>
            <img src={mon.sprite} />
            <img src={mon.icon} />
          </div>
        ))}
      </ul> */}
    </div>
  );
};

export default TeamSearch;
