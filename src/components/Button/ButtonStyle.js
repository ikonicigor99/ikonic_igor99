import styled from "styled-components";

export const MainHolder = styled.div`
  display: flex;
`;
export const Btn = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;

  .buttonOne {
    border: rgb(53, 53, 53) 0.1rem solid;
    padding: 1rem;
    border-radius: 30px;
    transition: all 0.3s ease;

    :hover {
      background-color: #353535;
      color: white;
    }
  }
  .buttonTwo {
    border: 1px solid white;
    padding: 1rem;
    border-radius: 30px;
    background-color: #353535;
    color: white;
    transition: 0.3s;

    :hover {
      background-color: #000;
    }
  }
`;
