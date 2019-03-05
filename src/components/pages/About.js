import React from "react";

function About() {
  return (
    <React.Fragment>
      <div className="about-wrapper">
        <h1 className="about-heading">About</h1>
        <h3 className="about-subheading">How To</h3>
        <ul>
          <li>Click on &#10006; / &#10004; to toggle cross-out todo item</li>
          <li>Click on the trash icon to delete a todo item</li>
          <li>
            Write new text in "Add todo" field and either press enter or click
            the &#10010; to add new item
          </li>
          <li>You can edit any item by writing new text in it</li>
          <li>Click anywhere outside the item row to save the new text</li>
        </ul>
        <h3 className="about-subheading">How It Works</h3>
        <p className="about-text">
          App uses the following: React, Axios, JSONplaceholder or MockApi
        </p>
        <p className="about-text">
          Data is updated in JSONplaceholder/MockApi db when todo items are
          deleted, marked as completed,edited or added.
        </p>
      </div>
    </React.Fragment>
  );
}

export default About;
