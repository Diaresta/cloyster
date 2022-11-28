import { NextComponentType } from 'next';
import { useState } from 'react';

const STATS: string[] = ['HP', 'ATK', 'DEF', 'SPC', 'SPD'];

const TeamSearch: NextComponentType = (props: any) => {
  const [currMon, setCurrMon] = useState('');

  return (
    // flex w-full flex-col items-center justify-center pt-6
    <div className='mt-6 flex w-full flex-col items-center justify-center rounded border-2 border-gray-500 shadow-xl'>
      <div className='mx-auto w-full'>
        <div className='w-full bg-slate-200 font-bold'>
          <div className='mx-auto flex w-3/5 flex-row justify-between'>
            <p>Name</p>
            <p>Type</p>
            <p>Stats</p>
          </div>
        </div>
        <ul className='mx-auto w-full'>
          {props.pokemonsList.map((mon: any, i: number) => (
            <div className='flex flex-row space-x-1 sm:space-x-3'>
              <div className='w-1/4'>
                <li className='flex sm:justify-end'>
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
    </div>
  );
};

export default TeamSearch;
