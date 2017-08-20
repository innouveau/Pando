// modules
import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

// components to declare
import { FileSystemComponent } from './file-system.component';
import { FolderComponent } from './folder/folder.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FileSystemComponent,
        FolderComponent
    ],
    providers: [],
    exports: [FileSystemComponent]
})

export class FileSystemModule { }
