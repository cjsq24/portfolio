import React from 'react';
import { Carousel } from 'antd';

const data = [
   {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco"
   },
   {
      image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland"
   },
   {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling"
   },
   {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco"
   },
   {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland"
   },
   {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling"
   }
];

interface IPortfolio {
   title: string;
   images?: string[];
   description: string;
}

const portfolioList: IPortfolio[] = [
   {
      title: 'Calculadora con TypeScript',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio voluptates velit assumenda itaque rerum mollitia iure, aperiam necessitatibus natus maxime, eaque ea ipsam commodi nisi consequuntur alias at omnis',
      images: [
         'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg',
         'https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg',
         'https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg'
      ]
   },
   {
      title: 'Panel Administrativo en React',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam distinctio obcaecati aliquid commodi qui, similique cum saepe fugit cumque dolorum voluptate maxime inventore itaque laboriosam deserunt aperiam recusandae earum corrupti.',
      images: [
         'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg',
         'https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg',
         'https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg'
      ]
   }
];

const images = [
   { title: '1', url: 'https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648?b=1&k=20&m=1279460648&s=170667a&w=0&h=uZa830sWo8hlFN0Y7FnQ14giNC0Z2EBNuTMuNJeJhQg=' },
   { title: '2', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf48SQxa5o0r1yASNX0sxIsNPkWUxUJdwE8XhZi_VZ66xuFrGWPuuO2ezfJr59OF3RYCE&usqp=CAU' },
   { title: '3', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzkswKOsz0kT0e4vofsH2TUf0-3BhyqZ6NiWvHLyoFVi-lf-P51Xn7t6pcwrB2PClUV3g&usqp=CAU' }
]

const Portfolio: React.FC = () => {

   const showDescription = (index: number) => {
      //Cerramos los divs de descripción
      const skillDescriptionList = document.querySelectorAll(`.l-portfolio-description`) as NodeListOf<HTMLInputElement>;
      skillDescriptionList.forEach(ele => {
         ele.style.height = '0';
      })

      //abrimos el div seleccionado
      const div = document.querySelector(`#l-portfolio-description-${index}`) as HTMLInputElement;
      div.style.height = (div.clientHeight) ? '0' : div.scrollHeight + 'px'
   }

   return (
      <div className="l-container-content">
         <h1 className="l-title">My Portfolio</h1>
         <div className="l-card">
            {portfolioList.map((portfolio, i) => (
               <article key={i} className="l-portfolio-content-item">
                  <header className="l-portfolio-item" onClick={() => showDescription(i)}>
                     <span className="l-portfolio-item-title">{portfolio.title}</span>
                  </header>
                  <main className="l-portfolio-description" id={`l-portfolio-description-${i}`}>
                     {portfolio.images && (
                        <Carousel arrows>
                           {portfolio.images.map((image, i) =>
                              <div key={i}>
                                 <div style={{ backgroundColor: 'gray', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src={image} alt='alt' width={400} height={400} />
                                 </div>
                              </div>
                           )}
                        </Carousel>
                     )}
                     <p className="l-portfolio-description-text">{portfolio.description}</p>
                  </main>
               </article>
            ))}
         </div>
      </div>
   );
};

export default Portfolio;
