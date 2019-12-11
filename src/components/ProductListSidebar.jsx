import React from 'react';

class ProductListSidebar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
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

    getCheckedValue(name) {
        const selectedFilter =  this.state.filters.find(filter => filter.name === name);
        return selectedFilter.checked;
    }

    handleCheckboxUiChange(name) {
        const filters = this.state.filters;
        const modifiedFilters = filters.map(filter => {
            if (filter.name !== name && filter.checked) {
                return {
                    ...filter,
                    checked: false
                }
            } else if (filter.name === name) {
                if (filter.checked) {
                    return {
                        ...filter,
                        checked: false
                    }
                } else {
                    return {
                        ...filter,
                        checked: true
                    }
                }
            } else {
                return filter;
            }
        });
        this.setState({filters: modifiedFilters});
    }

    changeProducts(event, lowerLimit, upperLimit) {
        if (event.target.checked) {
            this.props.filterProducts(lowerLimit, upperLimit);
        } else {
            this.props.filterProducts(0, Infinity);
        }
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
                        checked={this.getCheckedValue('filter1')}
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