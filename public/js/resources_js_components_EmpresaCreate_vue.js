"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_EmpresaCreate_vue"],{

/***/ "./resources/js/components/EmpresaCreate.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/EmpresaCreate.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmpresaCreate_vue_vue_type_template_id_7521a40a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmpresaCreate.vue?vue&type=template&id=7521a40a& */ "./resources/js/components/EmpresaCreate.vue?vue&type=template&id=7521a40a&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _EmpresaCreate_vue_vue_type_template_id_7521a40a___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmpresaCreate_vue_vue_type_template_id_7521a40a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EmpresaCreate.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/EmpresaCreate.vue?vue&type=template&id=7521a40a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/EmpresaCreate.vue?vue&type=template&id=7521a40a& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaCreate_vue_vue_type_template_id_7521a40a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaCreate_vue_vue_type_template_id_7521a40a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmpresaCreate_vue_vue_type_template_id_7521a40a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmpresaCreate.vue?vue&type=template&id=7521a40a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EmpresaCreate.vue?vue&type=template&id=7521a40a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EmpresaCreate.vue?vue&type=template&id=7521a40a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/EmpresaCreate.vue?vue&type=template&id=7521a40a& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container mt-4" }, [
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
                staticClass: "form-group",
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submit.apply(null, arguments)
                  }
                }
              },
              [
                _c("label", { attrs: { for: "title" } }, [
                  _vm._v("El registro")
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("label", { attrs: { for: "content" } }, [
                  _vm._v("Nombre_Larg")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.empresa.Nombre_Largo,
                      expression: "empresa.Nombre_Largo"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "Nombre_Larg", type: "text" },
                  domProps: { value: _vm.empresa.Nombre_Largo },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.empresa, "Nombre_Largo", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "content" } }, [
                  _vm._v("Nombre corto")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.empresa.Nombre_Corto,
                      expression: "empresa.Nombre_Corto"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "Nombre_Corto", type: "text" },
                  domProps: { value: _vm.empresa.Nombre_Corto },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.empresa, "Nombre_Corto", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "content" } }, [_vm._v("Correo")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.empresa.Correo_electronico,
                      expression: "empresa.Correo_electronico"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "Correo_electronico", type: "text" },
                  domProps: { value: _vm.empresa.Correo_electronico },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.empresa,
                        "Correo_electronico",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "content" } }, [
                  _vm._v("Telefono")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.empresa.Telefono,
                      expression: "empresa.Telefono"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "title", type: "text" },
                  domProps: { value: _vm.empresa.Telefono },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.empresa, "Telefono", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "content" } }, [_vm._v("NIT")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.empresa.NIT,
                      expression: "empresa.NIT"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "Telefono", type: "text" },
                  domProps: { value: _vm.empresa.NIT },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.empresa, "NIT", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "content" } }, [_vm._v("Doc1")]),
                _vm._v(" "),
                _c("input", {
                  attrs: { id: "Solvencia", type: "file" },
                  on: { change: _vm.processFileSolv }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "content" } }, [_vm._v("Doc2")]),
                _vm._v(" "),
                _c("label", { attrs: { for: "content" } }, [_vm._v("Doc3")]),
                _vm._v(" "),
                _c("label", { attrs: { for: "content" } }, [_vm._v("Doc4")]),
                _vm._v(" "),
                _c("label", { attrs: { for: "content" } }, [_vm._v("Socio 1")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.empresa.Socio_1,
                      expression: "empresa.Socio_1"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "Socio_1", type: "text" },
                  domProps: { value: _vm.empresa.Socio_1 },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.empresa, "Socio_1", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "content" } }, [_vm._v("Socio 2")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.empresa.Socio_2,
                      expression: "empresa.Socio_2"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "Socio_2", type: "text" },
                  domProps: { value: _vm.empresa.Socio_2 },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.empresa, "Socio_2", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "content" } }, [_vm._v("Socio 3")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.empresa.Socio_3,
                      expression: "empresa.Socio_3"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "Socio_3", type: "text" },
                  domProps: { value: _vm.empresa.Socio_3 },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.empresa, "Socio_3", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "content" } }, [_vm._v("Socio 4")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.empresa.Socio_4,
                      expression: "empresa.Socio_4"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "Socio_4", type: "text" },
                  domProps: { value: _vm.empresa.Socio_4 },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.empresa, "Socio_4", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "content" } }, [_vm._v("Socio 5")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.empresa.Socio_5,
                      expression: "empresa.Socio_5"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "Socio_5", type: "text" },
                  domProps: { value: _vm.empresa.Socio_5 },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.empresa, "Socio_5", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary mt-3",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("Ingresar")]
                ),
                _vm._v("\n      " + _vm._s(_vm.empresa) + "\n      \n\n  ")
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center col" }, [
      _c("h1", [_vm._v("REGISTRO DE EMPRESA")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_c("strong", [_vm._v("Registrar Empresa")])])
    ])
  }
]
render._withStripped = true



/***/ })

}]);