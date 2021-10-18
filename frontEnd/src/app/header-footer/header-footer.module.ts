import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagesComponent } from './pages/pages.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, PagesComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent, FooterComponent, PagesComponent]
})
export class HeaderFooterModule { }
