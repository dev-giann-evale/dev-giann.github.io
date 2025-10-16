import { AboutMe } from "../components/AboutMe";
import { Background } from "../components/Background";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { SkillsSection } from "../components/SkillsSection";
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
                <AboutMe/>
                <SkillsSection/>
            </main>
            {/* Footer */}
        </div>
    );
};