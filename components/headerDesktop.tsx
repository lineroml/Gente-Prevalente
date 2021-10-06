import NextImage from 'next/image';
import HeaderItem from './headerItem';

const HeaderDesktop = () => {
  return (
    <div className='md:block hidden h-full'>
      <div className='flex w-full bg-grisHeader h-full items-center shadow-2xl'>
        <HeaderItem
          aditionalClassName='w-header1 justify-center font-bold'
          source='/img/logogp.svg'
          width='70px'
          height='70px'
          text='Gente Prevalente'
        />
        <div className='w-header2 text-center '>
          <NextImage
            className='block '
            src='/img/search.svg'
            width='16px'
            height='16px'
          ></NextImage>
          <input
            type='text'
            placeholder='Buscar ...'
            className='pl-2 w-2/3 bg-transparent border-0 focus:border-transparent outline-none text-white'
          />
        </div>
        <div className='flex flex-nowrap w-header3 justify-center place-items-center font-bold'>
          <HeaderItem
            aditionalClassName='justify-center'
            source='/img/admin.svg'
            width='25px'
            height='19.93px'
            text='Administración'
          />
          <div className='pb-2'>
            <NextImage src='/img/mininotif.svg' width='11px' height='11px'></NextImage>
          </div>
        </div>

        <div className='flex flex-nowrap w-header4 justify-center place-items-center'>
          <HeaderItem
            aditionalClassName='justify-center'
            source='/img/empleo.svg'
            width='20px'
            height='17.5px'
            text='Empleo'
          />
          <div className='pl-2'>
            <NextImage src='/img/downarrow.svg' width='17.55px' height='10.87px'></NextImage>
          </div>
        </div>
        <HeaderItem
          aditionalClassName='w-header5 justify-center'
          source='/img/cv.svg'
          width='17px'
          height='23px'
          text='Mi CV'
        />
        <div className='flex flex-nowrap w-header6 justify-center place-items-center'>
          <HeaderItem
            aditionalClassName='justify-center'
            source='https://img.icons8.com/color/32/000000/test-account.png'
            width='32px'
            height='32px'
            text='Daniel'
          />
          <div className='pl-2 '>
            <NextImage src='/img/downarrow.svg' width='17.55px' height='10.87px'></NextImage>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderDesktop;
