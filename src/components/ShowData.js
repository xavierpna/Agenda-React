import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const url = 'http://www.raydelto.org/agenda.php';
const ShowData = () => {
    const [contacts, setcontacts] = useState([]);
    useEffect(() => {
      getcontacts();
    },[]);
    const getcontacts = async() => {
      const answer = await axios.get(url);
      setcontacts(answer.data);
    }
  return (
    <div className='container-fluid'>
      <div className='row mt-3'>
        <div className='col-md-4 offset-md-4'>
          <div className='d-grid mx-auto'>
            <Link to='/create' className='btn btn-dark'> Agregar Contacto</Link>
          </div>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
          <div className='table-responsive'>
            <table className='table table-bordered'>
              <thead>
                <tr><th>#</th><th>Nombres</th><th>Apellidos</th><th>Telefono</th></tr>
              </thead>
              <tbody className='table-group-divider'>
                {contacts.map( (contact, i)=> (
                  <tr key={contact.i}>
                    <td>{(i+1)}</td>
                    <td>{contact.nombre}</td>
                    <td>{contact.apellido}</td>
                    <td>{contact.telefono}</td>
                  </tr>
                ))  
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
  )
}

export default ShowData
