import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cadastro',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'funcionalidades',
    loadChildren: () => import('./pages/funcionalidades/funcionalidades.module').then( m => m.FuncionalidadesPageModule)
  },

  {
    path: 'meus-dados',
    loadChildren: () => import('./pages/dados-usuario/dados-usuario.module').then( m => m.DadosUsuarioPageModule)
  },
  {
    path: 'tela-jogo',
    loadChildren: () => import('./pages/tela-jogo/tela-jogo.module').then( m => m.TelaJogoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
