import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PlacesChoicesPage } from '../pages/places-choices/places-choices';
import { MapPage } from '../pages/map/map';
import { HomePage } from '../pages/home/home';
import { AugmentedRealityPage } from '../pages/augmented-reality/augmented-reality';
import { SearchPage } from '../pages/search/search';
import { HelpPage } from '../pages/help/help';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;
  pages: Array<any> = [
    { title: 'Home', component: HomePage, icon: 'home' },
    { title: 'Map', component: MapPage, icon: 'map'  },
    { title: 'AR Experience', component: AugmentedRealityPage, icon: 'camera'  },
    { title: 'Explore', component: SearchPage, icon: 'search'  },
    { title: 'List', component: PlacesChoicesPage, icon: 'list'  },
    { title: 'Help', component: HelpPage, icon: 'help'  },
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
