import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import { useEffect, useState } from 'react';

// https://github.com/fanzeyi/pokemon.json/blob/master/moves.json

const formatBase = (baseStat: any) => {
  let stat = (baseStat / 255) * 100;

  return stat;
};

const Home: NextPage = () => {
  const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

  const [logoHover, setLogoHover] = useState('png');
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
      <Head>
        <title>Cloyster: Pokémon Team Builder</title>
        <meta name='description' content='Pokémon Team Builder' />
        <link rel='icon' href='/favicon.ico' />
        <script
          src='https://kit.fontawesome.com/dca6bdf503.js'
          crossOrigin='anonymous'
        />
      </Head>

      <header className='w-100 flex border-b-2 border-slate-600 bg-slate-900 px-6 py-1 text-slate-50'>
        <div className='h-100 flex w-2/4 items-center'>
          <div>
            <img
              className='h-5/6 w-5/6 cursor-pointer'
              src={`/images/pokemon/cloyster.${logoHover}`}
              onMouseOver={() => {
                setLogoHover('gif');
              }}
              onMouseLeave={() => {
                setLogoHover('png');
              }}
              alt='Cloyster Logo'
              title='Home'
            />
          </div>

          <div>
            <h1 className='align-middle text-2xl font-bold leading-normal text-slate-50'>
              Closyer
            </h1>
          </div>
        </div>
        <div className='h-100 flex w-2/4 items-center justify-end text-gray-700'>
          <form>
            <div className='relative rounded-md shadow-sm'>
              <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                <img
                  className=''
                  src='/images/utils/search.svg'
                  alt='Magnifying glass search'
                />
              </div>
              <input
                type='text'
                name='team'
                className='ml-2 block w-full rounded border-gray-300 pr-3 pl-6 focus:border-fuchsia-500 focus:ring-fuchsia-500 sm:text-sm'
                placeholder='Search teams by ID...'
                onSubmit={() => {}}
                required
              />
            </div>
          </form>
        </div>
      </header>

      <main className='container mx-auto flex items-center justify-center p-4'>
        <div className='mt-3 grid w-full gap-3 pt-3 text-center lg:grid-cols-2'>
          <PokemonCard
            id={121}
            name='Starmie'
            type={['Water', 'Psychic']}
            base={{
              HP: 60,
              Attack: 75,
              Defense: 85,
              Special: 100,
              Speed: 115,
            }}
            sprite='/images/pokemon/gen1/sprites/starmie.png'
            icon='/images/pokemon/gen1/icons/121.png'
          />
          <PokemonCard
            id={145}
            name='Zapdos'
            type={['Electric', 'Flying']}
            base={{
              HP: 90,
              Attack: 90,
              Defense: 85,
              Special: 125,
              Speed: 100,
            }}
            sprite='/images/pokemon/gen1/sprites/zapdos.png'
            icon='/images/pokemon/gen1/icons/145.png'
          />
          <PokemonCard
            id={112}
            name='Rhydon'
            type={['Ground', 'Rock']}
            base={{
              HP: 105,
              Attack: 130,
              Defense: 120,
              Special: 45,
              Speed: 40,
            }}
            sprite='/images/pokemon/gen1/sprites/Rhydon.png'
            icon='/images/pokemon/gen1/icons/112.png'
          />
          <PokemonCard
            id={128}
            name='Tauros'
            type={['Normal']}
            base={{
              HP: 75,
              Attack: 100,
              Defense: 95,
              Special: 40,
              Speed: 110,
            }}
            sprite='/images/pokemon/gen1/sprites/tauros.png'
            icon='/images/pokemon/gen1/icons/128.png'
          />
          <PokemonCard
            id={143}
            name='Snorlax'
            type={['Normal']}
            base={{
              HP: 160,
              Attack: 110,
              Defense: 65,
              Special: 65,
              Speed: 30,
            }}
            sprite='/images/pokemon/gen1/sprites/snorlax.png'
            icon='/images/pokemon/gen1/icons/143.png'
          />
          <PokemonCard
            id={103}
            name='Exeggutor'
            type={['Grass', 'Psychic']}
            base={{
              HP: 95,
              Attack: 95,
              Defense: 85,
              Special: 125,
              Speed: 55,
            }}
            sprite='/images/pokemon/gen1/sprites/Exeggutor.png'
            icon='/images/pokemon/gen1/icons/103.png'
          />

          {/* <TechnologyCard
            name='TypeScript'
            description='Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale'
            documentation='https://www.typescriptlang.org/'
          />
          <TechnologyCard
            name='TailwindCSS'
            description='Rapidly build modern websites without ever leaving your HTML'
            documentation='https://tailwindcss.com/'
          />
          <TechnologyCard
            name='tRPC'
            description='End-to-end typesafe APIs made easy'
            documentation='https://trpc.io/'
          />
          <TechnologyCard
            name='Next-Auth'
            description='Authentication for Next.js'
            documentation='https://next-auth.js.org/'
          />
          <TechnologyCard
            name='Prisma'
            description='Build data-driven JavaScript & TypeScript apps in less time'
            documentation='https://www.prisma.io/docs/'
          /> */}
        </div>
        {/* <div className='flex w-full items-center justify-center pt-6 text-2xl text-blue-500'>
          <ul>
            {pokemon.map((mon: any, i: number) => (
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
            id='pkmn-name'
            placeholder='Pokémon name...'
            className='w-5/6 rounded border-2 border-gray-300 hover:border-gray-400 hover:opacity-80 focus:ring-fuchsia-500 sm:text-sm'
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
            className='flex flex-row text-xs font-bold uppercase tracking-wide'
          >
            {type.map((type, i) => (
              <li key={i}>{type}</li>
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
            id='pkmn-level'
            placeholder='Pokémon Level...'
            className='w-5/6 rounded border-2 border-gray-300 hover:border-gray-400 hover:opacity-80 focus:ring-fuchsia-500 sm:text-sm'
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
                name='move'
                className='mb-1 w-5/6 rounded border-2 border-gray-300 hover:border-gray-400 hover:opacity-80 focus:ring-fuchsia-500 sm:text-sm'
                placeholder='Move 1...'
                onSubmit={() => {}}
                required
              />
            </li>
            <li>
              <input
                type='text'
                name='move'
                className='mb-1 w-5/6 rounded border-2 border-gray-300 hover:border-gray-400 hover:opacity-80 focus:ring-fuchsia-500 sm:text-sm'
                placeholder='Move 2...'
                onSubmit={() => {}}
                required
              />
            </li>
            <li>
              <input
                type='text'
                name='move'
                className='mb-1 w-5/6 rounded border-2 border-gray-300 hover:border-gray-400 hover:opacity-80 focus:ring-fuchsia-500 sm:text-sm'
                placeholder='Move 3...'
                onSubmit={() => {}}
                required
              />
            </li>
            <li>
              <input
                type='text'
                name='move'
                className='mb-1 w-5/6 rounded border-2 border-gray-300 hover:border-gray-400 hover:opacity-80 focus:ring-fuchsia-500 sm:text-sm'
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
                {/* <div className='m-auto flex h-2.5 w-1/2 rounded-full bg-gray-700'> */}
                <div className='flex w-full'>
                  <span
                    className='my-auto flex h-2.5 items-start rounded-full bg-blue-600'
                    style={{ width: formatBase(base[keyName]) }}
                  ></span>
                </div>
              </div>
            ))}
          </ul>

          {/* <div className='w-full'>
            <ul className='flex flex-col'>
              {Object.keys(base).map((stat, i) => (
                <div className='mb-1 h-4 w-full rounded-full bg-red-700'>
                  <li>
                    <span
                      key={i}
                      className='h-2.5 w-full rounded-full bg-red-700'
                    ></span>
                  </li>
                </div>
              ))}
            </ul>
          </div> */}
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
