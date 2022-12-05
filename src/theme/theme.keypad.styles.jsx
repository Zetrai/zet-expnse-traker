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
  Theme: default
  */
  .hg-theme-default {
    height: 100%;
  }
  .hg-rows {
    height: 100%;
  }
  .hg-row {
    height: 75px;
  }
  .hg-button {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    box-shadow: none;
    span {
      border-radius: 50%;
      height: 100%;
      width: 40%;
      text-align: center;
      padding: 14% 0;
    }
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
    background: ${THEME.black};
    color: white;
    span {
      background: ${THEME.grey};
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
