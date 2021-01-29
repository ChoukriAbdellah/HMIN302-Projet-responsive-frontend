import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";



import { PagesModule } from "./pages/pages.module";

// import { IndexComponent } from "./pages/index/index.component";
// import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
// import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
// import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { DefinitionComponent } from './definition/definition.component';
import { RamificationComponent } from './ramification/ramification.component';
import { RelationComponent } from './relation/relation.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserModule } from '@angular/platform-browser';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {DemoMaterialModule} from './shared/material-module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    LoadingComponent,
    DataComponent,
    HomeComponent,
    DefinitionComponent,
    RamificationComponent,
    RelationComponent,
    
    // IndexComponent,
    // ProfilepageComponent,
    // RegisterpageComponent,
    // LandingpageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
     BrowserModule,
    ScrollingModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    MatFormFieldModule,
    DemoMaterialModule,
    // BsDropdownModule.forRoot(),
    // ProgressbarModule.forRoot(),
    // TooltipModule.forRoot(),
    // CollapseModule.forRoot(),
    // TabsModule.forRoot(),
    PagesModule
    // PaginationModule.forRoot(),
    // AlertModule.forRoot(),
    // BsDatepickerModule.forRoot(),
    // CarouselModule.forRoot(),
    // ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
