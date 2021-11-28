"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Empresas_vue"],{

/***/ "./resources/js/components/Empresas.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Empresas.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Empresas_vue_vue_type_template_id_4af35d16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Empresas.vue?vue&type=template&id=4af35d16& */ "./resources/js/components/Empresas.vue?vue&type=template&id=4af35d16&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Empresas_vue_vue_type_template_id_4af35d16___WEBPACK_IMPORTED_MODULE_0__.render,
  _Empresas_vue_vue_type_template_id_4af35d16___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Empresas.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Empresas.vue?vue&type=template&id=4af35d16&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Empresas.vue?vue&type=template&id=4af35d16& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Empresas_vue_vue_type_template_id_4af35d16___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Empresas_vue_vue_type_template_id_4af35d16___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Empresas_vue_vue_type_template_id_4af35d16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Empresas.vue?vue&type=template&id=4af35d16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Empresas.vue?vue&type=template&id=4af35d16&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Empresas.vue?vue&type=template&id=4af35d16&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Empresas.vue?vue&type=template&id=4af35d16& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container mt-4" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "mb-5 text-center col" }, [
        _c("h1", [_vm._v("Historial de Empresas Registradas")]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mb-5 input-group" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-success",
                attrs: { to: { name: "regEmpresa" } },
              },
              [
                _c("i", { staticClass: "fas fa-plus-circle" }, [
                  _vm._v(" Registrar Empresa"),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "input-group-text",
                attrs: { id: "basic-addon1" },
              },
              [_vm._v("  Nombre de la empresa ->")]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                type: "text",
                placeholder: "Buscar el nombre de la empresa registrada",
                "aria-label": "Burcar el nombre de la empresa registrada",
                "aria-describedby": "basic-addon2",
              },
            }),
            _vm._v(" "),
            _vm._m(0),
          ],
          1
        ),
        _vm._v(" "),
        _vm._m(1),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "button" } },
        [_vm._v("Buscar")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", { staticClass: "table table-hover table-dark " }, [
      _c("thead", [
        _c("tr", [
          _c("th", { attrs: { scope: "col" } }, [_vm._v("N°")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Gestión")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [
            _vm._v("Nombre de la Empresa"),
          ]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Asesor")]),
        ]),
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("th", { attrs: { scope: "row" } }, [_vm._v("1")]),
          _vm._v(" "),
          _c("td", [_vm._v("Mark")]),
          _vm._v(" "),
          _c("td", [_vm._v("Otto")]),
          _vm._v(" "),
          _c("td", [_vm._v("@mdo")]),
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", { attrs: { scope: "row" } }, [_vm._v("2")]),
          _vm._v(" "),
          _c("td", [_vm._v("Jacob")]),
          _vm._v(" "),
          _c("td", [_vm._v("Thornton")]),
          _vm._v(" "),
          _c("td", [_vm._v("@fat")]),
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", { attrs: { scope: "row" } }, [_vm._v("3")]),
          _vm._v(" "),
          _c("td", [_vm._v("Larry the Bird")]),
          _vm._v(" "),
          _c("td"),
          _vm._v(" "),
          _c("td", [_vm._v("@twitter")]),
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", { attrs: { scope: "row" } }, [_vm._v("4")]),
          _vm._v(" "),
          _c("td"),
          _vm._v(" "),
          _c("td"),
          _vm._v(" "),
          _c("td"),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);