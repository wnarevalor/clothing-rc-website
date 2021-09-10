import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JYEpkBxBXjRHVrhdYSdgxe8Q2KhV2BTY6DqiIc7506h9oMPClyhN08rVlfIYY20Cf2B4rZqipQOUZaOgxhgagNx009oXaPByi";
  const onToken = (token) => {
    console.log(token);
    alert("Payment succesful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
