import { NextComponentType } from 'next';
import { useState } from 'react';
import { PokemonCard } from './TeamBuilder';
import { formatBase } from './TeamBuilder';

// Team array = empty array. CurrMon = empty array. Populate currmon with info when saved, and push to team array.

const STATS: string[] = ['HP', 'ATK', 'DEF', 'SPC', 'SPD'];

const TeamSearch: NextComponentType = (props: any) => {
  const [searchMon, setSearchMon] = useState('');
  const [currMon, setCurrMon] = useState<pokemonProps>({
    id: 0,
    name: '',
    type: ['Unknown', 'Unknown'],
    base: {
      HP: 23,
      Attack: 23,
      Defense: 11,
      Special: 211,
      Speed: 78,
    },
    sprite: '',
    icon: '',
    level: 0,
  });

  const filterMon = (query: any, searchMon: string) => {
    if (!searchMon) {
      return query;
    }

    return query.filter((mon: any) => {
      return mon.name.includes(searchMon);
    });
  };

  const filteredSearch = filterMon(props.pokemonsList, searchMon);

  return (
    // flex w-full flex-col items-center justify-center pt-6
    <div className='mt-6'>
      {/* <PokemonCard
        id={currMon.id}
        name={currMon.name}
        type={currMon.type}
        base={currMon.base}
        sprite={currMon.sprite}
        icon={currMon.icon}
      /> */}

      <section className='flex w-full flex-col justify-center rounded border-2 border-gray-500 p-2 shadow-xl'>
        <div className='flex w-full justify-between'>
          <div className='flex flex-col text-left'>
            <label
              className='justify-start text-xs font-bold uppercase tracking-wide'
              htmlFor='pkmn-name'
            >
              Pokémon
            </label>
            <input
              type='text'
              name='pkmn-name'
              id='pkmn-name'
              placeholder='Pokémon name...'
              className='w-5/6 rounded border-2 border-gray-300 hover:border-gray-400 hover:opacity-80 focus:border-gray-500 sm:text-sm'
              // onFocus={() => {}}
              onChange={(e: any) => {
                setSearchMon(e.target.value);
                filterMon(props.pokemonsList, e.target.value);
                console.log(filterMon(props.pokemonsList, searchMon));
              }}
              required
            />
          </div>
          <div className='flex flex-col text-left'>
            <label
              className='justify-start text-xs font-bold uppercase tracking-wide'
              htmlFor='pkmn-type'
            >
              Type
            </label>
            <ul
              id='pkmn-type'
              className='flex flex-row justify-evenly space-x-1 text-xs font-bold uppercase tracking-wide'
            >
              {currMon.type?.map((type, i) => (
                <li key={i}>
                  <img src={`/images/types/${type}.png`} />
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col text-left'>
            <label
              className='justify-start text-xs font-bold uppercase tracking-wide'
              htmlFor='pkmn-level'
            >
              Level
            </label>
            <input
              type='text'
              name='pkmn-level'
              id='pkmn-level'
              placeholder='Pokémon Level...'
              value='100'
              className='w-5/6 rounded border-2 border-gray-300 hover:border-gray-400 hover:opacity-80 focus:border-gray-500 sm:text-sm'
              required
            />
          </div>
        </div>
        <div className='flex flex-row justify-evenly'>
          <div className='w-full'>
            <img src={currMon.sprite} className='my-auto drop-shadow-lg' />
          </div>
          <div className='w-full text-left'>
            <ul>
              <li>
                <input
                  type='text'
                  name='move1'
                  className='mb-1 w-5/6 rounded border-2 border-gray-300 hover:border-gray-400 hover:opacity-80 focus:border-gray-500 sm:text-sm'
                  placeholder='Move 1...'
                  onSubmit={() => {}}
                  required
                />
              </li>
              <li>
                <input
                  type='text'
                  name='move2'
                  className='mb-1 w-5/6 rounded border-2 border-gray-300 hover:border-gray-400 hover:opacity-80 focus:border-gray-500 sm:text-sm'
                  placeholder='Move 2...'
                  onSubmit={() => {}}
                  required
                />
              </li>
              <li>
                <input
                  type='text'
                  name='move3'
                  className='mb-1 w-5/6 rounded border-2 border-gray-300 hover:border-gray-400 hover:opacity-80 focus:border-gray-500 sm:text-sm'
                  placeholder='Move 3...'
                  onSubmit={() => {}}
                  required
                />
              </li>
              <li>
                <input
                  type='text'
                  name='move4'
                  className='mb-1 w-5/6 rounded border-2 border-gray-300 hover:border-gray-400 hover:opacity-80 focus:border-gray-500 sm:text-sm'
                  placeholder='Move 4...'
                  onSubmit={() => {}}
                  required
                />
              </li>
            </ul>
          </div>
          <div className='flex w-full flex-row text-sm font-bold'>
            <ul className='my-auto w-full'>
              {Object.keys(currMon.base).map((keyName, i) => (
                <div className='flex flex-row justify-start space-x-3'>
                  <div className='w-full'>
                    <li key={i}>{keyName}</li>
                  </div>
                  <div className='w-full'>
                    <li>{currMon.base[keyName]}</li>
                  </div>
                  <div className='flex w-full'>
                    <span
                      className='my-auto flex h-2.5 items-start rounded-full bg-blue-600'
                      style={{ width: formatBase(currMon.base[keyName]) }}
                    ></span>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>

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
            {filteredSearch.map((mon: any, i: number) => (
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

type pokemonProps = {
  id?: number;
  name?: string;
  type?: string[];
  base?: any;
  sprite?: string;
  icon?: string;
  level?: number;
};

export default TeamSearch;
