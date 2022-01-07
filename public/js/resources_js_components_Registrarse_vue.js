"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Registrarse_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Registrarse.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Registrarse.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      users: {
        Nombre_usu: "",
        Apellido_Pat: "",
        Apellido_Mat: "",
        Codigo_usu: "",
        Correo_usu: "",
        Telf: "",
        Carnet: "",
        Contrasena_usu: "",
        Rol_usu: ""
      }
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post('/api/user', _this.users);

              case 2:
                response = _context.sent;
                _this.users.Nombre_usu = "";
                _this.users.Apellido_Pat = "";
                _this.users.Apellido_Mat = "";
                _this.users.Codigo_usu = "";
                _this.users.Correo_usu = "";
                _this.users.Telf = "";
                _this.users.Carnet = "";
                _this.users.Contrasena_usu = "";
                _this.users.Rol_usu = "";

                _this.$router.push({
                  name: "home"
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    SelecTipoUsuar: function SelecTipoUsuar(e) {
      if (e.target.value == 1) {
        this.users.Rol_usu = "Asesor";
      } else {
        this.users.Rol_usu = "Estudiante";
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Registrarse.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Registrarse.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Registrarse_vue_vue_type_template_id_78af3f64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registrarse.vue?vue&type=template&id=78af3f64& */ "./resources/js/components/Registrarse.vue?vue&type=template&id=78af3f64&");
/* harmony import */ var _Registrarse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registrarse.vue?vue&type=script&lang=js& */ "./resources/js/components/Registrarse.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Registrarse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registrarse_vue_vue_type_template_id_78af3f64___WEBPACK_IMPORTED_MODULE_0__.render,
  _Registrarse_vue_vue_type_template_id_78af3f64___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Registrarse.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Registrarse.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Registrarse.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrarse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registrarse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Registrarse.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrarse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Registrarse.vue?vue&type=template&id=78af3f64&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Registrarse.vue?vue&type=template&id=78af3f64& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrarse_vue_vue_type_template_id_78af3f64___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrarse_vue_vue_type_template_id_78af3f64___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrarse_vue_vue_type_template_id_78af3f64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registrarse.vue?vue&type=template&id=78af3f64& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Registrarse.vue?vue&type=template&id=78af3f64&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Registrarse.vue?vue&type=template&id=78af3f64&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Registrarse.vue?vue&type=template&id=78af3f64& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("main", [
    _c("div", { staticClass: "row" }, [
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
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.submit.apply(null, arguments)
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
                        _vm._m(2),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.users.Nombre_usu,
                              expression: "users.Nombre_usu",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            maxlength: "30",
                            type: "text",
                            placeholder: "Ej: José Luis",
                            name: "NombrePersonal",
                            id: "NombrePersonal",
                            required: "",
                            pattern: "[a-zA-Z- -\\.]+",
                            oninvalid:
                              "setCustomValidity('Porfavor llena el nombre, solo se aceptan caracteres de la A-Z ')",
                            onchange: "try{setCustomValidity('')}catch(e){}",
                          },
                          domProps: { value: _vm.users.Nombre_usu },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.users,
                                "Nombre_usu",
                                $event.target.value
                              )
                            },
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
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.users.Apellido_Pat,
                              expression: "users.Apellido_Pat",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            maxlength: "30",
                            type: "text",
                            placeholder: "Ej: Romero",
                            name: "NombrePaterno",
                            id: "NombrePaterno",
                            required: "",
                            pattern: "[a-zA-Z- -\\.]+",
                            oninvalid:
                              "setCustomValidity('Porfavor llena el nombre, solo se aceptan caracteres de la A-Z ')",
                            onchange: "try{setCustomValidity('')}catch(e){}",
                          },
                          domProps: { value: _vm.users.Apellido_Pat },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.users,
                                "Apellido_Pat",
                                $event.target.value
                              )
                            },
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
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.users.Apellido_Mat,
                              expression: "users.Apellido_Mat",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            maxlength: "30",
                            type: "text",
                            placeholder: "Ej: Fernandez",
                            name: "NombreMaterno",
                            id: "NombreMaterno",
                            required: "",
                            pattern: "[a-zA-Z- -\\.]+",
                            oninvalid:
                              "setCustomValidity('Porfavor llena el nombre, solo se aceptan caracteres de la A-Z ')",
                            onchange: "try{setCustomValidity('')}catch(e){}",
                          },
                          domProps: { value: _vm.users.Apellido_Mat },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.users,
                                "Apellido_Mat",
                                $event.target.value
                              )
                            },
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
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.users.Codigo_usu,
                              expression: "users.Codigo_usu",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            maxlength: "9",
                            minlength: "9",
                            type: "text",
                            placeholder: "Código SIS (sólo números)",
                            name: "CodigoSis",
                            id: "CodigoSis",
                            required: "",
                            pattern: "[0-9]+",
                            oninvalid:
                              "setCustomValidity('Revise el codigo SIS ')",
                            onchange: "try{setCustomValidity('')}catch(e){}",
                          },
                          domProps: { value: _vm.users.Codigo_usu },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.users,
                                "Codigo_usu",
                                $event.target.value
                              )
                            },
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
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.users.Correo_usu,
                              expression: "users.Correo_usu",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "email",
                            name: "email",
                            id: "CorreoVigen",
                            placeholder: "Ej: pepitopelapapas@gmail.com",
                          },
                          domProps: { value: _vm.users.Correo_usu },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.users,
                                "Correo_usu",
                                $event.target.value
                              )
                            },
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
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.users.Telf,
                              expression: "users.Telf",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            maxlength: "8",
                            minlength: "7",
                            type: "text",
                            placeholder: "Debe ser vigente. Ej: 65316647",
                            name: "Celular",
                            id: "Celular",
                            required: "",
                            pattern: "[0-9]+",
                            oninvalid:
                              "setCustomValidity('Porfavor llene el Celular, solo se aceptan numeros y el minumo son 8 digitos')",
                            onchange: "try{setCustomValidity('')}catch(e){}",
                          },
                          domProps: { value: _vm.users.Telf },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.users, "Telf", $event.target.value)
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "valid-feedback" }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
                        _vm._m(8),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.users.Carnet,
                              expression: "users.Carnet",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            maxlength: "7",
                            minlength: "7",
                            type: "text",
                            placeholder: "Ej: 431579521",
                            name: "NIT",
                            id: "NIT",
                            required: "",
                            pattern: "[0-9]+",
                            oninvalid:
                              "setCustomValidity('Porfavor llene el carnet de identidad, solo se aceptan numeros ')",
                            onchange: "try{setCustomValidity('')}catch(e){}",
                          },
                          domProps: { value: _vm.users.Carnet },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.users, "Carnet", $event.target.value)
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "valid-feedback" }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
                        _vm._m(9),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.users.Contrasena_usu,
                              expression: "users.Contrasena_usu",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            maxlength: "30",
                            type: "text",
                            placeholder: "No debe ser muy fácil",
                            name: "Contrasena",
                            id: "Contrasena",
                            required: "",
                            pattern: "[a-zA-Z- -\\.]+[0-9]+",
                            oninvalid:
                              "setCustomValidity('Porfavor llena el nombre, solo se aceptan caracteres de la A-Z ')",
                            onchange: "try{setCustomValidity('')}catch(e){}",
                          },
                          domProps: { value: _vm.users.Contrasena_usu },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.users,
                                "Contrasena_usu",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "valid-feedback" }),
                      ]),
                      _vm._v(" "),
                      _vm._m(10),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
                        _c(
                          "label",
                          {
                            staticClass: "form-label",
                            attrs: { for: "inlineFormCustomSelect" },
                          },
                          [_vm._v("¿A quién registra?")]
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
                                return _vm.SelecTipoUsuar($event)
                              },
                            },
                          },
                          [
                            _c(
                              "option",
                              { attrs: { disabled: "", selected: "" } },
                              [_vm._v("Seleccione")]
                            ),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "1" } }, [
                              _vm._v("Asesor"),
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "0" } }, [
                              _vm._v("Estudiante"),
                            ]),
                          ]
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("label", {
                        staticClass: "form-label",
                        attrs: { for: "validationCustom01" },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-lg-4" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "btn btn-danger",
                                attrs: { to: { name: "Login" } },
                              },
                              [
                                _c("i", { staticClass: "far fa-ballot-check" }),
                                _vm._v(
                                  " Cancelar\n                                        "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm._m(11),
                      ]),
                    ]),
                  ]),
                ]),
              ]
            ),
          ]),
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
      _c("h1", [_vm._v("Registrarse en la Empresa TIS")]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("p", [_vm._v("Universidad Mayor de San Simón")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [
        _c("strong", { staticClass: "text-center col" }, [
          _c("i", { staticClass: "fas fa-address-card" }),
          _vm._v(" Registrarse"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "validationCustom01" } },
      [_c("strong", [_vm._v("Nombre(s)")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "validationCustom01" } },
      [_c("strong", [_vm._v("Apellido Paterno")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "validationCustom01" } },
      [_c("strong", [_vm._v("Apellido Materno")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "validationCustom01" } },
      [_c("strong", [_vm._v("Código SIS")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "validationCustom01" } },
      [_c("strong", [_vm._v("Correo electrónico")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "validationCustom01" } },
      [_c("strong", [_vm._v("Número de Celular")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "validationCustom01" } },
      [_c("strong", [_vm._v("Carnet de Identidad")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "form-label", attrs: { for: "validationCustom01" } },
      [_c("strong", [_vm._v("Contraseña")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
      _c(
        "label",
        { staticClass: "form-label", attrs: { for: "validationCustom01" } },
        [_c("strong", [_vm._v("Confirmar Contraseña")])]
      ),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: {
          maxlength: "30",
          type: "text",
          placeholder: "Escriba la misma contraseña",
          name: "ContrasenaConf",
          id: "ContrasenaConf",
          required: "",
          pattern: "[a-zA-Z- -\\.]+",
          oninvalid:
            "setCustomValidity('Porfavor llena el nombre, solo se aceptan caracteres de la A-Z ')",
          onchange: "try{setCustomValidity('')}catch(e){}",
        },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "valid-feedback" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-4" }, [
      _c(
        "button",
        { staticClass: "btn btn-success", attrs: { type: "submit" } },
        [_vm._v("Registrarse")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);