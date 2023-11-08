class Libro {

constructor(titulo, autor, genero, leido = false){
    this.titulo=titulo
    this.autor=autor
    this.genero=genero
    this.leido=leido
}

marcarComoLeido(){
    this.leido=true
    console.log("Este libro ha sido leido")
}

marcarComoNoLeido(){
    this.leido=false 
    console.log("Este libro no ha sido leido")
}

informacion(){
    console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}, Genero: ${this.genero}, Leido:${this.leido ? "Si":"No"}`)
}


}

const libro1 = new Libro("Habitos atomicos", "John Clear", "Autoayuda");
const libro2 = new Libro("El club de las 5 de la mañana", "Robin Sharma", "Autoayuda");
const libro3 = new Libro("Psicologia oscura", "Steven Turner", "Autoayuda");
const libro4 = new Libro("La sombra", "John Katzenbach", "Misterio");
const libro5 = new Libro("La biblia de los caidos", "Fernando Trujillo", "Ficción paranormal");
const libro6 = new Libro("Cien años de soledad", "Gabriel Garcia Marquez", "Novela");

libro1.marcarComoLeido();
libro1.informacion();

libro2.marcarComoLeido();
libro2.informacion();

libro3.marcarComoLeido();
libro3.informacion();

libro4.marcarComoLeido();
libro4.informacion();

libro5.marcarComoLeido();
libro5.informacion();

libro6.marcarComoNoLeido();
libro6.informacion();