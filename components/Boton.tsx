import NextImage from 'next/image';
import { useMutation } from '@apollo/client';
import { gql } from 'apollo-server-core';
import { useSnackbar } from 'notistack';

/**Mutación para cambiar valor de isApproved */
const mutacion = gql`
  mutation Mutation($data: EnterpriseUpdateInput!, $where: EnterpriseWhereUniqueInput!) {
    updateEnterprise(data: $data, where: $where) {
      id
      nombre
      isApproved
      razonSocial
      nit
      identificacion
      numEmpleados
      logo
    }
  }
`;

const Boton = ({ aceptar, label, empresa, setEmpresas, isDisabled }) => {
  const [mutationUpdateApproved, { loading, error }] = useMutation(mutacion);
  const { enqueueSnackbar } = useSnackbar();
  console.log('Empresa: ', empresa);
  console.log('idDisabled: ', isDisabled);

  const changeState = async (e: any, type: String) => {
    e.preventDefault();

    const data = {
      isApproved: {
        set: aceptar,
      },
    };

    const where = {
      id: `${empresa.id}`,
    };

    const res = await mutationUpdateApproved({
      variables: { data, where },
    });

    if (!error) {
      console.log('exito');
      const empresaUpdate = res.data.updateEnterprise;
      setEmpresas((prevState) => [
        ...prevState.slice().map((item) => {
          return item.id !== empresaUpdate.id ? item : empresaUpdate;
        }),
      ]);
      enqueueSnackbar(
        `${
          aceptar ? 'Se ha aprobado satisfactoriamente!' : 'Se ha rechazado satisfactoriamente!'
        } `,
        {
          variant: 'success',
        }
      );
    } else {
      console.log('falló');
      enqueueSnackbar('Se ha producido un error.', {
        variant: 'error',
      });
    }
  };

  return (
    <button
      type='button'
      disabled={isDisabled || loading}
      onClick={(e) => {
        changeState(e, aceptar);
      }}
      className={`${
        isDisabled || loading ? 'opacity-50' : 'opacity-100'
      } h-botonAceptar flex w-botonAceptar  bg-white shadow-botonAceptar hover:shadow-xl rounded-2xl`}
    >
      <div className='flex h-full'>
        <div className='flex pl-3'>
          <NextImage
            src={`/img/${aceptar ? 'aceptar' : 'rechazar'}.svg`}
            width='30'
            height='34'
          ></NextImage>
        </div>
        <div className='pl-3 text-lg font-bold self-center'>{label} Empresa</div>
      </div>
    </button>
  );
};

export default Boton;
