import Style from "../NavBar/NavBar.module.css";


 function NavBar() {
    return(
        <div>
            <div className={Style.NavBar}>
            <h1 className={Style.Title}>Travel Finder</h1>
            <h1 className={Style.Links}>About</h1>
            <h1 className={Style.Links}>Download Today</h1>
            </div>
        </div>
    );
}

export default NavBar;