import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

const PROGRESS_BAR_ROUTES: Routes = [
    { path: 'progress', component: ProgressBarComponent },
    { path: "", pathMatch: "full", redirectTo: "progress" },
    { path: "**", pathMatch: "full", redirectTo: "progress" }
];

@NgModule({
    imports: [ RouterModule.forChild(PROGRESS_BAR_ROUTES) ],
    exports: [ RouterModule ],
    declarations:[ ]
})
export class ProgressBarRoutingModule {}
