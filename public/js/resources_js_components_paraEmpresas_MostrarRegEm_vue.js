(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_paraEmpresas_MostrarRegEm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/paraEmpresas/MostrarRegEm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/paraEmpresas/MostrarRegEm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ (() => {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
function validarExt() {
  var archivoInput = document.getElementById('Documento_1');
  var archivoRuta = archivoInput.value;
  var extPermitida = /(.pdf)$/i;

  if (!extPermitida.exec(archivoRuta)) {
    alert('Asegurate de haber seleccionado un PDf');
    archivoInput.value;
    return false;
  } else {
    if (archivoInput.files && archivoInput[0]) {
      var visor = new FileReader();

      visor.onload = function (e) {
        document.getElementById('visorArchivo').innerHTML = '<embed src="+e.target.result" width>';
      };
    }
  }
}

/***/ }),

/***/ "./resources/js/components/paraEmpresas/MostrarRegEm.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/paraEmpresas/MostrarRegEm.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MostrarRegEm_vue_vue_type_template_id_59cbe174___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MostrarRegEm.vue?vue&type=template&id=59cbe174& */ "./resources/js/components/paraEmpresas/MostrarRegEm.vue?vue&type=template&id=59cbe174&");
/* harmony import */ var _MostrarRegEm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MostrarRegEm.vue?vue&type=script&lang=js& */ "./resources/js/components/paraEmpresas/MostrarRegEm.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _MostrarRegEm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _MostrarRegEm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MostrarRegEm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MostrarRegEm_vue_vue_type_template_id_59cbe174___WEBPACK_IMPORTED_MODULE_0__.render,
  _MostrarRegEm_vue_vue_type_template_id_59cbe174___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/paraEmpresas/MostrarRegEm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/paraEmpresas/MostrarRegEm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/paraEmpresas/MostrarRegEm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarRegEm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MostrarRegEm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/paraEmpresas/MostrarRegEm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarRegEm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarRegEm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarRegEm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarRegEm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarRegEm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default())); 

/***/ }),

/***/ "./resources/js/components/paraEmpresas/MostrarRegEm.vue?vue&type=template&id=59cbe174&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/paraEmpresas/MostrarRegEm.vue?vue&type=template&id=59cbe174& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarRegEm_vue_vue_type_template_id_59cbe174___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarRegEm_vue_vue_type_template_id_59cbe174___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MostrarRegEm_vue_vue_type_template_id_59cbe174___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MostrarRegEm.vue?vue&type=template&id=59cbe174& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/paraEmpresas/MostrarRegEm.vue?vue&type=template&id=59cbe174&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/paraEmpresas/MostrarRegEm.vue?vue&type=template&id=59cbe174&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/paraEmpresas/MostrarRegEm.vue?vue&type=template&id=59cbe174& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
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
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.RegEmpresa.apply(null, arguments)
                }
              }
            },
            [_vm._m(2)]
          )
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
      _c("h1", [_vm._v("REGISTRO DE EMPRESA")]),
      _c("h2")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_c("strong", [_vm._v("Registrar Empresa")])])
    ])
  },
  function() {
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
                attrs: { for: "validationCustom01" }
              },
              [_c("strong", [_vm._v("Nombre Largo")])]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                maxlength: "30",
                type: "text",
                placeholder: "Nombre Largo Empresa",
                name: "NombreLargo",
                id: "NombreLargo",
                required: "",
                pattern: "[a-zA-Z- -\\.]+",
                oninvalid:
                  "setCustomValidity('Porfavor llena el nombre, solo se aceptan caracteres de la A-Z ')",
                onchange: "try{setCustomValidity('')}catch(e){}"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "valid-feedback" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
            _c(
              "label",
              {
                staticClass: "form-label",
                attrs: { for: "validationCustom01" }
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
                onchange: "try{setCustomValidity('')}catch(e){}"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "valid-feedback" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-5 offset-md-1" }, [
            _c(
              "label",
              {
                staticClass: "form-label",
                attrs: { for: "validationCustom01" }
              },
              [_c("strong", [_vm._v("Nombre Corto")])]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                maxlength: "20",
                type: "text",
                placeholder: "Nombre Corto Empresa",
                name: "NombreCorto",
                id: "NombreCorto",
                required: "",
                pattern: "[a-zA-Z- -\\.]+",
                oninvalid:
                  "setCustomValidity('Porfavor llena el nombre corto con caracteres de la A-Z')",
                onchange: "try{setCustomValidity('')}catch(e){}"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "valid-feedback" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
            _c("label", {
              staticClass: "form-label",
              attrs: { for: "validationCustom01" }
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
                onchange: "try{setCustomValidity('')}catch(e){}"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "valid-feedback" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-5 offset-md-1" }, [
            _c(
              "label",
              {
                staticClass: "form-label",
                attrs: { for: "validationCustom01" }
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
                placeholder: "Correo Electrónico de la Empresa"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "valid-feedback" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
            _c("label", {
              staticClass: "form-label",
              attrs: { for: "validationCustom01" }
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
                onchange: "try{setCustomValidity('')}catch(e){}"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "valid-feedback" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
            _c(
              "label",
              {
                staticClass: "form-label",
                attrs: { for: "validationCustom01" }
              },
              [_c("strong", [_vm._v("Telefono")])]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                maxlength: "8",
                minlength: "7",
                type: "text",
                placeholder: "Telefono Empresa",
                name: "Telefono",
                id: "Telefono",
                required: "",
                pattern: "[0-9]+",
                oninvalid:
                  "setCustomValidity('Porfavor llene el Telefono, solo se aceptan numeros y el minumo son 7 digitos')",
                onchange: "try{setCustomValidity('')}catch(e){}"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "valid-feedback" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 offset-md-2" }, [
            _c("label", {
              staticClass: "form-label",
              attrs: { for: "validationCustom01" }
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
                onchange: "try{setCustomValidity('')}catch(e){}"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "valid-feedback" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
            _c(
              "label",
              {
                staticClass: "form-label",
                attrs: { for: "validationCustom01" }
              },
              [_c("strong", [_vm._v("NIT")])]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                maxlength: "7",
                minlength: "7",
                type: "text",
                placeholder: "NIT Empresa",
                name: "NIT",
                id: "NIT",
                required: "",
                pattern: "[0-9]+",
                oninvalid:
                  "setCustomValidity('Porfavor llene el NIT de la Empresa, solo se aceptan numeros ')",
                onchange: "try{setCustomValidity('')}catch(e){}"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "valid-feedback" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 offset-md-2" }, [
            _c("label", {
              staticClass: "form-label",
              attrs: { for: "validationCustom01" }
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
                onchange: "try{setCustomValidity('')}catch(e){}"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "valid-feedback" })
          ])
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
              required: ""
            }
          })
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
              required: ""
            }
          })
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
              required: ""
            }
          })
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
              required: ""
            }
          })
        ])
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
                  target: "_blank"
                }
              },
              [_vm._v("Mas información")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6" }, [
          _c("label", {
            staticClass: "form-label",
            attrs: { for: "validationCustom01" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-6 offset-md-2" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-lg btn-danger",
                  attrs: { type: "submit" }
                },
                [_vm._v("Cancelar")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-lg btn-success",
                  attrs: { type: "submit" }
                },
                [_vm._v("Registrar")]
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);