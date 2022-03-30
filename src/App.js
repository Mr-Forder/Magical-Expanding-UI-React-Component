import { motion } from "framer-motion";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <motion.div
        layout
        className="card"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <motion.h2 layout>Welcome, mateyboy</motion.h2>
        {isOpen && (
          <motion.div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              laboriosam a nobis rerum dolore! Voluptas corrupti quod quis
              debitis officiis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
              rem.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
