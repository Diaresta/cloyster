import { NextComponentType } from 'next';

const TeamBuildHeader: NextComponentType = () => {
  return (
    <div className='flex w-full flex-row justify-between'>
      <div>
        <ul className='flex flex-row'>
          <li>
            <img src='/images/pokemon/pokeball.png' />
          </li>
          <li>
            <img src='/images/pokemon/pokeball.png' />
          </li>
          <li>
            <img src='/images/pokemon/pokeball.png' />
          </li>
          <li>
            <img src='/images/pokemon/pokeball.png' />
          </li>
          <li>
            <img src='/images/pokemon/pokeball.png' />
          </li>
          <li>
            <img src='/images/pokemon/pokeball.png' />
          </li>
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
