import '../styles/home.css';
export function Home() {
    return (
        <>
            <section className="homeSec">
                <div className="navbar globalFlex" >
                    <img src="" alt="logo" />
                    <div className='linkNbtn globalFlex'>
                        <ul className="navList globalFlex">
                            <li className="navListItem"><a href="#services" >SERVICES</a></li>
                            <li className="navListItem"><a href="#howSection" >HOW IT WORKS</a></li>
                            <li className="navListItem"><a href="#AboutSec" >ABOUT US</a></li>
                        </ul>
                        <button className="emailBtn" >EMAIL-US</button>
                    </div>
                </div>
                <div className="content">
                    <div className="title">
                        <h1 className="titleCon">OMEX</h1>
                        <h1 className="titleCon">TAILORS</h1>
                    </div>
                    <p className="description" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perspiciatis reiciendis mollitia consequuntur veniam provident labore facilis sequi fugit numquam! </p>
                    <button className="contactBtn">CONTACT</button>
                </div>
            </section>
        </>
    )
}