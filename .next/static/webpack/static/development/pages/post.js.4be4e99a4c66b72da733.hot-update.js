webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layout_main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout/main */ "./components/layout/main/index.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../defaults/ContentfulKeys */ "./defaults/ContentfulKeys.js");
/* harmony import */ var _components_posts_Author__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/posts/Author */ "./components/posts/Author/index.js");














var Post = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(function (_ref) {
  var errorCode = _ref.errorCode,
      post = _ref.post,
      router = _ref.router;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_11___default.a.init();
  }, []);

  if (errorCode) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_error__WEBPACK_IMPORTED_MODULE_9___default.a, {
      statusCode: errorCode
    });
  }

  var publishDate = post.fields.publishDate;
  var dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})T(?<hour>[0-9]{2}):(?<minute>[0-9]{2})/;
  var publishDateGroups = publishDate.match(dateRegexp).groups;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
    className: "jsx-1930492432"
  }, post.fields.title, " - Murillo de Morais Blog"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
    name: "description",
    content: post.fields.metaDescription,
    className: "jsx-1930492432"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
    name: "og:description",
    content: post.fields.metaDescription,
    className: "jsx-1930492432"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_layout_main__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    "data-aos": "fade-up",
    className: "jsx-1930492432" + " " + "post"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1930492432" + " " + "post__header"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    alt: post.fields.heroImage.fields.title,
    src: "https:".concat(post.fields.heroImage.fields.file.url, "?w=300&h=300&fit=thumb"),
    className: "jsx-1930492432" + " " + "post__image"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1930492432" + " " + "post__content"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-1930492432"
  }, post.fields.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-1930492432" + " " + "post__content__publish-date"
  }, "".concat(publishDateGroups.month, "/").concat(publishDateGroups.day, "/").concat(publishDateGroups.year, " at ").concat(publishDateGroups.hour, ":").concat(publishDateGroups.minute)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-1930492432" + " " + "post__content__description"
  }, post.fields.description), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_8___default.a, {
    source: post.fields.body
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1930492432" + " " + "post__content__footer"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1930492432" + " " + "post__tags"
  }, post.fields.tags.join(', ')), post.fields.source && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1930492432" + " " + "post__source"
  }, "Source: ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: post.fields.source,
    target: "_blank",
    className: "jsx-1930492432"
  }, post.fields.source))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    "data-aos": "fade-up",
    className: "jsx-1930492432" + " " + "show-more"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    className: "jsx-1930492432"
  }, "Did you liked!? So why don't you see more news and articles like this on my blog?"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "jsx-1930492432"
  }, "There you can learn more about the world of technology and its news"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/blog"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "jsx-1930492432"
  }, "View blog"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_posts_Author__WEBPACK_IMPORTED_MODULE_13__["default"], {
    "data-aos-anchor": ".show-more",
    author: post.fields.author,
    smallScreenStyles: "margin: auto; float: none",
    styles: "margin: 70px 20px 70px 0; float: right;"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1930492432"
  }, "h1.jsx-1930492432,h2.jsx-1930492432,h3.jsx-1930492432{font-family:stolzl,sans-serif;font-weight:700;font-style:normal;}h1.jsx-1930492432{margin:0;font-size:50px;line-height:50px;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;min-height:60px;}.post.jsx-1930492432{padding:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.post__header.jsx-1930492432{margin-left:-575px;}.post__header__title.jsx-1930492432{height:110px;margin-left:150px;margin-top:175px;position:absolute;background-color:#ffffff;padding:15px 0 0 25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:525px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.post__image.jsx-1930492432{width:300px;border-radius:20px;box-shadow:2px 2px 20px rgba(0,0,0,.2);}.post__content.jsx-1930492432{color:rgba(0,0,0,.84);font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;font-weight:100;font-size:16px;line-height:22px;width:600px;margin:-130px 0 0 150px;padding:60px;background:#fff;box-shadow:3px 3px 30px rgba(0,0,0,.1);border-radius:10px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;word-break:break-word;}.post__content__publish-date.jsx-1930492432{font-family:arial;font-size:11px;color:#bbbbbb;}.post__content__description.jsx-1930492432{margin:0 0 30px 0;font-weight:700;}.post__content__footer.jsx-1930492432{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:50px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#a0a0a0;}.post__source.jsx-1930492432{text-transform:lowercase;font-size:12px;text-align:right;}.post__source.jsx-1930492432 a.jsx-1930492432{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.show-more.jsx-1930492432{color:rgba(0,0,0,.84);width:calc(30vw - 40px);height:calc(35vw - 40px);margin:20px;padding:20px;float:right;margin-right:calc(50% - 450px);}.show-more.jsx-1930492432 h3.jsx-1930492432{font-size:22px;margin:0 0 5px 0;}.show-more.jsx-1930492432 *.jsx-1930492432{font-family:stolzl,sans-serif;}.show-more.jsx-1930492432 button.jsx-1930492432{background:#2d6ae3;padding:10px 40px 10px 20px;font-size:18px;color:#ffffff;display:block;margin:20px 0 0 0;border-radius:5px;-webkit-transition:.3s all ease;transition:.3s all ease;cursor:pointer;}.show-more.jsx-1930492432 button.jsx-1930492432:hover{-webkit-transform:scale(1.15);-ms-transform:scale(1.15);transform:scale(1.15);box-shadow:5px 5px 20px rgba(0,0,0,.3);}.show-more.jsx-1930492432 button.jsx-1930492432:focus,.show-more.jsx-1930492432 button.jsx-1930492432:active{outline:none;}@media screen and (max-width:900px){h1.jsx-1930492432{font-size:36px;line-height:36px;margin:0;min-height:initial;}.post__header.jsx-1930492432{position:-webkit-sticky;position:sticky;left:20px;}.post__content.jsx-1930492432{font-size:14px;width:calc(100% - 50px);margin:-130px 0 0 0;padding:20px;z-index:1;}.show-more.jsx-1930492432{float:none;width:calc(100% - 80px);height:initial;margin:20px 0 40px 20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL3BhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VrQixBQU0wQyxBQU10QixBQVVJLEFBT00sQUFJTixBQVlELEFBTVUsQUFpQkosQUFNQSxBQUtMLEFBUVksQUFNWCxBQUtRLEFBVVAsQUFLZSxBQUlYLEFBWUcsQUFNVCxBQU1JLEFBT0MsQUFLRCxBQVFKLFNBcEpFLEVBcUpXLENBcEhQLENBdkJOLEFBV0ssQUFzR3BCLENBMUN1QixDQWVKLEFBaUNFLEFBWU8sR0FyRlgsQUFNQyxDQTdDbEIsQUF3RjhCLEdBbEV3RCxBQStDNUQsRUFyRlAsQ0EwRUYsS0FqRkMsQUEyR2xCLENBL0VtQixBQVlzQixDQStEekMsQUFpQ2EsQ0F6RUcsQ0FNaEIsQ0F1Rm1CLElBUkssQ0FsRUwsQUE0REwsQ0F0SWtELEFBaUl6QyxLQXhJSCxBQTRGTyxDQTdCM0IsQUFnRGlCLENBbkZHLEVBa0hsQixBQWMwQixPQTFFNUIsRUFrRWlCLENBWGYsRUF6QmMsRUEvR2hCLEFBc0ZBLEVBMUQyQixJQVczQixDQXFEYyxDQXdEQSxFQTdFa0IsQUFxRjlCLEVBNUNjLEVBU3lCLElBNEJ2QyxDQXhEYSxJQTlFUyxHQWtHSixDQXBGSSxLQWlFVixLQXZGTSxLQXFDRixFQW1EZSxBQW1CYixLQXBGTCxJQTRGZixFQWxIK0IsR0FxQ2QsSUFzRVMsV0FyRVAsRUFrRG5CLFNBdkZrQixNQXNDSixVQXJDZCxDQU1xQixDQWdDSyxnQkFvRVQsS0FyRkgsRUF5Q0ksQ0F2QkgsT0FvRWYsRUFyRnFCLElBa0JILEVBdUJHLGNBdEJvQix1Q0FsQ3pDLEFBbUNxQixtQkFDZSxlQXBCcEMsTUF5Q2dCLGFBcEJxQixDQXFCckMsa0NBcEJ3QixzQkFDeEIiLCJmaWxlIjoiL1VzZXJzL21tb3JhaXMvRG9jdW1lbnRzL3dlYnNpdGUvcGFnZXMvcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gIGZyb20gJ2NvbnRlbnRmdWwnO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xuaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9tYWluJztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCB7IENPTlRFTlRGVUxfU1BBQ0VfSUQsIENPTlRFTlRGVUxfQUNDRVNTX1RPS0VOIH0gZnJvbSAnLi4vZGVmYXVsdHMvQ29udGVudGZ1bEtleXMnO1xuaW1wb3J0IEF1dGhvciBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RzL0F1dGhvcic7XG5cbmNvbnN0IFBvc3QgPSB3aXRoUm91dGVyKCh7IGVycm9yQ29kZSwgcG9zdCwgcm91dGVyIH0pID0+IHtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIEFPUy5pbml0KCk7XG4gIH0sIFtdKTtcblxuICBpZihlcnJvckNvZGUpIHtcbiAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9e2Vycm9yQ29kZX0gLz47XG4gIH1cblxuICBjb25zdCBwdWJsaXNoRGF0ZSA9IHBvc3QuZmllbGRzLnB1Ymxpc2hEYXRlO1xuICBjb25zdCBkYXRlUmVnZXhwID0gLyg/PHllYXI+WzAtOV17NH0pLSg/PG1vbnRoPlswLTldezJ9KS0oPzxkYXk+WzAtOV17Mn0pVCg/PGhvdXI+WzAtOV17Mn0pOig/PG1pbnV0ZT5bMC05XXsyfSkvO1xuXG4gIGNvbnN0IHB1Ymxpc2hEYXRlR3JvdXBzID0gcHVibGlzaERhdGUubWF0Y2goZGF0ZVJlZ2V4cCkuZ3JvdXBzO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cG9zdC5maWVsZHMudGl0bGV9IC0gTXVyaWxsbyBkZSBNb3JhaXMgQmxvZzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Bvc3QuZmllbGRzLm1ldGFEZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17cG9zdC5maWVsZHMubWV0YURlc2NyaXB0aW9ufSAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19oZWFkZXJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zdF9faW1hZ2VcIlxuICAgICAgICAgICAgICBhbHQ9e3Bvc3QuZmllbGRzLmhlcm9JbWFnZS5maWVsZHMudGl0bGV9XG4gICAgICAgICAgICAgIHNyYz17YGh0dHBzOiR7cG9zdC5maWVsZHMuaGVyb0ltYWdlLmZpZWxkcy5maWxlLnVybH0/dz0zMDAmaD0zMDAmZml0PXRodW1iYH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMT57cG9zdC5maWVsZHMudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRfX3B1Ymxpc2gtZGF0ZVwiPntgJHtwdWJsaXNoRGF0ZUdyb3Vwcy5tb250aH0vJHtwdWJsaXNoRGF0ZUdyb3Vwcy5kYXl9LyR7cHVibGlzaERhdGVHcm91cHMueWVhcn0gYXQgJHtwdWJsaXNoRGF0ZUdyb3Vwcy5ob3VyfToke3B1Ymxpc2hEYXRlR3JvdXBzLm1pbnV0ZX1gfTwvc3Bhbj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRfX2Rlc2NyaXB0aW9uXCI+e3Bvc3QuZmllbGRzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17cG9zdC5maWVsZHMuYm9keX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGVudF9fZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fdGFnc1wiPntwb3N0LmZpZWxkcy50YWdzLmpvaW4oJywgJyl9PC9kaXY+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwb3N0LmZpZWxkcy5zb3VyY2UgJiZcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3NvdXJjZVwiPlxuICAgICAgICAgICAgICAgICAgU291cmNlOiA8YSBocmVmPXtwb3N0LmZpZWxkcy5zb3VyY2V9IHRhcmdldD1cIl9ibGFua1wiPntwb3N0LmZpZWxkcy5zb3VyY2V9PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1tb3JlXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XG4gICAgICAgICAgPGgzPkRpZCB5b3UgbGlrZWQhPyBTbyB3aHkgZG9uJ3QgeW91IHNlZSBtb3JlIG5ld3MgYW5kIGFydGljbGVzIGxpa2UgdGhpcyBvbiBteSBibG9nPzwvaDM+XG4gICAgICAgICAgPHNwYW4+VGhlcmUgeW91IGNhbiBsZWFybiBtb3JlIGFib3V0IHRoZSB3b3JsZCBvZiB0ZWNobm9sb2d5IGFuZCBpdHMgbmV3czwvc3Bhbj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cbiAgICAgICAgICAgIDxidXR0b24+VmlldyBibG9nPC9idXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEF1dGhvclxuICAgICAgICAgIGRhdGEtYW9zLWFuY2hvcj1cIi5zaG93LW1vcmVcIlxuICAgICAgICAgIGF1dGhvcj17cG9zdC5maWVsZHMuYXV0aG9yfVxuICAgICAgICAgIHNtYWxsU2NyZWVuU3R5bGVzPVwibWFyZ2luOiBhdXRvOyBmbG9hdDogbm9uZVwiXG4gICAgICAgICAgc3R5bGVzPVwibWFyZ2luOiA3MHB4IDIwcHggNzBweCAwOyBmbG9hdDogcmlnaHQ7XCIgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIGgxLFxuICAgICAgICBoMixcbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNENCOEM0LCAjM0NEM0FEKTtcbiAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgbWluLWhlaWdodDogNjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0IHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX2hlYWRlciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC01NzVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19oZWFkZXJfX3RpdGxlIHtcbiAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNzVweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDAgMCAyNXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDUyNXB4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9faW1hZ2Uge1xuICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMjBweCByZ2JhKDAsMCwwLC4yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19jb250ZW50IHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwuODQpO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBtZWRpdW0tY29udGVudC1zZXJpZi1mb250LEdlb3JnaWEsQ2FtYnJpYSxcIlRpbWVzIE5ldyBSb21hblwiLFRpbWVzLHNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICBtYXJnaW46IC0xMzBweCAwIDAgMTUwcHg7XG4gICAgICAgICAgcGFkZGluZzogNjBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMzBweCByZ2JhKDAsMCwwLC4xKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0X19jb250ZW50X19wdWJsaXNoLWRhdGUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgY29sb3I6ICNiYmJiYmI7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9fY29udGVudF9fZGVzY3JpcHRpb24ge1xuICAgICAgICAgIG1hcmdpbjogMCAwIDMwcHggMDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX2NvbnRlbnRfX2Zvb3RlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjYTBhMGEwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3RfX3NvdXJjZSB7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdF9fc291cmNlIGEge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaG93LW1vcmUge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC44NCk7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMzB2dyAtIDQwcHgpO1xuICAgICAgICAgIGhlaWdodDogY2FsYygzNXZ3IC0gNDBweCk7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogY2FsYyg1MCUgLSA0NTBweCk7XG4gICAgICAgIH1cblxuICAgICAgICAuc2hvdy1tb3JlIGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgNXB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuc2hvdy1tb3JlICoge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaG93LW1vcmUgYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmQ2YWUzO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggNDBweCAxMHB4IDIwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaG93LW1vcmUgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaG93LW1vcmUgYnV0dG9uOmZvY3VzLFxuICAgICAgICAuc2hvdy1tb3JlIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBpbml0aWFsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wb3N0X19oZWFkZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBvc3RfX2NvbnRlbnQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICAgICAgICAgICAgbWFyZ2luOiAtMTMwcHggMCAwIDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2hvdy1tb3JlIHtcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xuICAgICAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgNDBweCAyMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufSk7XG5cblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xuICBjb25zdCB7IHNsdWcgfSA9IHF1ZXJ5O1xuXG4gIGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gICAgc3BhY2U6IENPTlRFTlRGVUxfU1BBQ0VfSUQsXG4gICAgYWNjZXNzVG9rZW46IENPTlRFTlRGVUxfQUNDRVNTX1RPS0VOXG4gIH0pO1xuXG4gIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgY29udGVudF90eXBlOiAnYmxvZ1Bvc3QnLFxuICAgICdmaWVsZHMuc2x1Z1tpbl0nOiBzbHVnLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHBvc3Q6IGVudHJpZXMuaXRlbXNbMF1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdfQ== */\n/*@ sourceURL=/Users/mmorais/Documents/website/pages/post.js */"));
});

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var query, slug, client, entries;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query;
            slug = query.slug;
            client = Object(contentful__WEBPACK_IMPORTED_MODULE_7__["createClient"])({
              space: _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_12__["CONTENTFUL_SPACE_ID"],
              accessToken: _defaults_ContentfulKeys__WEBPACK_IMPORTED_MODULE_12__["CONTENTFUL_ACCESS_TOKEN"]
            });
            _context.next = 5;
            return client.getEntries({
              content_type: 'blogPost',
              'fields.slug[in]': slug
            });

          case 5:
            entries = _context.sent;
            return _context.abrupt("return", {
              post: entries.items[0]
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=post.js.4be4e99a4c66b72da733.hot-update.js.map