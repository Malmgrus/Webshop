import Hero from "./content";
import Navigation from "./header";
import Products from "./products";
import Footer from "./Footer";

function Home() {
    return (
        <>
            <div className="background">
                <Navigation />
                <Hero />
                
            </div>
            <Products />
            <Footer />
        </>
    )
};

export default Home;