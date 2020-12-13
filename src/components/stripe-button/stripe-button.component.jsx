import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 1000;
    const publishableKey = 'pk_test_51Hxyf4EaGk8W7CxMh9uHgrn1MdNLt4evpx5fT6mXowRarp7zhqqaSkNNLRfd4v1oocD3GXJohgDbn22CNPfFPE4u00QBibjUZL';

    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }

    return (
       
        <StripeCheckout label='Pay now' name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            />
    )
};

export default StripeCheckoutButton;