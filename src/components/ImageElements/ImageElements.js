import './ImageElements.css'
import test from '../../assets/HOME-IMAGE.png'

export const ImageElements = ({image, description}) => {
    return (
        <div className={"circle-container"}>
            <mask/>
            <img className={"circle-element"} src={image} />
            <p className={"element-text"}>{description}</p>
        </div>
    )
}

