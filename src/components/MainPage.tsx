import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

export interface IRobot {
  name: string;
  email: string;
  id: number;
}

interface IMainPageProps {
  robots: Array<IRobot>;
  searchField: string;
  onSearchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
  isPending: boolean;
}

const MainPage = ({
  robots,
  searchField,
  onSearchChange,
  isPending,
}: IMainPageProps) => {
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        {isPending ? (
          <h1>Loading</h1>
        ) : (
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        )}
      </Scroll>
    </div>
  );
};

export default MainPage;
