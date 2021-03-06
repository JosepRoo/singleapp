import { RouterModule, Routes } from '@angular/router';
//Se tienen que importar todas las rutas que vamos a utilizar
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ConsolasComponent } from './componentes/consolas/consolas.component';
import { InfoswitchComponent } from './componentes/infoswitch/infoswitch.component';
import { JuegosswitchComponent } from './componentes/juegosswitch/juegosswitch.component';
import { JuegotecnicaComponent } from './componentes/juegotecnica/juegotecnica.component';
const APP_ROUTES: Routes = [
 //Se inicializan todas las rutas que vamos a utilizar.
 { path: 'principal', component: PrincipalComponent },
 { path: 'acercade', component: AcercadeComponent },
 { path: 'consolas', component: ConsolasComponent },
 { path: 'consolas/infoswitch', component: InfoswitchComponent },
 { path: 'consolas/infoswitch/juegosswitch', component: JuegosswitchComponent },
 { path: 'consolas/infoswitch/juegosswitch/juego', component: JuegotecnicaComponent },
 { path: '**', pathMatch: 'full', redirectTo: 'principal' }
];
//Se tiene que importar APP_ROUTING en el archivo app.module.ts como un import,
//y dentro del arreglo de imports[]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
