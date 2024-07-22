import Curriculum from './Curriculum'
import clsx from "clsx";

function App() {
  

  return (
    <div
    className={clsx(
      "h-[100vh] w-[100vw]",
      "font-sans font-medium text-base/7 tracking-wide text-[#5E5E62]",
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
