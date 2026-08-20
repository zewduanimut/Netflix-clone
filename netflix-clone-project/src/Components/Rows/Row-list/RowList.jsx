// import React, { useEffect, useState } from 'react'
// import Row from '../Row/Row'
// import Requests from '../../../utils/Requests'
// function RowList() {
//     return (
//         <>
//             <Row
//                 title="NETFLIX ORIGINALS"
//                 fetchurl={Requests.fetchNetflixOriginals} />
//         </>
//     )

// }
// export default RowList

import React from 'react';
import Row from '../Row/Row';
import Requests from '../../../utils/Requests';

function RowList() {
    return (
        <>
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={Requests.fetchNetflixOriginals}
                isLargeRow={true}
            />
            <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={Requests.fetchTopRatedMovies} />
            <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
            <Row title="Horer Movies" fetchUrl={Requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
            <Row title="Tv Show" fetchUrl={Requests.fetchTvShow} />
            <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
        </>
    );
}

export default RowList;