// modules
import { Component, OnInit } from '@angular/core';

import { Folder } from './file-system/folder/folder';

// services
import { FileSystemService } from './file-system/services/file-system.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})



export class AppComponent implements OnInit  {

    constructor(private fileSystemService: FileSystemService) { }

    currentFolder: Folder;
    history: Folder[] = [];
    currentFrame: number = 0;

    selectFolder(folder) {
        if (this.history.length - 1 > this.currentFrame) {
            this.history = this.history.slice(0, this.currentFrame + 1)
        }
        this.history.push(folder);
        this.currentFrame = this.history.length - 1;
        this.currentFolder = folder;
    }

    back() {
        if (this.currentFrame > 0) {
            this.currentFrame--;
            this.currentFolder = this.history[this.currentFrame];
        }
    }

    forward() {
        if (this.currentFrame < (this.history.length - 1)) {
            this.currentFrame++;
            this.currentFolder = this.history[this.currentFrame];
        }
    }

    ngOnInit(): void {
        this.fileSystemService.bootstrap()
            .then(bootstrap => this.selectFolder(bootstrap[0]));
    }
}
