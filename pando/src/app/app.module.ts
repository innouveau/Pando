// modules
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpModule }       from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FileSystemModule } from './file-system/file-system.module';

// components to declare
import { AppComponent } from './app.component';

// services
import { FileSystemService } from './services/file-system.service';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FileSystemModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations: [
        AppComponent
    ],
    providers: [FileSystemService],
    bootstrap: [AppComponent]
})

export class AppModule { }
