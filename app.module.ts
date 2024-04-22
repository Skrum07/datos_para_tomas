import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NumberFormatPipe } from './shared/numero.pipe';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import { AngularMaterialModule } from './material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RecetasModule } from './recetas/recetas.module';
import { ProductosModule } from './productos/productos.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { FamiliasModule } from './familias/familias.module';
import { DialogokComponent } from './dialogok/dialogok.component';
import { ProduccionesModule } from './producciones/producciones.module';
import { EntregasModule } from './entregas/entregas.module';
import { ComprasModule } from './compras/compras.module';
import { ComprasDetailsModule } from './compras_details/compras-details.module';
import { InventariosModule } from './inventarios/inventarios.module';
import { ClientesModule } from './clientes/clientes.module';
import { ClasesModule } from './clases/clases.module';
import { TiposModule } from './tipos/tipos.module';
import { BodegasModule } from './bodegas/bodegas.module';

import { RegaccidentesModule } from './regaccidentes/regaccidentes.module';

import { OrdProdComponent } from './ord-prod/ord-prod.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormatNumberDirective } from './format-number.directive';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    DialogokComponent,
    OrdProdComponent,
    FormatNumberDirective,
    // NumberFormatPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularMaterialModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    BrowserAnimationsModule,
    RecetasModule,
    ProductosModule,
    ProveedoresModule,
    FamiliasModule,
    ClasesModule,
    TiposModule,
    ComprasModule,
    ComprasDetailsModule,
    EntregasModule,
    ProduccionesModule,
    InventariosModule,
    ClientesModule,
    BodegasModule,
    RegaccidentesModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    // PurchaseInvoicesModule
  ],
  // exports: [NumberFormatPipe],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
