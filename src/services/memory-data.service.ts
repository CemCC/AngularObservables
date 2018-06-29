import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const Selections = [
      {  select: 'Number1' },
      {  select: 'Number2' },
      {  select: 'Number3' }
    ];
    return Selections;
  }
}