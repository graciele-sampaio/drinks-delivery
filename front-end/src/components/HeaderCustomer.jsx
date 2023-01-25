import React from 'react';
import { useParams } from 'react-router-dom';

function HeaderCustomer({ seller, date }) {
  const { id } = useParams();

  return (
    <div>
      <span data-testid="customer_order_details__element-order-details-label-order-id">
        PEDIDO
        { id }
      </span>
      <span data-testid="customer_order_details__element-order-details-label-seller-name">
        { seller.users.name }
      </span>
      <span data-testid="customer_order_details__element-order-details-label-order-date">
        { date }
      </span>

      <span
        data-testid={ `customer_order_details__element-order-details-label-delivery-status
        -${seller.status}` }
      >
        { seller.status }
      </span>
      <button
        date-testid="customer_order_details__button-delivery-check"
        type="button"
      >
        MARCAR COMO ENTREGUE
      </button>
    </div>
  );
}

HeaderCustomer.propTypes = {}.isRequired;

export default HeaderCustomer;
