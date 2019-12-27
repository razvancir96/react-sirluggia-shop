import React from 'react';
// NU UITATI sa importati CSS-ul!
import './CheckoutForm.css';
// Importam componentele Stripe de care avem nevoie.
import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    injectStripe
} from 'react-stripe-elements'

// CheckoutForm este class component, deoarece in cazul erorii de plata vrem sa afisam un mesaj.
class CheckoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    }

    // La submiterea formularului, incercan sa confirmam plata, insa ATENTIE!
    // Nu vom putea face vreo plata efectiva, pentru ca nu avem SERVER, iar fara este imposibil.
    // In mod normal, inainte de a da click pe "Plateste", ar trebui sa trimitem un request catre server
    // prin care sa ne manifestam intentia de a face o plata(neaparat trebuie sa ii pasam suma totala si currency-ul).
    // Ca raspuns, serverul ne-ar trimite un PAYMENT_INTENT_CLIENT_SECRET, pe care l-am pasa metodei confirmCardPayment.
    // Cert este ca din front, trebuie sa pasam metodei informatiile colectate(informatiile despre card).
    handleFormSubmission(event) {
        // Nu uitati de prevent default!
        event.preventDefault();

        // TRATAM ERORILE!
        try {
            // Verificati teoria!
            this.props.stripe.confirmCardPayment('TODO: RECEIVE PAYMENT_INTENT_CLIENT_SECRET FROM SERVER', {
                payment_method: {
                    // Prin metoda getElement luam toate informatiile obtinute din elementele Stripe.
                    // Cum stim ce trebuie sa trimitem? DOCUMENTATIA Stripe!
                    card: this.props.elements.getElement('cardNumber')
                }
            });
        // INTRUCAT vom avea o eroare, pentru ca programul sa isi continue viata ignorant erorare, trebuie
        // sa o prindem, folosind try-catch. Pentru o varianta mai eleganta, dar si mai multe detalii legate de
        // tratarea erorilor CONSULTATI TEORIA!
        } catch (error) {
            console.log(error);
            // Daca avem eroare si actualizam state-ul, pentru a afisa mesajul corespunzator.
            this.setState({error})
        }
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleFormSubmission(event)} className="checkout-form">
                <p className="h4 font-weight-bold mb-5 text-center">Plătește cu cardul:</p>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    {/* Pentru numarul cardului, data expirarii sau CVC, folosim componente predefinite,
                    date de Stripe. Le stilizam, atribuindu-le clase custom */}
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
                {/* Daca avem eroare de plata, afisam un mesaj */}
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

// Pattern-ul HOC! Sunt injectate functionalitati suplimentare in props-urile componentei actuale.
export default injectStripe(CheckoutForm);