import Boton from 'components/Boton';
import FormEmpresa from 'components/FormEmpresa';
import router from 'next/router';
import NextImage from 'next/image';
import { useState } from 'react';
import safeJsonStringify from 'safe-json-stringify';
import { prisma } from 'pages/api/graphql';
import { gql } from 'apollo-server-core';
import { useEffect } from 'react';

export async function getServerSideProps() {
  let enterprises;
  try {
    enterprises = await prisma.enterprise.findMany();
  } catch (e) {}
  return {
    props: {
      enterprises: JSON.parse(safeJsonStringify(enterprises ?? [])),
    },
  };
}

interface enterpriseInterface {
  enterprises: any;
}

const mutacion = gql`
  mutation Mutation($Data: EnterpriseUpdateInput!, $Where: EnterpriseWhereUniqueInput!) {
    updateEnterprise(data: $Data, where: $Where) {
      isApproved
      id
    }
  }
`;

const SolicitudesEmpresas = ({ enterprises }: enterpriseInterface) => {
  let maxState = enterprises.length - 1;
  const [state, setState] = useState(0);
  const [empresas, setEmpresas] = useState(enterprises);
  const [numAprobados, setNumAprobados] = useState(0);

  const nextPage = (e: any) => {
    e.preventDefault();
    if (state != maxState) {
      setState(state + 1);
    }
  };

  const previousPage = (e: any) => {
    e.preventDefault();
    if (state != 0) {
      setState(state - 1);
    }
  };
  /*
  useEffect(() => {
    let aprobados = 0;
    let empresasNoAprobadas: any = [];
    console.log('Ejecuto useEffect');
    empresas.forEach((empresa) => {
      if (empresa.isApproved) {
        aprobados = aprobados + 1;
      }
    });
    setNumAprobados(aprobados);
    console.log(numAprobados);

    empresas.forEach((empresa) => {
      if (!empresa.isApproved) {
        empresasNoAprobadas.push(empresa);
      }
    });
  }, [empresas]);
  */

  const refreshData = () => {
    router.replace(router.asPath);
  };

  useEffect(() => {
    refreshData();
  }, [empresas]);

  return (
    <div className='lg:h-full h-auto w-full bg-generalBg'>
      <div className='w-full h-full justify-center'>
        <div className='pl-6 lg:pb-0 pb-4 h-admin pt-6 sm:text-2xl text-sm flex'>
          <div className='cursor-pointer text-azulmedio' onClick={() => router.back()}>
            Administración{' '}
          </div>
          <div className='pl-2'>/ Aprobación de Empresas</div>
        </div>
        <div className='h-form flex lg:flex-col flex-col-reverse'>
          <div className='h-home '>
            <FormEmpresa empresa={empresas[state]} setEmpresas={setEmpresas} />
          </div>
          {/** Barra con botones para visualizar empresas */}
          <div className='flex justify-center items-center lg:h-header h-12 gap-x-2'>
            <div
              onClick={(e) => previousPage(e)}
              className={`${state == 0 ? 'opacity-50' : 'opacity-100 cursor-pointer'}`}
            >
              <NextImage src='/img/prevarrow.svg' width='38' height='38'></NextImage>{' '}
            </div>
            <div className='-mt-2 text-xs font-normal text-counterEmpresa'>
              Empresa 2 de 4 pendiente por aprobación
            </div>
            <div
              onClick={(e) => nextPage(e)}
              className={`${state == maxState ? 'opacity-50' : 'opacity-100 cursor-pointer'}`}
            >
              <NextImage src='/img/nextarrow.svg' width='38' height='38'></NextImage>
            </div>
          </div>
        </div>
        <div className='pt-6 lg:hidden flex lg:w-5/12 w-full items-center flex-col gap-y-6 pb-10'>
          <Boton
            aceptar={true}
            label='Aceptar'
            empresa={empresas[state]}
            isDisabled={empresas[state]?.isApproved}
            setEmpresas={setEmpresas}
          />
          <Boton
            aceptar={false}
            label='Rechazar'
            empresa={empresas[state]}
            isDisabled={!empresas[state]?.isApproved}
            setEmpresas={setEmpresas}
          />
        </div>
      </div>
    </div>
  );
};

export default SolicitudesEmpresas;
