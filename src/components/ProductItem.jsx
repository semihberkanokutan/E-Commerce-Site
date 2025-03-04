import styled from "styled-components"

const ProductItemBuild = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    & a {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;

        & img {
            transition: all 0.4s;
        }

        &:hover {

            & img {
                transform: rotateY(180deg);
            }
        }
    }


    & button {
        background: #B771E5;
        padding: 10px 20px;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
    }

    
`

export default function ProductItem({topRated=false, img, productName, price, rate=null}) {
    return (
        <ProductItemBuild>
            <a href="">
                <img src={img} alt="" />
                <h5 className="text-gray-700">{productName}</h5>
                {topRated && <div className="text-purple-900">{rate}</div>}
                <span className="text-gray-700">${price}</span>
            </a>
            <button>Add to cart</button>
        </ProductItemBuild>
    )
} 