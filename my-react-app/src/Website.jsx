import Navbar from "./Components/NavComp/Navbar.jsx"
import ProductDes from "./Components/ProductDesComp/ProductDes.jsx";
import ProductImg from "./Components/ProductImgComp/ProductImg.jsx";
import ProductVideo from "./Components/ProductVideo/ProductVideo.jsx";
import videoNum1 from './assets/Videos/the-spinning-thing.mp4';
import ohSupply from './assets/Videos/oh-supply.mp4';
import NYCB from './assets/Videos/NYCB.mp4'
import ProductImgLock from "./Components/ProductImgComp/ProductImgLock.jsx";
import './Website.css'

function Website(){
    return(
        <>
            <Navbar/>
            <ProductDes/>
            <div className="product-img-container">
                <ProductImg url="https://framerusercontent.com/images/kfr022WaJ8YJUyZFmdwCB3pXhs.jpg?scale-down-to=1024" alt="Aire"/>
                <ProductImg url="https://framerusercontent.com/images/QVKFKT3dyGxloXfzzpurVKNMM6M.jpg?scale-down-to=1024" alt="Correlated"/>
            </div>

            <div className="product-img-container">
                <ProductImg url="https://framerusercontent.com/images/AX9PukosNfGVcfXw3YapiYpl9g.jpg?scale-down-to=1024" alt="Channel 5"/>
                <ProductImg url="https://framerusercontent.com/images/BAXywubxN8sAhfJg3AgGgFI.jpg?scale-down-to=1024" alt="Ronald Abram"/>
            </div>

            <div className="product-img-container">
                <ProductVideo videoUrl={videoNum1} alt='Propeller'/>
                <ProductImg url="https://framerusercontent.com/images/3WALBX7nnuG7p85CLjlVmWPDHw.jpg?scale-down-to=1024" alt="Schuh"/>
            </div>

            <div className="product-img-container">
                <ProductImg url="https://framerusercontent.com/images/e3moUZXfgtjYQY4ILakIMaz4n7s.jpg" alt="Paperstreet"/>
                <ProductVideo videoUrl={ohSupply} alt='Propeller'/>
            </div>

            <div className="product-img-container">
                <ProductImg url="https://framerusercontent.com/images/aH1eUgCIIIrbJF7TUlaKAehoI.jpg?scale-down-to=1024" alt="Monokel Eyewear"/>
                <ProductImgLock url='https://framerusercontent.com/images/UbS7rWmAwWxjtwM7oaWwRuGo.jpg?scale-down-to=1024' alt='Lawtrades'/>
            </div>

            <div className="product-img-container">
                <ProductImgLock url='https://framerusercontent.com/images/hQVBeiDNGU2TfeDJALuhawlcto.jpg?scale-down-to=1024' alt="Baselworld"/>
                <ProductVideo videoUrl={NYCB} alt='NYCB'/>
            </div>
        </>
    );
}

export default Website