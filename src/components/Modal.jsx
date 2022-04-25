import React from "react";
import ProductPage from "../pages/ProductPage";
import './modal.css'
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