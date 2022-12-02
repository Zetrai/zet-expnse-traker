import React, { useState } from 'react';

import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

import { ExpensesContainer, ShowPad } from './expenses.styles';
import { KeypadTheme } from '../../../theme/theme.keypad.styles.jsx';

const Expenses = () => {
  const keypad = {
    default: ['1 2 3', '4 5 6', '7 8 9', '{hide} 0 {bksp}'],
  };
  const display = {
    '{bksp}': '⌫',
    '{hide}': '⇓',
  };
  const [hidePad, toggleHide] = useState(false);
  const [expensesValue, setExpenses] = useState(0);
  const onChange = (input) => {
    setExpenses(input);
    console.log('Input changed', input);
  };

  const onKeyPress = (button) => {
    if (button.includes('hide')) {
      toggleHide(!hidePad);
    }
    console.log('Button pressed', button);
  };
  return (
    <ExpensesContainer>
      {expensesValue}
      <KeypadTheme>
        {!hidePad ? (
          <Keyboard
            onChange={onChange}
            onKeyPress={onKeyPress}
            layout={keypad}
            theme='hg-theme-default hg-layout-numeric numeric-theme dark-theme'
            display={display}
          />
        ) : (
          <ShowPad
            onClick={() => {
              onKeyPress('hide');
            }}
          >
            ⇑
          </ShowPad>
        )}
      </KeypadTheme>
    </ExpensesContainer>
  );
};

export default Expenses;
