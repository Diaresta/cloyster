import { NextComponentType } from 'next';
import { useState } from 'react';
import { PokemonCard } from './TeamBuilder';

// Team array = empty array. CurrMon = empty array. Populate currmon with info when saved, and push to team array.

const STATS: string[] = ['HP', 'ATK', 'DEF', 'SPC', 'SPD'];

const TeamSearch: NextComponentType = (props: any) => {
  const [currMon, setCurrMon] = useState({
    id: 0,
    name: '',
    type: ['Unknown', 'Unknown'],
    base: {
      HP: 0,
      Attack: 0,
      Defense: 0,
      Special: 0,
      Speed: 0,
    },
    sprite: '',
    icon: '',
    level: 0,
  });

  return (
    // flex w-full flex-col items-center justify-center pt-6
    <div className='mt-6'>
      <PokemonCard
        id={currMon.id}
        name={currMon.name}
        type={currMon.type}
        base={currMon.base}
        sprite={currMon.sprite}
        icon={currMon.icon}
      />

      <div className='mt-4 flex w-full flex-col items-center justify-center rounded border-2 border-gray-500 shadow-xl'>
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
              <div className='mb-2 flex flex-row space-x-1 sm:space-x-3'>
                <div className='w-1/4'>
                  <li className='flex sm:justify-end'>
                    <img src={mon.icon} />
                  </li>
                </div>
                <div className='mx-auto mt-2 w-1/4 space-x-3 space-y-3 '>
                  <li>{mon.name}</li>
                </div>
                <div className='mx-auto mt-3 flex w-1/4 flex-row space-x-1'>
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
    </div>
  );
};

export default TeamSearch;
