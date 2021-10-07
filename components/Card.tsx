import NextImage from 'next/image';
import { useRouter } from 'next/router';

const Card = ({ icono, titulo, minitext, ruta }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`${ruta}`)}
      className='animate-fadeIn cursor-pointer group lg:h-full w-full cardanimation group h-36 flex bg-white rounded-2xl relative flex-col'
    >
      <div className='block -mt-6 lg:h-cardIcon iconcardanim lg:w-cardIcon h-cardIconMob w-cardIconMob absolute pl-6'>
        <NextImage
          src={`/img/icon-card/${icono}`}
          layout='responsive'
          width='108'
          height='108'
        ></NextImage>
      </div>
      <div className='h-full'>
        <div className='h-5/6 border-b-2 flex justify-end'>
          <div className='sm:w-full w-4/6 lg-extra:text-3xl sm:h-1/2 h-full text-med text-grisoscuro px-5 lg:py-0 py-2 self-end'>
            {titulo}
          </div>
        </div>
        <div className='h-1/6 flex items-center'>
          <div className='pl-3 self-center'>
            <NextImage src='/img/icon-card/clock.svg' width='16' height='16'></NextImage>
          </div>
          <div className='pl-2 lg-extra:w-1/3 w-full text-grisclaro font-normal text-xs'>
            {minitext}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
