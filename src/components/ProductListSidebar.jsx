import React from 'react';

class ProductListSidebar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // ATENTIE! De ce avem nevoie de un state pentru filtre? Putem avea bifat unul singur la un anumit
            // moment, deci trebuie sa le putem debifa pe celelalte atunci cand bifam unul nou(PRO TIP: vezi
            // cum functioneaza la emag). Campul checked daca are false, inseamna ca checkbox-ul nu e bifat,
            // daca are true inseamna ca e bifat. Name este numele corespunzator checkbox-ului
            filters: [
                {
                    name: 'filter1',
                    checked: false
                },
                {
                    name: 'filter2',
                    checked: false
                },
                {
                    name: 'filter3',
                    checked: false
                }
            ]
        }
    }

    // Returneaza valoare pentru checked, corespunzatoare unui nume.
    getCheckedValue(name) {
        const selectedFilter =  this.state.filters.find(filter => filter.name === name);
        return selectedFilter.checked;
    }

    // Metoda handleCheckboxUiChange actualizeaza afisarea checkbox-urilor in interfata
    handleCheckboxUiChange(name) {
        const filters = this.state.filters;
        // ATENTIE! Nu trebuie sa modificam state-ul pe parcurs(in modificam cu setState),
        // de aceea vom folosi un map.
        const modifiedFilters = filters.map(filter => {
            // Daca filtrul nu este cel pe care s-a dat click, dar este bifat, trebuie debifat,
            // dica returnat un obiect care contine informatiile precedente din filtru, dar
            // cu valoarea fase pentru campul "checked"
            if (filter.name !== name && filter.checked) {
                return {
                    // cu ... luam perechile cheie-valoare din obiect
                    ...filter,
                    // cu toate ca cheia(scuzati cacofonie) checked se regasea in obiectul filter,
                    // doar cheia de la sfarsit conteaza, deci daca am avea un opbiect de genul
                    // { checked: true,
                    // checked: false}
                    // in final ar vedea doar cheia checked cu valoare false
                    checked: false
                }
            // Daca filtrul(checkbox-ul) este cel pe care se da click
            } else if (filter.name === name) {
                // Daca filtrul era bifat, trebuie debifat.
                if (filter.checked) {
                    return {
                        ...filter,
                        checked: false
                    }
                // Altfel, filtrul era debifat, deci va trebui sa fie bifat.
                } else {
                    return {
                        ...filter,
                        checked: true
                    }
                }
            // Daca filtrul nu e cel pe care se da click, dar nici nu era bifat, il lasam asa
            } else {
                return filter;
            }
        });
        // Actualizam filtrele cu noile modificari
        this.setState({filters: modifiedFilters});
    }

    // Cum se vor filtra produsele? Avem evenimentul provocat de checkbox si intervalul continut de checkbox
    changeProducts(event, lowerLimit, upperLimit) {
        // Daca checkbox-ul este bifat, atunci, IN PAGINA DE CATEGORIE, trebuie filtrate produsele dupa
        // intervalul primit ca parametru. Pentru asta, folosim functia filterProducts, pasata ca prop
        // din Category.
        if (event.target.checked) {
            this.props.filterProducts(lowerLimit, upperLimit);
        // Daca checkbox-ul e debifat, asta inseamna ca filtrele aplicate inainte trebuie anulate. Asadat intervalul
        // de pret pentru care vom filtra va fi de la 0 la infinit. Din nou, modificarea trebuie sa se reflecte in pagina\
        // de categorie.
        } else {
            this.props.filterProducts(0, Infinity);
        }
        // ATENTIE! Pe langa filtrarea produselor, trebuie ca afisarea checkbox-urilor in interfata sa se modifice!
        this.handleCheckboxUiChange(event.target.name);
    }

    render() {
        console.log(this.state);
        return (
            <div className="col-3">
                <p>Filtrează după preț:</p>
                <div>
                    <input
                        type="checkbox"
                        name="filter1"
                        className="mr-2"
                        // Fiecare checkbox are proprietataea checked, a carei valoare o ia din state
                        checked={this.getCheckedValue('filter1')}
                        // La click pe checkbox, se vor filtra produsele corespunzator
                        onChange={(event) => this.changeProducts(event, 0, 100)}
                    />
                    <label htmlFor="filter1">&lt; 100 LEI</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="filter2"
                        className="mr-2"
                        checked={this.getCheckedValue('filter2')}
                        onChange={(event) => this.changeProducts(event, 100, 200)}
                    />
                    <label htmlFor="filter2">100 - 200 LEI</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="filter3"
                        className="mr-2"
                        checked={this.getCheckedValue('filter3')}
                        onChange={(event) => this.changeProducts(event, 200, Infinity)}
                    />
                    <label htmlFor="filter3">&gt; 200 LEI</label>
                </div>
            </div>
        );
    }
}

export default ProductListSidebar;