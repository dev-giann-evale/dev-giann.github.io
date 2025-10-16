export const HeroSection = () => {
    return (
        <section id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="">Hi I'm</span>
                        <span className="text-primary"> Giann Lowell</span>
                        <span> Evale</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto">
                        Full Stack Developer with 7+ years of experience in creating stellar projects across multiple platforms. Pursuing excellence in building and deploying scalable applications. Currently focused on integrating AI technologies into projects to drive innovation and enhance user experiences.
                    </p>
                    <div className="pt-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col item-center animate-bounce">
                        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                        <i className="bi bi-arrow-down text-primary"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};