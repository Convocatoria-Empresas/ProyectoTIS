"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Seguimiento_RevSegPost_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Seguimiento/RevSegPost.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Seguimiento/RevSegPost.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
        Socio_5: ""
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
                  _this.laempresa.Socio_5 = response.data.Socio_5; //this.laempresa.Estado_Aprob = response.data.Estado_Aprob

                  //this.laempresa.Estado_Aprob = response.data.Estado_Aprob
                  console.log(_this.laempresa.Nombre_Largo);
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
    AcpeRe: function AcpeRe(e) {
      if (e.target.value == 1) {
        this.laempresa.Estado_Aprob = 1;
      } else {
        this.laempresa.Estado_Aprob = 0;
      }

      console.log(this.laempresa.Estado_Aprob);
    },
    actualizar: function actualizar() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                /* await this.axios.put(`/api/empresa/${this.$route.params.id}`,this.laempresa).then(response=>{
                     console.log(response.data)
                     this.$router.push({name:"SegPostulante"})
                 }).catch(error=>{
                     console.log(error)
                 })*/
                _this2.$router.push({
                  name: "SegPostulante"
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
    /*downloadPDF(pdf) {
            const linkSource = `data:application/pdf;base64,${pdf}`;
            const downloadLink = document.createElement("a");
            const fileName = "abc.pdf";
            downloadLink.href = linkSource;
            downloadLink.download = fileName;
            downloadLink.click();
    }*/

  }
});

/***/ }),

/***/ "./resources/js/components/Seguimiento/RevSegPost.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Seguimiento/RevSegPost.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RevSegPost_vue_vue_type_template_id_00b1bb23___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RevSegPost.vue?vue&type=template&id=00b1bb23& */ "./resources/js/components/Seguimiento/RevSegPost.vue?vue&type=template&id=00b1bb23&");
/* harmony import */ var _RevSegPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RevSegPost.vue?vue&type=script&lang=js& */ "./resources/js/components/Seguimiento/RevSegPost.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RevSegPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RevSegPost_vue_vue_type_template_id_00b1bb23___WEBPACK_IMPORTED_MODULE_0__.render,
  _RevSegPost_vue_vue_type_template_id_00b1bb23___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Seguimiento/RevSegPost.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Seguimiento/RevSegPost.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Seguimiento/RevSegPost.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RevSegPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RevSegPost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Seguimiento/RevSegPost.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RevSegPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Seguimiento/RevSegPost.vue?vue&type=template&id=00b1bb23&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Seguimiento/RevSegPost.vue?vue&type=template&id=00b1bb23& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RevSegPost_vue_vue_type_template_id_00b1bb23___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RevSegPost_vue_vue_type_template_id_00b1bb23___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RevSegPost_vue_vue_type_template_id_00b1bb23___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RevSegPost.vue?vue&type=template&id=00b1bb23& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Seguimiento/RevSegPost.vue?vue&type=template&id=00b1bb23&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Seguimiento/RevSegPost.vue?vue&type=template&id=00b1bb23&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Seguimiento/RevSegPost.vue?vue&type=template&id=00b1bb23& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    _c("h1", [_vm._v("Revision de los Postulantes")]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c(
            "form",
            {
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.actualizar.apply(null, arguments)
                },
              },
            },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass: "row needs-validation",
                    attrs: { novalidate: "" },
                  },
                  [
                    _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: this.laempresa.Nombre_Largo,
                          readonly: "",
                        },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "valid-feedback" }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: this.laempresa.Socio_1,
                          readonly: "",
                        },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "valid-feedback" }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: this.laempresa.Socio_2,
                          readonly: "",
                        },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "valid-feedback" }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
                      _vm._m(4),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: this.laempresa.Socio_3,
                          readonly: "",
                        },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "valid-feedback" }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
                      _vm._m(5),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: this.laempresa.Socio_4,
                          readonly: "",
                        },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "valid-feedback" }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
                      _vm._m(6),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: this.laempresa.Socio_5,
                          readonly: "",
                        },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "valid-feedback" }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
                      _vm._m(7),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: this.laempresa.Correo_electronico,
                          readonly: "",
                        },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "valid-feedback" }),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
                    _vm._m(8),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        attrs: {
                          download: "Solvencia",
                          href: this.laempresa.Solvencia,
                          title: "Download pdf document",
                        },
                      },
                      [_vm._v("Descargar")]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
                    _vm._m(9),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        attrs: {
                          download: "Plan_de_Pago",
                          href: this.laempresa.Plan_Pago,
                          title: "Download pdf document",
                        },
                      },
                      [_vm._v("Descargar")]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
                    _vm._m(10),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        attrs: {
                          download: "Constitución",
                          href: this.laempresa.Constitucion,
                          title: "Download pdf document",
                        },
                      },
                      [_vm._v("Descargar")]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
                    _vm._m(11),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        attrs: {
                          download: "Carta",
                          href: this.laempresa.Carta,
                          title: "Download pdf document",
                        },
                      },
                      [_vm._v("Descargar")]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _vm._m(12),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-6" }, [
                    _c("label", {
                      staticClass: "form-label",
                      attrs: { for: "validationCustom01" },
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "form-group col-md-4" }, [
                        _c("div", { staticClass: "col-auto my-1" }, [
                          _c(
                            "label",
                            {
                              staticClass: "mr-sm-2",
                              attrs: { for: "inlineFormCustomSelect" },
                            },
                            [_vm._v("Estado")]
                          ),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              staticClass: "custom-select mr-sm-2",
                              attrs: {
                                id: "inlineFormCustomSelect",
                                required: "",
                              },
                              on: {
                                change: function ($event) {
                                  return _vm.AcpeRe($event)
                                },
                              },
                            },
                            [
                              _c(
                                "option",
                                { attrs: { disabled: "", selected: "" } },
                                [_vm._v("Aceptar/Rechazar")]
                              ),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "1" } }, [
                                _vm._v("Aceptar"),
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "0" } }, [
                                _vm._v("Rechazar"),
                              ]),
                            ]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _vm._m(13),
                    ]),
                  ]),
                ]),
              ]),
            ]
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_c("strong", [_vm._v("Registrar Empresa")])]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "validationCustom01" } },
      [_c("strong", [_vm._v("Nombre Largo")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "validationCustom01" } },
      [_c("strong", [_vm._v("Socios (Codigo SIS)")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "validationCustom01" } },
      [_c("strong", [_vm._v("Socio 2")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "validationCustom01" } },
      [_c("strong", [_vm._v("Socio 3")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "validationCustom01" } },
      [_c("strong", [_vm._v("Socio 4")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "validationCustom01" } },
      [_c("strong", [_vm._v("Socio 5")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "validationCustom01" } },
      [_c("strong", [_vm._v("Correo de la Empresa")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "formFile" } },
      [_c("strong", [_vm._v("Solvencia Tecnica")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "formFile" } },
      [_c("strong", [_vm._v("Plan de Pago")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "formFile" } },
      [_c("strong", [_vm._v("Constitución de la Empresa")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "formFile" } },
      [_c("strong", [_vm._v("Carta de Presentación")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-5 offset-md-1" }, [
      _c("li", [
        _c(
          "a",
          {
            staticClass: "nav-link text-info",
            attrs: {
              href: "https://www.facebook.com/lacocoyodotcom/",
              target: "_blank",
            },
          },
          [_vm._v("Mas información")]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-4" }, [
      _c(
        "button",
        { staticClass: "btn btn-lg btn-success", attrs: { type: "submit" } },
        [_vm._v("Aceptar")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);