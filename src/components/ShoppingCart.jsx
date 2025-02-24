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
            <a href="#" className="relative inline-block pb-6" onMouseEnter={showCart} onMouseLeave={hideCart}>
                <div className="w-[260px] flex justify-between items-center">
                    <div className="flex gap-3">
                        <p className="text-stone-200">$0.00</p>
                        <span className="text-stone-400">0 items</span>
                    </div>
                    <i class="fa-solid fa-basket-shopping text-stone-100"></i>
                </div>
                    {/*
                    <div className="absolute bg-stone-900 w-full top-[42px]">
                        <p className="text-stone-400 text-center">No products in the cart.</p>
                    </div>*/}
                <div className={`absolute bg-stone-900 w-full origin-top top-[48px] ${isHovered ? 'block' : 'hidden'}`}>
                    <ShoppingCartItem/>
                </div>
                
                
                 
            </a>
        </> 
    )
}