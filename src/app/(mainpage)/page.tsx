import Hero from "@/components/Home/Hero";
import Cards from "@/components/Home/Cards";
import Benefits from "@/components/Home/Benefits";
import AboutUs from "@/components/Home/AboutUs";
export default function Home() {
    return(
        <main>
            <Hero />
            <Cards />
            <Benefits />
            <AboutUs />
        </main>
    );
}