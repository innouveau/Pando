export class File {
    id: number;
    type: string;
    title: string;
    //children: Page[];

    constructor(file) {
        this.id = file.id;
        this.type = 'file';
        this.title = file.title;
    }
}
