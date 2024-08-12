import SideBar from "./components/SideBar";
import ToggleTheme, { ThemeMode } from "./components/ToggleTheme";

export default function App() {
  return (
    <div className={`${ThemeMode() && "dark"}`}>
      <main className="flex min-h-screen flex-col bg-neutral-100 dark:bg-neutral-900 ">
        <nav className="grid grid-cols-3 p-8 items-center">
          <h1 className="text-xl font-semibold dark:text-white ">React Project Manager</h1>
          <span className="justify-self-center text-blue-600 font-mono">
            Easily manage your projects and tasks
          </span>
          <ToggleTheme />
        </nav>
      <SideBar />
      </main>
    </div>
  );
}