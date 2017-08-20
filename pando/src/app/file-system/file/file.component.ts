import { Component, Input, Output, EventEmitter } from '@angular/core';

import { File } from './file';

@Component({
  selector: 'file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.less']
})

export class FileComponent {

    @Input() file: File;

    @Output() selectFile: EventEmitter<File> = new EventEmitter<File>();

    onSelect(file) {
        this.selectFile.emit(file);
    }
}
