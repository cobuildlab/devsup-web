import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem;
  background: #f3f3f3;
  border-radius: 5px;
  box-shadow: 1px 1px 4px rgba(0,0,0,0.1);
`;

export const PrevPage = styled.div`
  min-width: 32px;
  a {
    width: 32px;
    height: 32px;
    color: ${themeGet('colors.textColor', '#292929')};
    border-radius: 50%;
    background-color: #f3f3f3;
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
    background-color: #f3f3f3;
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

export const PageNumber = styled.div``;
