// Libs
import React, { createContext, useState, useContext } from "react";

// creating global environment
const OptionContext = createContext();

export default function OptionProvider({ children }) {
  const [hereC1, setHereC1] = useState(''); // curent position
  const [whereC1, setWhereC1] = useState(''); // place to go
  const [floor, setFloor] = useState(0); // current floor
  const [toColor, setToColor] = useState([]); // path between start and end nodes
  let [coordMan, setCoordMan] = useState(0); // coords of yellow pin
  let [coordPin, setCoordPin] = useState(0); // coords of red pin

  return (
    <OptionContext.Provider
      value={{
        hereC1,
        setHereC1,
        whereC1,
        setWhereC1,
        toColor,
        setToColor,
        floor,
        setFloor,
        coordMan,
        setCoordMan,
        coordPin,
        setCoordPin
      }}
    >
      {children}
    </OptionContext.Provider>
  );
}

export function useHereC1() {
  const context = useContext(OptionContext);
  if (!context) throw new Error("useCount must be used within a CountProvider");
  const { hereC1, setHereC1 } = context;
  return { hereC1, setHereC1 };
};

export function useCoordMan() {
    const context = useContext(OptionContext);
    if (!context) throw new Error("useCount must be used within a CountProvider");
    const { coordMan, setCoordMan } = context;
    return { coordMan, setCoordMan };
}

export function useWhereC1() {
    const context = useContext(OptionContext);
    const { whereC1, setWhereC1 } = context;
    return { whereC1, setWhereC1 };
  }

  export function useCoordPin() {
    const context = useContext(OptionContext);
    if (!context) throw new Error("useCount must be used within a CountProvider");
    const { coordPin, setCoordPin } = context;
    return { coordPin, setCoordPin };
}

export function useColor() {
    const context = useContext(OptionContext);
    const { toColor, setToColor } = context;
    return { toColor, setToColor };
}

export function useFloor() {
    const context = useContext(OptionContext);
    const { floor, setFloor } = context;
    return { floor, setFloor };
  }
