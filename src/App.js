import React from 'react';
import ThemeButton from './practice/button';
import { ThemeContext, themes } from './practice/theme';

function Toolbar(props) {
  return (
    <ThemeButton onClick={props.changeTheme}>
      Change Theme
    </ThemeButton>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      theme: themes.dark,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: 
          state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <section>
          <ThemeButton />
        </section>
      </div>
    );
  }
}




















