import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { CarouselComponent } from './common/carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './content/portfolio/portfolio.component';
import { SlideShowComponent } from './common/slide-show/slide-show.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    CarouselComponent,
    FooterComponent,
    PortfolioComponent,
    SlideShowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
