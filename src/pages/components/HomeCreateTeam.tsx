import { NextComponentType } from 'next';
import Link from 'next/link';
import { useState } from 'react';

const HomeCreateTeam: NextComponentType = () => {
  const [generation, setGeneration] = useState<String>('gen1');
  const [btnGen, setBtnGen] = useState<String>('Gen 1 - RBY');

  return (
    <div className='container m-auto mt-12 flex justify-center'>
      <div className='flex w-full flex-col justify-center space-y-8 rounded border-2 border-gray-500 p-4 text-center shadow-xl sm:h-3/6 sm:w-9/12 md:w-10/12 lg:w-1/2'>
        <label className='text-4xl' htmlFor='Generation'>
          Select Generation:
        </label>
        <div>
          <a className='slate-800 m-auto flex w-2/5 justify-center rounded-md border-2 border-slate-800 bg-slate-100 py-2 text-base font-bold font-medium shadow-sm hover:cursor-not-allowed'>
            <img
              className='h-6'
              src='/images/utils/unfold.svg'
              alt='Magnifying glass search'
            />

            <p className='w-10/12'>{btnGen}</p>
          </a>
        </div>
        {/* <form id='Generation'>
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
        </form> */}

        <Link href={`/teambuild/`}>
          <a className='m-auto flex w-2/5 justify-center rounded-md bg-slate-800 py-2 text-base font-bold font-medium text-slate-50 shadow-sm hover:bg-slate-700'>
            Create Team
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomeCreateTeam;
