import React from "react";

import SHOP_DATA from "./SHOP-DATA";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

class ShopPage extends React.Component {
  state = { collections: SHOP_DATA };
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map((collection) => (
          <CollectionPreview key={collection.id} {...collection}>
            {collection.title}
          </CollectionPreview>
        ))}
      </div>
    );
  }
}

export default ShopPage;
