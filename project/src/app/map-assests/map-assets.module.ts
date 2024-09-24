import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MapAssestsComponent } from './map-assests.component';
import { mapAssetsRoutes } from './map-assets.route';

@NgModule({
    declarations: [
        MapAssestsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(mapAssetsRoutes),
    ],
})
export class MapAssetsModule { }
