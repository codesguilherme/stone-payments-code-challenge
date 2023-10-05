import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 105px;

  padding-inline: ${(props) => props.theme.spacing[7]};
  padding-block: ${(props) => props.theme.spacing[7]};
`;

export default PageContainer;
