import React from "react";
import CollectionsOverview from "../../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "../../../components/collections-overview/collections-overview.container";
import CollectionContainer from "../../collection/collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
    /*collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });*/
    /*fetch(
      "https://firestore.googleapis.com/v1/projects/crwn-db-dbd95/databases/(default)/documents/collections"
    )
      .then((response) => response.json())
      .then((collections) => console.log(collections));*/
    /*this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
      }
    );*/
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
