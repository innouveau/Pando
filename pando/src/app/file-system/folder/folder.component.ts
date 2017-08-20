import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Folder } from './folder';

@Component({
  selector: 'folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.less']
})

export class FolderComponent {

    @Input() folder: Folder;

    @Output() selectFolder: EventEmitter<Folder> = new EventEmitter<Folder>();

    onSelect(folder) {
        this.selectFolder.emit(folder);
    }
}
