import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { CollapseModule, ContainerComponent, HeaderModule, NavbarModule, NavModule, SidebarModule, SidebarNavComponent } from '@coreui/angular';
import { MapAssetsModule } from './map-assests/map-assets.module';
import { SelectFeatureModule } from './select-feature/select-feature.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SidebarModule,
    RouterModule,
    NavbarModule,
    HeaderModule,
    HttpClientModule,
    NavModule,
    CollapseModule,
    ContainerComponent,
    MapAssetsModule,
    SelectFeatureModule,
    SidebarNavComponent,
    RouterModule.forRoot(routes),
],
  providers: [], 
  bootstrap: [AppComponent],
})
export class AppModule {}
