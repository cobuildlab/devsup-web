import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem;
  background: #383a4c;
  border-radius: 5px;
  box-shadow: 1px 1px 4px rgba(0,0,0,0.1);
`;

export const PrevPage = styled.div`
  min-width: 32px;
  a {
    width: 32px;
    height: 32px;
    color: #fff;
    border-radius: 50%;
    background-color: #383a4c;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.15s ease-in-out;
    svg {
      display: block;
    }
    &:hover {
      color: #fff;
      background-color: ${themeGet('colors.primary', '#D10068')};
    }
  }
`;

export const NextPage = styled.div`
  min-width: 32px;
  a {
    width: 32px;
    height: 32px;
    color: ${themeGet('colors.textColor', '#292929')};
    border-radius: 50%;
    background-color: #383a4c;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.15s ease-in-out;
    svg {
      display: block;
    }
    &:hover {
      color: #fff;
      background-color: ${themeGet('colors.primary', '#D10068')};
    }
  }
`;

export const PageNumber = styled.div`
  color: ${themeGet('colors.textColor', '#292929')};
`;
