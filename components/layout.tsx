import HeaderDesktop from 'components/headerDesktop';
import HeaderMobile from 'components/headerMobile';

const Layout = ({ children }) => {
  return (
    <div className='bg-generalBg'>
      <div className=' h-screen '>
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
