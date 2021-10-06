import { useState } from 'react';

const Empresas = ({ empresas }) => {
  const [state, setState] = useState(0);
  const nextPage = (e: any) => {
    e.preventDefault();
    setState(state + 1);
  };
  const previousPage = (e: any) => {
    e.preventDefault();
    setState(state - 1);
  };
  return (
    <>
      <div>{/* <CardEnterprise empresa={empresas[state]} />*/}</div>
      <button onClick={(e) => previousPage(e)} disabled={state === 0}>
        anterior
      </button>
      {/**<button onClick={(e) => nextPage(e)} disabled={state === empresas.length}> sgte </button>*/}
    </>
  );
};
export default Empresas;
