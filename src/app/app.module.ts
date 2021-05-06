import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ItemsComponent } from './components/items/items.component';
import { AboutAppComponent } from './components/about-app/about-app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { FavDialogComponent } from './components/fav-dialog/fav-dialog.component';
import { FavIconComponent } from './components/fav-icon/fav-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    TopNavComponent,
    AboutAppComponent,
    AboutMeComponent,
    SearchComponent,
    FavDialogComponent,
    FavIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
