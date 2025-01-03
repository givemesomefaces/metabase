import type { ColumnItem } from "metabase/querying/filters/types";
import * as Lib from "metabase-lib";

import { ColumnFilterSection } from "../../ColumnFilterSection";
import { FilterTabItem } from "../FilterTabItem";

export interface ColumnFilterItemProps {
  query: Lib.Query;
  columnItem: ColumnItem;
  filter: Lib.FilterClause | undefined;
  isSearching: boolean;
  onChange: (newQuery: Lib.Query) => void;
  onInput: () => void;
}

export function ColumnFilterItem({
  query,
  columnItem,
  filter,
  isSearching,
  onChange,
  onInput,
}: ColumnFilterItemProps) {
  const { column, displayName, stageIndex } = columnItem;

  const handleChange = (newFilter: Lib.ExpressionClause | undefined) => {
    if (filter && newFilter) {
      onChange(Lib.replaceClause(query, stageIndex, filter, newFilter));
    } else if (newFilter) {
      onChange(Lib.filter(query, stageIndex, newFilter));
    } else if (filter) {
      onChange(Lib.removeClause(query, stageIndex, filter));
    }
  };

  return (
    <FilterTabItem component="li" data-testid={`filter-column-${displayName}`}>
      <ColumnFilterSection
        query={query}
        stageIndex={stageIndex}
        column={column}
        filter={filter}
        isSearching={isSearching}
        onChange={handleChange}
        onInput={onInput}
      />
    </FilterTabItem>
  );
}
