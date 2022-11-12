import Meta from './Meta';
import Header from './Header';

const Layout = ({ children }: any) => {
  return (
    <div className='min-h-screen'>
      <Meta />
      <Header />
      <div className=''>{children}</div>
    </div>
  );
};

export default Layout;
