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
        position: relative;
        overflow: hidden;

        & img {
            transition: all 0.4s;
            filter: brightness(90%);
        }

        & .onSale {
            position: absolute;
            left: 0;
            top: 0;
            background: #211C84;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 10px;
            padding-right: 24px;
            text-transform: uppercase;
            transform: rotate(-65deg) translateX(-10px);
            color: #fff;
            font-size: .75rem;
            font-weight: bold;
        }

        &:hover {

            & img {
                transform: rotateY(180deg);
            }
        }
    }


    & button {
        //background: #A0C878;
        background: #5B913B;
        padding: 10px 20px;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
    }

    
`

export default function ProductItem({topRated=false, onSale=false, img, productName, price, rate=null, discounted=null}) {
    return (
        <ProductItemBuild>
            <a href="">
                <img src={img} alt="" />
                <h5 className="text-gray-700">{productName}</h5>
                {topRated && <div className="text-yellow-800">{rate}</div>}
                <span className="text-gray-700 text-xs">{onSale && <span className="me-2 line-through text-gray-500">${discounted}</span>} ${price}</span>
                {onSale && <div className="onSale">on sale!</div>}
            </a>
            <button>Add to cart</button>
        </ProductItemBuild>
    )
} 