import React from "react";
import Product from "./Product";
import './modal.css'
import ProductPage from "./ProductPage";

export const Modal = ({active, setActive, children}) => {
    return (
   <div className={active? 'modal active': 'modal'} onClick={() => setActive(false)}>
       <div className='modal-content' onClick={event => event.stopPropagation()}>
           {children}
           <ProductPage/>
       </div>

   </div>
    )

}