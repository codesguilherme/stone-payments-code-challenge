import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  font-size: ${(props) => props.theme.fontSizes.large.fontSize};
  line-height: ${(props) => props.theme.fontSizes.large.lineHeight};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-family: ${(props) => props.theme.fonts.Roboto};
  color: ${(props) => props.theme.colors.darkGray};
  margin-bottom: ${(props) => props.theme.spacing.small};
`;

export const Input = styled.input`
  padding-inline: ${(props) => props.theme.spacing.medium};
  padding-block: ${(props) => props.theme.spacing.medium};

  border: 1px solid ${(props) => props.theme.colors.mediumGray3};
  box-shadow: ${(props) => props.theme.shadows.small};
  color: ${(props) => props.theme.colors.darkGray};

  font-size: ${(props) => props.theme.fontSizes.medium.fontSize};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-family: ${(props) => props.theme.fonts.SharonSans};

  width: 100%;
  border-radius: 4px;
  height: 56px;

  outline: none;
  appearance: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.mediumGray2};
  }
`;
