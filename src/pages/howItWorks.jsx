import '../styles/how.css'

export function How(){
    return (
        <section className="howSec" id='howSection'>
            <div className="howContent">
                <h2 className="itemTitle" >How It Works</h2>
                <ul className="list paraColor">
                    <li className="listItem">Bring your cloth at our Shop</li>
                    <li className="listItem">Give your measurements</li>
                    <li className="listItem">Wait for a week or two</li>
                    <li className="listItem">Come again and take your Attire</li>
                </ul>
            </div>
            <div className="imgDiv">
                <img className="image" src="../../machine.jpg" />
            </div>
        </section>
    )
}