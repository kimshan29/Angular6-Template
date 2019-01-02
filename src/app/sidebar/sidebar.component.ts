import { Component, OnInit } from '@angular/core';


declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', class: 'menu-icon mdi mdi-television' },
  { path: '/announcement', title: 'Announcement', class: 'menu-icon mdi mdi-notification-clear-all' },
  { path: '/forms', title: 'Forms', class: 'menu-icon mdi mdi-notification-clear-all' },
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  public samplePagesCollapsed = true;
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
