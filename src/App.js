import React from "react";
import Search from "./components/Search";

class App extends React.Component {
  render() {
    return (
      <div className="ui center aligned segment">
        <h2 className="ui center aligned">Article Wikipedia</h2>
        <div className="ui grid container center aligned">
          <div className="content eight wide column">
            <Search />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
