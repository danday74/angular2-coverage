import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Person} from '../models/person';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PersonService {
  private personsUrl: string = 'app/data/persons.json';

  static handleError(err: any): Observable<any> {
    let errMsg = err.message;
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  constructor(private http: Http) {
  }

  getPersons(): Observable<Person[]> {
    return this.http.get(this.personsUrl)
      .map(
        (res: Response) => {
          return res.json();
        }
      )
      .catch(PersonService.handleError);
  }

  getPerson(id: number): Observable<Person> {
    return this.getPersons()
      .map((persons) => persons.filter((person) => person.id === id)[0]);
  }

}
