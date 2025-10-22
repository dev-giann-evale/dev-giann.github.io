export const AboutMe = () => {
    return (
        <section id="about" 
            className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    What I
                    <span className="text-primary"> DO</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <i className="bi bi-code-slash text-xl text-primary"></i>
                            </div>
                            <div className="text-left pl-4">
                                <h4 className="font-bold text-xl">Web Development</h4>
                                <p className="text-muted-foreground text-lg">Creating responsive web applications with modern frameworks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <i className="bi bi-phone text-xl text-primary"></i>
                            </div>
                            <div className="text-left pl-4">
                                <h4 className="font-bold text-xl">Mobile Development</h4>
                                <p className="text-muted-foreground text-lg">Building high-performance apps for Android and iOS.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <i className="bi bi-database text-xl text-primary"></i>
                            </div>
                            <div className="text-left pl-4">
                                <h4 className="font-bold text-xl">Backend Development</h4>
                                <p className="text-muted-foreground text-lg">Building scalable APIs, optimizing databases, and delivering secure, high-performance server-side solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <i className="bi bi-gear text-xl text-primary"></i>
                            </div>
                            <div className="text-left pl-4">
                                <h4 className="font-bold text-xl">DevOps Development</h4>
                                <p className="text-muted-foreground text-lg">Building automating workflows, managing CI/CD pipelines, and deploying scalable applications.</p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <i className="bi bi-cpu text-xl text-primary"></i>
                            </div>
                            <div className="text-left pl-4">
                                <h4 className="font-bold text-xl">AI Integration</h4>
                                <p className="text-muted-foreground text-lg">Building APIs, automation tools, and frameworks to enhance app functionality with AI features like chatbots, recommendations, and analytics.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};