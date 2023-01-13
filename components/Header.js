import Link from "next/link";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? "dark" : theme;

  return (
    <header className="flex z-50 w-full h-14 backdrop-blur  bg-white/25 dark:bg-gris/30 sticky top-0">
      <div class="container max-w-screen-md mx-auto px-5 flex items-center relative">
        <div className="flex items-end">
          <Link href="/">
            <p className="font-bold text-2xl mr-5">Johra</p>
          </Link>
          <Link href="/works">
            <p className="hover:underline px-3">Works</p>
          </Link>
          <a href="https://github.com/Johra444" target="_blank">
            <p className="hover:underline px-3">Github</p>
          </a>
        </div>
        <div className="ml-auto">
          {currentTheme === "dark" ? (
            <button
              className=" h-10 w-10 bg-peach opacity-1 rounded-lg"
              onClick={() => setTheme("light")}
            >
              <SunIcon color={"black"} boxSize={16} />
            </button>
          ) : (
            <button
              className=" h-10 w-10 bg-myPurple opacity-1 rounded-lg"
              onClick={() => setTheme("dark")}
            >
              <MoonIcon color={"white"} boxSize={16} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
