import React from 'react';
import {
    StripeProvider,
    Elements
} from 'react-stripe-elements';
import Layout from '../components/Layout';
import CheckoutForm from '../components/CheckoutForm';

const Checkout = () => {
    return (
        <StripeProvider apiKey="pk_test_qxuOUztDbFFABADsiHV1oXbi00vzVumGBX">
            <Layout>
                <div className="checkout-page content-min-height container-fluid container-min-max-width
                                d-flex justify-content-center align-items-center">
                    <Elements>
                        <div className="d-flex flex-column">
                            <CheckoutForm/>
                            <p className="mt-5 font-italic">
                                Pentru livrare produsele trebuie ridicate personal de la adresa: Tudor Vladimirescu 22, sunând în prealabil la numărul: 0728998166.
                            </p>
                        </div>
                    </Elements>
                </div>
            </Layout>
        </StripeProvider>
    );
}

export default Checkout;