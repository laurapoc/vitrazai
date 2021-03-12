export function articlePostReplacer(domNode) {
    if (domNode.attribs && domNode.attribs.href !== undefined) {
      domNode.attribs.href = "";
    } else if (domNode.name === "h1" || domNode.name === "h2") {
      return <></>;
    } else if (domNode.name === "p") {
    }
  }