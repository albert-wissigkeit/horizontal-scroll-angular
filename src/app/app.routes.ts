import { Routes } from '@angular/router';
import { AllPagesComponent } from './all-pages/all-pages.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

export const routes: Routes = [
    { path: 'first', component: FirstComponent },
    { path: 'second', component: SecondComponent },
    { path: 'third', component: ThirdComponent },
    { path: '', component: AllPagesComponent },
    { path: '**', redirectTo: '' }
]
