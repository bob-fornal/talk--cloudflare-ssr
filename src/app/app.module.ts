import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieComponent } from './pages/cookie/cookie.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageComponent } from './pages/page/page.component';
import { RedirectComponent } from './pages/redirect/redirect.component';
import { RegisterComponent } from './pages/register/register.component';
import { SplitTestComponent } from './pages/split-test/split-test.component';
import { SetupSplitTestComponent } from './pages/split-test/setup-split-test/setup-split-test.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,

    CookieComponent,
    DashboardComponent,
    PageComponent,
    RedirectComponent,
    RegisterComponent,
    SplitTestComponent,
    SetupSplitTestComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatInputModule,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
