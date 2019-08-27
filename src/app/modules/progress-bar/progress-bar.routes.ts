import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

const PROGRESS_BAR_ROUTES: Routes = [
    { 
        path: 'bar', 
        component: ProgressBarComponent,
        children: [
            { path: 'timer', loadChildren: '../countdown/countdown.module#CountdownModule' },
        ]
    },
    // { path: '', pathMatch: 'full', redirectTo: 'bar' },
    // { path: "**", pathMatch: "full", redirectTo: 'bar' }
];

@NgModule({
    imports: [ RouterModule.forChild(PROGRESS_BAR_ROUTES) ],
    exports: [ RouterModule ],
    declarations:[ ]
})
export class ProgressBarRoutingModule {}
