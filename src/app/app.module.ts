import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponentComponent } from './input-component/input-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpComponentComponent } from './http-component/http-component.component';
import { JsonServerComponent } from './json-server/json-server.component';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import { ProductComponent } from './product/product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatTooltip } from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {FetchjsonService} from './fetchjson.service';
import { UploadFileComponent } from './upload-file/upload-file.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    InputComponentComponent,
    HttpComponentComponent,
    JsonServerComponent,
    ProductComponent,
    UpdateProductComponent,
    UploadFileComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    RouterModule.forRoot([
      {path: "", component : JsonServerComponent},
      {path : "product", component: ProductComponent},
      {path : "update/:id", component: UpdateProductComponent}
    ])
  ],
  providers: [DataService,FetchjsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
