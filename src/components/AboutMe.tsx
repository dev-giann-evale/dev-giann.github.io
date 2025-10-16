export const AboutMe = () => {
    return (
        <section id="about" 
            className="py-24 px-4 relative">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About 
                    <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
                        <p className="text-muted-foreground">Web Developer description </p>
                        <p className="text-muted-foreground">Web Developer description </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a href="#download-cv" 
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gapa-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <i className="bi bi-code-slash h-6 w-6 text-primary"></i>
                                </div>
                                <div className="text-left pl-4">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">Creating responsive web applications with modern frameworks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gapa-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <i className="bi bi-code-slash h-6 w-6 text-primary"></i>
                                </div>
                                <div className="text-left pl-4">
                                    <h4 className="font-semibold text-lg">Mobile Development</h4>
                                    <p className="text-muted-foreground">Building high-performance apps for Android and iOS.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gapa-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <i className="bi bi-code-slash h-6 w-6 text-primary"></i>
                                </div>
                                <div className="text-left pl-4">
                                    <h4 className="font-semibold text-lg">Backend Development</h4>
                                    <p className="text-muted-foreground">Building scalable APIs, optimizing databases, and delivering secure, high-performance server-side solutions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gapa-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <i className="bi bi-code-slash h-6 w-6 text-primary"></i>
                                </div>
                                <div className="text-left pl-4">
                                    <h4 className="font-semibold text-lg">DevOps Development</h4>
                                    <p className="text-muted-foreground">Building scalable APIs, optimizing databases, and delivering secure, high-performance server-side solutions.</p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gapa-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <i className="bi bi-code-slash h-6 w-6 text-primary"></i>
                                </div>
                                <div className="text-left pl-4">
                                    <h4 className="font-semibold text-lg">AI Integration</h4>
                                    <p className="text-muted-foreground">Building scalable APIs, optimizing databases, and delivering secure, high-performance server-side solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};