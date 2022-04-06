import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";
import "./App.css";
import MainPage from "../components/MainPage";

const mapStateToProps = (state: any) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearchChange: (event: any) =>
      dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

function App(props: any) {
  const { onRequestRobots } = props;

  useEffect(() => {
    onRequestRobots();
  }, []);

  return <MainPage {...props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
