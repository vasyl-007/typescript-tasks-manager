import React, { Fragment } from "react";

export const AboutPage: React.FC = () => {
  return (
    <Fragment>
      <h1>Info about this App</h1>
      <p>
        My name is Vasyl. I'm a Front End Developer! <br />
        <hr />
        And my key is Bootcamp, and I want to say about it more. First off, if
        anyone asked me about my recommendation of a bootcamp, I want to
        recommend it 100%. It provides a great experience for you to dive into
        code every single day and really grind. Support systems are great,
        mentors are very knowledgeable, and for most people, it really helps
        kick start your career as a junior dev. In saying that, everything you
        can learn there, you can learn for free online, just have to be
        disciplined. I had a great cohort, and I still speak with a lot of my
        classmates daily. I showed up early everyday, and was usually one of the
        last to leave around 10-11 at night. They were long days. And I will
        admit, I didn’t get everything the first time, or the second……or the
        fifth, but I tried damn hard, and the instructors knew that I was trying
        my best.
      </p>
      {/* <button className="btn" onClick={() => history.push("/")}>
        Back to List of tasks
      </button> */}
      <button className="btn">Back to List of tasks</button>
    </Fragment>
  );
};
