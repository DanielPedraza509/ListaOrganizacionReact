import MiOrg from './componentes/MiOrg';
import { useState } from 'react';
import Header from './componentes/Header/Header';
import Equipo from './componentes/Equipo';
import Formulario from './componentes/Formulario/Formulario';
import Footer from './componentes/Footer';


function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([{
  equipo: "Front End",
  foto: "https://github.com/DanielPedraza509.png",
  nombre: "Daniel Pedraza ",
  puesto: "Ingeniero Electrónico",
  }])
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

  //Lista de Equipos 
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278 ",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
]
  return (
    <div >
      <Header/> {/* Llamar el componente */}
      {/* {mostrarFormulario === true ? <Formulario/> : <div></div>} */}
      {
        mostrarFormulario && <Formulario 
          equipos = {equipos.map((equipos) => equipos.titulo)}
          registrarColaborador = {registrarColaborador}
        />
      }  {/*(1)*/}
      <MiOrg cambiarMostrar = {cambiarMostrar}/> 

      {
        equipos.map( (equipo) => <Equipo 
          datos = {equipo} 
          key = {equipo.titulo}
          colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          />
          )
      }
      <Footer/>
    </div>
  );
}

export default App;
