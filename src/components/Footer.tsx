export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative border-t mt-12 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-sm text-muted-foreground">
                <i className="bi bi-c-circle"></i> {new Date().getFullYear()} Giann-Dev, All Rights Reserved
            </p>
            <a href="#hero" 
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <i className="bi bi-arrow-up-circle-fill"></i>
            </a>
        </footer>
    );
};