import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  sidebarItems = [
    {
      url:"/heroes/list",
      icon:"list",
      label:"Listado"
    },
    {
      url:"/heroes/new-hero",
      icon:"add",
      label:"Añadir"
    },
    {
      url:"/heroes/search",
      icon:"search",
      label:"Buscar"
    },
  ]
}
