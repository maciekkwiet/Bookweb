import styled from 'styled-components';

import { TextCardComponent } from '../TextCard/TextCardStyles';

export const ActivityBox = styled(TextCardComponent)`
  display: flex;
  flex-direction: column;
  width: 32%;
`;
export const RatingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1%;
`;

// export const BookImage = styled.img`
//   width: 100%;
//   height: 100%;
// `;

// export const ContentContainer = styled.div`
//   box-sizing: border-box;
//   padding: 1%;
//   flex-basis: 75%;
//   display: flex;
//   flex-direction: column;
// `;
// export const BookParagraph = styled.p`
//   margin: 5px 0 0 0;
//   text-align: left;
// `;
export const ActivityTitle = styled.span`
  margin: 2px 0 0 0;
  text-align: left;
  font-weight: bold;
  font-size: 18px;
  color: black;
  // align-self: flex-start;
`;
// export const BoxBookReview = styled.p`
//   margin: 5px 0 0 0;
//   text-align: justify;
//   font-size: 13px;
// `;
// export const BoxReadMore = styled.a`
//   display: inline-block;
//   color: ${(props) => props.theme.colors.readMore};
//   text-align: left;
//   font-size: 14px;
//   max-width: 90%;
//   cursor: pointer;
// `;
