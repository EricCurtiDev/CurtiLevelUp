import{useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([])
    const [loading, setLoading]= useState(false)
    const {categoryId}= useParams()

    /* FIREBASE */
    useEffect(()=>{
        setLoading(true)
        
        const productsCollection = categoryId
        ? query(collection(db, "productos"), where("category", "==", categoryId)) 
        : collection(db, "productos")
        
        getDocs(productsCollection)
        .then((res)=> {
            const list = res.docs.map((product)=>{
                return{
                    id: product.id,
                    ...product.data()
                }
            })
            setItems(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[categoryId])

    return(
        <div>
            <h1 className='text-center'>{greeting}</h1>
            <ItemList items={items}/>
            
        </div>
    )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired
}

export default ItemListContainer