// import React from 'react'
// import FrameByFramePreview from './FrameByFramePreview';
// const sampleFrames = [
//   'http://www.comicbookcritic.net/wp-content/uploads/2013/03/IRON3_5x8_Banner_v7_OL.jpg',
//    'https://i.ytimg.com/vi/x3LbqNE8Opw/maxresdefault.jpg',
//    'https://i.ytimg.com/vi/pX1BvgSEoFI/oar2.jpg?sqp=-oaymwEYCNAFENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLBkOf6zOKh6StEdEvQ15n-17XfUsw',
//    'https://cdn.mos.cms.futurecdn.net/9D6x8wrHVHTmdWBL2GCrX9.jpg'
  
//  ];
  
  
// const Home = () => {
//   return (
//     <div>
//       <div style={{ padding: 20 }}>
//     <h2 style={{ fontFamily: "'Cinzel Decorative', serif", color: 'gold' }}>
//       🎞 IronMan
//     </h2>
//     <FrameByFramePreview
//       poster="https://upload.wikimedia.org/wikipedia/commons/7/72/CasablancaPoster-Gold.jpg"
//       frameImages={sampleFrames}
//     />
//   </div>
 
 
//     </div>
//   )
// }
// export default Home
import React from 'react';
import FrameByFramePreview from './FrameByFramePreview';

const sampleFramesIronMan = [
  'http://www.comicbookcritic.net/wp-content/uploads/2013/03/IRON3_5x8_Banner_v7_OL.jpg',
  'https://i.ytimg.com/vi/x3LbqNE8Opw/maxresdefault.jpg',
  'https://i.ytimg.com/vi/pX1BvgSEoFI/oar2.jpg?sqp=-oaymwEYCNAFENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLBkOf6zOKh6StEdEvQ15n-17XfUsw',
  'https://cdn.mos.cms.futurecdn.net/9D6x8wrHVHTmdWBL2GCrX9.jpg',
  'https://cdn.hobbyconsolas.com/sites/uves.hobbyconsolas.com/files/styles/original_quality_780x470/public/img/noticias/2016-03/iron-man-3-wallpaper-hd-wallpapers-desktop-backgrounds-1920x1080-id-238479.jpg?itok=yI4xK8iS',
];

const sampleFramesAvengers = [
  'https://lumiere-a.akamaihd.net/v1/images/avengers_endgame_poster_c3a2f7c0.jpeg?region=0%2C0%2C800%2C1200',
  'https://i.pinimg.com/originals/c9/22/a3/c922a3ae95b6a505b2a0c6d5b0c95d9e.jpg',
  'https://wallpapercave.com/wp/wp6667104.jpg',
  'https://hips.hearstapps.com/hmg-prod/images/mv5bnzyxmjk3mdetzgutndm3nc00mtixlwiwmdutmzkzmwe5odq3mdy0xmvfmtjaxmde5otc1nv5bml5banbnxkftztgwnjg0mjm2mtev-1679058778.jpg',
  'https://m.media-amazon.com/images/M/MV5BYzA0MGFjOWUtNjk0YS00MGFjLWJjMmEtNTBkZWVjNGE5MWI1XkEyXkFqcGdeQXVyMTEyOTEwNzEx._V1_.jpg'
];

const sampleFramesSpiderman = [
  'https://i.pinimg.com/originals/1f/28/7f/1f287f99cf2a12903ce83d5a024220b3.jpg',
  'https://wallpaperaccess.com/full/767982.jpg',
  'https://assets-prd.ignimgs.com/2021/11/02/spiderman-no-way-home-poster-1635876356972.jpg',
  'https://lumiere-a.akamaihd.net/v1/images/image_6d507c89.jpeg?region=0%2C0%2C540%2C810',
  'https://images.fandango.com/ImageRenderer/820/0/assets/prod/images/MoviePoster/overhead/118/1460368815180_spidermanhomecoming_onesheet_v3_lg.jpg'
];

const sampleFramesBlackPanther = [
  'https://m.media-amazon.com/images/M/MV5BNjg2MzIwMDQxMF5BMl5BanBnXkFtZTgwNTU2NDg4NjM@._V1_FMjpg_UX1000_.jpg',
  'https://wallpapercave.com/wp/wp4310570.jpg',
  'https://cdn.shopify.com/s/files/1/0057/3728/3610/products/black-panther_zjz3r8_500x749.jpg?v=1630147907',
  'https://images.fandango.com/ImageRenderer/820/0/assets/prod/images/MoviePoster/overhead/203/1844080183011_blackpanther_poster_final_onesheet_v2_lg.jpg',
  'https://flxt.tmsimg.com/assets/p14492729_p_v8_al.jpg'
];

const sampleFramesCaptainAmerica = [
  'https://m.media-amazon.com/images/I/81I+rA851JL.jpg',
  'https://lumiere-a.akamaihd.net/v1/images/captain-america-winter-soldier-theatrical-poster_253503b2.jpeg',
  'https://assets-prd.ignimgs.com/2022/07/26/captainamericacivilwar-1658850652709.jpg',
  'https://www.themoviedb.org/t/p/original/rhm4GfL6L55iL2g47JbU90HjC38.jpg',
  'https://m.media-amazon.com/images/M/MV5BMjQ1MjM0NDQ0N15BMl5BanBnXkFtZTgwNjAyNDY3OTE@._V1_.jpg'
];

const sampleFramesThor = [
  'https://m.media-amazon.com/images/M/MV5BOGE4NzExYzMtZTMxZi00ODIzLTkwZGQtYmZmYTMzMmM3NTYzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BODg4NDk3Mzc0MF5BMl5BanBnXkFtZTgwMzc1MTgyNDE@._V1_FMjpg_UX1000_.jpg',
  'https://images.fandango.com/ImageRenderer/820/0/assets/prod/images/MoviePoster/overhead/203/1844080183011_thor_ragnarok_onesheet_v5_lg.jpg',
  'https://hips.hearstapps.com/hmg-prod/images/thor-love-and-thunder-1653063715.jpg',
  'https://www.themoviedb.org/t/p/original/prXG9oUfWwL6b2i74Qz7L1T8F0M.jpg'
];

const sampleFramesHulk = [
  'https://m.media-amazon.com/images/I/814Y70J6jKL._AC_UF894,1000_QL80_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMTUyNzk1Mjg4Nl5BMl5BanBnXkFtZTcwMzc1NzcxMQ@@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BNzk2ZjNiMWEtZWNlMi00YmIwLTliNWYtMjUxNjRjNTY3ZDYzXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMjA5OTgxNDMxN15BMl5BanBnXkFtZTcwODQ0MTIzMQ@@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMGU5MjEwZGItYjMyZC00NWNlLWIzZTYtNjMxMTk5YTA3YjM2XkEyXkFqcGdeQXVyMzU5OTE2MzI@._V1_.jpg'
];

const sampleFramesDrStrange = [
  'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjgxMV5BMl5BanBnXkFtZTgwMDE2Mzc0NzE@._V1_.jpg',
  'https://lumiere-a.akamaihd.net/v1/images/image_6d507c89.jpeg?region=0%2C0%2C540%2C810',
  'https://images.fandango.com/ImageRenderer/820/0/assets/prod/images/MoviePoster/overhead/203/1844080183011_doctor_strange_in_the_multiverse_of_madness_poster_lg.jpg',
  'https://m.media-amazon.com/images/I/81gL+Lz39PL.jpg',
  'https://m.media-amazon.com/images/I/71Y83Wq-x3L.jpg'
];

const sampleFramesGuardians = [
  'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzgwNV5BMl5BanBnXkFtZTgwNDU3NDU2MTE@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BNzJkMTJhYzQtMTIyNC00NzliLThlODAtNjFlMTA1NWFjMTgxXkEyXkFqcGdeQXVyMTA3MDExNDE4._V1_.jpg',
  'https://lumiere-a.akamaihd.net/v1/images/image_1ab47926.jpeg?region=0%2C0%2C540%2C810',
  'https://m.media-amazon.com/images/M/MV5BN2RkNmY4Y2EtZDliZi00MTY2LWIwODAtNDkwOWE5ZDFiOWYwXkEyXkFqcGdeQXVyMTA1NjM0NzU2._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/I/71s8p0yvHmL.jpg'
];

const sampleFramesBlackWidow = [
  'https://m.media-amazon.com/images/M/MV5BMzQyNTQyYmYtYzAwZS00ODQxLWFlODQtMjZkMmM4ZTdiNjBjXkEyXkFqcGdeQXVyODIyOTEyMTQ@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BNjlkNTA2ZDItYjI1MS00YjcxLWI0M2ItNmIxZDYxMzk2NDI5XkEyXkFqcGdeQXVyODIyOTEyMTQ@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BN2EwMjFmMDctZDdhMC00MThkLWE5ZjAtZTllODIzYThlZmQzXkEyXkFqcGdeQXVyODIyOTEyMTQ@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMjEzMjAyOTIxMV5BMl5BanBnXkFtZTcwMzY5NjU0NA@@._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/I/71y80k9wSCL.jpg'
];


const Frame= () => {
  return (
    <div>
      <div style={{ padding: 20, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        <h2 style={{ fontFamily: "'Cinzel Decorative', serif", color: 'gold', width: '100%', textAlign: 'center' }}>
          🎞 Marvel Movie Posters
        </h2>

        {/* First Row of 5 Posters */}
        <FrameByFramePreview
          poster="https://upload.wikimedia.org/wikipedia/commons/7/72/CasablancaPoster-Gold.jpg"
          frameImages={sampleFramesIronMan}
        />
        <FrameByFramePreview
          poster="https://lumiere-a.akamaihd.net/v1/images/avengers_endgame_poster_c3a2f7c0.jpeg?region=0%2C0%2C800%2C1200"
          frameImages={sampleFramesAvengers}
        />
        <FrameByFramePreview
          poster="https://i.pinimg.com/originals/1f/28/7f/1f287f99cf2a12903ce83d5a024220b3.jpg"
          frameImages={sampleFramesSpiderman}
        />
        <FrameByFramePreview
          poster="https://m.media-amazon.com/images/M/MV5BNjg2MzIwMDQxMF5BMl5BanBnXkFtZTgwNTU2NDg4NjM@._V1_FMjpg_UX1000_.jpg"
          frameImages={sampleFramesBlackPanther}
        />
        <FrameByFramePreview
          poster="https://m.media-amazon.com/images/I/81I+rA851JL.jpg"
          frameImages={sampleFramesCaptainAmerica}
        />

        {/* Second Row of 5 Posters */}
        <FrameByFramePreview
          poster="https://m.media-amazon.com/images/M/MV5BOGE4NzExYzMtZTMxZi00ODIzLTkwZGQtYmZmYTMzMmM3NTYzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
          frameImages={sampleFramesThor}
        />
        <FrameByFramePreview
          poster="https://m.media-amazon.com/images/I/814Y70J6jKL._AC_UF894,1000_QL80_.jpg"
          frameImages={sampleFramesHulk}
        />
        <FrameByFramePreview
          poster="https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjgxMV5BMl5BanBnXkFtZTgwMDE2Mzc0NzE@._V1_.jpg"
          frameImages={sampleFramesDrStrange}
        />
        <FrameByFramePreview
          poster="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzgwNV5BMl5BanBnXkFtZTgwNDU3NDU2MTE@._V1_.jpg"
          frameImages={sampleFramesGuardians}
        />
        <FrameByFramePreview
          poster="https://m.media-amazon.com/images/M/MV5BMzQyNTQyYmYtYzAwZS00ODQxLWFlODQtMjZkMmM4ZTdiNjBjXkEyXkFqcGdeQXVyODIyOTEyMTQ@._V1_.jpg"
          frameImages={sampleFramesBlackWidow}
        />
      </div>
    </div>
  );
};

export default Frame;