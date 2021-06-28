import { useState } from "react";

export function Cards(props) {
  const [rating, setrating] = useState();
  const [r, setr] = useState(0);
  return (
    <div id="content">
      {props.item.map((v) => {
        return (
          <div className="caird">
            {v.sale === 1 ? <div id="saletag">SALE</div> : ""}

            <div id="productpic">
              Product Image<br></br>(450 x 300)
            </div>
            <div id="details">
            <h2>{v.name}</h2>

            {v.sale === 0 ? (
              <h4>${v.price}</h4>
            ) : (
              <h4>
                <span id="oldprice">${v.price}</span> ${v.price * 0.75}
              </h4>
            )}
            </div>

            <div id="out">
              <div
                id="in"
                style={{ width: `${r === v ? rating : "50%"}` }}
              ></div>
            </div>
            <br></br>
            <input
              defaultValue={2.5}
              id="inp"
              type="number"
              step="0.1"
              min="0.1"
              max="5"
              onChange={(e) => {
                setr(v);
                setrating(`${(e.target.value / 5) * 100}%`);
              }}
            ></input>
            <br></br>

            <br></br>
            <button
            className="btn btn-outline-dark mt-auto cartbtn"
              onClick={() => {
                props.setcart([...props.cart, v]);
                
              }}
              disabled={props.cart.includes(v) ? 1 : 0}
            >
              addtocart
            </button>
          </div>
        );
      })}
    </div>
  );
}
