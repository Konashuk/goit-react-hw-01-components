import styled from 'styled-components';

export const Table = styled.thead`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

export const PartTableTh = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
  background-color: #333;
  color: #fff;
  &: hover {
    background-color: #e0e0e0;
  }
`;

export const PartTableTd = styled.td`
  background-color: #f2f2f2;
  font-size: 15px;
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
`;
