import styled from 'styled-components';
import { getRandomColor } from 'components/get-random-color';

export const ProfileContainer = styled.div`
  background-color: grey;
  margin-top: 40px;
`;

export const DescriptionContainer = styled.div`
  text-align: center;
  padding: 15px;
`;

export const ImgAvatar = styled.img`
  border-radius: 50%;
  background-color: white;
  margin: 0 auto;
`;

export const Text = styled.p`
  font-size: 12px;
  color: white;
  margin-top: 14px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: aqua;
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 12px;
  color: white;
  border: 1px solid grey;
  text-align: center;
  background-color: ${getRandomColor};
`;
