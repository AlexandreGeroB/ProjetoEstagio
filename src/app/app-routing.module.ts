import { MonitoradorResolverGuard } from './guards/monitorador-resolver.guard';
import { EditarComponent } from './editar/editar.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaComponent } from './lista/lista.component';
import { NgModule } from "@angular/core";

import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'lista', component: ListaComponent },
  { path: 'lista/cadastro', component: CadastroComponent, resolve: { monitorador: MonitoradorResolverGuard } },
  { path: 'lista/editar/:id', component: EditarComponent, resolve: { monitorador: MonitoradorResolverGuard } },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
