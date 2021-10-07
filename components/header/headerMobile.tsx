import HeaderItem from './headerItem';

const HeaderMobile = () => {
  return (
    <div className='md:hidden h-full'>
      <div className='flex w-full bg-grisHeader h-full'>
        <HeaderItem
          aditionalClassName='w-1/2'
          source='/img/icons-header/logogp.svg'
          width='70px'
          height='70px'
          text='Gente Prevalente'
        />
        <HeaderItem
          aditionalClassName='w-1/2 justify-end pr-4'
          source='/img/icons-header/menumobile.svg'
          width='20px'
          height='17.5px'
          text=''
        />
      </div>
    </div>
  );
};

export default HeaderMobile;
