import React from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json';
import HomeCategory from '../components/HomeCategory';

class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        // Categoriile noaste sunt chei in JSON-ul importat. Pentru a face un array cu cheile unui obiect,
        // folosim Object.keys()!
        const categories = Object.keys(products);
        // Cand componenta se monteaza, este actualizat state-ul cu categoriile aferente.
        // In mod normal datele ar veni dintr-un API, dar tot in componentDidMount ar fi setate.
        // ATENTIE! La setarea state-ului am folosit ES6, metoda prescurata
        this.setState({categories});
    }

    render() {
        return(
            <Layout>
                {/* Bootstrap: div-ul cu clasa container-fluid + div-ul cu class row sunt folosite pentru
                asezarea in pagina(vezi teoria!). Clasa container-min-max-width e scrisa de noi si se afla in fisierul
                utility-classes, importat in App.js */}
                <div className="container-fluid container-min-max-width">
                    {/* row vine la pachet cu col-6. Vezi grid-ul bootstrap pentru detalii! */}
                    <div className="row">
                        {/* Pentru fiecare categorie, cream o componenta HomeCategory */}
                        {this.state.categories.map((category, index) =>
                            <HomeCategory
                                key={index}
                                // ATENTIE! Atunci cand proprietatea unui obiect este tinuta intr-o variabila, ea
                                // trebuie accesata cu sintaxa: obiect[variabila]. products[category] e echivalentul
                                // lui products.shoes, in ecemplus de mai jos.
                                route={category}
                                name={products[category].name}
                                description={products[category].description}
                                image={products[category].image}
                            />
                        )}
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Home;