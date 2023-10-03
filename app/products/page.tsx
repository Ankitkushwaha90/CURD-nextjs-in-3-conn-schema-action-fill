// 'use client'
// import React, {useState, useEffect} from 'react'
// import Image from './../../node_modules/next/image'
import './style.css'
// import styles from './style.module.css'

// import axios from 'axios'


// function App() {
//     const [image, setImages] = useState([]);

//     useEffect(() => {
//         const apiRoot = "https://api.unplash.com";

//         axios
//             .get(`${apiRoot}/photos/random?client_id=ituLBCK0zQCPViyvAe4_IaRcQ62xMQPkltXo632OI4U&count=25`)
//             .then(res => console.log(res.data));
//     })
// }
async function produtsDeals() {
    const res = await fetch(`https://api.unsplash.com/photos?client_id=${process.env.API_KEY}`)
    // .then(res => console.log(res.json))
    return await res.json();
}

console.log(produtsDeals());





const products = async ({ Component, pageProps }) => {
    const todosdata = await produtsDeals();
    console.log(produtsDeals());
    return (
        <>
            <div className="container">
                <div className="row">
                    

                        {todosdata &&
                        Array.isArray(todosdata) &&
                        todosdata.map((todo: any) =>(
                        <div className='col-lg-3 col-md-6 col-sm-12 p-3'  key={todo.id}>
                            
                            <div  className='card cardstyle'  >
                            <img
                                    className="card-img-top"
                                    src={todo.urls.raw}
                                    alt="Picture of the author"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text"></p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                            
                        </div>
                              
                        ))} 
                </div>
            </div>
            <h1>hello products</h1>

            {/* <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card" width={18rem}>
                            <Image
                                    className="card-img-top"
                                    src="/profile.png"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                    />

                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">{todo.description}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </div> */}
            {/* {todosdata &&
             Array.isArray(todosdata) &&
             todosdata.map((todo: any) =>(
               
                    <div className="col-lg-3 col-md-6 col-sm-12" key={todo.id}>
                    <h4>{todo.description}</h4>                    
                    <img src={todo.urls.raw} className="d-block w-100" alt={todo.alt_description}/>
                    
                </div>
             ))} */}

        </>
    )
}

export default products;