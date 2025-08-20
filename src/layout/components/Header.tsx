import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../shared/assets/logo.svg";
import { Clapperboard, Film, Heart, Moon, Search, Sun } from "lucide-react";

const Header = () => {
    const [darkMode, setDarkMode] = useState(true);
    const handleMode = () => {
        document.documentElement.classList.toggle("dark");
        setDarkMode(!darkMode);
    };
    return (
        <header className="fixed pt-2 top-0 left-0 w-full z-10 backdrop-blur-md bg-black/80 border-b border-gray-800 flex justify-center">
            <nav className="flex container mx-auto items-center">
                <div className="flex-1">
                    <NavLink to={"/"}>
                        <img src={logo} alt="" />
                    </NavLink>
                </div>

                <ul className="flex  items-center">
                    <li>
                        <NavLink
                            end={true}
                            to={"/"}
                            className={({ isActive }) =>
                                `${
                                    isActive
                                        ? "text-[#C61F1F]"
                                        : "dark:text-[#A1A1A1] dark:transition-all text-[black]"
                                } transition-all flex flex-col justify-center items-center gap-2`
                            }
                        >
                            <Film />
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            end={true}
                            to={"/movie"}
                            className={({ isActive }) =>
                                `${
                                    isActive
                                        ? "text-[#C61F1F]"
                                        : "dark:text-[#A1A1A1] dark:transition-all text-[black]"
                                } transition-all flex flex-col justify-center items-center gap-2`
                            }
                        >
                            <Clapperboard />
                            <span>Movies</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            end={true}
                            to={"/"}
                            className={({ isActive }) =>
                                `${
                                    isActive
                                        ? "text-[#C61F1F]"
                                        : "dark:text-[#A1A1A1] dark:transition-all text-[black]"
                                } transition-all flex flex-col justify-center items-center gap-2`
                            }
                        >
                            <Search />
                            <span>Search</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            end={true}
                            to={"/"}
                            className={({ isActive }) =>
                                `${
                                    isActive
                                        ? "text-[#C61F1F]"
                                        : "dark:text-[#A1A1A1] dark:transition-all text-[black]"
                                } transition-all flex flex-col justify-center items-center gap-2`
                            }
                        >
                            <Heart />
                            <span>Favorite</span>
                        </NavLink>
                    </li>
                </ul>

                <div>
                    <select className="text-red">
                        <option value="uz">🇺🇿uz</option>
                        <option value="uz">🇷🇺ru</option>
                        <option value="uz">🇺🇸eng</option>
                    </select>
                </div>

                <div>
                    <button>Login</button>
                </div>
                <div
                    className="cursor-pointer select-none"
                    onClick={handleMode}
                >
                    {darkMode ? (
                        <Moon className="text-[#bf1d1d] hover:opacity-80" />
                    ) : (
                        <Sun className="text-[#C61F1F] hover:opacity-80" />
                    )}
                </div>
            </nav>
            <h2 className="text-white"></h2>
        </header>
    );
};

export default memo(Header);
