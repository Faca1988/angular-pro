// LIBS
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import { LayoutComponent } from './components/layout/layout.component';

const APP_ROUTES: Routes = [
    {
        path: 'main', 
        component: LayoutComponent,
        children: [
            { path: 'module', loadChildren: './modules/progress-bar/progress-bar.module#ProgressBarModule' },
            { path: '', redirectTo: 'module', pathMatch: 'full' },
            { path: '**', redirectTo: 'module', pathMatch: 'full' },    
        ]
    },
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: '**', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
    imports: [ RouterModule.forRoot(APP_ROUTES), ],
    exports: [ RouterModule ],
    providers: []
})
export class AppRoutingModule {}
