import PageTemplate from "../components/Page";
import image1 from '../assets/zahradni1.png';
import image2 from '../assets/zahradni2.png';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image1.jpg';
import image7 from '../assets/image2.jpg';
import image8 from '../assets/image3.jpg';
import image9 from '../assets/image4.jpg';


function zahradni() {
    return ( 
        <>
        <PageTemplate
        title="zahradní domky"
        description1="Zahradní domky nabízejí široké možnosti využití pro každého. Mohou sloužit jako praktické místo pro zahradní nářadí, skladovací prostor, domácí dílna nebo doplněk k přístřešku pro auto."
        description2="Díky své variabilitě je můžete využít i jako domácí kancelář, saunu, sprchu, prostor pro skladování bazénového vybavení nebo jako zázemí pro děti a sportovce. Zahradní domek se snadno promění i v útulné místo pro posezení a odpočinek."
        images={[image1, image2, image3, image4, image5,image6, image7, image8,image9]}
        mainImage1={image1}
        mainImage2={image2}
        contactDescription="Hledáte funkční a stylové řešení pro svou zahradu? Kontaktujte nás a společně vytvoříme zahradní domek přesně podle vašich představ!"
        contactLink="/kontakt"
        />
        </>

     );
}

export default zahradni;