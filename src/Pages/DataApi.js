import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { getJsonApi } from "../Actions/ApiJsonAction";
import { getMockApi, postMockApi } from "../Actions/ApiMockAction";

const DataApi = (props) => {
  //   console.log("props1", props);
  const [about, setAbout] = useState("");

  const handleChange = (event) => {
    setAbout(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();

    const newAbout = {
      id: props.about[props.about.length - 1].id + 1,
      name: about,
    };
    props.postAbout(newAbout);
    // console.log(newAbout);
  };
  //   console.log("props about", props.about);

  useEffect(() => {
    props.getJsonApi();
    props.getMockApi();
  }, []);

  return (
    <div className="data-json">
      <h2>Data API JSONPlaceHolder</h2>
    
        {props.todos.map((item, index) => (
          <li key={index}>
            {item.id}. {item.title}
          </li>
        ))}

      <h2> Data API MockApi</h2>
      <form onSubmit={handleAdd}>
        <label>
          New Name :
          <input
            type="text"
            name="name"
            value={about}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Add" />
      </form>
      <ul>
        {props.about.map((item, index) => (
          <li key={index}>
            {item.id}. {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (props) => {
  //   console.log("props", props);
  return {
    todos: props.getJsonApi.data,
    about: props.getMockApi.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getJsonApi: () => dispatch(getJsonApi()),
    getMockApi: () => dispatch(getMockApi()),
    postMockApi: (obj) => dispatch(postMockApi(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataApi);
