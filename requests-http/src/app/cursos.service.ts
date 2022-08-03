import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './cursos/curso';
import { tap, delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private readonly apiUrl = `${environment.API_URL}/cursos`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http
      .get<Curso[]>(this.apiUrl)
      .pipe(delay(5000), tap(console.log));
  }
}