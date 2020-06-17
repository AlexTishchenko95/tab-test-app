import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {TabComponent} from '../tab/tab.component';
import {Tab} from '../share/tab.interface';

@Component({
  selector: 'app-tabs-main',
  templateUrl: './tabs-main.component.html',
  styleUrls: ['./tabs-main.component.scss']
})
export class TabsMainComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter((tab)=>tab.active);
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: Tab){
    this.tabs.toArray().forEach(tab => tab.active = false);
    tab.active = true;
  }
}
