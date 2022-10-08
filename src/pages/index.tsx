import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import { useEffect, useState } from 'react';

// https://github.com/fanzeyi/pokemon.json/blob/master/moves.json
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

      <header className='w-100 flex border-b-2 border-slate-600 bg-slate-900 px-5 py-1 text-slate-50'>
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
          <div className='relative'>
            <img
              className='cursor-pointer hover:opacity-70'
              src='/images/utils/search.svg'
              alt='Magnifying glass search'
            />
          </div>
          <div className='relative rounded-md shadow-sm'>
            <input
              type='text'
              name='ID Search'
              className='ml-2 block w-full rounded border-gray-300 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
              placeholder='Search teams by ID...'
              onSubmit={() => {}}
            />
          </div>
        </div>
      </header>

      <main className='container mx-auto flex min-h-screen flex-col items-center justify-center p-4'>
        <div></div>
        <p className='text-2xl text-gray-700'>This stack uses:</p>
        <div className='mt-3 grid gap-3 pt-3 text-center md:grid-cols-2 lg:w-2/3'>
          <TechnologyCard
            name='NextJS'
            description='The React framework for production'
            documentation='https://nextjs.org/'
          />
          <TechnologyCard
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
          />
        </div>
        <div className='flex w-full items-center justify-center pt-6 text-2xl text-blue-500'>
          {/* {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>} */}
          <ul>
            {pokemon.map((mon: any, i: number) => (
              <div>
                <li key={i}>{mon.name}</li>
                <img src={mon.sprite} />
                <img src={mon.icon} />
              </div>
            ))}
          </ul>
        </div>
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
