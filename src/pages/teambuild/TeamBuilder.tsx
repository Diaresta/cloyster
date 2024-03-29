import { NextComponentType } from 'next';
import { useState } from 'react';

export const formatBase = (baseStat: any) => {
  let stat = (baseStat / 255) * 100;

  return stat;
};

const TeamBuilder: NextComponentType = (props: any) => {
  const [pokemonTeam, setPokemonTeam] = useState<any[]>([
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
      id: props.pokemonsList[144].id,
      name: props.pokemonsList[144].name,
      type: props.pokemonsList[144].type,
      base: props.pokemonsList[144].base,
      sprite: props.pokemonsList[144].sprite,
      icon: props.pokemonsList[144].icon,
      level: 100,
    },
  ]);

  const updateTeam = (index: any, e: any) => {
    let newTeam = [...pokemonTeam];

    newTeam[index] = e;

    setPokemonTeam(newTeam);

    // Example vvv
    updateTeam(1, {
      id: props.pokemonsList[144].id,
      name: props.pokemonsList[144].name,
      type: props.pokemonsList[144].type,
      base: props.pokemonsList[144].base,
      sprite: props.pokemonsList[144].sprite,
      icon: props.pokemonsList[144].icon,
      level: 100,
    });
  };

  return (
    <div className='mt-3 grid w-full gap-3 text-center lg:grid-cols-2'>
      {pokemonTeam.map((placehold, i) => (
        <PokemonCard
          id={pokemonTeam[i].id}
          name={pokemonTeam[i].name}
          type={pokemonTeam[i].type}
          base={pokemonTeam[i].base}
          sprite={pokemonTeam[i].sprite}
          icon={pokemonTeam[i].icon}
        />
      ))}
    </div>
  );
};

export default TeamBuilder;

type pokemonCardProps = {
  id?: number;
  name?: string;
  type?: string[];
  base?: any;
  sprite?: string;
  icon?: string;
};

export const PokemonCard = ({
  id,
  name,
  type,
  base,
  sprite,
  icon,
}: pokemonCardProps) => {
  return (
    <section className='flex w-full flex-col justify-center rounded border-2 border-gray-500 p-2 shadow-xl'>
      <div className='flex w-full justify-between'>
        {/* <h2>{name}</h2> */}
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
            onFocus={() => {}}
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
            {type?.map((type, i) => (
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
          <img src={sprite} className='my-auto drop-shadow-lg' />
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
            {Object.keys(base).map((keyName, i) => (
              <div className='flex flex-row justify-start space-x-3'>
                <div className='w-full'>
                  <li key={i}>{keyName}</li>
                </div>
                <div className='w-full'>
                  <li>{base[keyName]}</li>
                </div>
                <div className='flex w-full'>
                  <span
                    className='my-auto flex h-2.5 items-start rounded-full bg-blue-600'
                    style={{ width: formatBase(base[keyName]) }}
                  ></span>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type teamPokemon = {
  id: number;
  name: string;
  type: string[];
  base: any;
  sprite: string;
  icon: string;
  level: number;
  moves: object[];
};

class Pokemon {
  pID: number;
  pName: string;
  pType: string[];
  pBase: any;
  pSprite: string;
  pIcon: string;
  pLevel: number;
  pMoves: object[];
  constructor(
    id: number,
    name: string,
    type: string[],
    base: any,
    sprite: string,
    icon: string,
    level: number,
    moves: object[]
  ) {
    this.pID = id;
    this.pName = name;
    this.pType = type;
    this.pBase = base;
    this.pSprite = sprite;
    this.pIcon = icon;
    this.pLevel = level;
    this.pMoves = moves;
  }
}

// const placeholderIDea = (
//   id: number,
//   name: string,
//   type: string[],
//   base: object,
//   sprite: string,
//   icon: string,
//   level: number,
//   moves: object[]
// ) => {
//   // this.pokeID = id;
// };
