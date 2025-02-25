import backpack from '../assets/products/backpack1.jpg'
import styled from 'styled-components'

const ShoppingCartItemBuild = styled.a`

    padding: 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid #333;

    & .productName {
        color: rgb(214, 211, 209);
        margin-left: 12px;
        font-size: 14px;
    }

    & .totalPrice {
        color: rgb(168, 162, 158);
        font-size: 14px;
    }

    & .productImg {
        width: 50px;
    }

    & .removeItemBtn {
        background: rgb(168, 162, 158);
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 10px;
    }
`

export default function ShoppingCartItem() {

    function had() {
        console.log('dasfda')
    }

    return (
        <ShoppingCartItemBuild href="#" className='flex'>
            <div className='flex flex-wrap items-center'>
                <button className='removeItemBtn' onClick={had}><i className="fa-solid fa-xmark"></i></button>
                <p className='productName'>Product Name</p>
                <span className='totalPrice'>1 x $100</span>
            </div>
            <img src={backpack} alt="" className='productImg'/>
        </ShoppingCartItemBuild>
    )
}