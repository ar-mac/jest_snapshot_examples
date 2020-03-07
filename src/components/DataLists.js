import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const DataLists = ({users, posts}) => {
  const wrapperClass = cn({
    "both_lists": users.length && posts.length,
    "single_or_no_lists": !(users.length && posts.length),
  });
  const classDependentOnUsers = cn({
    no_users: users.length === 0,
    single_user: users.length === 1,
    some_users: users.length > 1 && users.length <= 3,
    lots_of_users: users.length > 5,
  });

  return (
    <div className={wrapperClass}>
      {
        users.length ? (
          <ul>{users.map((user, index) => (
            <li key={index}>
              <span>User: </span>
              <span>{user}</span>
            </li>
          ))}</ul>
        ) : (
          <div>No users to display</div>
        )
      }
      {
        posts.length ? (
          <ul>{posts.map((post, index) => (
            <li key={index}>
              <span>Post: </span>
              <span>{post}</span>
            </li>
          ))}</ul>
        ) : (
          <div className={classDependentOnUsers}>No posts to display</div>
        )
      }
    </div>
  )
};

DataLists.propTypes = {
  users: PropTypes.array,
  posts: PropTypes.array,
};

DataLists.defaultProps = {
  users: [],
  posts: [],
};

export default DataLists;
