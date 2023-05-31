function GoodsItem(props) {
    const {
        id,
        name,
        displayDescription,
        price,
        full_background,
        addToBasket = Function.prototype,
    } = props;

    return (
    <div className="card">
    <div className="card-image">
      <img src={full_background} alt={name}/>

    </div>
    <div className="card-content">
        <span className="card-title">{name}</span>
      <p>{displayDescription}</p>
    </div>
    <div className="card-action">
          <button className="btn" onClick={() => addToBasket({
            id,
            name,
            price,
          })}>Придбати</button>
          <span className="right" style={{fontSize: '1.8rem'}}>{price} uah</span>
        </div>
  </div>)
};

export {GoodsItem};

