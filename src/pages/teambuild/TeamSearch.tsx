import { NextComponentType } from 'next';

const TeamSearch: NextComponentType = ({ pokemonsList }: any) => {
  return (
    <div>
      {pokemonsList.map((mon: any, i: number) => (
        <tr>
          <td className='flex flex-row'>
            <img src={`/images/pokemon/gen1/icons/${mon.id}.png`} />
            <a>{mon.name}</a>
            <img src={`/images/types/${mon.type}.png`} />
          </td>
        </tr>
      ))}
    </div>
  );
};

export default TeamSearch;
