import React from "react";

export const themes = {
    light: {
      //  foreground: '#0000000',
        background: '#eeeeee',
    },
    dark: {
     //   foreground: '#ffffff',
        background: '#222222',
    },
};

export const ThemeContext = React.createContext(
    themes.dark //default value
);