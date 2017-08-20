// modules
import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

// components to declare
import { FileSystemComponent } from './file-system.component';
import { FolderComponent } from './folder/folder.component';
import { FileComponent } from './file/file.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FileSystemComponent,
        FolderComponent,
        FileComponent
    ],
    providers: [],
    exports: [FileSystemComponent]
})

export class FileSystemModule { }
