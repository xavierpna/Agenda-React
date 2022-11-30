import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const url = 'http://www.raydelto.org/agenda.php';

const AddData = () => {
  const[nombre, setNombre] = useState("");
  const[apellido, setApellido] = useState("");
  const[telefono, setTelefono] = useState("");
  const redirect = useNavigate();

  const diary = async(e)=>{
    e.preventDefault();
    await axios.post(url, {nombre:nombre, apellido:apellido,telefono:telefono});
    redirect('/');
  }
  return (
    <div className='container-fluid'>
      <div  className='row mt-3'>
        <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
          <div className='card'>
            <div className='card-header bg-dark text-white'>Añadir Contacto</div>
            <div className='card-body'>
                <form onSubmit={diary}>
                  <label>Nombre: </label>
                  <input type='text' id='nombre' maxLength='25'
                  className='form-control'
                  required={true} value={nombre} onChange={ (e) => setNombre(e.target.value)}>
                  </input>
                  <label>Apellido: </label>
                  <input type='text' id='apellido' maxLength='25'
                  className='form-control'
                  required={true} value={apellido} onChange={ (e) => setApellido(e.target.value)}>
                  </input>
                  <label>Telefono: </label>
                  <input type='text' id='telefono' maxLength='12'
                  className='form-control'
                  required={true} value={telefono} onChange={ (e) => setTelefono(e.target.value)}>
                  </input>
                  <button className='btn btn-success mt-3'>Guardar</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddData