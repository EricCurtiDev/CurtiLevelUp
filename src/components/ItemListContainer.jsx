import{useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { getProducts } from '../mock/api'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([])
    const {categoryId}= useParams()
    useEffect(()=>{
        getProducts()
        .then((res)=>{
            if(categoryId){
                setItems(res.filter((producto) => producto.category === categoryId))
            }else{
                setItems(res)
            }
        })
        .catch((error)=> console.log(error))
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