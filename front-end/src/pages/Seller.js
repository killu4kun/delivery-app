import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import NavSeller from '../components/NavSeller';
import { salesFetch } from '../services/sales-api';

function Seller() {
  const title = 'VenededorPedidos';
  const [user, setUser] = useState({ name: '' });
  const [sales, setSales] = useState([]);

  const renderSales = () => {
    if (sales.length === 0) return <h3>Loading ...</h3>;
    return (
      <div>
        { sales.map(
          (
            { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber },
            index,
          ) => (
            <Link key={ index } to={ `/seller/orders/${id}` }>
              <div>
                <h6>Pedido</h6>
                <div data-testid={ `seller_orders__element-order-id-${id}` }>
                  {index}
                </div>
              </div>
              <div>
                <h2 data-testid={ `seller_orders__element-delivery-status-${id}` }>
                  {status}
                </h2>
              </div>
              <div>
                <h4 data-testid={ `seller_orders__element-order-date-${id}` }>
                  {saleDate}
                </h4>
                <h4 data-testid={ `seller_orders__element-card-price-${id}` }>
                  {totalPrice}
                </h4>
              </div>
              <div>
                <h5
                  data-testid={ `seller_orders__element-card-address-${id}` }
                >
                  {`${deliveryAddress}, ${deliveryNumber}`}

                </h5>
              </div>
            </Link>
          ),
        )}
      </div>
    );
  };

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await salesFetch(user.name);
      setSales(response.data);
    };
    fetchData();
  }, [user.name]);

  console.log(sales);

  return (
    <main>
      <Nav>
        <NavSeller titlePage={ title } />
      </Nav>
      {renderSales()}
    </main>
  );
}

export default Seller;
