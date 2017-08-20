// modules
import { Component, OnInit } from '@angular/core';

import { Folder } from './file-system/folder/folder';


// services
import { FileSystemService } from './services/file-system.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})



export class AppComponent implements OnInit {

    constructor(private fileSystemService: FileSystemService) { }

    root: Folder;

    ngOnInit(): void {
        this.fileSystemService.bootstrap()
            .then(bootstrap => this.root = new Folder(bootstrap[0]) );
    }

}
