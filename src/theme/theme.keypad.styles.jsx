import styled from 'styled-components';
import THEME from './theme.styles';

export const KeypadTheme = styled.div`
  input {
    width: 100%;
    height: 100px;
    padding: 20px;
    font-size: 20px;
    border: none;
  }

  /*
  Theme: numeric
  */
  .numeric-theme {
    margin: 0 auto;
  }

  .simple-keyboard.hg-theme-default.numeric-theme
    .hg-button.hg-standardBtn.hg-button-at {
    max-width: none;
  }

  /*
  Theme: dark-theme
  */
  .simple-keyboard.dark-theme {
    background-color: ${THEME.black};
    border-radius: 0;
  }

  .simple-keyboard.dark-theme .hg-button {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${THEME.black};
    color: white;
    border: none;
    box-shadow: none;
    span {
      padding: 10px 15px;
      background: ${THEME.grey};
      border-radius: 50%;
    }
  }

  .simple-keyboard.dark-theme .hg-button:active {
    span {
      background: ${THEME.focus};
    }
  }

  #root .simple-keyboard.dark-theme + .simple-keyboard-preview {
    span {
      background: ${THEME.focus};
    }
  }
`;
