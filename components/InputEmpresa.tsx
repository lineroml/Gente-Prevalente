const InputEmpresa = ({ label, info }) => {
  return (
    <div className='flex flex-col items-center w-full'>
      <label className='text-sm text-grislabel w-full' htmlFor='infoemp'>
        {label}
      </label>
      <div className='text-base w-full '>
        <input
          readOnly
          className=' text-base w-full pl-2 font-bold focus:outline-none'
          type='text'
          id='infoemp'
          name='infoEmpresa'
          value={info}
        />
      </div>
      <div className='border-b-2 bg-separadores w-full'></div>
    </div>
  );
};

export default InputEmpresa;
