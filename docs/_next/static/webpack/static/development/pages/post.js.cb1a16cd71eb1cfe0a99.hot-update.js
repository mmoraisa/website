webpackHotUpdate("static/development/pages/post.js",{

/***/ "./components/posts/Author/index.js":
/*!******************************************!*\
  !*** ./components/posts/Author/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);




var Author = function Author(_ref) {
  var author = _ref.author,
      smallScreenStyles = _ref.smallScreenStyles,
      styles = _ref.styles;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_2___default.a.init();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    "data-aos": "fade-up",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4092859543", [styles, smallScreenStyles]]]) + " " + "author"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4092859543", [styles, smallScreenStyles]]])
  }, "About the author"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4092859543", [styles, smallScreenStyles]]])
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "".concat(author.fields.image.fields.file.url, "?w=100&h=100&fit=thumb"),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4092859543", [styles, smallScreenStyles]]]) + " " + "author__image"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4092859543", [styles, smallScreenStyles]]]) + " " + "author__info"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4092859543", [styles, smallScreenStyles]]]) + " " + "author__info__name"
  }, author.fields.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4092859543", [styles, smallScreenStyles]]]) + " " + "author__info__title"
  }, author.fields.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4092859543", [styles, smallScreenStyles]]]) + " " + "author__info__company"
  }, author.fields.company), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4092859543", [styles, smallScreenStyles]]]) + " " + "author__info__short-bio"
  }, author.fields.shortBio), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4092859543", [styles, smallScreenStyles]]]) + " " + "author__info__contacts"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4092859543",
    dynamic: [styles, smallScreenStyles]
  }, ".author.__jsx-style-dynamic-selector{width:500px;background:#fff;box-shadow:5px 5px 20px rgba(0,0,0,.2);border-radius:10px;padding:60px;".concat(styles, ";}.author.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{margin:0 0 30px 0;font-size:26px;line-height:26px;background-image:linear-gradient(to bottom,#4CB8C4,#3CD3AD);color:transparent;-webkit-background-clip:text;font-family:stolzl,sans-serif;}.author.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.author__image.__jsx-style-dynamic-selector{width:100px;height:100px;border-radius:50%;}.author__info.__jsx-style-dynamic-selector{padding:0 0 0 25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:rgba(0,0,0,.84);}.author__info__name.__jsx-style-dynamic-selector,.author__info__title.__jsx-style-dynamic-selector,.author__info__company.__jsx-style-dynamic-selector{font-family:stolzl,sans-serif;}.author__info__name.__jsx-style-dynamic-selector{font-size:20px;}.author__info__title.__jsx-style-dynamic-selector,.author__info__company.__jsx-style-dynamic-selector{font-size:14px;}.author__info__short-bio.__jsx-style-dynamic-selector{margin-top:15px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;word-break:break-word;font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;}@media screen and (max-width:900px){.author.__jsx-style-dynamic-selector{padding:20px;width:calc(100% - 70px);").concat(smallScreenStyles, ";}.author.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQXV0aG9yL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCa0IsQUFJdUIsQUFTTSxBQVVMLEFBSUQsQUFNTyxBQVNXLEFBSWYsQUFLQSxBQUlDLEFBVUQsQUFNUyxZQWxFUixBQXVCSCxDQXNDYSxFQW5CNUIsQUFLQSxDQUlvQyxFQTFDbkIsQ0FvQkYsTUFMSyxHQXZCcUIsRUFxQ3pDLEdBNUJtQixJQXFEbEIsTUF0Q0QsT0FkOEQsQUF5Q3pCLGdCQVduQyxDQTdEbUIsT0FpQnJCLElBZ0RFLE9BZHNCLENBbERULE9BMkJTLE1BekJ6QixRQWlEdUYsR0ExQ2xFLGtCQVBwQixBQVErQiw2QkFDQyxjQWlCUixnQkFoQnhCLElBd0NBLEVBdkJBIiwiZmlsZSI6Ii9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQXV0aG9yL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5cbmNvbnN0IEF1dGhvciA9ICh7IGF1dGhvciwgc21hbGxTY3JlZW5TdHlsZXMsIHN0eWxlcyB9KSA9PiB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBBT1MuaW5pdCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvclwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxuICAgICAgICA8aDI+QWJvdXQgdGhlIGF1dGhvcjwvaDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdXRob3JfX2ltYWdlXCIgc3JjPXtgJHthdXRob3IuZmllbGRzLmltYWdlLmZpZWxkcy5maWxlLnVybH0/dz0xMDAmaD0xMDAmZml0PXRodW1iYH0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvcl9faW5mb1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yX19pbmZvX19uYW1lXCI+e2F1dGhvci5maWVsZHMubmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JfX2luZm9fX3RpdGxlXCI+e2F1dGhvci5maWVsZHMudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yX19pbmZvX19jb21wYW55XCI+e2F1dGhvci5maWVsZHMuY29tcGFueX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JfX2luZm9fX3Nob3J0LWJpb1wiPnthdXRob3IuZmllbGRzLnNob3J0QmlvfTwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yX19pbmZvX19jb250YWN0c1wiPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKkpTT04uc3RyaW5naWZ5KGF1dGhvci5maWVsZHMpKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAuYXV0aG9yIHtcbiAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBwYWRkaW5nOiA2MHB4O1xuICAgICAgICAgICR7c3R5bGVzfVxuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGhvciBoMiB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMzBweCAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCM0Q0I4QzQsIzNDRDNBRCk7XG4gICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzdG9semwsc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRob3IgPiBkaXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aG9yX19pbWFnZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGhvcl9faW5mbyB7XG4gICAgICAgICAgcGFkZGluZzogMCAwIDAgMjVweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsLjg0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRob3JfX2luZm9fX25hbWUsXG4gICAgICAgIC5hdXRob3JfX2luZm9fX3RpdGxlLFxuICAgICAgICAuYXV0aG9yX19pbmZvX19jb21wYW55IHtcbiAgICAgICAgICBmb250LWZhbWlseTogc3RvbHpsLHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aG9yX19pbmZvX19uYW1lIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aG9yX19pbmZvX190aXRsZSxcbiAgICAgICAgLmF1dGhvcl9faW5mb19fY29tcGFueSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGhvcl9faW5mb19fc2hvcnQtYmlvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgICBmb250LWZhbWlseTogbWVkaXVtLWNvbnRlbnQtc2VyaWYtZm9udCxHZW9yZ2lhLENhbWJyaWEsXCJUaW1lcyBOZXcgUm9tYW5cIixUaW1lcyxzZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG5cbiAgICAgICAgICAuYXV0aG9yIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG4gICAgICAgICAgICAke3NtYWxsU2NyZWVuU3R5bGVzfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hdXRob3IgPiBkaXYge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhvcjtcbiJdfQ== */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/posts/Author/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Author);

/***/ })

})
//# sourceMappingURL=post.js.cb1a16cd71eb1cfe0a99.hot-update.js.map