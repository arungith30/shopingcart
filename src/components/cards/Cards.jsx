import "./cards.css";
import image from "../image/image.jpg";
import Products from "../products/Products";

function Cards() {
  return (
    <div className="cards-layout">
      <div className="cards">
        {Products.map((item) => {
          return (
            <div className="card">
              <img className="image" src={image} alt="image00" />
              <span
                className={item.sale === "true" ? "show-sale" : "hide-sale"}
              >
                sale
              </span>
              <h3>{item.title}</h3>

              <p className="star">
                {item.ratings === "true" ? (
                  <div class="rating">
                    {[...Array(5)].map((star) => {
                      return <i class="fa fa-star" aria-hidden="true"></i>;
                    })}
                  </div>
                ) : (
                  ""
                )}
              </p>

              <p>
                <span>
                  {" "}
                  <strike>{item.offer}</strike>
                </span>
                {item.price}
              </p>

              <div
                className={
                  item.ratings === "true" ? "card-button-star" : "card-button"
                }
              >
                <button className="button"> {item.type}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
