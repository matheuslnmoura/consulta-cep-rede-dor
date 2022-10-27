import styled from 'styled-components';

export const Form = styled.form`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  input {
    width: 100%;
    height: 50px;
    margin-top: 15px;
    border: none;
    outline: none;
    padding-left: 5px;
  }

  button {
    margin-top: 20px;
    width: 100%;
    height: 50px;
    border-radius: 15px;
    background-color: #000;
    outline: none;
    border: 1px solid #000;
    cursor: pointer;
    transition: border-color .2s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:hover {
    border-color: #646cff;
  }

  button:disabled {
    cursor: default;
  }

  button:disabled:hover {
    border-color: #000;
  }

`;