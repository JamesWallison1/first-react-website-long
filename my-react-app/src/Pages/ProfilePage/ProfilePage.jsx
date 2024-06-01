import About from './About/About.jsx';
import './ProfilePage.css'
import ProfilePageImg from './ProfilePageImg/ProfilePageImg';
import WhereIHaveWorked from './WhereIHaveWorked/WhereIHaveWorked.jsx';
import WhoIHaveWorked from './WhoIHaveWorked/WhoIHaveWorked.jsx';
import FooterComp from "../../Components/FooterComp/FooterComp.jsx";
import CopyRight from "../../Components/CopyRightComp/CopyRight.jsx";

function ProfilePage(){
    return(
        <>
            <h1 id='hey-oli'>Hey 👋🏼 I'm Oli </h1>
            <div className="product-img-container">
                <ProfilePageImg url='https://framerusercontent.com/images/wJINOk3BFAbQRx6ZySXfbltPxU.jpg' alt='Oli'/>
                <ProfilePageImg url='https://framerusercontent.com/images/O3Foxt0XkzTsjGc74Ap0Hrxtz4c.jpg' alt='Oli-2'/>
            </div>
            <About para='About' h1P='A freelance designer based in the UK. I combine my experience in product and brand to solve problems, tell stories, and create compelling experiences.'/>
            <About para='Experience' h1P='Where I&apos;ve worked'/>
            <div className="Working-container">
                <div className="working-container-container">
                    <WhereIHaveWorked year='2017 - Present' name='OH.STUDIO' freelance='Freelance Designer' para='Director'/>
                </div>
                
                <div className="working-container-container">
                    <WhereIHaveWorked year='2021 - Present' name='Friendly Studio' freelance='Lead Product Designer' para='Freelance'/>
                </div>

                <div className="working-container-container">
                    <WhereIHaveWorked year='2022' name='R/GA' freelance='Senior Visual Designer' para='Freelance'/>
                </div>

                <div className="working-container-container">
                    <WhereIHaveWorked year='2021' name='R/GA' freelance='Senior Visual Designer' para='Freelance'/>
                </div>

                <div className="working-container-container">
                    <WhereIHaveWorked year='2021' name='AKQA' freelance='Senior Designer' para='Freelance'/>
                </div>

                <div className="working-container-container">
                    <WhereIHaveWorked year='2020' name='AKQA' freelance='Senior Designer' para='Freelance'/>
                </div>

                <div className="working-container-container">
                    <WhereIHaveWorked year='2019' name='UI Centric' freelance='Senior Product Designer' para='Freelance'/>
                </div>

                <div className="working-container-container">
                    <WhereIHaveWorked year='2017' name='Agency TK' freelance='Senior Digital Designer' para='Permanent'/>
                </div>

                <div className="working-container-container">
                    <WhereIHaveWorked year='2012' name='Agency TK' freelance='Digital Designer' para='Permanent'/>
                </div>

                <div className="working-container-container">
                    <WhereIHaveWorked year='2009' name='Next Level' freelance='Digital Designer' para='Permanent'/>
                </div>

                <div className="working-container-container">
                    <WhereIHaveWorked year='2008' name='Next Level' freelance='Junior Digital Designer' para='Permanent'/>
                </div>
            </div>
            <About para='Clients' h1P='Who I&apos;ve worked with'/>
            <div className="who-container">
                <div className="who-container-container">
                    <WhoIHaveWorked url='https://framerusercontent.com/images/nXLdc1LsU15dk6AODEpMgByLDw.png?scale-down-to=512' alt='EuroSport'/>
                </div>

                <div className="who-container-container">
                    <WhoIHaveWorked url='https://framerusercontent.com/images/roAzNhDBr8shtI8EFOALn1BTMO0.png?scale-down-to=512' alt='R/GA'/>
                </div>

                <div className="who-container-container">
                    <WhoIHaveWorked url='https://framerusercontent.com/images/vzRTkTnoLuK5zvS2serU2qCb4.png?scale-down-to=512' alt='Nike'/>
                </div>

                <div className="who-container-container">
                    <WhoIHaveWorked url='https://framerusercontent.com/images/DFu6Bri5cuYIVyEC6OTxtuZC6w.png?scale-down-to=512' alt='5 circle'/>
                </div>

                <div className="who-container-container">
                    <WhoIHaveWorked url='https://framerusercontent.com/images/IDRNrtKWyB6T6o3dY4mUDqueC0.png?scale-down-to=512' alt='Schuh'/>
                </div>

                <div className="who-container-container">
                    <WhoIHaveWorked url='https://framerusercontent.com/images/X5Lg2eapOCFOhSpAFsZNTW9BlY.png?scale-down-to=512' alt='MuscleGun'/>
                </div>

                <div className="who-container-container">
                    <WhoIHaveWorked url='https://framerusercontent.com/images/PCQIe7uLIcRFBG5bKFWCX3niBek.png?scale-down-to=512' alt='AKQA'/>
                </div>

                <div className="who-container-container">
                    <WhoIHaveWorked url='https://framerusercontent.com/images/8w3YBn3xA3P0u5w43PGhPo1jpYA.png?scale-down-to=512' alt='WGC'/>
                </div>

                <div className="who-container-container">
                    <WhoIHaveWorked url='https://framerusercontent.com/images/LZKUjkgnsVfFzQQN8ia8Vsx05Gc.png?scale-down-to=512' alt='5'/>
                </div>

                <div className="who-container-container">
                    <WhoIHaveWorked url='https://framerusercontent.com/images/0SV0avmvDSqmXrnokG46LzlhDY.png?scale-down-to=512' alt='Correlated'/>
                </div>

                <div className="who-container-container">
                    <WhoIHaveWorked url='https://framerusercontent.com/images/OcncVh5JYd0fPDgeMql6apXe7eU.png?scale-down-to=512' alt='Here' cssStyle={{transform: 'invert(0)'}}/>
                </div>

                <div className="who-container-container">
                    <WhoIHaveWorked url='https://framerusercontent.com/images/370YdQkcdjKWJ5KnsDqECHExB3c.png?scale-down-to=512' alt='ZeroLight'/>
                </div>
            </div>

            <FooterComp/>
            <CopyRight/>
        </>
    );
}

export default ProfilePage