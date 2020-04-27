import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabComponent } from './tab/tab.component';
import { ServicesComponent } from './services/services.component';
import { CtaComponent } from './cta/cta.component';
import { AboutComponent } from './about/about.component';
import { ItemsComponent } from './items/items.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LogosComponent } from './logos/logos.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabComponent,
    ServicesComponent,
    CtaComponent,
    AboutComponent,
    ItemsComponent,
    ContactsComponent,
    LogosComponent,
    NewsletterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
