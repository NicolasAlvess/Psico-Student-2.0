import { Routes } from '@angular/router';
// 1. Corrija o nome da classe importada aqui (de 'Home' para 'HomeComponent')
import { HomeComponent } from './pages/home/home'; 

export const routes: Routes = [
    // 2. E corrija o nome do componente aqui também
    { path: 'home', component: HomeComponent },

   

    // Rota padrão
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];