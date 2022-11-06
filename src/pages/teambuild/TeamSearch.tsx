import { NextComponentType } from 'next';

const TeamSearch: NextComponentType = ({ pokemonsList }: any) => {
  return (
    <div>
      {/* <ul>
        {pokemonsList?.map((mon: any, i: number) => (
          <div>
            <li key={i}>{mon.name}</li>
            <img src={mon.sprite} />
            <img src={mon.icon} />
          </div>
        ))}
      </ul> */}
    </div>
  );
};

export default TeamSearch;
