import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './cursos/curso';
import { tap, delay, take } from 'rxjs/operators';
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
      .pipe(delay(0), tap(console.log));
  }

  loadById(id: number){
    return this.http.get<Curso>(`${this.apiUrl}/${id}`).pipe(take(1))
  }

  private create(curso: Curso) {
    return this.http.post<Curso>(this.apiUrl, curso).pipe(
      take(1)
    )
  }

  private update(curso: Curso) {
    return this.http.put<Curso>(`${this.apiUrl}/${curso.id}`, curso).pipe(take(1))
  }

  save(curso: Curso) {
    if (curso.id) {
      return this.update(curso);
    }
    return this.create(curso)
  }

  remove(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(take(1))
  }
}
