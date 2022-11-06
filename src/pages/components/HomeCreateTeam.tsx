import { NextComponentType } from 'next';
import Link from 'next/link';
import { useState } from 'react';

const HomeCreateTeam: NextComponentType = () => {
  const [generation, setGeneration] = useState<String>('gen1');

  return (
    <div className='container m-auto flex justify-center'>
      <div className='flex h-3/6 w-1/2 flex-col justify-center space-y-8 rounded border-2 border-gray-500 p-4 text-center shadow-xl'>
        <label className='text-4xl' htmlFor='Generation'>
          Select Generation:
        </label>
        <form id='Generation'>
          <select placeholder='Gen1 - RBY'>
            <option
              onClick={() => {
                setGeneration('gen1');
              }}
              value='Gen1'
            >
              Gen1 - RBY
            </option>
          </select>
        </form>

        <Link href={`/teambuild/`}>
          <a className='m-auto flex w-1/5 justify-center rounded-md bg-slate-800 py-2 text-base font-bold font-medium text-slate-50 shadow-sm hover:bg-slate-700'>
            Create Team
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomeCreateTeam;
