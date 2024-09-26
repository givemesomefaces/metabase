import { useState } from "react";

import { FixedSizeIcon as Icon } from "metabase/ui";
import type { Collection } from "metabase-types/api";

import { CollectionSidesheet } from "../CollectionSidesheet/CollectionSidesheet";

import { CollectionHeaderButton } from "./CollectionHeader.styled";

export const CollectionSidesheetToggle = ({
  collection,
  onUpdateCollection,
}: {
  collection: Collection;
  onUpdateCollection: (entity: Collection, values: Partial<Collection>) => void;
}) => {
  const [showSidesheet, setShowSidesheet] = useState(false);
  return (
    <>
      <CollectionHeaderButton onClick={() => setShowSidesheet(open => !open)}>
        <Icon name="info" />
      </CollectionHeaderButton>
      {showSidesheet && (
        <CollectionSidesheet
          onClose={() => setShowSidesheet(false)}
          collection={collection}
          onUpdateCollection={onUpdateCollection}
        />
      )}
    </>
  );
};
