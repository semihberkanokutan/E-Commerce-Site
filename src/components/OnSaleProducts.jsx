import ProductItem from "./ProductItem"
import myImg from '../assets/products/backpack1.jpg'

const ONSALEPRODUCTS = [
    {
        img: myImg,
        productName: 'Backpack',
        rate: '✮✮✮✮',
        price: 10,
        discounted: 20
    },
    {
        img: myImg,
        productName: 'Backpack2',
        rate: '✮✮✮✮✮',
        price: 14,
        discounted: 20
    },
    {
        img: myImg,
        productName: 'Backpack3',
        rate: '✮✮✮',
        price: 12,
        discounted: 22
    },
    {
        img: myImg,
        productName: 'Backpack4',
        rate: '✮✮✮',
        price: 12,
        discounted: 28
    }
]

export default function OnSaleProducts() {
    return (
        <section className="mt-20">
            <div className="my-container">
                <h2 className="text-slate-900 text-center text-3xl">On Sale Products</h2>
                <ul className="grid grid-cols-4 gap-12 mt-9">
                    {ONSALEPRODUCTS.map((item) => {
                        return (
                            <li key={item.productName}>
                                <ProductItem {...item} onSale={true}/>
                            </li>
                        ) 
                        
                    })}
                </ul>
            </div>
        </section>
    )
}