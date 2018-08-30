import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { IonicImageViewerModule } from 'ionic-img-viewer';

// Pages
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { CategoriesPage } from '../pages/categories/categories';
import { CategoryItemsPage } from '../pages/category-items/category-items';
import { ViewPlacePage } from '../pages/view-place/view-place';
import { TabsPage } from '../pages/tabs/tabs';
import { AugmentedRealityPage } from '../pages/augmented-reality/augmented-reality';
import { PlacesChoicesPage } from '../pages/places-choices/places-choices';
import { SearchPage } from '../pages/search/search';
import { SearchResultsPage } from '../pages/search-results/search-results';
import { HelpPage } from '../pages/help/help';

import { PlacesProvider } from '../providers/places/places';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { GmapsProvider } from '../providers/gmaps/gmaps';
import { LocationProvider } from '../providers/location/location';

// Directives
import { ItemBackgroundDirective } from '../directives/item-background/item-background';

// Congfigs
import { FirebaseConfig } from '../config/FirebaseConfig';

// Helper
import { Helper } from '../utils/helper';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AugmentedRealityPage,
    MapPage,
    CategoriesPage,
    CategoryItemsPage,
    ViewPlacePage,
    SearchPage,
    SearchResultsPage,
    HelpPage,
    TabsPage,
    PlacesChoicesPage,
    ItemBackgroundDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AugmentedRealityPage,
    MapPage,
    CategoriesPage,
    CategoryItemsPage,
    ViewPlacePage,
    SearchPage,
    SearchResultsPage,
    HelpPage,
    TabsPage,
    PlacesChoicesPage
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlacesProvider,
    FirebaseProvider,
    GmapsProvider,
    LocationProvider,
    Helper
  ]
})
export class AppModule {}
