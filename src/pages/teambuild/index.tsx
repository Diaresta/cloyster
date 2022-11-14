import { NextPage, GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import TeamBuilder from './TeamBuilder';
import TeamBuildHeader from './TeamBuildHeader';
import TeamSearch from './TeamSearch';

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

const TeamBuild: NextPage = (props: any) => {
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
    <main className='container mx-auto flex flex-col items-center justify-center p-4'>
      <TeamBuildHeader />
      <div className='w-full'>
        <TeamBuilder {...props} />
      </div>
      <div className='w-full'>
        <TeamSearch {...props} />
      </div>
    </main>
  );
};

export default TeamBuild;

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
