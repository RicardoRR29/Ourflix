import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';



//Desafio da criação de um jogo para essa página
const Page404 = () => (<h1>Página 404</h1>)

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/cadastro/categoria" component={CadastroCategoria} />
    <Route component={Page404} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

