import styled from 'styled-components';

export const Header = styled.header`
    height: 56px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #703B09;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;

    div{
        margin-left: 30px;
        color: #fff;
    }

    img{
        background-color: #fff;
        border-radius: 4px;
        padding: 5px;
        height: 40px;
        width: 55px;
    }
`;

export const Nav = styled.nav`
    height: 100%;

  @media(max-width: 600px){
    display: none;
  }
`;