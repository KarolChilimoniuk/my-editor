!function(e){var n={};function t(l){if(n[l])return n[l].exports;var c=n[l]={i:l,l:!1,exports:{}};return e[l].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:l})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)t.d(l,c,function(n){return e[n]}.bind(null,c));return l},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(module,exports){eval("\r\n\r\nconst nameInput = document.getElementById('name');\r\nconst ageInput = document.getElementById('age');\r\nconst txtArea = document.getElementById('secret');\r\nconst saveButton = document.querySelector('.form__input--Js2');\r\nconst loadButton = document.querySelector('.form__input--Js1');\r\nconst removeButton = document.querySelector('.form__input--Js3');\r\n\r\n\r\nsaveButton.addEventListener('click', (x) => {\r\n     x.preventDefault();\r\n     localStorage.setItem('name', nameInput.value);\r\n     localStorage.setItem('age', ageInput.value);\r\n     localStorage.setItem('secret', txtArea.value);\r\n })\r\n\r\n\r\n/* saveButton.addEventListener('click', function () {\r\n     localStorage.setItem('name', JSON.stringify(nameInput.value));\r\n     localStorage.setItem('age', JSON.stringify(ageInput.value));\r\n     localStorage.setItem('secret', JSON.stringify(txtArea.value));\r\n}) */\r\n\r\n\r\nloadButton.addEventListener('click', (x) => {\r\n    x.preventDefault();\r\n    nameInput.value = localStorage.getItem('name');\r\n    ageInput.value = localStorage.getItem('age');\r\n    txtArea.value = localStorage.getItem('secret');\r\n});\r\n\r\nremoveButton.addEventListener('click', (x) => {\r\n    x.preventDefault();\r\n    localStorage.removeItem('name');\r\n    localStorage.removeItem('age');\r\n    localStorage.removeItem('secret');\r\n    nameInput.value = null;\r\n    ageInput.value = null;\r\n    txtArea.value = null;\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpO1xyXG5jb25zdCBhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZ2UnKTtcclxuY29uc3QgdHh0QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWNyZXQnKTtcclxuY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19pbnB1dC0tSnMyJyk7XHJcbmNvbnN0IGxvYWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9faW5wdXQtLUpzMScpO1xyXG5jb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9faW5wdXQtLUpzMycpO1xyXG5cclxuXHJcbnNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoeCkgPT4ge1xyXG4gICAgIHgucHJldmVudERlZmF1bHQoKTtcclxuICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbmFtZScsIG5hbWVJbnB1dC52YWx1ZSk7XHJcbiAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FnZScsIGFnZUlucHV0LnZhbHVlKTtcclxuICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VjcmV0JywgdHh0QXJlYS52YWx1ZSk7XHJcbiB9KVxyXG5cclxuXHJcbi8qIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25hbWUnLCBKU09OLnN0cmluZ2lmeShuYW1lSW5wdXQudmFsdWUpKTtcclxuICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWdlJywgSlNPTi5zdHJpbmdpZnkoYWdlSW5wdXQudmFsdWUpKTtcclxuICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VjcmV0JywgSlNPTi5zdHJpbmdpZnkodHh0QXJlYS52YWx1ZSkpO1xyXG59KSAqL1xyXG5cclxuXHJcbmxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoeCkgPT4ge1xyXG4gICAgeC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbmFtZUlucHV0LnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25hbWUnKTtcclxuICAgIGFnZUlucHV0LnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FnZScpO1xyXG4gICAgdHh0QXJlYS52YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZWNyZXQnKTtcclxufSk7XHJcblxyXG5yZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoeCkgPT4ge1xyXG4gICAgeC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ25hbWUnKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhZ2UnKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzZWNyZXQnKTtcclxuICAgIG5hbWVJbnB1dC52YWx1ZSA9IG51bGw7XHJcbiAgICBhZ2VJbnB1dC52YWx1ZSA9IG51bGw7XHJcbiAgICB0eHRBcmVhLnZhbHVlID0gbnVsbDtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);