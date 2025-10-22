import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    {name: "HTML/CSS", language:["html","css"], image:"/images/html.png", category: "frontend"},
    {name: "Javascript/Typescript", language:[], image:"/images/javascript.webp", category: "frontend"},
    {name: "React", language:[], image:"/images/react.png", category: "frontend"},
    {name: "NextJs", language:[], image:"/images/nextjs.svg", category: "frontend"},
    {name: "Angular", language:["html", "javascript"], image:"/images/angular.png", category: "frontend"},
    {name: "Ionic", language:["html", "javascript"], image:"/images/ionic.png", category: "frontend"},
    {name: "Swift", language:[], image:"/images/swift.png", category: "frontend"},
    {name: "Java", language:[], image:"/images/java.png", category: "frontend"},
    {name: "Kotlin", language:[], image:"/images/kotlin.png", category: "frontend"},
    {name: "Flutter", language:["Dart"], image:"/images/flutter.png", category: "frontend"},

    {name: "ASP.NET", language:["c#"], image:"/images/aspnet.png", category: "backend"},
    {name: "FastAPI", language:["python"], image:"/images/fastapi.png", category: "backend"},
    {name: "PostgreSQL", language:["SQL"], image:"/images/postgresql.png", category: "backend"},

    {name: "Git/Github", language:[], image:"/images/git.png", category: "tools"},
    {name: "Azure", language:[], image:"/images/azure.png", category: "tools"},
    {name: "Docker", language:[], image:"/images/docker.png", category: "tools"},
    {name: "Figma", language:[], image:"/images/figma.png", category: "tools"},
    {name: "VSCode", language:[], image:"/images/vscode.png", category: "tools"},
]

const categories = ["all", "frontend", "backend", "tools"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    const [index, setIndex] = useState<number>(0);
    const [itemsPerView, setItemsPerView] = useState<number>(4);
    const totalSlides = Math.ceil(filteredSkills.length / itemsPerView);

    const startX = useRef<number>(0);
    const currentX = useRef<number>(0);
    const isDragging = useRef<boolean>(false);

    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth < 768) {
                // Tailwind "md" breakpoint = 768px
                setItemsPerView(2);
            } else {
                setItemsPerView(4);
            }
        }

        updateItemsPerView(); // run once on mount
        window.addEventListener("resize", updateItemsPerView);
        return () => window.removeEventListener("resize", updateItemsPerView);
    },[]);

    const handlePrev = () =>
        setIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

    const handleNext = () =>
        setIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

    // ✅ Use React.TouchEvent<HTMLDivElement>
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        startX.current = e.touches[0].clientX;
        isDragging.current = true;
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging.current) return;
        currentX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!isDragging.current) return;
        const diff = startX.current - currentX.current;

        if (Math.abs(diff) > 50) {
        // swipe threshold
        if (diff > 0) handleNext();
        else handlePrev();
        }

        isDragging.current = false;
        startX.current = 0;
        currentX.current = 0;
    };
    
    return (
        <section id="skills" 
            className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category,key) => (
                        <button key={key}
                            onClick={() => {
                                setActiveCategory(category);
                                setIndex(0);
                            }}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}>
                            {category}
                        </button>
                    ))}
                </div>

                <div
                    className="relative w-full max-w-4xl mx-auto overflow-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    >
                    {/* Track */}
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                        const start = slideIndex * itemsPerView;
                        const visibleCards = filteredSkills.slice(start, start + itemsPerView);

                        return (
                            <div
                            key={slideIndex}
                            className="flex w-full flex-shrink-0 justify-center align-items-center gap-4 px-4"
                            >
                            {visibleCards.map((card, i) => (
                                <div
                                key={i}
                                className="w-1/2 bg-white dark:bg-card p-6 rounded-2xl shadow-lg border text-center"
                                >
                                <h3 className="text-primary font-bold mb-5">{card.name}</h3>
                                <img src={card.image} alt={card.name} className="h-32 mx-auto block"></img>
                                <p className="text-gray-500 dark:text-gray-300 mt-5">
                                    {card.language.map((language, key) => (
                                        <span key={key} className="uppercase font-semibold text-xs text-primary">{language} </span>
                                    ))}
                                </p>
                                </div>
                            ))}
                            </div>
                        );
                        })}
                    </div>

                    {/* Arrows */}
                    <button
                        onClick={handlePrev}
                        className="cosmic-button absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full hidden sm:block"
                    >
                        <i className="bi bi-caret-left-fill"></i>
                    </button>
                    <button
                        onClick={handleNext}
                        className="cosmic-button absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full hidden sm:block"
                    >
                        <i className="bi bi-caret-right-fill"></i>
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {Array.from({ length: totalSlides }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-2 w-2 rounded-full ${
                            i === index ? "bg-blue-500 w-4" : "bg-gray-400"
                            } transition-all duration-300`}
                        />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};