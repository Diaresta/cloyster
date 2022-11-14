import type { NextPage } from 'next';
import { trpc } from '../utils/trpc';

import HomeCreateTeam from './components/HomeCreateTeam';

const Home: NextPage = () => {
  // const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

  return (
    <>
      <main className='container mx-auto flex flex-col items-center justify-center p-4'>
        <HomeCreateTeam />
      </main>
    </>
  );
};

export default Home;
