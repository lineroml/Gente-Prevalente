import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import safeJsonStringify from 'safe-json-stringify';
import { prisma } from 'pages/api/graphql';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/client';
import Card from 'components/Card';
import { useRouter } from 'next/router';

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

const updateApproved = gql`
  mutation Mutation($createEnterpriseData: EnterpriseCreateInput!) {
    createEnterprise(data: $createEnterpriseData) {
      id
      nombre
      razonSocial
      identificacion
      numEmpleados
      isApproved
      logo
      createdAt
      updatedAt
    }
  }
`;

const Home = ({ enterprises }: enterpriseInterface) => {
  const [mutationUpdateApproved, { loading, error }] = useMutation(mutacion);

  const crearEmpresa = async (e: any) => {
    e.preventDefault();

    const data = {
      isApproved: {
        set: true,
      },
    };

    const where = {
      id: 'ckua5tw520000a8v04rbcmwi4',
    };

    await mutationUpdateApproved({
      variables: { data, where },
    });
    if (!error) {
      console.log('exito');
    } else {
      console.log('falló');
    }
  };

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
