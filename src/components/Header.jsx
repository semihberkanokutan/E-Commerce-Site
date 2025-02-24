import logo from '../assets/logo.png'
import magGlassIcon from '../assets/magnifying-glass.png'
import ShoppingCart from './ShoppingCart'

export default function Header() {
    return (
        <header className='py-5 bg-stone-800'>
            <div className='my-container'>
                <div className='flex justify-between items-center'>
                    <a href="" className='text-stone-200'>MYSTORE</a>
                    <div className='flex gap-8 items-cente'>
                        <a href="" className='text-stone-400'>My Account</a>
                        <form>
                            <div className='relative flex border-2 gap-3 justify-center items-center bg-stone-200 w-[260px]'>
                                <i class="fa-solid fa-magnifying-glass absolute left-1"></i>
                                <input type="text" placeholder='Search products...' className='w-full ps-8 bg-stone-200 py-2'/> 
                            </div>
                        </form>
                    </div>
                </div>

                <div className='mt-10 flex justify-between'>
                    <nav className='flex gap-5 text-stone-300'>
                        <a href="">Home</a>
                        <a href="">Shop</a>
                        <a href="">Reviews</a>
                    </nav>
                    <ShoppingCart />
                </div>
            </div>
        </header>
    )
}