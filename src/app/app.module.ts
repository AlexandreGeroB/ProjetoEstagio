import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {MatSelectModule} from '@angular/material/select';
import { NgxMaskModule } from 'ngx-mask'








import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListaComponent } from './lista/lista.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { EditarComponent } from './editar/editar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio';
import { ViewEnderecosComponent } from './view-enderecos/view-enderecos.component';
import { MatSortModule } from '@angular/material/sort';
import { CadastroEnderecosComponent } from './cadastro-enderecos/cadastro-enderecos.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaComponent,
    CadastroComponent,
    EditarComponent,
    ViewEnderecosComponent,
    CadastroEnderecosComponent,

  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatRadioModule,
    ReactiveFormsModule,
    ModalModule,
    SweetAlert2Module.forRoot(),
    NgxMaskModule.forRoot(),
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
