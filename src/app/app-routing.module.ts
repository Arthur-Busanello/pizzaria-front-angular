import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/sistema/login/login.component';
import { IndexComponent } from './components/layout/index/index.component';
import { ProdutoslistComponent } from './components/produtos/produtoslist/produtoslist.component';


import { ReactiveFormsModule } from '@angular/forms';

import { PedidoComponent } from './pedido/pedido.component';
import { NovoPedidoomponent } from './pedido/novo-pedido/novo-pedido.component';

// import { PedidoslistComponent } from './components/pedidos/pedidoslist/pedidoslist.component';
import { AdresslistComponent } from './components/adress/adresslist/adresslist.component';
import { ClientlistComponent } from './components/client/clientlist/clientlist.component';
import { SaborlistComponent } from './components/sabor/saborlist/saborlist.component';


const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  {
    path: "admin", component: IndexComponent, children: [
      { path: "produtos", component: ProdutoslistComponent },


      {path: "sabor" , component: SaborlistComponent},

      { path: "pedidos", component: PedidoComponent },
      { path: "novoPedido", component: NovoPedidoomponent },
      { path: "adress", component: AdresslistComponent },
      { path: "client", component: ClientlistComponent }]

  },

  // { path: "pedidos", component: PedidoslistComponent },
]





@NgModule({
  imports: [RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
