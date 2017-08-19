// modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// components
import { AppComponent } from './app.component';
import { FolderComponent } from './file-system/folder/folder.component';

// services
import { FileSystemService } from './file-system/services/file-system.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations: [
        AppComponent,
        FolderComponent
    ],
    providers: [FileSystemService],
    bootstrap: [AppComponent]
})

export class AppModule { }
