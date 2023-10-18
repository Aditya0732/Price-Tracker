"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/domelementtype";
exports.ids = ["vendor-chunks/domelementtype"];
exports.modules = {

/***/ "(rsc)/./node_modules/domelementtype/lib/esm/index.js":
/*!******************************************************!*\
  !*** ./node_modules/domelementtype/lib/esm/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CDATA: () => (/* binding */ CDATA),\n/* harmony export */   Comment: () => (/* binding */ Comment),\n/* harmony export */   Directive: () => (/* binding */ Directive),\n/* harmony export */   Doctype: () => (/* binding */ Doctype),\n/* harmony export */   ElementType: () => (/* binding */ ElementType),\n/* harmony export */   Root: () => (/* binding */ Root),\n/* harmony export */   Script: () => (/* binding */ Script),\n/* harmony export */   Style: () => (/* binding */ Style),\n/* harmony export */   Tag: () => (/* binding */ Tag),\n/* harmony export */   Text: () => (/* binding */ Text),\n/* harmony export */   isTag: () => (/* binding */ isTag)\n/* harmony export */ });\n/** Types of elements found in htmlparser2's DOM */ var ElementType;\n(function(ElementType) {\n    /** Type for the root element of a document */ ElementType[\"Root\"] = \"root\";\n    /** Type for Text */ ElementType[\"Text\"] = \"text\";\n    /** Type for <? ... ?> */ ElementType[\"Directive\"] = \"directive\";\n    /** Type for <!-- ... --> */ ElementType[\"Comment\"] = \"comment\";\n    /** Type for <script> tags */ ElementType[\"Script\"] = \"script\";\n    /** Type for <style> tags */ ElementType[\"Style\"] = \"style\";\n    /** Type for Any tag */ ElementType[\"Tag\"] = \"tag\";\n    /** Type for <![CDATA[ ... ]]> */ ElementType[\"CDATA\"] = \"cdata\";\n    /** Type for <!doctype ...> */ ElementType[\"Doctype\"] = \"doctype\";\n})(ElementType || (ElementType = {}));\n/**\n * Tests whether an element is a tag or not.\n *\n * @param elem Element to test\n */ function isTag(elem) {\n    return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;\n}\n// Exports for backwards compatibility\n/** Type for the root element of a document */ const Root = ElementType.Root;\n/** Type for Text */ const Text = ElementType.Text;\n/** Type for <? ... ?> */ const Directive = ElementType.Directive;\n/** Type for <!-- ... --> */ const Comment = ElementType.Comment;\n/** Type for <script> tags */ const Script = ElementType.Script;\n/** Type for <style> tags */ const Style = ElementType.Style;\n/** Type for Any tag */ const Tag = ElementType.Tag;\n/** Type for <![CDATA[ ... ]]> */ const CDATA = ElementType.CDATA;\n/** Type for <!doctype ...> */ const Doctype = ElementType.Doctype;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZG9tZWxlbWVudHR5cGUvbGliL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFpRCxHQUMxQyxJQUFJQSxZQUFZO0FBQ3RCLFVBQVVBLFdBQVc7SUFDbEIsNENBQTRDLEdBQzVDQSxXQUFXLENBQUMsT0FBTyxHQUFHO0lBQ3RCLGtCQUFrQixHQUNsQkEsV0FBVyxDQUFDLE9BQU8sR0FBRztJQUN0Qix1QkFBdUIsR0FDdkJBLFdBQVcsQ0FBQyxZQUFZLEdBQUc7SUFDM0IsMEJBQTBCLEdBQzFCQSxXQUFXLENBQUMsVUFBVSxHQUFHO0lBQ3pCLDJCQUEyQixHQUMzQkEsV0FBVyxDQUFDLFNBQVMsR0FBRztJQUN4QiwwQkFBMEIsR0FDMUJBLFdBQVcsQ0FBQyxRQUFRLEdBQUc7SUFDdkIscUJBQXFCLEdBQ3JCQSxXQUFXLENBQUMsTUFBTSxHQUFHO0lBQ3JCLCtCQUErQixHQUMvQkEsV0FBVyxDQUFDLFFBQVEsR0FBRztJQUN2Qiw0QkFBNEIsR0FDNUJBLFdBQVcsQ0FBQyxVQUFVLEdBQUc7QUFDN0IsR0FBR0EsZUFBZ0JBLENBQUFBLGNBQWMsQ0FBQztBQUNsQzs7OztDQUlDLEdBQ00sU0FBU0MsTUFBTUMsSUFBSTtJQUN0QixPQUFRQSxLQUFLQyxJQUFJLEtBQUtILFlBQVlJLEdBQUcsSUFDakNGLEtBQUtDLElBQUksS0FBS0gsWUFBWUssTUFBTSxJQUNoQ0gsS0FBS0MsSUFBSSxLQUFLSCxZQUFZTSxLQUFLO0FBQ3ZDO0FBQ0Esc0NBQXNDO0FBQ3RDLDRDQUE0QyxHQUNyQyxNQUFNQyxPQUFPUCxZQUFZTyxJQUFJLENBQUM7QUFDckMsa0JBQWtCLEdBQ1gsTUFBTUMsT0FBT1IsWUFBWVEsSUFBSSxDQUFDO0FBQ3JDLHVCQUF1QixHQUNoQixNQUFNQyxZQUFZVCxZQUFZUyxTQUFTLENBQUM7QUFDL0MsMEJBQTBCLEdBQ25CLE1BQU1DLFVBQVVWLFlBQVlVLE9BQU8sQ0FBQztBQUMzQywyQkFBMkIsR0FDcEIsTUFBTUwsU0FBU0wsWUFBWUssTUFBTSxDQUFDO0FBQ3pDLDBCQUEwQixHQUNuQixNQUFNQyxRQUFRTixZQUFZTSxLQUFLLENBQUM7QUFDdkMscUJBQXFCLEdBQ2QsTUFBTUYsTUFBTUosWUFBWUksR0FBRyxDQUFDO0FBQ25DLCtCQUErQixHQUN4QixNQUFNTyxRQUFRWCxZQUFZVyxLQUFLLENBQUM7QUFDdkMsNEJBQTRCLEdBQ3JCLE1BQU1DLFVBQVVaLFlBQVlZLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9ub2RlX21vZHVsZXMvZG9tZWxlbWVudHR5cGUvbGliL2VzbS9pbmRleC5qcz80ODg5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBUeXBlcyBvZiBlbGVtZW50cyBmb3VuZCBpbiBodG1scGFyc2VyMidzIERPTSAqL1xuZXhwb3J0IHZhciBFbGVtZW50VHlwZTtcbihmdW5jdGlvbiAoRWxlbWVudFR5cGUpIHtcbiAgICAvKiogVHlwZSBmb3IgdGhlIHJvb3QgZWxlbWVudCBvZiBhIGRvY3VtZW50ICovXG4gICAgRWxlbWVudFR5cGVbXCJSb290XCJdID0gXCJyb290XCI7XG4gICAgLyoqIFR5cGUgZm9yIFRleHQgKi9cbiAgICBFbGVtZW50VHlwZVtcIlRleHRcIl0gPSBcInRleHRcIjtcbiAgICAvKiogVHlwZSBmb3IgPD8gLi4uID8+ICovXG4gICAgRWxlbWVudFR5cGVbXCJEaXJlY3RpdmVcIl0gPSBcImRpcmVjdGl2ZVwiO1xuICAgIC8qKiBUeXBlIGZvciA8IS0tIC4uLiAtLT4gKi9cbiAgICBFbGVtZW50VHlwZVtcIkNvbW1lbnRcIl0gPSBcImNvbW1lbnRcIjtcbiAgICAvKiogVHlwZSBmb3IgPHNjcmlwdD4gdGFncyAqL1xuICAgIEVsZW1lbnRUeXBlW1wiU2NyaXB0XCJdID0gXCJzY3JpcHRcIjtcbiAgICAvKiogVHlwZSBmb3IgPHN0eWxlPiB0YWdzICovXG4gICAgRWxlbWVudFR5cGVbXCJTdHlsZVwiXSA9IFwic3R5bGVcIjtcbiAgICAvKiogVHlwZSBmb3IgQW55IHRhZyAqL1xuICAgIEVsZW1lbnRUeXBlW1wiVGFnXCJdID0gXCJ0YWdcIjtcbiAgICAvKiogVHlwZSBmb3IgPCFbQ0RBVEFbIC4uLiBdXT4gKi9cbiAgICBFbGVtZW50VHlwZVtcIkNEQVRBXCJdID0gXCJjZGF0YVwiO1xuICAgIC8qKiBUeXBlIGZvciA8IWRvY3R5cGUgLi4uPiAqL1xuICAgIEVsZW1lbnRUeXBlW1wiRG9jdHlwZVwiXSA9IFwiZG9jdHlwZVwiO1xufSkoRWxlbWVudFR5cGUgfHwgKEVsZW1lbnRUeXBlID0ge30pKTtcbi8qKlxuICogVGVzdHMgd2hldGhlciBhbiBlbGVtZW50IGlzIGEgdGFnIG9yIG5vdC5cbiAqXG4gKiBAcGFyYW0gZWxlbSBFbGVtZW50IHRvIHRlc3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVGFnKGVsZW0pIHtcbiAgICByZXR1cm4gKGVsZW0udHlwZSA9PT0gRWxlbWVudFR5cGUuVGFnIHx8XG4gICAgICAgIGVsZW0udHlwZSA9PT0gRWxlbWVudFR5cGUuU2NyaXB0IHx8XG4gICAgICAgIGVsZW0udHlwZSA9PT0gRWxlbWVudFR5cGUuU3R5bGUpO1xufVxuLy8gRXhwb3J0cyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbi8qKiBUeXBlIGZvciB0aGUgcm9vdCBlbGVtZW50IG9mIGEgZG9jdW1lbnQgKi9cbmV4cG9ydCBjb25zdCBSb290ID0gRWxlbWVudFR5cGUuUm9vdDtcbi8qKiBUeXBlIGZvciBUZXh0ICovXG5leHBvcnQgY29uc3QgVGV4dCA9IEVsZW1lbnRUeXBlLlRleHQ7XG4vKiogVHlwZSBmb3IgPD8gLi4uID8+ICovXG5leHBvcnQgY29uc3QgRGlyZWN0aXZlID0gRWxlbWVudFR5cGUuRGlyZWN0aXZlO1xuLyoqIFR5cGUgZm9yIDwhLS0gLi4uIC0tPiAqL1xuZXhwb3J0IGNvbnN0IENvbW1lbnQgPSBFbGVtZW50VHlwZS5Db21tZW50O1xuLyoqIFR5cGUgZm9yIDxzY3JpcHQ+IHRhZ3MgKi9cbmV4cG9ydCBjb25zdCBTY3JpcHQgPSBFbGVtZW50VHlwZS5TY3JpcHQ7XG4vKiogVHlwZSBmb3IgPHN0eWxlPiB0YWdzICovXG5leHBvcnQgY29uc3QgU3R5bGUgPSBFbGVtZW50VHlwZS5TdHlsZTtcbi8qKiBUeXBlIGZvciBBbnkgdGFnICovXG5leHBvcnQgY29uc3QgVGFnID0gRWxlbWVudFR5cGUuVGFnO1xuLyoqIFR5cGUgZm9yIDwhW0NEQVRBWyAuLi4gXV0+ICovXG5leHBvcnQgY29uc3QgQ0RBVEEgPSBFbGVtZW50VHlwZS5DREFUQTtcbi8qKiBUeXBlIGZvciA8IWRvY3R5cGUgLi4uPiAqL1xuZXhwb3J0IGNvbnN0IERvY3R5cGUgPSBFbGVtZW50VHlwZS5Eb2N0eXBlO1xuIl0sIm5hbWVzIjpbIkVsZW1lbnRUeXBlIiwiaXNUYWciLCJlbGVtIiwidHlwZSIsIlRhZyIsIlNjcmlwdCIsIlN0eWxlIiwiUm9vdCIsIlRleHQiLCJEaXJlY3RpdmUiLCJDb21tZW50IiwiQ0RBVEEiLCJEb2N0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/domelementtype/lib/esm/index.js\n");

/***/ })

};
;