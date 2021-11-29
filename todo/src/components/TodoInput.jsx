import React, { useState } from 'react';
import Button from './ui/DeleteButton';

function TodoInput(props) {
  const { onCreate } = props;
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const clickHandler = () => {
    onCreate(inputValue);
    setInputValue('');
  };

  return (
    <div className="row  m-4">
      <div className="col-6">
        <input
          type="text"
          className="form-control col"
          id=""
          value={inputValue}
          placeholder="Type Something"
          onChange={handleOnChange}
        />
      </div>
      <div className="col-4">
        <Button type="info" onClick={clickHandler} label="Create" />
      </div>
    </div>
  );
}

export { TodoInput };
