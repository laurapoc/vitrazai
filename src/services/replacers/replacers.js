export function articlePostReplacer(domNode) {
  if (domNode.attribs && domNode.attribs.href !== undefined) {
    domNode.attribs.href = "";
    return undefined;
  } else if (domNode.name === "h1" || domNode.name === "h2") {
    return <></>;
  }
}

export function fullArticlePostReplacer(domNode) {
  if (domNode.attribs && domNode.attribs.href !== undefined) {
    domNode.attribs.href = "";
    return undefined;
  }
}
