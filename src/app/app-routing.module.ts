import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/sistema/login/login.component';
import { IndexComponent } from './components/layout/index/index.component';
import { ProdutoslistComponent } from './components/produtos/produtoslist/produtoslist.component';
import { PedidoslistComponent } from './components/pedidos/pedidoslist/pedidoslist.component';
import { EntregalistComponent } from './components/entrega/entregalist/entregalist.component';
import { ClientlistComponent } from './components/client/clientlist/clientlist.component';
import { AdresslistComponent } from './components/adress/adresslist/adresslist.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  {
    path: "admin", component: IndexComponent, children: [
      { path: "produtos", component: ProdutoslistComponent },
      { path: "pedidos", component: PedidoslistComponent },
      { path: "client", component: ClientlistComponent },
      { path: "adress", component: AdresslistComponent },
      { path: "entrega", component: EntregalistComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
