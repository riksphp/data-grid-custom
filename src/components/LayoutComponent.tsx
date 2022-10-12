import styled from "styled-components";

/**
 * This is to style the grid
 */
export const Grid = styled.div`
  border: 1px solid red;
`;

/**
 *  all children of Row will be Col components, which are divs
 */
export const Row = styled.div`
  display: flex;
`;

/**
 * this property controls how much horizontal space a child container will take up of its parent flex container
 */
export const Col = styled.div`
  flex: ${(props: { size: number }) => props.size};
  border: 1px solid green;
  padding: 1rem;
`;
