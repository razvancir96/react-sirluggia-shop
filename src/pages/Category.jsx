import React, { Component } from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json'
import ProductListSidebar from '../components/ProductListSidebar';
import ProductList from '../components/ProductList';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: {},
            items: [],
            filteredItems: []
        }
    }

    // Filter items va fi o functie executata in ProductListSidebar, care va actualiza produsele filtrate dupa un interval
    filterProducts(lowerLimit, upperLimit) {
        // ATENTIE! Mereu trebuie sa pornim filtrarea de la intreaga lista de produse(items, nu filteredItems)
        const filteredItems = this.state.items.filter((product) => product.price >= lowerLimit && product.price < upperLimit);
        this.setState({ filteredItems });
    }

    componentDidMount() {
        const { match } = this.props;
        const categoryName = match.params.categoryName;
        // Actualizam atat informatiile despre categorie, cat si produse, respectiv produsele filtrate.
        this.setState({
            category: products[categoryName],
            items: products[categoryName].items,
            filteredItems: products[categoryName].items
        });
    }

    render() {
        return (
            <Layout>
                <div className="content-min-height container-fluid container-min-max-width">
                    <h2>{ this.state.category.name }</h2>
                    <div className="row">
                        {/* Pasam metoda filter products catre ProductListSidebar, avand grija sa nu pierdem this-ul */}
                        <ProductListSidebar filterProducts={(low, high) => this.filterProducts(low, high)}/>
                        {/* Pasam produsele filtrate catre lista de produse */}
                        <ProductList products={this.state.filteredItems} />
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Category;