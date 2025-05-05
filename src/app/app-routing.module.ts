import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CookieComponent } from './pages/cookie/cookie.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageComponent } from './pages/page/page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RedirectComponent } from './pages/redirect/redirect.component';
import { RegisterComponent } from './pages/register/register.component';
import { SplitTestComponent } from './pages/split-test/split-test.component';

const routes: Routes = [
  { path: 'cookie', component: CookieComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'page/EMPTY', component: PageComponent },
  { path: 'page/:userId', component: PageComponent },

  { path: 'redirect', component: RedirectComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'split-test', component: SplitTestComponent },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
