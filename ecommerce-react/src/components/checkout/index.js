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
        nroTarjeta: '',
        ccv: '',
        validDate: '',
        retira: ''
    })

    const handleChangeInput = (e) => {
        setFormData ({...formData, [e.target.name]: e.target.value })
    } 

    const CargaDB = () => {
        db.collection('ventas')
		.add({
			nombre: formData.nombre,
            apellido: formData.apellido,
			email: formData.email,
			telefono: formData.telefono,
            nroTarjeta: formData.nroTarjeta,
            ccv: formData.ccv,
            validDate: formData.validDate,
            retira: formData.retira,
			total: data.precioTotal,
			cantidad: data.cantidadTotal,
			items: data.items,
		})
		.then((docRef) =>{
			console.log('Compra registrada con el ID: ', docRef.id)  
            limpiar(docRef.id)
		})
		.catch((error)=>{
			console.error("Error al registrar compra: ", error)
		})
    }
    const limpiar = (ID) => {
        let obj = data
        obj.items = []
        obj.cantidadTotal = 0
        obj.precioTotal = 0
        setData(obj)
        
        // Uso SPREAD operator para cerrar el pop up del carrito
        setData({...data, ['showPopUp']: true })
        const path = "/CheckOut/track/" + ID
		history.push(path);
    }

    const setStorage = () => {
        const obj = {
            nombre: formData.nombre,
            apellido: formData.apellido,
            email: formData.email,
            telefono: formData.telefono,
            nroTarjeta: '',
            ccv: '',
            validDate: '',
            retira: ''
        }
        let registroJSON = JSON.stringify(obj);
        localStorage.setItem('registroJSON', registroJSON);
    }

    const finalizar = () => {
        let pasa = verifica()
        if (pasa.pas) {
            if ((formData.email.includes('@')) && (formData.email.includes('.com')) && (data.items.length !== 0)) {
                console.log('data enviada')
                console.table(formData)
                console.table(data)
                setStorage()
                CargaDB()
            } else {
                console.error('verificar data')
            }
        } else {
            pasa.vacios.forEach(vacio => console.error(`${vacio}: ${formData[vacio]}`))
        }
    }

    const verifica = () =>{
        let valida = {pas:true, vacios:[]}
        for (const property in formData) {
            if (formData[property] === '') {
                valida.pas = false
                valida.vacios.push(property)
            }
        }
        return valida
    }

    useEffect(() => {
        if (localStorage.getItem("registroJSON") !== null) {
            setFormData(JSON.parse(localStorage.getItem("registroJSON")));
        }
      }, []);

    return(
        <div className="lg:mx-8 lg:my-4 xl:mx-8 xl:my-4 w-full text-center">
            {
                localStorage.getItem("registroJSON") === null ? <>
                    <div>
                        <h1>Realizar compra</h1>
                        <p>Deberas registrarte para realizar tu compra</p>
                    </div>
                    <div className="w-full grid sm:grid-cols-1 lg:grid-cols-6 gap-4">
                        <form className="lg:col-start-3 lg:col-span-5">
                            <div className="border-2 mt-2 sm:w-full md:w-full lg:w-full xl:w-1/2">
                                <label>
                                Name:
                                    <input type="text" value={FormData.nombre} onChange={handleChangeInput} name="nombre" />
                                </label>
                            </div>
                            <div className="border-2 mt-2 sm:w-full md:w-full lg:w-full xl:w-1/2">
                                <label>
                                Lastname:
                                    <input type="text" value={FormData.apellido} onChange={handleChangeInput} name="apellido" />
                                </label>
                            </div>
                            <div className="border-2 mt-2 sm:w-full md:w-full lg:w-full xl:w-1/2">
                                <label>
                                Correo:
                                    <input type="text" value={FormData.email} onChange={handleChangeInput} name="email" />
                                </label>
                            </div>
                            <div className="border-2 mt-2 sm:w-full md:w-full lg:w-full xl:w-1/2">
                                <label>
                                Telefono:
                                    <input className="w-full" type="text" value={FormData.telefono} onChange={handleChangeInput} name="telefono" />
                                </label>
                            </div>
                        </form>
                    </div>
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
            <div className="w-full grid sm:grid-cols-1 lg:grid-cols-6 gap-4">
                <form className="lg:col-start-3 lg:col-span-5">
                    <div className="border-2 mt-2 sm:w-full md:w-full lg:w-full xl:w-1/2">
                        <label>
                        Numero de tarjeta:
                            <input className="w-full" type="text" value={FormData.nroTarjeta} onChange={handleChangeInput} name="nroTarjeta" />
                        </label>
                    </div>
                    <div className="border-2 mt-2 sm:w-full md:w-full lg:w-full xl:w-1/2">
                        <label>
                        fecha de vencimiento:
                            <input className="w-full" type="text" value={FormData.validDate} onChange={handleChangeInput} name="validDate" />
                        </label>
                    </div>
                    <div className="border-2 mt-2 sm:w-full md:w-full lg:w-full xl:w-1/2">
                        <label>
                        ccv (codigo de seguridad):
                            <input className="w-full" type="text" value={FormData.ccv} onChange={handleChangeInput} name="ccv" />
                        </label>
                    </div>
                    <div className="border-2 mt-2 sm:w-full md:w-full lg:w-full xl:w-1/2">
                        <label>
                        retira:
                            <input className="w-full" type="text"  value={FormData.retira} onChange={handleChangeInput} name="retira" />
                        </label>
                    </div>
                </form>
            </div>
            <button className="mt-2 py-1 px-3 border rounded" onClick={finalizar} >Realizar pedido</button>
        </div>
    );
}

export default CheckOut