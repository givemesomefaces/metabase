import styled from "@emotion/styled";

export const PickerRoot = styled.div`
  margin-top: 1.5rem;
`;

export const PickerRow = styled.div`
  display: flex;
  align-items: center;
`;

export const PickerSpacedRow = styled(PickerRow)`
  margin-top: 1rem;
`;

export const PickerText = styled.span`
  font-weight: bold;
  min-width: 48px;
  margin-right: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ScheduleDescriptionContainer = styled.div`
  margin-top: 1rem;
  color: var(--mb-color-text-medium);
`;
