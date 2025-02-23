import logo from '../assets/logo.png'
import magGlassIcon from '../assets/magnifying-glass.png'

export default function Header() {
    return (
        <header className='py-5 bg-stone-800'>
            <div className='max-w-7xl m-auto flex justify-between items-center'>
                <a href="" className='text-stone-200'>MYSTORE</a>
                <div className='flex gap-8'>
                    <a href="" className='text-stone-400'>My Account</a>
                    <form>
                        <div className='relative flex border-2 gap-3 justify-center items-center'>
                            <img src={magGlassIcon} alt="" className='w-5 h-5 absolute left-1'/>
                            <input type="text" placeholder='Search products...' className='ps-8'/> 
                        </div>
                    </form>
                </div>
            </div>
        </header>
    )
}