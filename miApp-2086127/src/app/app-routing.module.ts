import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CamaraComponent } from './camera/camera.component';
import { TabsPage } from './tabs/tabs.page';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'login'},
  {
    path: '',        
    children: [      
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
      },
    ]    
  },

  { // Rutas protegidas
    path: '',
    canActivate: [AuthGuard],
    //canActivateChild: [AuthGuard],
    component: TabsPage,    
    children: [
      //Layout Menu
      {
        canActivate: [AuthGuard],
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
      },
      {
        canActivate: [AuthGuard],
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        canActivate: [AuthGuard],
        path: 'perfil',
        loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
      },  
      {
        canActivate: [AuthGuard],
        path: 'camara',
        loadChildren: () => import('./camara/camara.module').then( m => m.CamaraPageModule)
      },      
    ]
  },
  
  
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }