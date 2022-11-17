import { NextComponentType } from 'next';
import { useState } from 'react';

const TeamSearch: NextComponentType = (props: any) => {
  return (
    <div className='flex w-full flex-col items-center justify-center pt-6'>
      <div>
        <input placeholder='asdaksdjb'></input>
      </div>
      <ul>
        {props.pokemonsList.map((mon: any, i: number) => (
          <div className='flex flex-row'>
            <div className='flex flex-row space-x-3 space-y-3'>
              <li>
                <img src={mon.icon} />
              </li>
              <li>{mon.name}</li>
            </div>
            <div className='flex flex-row space-x-1'>
              {mon.type?.map((types: any) => (
                <li>
                  <img src={`/images/types/${types}.png`} />
                </li>
              ))}
            </div>
            <div className='flex flex-row space-x-3'>
              {Object.keys(mon.base).map((keyName, i) => (
                <div>
                  <li>
                    <p>{keyName}</p>
                  </li>
                  <li>
                    <p>{mon.base[keyName]}</p>
                  </li>
                </div>
              ))}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TeamSearch;
