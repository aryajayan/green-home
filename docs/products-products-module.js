(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "3ytF":
/*!**************************************************!*\
  !*** ./src/app/products/store/product.action.ts ***!
  \**************************************************/
/*! exports provided: FetchProducts, FetchProductSuccess, AddProduct, AddProductSuccess, ErrorOccured */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchProducts", function() { return FetchProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchProductSuccess", function() { return FetchProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProduct", function() { return AddProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductSuccess", function() { return AddProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorOccured", function() { return ErrorOccured; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const FetchProducts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] Fetch Products');
const FetchProductSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] Fetch Product Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const AddProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] Add Product', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const AddProductSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] Add Product Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const ErrorOccured = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] Error Occured', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "EAgv":
/*!**************************************************!*\
  !*** ./src/app/products/store/product.effect.ts ***!
  \**************************************************/
/*! exports provided: ProductEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEffects", function() { return ProductEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _product_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.action */ "3ytF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");









class ProductEffects {
    // authFail$ = createEffect(
    //   () =>
    //     this.actions$.pipe(
    //       ofType(ProductActions.AuthFail),
    //       tap((action) => console.log(action.error))
    //     ),
    //   { dispatch: false }
    // );
    constructor(actions$, http, router, store) {
        this.actions$ = actions$;
        this.http = http;
        this.router = router;
        this.store = store;
        this.fetchProducts$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_product_action__WEBPACK_IMPORTED_MODULE_3__["FetchProducts"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])((action) => this.http
            .get('https://green-home-9ce8c-default-rtdb.firebaseio.com/products.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            const productsArray = [];
            for (let key in data) {
                productsArray.push(data[key]);
            }
            return _product_action__WEBPACK_IMPORTED_MODULE_3__["FetchProductSuccess"]({
                products: productsArray,
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_product_action__WEBPACK_IMPORTED_MODULE_3__["ErrorOccured"]({ error: error })))))));
        this.addProduct$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_product_action__WEBPACK_IMPORTED_MODULE_3__["AddProduct"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])((action) => this.http
            .post('https://green-home-9ce8c-default-rtdb.firebaseio.com/products.json', {
            name: action.name,
            price: action.price,
            description: action.description,
            image: action.image,
            soldCount: action.soldCount,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => _product_action__WEBPACK_IMPORTED_MODULE_3__["AddProductSuccess"]({
            name: action.name,
            price: action.price,
            description: action.description,
            image: action.image,
            soldCount: action.soldCount,
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_product_action__WEBPACK_IMPORTED_MODULE_3__["ErrorOccured"]({ error: error })))))));
        // signup$ = createEffect(() =>
        //   this.actions$.pipe(
        //     ofType(ProductActions.Signup),
        //     exhaustMap((action) =>
        //       this.http
        //         .post(
        //           'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCgX46Gu12bTfL5jpfQlH6bVg8wptF-XO4',
        //           {}
        //         )
        //         .pipe(
        //           map((data: Response) => ProductActions.AuthSuccess({})),
        //           catchError((error) => of(ProductActions.AuthFail({ error: error })))
        //         )
        //     )
        //   )
        // );
        this.addProductSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_product_action__WEBPACK_IMPORTED_MODULE_3__["AddProductSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((action) => this.router.navigate(['/products/product-list']))), { dispatch: false });
    }
}
ProductEffects.ɵfac = function ProductEffects_Factory(t) { return new (t || ProductEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"])); };
ProductEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ProductEffects, factory: ProductEffects.ɵfac });


/***/ }),

/***/ "Gfkl":
/*!****************************************************!*\
  !*** ./src/app/products/store/product.selector.ts ***!
  \****************************************************/
/*! exports provided: selectProductState, selectProducts, selectError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProductState", function() { return selectProductState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProducts", function() { return selectProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectError", function() { return selectError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _product_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.reducer */ "Iwmf");


const selectProductState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_product_reducer__WEBPACK_IMPORTED_MODULE_1__["productFeatureKey"]);
const selectProducts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectProductState, (state) => state['products']);
const selectError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectProductState, (state) => state['error']);


/***/ }),

/***/ "HxEG":
/*!*****************************************************************!*\
  !*** ./src/app/products/product-card/product-card.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProductCardComponent {
    constructor() { }
    ngOnInit() { }
}
ProductCardComponent.ɵfac = function ProductCardComponent_Factory(t) { return new (t || ProductCardComponent)(); };
ProductCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: "product" }, decls: 17, vars: 3, consts: [[1, "product-item"], [1, "product-item-content"], [1, "product-details"], [1, "p-mb-3", "image_content"], ["alt", "Bamboo Watch", 1, "product-image", 3, "src"], [1, "p-mb-1"], [1, "p-mt-0", "p-mb-3"], [1, "row", "product_buttons"], [1, "col-xs-3", "col-sm-3", "col-md-3", "col-lg-3", "icon_content"], [1, "fas", "fa-heart"], [1, "col-xs-9", "col-sm-9", "col-md-9", "col-lg-9", "button_content"], ["type", "button", 1, "btn", "btn-primary", "cart_button", "primary_button"], [1, "fas", "fa-shopping-cart", "cart_icon", "primary_icon"]], template: function ProductCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Add To Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.product.price, "");
    } }, styles: ["[_nghost-%COMP%] {\r\n  width: 25%;\r\n}\r\n.product-item-content[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.product-item[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n  background: #fff;\r\n  margin: 2em;\r\n}\r\n.product-image[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  box-shadow: 0 0 4px 2px #ccc;\r\n  height: 30vh;\r\n}\r\n.product_buttons[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.button_content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: 80%;\r\n}\r\n.icon_content[_ngcontent-%COMP%] {\r\n  width: 18%;\r\n}\r\n.cart_button[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n.cart_icon[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n@media (max-width: 1200px) {\r\n  .button_content[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\r\n    font-size: 0.7em;\r\n  }\r\n  .product-item-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 1.2em;\r\n  }\r\n  .product-item[_ngcontent-%COMP%] {\r\n    margin: 1em;\r\n  }\r\n  .product-image[_ngcontent-%COMP%] {\r\n    height: 25vh;\r\n  }\r\n  \r\n}\r\n@media (max-width: 1024px) {\r\n  \r\n  [_nghost-%COMP%] {\r\n    width: 33%;\r\n  }\r\n  .product-item[_ngcontent-%COMP%] {\r\n    margin: 1em;\r\n  }\r\n  .button_content[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\r\n    font-size: 0.9em;\r\n  }\r\n}\r\n@media (max-width: 768px) {\r\n  \r\n  [_nghost-%COMP%] {\r\n    width: 50%;\r\n  }\r\n  .product-item[_ngcontent-%COMP%] {\r\n    padding: 1em;\r\n  }\r\n  .button_content[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\r\n    font-size: 0.8em;\r\n  }\r\n}\r\n@media (max-width: 480px) {\r\n  \r\n  .product-item-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 1em;\r\n  }\r\n  .product-item[_ngcontent-%COMP%] {\r\n    margin: 0em;\r\n    border: 1px solid #ccc;\r\n  }\r\n  .button_content[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\r\n    font-size: 1em;\r\n  }\r\n  .button_content[_ngcontent-%COMP%] {\r\n    width: 71%;\r\n  }\r\n  .icon_content[_ngcontent-%COMP%] {\r\n    width: 27%;\r\n  }\r\n  .cart_button[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .cart_icon[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n  }\r\n  .product-image[_ngcontent-%COMP%] {\r\n    height: 19vh;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0EsaUVBQWlFO0FBQ25FO0FBQ0E7RUFDRSxpRUFBaUU7RUFDakU7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFFQTtFQUNFLGdFQUFnRTtFQUNoRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUVBO0VBQ0UsK0RBQStEO0VBQy9EO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJwcm9kdWN0LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcbi5wcm9kdWN0LWl0ZW0tY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wcm9kdWN0LWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIG1hcmdpbjogMmVtO1xyXG59XHJcbi5wcm9kdWN0LWltYWdlIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggMnB4ICNjY2M7XHJcbiAgaGVpZ2h0OiAzMHZoO1xyXG59XHJcbi5wcm9kdWN0X2J1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYnV0dG9uX2NvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB3aWR0aDogODAlO1xyXG59XHJcbi5pY29uX2NvbnRlbnQge1xyXG4gIHdpZHRoOiAxOCU7XHJcbn1cclxuLmNhcnRfYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmNhcnRfaWNvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmJ1dHRvbl9jb250ZW50IC5idG4uYnRuLXByaW1hcnkge1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICB9XHJcbiAgLnByb2R1Y3QtaXRlbS1jb250ZW50IGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgfVxyXG4gIC5wcm9kdWN0LWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgfVxyXG4gIC5wcm9kdWN0LWltYWdlIHtcclxuICAgIGhlaWdodDogMjV2aDtcclxuICB9XHJcbiAgLyogU2VsZWN0b3JzIGFuZCBzdHlsZXMgYWZmZWN0aW5nIHNjcmVlbnMgVVAgVE8gOTc5cHggKERlc2t0b3ApICovXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC8qIFNlbGVjdG9ycyBhbmQgc3R5bGVzIGFmZmVjdGluZyBzY3JlZW5zIFVQIFRPIDk3OXB4IChEZXNrdG9wKSAqL1xyXG4gIDpob3N0IHtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgfVxyXG4gIC5wcm9kdWN0LWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgfVxyXG4gIC5idXR0b25fY29udGVudCAuYnRuLmJ0bi1wcmltYXJ5IHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAvKiBTZWxlY3RvcnMgYW5kIHN0eWxlcyBhZmZlY3Rpbmcgc2NyZWVucyBVUCBUTyA3NjdweCAoVGFibGV0KSAqL1xyXG4gIDpob3N0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIC5wcm9kdWN0LWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gIH1cclxuICAuYnV0dG9uX2NvbnRlbnQgLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLyogU2VsZWN0b3JzIGFuZCBzdHlsZXMgYWZmZWN0aW5nIHNjcmVlbnMgVVAgVE8gNDgwcHggKFBob25lKSAqL1xyXG4gIC5wcm9kdWN0LWl0ZW0tY29udGVudCBoNCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcbiAgLnByb2R1Y3QtaXRlbSB7XHJcbiAgICBtYXJnaW46IDBlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgfVxyXG4gIC5idXR0b25fY29udGVudCAuYnRuLmJ0bi1wcmltYXJ5IHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxuICAuYnV0dG9uX2NvbnRlbnQge1xyXG4gICAgd2lkdGg6IDcxJTtcclxuICB9XHJcbiAgLmljb25fY29udGVudCB7XHJcbiAgICB3aWR0aDogMjclO1xyXG4gIH1cclxuICAuY2FydF9idXR0b24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmNhcnRfaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIC5wcm9kdWN0LWltYWdlIHtcclxuICAgIGhlaWdodDogMTl2aDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "IA05":
/*!*******************************************!*\
  !*** ./src/app/products/product.model.ts ***!
  \*******************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
    constructor(name, price, description, image, soldCount) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.soldCount = soldCount;
    }
}


/***/ }),

/***/ "Iwmf":
/*!***************************************************!*\
  !*** ./src/app/products/store/product.reducer.ts ***!
  \***************************************************/
/*! exports provided: productReducer, productFeatureKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productReducer", function() { return productReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productFeatureKey", function() { return productFeatureKey; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.model */ "IA05");
/* harmony import */ var _product_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.action */ "3ytF");



const initialState = {
    products: null,
    error: null,
};
const _productReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_product_action__WEBPACK_IMPORTED_MODULE_2__["FetchProductSuccess"], (state, action) => (Object.assign(Object.assign({}, state), { products: action.products, error: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_product_action__WEBPACK_IMPORTED_MODULE_2__["AddProduct"], (state, action) => (Object.assign(Object.assign({}, state), { error: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_product_action__WEBPACK_IMPORTED_MODULE_2__["AddProductSuccess"], (state, action) => (Object.assign(Object.assign({}, state), { products: [
        new _product_model__WEBPACK_IMPORTED_MODULE_1__["Product"](action.name, action.price, action.description, action.image, action.soldCount),
        ...state.products,
    ], error: null }))));
function productReducer(state, action) {
    return _productReducer(state, action);
}
const productFeatureKey = 'product';


/***/ }),

/***/ "Vk5u":
/*!***************************************************************************!*\
  !*** ./src/app/products/featured-products/featured-products.component.ts ***!
  \***************************************************************************/
/*! exports provided: FeaturedProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedProductsComponent", function() { return FeaturedProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_card_carousel_card_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/card-carousel/card-carousel.component */ "y4Yg");




function FeaturedProductsComponent_0_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card-carousel", 1);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("products", ctx_r1.products);
} }
function FeaturedProductsComponent_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FeaturedProductsComponent_0_ng_template_0_Template, 1, 1, "ng-template");
} }
class FeaturedProductsComponent {
    constructor(store) {
        this.store = store;
        this.products = [];
    }
    ngOnInit() {
        // this.store.select(selectProducts).subscribe((data) => {
        //   this.products = data;
        // });
        // this.products = [
        //   {
        //     name: 'test',
        //     price: 100,
        //     image:
        //       'https://firebasestorage.googleapis.com/v0/b/green-home-9ce8c.appspot.com/o/buy-zz-plant-in-india.jpg?alt=media&token=c4feccd4-cf80-4d63-a91d-87f88ef27527',
        //     description: '',
        //   },
        //   {
        //     name: 'test2',
        //     price: 100,
        //     image:
        //       'https://firebasestorage.googleapis.com/v0/b/green-home-9ce8c.appspot.com/o/buy-zz-plant-in-india.jpg?alt=media&token=c4feccd4-cf80-4d63-a91d-87f88ef27527',
        //     description: '',
        //   },
        //   {
        //     name: 'test3',
        //     price: 100,
        //     image:
        //       'https://firebasestorage.googleapis.com/v0/b/green-home-9ce8c.appspot.com/o/buy-zz-plant-in-india.jpg?alt=media&token=c4feccd4-cf80-4d63-a91d-87f88ef27527',
        //     description: '',
        //   },
        //   {
        //     name: 'test4',
        //     price: 100,
        //     image:
        //       'https://firebasestorage.googleapis.com/v0/b/green-home-9ce8c.appspot.com/o/buy-zz-plant-in-india.jpg?alt=media&token=c4feccd4-cf80-4d63-a91d-87f88ef27527',
        //     description: '',
        //   },
        //   {
        //     name: 'test5',
        //     price: 100,
        //     image:
        //       'https://firebasestorage.googleapis.com/v0/b/green-home-9ce8c.appspot.com/o/buy-zz-plant-in-india.jpg?alt=media&token=c4feccd4-cf80-4d63-a91d-87f88ef27527',
        //     description: '',
        //   },
        // ];
    }
}
FeaturedProductsComponent.ɵfac = function FeaturedProductsComponent_Factory(t) { return new (t || FeaturedProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
FeaturedProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeaturedProductsComponent, selectors: [["app-featured-products"]], inputs: { products: "products" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "products"]], template: function FeaturedProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FeaturedProductsComponent_0_Template, 1, 0, undefined, 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_card_carousel_card_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CardCarouselComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0dXJlZC1wcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "WLUK":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./featured-products/featured-products.component */ "Vk5u");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.component */ "ziXE");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products-list/products-list.component */ "Wd2F");
/* harmony import */ var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-add/product-add.component */ "dhtb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_product_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/product.reducer */ "Iwmf");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _store_product_effect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/product.effect */ "EAgv");
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-card/product-card.component */ "HxEG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class ProductsModule {
}
ProductsModule.ɵfac = function ProductsModule_Factory(t) { return new (t || ProductsModule)(); };
ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature(_store_product_reducer__WEBPACK_IMPORTED_MODULE_9__["productFeatureKey"], _store_product_reducer__WEBPACK_IMPORTED_MODULE_9__["productReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forFeature([_store_product_effect__WEBPACK_IMPORTED_MODULE_11__["ProductEffects"]]),
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
                    children: [
                        { path: '', redirectTo: 'product-list' },
                        { path: 'product-list', component: _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductsListComponent"] },
                        { path: 'product-add', component: _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_6__["ProductAddComponent"] },
                    ],
                },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
        _featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_1__["FeaturedProductsComponent"],
        _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductsListComponent"],
        _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_6__["ProductAddComponent"],
        _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_12__["ProductCardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsFeatureModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "Wd2F":
/*!*******************************************************************!*\
  !*** ./src/app/products/products-list/products-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var _store_product_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/product.selector */ "Gfkl");
/* harmony import */ var _store_product_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/product.action */ "3ytF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../featured-products/featured-products.component */ "Vk5u");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product-card/product-card.component */ "HxEG");







function ProductsListComponent_app_product_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-product-card", 5);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("product", item_r1);
} }
class ProductsListComponent {
    constructor(store) {
        this.store = store;
        this.allProducts = [];
        this.featured = [];
    }
    ngOnInit() {
        this.store.select(_store_product_selector__WEBPACK_IMPORTED_MODULE_0__["selectProducts"]).subscribe((data) => {
            if (data == null) {
                this.store.dispatch(_store_product_action__WEBPACK_IMPORTED_MODULE_1__["FetchProducts"]());
            }
            else {
                this.featured = data.filter((item) => item.soldCount > 10);
                this.allProducts = data;
            }
        });
    }
}
ProductsListComponent.ɵfac = function ProductsListComponent_Factory(t) { return new (t || ProductsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
ProductsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductsListComponent, selectors: [["app-products-list"]], decls: 6, vars: 2, consts: [[1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [3, "products"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12", "product_list"], ["class", "product_card_content", 3, "product", 4, "ngFor", "ngForOf"], [1, "product_card_content", 3, "product"]], template: function ProductsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-featured-products", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProductsListComponent_app_product_card_5_Template, 1, 1, "app-product-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("products", ctx.featured);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.allProducts);
    } }, directives: [_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_4__["FeaturedProductsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_6__["ProductCardComponent"]], styles: [".product_list[_ngcontent-%COMP%] {\r\n  padding: 2em;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n}\r\n@media screen and (max-width: 480px) {\r\n  .product_list[_ngcontent-%COMP%] {\r\n    padding: 1em;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJwcm9kdWN0cy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdF9saXN0IHtcclxuICBwYWRkaW5nOiAyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5wcm9kdWN0X2xpc3Qge1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "dhtb":
/*!***************************************************************!*\
  !*** ./src/app/products/product-add/product-add.component.ts ***!
  \***************************************************************/
/*! exports provided: ProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function() { return ProductAddComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _store_product_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/product.action */ "3ytF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ProductAddComponent_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " This field cannot be empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductAddComponent_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " This field cannot be empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductAddComponent_small_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " This field cannot be empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductAddComponent_img_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ProductAddComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductAddComponent_div_33_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](35); return _r5.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Browse an image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ProductAddComponent {
    constructor(store) {
        this.store = store;
        this.showImage = false;
        this.imageUrl = '';
    }
    ngOnInit() {
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            soldCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](0),
        });
    }
    onProductSave() {
        let product = this.productForm.value;
        this.store.dispatch(_store_product_action__WEBPACK_IMPORTED_MODULE_1__["AddProduct"](Object.assign({}, product)));
    }
    selectfile(event) {
        var files = event.target.files;
        if (files && files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = (event) => {
                this.imageUrl = event.target.result.toString();
                this.productForm.patchValue({
                    image: event.target.result,
                });
                this.productForm.get('image').updateValueAndValidity();
                this.showImage = true;
            };
        }
    }
}
ProductAddComponent.ɵfac = function ProductAddComponent_Factory(t) { return new (t || ProductAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
ProductAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductAddComponent, selectors: [["app-product-add"]], decls: 40, vars: 6, consts: [[1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12", "container"], ["role", "form", 3, "formGroup", "ngSubmit"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6"], [1, "grey_background"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Enter product name", "autocomplete", "off", 1, "form-control", "input_transparent"], ["class", "form-text text-muted", 4, "ngIf"], ["for", "price"], ["type", "number", "id", "price", "formControlName", "price", "placeholder", "Enter price", "autocomplete", "off", 1, "form-control", "input_transparent"], ["for", "description"], ["type", "text", "id", "description", "formControlName", "description", "placeholder", "Enter description", "autocomplete", "off", 1, "form-control", "input_transparent"], [1, "col-xs-12", "col-sm-12", "col-md-10", "col-lg-8", "offset-md-1", "offset-lg-2"], [1, "border_grey", "image_container"], ["alt", "", "class", "product_image", 3, "src", 4, "ngIf"], ["class", "image_placeholder", 3, "click", 4, "ngIf"], ["type", "file", "id", "file_upload", 1, "form-control-file", 3, "change"], ["fileUpload", ""], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12", "button_container"], ["type", "submit", 1, "btn", "primary_button"], [1, "form-text", "text-muted"], ["alt", "", 1, "product_image", 3, "src"], [1, "image_placeholder", 3, "click"], [1, "fas", "fa-image"]], template: function ProductAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ProductAddComponent_Template_form_ngSubmit_2_listener() { return ctx.onProductSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ProductAddComponent_small_12_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ProductAddComponent_small_17_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ProductAddComponent_small_23_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Product Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, ProductAddComponent_img_32_Template, 1, 1, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, ProductAddComponent_div_33_Template, 4, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProductAddComponent_Template_input_change_34_listener($event) { return ctx.selectfile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " SUBMIT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productForm.get("name").touched && ctx.productForm.get("name").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productForm.get("price").touched && ctx.productForm.get("price").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productForm.get("description").touched && ctx.productForm.get("description").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showImage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"]], styles: [".container[_ngcontent-%COMP%] {\r\n  padding-top: 40px;\r\n}\r\n.form_container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  padding: 1em;\r\n}\r\n.form_field_container[_ngcontent-%COMP%] {\r\n  border: 1px solid #ccc;\r\n}\r\ntextarea.form-control[_ngcontent-%COMP%] {\r\n  height: 14em;\r\n}\r\n.image_container[_ngcontent-%COMP%] {\r\n  height: 26em;\r\n}\r\n.product_image[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.form-control-file[_ngcontent-%COMP%] {\r\n  margin: 3% 0;\r\n}\r\n.grey_background[_ngcontent-%COMP%] {\r\n  min-height: 77vh;\r\n}\r\n.button_container[_ngcontent-%COMP%] {\r\n  text-align: end;\r\n  padding-top: 1vh;\r\n}\r\n.image_placeholder[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #8c8c8c;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .image_container[_ngcontent-%COMP%] {\r\n    height: 22em;\r\n  }\r\n  .grey_background[_ngcontent-%COMP%] {\r\n    min-height: 100%;\r\n    padding: 10px 15px 1px 15px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtYWRkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7QUFDQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsMkJBQTJCO0VBQzdCO0FBQ0YiLCJmaWxlIjoicHJvZHVjdC1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcbi5mb3JtX2NvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxufVxyXG4uZm9ybV9maWVsZF9jb250YWluZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxudGV4dGFyZWEuZm9ybS1jb250cm9sIHtcclxuICBoZWlnaHQ6IDE0ZW07XHJcbn1cclxuLmltYWdlX2NvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAyNmVtO1xyXG59XHJcbi5wcm9kdWN0X2ltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmZvcm0tY29udHJvbC1maWxlIHtcclxuICBtYXJnaW46IDMlIDA7XHJcbn1cclxuLmdyZXlfYmFja2dyb3VuZCB7XHJcbiAgbWluLWhlaWdodDogNzd2aDtcclxufVxyXG4uYnV0dG9uX2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIHBhZGRpbmctdG9wOiAxdmg7XHJcbn1cclxuLmltYWdlX3BsYWNlaG9sZGVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6ICM4YzhjOGM7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaW1hZ2VfY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMjJlbTtcclxuICB9XHJcbiAgLmdyZXlfYmFja2dyb3VuZCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4IDFweCAxNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ziXE":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class ProductsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 1, vars: 0, template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map