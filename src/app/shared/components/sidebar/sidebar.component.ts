import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PanelMenuModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: "Catalogos",
        icon: 'pi pi-home',
        routerLink: 'catalogos'
      },
      {
        label: 'Consultas avanzadas',
        icon: 'pi pi-book',
        type:'group',
        items: [
          {
            label: 'Autor',
            // icon: 'fa fa-sitemap  fa-fw',
            type: 'item',
            routerLink: 'autor',
          },
          {
            label: 'Titulo',
            // icon: 'fa fa-sitemap  fa-fw',
            type: 'item',
            routerLink: 'titulo',
          },
          {
            label: 'Materia',
            // icon: 'fa fa-sitemap  fa-fw',
            type: 'item',
            routerLink: 'materia',
          },
        ],
      },
    ]
  }
}
