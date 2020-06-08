import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const PersonalBlogWrapper = styled.div`
  background-color: ${themeGet('colors.secondary', '#292929')};
`;

export default PersonalBlogWrapper;
