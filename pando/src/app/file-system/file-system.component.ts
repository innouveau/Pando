// modules
import { Component, Input } from '@angular/core';

import { File } from './file/file';
import { Folder } from './folder/folder';

// services
import { FileSystemService } from './../services/file-system.service';

@Component({
    selector: 'file-system',
    templateUrl: './file-system.component.html',
    styleUrls: ['./file-system.component.less']
})



export class FileSystemComponent {

    constructor(private fileSystemService: FileSystemService) { }

    currentFolder: Folder;
    history: Folder[] = [];
    currentFrame: number = 0;

    // initial passing of root sets root as first currentFolder
    @Input() set root(root: Folder) {
        if (root) {
            this.selectFolder(root);
        }
    }

    addFile() {
        let data = {id: 0, title: 'Untitled document'},
            file;
        this.fileSystemService.addFile(data)
            .then(
            (id) => {
                data.id = id;
                file = new File(data);
                this.currentFolder.addChild(file);
            })
    }

    addFolder() {
        let data = {id: null, title: 'Untitled document'},
            folder;
        this.fileSystemService.addFolder(data)
            .then(
            (id) => {
                data.id = id;
                folder = new Folder(data);
                this.currentFolder.addChild(folder);
            })
    }

    selectFile(file) {
        console.log('selected ' + file.title);
    }

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
}
