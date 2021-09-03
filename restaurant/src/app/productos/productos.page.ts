import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  private productos =[
    {
      id :'1',
      titulo : 'cazuela',
      imagenURL:'https://www.comidastipicaschilenas.com/wp-content/uploads/2020/07/Receta-de-cazuela-de-osobuco.jpg',
      comentarios :['rica cazuela','especial para el frio']
    }
    ,
    {
      id :'2',
      titulo : 'empanadas',
      imagenURL:'https://www.midiariodecocina.com/wp-content/uploads/2015/07/Empanadas-de-mariscos01.jpg',
      comentarios :['rica empanada','endiesiochao']
    }
    ,
    {
      id :'3',
      titulo : 'Churrasco',
      imagenURL:'https://recetasdesopaipillas.com/wp-content/uploads/2020/11/Receta-de-churrasco-italiano.jpg',
      comentarios :['rico churrasco','MMMMMMMMMMMMMMMMMMmmmmmmmmmmmmmmmmmmm........... que rico']
    }
    ,
    {
      id :'4',
      titulo : 'Pantrucas',
      imagenURL:'https://www.midiariodecocina.com/wp-content/uploads/2016/05/Pantrucas01-320x180.jpg',
      comentarios :['ricas pantrucas','MMMMMMMMMMMMMMMMMMmmmmmmmmmmmmmmmmmmm........... que rico']
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
