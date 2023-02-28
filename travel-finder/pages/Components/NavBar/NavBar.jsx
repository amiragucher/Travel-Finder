import Style from "../NavBar/NavBar.module.css";


 function NavBar() {
    return(
        <div>
            <div className={Style.NavBar}>
            <h1 className={Style.Title}>Travel Finder</h1>
            <ul>
            <li>
            <Link href="/About" className={Style.Links}>About</Link>
            <Link href="/Download" className={Style.Links}>Download Today</Link>
            </li>
            </ul>
            </div>
        </div>
    );
}

export default NavBar;