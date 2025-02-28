import clothing from '../assets/product-categories/clothing.jpg'
import electronics from '../assets/product-categories/electronics.jpg'
import hobbies from '../assets/product-categories/hobbies.jpg'

const CATEGORIES = [
    {
        img: clothing,
        categoryName: 'Clothing',
        productQuantity: 13
    },
    {
        img: electronics,
        categoryName: 'Electronics',
        productQuantity: 20
    },
    {
        img: hobbies,
        categoryName: 'Hobbies',
        productQuantity: 10
    }
]


export default function ProductCategories() {


    return (
        <section className='mt-12'>
            <div className="my-container">
                <h2 className='text-slate-900 text-center text-3xl'>Product Categories</h2>
                <ul className='grid grid-cols-3 gap-12 mt-9'>
                    {CATEGORIES.map((item) => {
                        return (
                            <li key={item.categoryName}>
                                <a href="" className='productCategoryItem'>
                                    <img src={item.img} alt={item.categoryName} className='h-[500px] w-full 
                                    hover:brightness-50 transition-all duration-300 ease-linear'/>
                                    <h4 className='text-center mt-3 text-gray-800'>
                                        {item.categoryName}
                                        <span className='font-bold ms-2'>{`(${item.productQuantity})`}</span>
                                    </h4>
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
            </div>
        </section>
    )
}