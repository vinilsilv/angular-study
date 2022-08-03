import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/cursos.service';
import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true,
})
export class CursosListaComponent implements OnInit {
  cursos!: Curso[];

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursosService.list().subscribe({
      next: (res) => {
        this.cursos = res,
        console.log(this.cursos)
      },
    });
  }
}
