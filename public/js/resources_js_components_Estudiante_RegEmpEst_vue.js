"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Estudiante_RegEmpEst_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Estudiante/RegEmpEst.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Estudiante/RegEmpEst.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      empresa: {
        Nombre_Largo: "",
        Nombre_Corto: "",
        Correo_electronico: "",
        Telefono: "",
        NIT: "",
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
  methods: {
    submit: function submit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("Todo bien aquí");
                _context.next = 3;
                return axios.post('/api/empresa', _this.empresa);

              case 3:
                console.log("El problema es aquí");
                _this.empresa.Nombre_Largo = "";
                _this.empresa.Nombre_Corto = "";
                _this.empresa.Correo_electronico = "";
                _this.empresa.Telefono = "";
                _this.empresa.NIT = "";
                _this.empresa.Solvencia = "";
                _this.empresa.Constitucion = "";
                _this.empresa.Plan_Pago = "";
                _this.empresa.Carta = "";
                _this.empresa.Socio_1 = "";
                _this.empresa.Socio_2 = "";
                _this.empresa.Socio_3 = "";
                _this.empresa.Socio_4 = "";
                _this.empresa.Socio_5 = "";
                _this.empresa.AsesordeEmp = "";
                _this.empresa.GetiodeEmp = "";
                _this.empresa.Estado_Aprob = 0; //onsole.log(this.response);

                _this.$router.push({
                  name: "empresas"
                });

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    processFileSolv: function processFileSolv(event) {
      var self = this;
      var Solv = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (evt) {
        self.empresa.Solvencia = reader.result;
      };

      reader.readAsDataURL(Solv);
      console.log("Esto me mostrará el tipo de dato");
      console.log(_typeof(reader.result));
    },
    processFileConst: function processFileConst(event) {
      var self = this;
      var Consti = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (evt) {
        self.empresa.Constitucion = reader.result;
      };

      reader.readAsDataURL(Consti);
    },
    processFilePlan: function processFilePlan(event) {
      var self = this;
      var Plande = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (evt) {
        self.empresa.Plan_Pago = reader.result;
      };

      reader.readAsDataURL(Plande);
    },
    processFileCarta: function processFileCarta(event) {
      var self = this;
      var Car = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (evt) {
        self.empresa.Carta = reader.result;
      };

      reader.readAsDataURL(Car);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Estudiante/RegEmpEst.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Estudiante/RegEmpEst.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegEmpEst_vue_vue_type_template_id_49ab48c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegEmpEst.vue?vue&type=template&id=49ab48c0& */ "./resources/js/components/Estudiante/RegEmpEst.vue?vue&type=template&id=49ab48c0&");
/* harmony import */ var _RegEmpEst_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegEmpEst.vue?vue&type=script&lang=js& */ "./resources/js/components/Estudiante/RegEmpEst.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegEmpEst_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegEmpEst_vue_vue_type_template_id_49ab48c0___WEBPACK_IMPORTED_MODULE_0__.render,
  _RegEmpEst_vue_vue_type_template_id_49ab48c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Estudiante/RegEmpEst.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Estudiante/RegEmpEst.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Estudiante/RegEmpEst.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegEmpEst_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegEmpEst.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Estudiante/RegEmpEst.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegEmpEst_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Estudiante/RegEmpEst.vue?vue&type=template&id=49ab48c0&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Estudiante/RegEmpEst.vue?vue&type=template&id=49ab48c0& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegEmpEst_vue_vue_type_template_id_49ab48c0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegEmpEst_vue_vue_type_template_id_49ab48c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegEmpEst_vue_vue_type_template_id_49ab48c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegEmpEst.vue?vue&type=template&id=49ab48c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Estudiante/RegEmpEst.vue?vue&type=template&id=49ab48c0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Estudiante/RegEmpEst.vue?vue&type=template&id=49ab48c0&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Estudiante/RegEmpEst.vue?vue&type=template&id=49ab48c0& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "card" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c(
            "form",
            {
              staticClass: "form-group",
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.submit.apply(null, arguments)
                },
              },
            },
            [
              _c("hr"),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.empresa.Nombre_Largo,
                    expression: "empresa.Nombre_Largo",
                  },
                ],
                staticClass: "form-control",
                attrs: { id: "Nombre_Largo", type: "text" },
                domProps: { value: _vm.empresa.Nombre_Largo },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.empresa, "Nombre_Largo", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.empresa.Nombre_Corto,
                    expression: "empresa.Nombre_Corto",
                  },
                ],
                staticClass: "form-control",
                attrs: { id: "Nombre_Corto", type: "text" },
                domProps: { value: _vm.empresa.Nombre_Corto },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.empresa, "Nombre_Corto", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _vm._m(4),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.empresa.Correo_electronico,
                    expression: "empresa.Correo_electronico",
                  },
                ],
                staticClass: "form-control",
                attrs: { id: "Correo_electronico", type: "text" },
                domProps: { value: _vm.empresa.Correo_electronico },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.empresa,
                      "Correo_electronico",
                      $event.target.value
                    )
                  },
                },
              }),
              _vm._v(" "),
              _vm._m(5),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.empresa.Telefono,
                    expression: "empresa.Telefono",
                  },
                ],
                staticClass: "form-control",
                attrs: { id: "title", type: "text" },
                domProps: { value: _vm.empresa.Telefono },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.empresa, "Telefono", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _vm._m(6),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.empresa.NIT,
                    expression: "empresa.NIT",
                  },
                ],
                staticClass: "form-control",
                attrs: { id: "NIT", type: "text" },
                domProps: { value: _vm.empresa.NIT },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.empresa, "NIT", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _vm._m(7),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                attrs: { id: "Solvencia", type: "file" },
                on: { change: _vm.processFileSolv },
              }),
              _vm._v(" "),
              _vm._m(8),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                attrs: { id: "Constitucion", type: "file" },
                on: { change: _vm.processFileConst },
              }),
              _vm._v(" "),
              _vm._m(9),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                attrs: { id: "Plan_Pago", type: "file" },
                on: { change: _vm.processFilePlan },
              }),
              _vm._v(" "),
              _vm._m(10),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                attrs: { id: "Carta", type: "file" },
                on: { change: _vm.processFileCarta },
              }),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _vm._m(11),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.empresa.Socio_1,
                    expression: "empresa.Socio_1",
                  },
                ],
                staticClass: "form-control",
                attrs: { id: "Socio_1", type: "text" },
                domProps: { value: _vm.empresa.Socio_1 },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.empresa, "Socio_1", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _vm._m(12),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.empresa.Socio_2,
                    expression: "empresa.Socio_2",
                  },
                ],
                staticClass: "form-control",
                attrs: { id: "Socio_2", type: "text" },
                domProps: { value: _vm.empresa.Socio_2 },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.empresa, "Socio_2", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _vm._m(13),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.empresa.Socio_3,
                    expression: "empresa.Socio_3",
                  },
                ],
                staticClass: "form-control",
                attrs: { id: "Socio_3", type: "text" },
                domProps: { value: _vm.empresa.Socio_3 },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.empresa, "Socio_3", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _vm._m(14),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.empresa.Socio_4,
                    expression: "empresa.Socio_4",
                  },
                ],
                staticClass: "form-control",
                attrs: { id: "Socio_4", type: "text" },
                domProps: { value: _vm.empresa.Socio_4 },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.empresa, "Socio_4", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _vm._m(15),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.empresa.Socio_5,
                    expression: "empresa.Socio_5",
                  },
                ],
                staticClass: "form-control",
                attrs: { id: "Socio_5", type: "text" },
                domProps: { value: _vm.empresa.Socio_5 },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.empresa, "Socio_5", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-4" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary mt-3",
                      attrs: { type: "submit" },
                    },
                    [_vm._v("Registrar")]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-danger mt-3",
                      attrs: { to: { name: "EmpresaEst" } },
                    },
                    [
                      _c("i", { staticClass: "far fa-ballot-check" }),
                      _vm._v(" Cancelar\n        "),
                    ]
                  ),
                ],
                1
              ),
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
    return _c("div", { staticClass: "text-center col" }, [
      _c("h1", [_vm._v("REGISTRO DE EMPRESA")]),
      _c("h2"),
    ])
  },
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
    return _c("label", { attrs: { for: "content" } }, [
      _c("i", { staticClass: "far fa-building" }),
      _vm._v(" Nombre Largo"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "content" } }, [
      _c("i", { staticClass: "fas fa-file-signature" }),
      _vm._v(" Nombre corto"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "content" } }, [
      _c("i", { staticClass: "fas fa-at" }),
      _vm._v(" Correo electrónico"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "content" } }, [
      _c("i", { staticClass: "fas fa-phone-volume" }),
      _vm._v(" Telefono"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "content" } }, [
      _c("i", { staticClass: "fab fa-digg" }),
      _vm._v(" NIT"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "content" } }, [
      _c("i", { staticClass: "fas fa-file-pdf" }),
      _vm._v(" Solvencia"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "content" } }, [
      _c("i", { staticClass: "fas fa-file-pdf" }),
      _vm._v(" Constitución"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "content" } }, [
      _c("i", { staticClass: "fas fa-file-pdf" }),
      _vm._v(" Plan de Pago"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "content" } }, [
      _c("i", { staticClass: "fas fa-file-pdf" }),
      _vm._v(" Carta"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "content" } }, [
      _c("i", { staticClass: "fas fa-user-tie" }),
      _vm._v(" Socio 1"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "content" } }, [
      _c("i", { staticClass: "fas fa-user-tie" }),
      _vm._v(" Socio 2"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "content" } }, [
      _c("i", { staticClass: "fas fa-user-tie" }),
      _vm._v(" Socio 3"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "content" } }, [
      _c("i", { staticClass: "far fa-user" }),
      _vm._v(" Socio 4"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "content" } }, [
      _c("i", { staticClass: "far fa-user" }),
      _vm._v(" Socio 5"),
    ])
  },
]
render._withStripped = true



/***/ })

}]);