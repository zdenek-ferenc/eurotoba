import PageTemplate from "../components/Page";
import image1 from '../assets/strecha1.png';
import image2 from '../assets/strecha2.png';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image1.jpg';
import image7 from '../assets/image2.jpg';
import image8 from '../assets/image3.jpg';
import image9 from '../assets/image4.jpg';


function ostatni() {
    return ( 
        <>
        <PageTemplate
        title="Ostatní služby"
        description1="Nabízíme kompletní rekonstrukce a truhlářské práce na míru, které promění váš domov nebo prostor k nepoznání. Ať už plánujete modernizaci interiéru, renovaci staršího objektu nebo úpravy dle vašich specifických požadavků, jsme tu pro vás."
        description2="Naše truhlářské práce zahrnují výrobu nábytku na míru, schodišť, kuchyní, vestavěných skříní nebo jiných prvků, které vyniknou kvalitou zpracování i designem. Klademe důraz na preciznost, funkčnost a materiály, které vydrží."
        images={[image1, image2, image3, image4, image5,image6, image7, image8,image9]}
        mainImage1={image1}
        mainImage2={image2}
        contactDescription="Chcete dát vašemu bydlení nový život? Kontaktujte nás a rádi vám pomůžeme s realizací každého detailu – od plánování až po finální dokončení!"
        contactLink="/kontakt"
        />
        </>

     );
}

export default ostatni;