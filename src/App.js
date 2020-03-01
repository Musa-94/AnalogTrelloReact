import React from 'react';
import BoxTasks from "./js/components/box-tasks";

const App = props => {
  return (
    <div className="wrapper">
      <BoxTasks
      />
    </div>
  );
}

export default React.memo(App);
