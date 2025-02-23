// src/DosEmulator.js
import React, { useEffect, useRef } from 'react';

const DosEmulator = () => {
  const dosContainerRef = useRef(null);

  useEffect(() => {
    if (!dosContainerRef.current) {
      console.error("Container ref is null. Check your JSX.");
      return;
    }

    if (!window.Dos) {
      console.error("JS-DOS v8 is not loaded. Check your <script> tag in index.html.");
      return;
    }

    // Initialize the DOS emulator using the onload callback.
    window.Dos(dosContainerRef.current, {
      wdosboxUrl: "https://v8.js-dos.com/latest/wdosbox.js",
      onload: (dosInstance) => {
        // Now that dosInstance is ready, call run()
        dosInstance.run("https://v8.js-dos.com/games/freedoom-0.11.3.jsdos");
      }
    });
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <h1>DOS Emulator (JS-DOS v8)</h1>
      <div
        ref={dosContainerRef}
        style={{
          width: "100%",
          height: "calc(100% - 2rem)", // Adjust height to account for the header
          border: "1px solid #000",
          marginTop: "1rem",
        }}
      >
        Loading DOS...
      </div>
    </div>
  );
};

export default DosEmulator;
