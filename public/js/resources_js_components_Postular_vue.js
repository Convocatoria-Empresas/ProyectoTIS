"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Postular_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Postular.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Postular.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        PNombre_Largo: "",
        PNombre_Corto: "",
        PCorreo_electronico: "",
        PTelefono: "",
        PNIT: "",
        PSolvencia: "",
        PConstitucion: "",
        PPlan_Pago: "",
        PCarta: "",
        PSocio_1: "",
        PSocio_2: "",
        PSocio_3: "",
        PSocio_4: "",
        PSocio_5: "",
        PAsesordeEmp: "",
        PGetiodeEmp: "",
        PEstado_Aprob: ""
      },
      notificacion: {
        NTitulo: "",
        Texto: "",
        Emisor: "",
        Receptor: "",
        Leido: ""
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
                _this.empresa.PAsesordeEmp = _this.$route.params.asesorCorr;
                _this.empresa.PGetiodeEmp = _this.$route.params.convoGestio;
                console.log("Se enviará ahora...");
                _context.next = 5;
                return axios.post('/api/postulacion', _this.empresa);

              case 5:
                _this.notificacion.NTitulo = "Postulaci\xF3n a Convocatoria de ".concat(_this.empresa.PNombre_Largo);
                _this.notificacion.Texto = "";
                _this.notificacion.Emisor = _this.empresa.PCorreo_electronico;
                _this.notificacion.Receptor = _this.$route.params.asesorCorr;
                _this.notificacion.Leido = 0;
                console.log("Ya etá registrado la postulación");
                _context.next = 13;
                return axios.post('/api/notificacion', _this.notificacion);

              case 13:
                //Se regresa todo a las convocatorias
                _this.$router.push({
                  name: "convocatoria"
                });

              case 14:
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
        self.empresa.PSolvencia = reader.result;
      };

      reader.readAsDataURL(Solv);
    },
    processFileConst: function processFileConst(event) {
      var self = this;
      var Consti = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (evt) {
        self.empresa.PConstitucion = reader.result;
      };

      reader.readAsDataURL(Consti);
    },
    processFilePlan: function processFilePlan(event) {
      var self = this;
      var Plande = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (evt) {
        self.empresa.PPlan_Pago = reader.result;
      };

      reader.readAsDataURL(Plande);
    },
    processFileCarta: function processFileCarta(event) {
      var self = this;
      var Car = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (evt) {
        self.empresa.PCarta = reader.result;
      };

      reader.readAsDataURL(Car);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Postular.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Postular.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Postular_vue_vue_type_template_id_6a101b13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Postular.vue?vue&type=template&id=6a101b13& */ "./resources/js/components/Postular.vue?vue&type=template&id=6a101b13&");
/* harmony import */ var _Postular_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Postular.vue?vue&type=script&lang=js& */ "./resources/js/components/Postular.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Postular_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Postular_vue_vue_type_template_id_6a101b13___WEBPACK_IMPORTED_MODULE_0__.render,
  _Postular_vue_vue_type_template_id_6a101b13___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Postular.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Postular.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Postular.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Postular_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Postular.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Postular.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Postular_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Postular.vue?vue&type=template&id=6a101b13&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Postular.vue?vue&type=template&id=6a101b13& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Postular_vue_vue_type_template_id_6a101b13___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Postular_vue_vue_type_template_id_6a101b13___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Postular_vue_vue_type_template_id_6a101b13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Postular.vue?vue&type=template&id=6a101b13& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Postular.vue?vue&type=template&id=6a101b13&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Postular.vue?vue&type=template&id=6a101b13&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Postular.vue?vue&type=template&id=6a101b13& ***!
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
              _vm._m(2),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.empresa.PNombre_Largo,
                    expression: "empresa.PNombre_Largo",
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  placeholder:
                    "Nombre completo con la cual estan fundando la empresa",
                  id: "Nombre_Largo",
                  type: "text",
                },
                domProps: { value: _vm.empresa.PNombre_Largo },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.empresa, "PNombre_Largo", $event.target.value)
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
                    value: _vm.empresa.PNombre_Corto,
                    expression: "empresa.PNombre_Corto",
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  placeholder: "Las siglas del nombre de la empresa",
                  id: "Nombre_Corto",
                  type: "text",
                },
                domProps: { value: _vm.empresa.PNombre_Corto },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.empresa, "PNombre_Corto", $event.target.value)
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
                    value: _vm.empresa.PCorreo_electronico,
                    expression: "empresa.PCorreo_electronico",
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  placeholder: "Correo de la empresa / representante legal",
                  id: "Correo_electronico",
                  type: "text",
                },
                domProps: { value: _vm.empresa.PCorreo_electronico },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.empresa,
                      "PCorreo_electronico",
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
                    value: _vm.empresa.PTelefono,
                    expression: "empresa.PTelefono",
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  placeholder: "Número de celular del representante legal",
                  id: "title",
                  type: "text",
                },
                domProps: { value: _vm.empresa.PTelefono },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.empresa, "PTelefono", $event.target.value)
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
                    value: _vm.empresa.PNIT,
                    expression: "empresa.PNIT",
                  },
                ],
                staticClass: "form-control",
                attrs: { placeholder: "Número NIT", id: "nit", type: "text" },
                domProps: { value: _vm.empresa.PNIT },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.empresa, "PNIT", $event.target.value)
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
                attrs: {
                  id: "Solvencia",
                  type: "file",
                  accept: ".pdf",
                  required: "",
                },
                on: { change: _vm.processFileSolv },
              }),
              _vm._v(" "),
              _vm._m(8),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                attrs: {
                  id: "Constitucion",
                  type: "file",
                  accept: ".pdf",
                  required: "",
                },
                on: { change: _vm.processFileConst },
              }),
              _vm._v(" "),
              _vm._m(9),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                attrs: {
                  id: "Plan_Pago",
                  type: "file",
                  accept: ".pdf",
                  required: "",
                },
                on: { change: _vm.processFilePlan },
              }),
              _vm._v(" "),
              _vm._m(10),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                attrs: {
                  id: "Carta",
                  type: "file",
                  accept: ".pdf",
                  required: "",
                },
                on: { change: _vm.processFileCarta },
              }),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _vm._m(11),
              _vm._v(" "),
              _vm._m(12),
              _vm._v(" "),
              _c("label", { attrs: { for: "content" } }, [_vm._v("Socio 1")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.empresa.PSocio_1,
                    expression: "empresa.PSocio_1",
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  placeholder: "Código SIS del representante legal",
                  id: "Socio_1",
                  type: "text",
                },
                domProps: { value: _vm.empresa.PSocio_1 },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.empresa, "PSocio_1", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "content" } }, [_vm._v("Socio 2")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.empresa.PSocio_2,
                    expression: "empresa.PSocio_2",
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  placeholder: "Código SIS",
                  id: "Socio_2",
                  type: "text",
                },
                domProps: { value: _vm.empresa.PSocio_2 },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.empresa, "PSocio_2", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "content" } }, [_vm._v("Socio 3")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.empresa.PSocio_3,
                    expression: "empresa.PSocio_3",
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  placeholder: "Código SIS",
                  id: "Socio_3",
                  type: "text",
                },
                domProps: { value: _vm.empresa.PSocio_3 },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.empresa, "PSocio_3", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "content" } }, [_vm._v("Socio 4")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.empresa.PSocio_4,
                    expression: "empresa.PSocio_4",
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  placeholder: "Código SIS",
                  id: "Socio_4",
                  type: "text",
                },
                domProps: { value: _vm.empresa.PSocio_4 },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.empresa, "PSocio_4", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "content" } }, [_vm._v("Socio 5")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.empresa.PSocio_5,
                    expression: "empresa.PSocio_5",
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  placeholder: "Código SIS",
                  id: "Socio_5",
                  type: "text",
                },
                domProps: { value: _vm.empresa.PSocio_5 },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.empresa, "PSocio_5", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-warning mt-3",
                  attrs: { to: { name: "convocatoria" }, type: "submit" },
                },
                [_vm._v(" Volver")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary mt-3",
                  attrs: { type: "submit" },
                },
                [_vm._v("Registrar mi Empresa")]
              ),
            ],
            1
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
      _c("h1", [_vm._v("Registro de Postulación")]),
      _vm._v(" "),
      _c("hr"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [
        _c("strong", [
          _vm._v("Llenar los datos para el registro a la Postulación"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "content" } }, [
      _c("i", { staticClass: "fas fa-signature" }),
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
      _c("i", { staticClass: "far fa-envelope" }),
      _vm._v(" Correo"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "content" } }, [
      _c("i", { staticClass: "fas fa-mobile-alt" }),
      _vm._v(" Telefono"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "content" } }, [
      _c("i", { staticClass: "fas fa-address-card" }),
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
    return _c("h5", [
      _c("i", { staticClass: "fas fa-user-friends" }),
      _vm._v(" Socios que conforman la empresa (Código SIS)"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", [
      _c("p", [
        _vm._v(
          "Requisito: Mínimo deben ser 3 integrantes para conformar una Empresa"
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);