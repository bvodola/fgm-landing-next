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
  yellow: "#ffe87e"
};
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject());
var padded = "\n  padding-left: 10%;\n  padding-right: 10%;\n";
var Section = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__Section",
  componentId: "a66j7v-0"
})(["", ""], padded);
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav.withConfig({
  displayName: "pages__Nav",
  componentId: "a66j7v-1"
})(["position:fixed;background:#fff;display:flex;width:100%;height:70px;align-items:center;justify-content:space-between;padding:10px;", " .logo{img{height:40px;}}.menu{list-style-type:none;display:flex;li{a{text-decoration:none;color:#000;font-size:18px;margin:0 10px;}a.featured{font-family:\"Gotham\";font-weight:500;color:", ";}}}"], padded, theme.red);
var Banner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__Banner",
  componentId: "a66j7v-2"
})(["padding-top:120px;background-image:url(\"/yellow-bg.jpg\");background-size:cover;.hero{width:550px;max-width:100%:}.cta{flex-direction:column;text-align:center;h1{color:", ";text-transform:uppercase;font-family:'Gotham';font-weight:700;text-shadow:2px 2px 0px #caa23b;}h2{color:", ";text-shadow:1px 1px 0px #caa23b;}}.packs{img.pack{width:100%;}}"], theme.darkBlue, theme.darkGray);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "pages__Button",
  componentId: "a66j7v-3"
})(["padding:12px 36px;border:none;font-size:28px;font-family:\"Gotham\";font-weight:700;text-transform:uppercase;border-radius:30px;background-color:", ";color:white;outline:none;"], theme.red);
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
})(["color:", ";background-color:", ";border-radius:100%;font-family:\"Gotham\";font-weight:700;width:48px;height:48px;font-size:28px;display:flex;justify-content:center;align-items:center;padding:3px 0 0 0;"], theme.yellow, theme.darkBlue);
var HowToSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Section).withConfig({
  displayName: "pages__HowToSection",
  componentId: "a66j7v-7"
})([""]);

var Index = function Index() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("link", {
    href: "/fonts/gotham/stylesheet.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  })), __jsx(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), __jsx(Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("img", {
    src: "/fgm-logo.png",
    alt: "Logo FGM",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  })), __jsx("ul", {
    className: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "Home")), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "|"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx("a", {
    className: "featured",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Participar")), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "|"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Login")), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "|"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Regulamento")))), __jsx(Banner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx(Section, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx("img", {
    className: "hero",
    src: "/fgm-da-sorte.png",
    alt: "FGM d\xE1 Sorte",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  })), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "Quer visitar a IDS 2021 na Alemanha? Com tudo pago!"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "E concorrer a mais de 70 pr\xEAmios entre vale-presentes e cestas de produtos FGM todo m\xEAs."), __jsx(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "Participar"))), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "packs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx("img", {
    className: "pack",
    src: "/pack-esq.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  })), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx("img", {
    className: "pack",
    src: "/pack-dir.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }))))), __jsx(HowToSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx(H1, {
    color: theme.darkBlue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "Como Participar"), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, __jsx(Number, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "1"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, "Compre R$120 em produtos de est\xE9tica ou R$200 em produtos de implantes")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx(Number, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "2"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "Clique em ", __jsx("mark", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, "Participar"), " e cadastre sua nota fiscal atrav\xE9s deste site")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx(Number, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, "3"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "Pronto! Voc\xEA j\xE1 est\xE1 concorrendo a pr\xEAmios todos os meses"))), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx(H1, {
    color: theme.red,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, "Comece a concorrer agora mesmo"), __jsx(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "Participar")))), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, "Perguntas Frequentes"), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, "Como fa\xE7o para participar?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis lobortis semper. Aliquam libero est, pharetra id risus quis, vehicula pellentesque eros. Donec vitae odio id nunc tristique convallis ut et turpis."), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, "Qual per\xEDodo de validade da promo\xE7\xE3o?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis lobortis semper. Aliquam libero est, pharetra id risus quis, vehicula pellentesque eros. Donec vitae odio id nunc tristique convallis ut et turpis.")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, "Qual valor em produtos preciso comprar?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis lobortis semper. Aliquam libero est, pharetra id risus quis, vehicula pellentesque eros. Donec vitae odio id nunc tristique convallis ut et turpis."), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, "Como fa\xE7o para recuperar meu cadastro?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis lobortis semper. Aliquam libero est, pharetra id risus quis, vehicula pellentesque eros. Donec vitae odio id nunc tristique convallis ut et turpis."))), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, __jsx(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, "Participar"))), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, __jsx(H1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, "Ganhadores"), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, __jsx("img", {
    src: "/ganhador-1.png",
    alt: "Ganhador 1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }), __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, "Jo\xE3o Freitas"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, "1 kit Nanosynt")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, __jsx("img", {
    src: "/ganhador-2.png",
    alt: "Ganhador 2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }), __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, "Nicole Almeida"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, "1 kit Vitra")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, __jsx("img", {
    src: "/ganhador-3.png",
    alt: "Ganhador 3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }), __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, "Jaqueline Soares"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, "1 kit Opus")))), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, __jsx(H1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, "Regulamento"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, "Clique no bot\xE3o abaixo para fazer o download do regulamento da promo\xE7\xE3o"), __jsx(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, "BAIXAR REGULAMENTO")), __jsx("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, "Pol\xEDtica de Privacidade \xA92020 FGM. Todos os direitos reservados.", " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }), "CERTIFICADO DE AUTORIZA\xC7\xC3O SECAP/MF N. \xB0 06.007002/2019")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.9d4b815b158140d9858c.hot-update.js.map