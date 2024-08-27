import React, { useState, useEffect } from 'react'
import './ProductPage.css'
import axios, { all } from 'axios'

const url = 'https://fakestoreapi.com/products'
const ProductPage = () => {

    const [allProductPage, setallProductPage] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        axios.get(url)
            .then(function (response) {
                console.log(response?.data)
                setallProductPage(response?.data)
                setIsLoading(false)
            })
            .catch(function (error) {
                console.log(error);
                setIsLoading(false)
            })
    }, [])
    return (
        <div className='ProductPagemain'>
            <div className='ProductPageWrap'>
                {  
                isLoading ? "Loading" :
                    allProductPage.map((i) => (
                        <div className='ProductPageCard' key={i.id}>
                            <span>
                                <img src={i.image} alt="" className='ProductPageImage' />
                            </span>
                            <span className='ProductPageTtiltePriceWrap'>
                                <p>Name: {i .title.slice(0,35)}...</p> 
                                 <p>Price: ${i.price}</p>
                            </span>
                            <button className='ProcutPageBuyButton'>buy now</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductPage