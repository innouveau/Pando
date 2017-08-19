import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
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
                                title: 'Sub Project Y'
                            }
                        ]
                    },
                    {
                        id: 6,
                        type: 'folder',
                        title: 'My project 03',
                        children: []
                    }
                ]
            }
        ];
        return {bootstrap};
    }
}
