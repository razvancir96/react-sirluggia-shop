// In acest folder vom scrie toti reducerii pentru a actualiza state-ul referitor la cart.
// Pentru a intelege cum functioneaza reducerii, consulta TEORIA!

// Un reducer trebuie sa aiba o stare initiala. In primul rand, hai sa ne gandim
// la store-ul nostru global. Store-ul contine date despre mai multe lucruri, iar ele ar fi
// indicat sa fie grupate. Datele despre cart vor fi tinute in cheia "cart", datele despre user
// vor fi tinute in cheia "user" si asa mai departe. Atunci, cartul va avea actiunile si reducerul
// lui, userul va avea actiunile si reducerul lui. Fiecare reducer va modifica O PARTE a state-ului
// din store, iar pentru acea parte trebuie sa isi defineasca o stare initiala.
// CITITI TEORIA pentru detalii suplimentare.
const initialState = {
    // Cart-ul va contine mai multe produse.
    products: []
}

// Reducerul este o functie care primeste de la redux ca parametru state-ul de la acel moment,
// precum si o actiune. Reducerul verifica tipul(numele) actiunii, iar daca acesta coincide tipul returnat
// actiunea invocata din componenta(DIN NOU, CITITI teoria, intelegeti cum comunica componentele
// cu store-ul), atunci va RETURNA state-ul modificat corespunzator.
// initialState este un default parameter, adica daca state-ul pentru reducer nu a fost inca initializat,
// atunci va fi initializat cu initialState.
export function cartReducer(state = initialState, action) {
    // Afisam state-ul din reducer INAINTE sa il actualizam.
    // Vom vedea data viitoare cum putem face debugging mai eficicent.
    console.log(state);
    // Evaluam tipul actiunii
    switch (action.type) {
        // Daca va avea tipul 'ADD_TO_CART', corespunzator tipului din actiune, atunci va adauga un produs
        // in vectorul products, din state-ul curent.
        // ATENTIE! Daca vrem sa modificam numele(tipul) actiunii 'ADD_TO_CART', va trebui sa o facem si in
        // actiune si in reducer. De aceea, de multe ori, se numele actiunii se pune intr-un fisier de constante.
        case 'ADD_TO_CART':
            let productInCart = false;
            // ATENTIE! NU dorim sa modificam state-ul! Reducerul este o functie pura, fara side effect-uri.
            // Asadar, o metoda precum push nu are ce cauta aici.
            // Cand adaugam un produs in cart, trebuie mai intai sa verificam daca el deja exista. Daca nu exista,
            // Il adaugam ca fiind un element nou, cu cantitate 0. Daca deja exista, ii marim cantitatea cu 1.
            const updatedProducts = state.products.map(product => {
                // Parcurgem vectorul de produse si pentru fiecare produs in parte verificam daca id-ul
                // lui este acelasi cu id-ul produsului venit din payload.
                if (product.id === action.payload.product.id) {
                    productInCart = true;
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                } else {
                    return product;
                }
            })

            if (!productInCart) {
                return Object.assign({}, state, {
                    products: [
                        ...state.products,
                        {
                            ...action.payload.product,
                            quantity: 1
                        }
                    ]
                })
            } else {
                return Object.assign({}, state, {
                    products: updatedProducts
                });
            }
        case 'REMOVE_FROM_CART':
            const filteredProducts = state.products.filter(product => {
                return product.id !== action.payload.product.id
            })
            return filteredProducts;
        // In cazul default, returnam state-ul primit de reducer, nemodificat.
        default:
            return state;
    }
}

