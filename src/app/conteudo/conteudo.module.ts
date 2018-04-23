import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { ListafilmesComponent } from './listafilmes/listafilmes.component';
import { FilmeCardComponent } from './filme-card/filme-card.component';


import { FilmeService } from './filme.service';
import { FormPesquisaComponent } from './listafilmes/form-pesquisa/form-pesquisa.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [ListafilmesComponent, 
    FilmeCardComponent, FormPesquisaComponent
  ],
  exports: [
    ListafilmesComponent,
    FilmeCardComponent
  ],
  providers: [FilmeService]
})
export class ConteudoModule { }
