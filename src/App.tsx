import Curriculum from './Curriculum'
import clsx from "clsx";

function App() {
  

  return (
    <div
    className={clsx(
      "h-[100vh] w-[100vw] relative",
      "font-serif font-medium text-base/7 tracking-wide",
      "bg-nubes-pattern bg-no-repeat bg-cover",
      "brightness-120 contrast-100 inset-0", 
      "overflow-hidden overscroll-none",
    )}
    >
      <Curriculum/>
    </div>
  );
}

export default App
