import React from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json';
import HomeCategory from '../components/HomeCategory';
import '../utils/utility-classes.css';

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
                <div className="container-fluid container-min-max-width">
                    <div className="row">
                        {this.state.categories.map((category, index) =>
                            <HomeCategory
                                key={index}
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