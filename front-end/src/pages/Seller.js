import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import NavSeller from '../components/NavSeller';
import salesFetch from '../services/sales-api';

function Seller() {
  const title = 'VenededorPedidos';
  const [user, setUser] = useState();
  const [sales, setSales] = useState();

  const fetchData = async () => {
    const response = salesFetch(user.name);
    setSales(response.data);
  };

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log(sales);

  return (
    <Nav>
      <NavSeller titlePage={ title } />
    </Nav>
  );
}

export default Seller;
