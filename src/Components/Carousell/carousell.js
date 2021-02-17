import React, { useState, useEffect, useContext } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.css";
import { CounterContext } from "../../App";

const Carousell = () => {
  
  const { count, setCount } = useContext(CounterContext);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    bringData();
  }, []);
  const bringData = async () => {
    const data = await fetch(
      "https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products"
    );
    const productData = await data.json();
    console.log(productData);
    setProducts(productData);
  };
  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    0: {
      items: 4,
    },
    600: {
      items: 4,
    },
    1024: {
      items: 4,
    },
  };
  return (
    <div className="alice-carousel-section">
      <div className="container-title-section-carousell">
        <p className="title-carousel">Mais Vendidos</p>
        <div className="container-grey"></div>
        <div>
          <AliceCarousel
            mouseTracking
            infinite={true}
            animationDuration={1300}
            disableDotsControls={true}
            responsive={responsive}
            autoPlay={true}
            disableButtonsControls={true}
          >
            {products.map((product) => (
              <div className="container-card" key={product.id}>
                <div
                  className="container-img-card"
                  onDragStart={handleDragStart}
                >
                  <img className="img-card" alt="img" src={product.img} />
                </div>
                <div className="text-card">
                  <p className="card-title">{product.product}</p>
                  <p className="card-price">por R$ {product.price}</p>
                  <p className="card-sku">{product.sku}</p>
                </div>

                <button
                  className="btn-shop"
                  onClick={() => setCount(count + 1)}
                >
                  COMPRAR
                </button>
              </div>
            ))}
          </AliceCarousel>
        </div>
      </div>
    </div>
  );
};

export default Carousell;
