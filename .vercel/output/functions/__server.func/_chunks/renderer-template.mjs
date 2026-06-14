import { c as HTTPResponse } from "../_libs/h3.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
const rendererTemplate = () => new HTTPResponse('<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <meta charset="UTF-8" />\r\n    <title>SSG Travels</title>\r\n  </head>\r\n  <body>\r\n    <div id="root"></div>\r\n  </body>\r\n</html>', { headers: { "content-type": "text/html; charset=utf-8" } });
function renderIndexHTML(event) {
  return rendererTemplate(event.req);
}
export {
  renderIndexHTML as default
};
