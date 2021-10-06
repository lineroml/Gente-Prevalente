import Card from 'components/Card';

const Home = () => {
  return (
    <div className='lg:h-full h-auto bg-generalBg w-full flex items-center justify-center'>
      <div className='sm:w-3/5 lg:py-0 py-12 w-5/6 lg:h-4/6 h-5/6 lg:gap-10 gap-12 grid lg:grid-cols-2 flex-col'>
        <Card
          ruta='/solicitudes-empresas'
          source='/img/card-solicitudes.svg'
          titulo='Solicitudes de creación de empresas'
          minitext='2 solicitudes sin tratar'
        />
        <Card
          ruta=''
          source='/img/card-indicadores.svg'
          titulo='Indicadores'
          minitext='2 solicitudes sin tratar'
        />
        <Card
          ruta=''
          source='/img/card-empleados.svg'
          titulo='Inscripción de empleados en empresas'
          minitext='2 solicitudes sin tratar'
        />
        <Card
          ruta=''
          source='/img/card-usuarios.svg'
          titulo='Gestión de usuarios'
          minitext='2 solicitudes sin tratar'
        />
      </div>
    </div>
  );
};

export default Home;
