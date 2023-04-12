import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showModal: boolean = false;
  public publicaciones: any[] = [];
  public form: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private publicacionesService: PublicacionesService) {
  }

  ngOnInit(): void {
    this.setForm();
    this.getPublicaciones()

  }

  public setForm() {
    this.form = this.formBuilder.group({
      texto: ['', Validators.required],
    });
  }
  public posts = [{ avatar: "avatar", username: "Carlos", image: "imagen", timestamp: "17/03/2023", likes: 5, shares: 20, content: "Texto de un post" }]

  public getPublicaciones(){
    this.publicacionesService.getPublicaciones().subscribe(
      (publicacion: any) => {
        this.publicaciones =[];
        publicacion.forEach((x: any) => {
          this.publicaciones.push(x)
        });
      },
      error => {
        console.error('Error al obtener las publicaciones', error);
      }
    );
  }

  public postPublicacion() {
    this.showModal = false
    const date = new Date();
    this.publicacionesService.postPublicaciones({
      _fecha: date,
      _idRespuesta: null,
      _idUser: "643575b37470bc3a42aaa6ec",
      _nombre: "Administrador",
      _texto: this.form.controls?.['texto']?.value ?? "prueba"
    } as any).subscribe((data: any) => {
      this.form.controls?.['texto']?.setValue('')
      this.getPublicaciones()
    });
  }

}
