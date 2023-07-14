import '../styles/about.css';

export function About()
{
    return (
        <section className="howSec aboutSec" id='AboutSec'>
            <div className="aboutImgDiv">
                <img className="aboutImage" src="../../store.jpg" />
            </div>
            <div className="aboutContent">
                <h2 className='itemTitle'>About Us</h2>
                <p className='paraColor'>Step into our tailor shop, where we bring you the finest attire crafted through two generations of expertise. With meticulous attention to detail, we guarantee flawless garments that capture the essence of classic elegance.</p>
                
            </div>
        </section>
    );
}