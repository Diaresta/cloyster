export type pokemonProps = {
  name: string;
  img: string;
  type: string[];
  level: number;
  shiny: boolean;
  moves: [
    move1: {
      name: string;
      type: string;
      pp: number;
      physSpec: string;
      power: number;
      accuracy: number;
      effects: string;
    },
    move2: {
      name: string;
      type: string;
      pp: number;
      physSpec: string;
      power: number;
      accuracy: number;
      effects: string;
    },
    move3: {
      name: string;
      type: string;
      pp: number;
      physSpec: string;
      power: number;
      accuracy: number;
      effects: string;
    },
    move4: {
      name: string;
      type: string;
      pp: number;
      physSpec: string;
      power: number;
      accuracy: number;
      effects: string;
    }
  ];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    special: number;
    speed: number;
  };
};

// Sprites
// https://play.pokemonshowdown.com/sprites/gen1/

// const TechnologyCard = ({ name, description, documentation }: pokemonProps) => {
//   return (
//     <section className='flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105'>
//       <h2 className='text-lg text-gray-700'>{name}</h2>
//       <p className='text-sm text-gray-600'>{description}</p>
//       <a
//         className='mt-3 text-sm text-violet-500 underline decoration-dotted underline-offset-2'
//         href={documentation}
//         target='_blank'
//         rel='noreferrer'
//       >
//         Documentation
//       </a>
//     </section>
//   );
// };
