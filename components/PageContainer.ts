import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 105px;

  padding-inline: ${(props) => props.theme.spacing[7]};
  padding-block: ${(props) => props.theme.spacing[7]};

  background-image: url(/images/background.png);
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  background-size: contain;
`;

export default PageContainer;
