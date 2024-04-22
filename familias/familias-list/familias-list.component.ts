import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Familia } from '../familia';
import { FamiliasService } from '../familias.service';
import { DialogokComponent } from 'src/app/dialogok/dialogok.component';
import { CreaFecha } from '../../shared/crear_fecha';

@Component({
  selector: 'app-familias-list',
  templateUrl: './familias-list.component.html',
  styleUrls: ['./familias-list.component.css']
})
export class FamiliasListComponent implements OnInit {

  FamiliaData: any = [];
  dataSource!: MatTableDataSource<Familia>;

  @ViewChild(MatPaginator, { static: false})
  paginator!: MatPaginator;
  displayedColumns: string[] = ['family_code','family_name', 'action'];

  constructor(
    private familiaApi: FamiliasService,
    private actRoute: ActivatedRoute,
    private dialog: MatDialog
  ) { }
  titList = "";
  nro = this.actRoute.snapshot.paramMap.get('nro');

  ngOnInit(): void {
    if (this.nro == '0' || this.nro == '1') {
      const dfec_hoy = CreaFecha(1);

      if (this.nro == '0') {
      this.titList = " Creadas " + dfec_hoy;
      }

      this.readDataFamilies(this.nro);
    }

/*
    this.familiaApi.GetFamilias(this.nro).subscribe(data => {

      this.FamiliaData = data;
      console.log(this.FamiliaData);

      // Nota: ver observaciones en RECETAS-APP
      // Usando TypeORM directo los datos llegan en arreglo simple.
      // Usando Store Procedure los datos llegan en doble arreglo
      // y se debe usar: this.FamiliaData[0].
      this.dataSource = new MatTableDataSource<Familia>(this.FamiliaData);

      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 100);

    });
*/
  }

  readDataFamilies(nro: string) {
    this.familiaApi.GetFamilias(nro).subscribe(data => {

      this.FamiliaData = data;
      console.log(this.FamiliaData);

      // Nota: ver observaciones en RECETAS-APP
      // Usando TypeORM directo los datos llegan en arreglo simple.
      // Usando Store Procedure los datos llegan en doble arreglo
      // y se debe usar: this.FamiliaData[0].
      this.dataSource = new MatTableDataSource<Familia>(this.FamiliaData);

      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 100);

    });
  }

  openDialog(index: number, e: any) {
    let dialogRef = this.dialog.open(DialogokComponent, { data: {name: 'Eliminará definitivamente a ' + this.FamiliaData[index].family_name + '. Está seguro ?'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ' + result);

      if (result == "1") {
        console.log("Eliminar dato");
        this.deleteFamilia(index, e);
      } else {
        console.log("Cancelar eliminar");
      }
    });
  }

  deleteFamilia(index: number, e: { _id: any }) {
    const data = this.dataSource.data;
    data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
    this.dataSource.data = data;
    this.familiaApi.DeleteFamilia(e._id).subscribe();
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }


}
