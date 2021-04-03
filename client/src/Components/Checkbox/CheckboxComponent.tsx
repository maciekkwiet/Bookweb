import { CheckboxContainer, HiddenCheckbox, VisibleCheckbox, Icon } from './CheckboxStyles';

export const CheckboxComponent = ({ checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props} />
    <VisibleCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </VisibleCheckbox>
  </CheckboxContainer>
);
