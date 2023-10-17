import React, { useState } from "react";

const defaultCtx = {
    lenguage: "en",
    setLenguage: () => { },
};

export const LenguageContext = React.createContext(defaultCtx);

const LenguageContextProvider = ({ children }) => {
    const [lenguage, setLenguage] = useState(defaultCtx.lenguage);

    const valorCtx = {
        lenguage,
        setLenguage
    };

    return (
        <LenguageContext.Provider value={valorCtx}>{children}</LenguageContext.Provider>
    );
};

export default LenguageContextProvider;
