import backpack from '../assets/products/backpack1.jpg'

export default function ShoppingCartItem() {
    return (
        <a href="#" className='flex'>
            <div>
                <p>Product Name</p>
                <span>1 x $100</span>
            </div>
            <img src={backpack} alt="" className='w-[50px]'/>
        </a>
    )
}