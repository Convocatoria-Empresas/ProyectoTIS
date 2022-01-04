"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Seguimiento_RevSegEmpre_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Seguimiento/RevSegEmpre.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Seguimiento/RevSegEmpre.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "laempresa",
  data: function data() {
    return {
      laempresa: {
        Nombre_Largo: "",
        Correo_electronico: "",
        Solvencia: "",
        Constitucion: "",
        Plan_Pago: "",
        Carta: "",
        Socio_1: "",
        Socio_2: "",
        Socio_3: "",
        Socio_4: "",
        Socio_5: "",
        AsesordeEmp: "",
        GetiodeEmp: "",
        Estado_Aprob: ""
      }
    };
  },
  mounted: function mounted() {
    this.mostrarEmp();
  },
  methods: {
    mostrarEmp: function mostrarEmp() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.axios.put("/api/empresa/".concat(_this.$route.params.id), _this.laempresa).then(function (response) {
                  console.log(response.data);
                  _this.laempresa.Nombre_Largo = response.data.Nombre_Largo;
                  _this.laempresa.Correo_electronico = response.data.Correo_electronico;
                  _this.laempresa.Plan_Pago = response.data.Plan_Pago;
                  _this.laempresa.Constitucion = response.data.Constitucion;
                  _this.laempresa.Carta = response.data.Carta;
                  _this.laempresa.Solvencia = response.data.Solvencia;
                  _this.laempresa.Socio_1 = response.data.Socio_1;
                  _this.laempresa.Socio_2 = response.data.Socio_2;
                  _this.laempresa.Socio_3 = response.data.Socio_3;
                  _this.laempresa.Socio_4 = response.data.Socio_4;
                  _this.laempresa.Socio_5 = response.data.Socio_5;
                  _this.laempresa.AsesordeEmp = response.data.AsesordeEmp;
                  _this.laempresa.GetiodeEmp = response.data.GetiodeEmp;
                  _this.laempresa.Estado_Aprob = response.data.Estado_Aprob;
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    actualizar: function actualizar() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.axios.get("/api/empresa/".concat(_this2.$route.params.id, "/approve/").concat(_this2.laempresa.Estado_Aprob), _this2.laempresa).then(function (response) {
                  console.log(response.data);
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
                _this2.$router.push({
                  name: "SegPostulante"
                })["catch"](function () {});

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

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
/* harmony import */ var _RevSegEmpre_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RevSegEmpre.vue?vue&type=script&lang=js& */ "./resources/js/components/Seguimiento/RevSegEmpre.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RevSegEmpre_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
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

/***/ "./resources/js/components/Seguimiento/RevSegEmpre.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Seguimiento/RevSegEmpre.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RevSegEmpre_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RevSegEmpre.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Seguimiento/RevSegEmpre.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RevSegEmpre_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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
          [
            _c("div", { staticClass: "col-lg-5 offset-md-4" }, [
              _c("form", [
                _c("fieldset", { attrs: { disabled: "" } }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "disabledTextInput",
                        placeholder: this.laempresa.Nombre_Largo,
                        readonly: "",
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "disabledTextInput",
                        placeholder: this.laempresa.Correo_electronico,
                        readonly: "",
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(5),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "disabledTextInput",
                        placeholder: this.laempresa.Telefono,
                        readonly: "",
                      },
                    }),
                    _vm._v(" "),
                    _c("hr"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(6),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group-prepend" }, [
                      _c(
                        "span",
                        {
                          staticClass: "input-group-text",
                          attrs: {
                            download: "Plan_Pago",
                            href: _vm.laempresa.Plan_Pago,
                            id: "inputGroupPrepend",
                          },
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
                    _vm._m(7),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group-prepend" }, [
                      _c(
                        "span",
                        {
                          staticClass: "input-group-text",
                          attrs: {
                            download: "Carta",
                            href: _vm.laempresa.Carta,
                            id: "inputGroupPrepend",
                          },
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
                    _vm._m(8),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group-prepend" }, [
                      _c(
                        "span",
                        {
                          staticClass: "input-group-text",
                          attrs: {
                            download: "Constitucion",
                            href: _vm.laempresa.Constitucion,
                            id: "inputGroupPrepend",
                          },
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
                    _vm._m(9),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group-prepend" }, [
                      _c(
                        "span",
                        {
                          staticClass: "input-group-text",
                          attrs: {
                            download: "Solvencia",
                            href: _vm.laempresa.Solvencia,
                            id: "inputGroupPrepend",
                          },
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
                _vm._m(10),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-success", attrs: { type: "submit" } },
                  [_vm._v("Enviar")]
                ),
                _vm._v(" "),
                _c("button", { staticClass: "btn btn-warning" }, [
                  _vm._v("Volver"),
                ]),
              ]),
            ]),
          ]
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
    return _c("div", { staticClass: "form-group" }, [
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
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
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
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "disabledTextInput" } }, [
      _c("i", { staticClass: "fas fa-signature" }),
      _vm._v(" Nombre"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "disabledTextInput" } }, [
      _c("i", { staticClass: "fas fa-envelope-open-text" }),
      _vm._v(" Correo Electrónico"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "disabledTextInput" } }, [
      _c("i", { staticClass: "fas fa-phone" }),
      _vm._v(" Teléfono"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "disabledTextInput" } }, [
      _c("i", { staticClass: "fas fa-file-pdf" }),
      _vm._v(" Plan de Pago"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "disabledTextInput" } }, [
      _c("i", { staticClass: "fas fa-file-pdf" }),
      _vm._v(" Carta de Presentación"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "disabledTextInput" } }, [
      _c("i", { staticClass: "fas fa-file-pdf" }),
      _vm._v(" Constitución de la Empresa"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "disabledTextInput" } }, [
      _c("i", { staticClass: "fas fa-file-pdf" }),
      _vm._v(" Solvencia Técnica"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "exampleFormControlTextarea1" } }, [
        _c("i", { staticClass: "fas fa-comments" }),
        _vm._v(" Escribir las observaciones"),
      ]),
      _vm._v(" "),
      _c("textarea", {
        staticClass: "form-control",
        attrs: { id: "exampleFormControlTextarea1", rows: "3" },
      }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);