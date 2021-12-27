"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Seguimiento_RevSegEmpre_vue"],{

/***/ "./resources/js/components/Seguimiento/RevSegEmpre.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Seguimiento/RevSegEmpre.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RevSegEmpre_vue_vue_type_template_id_479c7f88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RevSegEmpre.vue?vue&type=template&id=479c7f88& */ "./resources/js/components/Seguimiento/RevSegEmpre.vue?vue&type=template&id=479c7f88&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _RevSegEmpre_vue_vue_type_template_id_479c7f88___WEBPACK_IMPORTED_MODULE_0__.render,
  _RevSegEmpre_vue_vue_type_template_id_479c7f88___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Seguimiento/RevSegEmpre.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Seguimiento/RevSegEmpre.vue?vue&type=template&id=479c7f88&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Seguimiento/RevSegEmpre.vue?vue&type=template&id=479c7f88& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RevSegEmpre_vue_vue_type_template_id_479c7f88___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RevSegEmpre_vue_vue_type_template_id_479c7f88___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RevSegEmpre_vue_vue_type_template_id_479c7f88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RevSegEmpre.vue?vue&type=template&id=479c7f88& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Seguimiento/RevSegEmpre.vue?vue&type=template&id=479c7f88&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Seguimiento/RevSegEmpre.vue?vue&type=template&id=479c7f88&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Seguimiento/RevSegEmpre.vue?vue&type=template&id=479c7f88& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "card-body" }, [
        _c(
          "form",
          {
            attrs: { action: "" },
            on: {
              submit: function ($event) {
                $event.preventDefault()
                return _vm.RevSegEmpre.apply(null, arguments)
              },
            },
          },
          [_vm._m(1)]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center col" }, [
      _c("h1", [_vm._v("Revision de la Grupo-Empresas")]),
      _vm._v(" "),
      _c("hr"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-5 offset-md-4" }, [
      _c("form", [
        _c("fieldset", { attrs: { disabled: "" } }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "disabledTextInput" } }, [
              _c("i", { staticClass: "fas fa-calendar-week" }),
              _vm._v(" Gestión"),
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "disabledTextInput",
                placeholder: "Gestión",
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "disabledTextInput" } }, [
              _c("i", { staticClass: "far fa-user" }),
              _vm._v(" Asesor"),
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "disabledTextInput",
                placeholder: "Nombre del Asesor",
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "disabledTextInput" } }, [
              _c("i", { staticClass: "fas fa-signature" }),
              _vm._v(" Nombre"),
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "disabledTextInput",
                placeholder: "Nombre de la Grupo Empresa",
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "disabledTextInput" } }, [
              _c("i", { staticClass: "fas fa-envelope-open-text" }),
              _vm._v(" Correo Electrónico"),
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "disabledTextInput",
                placeholder: "Correo de la Empresa",
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "disabledTextInput" } }, [
              _c("i", { staticClass: "fas fa-envelope-open-text" }),
              _vm._v(" Correo Electrónico"),
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "disabledTextInput",
                placeholder: "Correo de la Empresa",
              },
            }),
            _vm._v(" "),
            _c("hr"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "disabledTextInput" } }, [
              _c("i", { staticClass: "fas fa-file-pdf" }),
              _vm._v(" Boleta de garantia"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group-prepend" }, [
              _c(
                "span",
                {
                  staticClass: "input-group-text",
                  attrs: { id: "inputGroupPrepend" },
                },
                [_vm._v("PDF")]
              ),
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "validationCustomUsername",
                placeholder: "Documento.pdf",
                "aria-describedby": "inputGroupPrepend",
                required: "",
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "disabledTextInput" } }, [
              _c("i", { staticClass: "fas fa-file-pdf" }),
              _vm._v(" Carta de Presentación"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group-prepend" }, [
              _c(
                "span",
                {
                  staticClass: "input-group-text",
                  attrs: { id: "inputGroupPrepend" },
                },
                [_vm._v("PDF")]
              ),
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "validationCustomUsername",
                placeholder: "Documento.pdf",
                "aria-describedby": "inputGroupPrepend",
                required: "",
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "disabledTextInput" } }, [
              _c("i", { staticClass: "fas fa-file-pdf" }),
              _vm._v(" Constitución de la Empresa"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group-prepend" }, [
              _c(
                "span",
                {
                  staticClass: "input-group-text",
                  attrs: { id: "inputGroupPrepend" },
                },
                [_vm._v("PDF")]
              ),
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "validationCustomUsername",
                placeholder: "Documento.pdf",
                "aria-describedby": "inputGroupPrepend",
                required: "",
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "disabledTextInput" } }, [
              _c("i", { staticClass: "fas fa-file-pdf" }),
              _vm._v(" Solvencia Técnica"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group-prepend" }, [
              _c(
                "span",
                {
                  staticClass: "input-group-text",
                  attrs: { id: "inputGroupPrepend" },
                },
                [_vm._v("PDF")]
              ),
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "validationCustomUsername",
                placeholder: "Documento.pdf",
                "aria-describedby": "inputGroupPrepend",
                required: "",
              },
            }),
          ]),
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "exampleFormControlTextarea1" } }, [
            _c("i", { staticClass: "fas fa-comments" }),
            _vm._v(" Escribir las observaciones"),
          ]),
          _vm._v(" "),
          _c("textarea", {
            staticClass: "form-control",
            attrs: { id: "exampleFormControlTextarea1", rows: "3" },
          }),
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-success", attrs: { type: "submit" } },
          [_vm._v("Enviar")]
        ),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-warning" }, [_vm._v("Volver")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);