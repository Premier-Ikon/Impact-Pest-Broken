import './HomeScreen.css';
import Navbar from '../../components/Navbar/Navbar'
import {Button} from '../../components/Buttons'
import {ImageElements} from "../../components/ImageElements/ImageElements";
import ResidentialImage from '../../assets/RESIDENTIAL-IMAGE.png'
import CommercialImage from '../../assets/COMMERCIAL-IMAGE.png'
import EcoFriendlyImage from '../../assets/ECO-FRIENDLY-IMAGE.png'
import SolutionsImage from '../../assets/SOLUTIONS-IMAGE.png'

function HomeScreen() {
    return (
        <div className="HomeScreen">
            <div className="home-image-container">
                <div className="mask">
                    <div className="welcome-container">
                        <div className="welcome-header">
                            <h1>Welcome to</h1>
                            <h1>Impact Pest Pros</h1>
                        </div>
                        <div className="welcome-body">
                            <h3>Your Premier Pest Solutions</h3>
                        </div>
                    </div>
                    <div className='welcome-buttons'>
                        <Button buttonStyle={"btn--common"}>Services</Button>
                        <Button buttonStyle={"btn--common"}>About Us</Button>
                    </div>
                </div>
            </div>
            <div className="offerings-container">
                <div className="offerings-header">
                    <h2>Offerings</h2>
                </div>
                <div className="offerings-elements">
                    <ImageElements image={ResidentialImage} description={"Residential"}/>
                    <ImageElements image={CommercialImage} description={"Commercial"}/>
                    <ImageElements image={EcoFriendlyImage} description={"Eco-Friendly"}/>
                    <ImageElements image={SolutionsImage} description={"Solutions"}/>
                </div>

            </div>
        </div>
    );
}

export default HomeScreen;