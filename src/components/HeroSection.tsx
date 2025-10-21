import { cn } from "../lib/utils";

export const HeroSection = () => {
    return (
        <section id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="w-full flex justify-center items-center">
                        <div
                            className={cn(
                            "bg-card p-2 mt-20 sm:mt-20 md:mt-0 lg:mt-0 shadow-xs flex flex-col rounded-full items-center",
                            "w-50 h-50 sm:w-50 sm:h-50 md:w-full md:h-full lg:w-full lg:h-full"
                            )}
                        >
                            <div
                            id="hero-photo-body"
                            className="w-full h-full rounded-full overflow-hidden"
                            ></div>
                        </div>
                    </div>
                    
                    <div className="space-y-8">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            <span className="">Nice to meet you, I'm</span>
                            <span className="text-primary"> Giann Lowell</span>
                            <span> Evale</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto">
                            Full Stack Developer with 7+ years of experience in creating stellar projects across multiple platforms. Pursuing excellence in building and deploying scalable applications. Currently focused on integrating AI technologies into projects to drive innovation and enhance user experiences.
                        </p>
                        <div className="pt-4">
                            <a href="#projects" className="cosmic-button">
                                <i className="bi bi-arrow-down font-bold"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};