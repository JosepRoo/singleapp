import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/comunes/encabezado/encabezado.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ConsolasComponent } from './componentes/consolas/consolas.component';
import {APP_ROUTING} from './app.routes';
import { InfoswitchComponent } from './componentes/infoswitch/infoswitch.component';
import { JuegosswitchComponent } from './componentes/juegosswitch/juegosswitch.component';
import { JuegotecnicaComponent } from './componentes/juegotecnica/juegotecnica.component';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PrincipalComponent,
    AcercadeComponent,
    ConsolasComponent,
    InfoswitchComponent,
    JuegosswitchComponent,
    JuegotecnicaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
