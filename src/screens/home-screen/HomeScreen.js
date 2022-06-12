import './HomeScreen.css';
import Navbar from '../../components/Navbar/Navbar'
import {Button} from '../../components/Buttons'
import {IconElement} from "../../components/IconElement/IconElement";
import {ImageElements} from "../../components/ImageElements/ImageElements";
import {FaSearch} from "react-icons/fa"
import ResidentialImage from '../../assets/RESIDENTIAL-IMAGE.png'
import CommercialImage from '../../assets/COMMERCIAL-IMAGE.png'
import EcoFriendlyImage from '../../assets/ECO-FRIENDLY-IMAGE.png'
import SolutionsImage from '../../assets/SOLUTIONS-IMAGE.png'


function HomeScreen() {
    return (
        <div className="HomeScreen">
            <div className="background-image">
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
                <div className="general-header">
                    <h2>Offerings</h2>
                </div>
                <div className="offerings-elements">
                    <ImageElements image={ResidentialImage} description={"Residential"}/>
                    <ImageElements image={CommercialImage} description={"Commercial"}/>
                    <ImageElements image={EcoFriendlyImage} description={"Eco-Friendly"}/>
                    <ImageElements image={SolutionsImage} description={"Solutions"}/>
                </div>
            </div>
            <div className="rodent-control-container">
                <div className="general-header">
                    <h2>How rodent control works</h2>
                </div>
                <div className="rodent-control-elements">
                    <IconElement icon={"fa-solid fa-magnifying-glass"} description={"Rodent inspection"} quote={"Your Impact Pest Pros professional will conduct a thorough inspection to determine where and how rodents are entering your home. "}/>
                    <IconElement icon={"fa-solid fa-user-shield"} description={"Exclusion"} quote={"First, we will remove any rodents from your home. Then, we will seal up entry points to keep them from re-entering your home. "}/>
                    <IconElement icon={"fa-solid fa-house-chimney"} description={"Annual inspection"} quote={"We will conduct an annual inspection each year for as long as you keep your plan. We will inspect previous entry point, as well as new vulnerabilities "}/>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;