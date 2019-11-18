import React from 'react';
// importam componenta Layout, in loc sa importam si header-ul si footer-ul.
import Layout from '../components/Layout';

const Home = () => {
    return(
        <div>
            {/* Tot ce este pus intre <Layout> si </Layout> va reprezenta props.children in cadrul componentei Layout.*/}
            <Layout>
                <h1>Home</h1>
            </Layout>
        </div>
    )
}

export default Home;