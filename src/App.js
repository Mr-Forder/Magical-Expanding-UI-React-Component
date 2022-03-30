import { motion } from "framer-motion";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <motion.div
        transition={{ layout: { type: "spring" } }}
        layout
        className="card"
        style={{ borderRadius: "2rem" }}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <motion.h2 layout="position">Welcome, mateyboy</motion.h2>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="expand"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              laboriosam a nobis rerum dolore! Voluptas corrupti quod quis
              debitis officiis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
              rem.
            </p>
            <button>Submit</button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
