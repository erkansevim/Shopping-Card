import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";

const ProductList = () => {
  const BASE_URL = "https://63f4e5583f99f5855db9e941.mockapi.io/products";

  const [urunler, setUrunler] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setUrunler(data);
      setLoading(false);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (error) {
    return <p>Something went wrong....</p>;
  }

  return (
    <div className="container mt-3">
      <div className="d-sm-block d-md-flex">
        {loading ? (
          <p>Loading.....</p>
        ) : (
          <>
            <article id="product-panel" className="col-md-6">
              {urunler.map((urun) => (
                <ProductCard key={urun.id} urun={urun} getData={getData} />
              ))}
            </article>
            <article>
              <CardTotal urunler={urunler} />
            </article>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
