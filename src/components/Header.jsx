import logo from '../assets/logo.png'
import magGlassIcon from '../assets/magnifying-glass.png'
import ShoppingCart from './ShoppingCart'
import styled from 'styled-components'

const HeaderBuild = styled.header`
    background: rgb(41, 37, 36);
    padding-top: 1.25rem;

    & .header-top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & .logo-nav {
            color: rgb(231, 229, 228);
            font-size: 2rem;
            font-weight: bold;

            &:hover {
                color: #fff;
            }

        }

        & > div {
            display: flex;
            gap: 2rem;
            align-items: center;

            & a {
                color: rgb(168, 162, 158);
            }
        }

        & form div {
                position: relative;
                display: flex;
                border-width: 2px;
                gap: 0.75rem;
                justify-content: center;
                align-items: center;
                background: rgb(231, 229, 228);
                width: 260px;

                & i {
                    position: absolute;
                    left: 0.25rem;
                }

                & input {
                    width: 100%;
                    padding-left: 2rem;
                    padding-right: 1.2rem;
                    background: rgb(231, 229, 228);
                    padding-top: 0.5rem;
                    padding-bottom: 0.5rem;

                    outline: none;
                }
        }
    }

    & .header-bottom {
        margin-top: 2.5rem;
        display: flex;
        justify-content: space-between;

        & nav {
            display: flex;
            gap: 1.25rem;
            color: rgb(214, 211, 209);
            align-items: center;
        }
    }

`

export default function Header() {
    return (
        <HeaderBuild>
            <div className='my-container'>
                <section className='header-top'>
                    <a href="" className='logo-nav'>MYSTORE <i class="fa-solid fa-store"></i></a>
                    <div>
                        <a href="#">My Account</a>
                        <form>
                            <div> 
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input type="text" placeholder='Search products...'/> 
                            </div>
                        </form>
                    </div>
                </section>

                <section className='header-bottom'>
                    <nav>
                        <a href="" className='hover:text-white'>Home</a>
                        <a href="" className='hover:text-white'>Shop</a>
                        <a href="" className='hover:text-white'>Reviews</a>
                    </nav>
                    <ShoppingCart />
                </section>
            </div>
        </HeaderBuild>
    )
}