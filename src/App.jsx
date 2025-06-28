import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

const colorList = [
  "red",
  "blue",
  "pink",
  "green",
  "black",
  "orange",
  "purple",
  "teal",
  "yellow",
  "indigo",
];

function App() {
  const [color, setColor] = useState("olive");
  const [mode, setMode] = useState("light"); 
  const [history, setHistory] = useState([]);

  const textColor = mode === "dark" ? "text-white" : "text-black";

  
  useEffect(() => {
    if (color && (history.length === 0 || history[0] !== color)) {
      setHistory([color, ...history].slice(0, 10)); 
    }
  }, [color]);

  const handleRandomColor = () => {
    const randomColor = colorList[Math.floor(Math.random() * colorList.length)];
    setColor(randomColor);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    alert(`Copied "${color}" to clipboard!`);
  };

  const toggleMode = () => setMode(mode === "light" ? "dark" : "light");

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <header className="w-full px-6 py-4 max-w-4xl mx-auto relative">
      <h1
      className={`absolute left-1/2 transform -translate-x-1/2 text-4xl font-extrabold uppercase tracking-wide ${textColor} whitespace-nowrap`}
      >
        🎨 Background Changer
      </h1>


  <div className="absolute top-4 right-6">
    <DarkModeToggle mode={mode} toggleMode={toggleMode} />
  </div>
</header>

      <p className={`mt-2 mb-6 text-xl font-medium ${textColor}`}>
        Current Color: <span className="font-bold">{color}</span>
      </p>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl px-6 mx-auto">
        {colorList.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            className={`px-5 py-2 rounded-full text-white capitalize font-medium shadow transition-transform hover:scale-105 ${
              color === c ? "ring-4 ring-white" : ""
            }`}
            style={{ backgroundColor: c }}
          >
            {c}
          </button>
        ))}

        <button
          onClick={handleRandomColor}
          className="px-5 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full shadow hover:scale-105 transition"
        >
          Random
        </button>

        <button
          onClick={copyToClipboard}
          className="px-5 py-2 bg-black text-white font-semibold rounded-full shadow hover:bg-gray-800 transition"
        >
          Copy Color
        </button>
      </div>

      {/* Color history */}
      {history.length > 0 && (
        <section className="mt-10 max-w-4xl w-full px-6 mx-auto">
          <h2 className={`text-2xl font-semibold mb-4 ${textColor}`}>Color History</h2>
          <div className="flex flex-wrap gap-3">
            {history.map((c, i) => (
              <button
                key={`${c}-${i}`}
                onClick={() => setColor(c)}
                className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
                style={{ backgroundColor: c }}
                title={c}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
