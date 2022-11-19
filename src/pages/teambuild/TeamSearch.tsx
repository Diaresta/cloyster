import { NextComponentType } from 'next';
import { useState } from 'react';

const STATS = ['HP', 'ATK', 'DEF', 'SPC', 'SPD'];

const TeamSearch: NextComponentType = (props: any) => {
  return (
    <div className='flex w-full flex-col items-center justify-center pt-6'>
      <div>
        <input placeholder='asdaksdjb'></input>
      </div>
      <ul>
        {props.pokemonsList.map((mon: any, i: number) => (
          <div className='flex flex-row space-x-3'>
            <div className='mx-auto w-1/4'>
              <li className='flex justify-end'>
                <img src={mon.icon} />
              </li>
            </div>
            <div className='mx-auto w-1/4 space-x-3 space-y-3 '>
              <li>{mon.name}</li>
            </div>
            <div className='mx-auto flex w-1/4 flex-row space-x-1'>
              {mon.type?.map((types: any) => (
                <li>
                  <img src={`/images/types/${types}.png`} />
                </li>
              ))}
            </div>
            <div className='mx-auto flex w-1/4 flex-row space-x-3'>
              {Object.keys(mon.base).map((keyName, i) => (
                <li key={i}>
                  <p className='font-medium'>{STATS[i]}</p>
                  <p>{mon.base[keyName]}</p>
                </li>
              ))}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TeamSearch;
