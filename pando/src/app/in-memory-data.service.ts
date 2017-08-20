import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const addFile = Math.round(Math.random() * 1000);

        const addFolder = Math.round(Math.random() * 1000);

        const bootstrap = [
            {
                id: 0,
                type: 'folder',
                title: 'Root',
                children: [
                    {
                        id: 0,
                        type: 'folder',
                        title: 'My project 01',
                        children: [
                            {
                                id: 2,
                                type: 'folder',
                                title: 'Sub Project A'
                            }, {
                                id: 3,
                                type: 'folder',
                                title: 'Sub Project B'
                            }
                        ]
                    },
                    {
                        id: 1,
                        type: 'folder',
                        title: 'My project 02',
                        children: [
                            {
                                id: 4,
                                type: 'folder',
                                title: 'Sub Project X'
                            }, {
                                id: 5,
                                type: 'folder',
                                title: 'Sub Project Y',
                                children: [
                                    {
                                        id: 7,
                                        type: 'file',
                                        title: 'Photos 2017'
                                    }, {
                                        id: 8,
                                        type: 'file',
                                        title: 'Photos 2018'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 6,
                        type: 'file',
                        title: 'Untitled document'
                    }
                ]
            }
        ];
        return {addFile, addFolder, bootstrap};
    }
}
