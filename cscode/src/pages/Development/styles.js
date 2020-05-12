import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  font: 400 20px Roboto, sans-serif;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 10%;
    color: #303942;
  }

  span {
    font-size: 16px;
    margin-top: 10px;
  }

  p {
    color: #36404A;
  }

  img {
    width: 800px;
  }

  @media only screen and (max-width: 800px) {
    width: 800px;
    margin: auto 0;
    padding: auto;

    h1 {
      margin-top: 25%;
    }

    img {
      width: 600px;
    }
  }

  @media only screen and (max-width: 550px) {
    width: 530px;

    span {
      width: 300px;
      margin: 10px;
      text-align: center;
    }

    img {
      width: 400px;
    }
  }
`;