import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

export const setSearchField = (text: string) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots = () => (dispatch: any) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response: any) => {
      return response.json();
    })
    .then((data: any) =>
      dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data })
    ) 
    .catch((error: any) =>
      dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
    );
};
