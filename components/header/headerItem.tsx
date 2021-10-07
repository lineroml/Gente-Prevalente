import NextImage from 'next/image';

const HeaderItem = ({ source, text, width, height, aditionalClassName }) => {
  return (
    <div className={`flex  ${aditionalClassName}`}>
      <NextImage src={source} width={width} height={height}></NextImage>
      <div className=' pl-2 text-white self-center'> {text}</div>
    </div>
  );
};

export default HeaderItem;
