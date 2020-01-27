webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/bvodola/Projects/fgm-landing-next/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  body {\n    margin: 0;\n    font-family: 'Gotham Book';\n  }\n  * {\n    box-sizing: border-box;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var theme = {
  red: "#bd1922",
  darkBlue: "#002e9f",
  darkGray: "#383838",
  yellow: "#ffe87e",
  darkYellow: "#f6c447"
};
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject());
var padded = "\n  padding-left: 10%;\n  padding-right: 10%;\n";
var Section = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__Section",
  componentId: "a66j7v-0"
})(["", " padding-top:72px;padding-bottom:72px;"], padded);
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav.withConfig({
  displayName: "pages__Nav",
  componentId: "a66j7v-1"
})(["position:fixed;background:#fff;display:flex;width:100%;height:70px;align-items:center;justify-content:space-between;padding:10px;", " .logo{img{height:40px;}}.menu{list-style-type:none;display:flex;li{a{text-decoration:none;color:#000;font-size:18px;margin:0 10px;}a.featured{font-family:\"Gotham\";font-weight:500;color:", ";}}}"], padded, theme.red);
var Banner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__Banner",
  componentId: "a66j7v-2"
})(["padding-top:60px;background-image:url(\"/yellow-bg.jpg\");background-size:cover;.hero{max-width:550px;width:100%;}.cta{flex-direction:column;text-align:center;h1{color:", ";text-transform:uppercase;font-family:\"Gotham\";font-weight:700;text-shadow:2px 2px 0px #caa23b;}h2{color:", ";text-shadow:1px 1px 0px #caa23b;}}.packs{img.pack{width:100%;}}"], theme.darkBlue, theme.darkGray);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "pages__Button",
  componentId: "a66j7v-3"
})(["padding:12px 36px;border:none;font-size:28px;font-family:\"Gotham\";font-weight:700;text-transform:uppercase;border-radius:30px;background-color:", ";color:white;outline:none;"], theme.red);
var H1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "pages__H1",
  componentId: "a66j7v-4"
})(["text-align:center;font-family:\"Gotham\";font-weight:500;font-size:36px;color:", ";margin-top:0;"], function (props) {
  return props.color || "#000";
});
var Number = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__Number",
  componentId: "a66j7v-5"
})(["color:", ";background-color:", ";border-radius:100%;font-family:\"Gotham\";font-weight:700;width:48px;height:48px;font-size:28px;display:flex;justify-content:center;align-items:center;padding:3px 0 0 0;"], theme.yellow, theme.darkBlue);
var HowToSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Section).withConfig({
  displayName: "pages__HowToSection",
  componentId: "a66j7v-6"
})(["padding-top:0;p{font-size:20px;text-align:center;mark{background:transparent;color:", ";font-family:\"Gotham\";font-weight:700;}}"], theme.red);
var FAQSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Section).withConfig({
  displayName: "pages__FAQSection",
  componentId: "a66j7v-7"
})(["h1{color:white;}h3{width:100%;text-align:left;font-family:\"Gotham\";font-weight:700;margin:48px 0 0 0;}background:", ";color:white;button{margin-top:32px;background-color:#fff;color:", ";}"], theme.darkBlue, theme.darkBlue);
var WinnersSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Section).withConfig({
  displayName: "pages__WinnersSection",
  componentId: "a66j7v-8"
})(["padding-left:20%;padding-right:20%;h1{margin-bottom:0;color:", ";}h2{margin:0;margin-bottom:48px;color:", ";}img{width:200px;border-radius:100%;}b{color:", ";font-family:\"Gotham\";font-weight:500;margin-top:24px;font-size:20px;}p{margin-top:0;color:", ";font-size:20px;}"], theme.darkBlue, theme.darkGray, theme.darkBlue, theme.darkGray);
var RulesSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Section).withConfig({
  displayName: "pages__RulesSection",
  componentId: "a66j7v-9"
})(["background:", ";color:", ";p{font-size:20px;}button{background:transparent;border:1px solid ", ";color:", ";font-size:24px;margin-top:20px;}"], theme.darkYellow, theme.darkBlue, theme.darkBlue, theme.darkBlue);
var Footer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].footer.withConfig({
  displayName: "pages__Footer",
  componentId: "a66j7v-10"
})(["background:", ";color:white;padding:32px 0;p{width:100%;text-align:center;margin:0;}"], theme.darkBlue);

var Index = function Index() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, __jsx("link", {
    href: "/fonts/gotham/stylesheet.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  })), __jsx(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }), __jsx(Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, __jsx("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, __jsx("img", {
    src: "/fgm-logo.png",
    alt: "Logo FGM",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  })), __jsx("ul", {
    className: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, "Home")), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, "|"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, __jsx("a", {
    className: "featured",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, "Participar")), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, "|"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, "Login")), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, "|"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, "Regulamento")))), __jsx(Banner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, __jsx(Section, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, __jsx("img", {
    className: "hero",
    src: "/fgm-da-sorte.png",
    alt: "FGM d\xE1 Sorte",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  })), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, "Quer visitar a IDS 2021 na Alemanha? Com tudo pago!"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, "E concorrer a mais de 70 pr\xEAmios entre vale-presentes e cestas de produtos FGM todo m\xEAs."), __jsx(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, "Participar"))), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "packs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, __jsx("img", {
    className: "pack",
    src: "/pack-esq.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  })), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, __jsx("img", {
    className: "pack",
    src: "/pack-dir.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }))))), __jsx(HowToSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, __jsx(H1, {
    color: theme.darkBlue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }, "Como Participar"), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, __jsx(Number, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, "1"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, "Compre R$120 em produtos de est\xE9tica ou R$200 em produtos de implantes")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, __jsx(Number, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, "2"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }, "Clique em ", __jsx("mark", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, "Participar"), " e cadastre sua nota fiscal atrav\xE9s deste site")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, __jsx(Number, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, "3"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, "Pronto! Voc\xEA j\xE1 est\xE1 concorrendo a pr\xEAmios todos os meses"))), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    padded: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, __jsx(H1, {
    color: theme.red,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }, "Comece a concorrer agora mesmo"), __jsx(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }, "Participar")))), __jsx(FAQSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }, __jsx(H1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }, "Perguntas Frequentes"), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  }, "Como fa\xE7o para participar?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis lobortis semper. Aliquam libero est, pharetra id risus quis, vehicula pellentesque eros. Donec vitae odio id nunc tristique convallis ut et turpis."), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, "Qual per\xEDodo de validade da promo\xE7\xE3o?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis lobortis semper. Aliquam libero est, pharetra id risus quis, vehicula pellentesque eros. Donec vitae odio id nunc tristique convallis ut et turpis.")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  }, "Qual valor em produtos preciso comprar?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis lobortis semper. Aliquam libero est, pharetra id risus quis, vehicula pellentesque eros. Donec vitae odio id nunc tristique convallis ut et turpis."), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }, "Como fa\xE7o para recuperar meu cadastro?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis lobortis semper. Aliquam libero est, pharetra id risus quis, vehicula pellentesque eros. Donec vitae odio id nunc tristique convallis ut et turpis."))), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    padded: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }, __jsx(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }, "Participar")))), __jsx(WinnersSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: this
  }, __jsx(H1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, "Ganhadores"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }, "Confira quem j\xE1 ganhou nosso sorteio"))), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }, __jsx("img", {
    src: "/ganhador-1.png",
    alt: "Ganhador 1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }), __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: this
  }, "Jo\xE3o Freitas"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: this
  }, "1 kit Nanosynt")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, __jsx("img", {
    src: "/ganhador-2.png",
    alt: "Ganhador 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }), __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  }, "Nicole Almeida"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: this
  }, "1 kit Vitra")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: this
  }, __jsx("img", {
    src: "/ganhador-3.png",
    alt: "Ganhador 3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: this
  }), __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }, "Jaqueline Soares"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }, "1 kit Opus")))), __jsx(RulesSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }, __jsx(H1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }, "Regulamento"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }, "Clique no bot\xE3o abaixo para fazer o download do regulamento da promo\xE7\xE3o"), __jsx(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414
    },
    __self: this
  }, "BAIXAR REGULAMENTO")))), __jsx(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
    },
    __self: this
  }, "Pol\xEDtica de Privacidade \xA92020 FGM. Todos os direitos reservados.", " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: this
  }), "CERTIFICADO DE AUTORIZA\xC7\xC3O SECAP/MF N. \xB0 06.007002/2019")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.7ba281a038850a6fdbb3.hot-update.js.map