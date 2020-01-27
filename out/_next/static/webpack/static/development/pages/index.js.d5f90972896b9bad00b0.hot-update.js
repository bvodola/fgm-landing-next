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
  darkGray: "#383838"
};
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject());
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__Content",
  componentId: "a66j7v-0"
})(["padding:20%;"]);
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav.withConfig({
  displayName: "pages__Nav",
  componentId: "a66j7v-1"
})(["position:fixed;background:#fff;display:flex;width:100%;height:70px;align-items:center;justify-content:space-between;padding:10px;.logo{img{height:40px;}}.menu{list-style-type:none;display:flex;li{a{text-decoration:none;color:#000;font-size:18px;margin:0 10px;}a.featured{font-family:\"Gotham\";font-weight:500;color:", ";}}}"], theme.red);
var Banner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__Banner",
  componentId: "a66j7v-2"
})(["padding-top:120px;background-image:url(\"/yellow-bg.jpg\");background-size:cover;.hero{width:550px;max-width:100%:}.cta{flex-direction:column;text-align:center;h1{color:", ";text-transform:uppercase;}h2{color:", ";}}.packs{img.pack{width:100%;}}"], theme.darkBlue, theme.darkGray);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "pages__Button",
  componentId: "a66j7v-3"
})(["padding:12px 36px;border:none;font-size:28px;font-family:\"Gotham\";font-weight:500;text-transform:uppercase;border-radius:30px;background-color:", ";color:white;outline:none;"], theme.red);
var H1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "pages__H1",
  componentId: "a66j7v-4"
})(["text-align:center;font-family:\"Gotham\";font-weight:500;font-size:36px;color:", ";"], function (props) {
  return props.color || "#000";
});
var H2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "pages__H2",
  componentId: "a66j7v-5"
})([""]);
var Number = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__Number",
  componentId: "a66j7v-6"
})([""]);

var Index = function Index() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("link", {
    href: "/fonts/gotham/stylesheet.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })), __jsx(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), __jsx(Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("img", {
    src: "/fgm-logo.png",
    alt: "Logo FGM",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  })), __jsx("ul", {
    className: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Home")), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "|"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("a", {
    className: "featured",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Participar")), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "|"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "Login")), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "|"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Regulamento")))), __jsx(Banner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("img", {
    className: "hero",
    src: "/fgm-da-sorte.png",
    alt: "FGM d\xE1 Sorte",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  })), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Quer visitar a IDS 2021 na Alemanha? Com tudo pago!"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "E concorrer a mais de 70 pr\xEAmios entre vale-presentes e cestas de produtos FGM todo m\xEAs."), __jsx(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "Participar"))), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "packs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx("img", {
    className: "pack",
    src: "/pack-esq.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  })), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx("img", {
    className: "pack",
    src: "/pack-dir.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }))))), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx(H1, {
    color: theme.darkBlue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "Como Participar"), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx(Number, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "1"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Compre R$120 em produtos de est\xE9tica ou R$200 em produtos de implantes")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx(Number, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "2"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "Clique em ", __jsx("mark", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, "Participar"), " e cadastre sua nota fiscal atrav\xE9s deste site")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx(Number, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "3"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Pronto! Voc\xEA j\xE1 est\xE1 concorrendo a pr\xEAmios todos os meses"))), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx(H1, {
    color: theme.red,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Comece a concorrer agora mesmo"), __jsx(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "Participar")))), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "Perguntas Frequentes"), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "Como fa\xE7o para participar?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis lobortis semper. Aliquam libero est, pharetra id risus quis, vehicula pellentesque eros. Donec vitae odio id nunc tristique convallis ut et turpis."), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "Qual per\xEDodo de validade da promo\xE7\xE3o?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis lobortis semper. Aliquam libero est, pharetra id risus quis, vehicula pellentesque eros. Donec vitae odio id nunc tristique convallis ut et turpis.")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, "Qual valor em produtos preciso comprar?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis lobortis semper. Aliquam libero est, pharetra id risus quis, vehicula pellentesque eros. Donec vitae odio id nunc tristique convallis ut et turpis."), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, "Como fa\xE7o para recuperar meu cadastro?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis lobortis semper. Aliquam libero est, pharetra id risus quis, vehicula pellentesque eros. Donec vitae odio id nunc tristique convallis ut et turpis."))), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, __jsx(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, "Participar"))), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, __jsx(H1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, "Ganhadores"), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, __jsx("img", {
    src: "/ganhador-1.png",
    alt: "Ganhador 1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }), __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, "Jo\xE3o Freitas"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, "1 kit Nanosynt")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, __jsx("img", {
    src: "/ganhador-2.png",
    alt: "Ganhador 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }), __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, "Nicole Almeida"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, "1 kit Vitra")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, __jsx("img", {
    src: "/ganhador-3.png",
    alt: "Ganhador 3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }), __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, "Jaqueline Soares"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, "1 kit Opus")))), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, __jsx(H1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, "Regulamento"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, "Clique no bot\xE3o abaixo para fazer o download do regulamento da promo\xE7\xE3o"), __jsx(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, "BAIXAR REGULAMENTO")), __jsx("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, "Pol\xEDtica de Privacidade \xA92020 FGM. Todos os direitos reservados.", " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }), "CERTIFICADO DE AUTORIZA\xC7\xC3O SECAP/MF N. \xB0 06.007002/2019")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.d5f90972896b9bad00b0.hot-update.js.map