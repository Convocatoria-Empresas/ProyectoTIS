"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_convotacoraias_Crear_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/convotacoraias/Crear.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/convotacoraias/Crear.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  /*async mounted(){
      const response = await axios.get("/create");
      const data= response.data;
      console.log(data);
  },*/
  data: function data() {
    return {
      convocatoria: {
        Titulo: "",
        Codigo_Conv: "",
        Gestion: "",
        Asesor: "",
        Fecha: "",
        Descripcion: "",
        Informacion_A: "",
        Informacion_B: ""
      },
      algo: ''
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
                _context.next = 2;
                return axios.post('/api/convocatoria', _this.convocatoria);

              case 2:
                _this.convocatoria.Titulo = "";
                _this.convocatoria.Codigo_Conv = "";
                _this.convocatoria.Gestion = "";
                _this.convocatoria.Asesor = "";
                _this.convocatoria.Fecha = "";
                _this.convocatoria.Descripcion = "";
                _this.convocatoria.Informacion_A = "";
                _this.convocatoria.Informacion_B = ""; //console.log(this.response);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    processFileInf1: function processFileInf1(event) {
      var self = this;
      var In1file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (evt) {
        //console.log(evt.target.result);
        self.convocatoria.Informacion_A = reader.result; //console.log(self.algo);
      };

      reader.readAsDataURL(In1file);
    },
    processFileInf2: function processFileInf2(event) {
      var self = this;
      var In2file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (evt) {
        self.convocatoria.Informacion_B = reader.result;
      };

      reader.readAsDataURL(In2file);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/convotacoraias/Crear.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/convotacoraias/Crear.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Crear_vue_vue_type_template_id_02f9364a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Crear.vue?vue&type=template&id=02f9364a& */ "./resources/js/components/convotacoraias/Crear.vue?vue&type=template&id=02f9364a&");
/* harmony import */ var _Crear_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Crear.vue?vue&type=script&lang=js& */ "./resources/js/components/convotacoraias/Crear.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Crear_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Crear_vue_vue_type_template_id_02f9364a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Crear_vue_vue_type_template_id_02f9364a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/convotacoraias/Crear.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/convotacoraias/Crear.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/convotacoraias/Crear.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Crear_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Crear.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/convotacoraias/Crear.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Crear_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/convotacoraias/Crear.vue?vue&type=template&id=02f9364a&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/convotacoraias/Crear.vue?vue&type=template&id=02f9364a& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Crear_vue_vue_type_template_id_02f9364a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Crear_vue_vue_type_template_id_02f9364a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Crear_vue_vue_type_template_id_02f9364a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Crear.vue?vue&type=template&id=02f9364a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/convotacoraias/Crear.vue?vue&type=template&id=02f9364a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/convotacoraias/Crear.vue?vue&type=template&id=02f9364a&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/convotacoraias/Crear.vue?vue&type=template&id=02f9364a& ***!
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
              _c("label", { attrs: { for: "title" } }, [_vm._v("El registro")]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("label", { attrs: { for: "content" } }, [_vm._v("Título")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.convocatoria.Titulo,
                    expression: "convocatoria.Titulo",
                  },
                ],
                staticClass: "form-control",
                attrs: { id: "Titulo", type: "text" },
                domProps: { value: _vm.convocatoria.Titulo },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.convocatoria, "Titulo", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "content" } }, [_vm._v("Código")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.convocatoria.Codigo_Conv,
                    expression: "convocatoria.Codigo_Conv",
                  },
                ],
                staticClass: "form-control",
                attrs: { id: "Codigo_Conv", type: "text" },
                domProps: { value: _vm.convocatoria.Codigo_Conv },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.convocatoria,
                      "Codigo_Conv",
                      $event.target.value
                    )
                  },
                },
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "content" } }, [_vm._v("Gestión")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.convocatoria.Gestion,
                    expression: "convocatoria.Gestion",
                  },
                ],
                staticClass: "form-control",
                attrs: { id: "Gestion", type: "text" },
                domProps: { value: _vm.convocatoria.Gestion },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.convocatoria, "Gestion", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "content" } }, [_vm._v("Asesor")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.convocatoria.Asesor,
                    expression: "convocatoria.Asesor",
                  },
                ],
                staticClass: "form-control",
                attrs: { id: "Asesor", type: "text" },
                domProps: { value: _vm.convocatoria.Asesor },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.convocatoria, "Asesor", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "content" } }, [_vm._v("Fecha")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.convocatoria.Fecha,
                    expression: "convocatoria.Fecha",
                  },
                ],
                staticClass: "form-control",
                attrs: { id: "Fecha", type: "date" },
                domProps: { value: _vm.convocatoria.Fecha },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.convocatoria, "Fecha", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "content" } }, [
                _vm._v("Descripción"),
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.convocatoria.Descripcion,
                    expression: "convocatoria.Descripcion",
                  },
                ],
                staticClass: "form-control",
                attrs: { id: "Descripcion", type: "text" },
                domProps: { value: _vm.convocatoria.Descripcion },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.convocatoria,
                      "Descripcion",
                      $event.target.value
                    )
                  },
                },
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "content" } }, [
                _vm._v("Información sobre A"),
              ]),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                attrs: { id: "Informacion_1", type: "file" },
                on: { change: _vm.processFileInf1 },
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "content" } }, [
                _vm._v("Información sobre B"),
              ]),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                attrs: { id: "Informacion_2", type: "file" },
                on: { change: _vm.processFileInf2 },
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary mt-3",
                  attrs: { type: "submit" },
                },
                [_vm._v("Ingresar")]
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
      _c("h1", [_vm._v("REGISTRO DE CONVOCATORIA")]),
      _c("h2"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_c("strong", [_vm._v("Registrar Convocatoria")])]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);