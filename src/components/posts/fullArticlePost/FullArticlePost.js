import React from "react";
// import parse from 'html-react-parser';

const FullArticlePost = (props) => {
  //   const { title, content } = this.props;
  console.log("full article", props.location.state);

  const { title, content } = props.location.state;

  /** * Convert a template string into HTML DOM nodes *
  //  *  @param {String} str The template string * @return {Node} The template HTML */
  // function stringToHTML(str) {
  //   var parser = new DOMParser();
  //   var doc = parser.parseFromString(str, "text/html");
  //   console.log(doc);
  //   return doc.body;
  // }

  // const bodyContent = stringToHTML(content).childNodes;
  // console.log(bodyContent);
  // let children = [];
  // for (let i = 0; i < bodyContent.length; i++) {
  //   children.push(React.createElement(bodyContent[i]));
  // }
  // console.log(children);

  function createMarkup() {
    return { __html: content };
  }

  return (
    <div>
      <h3>{title}</h3>
      {/* <p>{content}</p> */}
      <div dangerouslySetInnerHTML={createMarkup()} />;
    </div>
  );
};

export default FullArticlePost;
