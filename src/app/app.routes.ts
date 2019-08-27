// LIBS
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import { LayoutComponent } from './components/layout/layout.component';

const APP_ROUTES: Routes = [
    {
        path: '', 
        component: LayoutComponent,
        children: [
            { path: 'progress', loadChildren: './modules/progress-bar/progress-bar.module#ProgressBarModule' },
            // { path: '', redirectTo: 'progress', pathMatch: 'full' },
            // { path: '**', redirectTo: 'progress', pathMatch: 'full' },    
        ]
    },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [ RouterModule.forRoot(APP_ROUTES), ],
    exports: [ RouterModule ],
    providers: []
})
export class AppRoutingModule {}
