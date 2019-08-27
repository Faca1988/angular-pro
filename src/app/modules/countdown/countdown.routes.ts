import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountdownComponent } from './components/countdown/countdown.component';

const COUNTDOWN_ROUTES: Routes = [
    { path: 'countdown', component: CountdownComponent },
    { path: '', redirectTo:'countdown', pathMatch:'full' },
    { path: '**', redirectTo: 'countdown' },
];

@NgModule({
    imports: [RouterModule.forChild(COUNTDOWN_ROUTES)],
    exports: [RouterModule]
})
export class CountdouwnRoutingModule {}
