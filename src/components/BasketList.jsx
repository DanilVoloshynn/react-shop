import {BasketItem} from './BasketItem'

function BasketList(props) {
    const {order = [], 
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity,
        decQuantity,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0);

    return (
    <ul className="collection basket-list">
        <li className="collection-item active">Кошик</li>
        {
            order.length ? order.map(item => (
                <BasketItem key={item.id} removeFromBasket={removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity} {...item} />
            )) : <li className="collection-item">Кошик порожній</li>
        }
        <li className="collection-item active">Загальна вартість: {totalPrice} uah</li>
        <li className="collection-item active"><button className='btn-small'>Замовити</button></li>
        <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
</ul>
);
}

export {BasketList}