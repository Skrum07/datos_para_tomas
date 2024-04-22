import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddFamiliaComponent } from "./add-familia/add-familia.component";
import { EditFamiliaComponent } from './edit-familia/edit-familia.component';
import { FamiliasListComponent } from './familias-list/familias-list.component';

const routes: Routes = [
    { path: 'add-familia', component: AddFamiliaComponent },
    { path: 'edit-familia', component: EditFamiliaComponent },
    { path: 'familias-list/:nro', component: FamiliasListComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class FamiliasRoutingModule {}
