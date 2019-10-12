import React, { useState } from 'react';
import Portfolio from './components/Portfolio';
import ThemeToggle from './components/ThemeToggle';

export const ThemeContext = React.createContext();
function App() {
  const [isInSpaceMode, toggleSpaceMode] = useState(false);
  return (
    <div>
      <ThemeContext.Provider value={{isInSpaceMode: isInSpaceMode}}>
        <ThemeToggle toggler={toggleSpaceMode} />
        <Portfolio />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;