import Meta from './Meta';
import Header from './Header';

const Layout = ({ children }: any) => {
  return (
    <div>
      <Meta />
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
