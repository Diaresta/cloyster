import type { NextPage, GetStaticProps } from 'next';
import { trpc } from '../utils/trpc';
import { useEffect, useState } from 'react';
import TeamBuildHeader from './teambuild/TeamBuildHeader';
import HomeCreateTeam from './components/HomeCreateTeam';
import TeamBuilder from './teambuild/TeamBuilder';

const formatBase = (baseStat: number) => {
  let stat = (baseStat / 255) * 100;

  return stat;
};

// export const getStaticProps: GetStaticProps<any> = async () => {
//   const res = await fetch('http://localhost:3000/json/gen1.json');
//   const pokemonsList = await res.json();

//   return { props: { pokemonsList } };
// };

const Home: NextPage = ({ pokemonsList }: any) => {
  const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

  const [pokemon, setPokemon] = useState([]);

  const pokeSearch = async () => {
    await fetch('/json/gen1.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPokemon(data);
      });
  };

  useEffect(() => {
    pokeSearch();
  }, []);

  return (
    <>
      <main className='container mx-auto flex flex-col items-center justify-center p-4'>
        <HomeCreateTeam />
        {/* <TeamBuilder {...pokemonsList} /> */}
      </main>
    </>
  );
};

export default Home;

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className='flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105'>
      <h2 className='text-lg text-gray-700'>{name}</h2>
      <p className='text-sm text-gray-600'>{description}</p>
      <a
        className='mt-3 text-sm text-violet-500 underline decoration-dotted underline-offset-2'
        href={documentation}
        target='_blank'
        rel='noreferrer'
      >
        Documentation
      </a>
    </section>
  );
};

type pokemonCardProps = {
  id: number;
  name: string;
  type: string[];
  base: any;
  sprite: string;
  icon: string;
};

const PokemonCard = ({
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
            {type.map((type, i) => (
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

// const asd = (
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
