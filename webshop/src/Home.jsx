import Hero from "./Hero";
import Navigation from "./Navigation";
import Products from "./products.jsx";
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