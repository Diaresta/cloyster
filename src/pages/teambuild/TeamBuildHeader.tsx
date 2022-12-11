import { NextComponentType } from 'next';
import { useState } from 'react';

const TeamBuildHeader: NextComponentType = () => {
  const [teamSprite, setTeamSprite] = useState([
    'pokemon/gen1/icons/1',
    'pokemon/pokeball',
    'pokemon/pokeball',
    'pokemon/pokeball',
    'pokemon/pokeball',
    'pokemon/pokeball',
  ]);
  return (
    <div className='flex w-full flex-row justify-between'>
      <div>
        <ul className='flex flex-row'>
          {teamSprite.map((mon: string) => (
            <li>
              <img src={`/images/${mon}.png`} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          className='rounded bg-slate-800 py-2 px-2 text-xs font-bold text-slate-50 hover:bg-slate-700'
          onClick={() => {}}
        >
          Save Team
        </button>
      </div>
    </div>
  );
};

export default TeamBuildHeader;
