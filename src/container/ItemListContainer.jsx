import React from "react";
import products from "../data/products.json"
import Container from 'react-bootstrap/Container'; 
import { ItemList } from "../components/ItemList";
import { useState, useEffect } from "react";

export const ItemListContainer = ({greeting}) =>{
    const [list, setList] = useState([])

    useEffect(() => {
        const productList = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            },2000)
        })
        productList.then(result => setList(result))

    },[])

    return(
        <Container className="mt-4">
            <h2>
                {greeting}
            </h2>
            <ItemList list={list}/>
        </Container>
    );
};