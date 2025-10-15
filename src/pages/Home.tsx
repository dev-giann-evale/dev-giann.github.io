import { Background } from "../components/Background";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
    return (
        <div className="min-h-screen items-center text-foreground overflow-x-hidden">
            {/* Theme toggle */}
            <ThemeToggle/>
            {/* Background */}
            <Background/>
            {/* Navbar */}
            <Navbar/>
            {/* Main Content */}
            <main>
                <HeroSection/>
            </main>
            {/* Footer */}
        </div>
    );
};