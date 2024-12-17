import React, { useEffect, useState } from 'react';
import { getOneProduct } from '../mock/api';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'
import { db } from '../services/firebase';
import { collection, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [producto, setProducto]= useState({})
    const {id} = useParams()
    const [loading, setLoading]= useState(false)

    //FIREBASE

    useEffect(()=>{
        setLoading(true)
        //collection y proyect Firebase
        const collectionProd = collection(db, "productos")
        //creamos una referencia
        const docRef = doc(collectionProd, id)
        //traer el doc
        getDoc(docRef)
        .then((res)=> setProducto({id: res.id, ...res.data()}))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[])
    /* useEffect(()=>{
        getOneProduct(id)
        .then((res)=> setProducto(res))
        .catch((error)=> console.log(error))
    },[id])
    console.log(producto) */
    return(
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer