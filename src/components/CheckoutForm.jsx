import React from 'react';
import './CheckoutForm.css';
import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    injectStripe
} from 'react-stripe-elements'

class CheckoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    }

    handleFormSubmission(event) {
        event.preventDefault();

        try {
            this.props.stripe.confirmCardPayment('TODO: RECEIVE PAYMENT_INTENT_CLIENT_SECRET FROM SERVER', {
                payment_method: {
                    card: this.props.elements.getElement('cardNumber')
                }
            });
        } catch (error) {
            console.log(error);
            this.setState({error})
        }
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleFormSubmission(event)} className="checkout-form">
                <p className="h4 font-weight-bold mb-5 text-center">Plătește cu cardul:</p>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="mb-3">
                        <p className="mb-1">Număr card:</p>
                        <CardNumberElement className="card-number-element stripe-element"/>
                    </div>
                    <div className="mb-3">
                        <p className="mb-1">Dată expirare:</p>
                        <CardExpiryElement className="card-expiry-element stripe-element"/>
                    </div>
                    <div className="mb-3">
                        <p className="mb-1">CVC:</p>
                        <CardCvcElement className="card-cvc-element stripe-element"/>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-dark">Plătește</button>
                </div>
                { this.state.error
                    ? <div>
                        <p className="text-danger text-center mt-3">Plata cu cardul este in probe. Puteți plăti cash la sediu.</p>
                    </div>
                    : null
                }
            </form>
        );
    }
}

export default injectStripe(CheckoutForm);