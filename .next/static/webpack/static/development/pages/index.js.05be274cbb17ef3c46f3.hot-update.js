webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/header/index.js":
/*!************************************!*\
  !*** ./components/header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! algoliasearch/lite */ "./node_modules/algoliasearch/src/browser/builds/algoliasearchLite.js");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-instantsearch-dom */ "./node_modules/react-instantsearch-dom/dist/es/index.js");
/* harmony import */ var _BlogSearchBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BlogSearchBox */ "./components/BlogSearchBox/index.js");
/* harmony import */ var _BlogSearchHit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../BlogSearchHit */ "./components/BlogSearchHit/index.js");








var searchClient = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3___default()('28AME38GWP', 'fb35a1582b3871a44b929c258fe2ec24');

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-168129448" + " " + "top-bar"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-168129448"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-168129448"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-168129448"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-168129448"
  }, "Home"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-168129448"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/blog"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-168129448"
  }, "blog"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-168129448"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/blog"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-168129448"
  }, "blog"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-168129448"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/blog"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-168129448"
  }, "blog"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_4__["InstantSearch"], {
    searchClient: searchClient,
    indexName: "posts"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BlogSearchBox__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-168129448" + " " + "blog-search-box__hits"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_4__["Hits"], {
    hitComponent: _BlogSearchHit__WEBPACK_IMPORTED_MODULE_6__["default"]
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "168129448"
  }, ".top-bar.jsx-168129448{background:#ffffff7a;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;position:-webkit-sticky;position:sticky;top:0;z-index:1;-webkit-transition:.3s all ease;transition:.3s all ease;}.top-bar.jsx-168129448:hover{background:#fff;}nav.jsx-168129448{width:300px;}ul.jsx-168129448{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}li.jsx-168129448{display:block;}a.jsx-168129448{font-family:stolzl,sans-serif;font-weight:300;font-size:14px;color:#0a2544;-webkit-text-decoration:none;text-decoration:none;}.blog-search-box__hits.jsx-168129448{position:absolute;top:50px;right:5px;}@media screen and (max-width:650px){.blog-search-box__hits.jsx-168129448{top:90px;left:5px;}.top-bar.jsx-168129448{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}ul.jsx-168129448{padding:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDa0IsQUFJZ0MsQUFXTCxBQUlKLEFBSUMsQUFNQyxBQUlpQixBQVFiLEFBUVAsQUFLYSxBQU1aLFNBVkQsQ0FXWCxFQXpDRixFQVVBLEVBZEEsRUEwQlcsQUFTVCxHQTlDYSxNQXNDSCxHQVRNLE9BVWxCLFNBVGlCLGVBQ0QsYUFaZ0IsQ0FhVCxHQWtCSSxpQkFqRE4sOEJBZ0NyQixvREFrQnVCLFdBakRTLENBa0JYLGlGQWdDbkIsWUEvQkYscUJBbEJrQix3Q0FDVixNQUNJLFVBQ2Msd0RBQzFCIiwiZmlsZSI6Ii9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGFsZ29saWFzZWFyY2ggZnJvbSAnYWxnb2xpYXNlYXJjaC9saXRlJztcbmltcG9ydCB7IEluc3RhbnRTZWFyY2gsIEhpdHMgfSBmcm9tICdyZWFjdC1pbnN0YW50c2VhcmNoLWRvbSc7XG5pbXBvcnQgQmxvZ1NlYXJjaEJveCBmcm9tICcuLi9CbG9nU2VhcmNoQm94JztcbmltcG9ydCBCbG9nU2VhcmNoSGl0IGZyb20gJy4uL0Jsb2dTZWFyY2hIaXQnO1xuXG5jb25zdCBzZWFyY2hDbGllbnQgPSBhbGdvbGlhc2VhcmNoKCcyOEFNRTM4R1dQJywgJ2ZiMzVhMTU4MmIzODcxYTQ0YjkyOWMyNThmZTJlYzI0Jyk7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1iYXJcIj5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9ibG9nXCI+XG4gICAgICAgICAgICAgICAgPGE+YmxvZzwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9ibG9nXCI+XG4gICAgICAgICAgICAgICAgPGE+YmxvZzwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9ibG9nXCI+XG4gICAgICAgICAgICAgICAgPGE+YmxvZzwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPEluc3RhbnRTZWFyY2ggc2VhcmNoQ2xpZW50PXtzZWFyY2hDbGllbnR9IGluZGV4TmFtZT1cInBvc3RzXCI+XG4gICAgICAgICAgPEJsb2dTZWFyY2hCb3ggLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctc2VhcmNoLWJveF9faGl0c1wiPlxuICAgICAgICAgICAgPEhpdHMgaGl0Q29tcG9uZW50PXtCbG9nU2VhcmNoSGl0fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0luc3RhbnRTZWFyY2g+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAudG9wLWJhciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjdhO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAudG9wLWJhcjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LWZhbWlseTogc3RvbHpsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiAjMGEyNTQ0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ibG9nLXNlYXJjaC1ib3hfX2hpdHMge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG5cbiAgICAgICAgICAuYmxvZy1zZWFyY2gtYm94X19oaXRzIHtcbiAgICAgICAgICAgIHRvcDogOTBweDtcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudG9wLWJhciB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/header/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.05be274cbb17ef3c46f3.hot-update.js.map