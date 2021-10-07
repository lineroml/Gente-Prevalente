import HeaderDesktop from './header/headerDesktop';
import HeaderMobile from './header/headerMobile';

const Layout = ({ children }) => {
  return (
    <div className='bg-generalBg'>
      <div className=' h-screen'>
        <div className='h-header'>
          <HeaderMobile />
          <HeaderDesktop />
        </div>
        <div className='h-home bg-generalBg'>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
