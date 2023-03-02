import Style from "../Footer/Footer.module.css"

export default function (){
    return (
        <div className={Style.FooterContainer}>
            <h1 className={Style.FooterTitle}>Travel Finder</h1>
            <div className={Style.FooterInfo}>
            <h3>Contact</h3>
            <h3>Email: travelfinder@gmail.com</h3>
            <h3>Contact Number: + 7877631245</h3>
        </div>
        </div>
        
    )
}