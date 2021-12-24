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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "laempresa",
  data: function data() {
    return {
      laempresa: {
        ID: "",
        Nombre_Largo: "",
        Nombre_Corto: "",
        Correo: "",
        Teléfono: "",
        NIT: "",
        Solvencia: "",
        Constitución: "",
        Plan_de_Pago: "",
        Carta: "",
        Socio_1: "",
        Socio_2: "",
        Socio_3: "",
        Socio_4: "",
        Socio_5: ""
      }
    };
  },
  mounted: function mounted() {//this.mostrarEmp()
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
                return _this.axios.get("/api/empresa/".concat(_this.$route.params.id)).then(function (response) {
                  var _response$data = response.data,
                      Nombre_Largo = _response$data.Nombre_Largo,
                      Correo = _response$data.Correo,
                      Plan_de_Pago = _response$data.Plan_de_Pago,
                      Constitucion = _response$data.Constitucion,
                      Carta = _response$data.Carta,
                      Solvencia = _response$data.Solvencia,
                      Socio_1 = _response$data.Socio_1,
                      Socio_2 = _response$data.Socio_2,
                      Socio_3 = _response$data.Socio_3,
                      Socio_4 = _response$data.Socio_4,
                      Socio_5 = _response$data.Socio_5;
                  _this.empresa.Nombre_Largo = Nombre_Largo;
                  _this.empresa.Correo = Correo;
                  _this.empresa.Plan_de_Pago = Plan_de_Pago;
                  _this.empresa.Constitucion = Constitucion;
                  _this.empresa.Carta = Carta;
                  _this.empresa.Solvencia = Solvencia;
                  _this.empresa.Socio_1 = Socio_1;
                  _this.empresa.Socio_2 = Socio_2;
                  _this.empresa.Socio_3 = Socio_3;
                  _this.empresa.Socio_4 = Socio_4;
                  _this.empresa.Socio_5 = Socio_5;
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
                return _this2.axios.put("/api/empresa/".concat(_this2.$route.params.id), _this2.empresa).then(function (response) {
                  console.log(response.data);

                  _this2.$router.push({
                    name: "laempresa"
                  });
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
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
                  return _vm.RegEmpresa.apply(null, arguments)
                },
              },
            },
            [_vm._m(1)]
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
    return _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "row needs-validation", attrs: { novalidate: "" } },
        [
          _c("div", { staticClass: "col-lg-5 offset-md-1" }, [
            _c(
              "label",
              {
                staticClass: "form-label",
                attrs: { for: "validationCustom01" },
              },
              [_c("strong", [_vm._v("Nombre Largo")])]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "fomr-control",
              attrs: { type: "text", placeholder: "", readonly: "" },
            }),
            _vm._v(" "),
            _c("div", { staticClass: "valid-feedback" }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
            _c(
              "label",
              {
                staticClass: "form-label",
                attrs: { for: "validationCustom01" },
              },
              [_c("strong", [_vm._v("Socios (Codigo SIS)")])]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                maxlength: "9",
                minlength: "9",
                type: "text",
                placeholder: "Representante Legal",
                name: "Socio1",
                id: "Socio1",
                required: "",
                pattern: "[0-9]+",
                oninvalid: "setCustomValidity('Revise el codigo SIS ')",
                onchange: "try{setCustomValidity('')}catch(e){}",
              },
            }),
            _vm._v(" "),
            _c("div", { staticClass: "valid-feedback" }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
            _c("label", {
              staticClass: "form-label",
              attrs: { for: "validationCustom01" },
            }),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                maxlength: "9",
                minlength: "9",
                type: "text",
                placeholder: "Integrante",
                name: "Socio2",
                id: "Socio2",
                required: "",
                pattern: "[0-9]+",
                oninvalid: "setCustomValidity('Revise el codigo SIS  ')",
                onchange: "try{setCustomValidity('')}catch(e){}",
              },
            }),
            _vm._v(" "),
            _c("div", { staticClass: "valid-feedback" }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-5 offset-md-1" }, [
            _c(
              "label",
              {
                staticClass: "form-label",
                attrs: { for: "validationCustom01" },
              },
              [_c("strong", [_vm._v("Correo de la Empresa")])]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                type: "email",
                name: "email",
                id: "Correo_Emp",
                placeholder: "Correo Electrónico de la Empresa",
              },
            }),
            _vm._v(" "),
            _c("div", { staticClass: "valid-feedback" }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
            _c("label", {
              staticClass: "form-label",
              attrs: { for: "validationCustom01" },
            }),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                maxlength: "9",
                minlength: "9",
                type: "text",
                placeholder: "Integrante",
                name: "Socio3",
                id: "Socio3",
                required: "",
                pattern: "[0-9]+",
                oninvalid: "setCustomValidity('Revise el codigo SIS ')",
                onchange: "try{setCustomValidity('')}catch(e){}",
              },
            }),
            _vm._v(" "),
            _c("div", { staticClass: "valid-feedback" }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 offset-md-2" }, [
            _c("label", {
              staticClass: "form-label",
              attrs: { for: "validationCustom01" },
            }),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                maxlength: "9",
                minlength: "9",
                type: "text",
                placeholder: "Integrante",
                name: "Socio4",
                id: "Socio 4",
                pattern: "[0-9]+",
                oninvalid: "setCustomValidity('Revise el codigo SIS ')",
                onchange: "try{setCustomValidity('')}catch(e){}",
              },
            }),
            _vm._v(" "),
            _c("div", { staticClass: "valid-feedback" }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 offset-md-2" }, [
            _c("label", {
              staticClass: "form-label",
              attrs: { for: "validationCustom01" },
            }),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                maxlength: "9",
                minlength: "9",
                type: "text",
                placeholder: "Integrante",
                name: "Socio5",
                id: "Socio5",
                pattern: "[0-9]+",
                oninvalid: "setCustomValidity('Revise el codigo SIS  ')",
                onchange: "try{setCustomValidity('')}catch(e){}",
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
          _c(
            "label",
            { staticClass: "form-label", attrs: { for: "formFile" } },
            [_c("strong", [_vm._v("Solvencia Tecnica")])]
          ),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: {
              accept: ".pdf",
              type: "file",
              id: "Documento_1",
              required: "",
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-4 offset-md-2" }, [
          _c(
            "label",
            { staticClass: "form-label", attrs: { for: "formFile" } },
            [_c("strong", [_vm._v("Plan de Pago")])]
          ),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: {
              accept: ".pdf",
              type: "file",
              id: "Documento_2",
              required: "",
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
          _c(
            "label",
            { staticClass: "form-label", attrs: { for: "formFile" } },
            [_c("strong", [_vm._v("Constitución de la Empresa")])]
          ),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: {
              accept: ".pdf",
              type: "file",
              id: "Documento_3",
              required: "",
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-4 offset-md-2" }, [
          _c(
            "label",
            { staticClass: "form-label", attrs: { for: "formFile" } },
            [_c("strong", [_vm._v("Carta de Presentación")])]
          ),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: {
              accept: ".pdf",
              type: "file",
              id: "Documento_4",
              required: "",
            },
          }),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-5 offset-md-1" }, [
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
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6" }, [
          _c("label", {
            staticClass: "form-label",
            attrs: { for: "validationCustom01" },
          }),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-6 offset-md-2" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-lg btn-danger",
                  attrs: { type: "submit" },
                },
                [_vm._v("Cancelar")]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-lg btn-success",
                  attrs: { type: "submit" },
                },
                [_vm._v("Registrar")]
              ),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);