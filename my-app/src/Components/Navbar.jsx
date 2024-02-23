import "./Navbar.css"
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1 className="title">Title</h1>

            </div>
            <div className="navbar-right">
                <a href="#home">Home</a>
                <a href="#About">About</a>
                <a href="#Blog">Blog</a>
                <a href="#Contact">Contact</a>
                <button className="Button1" onClick={()=>console.log("clicking nav")}>Button</button>
            </div>
        </nav>

    );
}

export default Navbar;