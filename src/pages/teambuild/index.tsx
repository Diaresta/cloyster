import { NextPage, GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import TeamBuildHeader from './TeamBuildHeader';

const formatBase = (baseStat: any) => {
  let stat = (baseStat / 255) * 100;

  return stat;
};

// Considering using React Query vvvv
// const getPokemon: any = async () => {
//   const res = await fetch('http://localhost:3000/json/gen1.json');
//   const pokemonsList = await res.json();

//   return pokemonsList;
// };

export const getStaticProps: GetStaticProps<any> = async () => {
  const res = await fetch('http://localhost:3000/json/gen1.json');
  const pokemonsList = await res.json();

  return { props: { pokemonsList } };
};

const TeamBuild: NextPage = ({ pokemonsList }: any) => {
  const [pokemon, setPokemon] = useState([]);
  const [team, setPokemonTeam] = useState([]);
  const [pokemanz, setPokemanz] = useState({
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

  // id name type base sprite icon

  // Considering using React Query vvvv
  // const {
  //   data: pokemon,
  //   isLoading: pokemonsIsLoading,
  //   isError: pokemonIsError,
  // }: any = useQuery(['pokemon'], getPokemon);

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
        <TeamBuildHeader />
        <div className='mt-3 grid w-full gap-3 text-center lg:grid-cols-2'>
          <PokemonCard
            id={pokemanz.id}
            name={pokemanz.name}
            type={pokemanz.type}
            base={pokemanz.base}
            sprite={pokemanz.sprite}
            icon={pokemanz.icon}
          />
          <PokemonCard
            id={pokemonsList[144].id}
            name={pokemonsList[144].name}
            type={pokemonsList[144].type}
            base={pokemonsList[144].base}
            sprite={pokemonsList[144].sprite}
            icon={pokemonsList[144].icon}
          />
          <PokemonCard
            id={pokemonsList[111].id}
            name={pokemonsList[111].name}
            type={pokemonsList[111].type}
            base={pokemonsList[111].base}
            sprite={pokemonsList[111].sprite}
            icon={pokemonsList[111].icon}
          />
          <PokemonCard
            id={pokemonsList[127].id}
            name={pokemonsList[127].name}
            type={pokemonsList[127].type}
            base={pokemonsList[127].base}
            sprite={pokemonsList[127].sprite}
            icon={pokemonsList[127].icon}
          />
          <PokemonCard
            id={pokemonsList[142].id}
            name={pokemonsList[142].name}
            type={pokemonsList[142].type}
            base={pokemonsList[142].base}
            sprite={pokemonsList[142].sprite}
            icon={pokemonsList[142].icon}
          />
          <PokemonCard
            id={pokemonsList[102].id}
            name={pokemonsList[102].name}
            type={pokemonsList[102].type}
            base={pokemonsList[102].base}
            sprite={pokemonsList[102].sprite}
            icon={pokemonsList[102].icon}
          />
        </div>
        {/* <div className='flex w-full items-center justify-center pt-6 text-2xl text-blue-500'>
          <ul>
            {pokemonsList.map((mon: any, i: number) => (
              <div>
                <li key={i}>{mon.name}</li>
                <img src={mon.sprite} />
                <img src={mon.icon} />
              </div>
            ))}
          </ul>
        </div> */}
      </main>
    </>
  );
};

export default TeamBuild;

type pokemonCardProps = {
  id?: number;
  name?: string;
  type?: string[];
  base?: any;
  sprite?: string;
  icon?: string;
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
