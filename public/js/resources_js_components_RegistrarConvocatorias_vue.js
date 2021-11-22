(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_RegistrarConvocatorias_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegistrarConvocatorias.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegistrarConvocatorias.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/js/components/RegistrarConvocatorias.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/RegistrarConvocatorias.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegistrarConvocatorias_vue_vue_type_template_id_58f23f0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrarConvocatorias.vue?vue&type=template&id=58f23f0a& */ "./resources/js/components/RegistrarConvocatorias.vue?vue&type=template&id=58f23f0a&");
/* harmony import */ var _RegistrarConvocatorias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrarConvocatorias.vue?vue&type=script&lang=js& */ "./resources/js/components/RegistrarConvocatorias.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _RegistrarConvocatorias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _RegistrarConvocatorias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegistrarConvocatorias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrarConvocatorias_vue_vue_type_template_id_58f23f0a___WEBPACK_IMPORTED_MODULE_0__.render,
  _RegistrarConvocatorias_vue_vue_type_template_id_58f23f0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/RegistrarConvocatorias.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/RegistrarConvocatorias.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/RegistrarConvocatorias.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarConvocatorias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegistrarConvocatorias.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegistrarConvocatorias.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarConvocatorias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarConvocatorias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarConvocatorias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarConvocatorias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarConvocatorias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default())); 

/***/ }),

/***/ "./resources/js/components/RegistrarConvocatorias.vue?vue&type=template&id=58f23f0a&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/RegistrarConvocatorias.vue?vue&type=template&id=58f23f0a& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarConvocatorias_vue_vue_type_template_id_58f23f0a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarConvocatorias_vue_vue_type_template_id_58f23f0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarConvocatorias_vue_vue_type_template_id_58f23f0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegistrarConvocatorias.vue?vue&type=template&id=58f23f0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegistrarConvocatorias.vue?vue&type=template&id=58f23f0a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegistrarConvocatorias.vue?vue&type=template&id=58f23f0a&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RegistrarConvocatorias.vue?vue&type=template&id=58f23f0a& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
                  return _vm.crear.apply(null, arguments)
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
      _c("h4", [_c("strong", [_vm._v("Registrar Convocatorias")])])
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
          _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
            _c(
              "label",
              {
                staticClass: "form-label",
                attrs: { for: "validationCustom01" }
              },
              [_c("strong", [_vm._v("Titulo")])]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                maxlength: "7",
                minlength: "7",
                type: "text",
                placeholder: "",
                name: "Titulo",
                id: "Titulo",
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
          _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
            _c(
              "label",
              {
                staticClass: "form-label",
                attrs: { for: "validationCustom01" }
              },
              [_c("strong", [_vm._v("Gestión")])]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                maxlength: "7",
                minlength: "7",
                type: "text",
                placeholder: "Nombre completo",
                name: "Asesor",
                id: "Asesor",
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
          _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
            _c(
              "label",
              {
                staticClass: "form-label",
                attrs: { for: "validationCustom01" }
              },
              [_c("strong", [_vm._v("Asesor")])]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                maxlength: "7",
                minlength: "7",
                type: "text",
                placeholder: "Nombre completo",
                name: "Asesor",
                id: "Asesor",
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
          _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
            _c(
              "label",
              {
                staticClass: "form-label",
                attrs: { for: "validationCustom01" }
              },
              [_c("strong", [_vm._v("Fecha Limite")])]
            ),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                maxlength: "7",
                minlength: "7",
                type: "text",
                placeholder: "Nombre completo",
                name: "Asesor",
                id: "Asesor",
                required: "",
                pattern: "[0-9]+",
                oninvalid:
                  "setCustomValidity('Porfavor llene el NIT de la Empresa, solo se aceptan numeros ')",
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
            [_c("strong", [_vm._v("información Sobre A")])]
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
        _c("div", { staticClass: "col-lg-4 offset-md-1" }, [
          _c(
            "label",
            { staticClass: "form-label", attrs: { for: "formFile" } },
            [_c("strong", [_vm._v("información Sobre B")])]
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
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-20 offset-md-1" }, [
        _c(
          "label",
          { staticClass: "form-label", attrs: { for: "validationCustom01" } },
          [_c("strong", [_vm._v("Descripcion")])]
        ),
        _vm._v(" "),
        _c("span", { staticClass: "col-md-1 col-md-offset-2 text-center" }, [
          _c("i", { staticClass: "fa fa-pencil-square-o bigicon" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("textarea", {
            staticClass: "form-control",
            attrs: {
              id: "Descripcion",
              name: "Descripcion",
              placeholder: "",
              rows: "7"
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("label", {
          staticClass: "form-label",
          attrs: { for: "validationCustom01" }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-10 offset-md-1" }, [
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
          _c("div", { staticClass: "col-lg-1" }, [
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
  }
]
render._withStripped = true



/***/ })

}]);