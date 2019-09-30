import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

const MaterialComponent=[MatCheckboxModule,MatIconModule,MatTableModule,MatProgressSpinnerModule,MatPaginatorModule,MatFormFieldModule,MatCardModule,MatGridListModule,MatInputModule,MatButtonModule,MatSortModule,MatSlideToggleModule];
@NgModule(
  {
    imports:[MaterialComponent],
    exports:[MaterialComponent]
  }
)
export class MaterialComponentModule { }
