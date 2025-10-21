export const AboutMe = () => {
    return (
        <section id="about" 
            className="py-24 px-4 relative">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    What I
                    <span className="text-primary"> DO</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
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
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <i className="bi bi-phone h-6 w-6 text-primary"></i>
                            </div>
                            <div className="text-left pl-4">
                                <h4 className="font-semibold text-lg">Mobile Development</h4>
                                <p className="text-muted-foreground">Building high-performance apps for Android and iOS.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <i className="bi bi-database h-6 w-6 text-primary"></i>
                            </div>
                            <div className="text-left pl-4">
                                <h4 className="font-semibold text-lg">Backend Development</h4>
                                <p className="text-muted-foreground">Building scalable APIs, optimizing databases, and delivering secure, high-performance server-side solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <i className="bi bi-gear h-6 w-6 text-primary"></i>
                            </div>
                            <div className="text-left pl-4">
                                <h4 className="font-semibold text-lg">DevOps Development</h4>
                                <p className="text-muted-foreground">Building automating workflows, managing CI/CD pipelines, and deploying scalable applications.</p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <i className="bi bi-cpu h-6 w-6 text-primary"></i>
                            </div>
                            <div className="text-left pl-4">
                                <h4 className="font-semibold text-lg">AI Integration</h4>
                                <p className="text-muted-foreground">Building APIs, automation tools, and frameworks to enhance app functionality with AI features like chatbots, recommendations, and analytics.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};