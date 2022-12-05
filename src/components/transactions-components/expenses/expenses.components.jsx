import React, { useState, useRef } from 'react';

import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

import InputNumber from '../../common/input-number/input-number.component';

import { ExpensesContainer } from './expenses.styles';
import { KeypadTheme } from '../../../theme/theme.keypad.styles.jsx';

const Expenses = () => {
  const keyboard = useRef();
  const keypad = {
    default: ['1 2 3', '4 5 6', '7 8 9', 'Clear 0 {bksp}'],
  };
  const display = {
    '{bksp}': '⌫',
  };
  const [expensesValue, setExpenses] = useState(0);
  const onChange = (input) => {
    const re = /^[0-9\b]+$/;
    if (re.test(input)) {
      // check if the input is number and not backspace.
      setExpenses(input);
    } else if (input === 'Clear') {
      setExpenses(0);
      keyboard.current.clearInput();
    } else {
      setExpenses(0);
    }
    // console.log('Input changed', input);
  };

  const onKeyPress = (button) => {
    // console.log('Button pressed', button);
    if (button === 'Clear') {
      keyboard.current.clearInput();
    }
  };
  return (
    <ExpensesContainer>
      <InputNumber input={expensesValue} />
      <KeypadTheme>
        <Keyboard
          keyboardRef={(r) => (keyboard.current = r)}
          onChange={onChange}
          onKeyPress={onKeyPress}
          layout={keypad}
          theme='hg-theme-default hg-layout-numeric numeric-theme dark-theme'
          display={display}
        />
      </KeypadTheme>
    </ExpensesContainer>
  );
};

export default Expenses;
