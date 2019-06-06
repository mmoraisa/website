webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/posts/BlogPost/TripleBlogPost.js":
/*!*****************************************************!*\
  !*** ./components/posts/BlogPost/TripleBlogPost.js ***!
  \*****************************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _defaults_Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../defaults/Language */ "./defaults/Language.js");






var TripleBlogPost = function TripleBlogPost(_ref) {
  var post = _ref.post;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    aos__WEBPACK_IMPORTED_MODULE_2___default.a.init();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_defaults_Language__WEBPACK_IMPORTED_MODULE_4__["Consumer"], null, function (_ref2) {
    var location = _ref2.location;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      prefetch: true,
      href: "/".concat(location, "/blog/").concat(post.fields.slug)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      "data-aos": "fade-up",
      className: "jsx-3647894219" + " " + "post"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3647894219" + " " + "post__content"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3647894219" + " " + "post__content__date"
    }, "18/05/2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3647894219" + " " + "post__content__title"
    }, post.fields.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3647894219" + " " + "post__content__separator"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-3647894219" + " " + "post__content__description"
    }, post.fields.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        background: "url(".concat(post.fields.heroImage.fields.file.url, "?w=300&h=300&fit=thumb)"),
        backgroundSize: 'cover'
      },
      className: "jsx-3647894219" + " " + "post__image"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3647894219" + " " + "post__video"
    }, post.fields.video && post.fields.video.length && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
      src: post.fields.video,
      frameBorder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true,
      className: "jsx-3647894219" + " " + "post__video__content"
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3647894219"
    }, ".post.jsx-3647894219{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:white;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:.1s all ease;transition:.1s all ease;cursor:pointer;}.post.jsx-3647894219:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);z-index:1;box-shadow:3px 3px 10px rgba(0,0,0,.15);}.post.jsx-3647894219>div.jsx-3647894219{width:240px;height:auto;padding:30px;}.post__content.jsx-3647894219{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:white;}.post__content__date.jsx-3647894219{font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;color:#afafaf;font-size:14px;}.post__content__title.jsx-3647894219{font-family:stolzl,sans-serif;font-weight:600;font-size:26px;margin:10px 0 0 0;text-transform:uppercase;}.post__content__separator.jsx-3647894219{margin:30px 0;border:1px solid #e4e4e4;width:50px;}.post__content__description.jsx-3647894219{color:rgba(0,0,0,.84);font-family:medium-content-serif-font,Georgia,Cambria,\"Times New Roman\",Times,serif;font-weight:100;font-size:16px;line-height:22px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;word-break:break-word;}.post__image.jsx-3647894219{background:#9ec6f1;}.post__video.jsx-3647894219{padding:0 !important;}.post__video__content.jsx-3647894219{width:calc(100% + 60px);height:calc(100% + 60px);}@media screen and (max-width:970px){.post.jsx-3647894219{width:calc(100% - 30px);margin:10px 15px;border-radius:10px;box-shadow:5px 5px 20px rgba(0,0,0,.3);overflow:hidden;}.post.jsx-3647894219>div.jsx-3647894219{padding:10px;width:initial;height:initial;}.post.--is-even.jsx-3647894219{-webkit-align-self:initial;-ms-flex-item-align:initial;align-self:initial;}.post__content.jsx-3647894219{-webkit-flex:1;-ms-flex:1;flex:1;}.post__image.jsx-3647894219{width:20% !important;-webkit-order:-1;-ms-flex-order:-1;order:-1;}.post__content__separator.jsx-3647894219{margin:10px 0;}.post__content__title.jsx-3647894219{font-size:22px;}.post__video.jsx-3647894219{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tbW9yYWlzL0RvY3VtZW50cy93ZWJzaXRlL2NvbXBvbmVudHMvcG9zdHMvQmxvZ1Bvc3QvVHJpcGxlQmxvZ1Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENzQixBQUk0QixBQVFTLEFBTVYsQUFNQyxBQU11RSxBQU1yRCxBQVFqQixBQU1RLEFBV0gsQUFJRSxBQUlHLEFBT0UsQUFRWCxBQU1NLEFBSVosQUFJYyxBQUtQLEFBSUMsQUFJRixZQTVGSCxDQWtFSSxBQTJCaEIsQ0FuRXlCLEFBMkR6QixDQUlBLElBOUNGLEVBSUEsQUFpQ2EsQ0FoRHlFLEVBL0J2RSxBQWtEWSxBQU9OLEdBU0YsR0FqREQsR0EwRGhCLElBMUVGLEVBeUJhLEVBZ0NVLENBU3JCLElBakRlLEdBaUNqQixDQXhCQSxVQWdDMkMsQ0F4Q3ZCLElBNkRsQixTQS9GaUIsQUFvQkssQUFrRXRCLElBOUVVLENBMkJlLEtBVFgsSUFqQjBCLEdBUnJCLE9BMEJKLENBZ0RHLEtBdkNwQixFQVdrQixPQW5CbEIsRUFnREUsT0E1QmUsTUF0Q2pCLFNBdUNtQixlQTVCQSxFQTZCaUIsTUFoRFYsU0FvQjFCLG1CQTZCcUMsNEJBaERwQixPQWlETyxRQWhEeEIsY0FpREEiLCJmaWxlIjoiL1VzZXJzL21tb3JhaXMvRG9jdW1lbnRzL3dlYnNpdGUvY29tcG9uZW50cy9wb3N0cy9CbG9nUG9zdC9UcmlwbGVCbG9nUG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFPUyBmcm9tICdhb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCAqIGFzIExhbmd1YWdlIGZyb20gJy4uLy4uLy4uL2RlZmF1bHRzL0xhbmd1YWdlJztcblxuY29uc3QgVHJpcGxlQmxvZ1Bvc3QgPSAoeyBwb3N0IH0pID0+IHtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIEFPUy5pbml0KCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYW5ndWFnZS5Db25zdW1lcj5cbiAgICAgIHsoeyBsb2NhdGlvbiB9KSA9PiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8TGluayBwcmVmZXRjaCBocmVmPXtgLyR7bG9jYXRpb259L2Jsb2cvJHtwb3N0LmZpZWxkcy5zbHVnfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRfX2RhdGVcIj4xOC8wNS8yMDE5PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRfX3RpdGxlXCI+e3Bvc3QuZmllbGRzLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRfX3NlcGFyYXRvclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRfX2Rlc2NyaXB0aW9uXCI+e3Bvc3QuZmllbGRzLmRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0X19pbWFnZVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGB1cmwoJHtwb3N0LmZpZWxkcy5oZXJvSW1hZ2UuZmllbGRzLmZpbGUudXJsfT93PTMwMCZoPTMwMCZmaXQ9dGh1bWIpYCxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X192aWRlb1wiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBvc3QuZmllbGRzLnZpZGVvICYmIHBvc3QuZmllbGRzLnZpZGVvLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0X192aWRlb19fY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cG9zdC5maWVsZHMudmlkZW99XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIlxuICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW4+XG4gICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgICAgLnBvc3Qge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjFzIGFsbCBlYXNlO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0OmhvdmVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwwLDAsLjE1KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3QgPiBkaXYge1xuICAgICAgICAgICAgICB3aWR0aDogMjQwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RfX2NvbnRlbnQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RfX2NvbnRlbnRfX2RhdGUge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogbWVkaXVtLWNvbnRlbnQtc2VyaWYtZm9udCxHZW9yZ2lhLENhbWJyaWEsXCJUaW1lcyBOZXcgUm9tYW5cIixUaW1lcyxzZXJpZjtcbiAgICAgICAgICAgICAgY29sb3I6ICNhZmFmYWY7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RfX2NvbnRlbnRfX3RpdGxlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN0b2x6bCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0X19jb250ZW50X19zZXBhcmF0b3Ige1xuICAgICAgICAgICAgICBtYXJnaW46IDMwcHggMDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTRlNDtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wb3N0X19jb250ZW50X19kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC44NCk7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtZWRpdW0tY29udGVudC1zZXJpZi1mb250LEdlb3JnaWEsQ2FtYnJpYSxcIlRpbWVzIE5ldyBSb21hblwiLFRpbWVzLHNlcmlmO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RfX2ltYWdlIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzllYzZmMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBvc3RfX3ZpZGVvIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucG9zdF9fdmlkZW9fX2NvbnRlbnQge1xuICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgNjBweCk7XG4gICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlICsgNjBweCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk3MHB4KSB7XG5cbiAgICAgICAgICAgICAgLnBvc3Qge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMTVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnBvc3QgPiBkaXYge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnBvc3QuLS1pcy1ldmVuIHtcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBpbml0aWFsO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnBvc3RfX2NvbnRlbnR7XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5wb3N0X19pbWFnZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG9yZGVyOiAtMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5wb3N0X19jb250ZW50X19zZXBhcmF0b3Ige1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnBvc3RfX2NvbnRlbnRfX3RpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAucG9zdF9fdmlkZW8ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L0xhbmd1YWdlLkNvbnN1bWVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJpcGxlQmxvZ1Bvc3Q7XG4iXX0= */\n/*@ sourceURL=/Users/mmorais/Documents/website/components/posts/BlogPost/TripleBlogPost.js */"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TripleBlogPost);

/***/ })

})
//# sourceMappingURL=blog.js.75d0c942d65b0c8312e8.hot-update.js.map