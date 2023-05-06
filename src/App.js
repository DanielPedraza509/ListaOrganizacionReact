import MiOrg from './componentes/MiOrg';
import { useState } from 'react';
import {v4 as uuid} from "uuid"
import Header from './componentes/Header/Header';
import Equipo from './componentes/Equipo';
import Formulario from './componentes/Formulario/Formulario';
import Footer from './componentes/Footer';


function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/DanielPedraza509.png",
    nombre: "Daniel Pedraza ",
    puesto: "Ingeniero Electrónico",
    fav: true
    }])
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278 ",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
])
  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra (1)

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario) 
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo Colaborador ", colaborador);
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar Colaborador 
  const elimiarColaborador = (id) =>{
    console.log("Eliminar Colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color Equipo 
  const actualizarColor = (color, id) =>{
    console.log("Actualizar: ",color, id);
    const equiposActualizados = equipos.map((equipo) =>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear Equipo 
  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid() }])
  }
 
  const like = (id) =>{
    console.log("Like ",id);
    const colaboradoresActualizados = colaboradores.map( (colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }
  return (
    <div >
      <Header/> {/* Llamar el componente */}
      {/* {mostrarFormulario === true ? <Formulario/> : <div></div>} */}
      {
        mostrarFormulario && <Formulario 
          equipos = {equipos.map((equipos) => equipos.titulo)}
          registrarColaborador = {registrarColaborador}
          crearEquipo = {crearEquipo}
        />
      }  {/*(1)*/}
      <MiOrg cambiarMostrar = {cambiarMostrar}/> 

      {
        equipos.map( (equipo) => <Equipo 
          datos = {equipo} 
          key = {equipo.titulo}
          colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador = {elimiarColaborador}
          actualizarColor = {actualizarColor}
          like = {like}
          />
          )
      }
      <Footer/>
    </div>
  );
}

export default App;
