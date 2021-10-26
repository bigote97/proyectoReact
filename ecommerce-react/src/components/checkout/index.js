// Data
import { getFirestore } from "../../data"
// React
import React from "react"
import { useState, useContext, useEffect } from "react"
import {  useHistory } from "react-router-dom";
import { Store } from "../../store";

const CheckOut = () => {
	let history = useHistory();
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [formData, setFormData] = useState ({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
    })

    const handleChangeInput = (e) => {
        setFormData ({...formData, [e.target.name]: e.target.value })
    } 

    const CargaDB = () => {
        db.collection('ventas')
		.add({
			usuario: formData.nombre + formData.apellido,
			email: formData.email,
			telefono: formData.telefono,
			total: data.precioTotal,
			cantidad: data.cantidadTotal,
			items: data.items,
		})
		.then((docRef) =>{
			console.log('Compra registrada con el ID: ', docRef.id)
            
            limpiar()
		})
		.catch((error)=>{
			console.error("Error al registrar compra: ", error)
		})
    }
    const limpiar = () => {
        let obj = data
        obj.items = []
        obj.cantidadTotal = 0
        obj.precioTotal = 0
        setData(obj)
		history.push("/");
    }

    const setStorage = () => {
        let registroJSON = JSON.stringify(formData);
        localStorage.setItem('registroJSON', registroJSON);
    }

    const finalizar = () => {
        if ((formData.email.includes('@')) && (formData.email.includes('.com')) && (data.items.length !== 0)) {
            console.log('data enviada')
            console.table(formData)
            console.table(data)
            setStorage()
            CargaDB()
        } else {
            console.error('verificar data')
        }
    }

    useEffect(() => {
        if (localStorage.getItem("registroJSON") !== null) {
            setFormData(JSON.parse(localStorage.getItem("registroJSON")));
        }
      }, []);

    return(
        <div className="mx-8 my-4">
            {
                localStorage.getItem("registroJSON") === null ? <>
                    <div>
                        <h1>Realizar compra</h1>
                        <p>Deberas registrarte para realizar tu compra</p>
                    </div>
                    <form>
                        <div className="border-2 mt-2 w-1/4">
                            <label>
                            Name:
                                <input type="text" value={FormData.nombre} onChange={handleChangeInput} name="nombre" />
                            </label>
                        </div>
                        <div className="border-2 mt-2 w-1/4">
                            <label>
                            Lastname:
                                <input type="text" value={FormData.apellido} onChange={handleChangeInput} name="apellido" />
                            </label>
                        </div>
                        <div className="border-2 mt-2 w-1/4">
                            <label>
                            Correo:
                                <input type="text" value={FormData.email} onChange={handleChangeInput} name="email" />
                            </label>
                        </div>
                        <div className="border-2 mt-2 w-1/4">
                            <label>
                            Telefono:
                                <input type="text" value={FormData.telefono} onChange={handleChangeInput} name="telefono" />
                            </label>
                        </div>
                    </form>
                </> : <>
                    <div>
                        <p>Anteriormente compraste con este nombre.</p>
                        <p> ¿Quieres seguir comprando con el mismo usuario?</p>
                        <p> Nombre: {formData.nombre}  {formData.apellido} </p>
                        <p> Correo: {formData.email} </p>
                        <p> Telefono: {formData.telefono} </p>
                    </div>
                </>
            }
            
            <button className="mt-2 py-1 px-3 border rounded" onClick={finalizar} >Realizar pedido</button>
        </div>
    );
}

export default CheckOut