import styled from 'styled-components';

export const Wrapper = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.theme.spacing.default};
  position: relative;
  user-select: none;
  cursor: pointer;
`;

export const Input = styled.input`
  position: absolute;
  border: none;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0px;
  overflow: hidden;
  white-space: nowrap;
`;

export const Control = styled.span`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  display: block;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.mediumGray2};
  position: relative;

  &[data-checked='true'] {
    border-color: ${(props) => props.theme.colors.primary};

    &::before {
      content: '';
      width: calc(100% - 6px);
      height: calc(100% - 6px);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: inherit;
    }
  }
`;

export const Label = styled.span`
  color: ${(props) => props.theme.colors.darkGray};
  font-family: ${(props) => props.theme.fonts.CircularStd};
  font-size: ${(props) => props.theme.fontSizes.medium.fontSize};
  line-height: ${(props) => props.theme.fontSizes.medium.lineHeight};
  font-weight: 450;
`;
