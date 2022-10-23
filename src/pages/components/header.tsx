import type { NextComponentType } from 'next';
import Link from 'next/link';
import { useState } from 'react';

const Header: NextComponentType = () => {
  const [logoHover, setLogoHover] = useState('png');

  return (
    <div>
      <header className='w-100 flex border-b-2 border-slate-600 bg-slate-900 px-6 py-1 text-slate-50'>
        <div className='h-100 flex w-2/4 items-center'>
          <div>
            <Link href={`/`}>
              <a>
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
              </a>
            </Link>
          </div>

          <div>
            <h1 className='align-middle text-2xl font-bold leading-normal text-slate-50'>
              Closyer
            </h1>
          </div>
        </div>
        <div className='h-100 flex w-2/4 items-center justify-end text-gray-700'>
          <form>
            <div className='relative rounded-md shadow-sm hover:opacity-90'>
              <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                <img
                  className=''
                  src='/images/utils/search.svg'
                  alt='Magnifying glass search'
                />
              </div>
              <input
                type='text'
                name='team-search'
                className='ml-2 block w-full rounded border-2 border-gray-300 pr-3 pl-6 hover:border-gray-400 focus:border-gray-500 sm:text-sm'
                placeholder='Search teams by ID...'
                onSubmit={() => {}}
                required
              />
            </div>
          </form>
        </div>
      </header>
    </div>
  );
};

export default Header;
