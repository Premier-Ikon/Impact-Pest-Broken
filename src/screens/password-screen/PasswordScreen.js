import './PasswordScreen.css'
import LowerElement from "../../components/LowerElement/LowerElement";
import {Button} from "../../components/Buttons";


function PasswordScreen() {
    return(
        <div>
            <div className="background-image">
                <div className="mask">
                    <div className="text-content">
                        <div className="header-text">
                            <p className="large-text">UNDER</p>
                            <p className='large-text'>CONSTRUCTION</p>
                        </div>
                        <div className="central-text">
                            <p className="small-text">NEW AND IMPROVED COMING SOON!</p>
                        </div>
                    </div>
                    <div className="lower-elements">
                        <Button buttonStyle={"btn--circle"} buttonIcon={"fa-brands fa-instagram"} onClick={() => window.open( 'https://www.instagram.com/impactpestpros/', '_blank')}/>
                        <Button buttonStyle={"btn--circle"} buttonIcon={"fa-brands fa-facebook-f"} onClick={() => window.open( 'https://www.facebook.com/impactpestpros', '_blank')}/>
                        <Button buttonStyle={"btn--circle"} buttonIcon={"fa-solid fa-paper-plane"} onClick={() => window.open( "mailto: info@impactpestpros.com?subject=Online Inquiry")}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordScreen;