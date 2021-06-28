export function Cart(props) {
    return (
      <div id="cart">
        <ul id="cartlist">
        {props.cart.map((v, i) => {
          return (
            <>
              <li>
                <span>{i + 1}</span>
                <span style={{ color: "white" }}>{v.name}</span>
                {v.sale === 0 ? (
                  <span>${v.price}</span>
                ) : (
                  <span>${v.price * 0.75}</span>
                )}

                <button
                  className="btn-danger"
                  onClick={() => {
                    props.setcart(props.cart.filter((val, i) => val !== v));
                    props.setdis(0);
                  }}
                >
                  remove
                </button>
              </li>
            </>
          );
        })}
      </ul>
      </div>
    );
  }
  