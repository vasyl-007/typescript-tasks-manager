import React, { Fragment } from "react";
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory();
  return (
    <Fragment>
      <h1>Info about this App</h1>
      <p>
        My name is Vasyl. I'm a Front End Developer! <br />
        <br />
        In my opinion, one of the most important reasons for using this Tasks manager is the
        organization. Organizing your tasks with a list can make everything much
        more manageable and make you feel grounded. Seeing a clear outline of
        your completed and uncompleted tasks will help you feel organized and
        stay mentally focused.
        <br />
        <br />
        As you cross items off your to-do list, you'll feel a sense of progress
        and accomplishment that can be missed when rushing from one activity to
        the next. The affirmation that you are making progress will help
        motivate you to keep moving forward rather than feeling overwhelmed.
        <br />
        <br />
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Back to List of tasks
      </button>
    </Fragment>
  );
};
