import ProductItem from "./ProductItem"
import myImg from '../assets/products/backpack1.jpg'

const TOPRATEDPRODUCTS = [
    {
        img: myImg,
        productName: 'Backpack',
        rate: '✮✮✮✮',
        price: 10
    },
    {
        img: myImg,
        productName: 'Backpack',
        rate: '✮✮✮✮✮',
        price: 14
    },
    {
        img: myImg,
        productName: 'Backpack',
        rate: '✮✮✮',
        price: 12
    }
]

export default function TopRatedProducts() {
    return (
        <section className="mt-20">
            <div className="my-container">
                <h2 className="text-slate-900 text-center text-3xl">Top rated Products</h2>
                <ul className="grid grid-cols-3 gap-12 mt-9">
                    {TOPRATEDPRODUCTS.map((item) => {
                        return (
                            <li key={item.productName}>
                                <ProductItem {...item} type="top-rated"/>
                            </li>
                        )
                    })}
                    
                </ul>
            </div>
        </section>
    )
}