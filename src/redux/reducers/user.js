// Avem nevoie de un initial state
const initialState = {
    data: {},
    loading: false,
    error: null
};

// userReducer se va ocupa de modificarea state-ului pentru tot ce tine de datele userului
export function userReducer(state = initialState, action) {
    switch (action.type) {
        // Cand se porneste o actiune asincrona, setam loading-ul pe true
        case 'START_LOADING':
            return Object.assign({}, state, {
                loading: true
            });
        // Actiunea de actualizare a userului contine in payload un obiect gol, daca acesta
        // se delogheaza, sau un obiect cu datele userului, daca acesta se logheaza. De asemenea,
        // inseamna ca s-a terminat actunea asincrona, deci setam loading-ul pe false.
        case 'UPDATE_USER_DATA':
            return Object.assign({}, state, {
                data: action.data,
                loading: false
            });
        // Daca actiunea asincrona contine erori, actualizam mesajul de eroare, dar si loading-ul.
        case 'UPDATE_USER_ERROR':
            return Object.assign({}, state, {
                error: action.error,
                loading: false
            })
        default:
            return state
    }
}