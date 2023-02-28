import Style from "./About.module.css"

export default function About (){
    return (
        <div className={Style.AboutContiner}>
        <div className={Style.Circle}>
        </div>
            <h2 className={Style.CircleTxt}>
            The Travel Finder app is designed to help you find and support local businesses when you travel. Whether you are looking for a cafe, restaurant or retail store our app will help you. Type in your location find what is available to you wherever you go. Our map will only display locally owned businesses which you can help support by downloading our app today!
            </h2>
        </div>
    )
}