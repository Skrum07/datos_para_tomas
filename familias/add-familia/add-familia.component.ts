import { Component, NgZone, OnInit, OnDestroy,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { DialogokComponent } from 'src/app/dialogok/dialogok.component';
import { FamiliasService } from '../familias.service';

@Component({
  selector: 'app-add-familia',
  templateUrl: './add-familia.component.html',
  styleUrls: ['./add-familia.component.css']
})
export class AddFamiliaComponent implements OnInit, OnDestroy {

  familiaForm!: FormGroup;

  @ViewChild('resetFamiliaForm', { static: true}) NgForm: any;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private familiaApi: FamiliasService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.controlsFamiliaForm();
  }

  /* Reactive familias form */
  controlsFamiliaForm() {
    this.familiaForm = this.fb.group({
      family_name: ['', [Validators.required]]
    });
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.familiaForm.controls[controlName].hasError(errorName);
  }

  openDialog() {
    if (this.familiaForm.valid) {
      let dialogRef = this.dialog.open(DialogokComponent, { data: { name: 'Usuario. Grabará los datos ingresados. Está seguro ?' } });
      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog result: ' + result);

        if (result === "1") {
          console.log("Acepta grabar datos");
          this.submitFamiliaForm();
        }
        else {
          console.log("Cancelar grabacion");
        }

      });
    }
  }


  submitFamiliaForm() {
    if (this.familiaForm.valid) {
      this.familiaApi.AddFamilia(this.familiaForm.value).subscribe( () => {
        this.ngZone.run(() => this.router.navigateByUrl('/familias-list')).then();
        // this.ngZone.run(() => this.router.navigateByUrl('/familias-list'));
      });
    }
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

}
