import type { DatePickerTruncationUnit } from "metabase/querying/filters/types";
import * as Lib from "metabase-lib";

import type { DateIntervalValue } from "../types";

import { DEFAULT_OFFSETS } from "./constants";

export function setUnit(
  value: DateIntervalValue,
  unit: DatePickerTruncationUnit,
): DateIntervalValue {
  return { ...value, unit };
}

export function setDefaultOffset(value: DateIntervalValue): DateIntervalValue {
  return {
    ...value,
    offsetValue: DEFAULT_OFFSETS[value.unit] * Math.sign(value.value),
    offsetUnit: value.unit,
    options: undefined,
  };
}

export function getIncludeCurrent(value: DateIntervalValue): boolean {
  return value.options?.includeCurrent ?? false;
}

export function getIncludeCurrentLabel(unit: DatePickerTruncationUnit): string {
  return Lib.describeTemporalInterval("current", unit).toLowerCase();
}

export function setIncludeCurrent(
  value: DateIntervalValue,
  includeCurrent: boolean,
): DateIntervalValue {
  return { ...value, options: { includeCurrent: includeCurrent } };
}
