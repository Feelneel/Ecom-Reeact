import { useEffect, useState } from "react"
import Base from "./Base"

export default function Home()
{
    // fetch('https://dummyjson.com/products')
    // .then(res => res.json())
    // .then(console.log);
    // console.log(res);

    // let response = await fetch('https://dummyjson.com/products')
    // let data = response.json()
    // console.log(data);
    
    let [products,setProducts] = useState([]);
    console.log(products);

    async function fetchproduct(){ 
        let response = await fetch('https://dummyjson.com/products') 
        let data = await response.json()
        console.log(data);
        setProducts(data.products)
    }

    useEffect(()=> {
        fetchproduct()
    })
    return(
        <>
        <Base/>
        {/* <h1 className="text-center">Home Page</h1> */}
        <div className="container">
            <div className="row">
                {
                    products && products.map((products, index) => {
                        return(
                            <>
                            <div className="col-md-3 mb-3 key={products.id}">
                                <div className="card" style={{width: 15 + "rem"}}>
                                <img src={products.thumbnail} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{products.title}</h5>
                                    <p className="class-text">{products.description}</p>
                                    <p className="class-text">{products.price}</p>
                                    <a href="#" class="btn btn-primary">View More</a>
                                </div>
                                </div>
                            </div>        
                            </>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}