import { ToastContainer, toast } from "react-toastify";
import { cn } from "../lib/utils";
import { useState } from "react";

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            showToast("Email sent! Please wait for the response and I'll get back to you soon.");
        }, 1500);

        setIsSubmitting(false);
    };
    const showToast = (message: string) => {
        toast.success(message);
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl mb-4 font-bold text-center">
                    Get In
                    <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel Free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <i className="bi bi-envelope h-6 w-6 text-primary"></i>
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:contact.giann.evale@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        contact.giann.evale@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <i className="bi bi-telephone h-6 w-6 text-primary"></i>
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+639388593551"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        +63 (938) 859-3551
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <i className="bi bi-geo-alt h-6 w-6 text-primary"></i>
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        Davao City, Philippines
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <i className="bi bi-linkedin h-6 w-6 text-primary"></i>
                                </div>
                                <div>
                                    <h4 className="font-medium">LinkedIn</h4>
                                    <a href="www.linkedin.com/in/giann-lowell-evale"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        giann-lowell-evale
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">
                            Send a Message
                        </h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> 
                                    Your Name
                                </label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="First name Last name..."
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> 
                                    Email
                                </label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="example@mail.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"> 
                                    Message
                                </label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hi place your message here....."
                                />
                            </div>

                            <button type="submit"
                                disabled={isSubmitting} 
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                                )}>
                                {isSubmitting ? "Send Message" : "Submitting"}
                                <i className="bi bi-send"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};