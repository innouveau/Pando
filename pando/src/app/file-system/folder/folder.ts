import { File } from './../file/file';

export class Folder {
    id: number;
    type: string;
    title: string;
    children: (File|Folder)[];

    constructor(folder) {
        this.id = folder.id;
        this.type = 'folder';
        this.title = folder.title;
        if (folder.children && folder.children.length > 0) {
            this.addChildren(folder.children);
        }
    }

    addChildren(children) {
        let newChild;
        for (let child of children) {
            switch(child.type) {
                case 'file':
                    newChild = new File(child);
                    break;
                case 'folder':
                    newChild = new Folder(child);
                    break;
            }
            this.addChild(newChild);
        }
    }

    addChild(child) {
        if (!this.children) {
            this.children = [];
        }
        this.children.push(child);
    }
}
