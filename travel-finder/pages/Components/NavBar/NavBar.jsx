import Style from "../NavBar/NavBar.module.css";


 function NavBar() {
    return(
        <div>
            <div className={Style.NavBar}>
            <h1 className={Style.Title}>Travel Finder</h1>
            <div className={Style.LinksContainer}>
            <h2 className={Style.Links}>About</h2>
            <h2 className={Style.Links}>Download Today</h2>
            </div>
            </div>
        </div>
    );
}

export default NavBar;