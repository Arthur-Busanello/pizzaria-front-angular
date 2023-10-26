import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/sistema/login/login.component';
import { IndexComponent } from './components/layout/index/index.component';
import { ProdutoslistComponent } from './components/produtos/produtoslist/produtoslist.component';
import { PedidoslistComponent } from './components/pedidos/pedidoslist/pedidoslist.component';
import { SaborAddComponent } from './sabor/sabor-add/sabor-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SaborComponent } from './sabor/sabor.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  {
    path: "admin", component: IndexComponent, children: [
      { path: "produtos", component: ProdutoslistComponent },
      { path: "pedidos", component: PedidoslistComponent },
      {path: "sabor" , component: SaborComponent}
    ],
   

  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ReactiveFormsModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
