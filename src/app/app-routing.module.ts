import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'funcionalidades',
    loadChildren: () => import('./pages/funcionalidades/funcionalidades.module').then( m => m.FuncionalidadesPageModule)
  },
  {
    path: 'tela-jogo',
    loadChildren: () => import('./pages/tela-jogo/tela-jogo.module').then( m => m.TelaJogoPageModule)
  },
  {
    path: 'dados-usuario',
    loadChildren: () => import('./pages/dados-usuario/dados-usuario.module').then( m => m.DadosUsuarioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
