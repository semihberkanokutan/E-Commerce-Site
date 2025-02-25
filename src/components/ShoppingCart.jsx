import { useState } from "react"
import styled from "styled-components"
import ShoppingCartItem from "./ShoppingCartItem"

const ShoppingCartBuild = styled.a ``

export default function ShoppingCart() {
    const [isHovered, setIsHovered] = useState(false)

    function showCart() {
        setIsHovered(true)
    }

    function hideCart() {
        setIsHovered(false)
    } 

    return (
        <> 
            <div className="relative inline-block py-6 cursor-pointer" onMouseEnter={showCart} onMouseLeave={hideCart}>
                <div className="w-[260px] flex justify-between items-center">
                    <div className="flex gap-3">
                        <p className="text-stone-200">$0.00</p>
                        <span className="text-stone-400">0 items</span>
                    </div>
                    <i className="fa-solid fa-basket-shopping text-stone-100"></i>
                </div>
                    {/*
                    <div className="absolute bg-stone-900 w-full top-[42px]">
                        <p className="text-stone-400 text-center">No products in the cart.</p>
                    </div>*/}
                <div className={`absolute bg-stone-900 w-full origin-top top-[72px] ${isHovered ? 'block' : 'hidden'}`}>
                    <ShoppingCartItem/>
                    <ShoppingCartItem/>
                </div>
                
                
                 
            </div>
        </> 
    )
}