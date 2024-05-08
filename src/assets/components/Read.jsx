import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './read.css'
// import Update from './assets/components/Update'
const Read = () => {
    const [data, setData] = useState([]);
    const [tableDark, setTableDark] = useState([]);
 const setToLocalStorage = (id,name,email)=>{
    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
 }
    function handleDelete(id){
    axios.delete(`https://663a0a051ae792804bedcb56.mockapi.io/create/${id}`

    ).then(()=>{
        getData();
    })
   }
    function getData() {
        axios.get("https://663a0a051ae792804bedcb56.mockapi.io/create")
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="form-check form-switch table-div">
                <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={()=>{
    if (tableDark==="table-dark"){
        setTableDark("");
    }
    else{
        setTableDark("table-dark")
    }
  }}
  role="switch" id="flexSwitchCheckDefault"/>
</div>
            <table className={`table ${tableDark}`}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th></th>
                        <th><Link to='/'><h2 className='mx-2 create'><span id='c'>C</span>reate</h2></Link></th>
                    </tr>
                </thead>
                {
                    data.map((eachData) => {
                        return (
                            <>
                                <tbody className="table-group-divider">
                                    <tr>
                                        <th scope="row">{eachData.id}</th>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>
                                        <td><Link to="/update"><button className='bg-success'onClick={()=>setToLocalStorage(eachData.id,eachData.name,eachData.email)}>Edit</button></Link></td>
                                        <td><button className='bg-danger'onClick={()=>
                                            handleDelete(eachData.id)}>Delete</button></td>
                                    </tr>

                                </tbody>
                            </>
                        )
                    })
                }

            </table>
        </div>
    )
}

export default Read
