import styled from 'styled-components';
import getColumnSize from '../../../utils/get-column-size';

interface SizesProps {
  isSize: {
    mobile?: number;
    desktop?: number;
    tablet?: number;
  }
}


const BlogPostsWrapper = styled.div`
  margin: 0 auto;
  padding-top: 120px;
  position: relative;
  @media (min-width: 991px) {
    width: 900px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
  @media (max-width: 990px) {
    padding: 80px 45px 0 45px;
  }
  @media (max-width: 575px) {
    padding: 60px 25px 0 25px;
  }
`;
export const PostRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  margin-bottom: 30px;
  @media (max-width: 990px) {
    margin-bottom: 20px;
  }
  @media (max-width: 575px) {
    margin-bottom: 10px;
  }
`;

export const PostGrid = styled.div<SizesProps>`
  flex: 0 0 ${({ isSize }) => (isSize.desktop ? getColumnSize({ size: isSize.desktop }) : 'auto')};
  max-width: ${({ isSize }) => (isSize.desktop ? getColumnSize({ size: isSize.desktop }) : 'auto')};
  padding: 0 20px;
  margin-bottom: 90px;
  @media (max-width: 990px) {
    margin-bottom: 70px;
  }
  @media (max-width: 767px) {
    flex: 0 0 ${({ isSize }) => (isSize.mobile ? getColumnSize({ size: isSize.mobile }) : 'auto')};
    max-width: ${({ isSize }) => (isSize.mobile ? getColumnSize({ size: isSize.mobile }) : 'auto')};
  }
  @media (max-width: 575px) {
    margin-bottom: 50px;
  }
`;

export const SeeMore = styled.div`
  text-align: center;
`;

export default BlogPostsWrapper;
