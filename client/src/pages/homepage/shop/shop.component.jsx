import React, { Suspense, useEffect, lazy } from "react";
import CollectionsOverview from "../../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../../redux/shop/shop.actions";
import Spinner from "../../../components/spinner/spinner.component";
const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  //componentDidMount() {
  //fetchCollectionsStart();
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
  //}

  const CollectionsOverviewContainer = lazy(() =>
    import(
      "../../../components/collections-overview/collections-overview.container"
    )
  );
  const CollectionContainer = lazy(() =>
    import("../../collection/collection.container")
  );

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
