import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            {id: 1, name: 'Sven'},
            {id: 2, name: 'Juggernaut'},
            {id: 3, name: 'Windranger'},
            {id: 4, name: 'Bloodseeker'},
            {id: 5, name: 'Shadow Demon'},
            {id: 6, name: 'Enchantress'},
            {id: 7, name: 'Crystal Maiden'},
            {id: 8, name: 'Sand King'},
            {id: 9, name: 'Night Stalker'},
            {id: 10, name: 'Wisp'},
        ];

        return {heroes};
    }
}