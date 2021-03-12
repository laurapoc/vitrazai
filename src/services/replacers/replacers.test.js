import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { articlePostReplacer } from "./replacers";

configure({ adapter: new Adapter() });

describe("{articlePostReplacer}", () => {
  it("shoul replace all defined href into empty string", () => {
    let domElement = {
      attribs: {
        href: "google.com",
      },
    };
    let replacedValue = articlePostReplacer(domElement);
    console.log(domElement);
    expect(domElement.attribs.href).toEqual("");
    expect(replacedValue).toBeUndefined();
  });
  it("shoud return empty element instead of h1", () => {
      let headerOneDomElement = {
          name: "h1"
      }
      let replacedHeaders = articlePostReplacer(headerOneDomElement)
      expect(replacedHeaders).toEqual(<></>)
  });
  it("shoud return empty element instead of h2", () => {
    let headerTwoDomElement = {
        name: "h2"
    }
    let replacedHeaders = articlePostReplacer(headerTwoDomElement)
    expect(replacedHeaders).toEqual(<></>)
})
});


