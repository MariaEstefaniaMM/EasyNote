import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesTabsPage } from './pages-tabs';

@NgModule({
  declarations: [
    PagesTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesTabsPage),
  ],
})
export class PagesTabsPageModule {}
