import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="d-flex w-100 align-itens-center">
      <div className="col-12 col-sm-6 text-center mx-auto mt-5">
        <h1><i className="far fa-smile-beam"></i></h1>
        <h1 className="mb-3">Comrpa realizada com sucesso</h1>
        <h4 className="mb-3 text-grey">Obrigado por realziar a sua compra na nossa loja, continue navegando e encontre os produtos que voces precisar!</h4>
        <Link to="/">Voltar para a Loja</Link>
      </div>
    </div>
  )
}
