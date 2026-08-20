import React from 'react'
import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer';
import Banner from "../../Components/Banner/Banner.jsx"
import RowList from '../../Components/Rows/Row-list/RowList.jsx';
function Home() {
    return (
        <>
            <Header />
            <Banner />
            <RowList />
            <Footer />
        </>
    )
}

export default Home;