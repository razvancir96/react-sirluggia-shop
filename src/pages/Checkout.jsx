import React from 'react';
// Importam componentele de la Stripe de care avem nevoie.
import {
    StripeProvider,
    Elements
} from 'react-stripe-elements';
// Importam componentele din React de care avem nevoie.
import Layout from '../components/Layout';
import CheckoutForm from '../components/CheckoutForm';
// importam API Key-ul de care avem nevoie.
import StripeConfig from '../configs/stripe';

const Checkout = () => {
    return (
        // Componentele care utilizeaza elemente de la Stripe trebuie sa fie wrappuite de componenta
        // StripeProvider, care primeste ca prop API Key-ul. ATENTIE! Este good practice sa tinem toate
        // API Key-urile/ fisierele de configurare intr-un singur folder(gen configs).
        <StripeProvider apiKey={StripeConfig.apiKey}>
            <Layout>
                <div className="checkout-page content-min-height container-fluid container-min-max-width
                                d-flex justify-content-center align-items-center">
                    {/* De asemenea, toate elementele din Stripe trebuie sa fie wrappuite si de catre
                    componenta Elements. Daca nu intelegeti de ce, consutati teoria/documentatia Stripe(link
                    pe platforma.)*/}
                    <Elements>
                        <div className="d-flex flex-column">
                            {/* Formularul de checkout, care contine elementele Stripe trebuie pus intr-o componenta
                            separata, intrucat el va trebui sa foloseasca pattern-ul HOC(HigherOrderComponent) */}
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