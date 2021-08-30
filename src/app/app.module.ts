import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MusicComponent } from "./music/music.component";
import { MusicListComponent } from "./music-list/music-list.component";
import { LibraryComponent } from "./library/library.component";
import { SearchComponent } from "./search/search.component";
import { ItuneListService } from "./shared/itune_music.service";
import { HttpClientModule } from "@angular/common/http";
import { AppConfigModule } from "./app-config/app-config.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MusicComponent,
    MusicListComponent,
    LibraryComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppConfigModule,
  ],
  providers: [ItuneListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
