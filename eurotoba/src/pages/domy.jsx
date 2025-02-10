
import PageTemplate from "../components/Page";
import image1 from '../assets/domy1.png';
import image2 from '../assets/domy2.png';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image1.jpg';
import image7 from '../assets/image2.jpg';
import image8 from '../assets/image3.jpg';
import image9 from '../assets/image4.jpg';


function domy() {
    return ( 
        <>
        <PageTemplate
        title="Domy na klíč"
        description1="Rozhodli jste se pro vysněný domov? Nabízíme moderní dřevostavby na klíč, které vynikají rychlou výstavbou. bydlet můžete už během několika měsíců. Navíc jsou cenově dostupnější než zděné domy a přinášejí skvělý poměr ceny a kvality."
        description2="Dřevostavby jsou také neuvěřitelně variabilní a snadno přestavitelné, takže je snadno přizpůsobíte svým potřebám. Ekologické materiály, které používáme, vytvářejí zdravé mikroklima, díky čemuž jsou naše domy šetrné k vám i přírodě."
        images={[image1, image2, image3, image4, image5,image6, image7, image8,image9]}
        mainImage1={image1}
        mainImage2={image2}
        contactDescription="Kontaktujte nás a proměňte svůj sen o ideálním bydlení ve skutečnost. Nabízíme zkušenosti, individuální přístup a kvalitu, na kterou se můžete spolehnout!"
        contactLink="/kontakt"
        />
        </>

     );
}

export default domy;