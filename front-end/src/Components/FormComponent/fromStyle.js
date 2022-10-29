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
    height: 40px;
    margin-top: 15px;
    border: none;
    outline: none;
    padding-left: 5px;
    background-color: #F2F6F4;
    border-radius: 9px;
    color: #525252;
  }

  button {
    margin-top: 20px;
    width: 100%;
    height: 45px;
    border-radius: 9px;
    background-color: #8DA7F8;
    outline: none;
    border: 2px solid #000;
    cursor: pointer;
    transition: border-color .2s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:hover {
    border-color: #fafafa;
  }

  button:disabled {
    cursor: default;
  }

  button:disabled:hover {
    border-color: #000;
  }

`;