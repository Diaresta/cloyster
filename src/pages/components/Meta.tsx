import Head from 'next/head';

const Meta = () => {
  return (
    <>
      <Head>
        <title>Cloyster: Pokémon Team Builder</title>
        <meta name='description' content='Pokémon Team Builder' />
        <link rel='icon' href='/favicon.ico' />
        <script
          src='https://kit.fontawesome.com/dca6bdf503.js'
          crossOrigin='anonymous'
        />
      </Head>
    </>
  );
};

Meta.defaultProps = {
  title: 'Cloyster: Pokémon Team Builder',
  description: 'Pokémon Team Builder',
};

export default Meta;
