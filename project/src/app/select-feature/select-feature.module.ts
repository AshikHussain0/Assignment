import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { selectFeatureRoutes } from './select-feature.route';
import { SelectFeatureComponent } from './select-feature.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SelectFeatureComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        RouterModule.forChild(selectFeatureRoutes),
    ],
})
export class SelectFeatureModule { }
