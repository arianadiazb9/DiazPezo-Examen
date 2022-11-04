import { EspaciosService } from './../../services/espacios.service';
import { Espacios } from './../../models/espacios';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-espacios',
  templateUrl: './list-espacios.component.html',
  styleUrls: ['./list-espacios.component.css']
})
export class ListEspaciosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'estacionamiento', 'piso', 'numero', 'estado', 'actions'];
  dataSource = new MatTableDataSource<Espacios>();

  constructor(private espaciosService: EspaciosService) { }

  ngOnInit(): void {
    this.getEspacios();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEspacios(){
    this.espaciosService.getEspacios().subscribe((data:Espacios[]) => {
      this.dataSource=new MatTableDataSource(data);
    })
  }

}

