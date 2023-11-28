import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdressdetailsComponent } from './components/adress/adressdetails/adressdetails.component';
import { AdresslistComponent } from './components/adress/adresslist/adresslist.component';
import { ClientdetailsComponent } from './components/client/clientdetails/clientdetails.component';
import { ClientlistComponent } from './components/client/clientlist/clientlist.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { IndexComponent } from './components/layout/index/index.component';
import { ProdutosdetailsComponent } from './components/produtos/produtosdetails/produtosdetails.component';
import { ProdutoslistComponent } from './components/produtos/produtoslist/produtoslist.component';
import { SabordetailsComponent } from './components/sabor/sabordetails/sabordetails.component';
import { SaborlistComponent } from './components/sabor/saborlist/saborlist.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { SizeComponent } from './size/size.component';
import { SizeModule } from './size/size.module';
import { PedidoModule } from './pedido/pedido.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    ProdutoslistComponent,
    ProdutosdetailsComponent,
    ProdutoslistComponent,
    ProdutosdetailsComponent,
    AdressdetailsComponent,
    AdresslistComponent,
    ClientdetailsComponent,
    ClientlistComponent,
    SabordetailsComponent,
    SaborlistComponent,
    ProdutosdetailsComponent,
    SizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModalModule,
    SizeModule,
    PedidoModule
  ],
  providers: [httpInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule { }
