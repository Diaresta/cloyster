import { NextComponentType } from 'next';

const HomeCreateTeam: NextComponentType = () => {
  return (
    <div className='container m-auto flex justify-center'>
      <div className='flex w-1/2 flex-col justify-center rounded border-2 border-gray-500 p-2 shadow-xl'>
        <label htmlFor='Generation'>Select Generation</label>
        <form id='Generation'>
          <select placeholder='Gen1'>
            <option value='Gen1'>Gen1</option>
          </select>
        </form>
        <button>asd</button>
      </div>
    </div>
  );
};

export default HomeCreateTeam;
