import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import NavSeller from "../components/NavSeller";
import salesFetch from "../services/sales-api";

function Seller() {
  const title = "VenededorPedidos";
  const [user, setUser] = useState();
  const [sales, setSales] = useState([]);

  const fetchData = async () => {
    const response = await salesFetch(user.name);
    setSales(response.data);
  };

  const renderSales = () => {
    if (sales.length === 0) return <h3>Loading ...</h3>;
    return sales.map(
      (
        { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber },
        index
      ) => {
        <section>
          <div>
            <h6>Pedido</h6>
            <div data-testid={`seller_orders__element-order-id-${id}`}>
              {index}
            </div>
          </div>
          <div>
            <h2 data-testid={`seller_orders__element-delivery-status-${id}`}>
              {status}
            </h2>
          </div>
          <div>
            <h4 data-testid={`seller_orders__element-order-date-${id}`}>
              {saleDate}
            </h4>
            <h4 data-testid={`seller_orders__element-card-price-${id}`}>
              {totalPrice}
            </h4>
          </div>
          <div>
            <h5
              data-testid={`seller_orders__element-card-address-${id}`}
            >{`${deliveryAddress}, ${deliveryNumber}`}</h5>
          </div>
        </section>;
      }
    );
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log(sales);

  return (
    <main>
      <Nav>
        <NavSeller titlePage={title} />
      </Nav>
      {renderSales()}
    </main>
  );
}

export default Seller;
