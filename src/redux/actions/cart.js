// In acest folder vom scrie toate actiunile referitoare la manipularea produselor din cart.
// Pentru a intelege cum functioneaza actiunile, consulta TEORIA!

// Actiunile sunt simple functii care returneaza un obiect
// actiunea primeste un "payload". Acest payload va contine datele pasate din componenta,
// necesare pentru a actualiza store-ul. De exemplu, pentru a adauga un item in cart, trebuie
// sa trimitem catre actiune datele item-ului.
export function addToCart(payload) {
    // NU UITATI de return!
    return {
        // Actiunile au un tip, practic o denumire. De multe ori veti vedea aceasta
        // denumire pusa intr-un fisier de constante. De ce? uitat-va si la reducer-ul numit cart!
        type: 'ADD_TO_CART',
        // Payload-ul trebuie mai departe trimis catre reducer.
        payload
    }
}

// Observari cum fiecare actiune este exportata separat(deci va fi iportata cu {}).
export function removeFromCart(payload) {
    return {
        type: 'REMOVE_FROM_CART',
        payload
    }
}