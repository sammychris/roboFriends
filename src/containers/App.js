import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';


import './App.css';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onReqeustRobots: () => dispatch(requestRobots())
  }
}


function App(props) {
  const { robots, searchField, onSearchChange, onReqeustRobots, isPending } = props;
  useEffect(() => {
    onReqeustRobots();
  }, []);

  const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })
  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange}/>
      <Scroll>
        { isPending ? <h1>Loading</h1> :
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        }
      </Scroll>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
