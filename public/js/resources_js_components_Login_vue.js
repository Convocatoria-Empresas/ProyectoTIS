"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "usuarios",
  data: function data() {
    return {
      ellogin: {
        usuarios: [],
        correo: "",
        contra: "",
        NoexisteEmail: 0,
        contraCorrecta: 0
      }
    };
  },
  mounted: function mounted() {
    this.ellogin.NoexisteEmail = 0;
    this.ellogin.contraCorrecta = 0;
    this.conseguirUsers();
  },
  methods: {
    conseguirUsers: function conseguirUsers() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.axios.get('/api/user').then(function (response) {
                  console.log(response.data);
                  _this.ellogin.usuarios = response.data;
                })["catch"](function (error) {
                  console.log(error);
                  _this.ellogin.usuarios = [];
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    Searchmail: function Searchmail() {
      var cont = 0;
      var corr = this.ellogin.correo;
      var contuar = this.ellogin.contra;
      var self = this;

      if (this.ellogin.correo == null) {
        this.ellogin.NoexisteEmail = 1;
      } //Se carga el correo en el localstorage


      localStorage.correo = this.ellogin.correo;
      this.ellogin.usuarios.forEach(function (usuario) {
        //console.log("VAS bIEN VAS BIEN");
        if (usuario.Correo_usu == corr) {
          cont = 1;
          /* console.log("Lo de abajo debe ser el correo");
           console.log(usuario.Correo_usu);
           console.log(usuario.Contrasena_usu);
           console.log(usuario.Carnet);
           console.log(contuar);*/

          if (usuario.Contrasena_usu == contuar) {
            console.log("Bienvenido");

            switch (usuario.Rol_usu) {
              case "Estudiante":
                break;

              case "Asesor":
                break;

              case "Administrador":
                break;
            }

            self.$router.push({
              name: "home",
              params: {
                corr: usuario.Correo_usu
              }
            });
          } else {
            console.log("Verifique contraseña");
          }
        }
      });

      if (cont == 0) {
        console.log("No tiene cuenta, haga click aquí para registrarse");
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Login.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Login.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=6bdc8b8e& */ "./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/components/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_6bdc8b8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=6bdc8b8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "text-center" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { attrs: { id: "login_panel" } }, [
        _c("div", { attrs: { id: "login_panel_header" } }),
        _vm._v(" "),
        _c("b", [_vm._v("Inicio de Sesión")]),
        _vm._v(" "),
        _c(
          "form",
          {
            on: {
              submit: function ($event) {
                $event.preventDefault()
                return _vm.Searchmail.apply(null, arguments)
              },
            },
          },
          [
            _c("div", { staticClass: "form-group" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.ellogin.correo,
                    expression: "ellogin.correo",
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  type: "email",
                  id: "exampleInputEmail1",
                  "aria-describedby": "emailHelp",
                  placeholder: "Introduzca su correo institucional",
                  required: "",
                  oninvalid:
                    "setCustomValidity('Porfavor debe llenar un correo institucional')",
                },
                domProps: { value: _vm.ellogin.correo },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.ellogin, "correo", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c(
                "small",
                {
                  staticClass: "form-text text-muted",
                  attrs: { id: "emailHelp" },
                },
                [_vm._v("No comparta su correo electrónico con nadie más.")]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.ellogin.contra,
                    expression: "ellogin.contra",
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  type: "password",
                  id: "exampleInputPassword1",
                  placeholder: "Introduzca su contraseña",
                  required: "",
                  oninvalid:
                    "setCustomValidity('Porfavor debe llenar la contraseña')",
                },
                domProps: { value: _vm.ellogin.contra },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.ellogin, "contra", $event.target.value)
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn-primary", attrs: { type: "submit" } },
              [_vm._v("Iniciar Sesión")]
            ),
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
    return _c("div", { attrs: { id: "login_outer" } }, [
      _c("div", { attrs: { id: "login_title" } }, [
        _c("h1", [_vm._v("Universidad Mayor de San Simón")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "exampleInputEmail1" } }, [
      _c("i", { staticClass: "far fa-envelope" }),
      _vm._v(" Correo Institucional"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "exampleInputPassword1" } }, [
      _c("i", { staticClass: "fas fa-unlock-alt" }),
      _vm._v(" Contraseña"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-check" }, [
      _c("input", {
        staticClass: "form-check-input",
        attrs: { type: "checkbox", id: "exampleCheck1" },
      }),
      _vm._v(" "),
      _c(
        "label",
        { staticClass: "form-check-label", attrs: { for: "exampleCheck1" } },
        [_c("i", { staticClass: "far fa-save" }), _vm._v(" Guardar mis datos")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);