import { NextComponentType } from 'next';
import { useState } from 'react';

const STATS: string[] = ['HP', 'ATK', 'DEF', 'SPC', 'SPD'];

const TeamSearch: NextComponentType = (props: any) => {
  const [currMon, setCurrMon] = useState('');

  return (
    <div className='flex w-full flex-col items-center justify-center pt-6'>
      <form className='relative rounded-md shadow-sm hover:opacity-90'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <img
            className=''
            src='/images/utils/search.svg'
            alt='Magnifying glass search'
          />
        </div>
        <input
          type='text'
          name='team-search'
          className='ml-2 block w-full rounded border-2 border-gray-300 pr-3 pl-6 hover:border-gray-400 focus:border-gray-500 sm:text-sm'
          placeholder='Search Pokémon...'
          onSubmit={() => {}}
          required
        />
      </form>

      <div>
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
    </div>
  );
};

export default TeamSearch;
