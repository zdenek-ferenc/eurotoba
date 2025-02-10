import PageTemplate from "../components/Page";
import image1 from '../assets/tiny1.png';
import image2 from '../assets/tiny2.png';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image1.jpg';
import image7 from '../assets/image2.jpg';
import image8 from '../assets/image3.jpg';
import image9 from '../assets/image4.jpg';


function tiny() {
    return ( 
        <>
        <PageTemplate
        title="Tiny house"
        description1="Tiny house je ideální řešení pro trvalé bydlení v malém prostoru. Tyto malé domky mohou být mobilní na podvozku s koly, nebo stabilně umístěné na patkách. Jejich kompaktní design přináší maximální využití prostoru, který je plně přizpůsoben vašim potřebám."
        description2="Díky malé obytné ploše jsou energeticky nenáročné, což znamená nižší náklady na provoz a šetrnost k životnímu prostředí. I přes své rozměry však nabízejí plnohodnotné a pohodlné bydlení."
        images={[image1, image2, image3, image4, image5,image6, image7, image8,image9]}
        mainImage1={image1}
        mainImage2={image2}
        contactDescription="Pokud hledáte praktické, moderní a ekologické řešení bydlení, kontaktujte nás. Rádi vám pomůžeme s realizací vašeho vysněného tiny housu!"
        contactLink="/kontakt"
        />
        </>

     );
}

export default tiny;