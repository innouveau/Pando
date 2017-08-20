import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { File } from './../file-system/file/file';
import { Folder } from './../file-system/folder/folder';

@Injectable()

export class FileSystemService {

    private apiUrl = 'api/';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    bootstrap(): Promise<Folder[]> {
        return this.http.get(this.apiUrl + 'bootstrap')
            .toPromise()
            .then(response => response.json().data as Folder[])
            .catch(this.handleError);
    }

    addFile(file): Promise<number> {
        return this.http.get(this.apiUrl + 'addFile')
            .toPromise()
            .then(response => response.json().data as number)
            .catch(this.handleError);
    }

    addFolder(folder): Promise<number> {
        return this.http.get(this.apiUrl + 'addFolder')
            .toPromise()
            .then(response => response.json().data as number)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
