(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/alert/alert.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alert/alert.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"message\" [ngClass]=\"message.cssClass\">{{message.text}}</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/authentication.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/authentication.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"container\">\n    <form nz-form [formGroup]=\"validateForm\" class=\"login-form\" (ngSubmit)=\"submitForm(validateForm.value)\" id=\"formBox\">\n            <h2 class=\"head\">Login</h2>\n            <app-alert style=\"color: red;\"></app-alert>\n        <nz-form-item>\n          <nz-form-control nzErrorTip=\"Please input your email!\">\n            <nz-input-group nzPrefixIcon=\"user\">\n              <input type=\"email\" nz-input formControlName=\"email\" placeholder=\"Email\" />\n            </nz-input-group>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-control nzErrorTip=\"Please input your Password!\">\n            <nz-input-group nzPrefixIcon=\"lock\">\n              <input type=\"password\" nz-input formControlName=\"password\" placeholder=\"Password\" />\n            </nz-input-group>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-control>\n            <button style=\"background-color: #500157;\" nz-button class=\"login-form-button\">Sign In</button>\n            <!-- <p class=\"register_now\"><a (click)=\"register()\"  >register now!</a></p> -->\n          </nz-form-control>\n        </nz-form-item>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-layout class=\"app-layout\">\n    <nz-sider class=\"menu-sidebar\"\n              nzCollapsible\n              nzWidth=\"256px\"\n              nzBreakpoint=\"md\"\n              [(nzCollapsed)]=\"isCollapsed\"\n              [nzTrigger]=\"null\"\n              \n              >\n      <div class=\"sidebar-logo\">\n        <a href=\"\" target=\"_blank\">\n          <i nz-icon nzType=\"user\" nzTheme=\"outline\"></i>\n          <h1>Customer Care</h1>\n        </a>\n      </div>\n      <ul nz-menu nzTheme=\"dark\" nzMode=\"inline\" [nzInlineCollapsed]=\"isCollapsed\"  >\n        <div *ngIf=\"userRole === 'customer_care' || userRole === 'admin'\">\n        <li nz-submenu nzOpen nzTitle=\"Front Desk\" nzIcon=\"dashboard\">\n          <ul>\n            <li nz-menu-item nzMatchRouter>\n              <a routerLink=\"./openTicket\">Open Ticket</a>\n            </li>\n            <li nz-menu-item nzMatchRouter>\n              <a routerLink=\"./ticketList\">Ticket List</a>\n            </li>\n          </ul>\n        </li>\n      </div>\n      <div *ngIf=\"userRole === 'admin' || userRole === 'staff' || userRole === 'crm' || userRole === 'fund_manager' || userRole === 'management' || userRole === 'hod' || userRole === 'units'\">\n        <li nz-submenu nzOpen nzTitle=\"Assigned Tickets\" nzIcon=\"form\">\n          <ul>\n            <li nz-menu-item nzMatchRouter>\n              <a routerLink=\"./assignedTickets\">Tickets</a>\n            </li>\n          </ul>\n        </li>\n      </div>\n      <div *ngIf=\"userRole === 'admin' || userRole === 'staff'\">\n        <li nz-submenu nzOpen nzTitle=\"View All Tickets\" nzIcon=\"eye\">\n            <ul>\n              <li nz-menu-item nzMatchRouter>\n                <a routerLink=\"./viewOpenTickets\">Open Tickets</a>\n              </li>\n              <li nz-menu-item nzMatchRouter>\n                  <a routerLink=\"./viewAClosedTickets\">Closed Tickets</a>\n              </li>\n              <li nz-menu-item nzMatchRouter>\n                    <a routerLink=\"./viewOverDueTickets\">Over-Due Tickets</a>\n              </li>\n            </ul>\n          </li>\n        </div> \n      </ul>\n    </nz-sider>\n    <nz-layout>\n      <nz-header>\n        <div class=\"app-header\">\n          <span class=\"header-trigger\" (click)=\"isCollapsed = !isCollapsed\">\n              <i class=\"trigger\"\n                 nz-icon\n                 [nzType]=\"isCollapsed ? 'menu-unfold' : 'menu-fold'\"\n              ></i>\n          </span>\n          <span style=\"float: right; margin-right: 10px;\">\n              {{userItems.name}}\n            <button style=\"margin-left: 10px;\" nz-button nzType=\"default\" (click) =\"logout()\" [nzLoading]=\"loading\" ><i nz-icon nzType=\"logout\" nzTheme=\"outline\"></i>Logout</button>\n        </span>\n        </div>\n      </nz-header>\n      <nz-content>\n        <div class=\"inner-content\">\n          <router-outlet></router-outlet>\n        </div>\n      </nz-content>\n    </nz-layout>\n  </nz-layout>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assigned-tickets/assigned-tickets.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assigned-tickets/assigned-tickets.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-card nzTitle=\"Pending Tickets\" >\n  <div nz-row style=\"margin-bottom: 10px;\">\n    <span style=\"float: right; margin-right: 10px;\">\n        <button nz-button nzSize=\"small\" nz-th-extra class=\"ant-table-filter-icon\" nz-icon nz-dropdown\n            #dropdown=\"nzDropdown\" [nzDropdownMenu]=\"menu\" [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n            nzTrigger=\"click\" nzPlacement=\"bottomRight\" [nzClickHide]=\"false\" nzTableFilter>Search\n            <i nz-icon nzType=\"search\" nzTheme=\"outline\"></i>\n        </button>\n    </span>\n</div>\n  <nz-table #ticketsTable [nzData]=\"searchTickets\" [nzLoading]=\"loading\" [nzPageSize]=\"5\">\n          <thead>\n            <tr>\n              <th>Ticket Number</th>\n              <th >Client Phone</th>\n              <th>Department</th>\n              <th>Product</th>\n              <th>Status</th>\n              <th>Created on</th>\n              <th>Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let data of ticketsTable.data\">\n              <td>{{data.ticketNum}}</td>\n              <td>{{data.phone}}</td>\n              <td>{{data.department}}</td>\n              <td>{{data.product}}</td>\n              <td>{{data.status}}</td>\n              <td>{{data.createdOn}}</td>\n              <td>\n                <button nz-button nz-dropdown [nzDropdownMenu]=\"menu4\">\n                  More\n                  <i nz-icon nzType=\"down\"></i>\n                </button>\n\n                <nz-dropdown-menu #menu4=\"nzDropdownMenu\">\n                  <ul nz-menu>\n                    <li nz-menu-item  (click)=\"showModal(data)\">View Ticket</li>\n                    <li nz-menu-item  (click)=\"showClosingModal(data)\">Comment</li>\n                  </ul>\n                </nz-dropdown-menu>\n              </td>\n            </tr>\n          </tbody>\n        </nz-table>\n</nz-card>\n\n\n\n<nz-dropdown-menu #menu=\"nzDropdownMenu\">\n  <div class=\"search-box\">\n    <input type=\"text\" nz-input placeholder=\"Search Ticket\" [(ngModel)]=\"searchValue\" />\n    <button nz-button nzSize=\"small\" nzType=\"primary\" (click)=\"search()\" class=\"search-button\">\n      Search\n    </button>\n    <button nz-button nzSize=\"small\" (click)=\"reset()\">Reset</button>\n  </div>\n</nz-dropdown-menu>\n\n\n\n<nz-modal\n[(nzVisible)]=\"isVisibleV\"\n[nzTitle]=\"modalViewTitle\"\n[nzContent]=\"modalViewContent\"\n[nzFooter]=\"modalViewFooter\"\n(nzOnCancel)=\"handleCancelView()\"\n>\n<ng-template #modalViewTitle>\nTicket Details\n</ng-template>\n\n<ng-template #modalViewContent>\n<div style=\"width: 500px;\">\n<p>Ticket Number : {{selectedTicket.ticketNum}}</p>\n<p>Client Name   : {{selectedTicket.name}}</p>\n<p>Client MSISND        : {{selectedTicket.phone}}</p>\n<p>Department    : {{selectedTicket.department}}</p>\n<p>Product       : {{selectedTicket.product}}</p>\n<p>Status        : {{selectedTicket.status}}</p>\n<p>Created By    : {{selectedTicket.createdBy}}</p>\n<p>Comment       : {{selectedTicket.comment}}</p>\n<p>Created on    : {{selectedTicket.createdOn}}</p>\n</div>\n</ng-template>\n\n<ng-template #modalViewFooter>\n<button nz-button nzType=\"default\" (click)=\"handleCancel()\">Cancel</button>\n</ng-template>\n</nz-modal>\n\n\n<nz-modal\n[(nzVisible)]=\"isVisibleClosing\"\n[nzTitle]=\"modalTitle\"\n[nzContent]=\"modalContent\"\n[nzFooter]=\"modalFooter\"\n(nzOnCancel)=\"handleCancel()\"\n>\n<ng-template #modalTitle>\n  Ticket Details\n</ng-template>\n\n<ng-template #modalContent>\n  <div style=\"width: 500px;\">\n    <p>Ticket Number : {{selectedTicket.ticketNum}}</p>\n    <p>Client Name   : {{selectedTicket.name}}</p>\n    <p>Client        : {{selectedTicket.phone}}</p>\n    <p>Department    : {{selectedTicket.department}}</p>\n    <p>Product       : {{selectedTicket.product}}</p>\n    <p>Status        : {{selectedTicket.status}}</p>\n    <p>Created By    : {{selectedTicket.createdBy}}</p>\n    <p>Comment       : {{selectedTicket.comment}}</p>\n    <p>Created on    : {{selectedTicket.createdOn}}</p>\n  </div>\n  \n  <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm(selectedTicket)\">\n    <nz-form-item>\n        <nz-form-control [nzSpan]=\"14\" nzErrorTip=\"Please write something here!\">\n        <textarea [(ngModel)]=\"closeTicketComment\" formControlName=\"closeTicketComment\" nz-input rows=\"2\" placeholder=\"write closing comment\"></textarea>\n        </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n        <nz-form-control style=\"text-align: center;\">\n        <button nz-button  [nzLoading]=\"updatingTicket\">Close Ticket</button>\n        </nz-form-control>\n    </nz-form-item>\n</form>\n</ng-template>\n\n<ng-template #modalFooter>\n  <button nz-button nzType=\"default\" (click)=\"handleCancel()\">Cancel</button>\n</ng-template>\n</nz-modal>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/closed-tickets/closed-tickets.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/closed-tickets/closed-tickets.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-card nzTitle=\"Closed Tickets\">\n  <div nz-row style=\"margin-bottom: 10px;\">\n    <span style=\"float: right; margin-right: 10px;\">\n        <button nz-button nzSize=\"small\" nz-th-extra class=\"ant-table-filter-icon\" nz-icon nz-dropdown\n            #dropdown=\"nzDropdown\" [nzDropdownMenu]=\"menu\" [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n            nzTrigger=\"click\" nzPlacement=\"bottomRight\" [nzClickHide]=\"false\" nzTableFilter>Search\n            <i nz-icon nzType=\"search\" nzTheme=\"outline\"></i>\n        </button>\n    </span>\n</div>\n  <nz-table #ticketsTable [nzData]=\"searchTickets\" [nzLoading]=\"loading\" [nzPageSize]=\"5\">\n          <thead>\n            <tr>\n              <th>Ticket Number</th>\n              <th>Client</th>\n              <th>Department</th>\n              <th>Product</th>\n              <th>Status</th>\n              <th>Created on</th>\n              <th>Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let data of ticketsTable.data\">\n              <td>{{data.ticketNum}}</td>\n              <td>{{data.phone}}</td>\n              <td>{{data.department}}</td>\n              <td>{{data.product}}</td>\n              <td>{{data.status}}</td>\n              <td>{{data.createdOn}}</td>\n              <td>\n                <a (click)=\"showModal(data)\">View Ticket</a>\n              </td>\n            </tr>\n          </tbody>\n        </nz-table>\n</nz-card>\n\n<nz-dropdown-menu #menu=\"nzDropdownMenu\">\n  <div class=\"search-box\">\n    <input type=\"text\" nz-input placeholder=\"Search Ticket\" [(ngModel)]=\"searchValue\" />\n    <button nz-button nzSize=\"small\" nzType=\"primary\" (click)=\"search()\" class=\"search-button\">\n      Search\n    </button>\n    <button nz-button nzSize=\"small\" (click)=\"reset()\">Reset</button>\n  </div>\n</nz-dropdown-menu>\n\n<nz-modal\n[(nzVisible)]=\"isVisible\"\n[nzTitle]=\"modalTitle\"\n[nzContent]=\"modalContent\"\n[nzFooter]=\"modalFooter\"\n(nzOnCancel)=\"handleCancel()\"\n>\n<ng-template #modalTitle>\n  Ticket Details\n</ng-template>\n\n<ng-template #modalContent>\n  <div style=\"width: 500px;\">\n    <p>Ticket Number : {{selectedTicket.ticketNum}}</p>\n    <p>Client Name   : {{selectedTicket.name}}</p>\n    <p>Client        : {{selectedTicket.phone}}</p>\n    <p>Department    : {{selectedTicket.department}}</p>\n    <p>Product       : {{selectedTicket.product}}</p>\n    <p>Status        : {{selectedTicket.status}}</p>\n    <p>Created By    : {{selectedTicket.createdBy}}</p>\n    <p>Comment       : {{selectedTicket.comment}}</p>\n    <p>Closing Comment: {{selectedTicket.closeTicketComment}}</p>\n    <p>Closed By     : {{selectedTicket.closedBy}}</p>\n    <p>Created on    : {{selectedTicket.createdOn}}</p>\n  </div>\n</ng-template>\n\n<ng-template #modalFooter>\n  <button nz-button nzType=\"default\" (click)=\"handleCancel()\">Cancel</button>\n</ng-template>\n</nz-modal>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/open-ticket/open-ticket.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/open-ticket/open-ticket.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-card nzTitle=\"Open Ticket\">\n    <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm(validateForm.value)\">\n<nz-form-item>\n  <nz-form-label [nzSpan]= 5 nzRequired>Client Name</nz-form-label>\n  <nz-form-control [nzSpan]= 14 nzErrorTip=\"Please input client full name!\">\n    <input nz-input formControlName=\"name\" placeholder=\"Client Name\" />\n  </nz-form-control>\n</nz-form-item>\n<nz-form-item>\n  <nz-form-label [nzSpan]= 5  nzRequired>Phone Number</nz-form-label>\n  <nz-form-control [nzSpan]= 14  nzErrorTip=\"Please input client phone number!\">\n    <input nz-input minlength=\"12\" maxlength=\"12\" formControlName=\"phone\" placeholder=\"Phone Number e.g: 260*********\" />\n  </nz-form-control>\n</nz-form-item>\n\n<nz-form-item>\n    <nz-form-label [nzSpan]=\"5\">Email</nz-form-label>\n    <nz-form-control nzHasFeedback [nzSpan]= 14  nzErrorTip=\"Email is not valid\">\n      <input nz-input formControlName=\"email\"  placeholder=\"Email\" name=\"email\" email />\n    </nz-form-control>\n  </nz-form-item>\n\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"5\" nzRequired>Product</nz-form-label>\n    <nz-form-control [nzSpan]=14   nzHasFeedback nzRequired>\n      <nz-select name=\"select-validate\" nzPlaceHolder=\"Select Product\" formControlName=\"product\">\n        <nz-option  *ngFor=\"let product of productList\" nzValue={{product.product}} nzLabel={{product.product}}></nz-option>\n      </nz-select>\n    </nz-form-control>\n  </nz-form-item>\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"5\" nzRequired>Department</nz-form-label>\n    <nz-form-control [nzSpan]= 14  nzHasFeedback>\n      <nz-select name=\"select-validate\" formControlName=\"department\" nzPlaceHolder=\"Select Department\">\n        <nz-option  *ngFor=\"let department of departmentList\" nzValue={{department.dept_name}} nzLabel={{department.dept_name}}></nz-option>\n      </nz-select>\n    </nz-form-control>\n  </nz-form-item>\n\n  <nz-form-item>\n    <nz-form-label [nzSpan]=\"5\" nzRequired>Comment</nz-form-label>\n    <nz-form-control [nzSpan]= 14 nzErrorTip=\"Please write something here!\">\n      <textarea formControlName=\"comment\" nz-input rows=\"2\" placeholder=\"write any thing\"></textarea>\n    </nz-form-control>\n  </nz-form-item>\n\n  <nz-form-item>\n    <nz-form-control style=\"text-align: center;\">\n      <button nz-button nzType=\"default\" (click)=\"loadOne()\" [nzLoading]=\"isLoadingOne\" type=\"submit\" >Open Ticket</button>\n    </nz-form-control>\n  </nz-form-item>\n\n</form>\n</nz-card>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/over-due-tickets/over-due-tickets.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/over-due-tickets/over-due-tickets.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-card nzTitle=\"Overdue Tickets\">\n  <div nz-row style=\"margin-bottom: 10px;\">\n    <span style=\"float: right; margin-right: 10px;\">\n        <button nz-button nzSize=\"small\" nz-th-extra class=\"ant-table-filter-icon\" nz-icon nz-dropdown\n            #dropdown=\"nzDropdown\" [nzDropdownMenu]=\"menu\" [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n            nzTrigger=\"click\" nzPlacement=\"bottomRight\" [nzClickHide]=\"false\" nzTableFilter>Search\n            <i nz-icon nzType=\"search\" nzTheme=\"outline\"></i>\n        </button>\n    </span>\n</div>\n  <nz-table #ticketsTable [nzData]=\"searchTickets\" [nzLoading]=\"loading\" [nzPageSize]=\"5\">\n          <thead>\n            <tr>\n              <th>Ticket Number</th>\n              <th>Client</th>\n              <th>Department</th>\n              <th>Product</th>\n              <th>Status</th>\n              <th>Created on</th>\n              <th>Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let data of ticketsTable.data\">\n              <td>{{data.ticketNum}}</td>\n              <td>{{data.phone}}</td>\n              <td>{{data.department}}</td>\n              <td>{{data.product}}</td>\n              <td>{{data.status}}</td>\n              <td>{{data.createdOn}}</td>\n              <td>\n                <button nz-button nz-dropdown [nzDropdownMenu]=\"menu4\">\n                  More\n                  <i nz-icon nzType=\"down\"></i>\n                </button>\n\n                <nz-dropdown-menu #menu4=\"nzDropdownMenu\">\n                  <ul nz-menu>\n                    <li nz-menu-item  (click)=\"showModal(data)\">View Ticket</li>\n                    <li nz-menu-item  (click)=\"showCommentModal(data)\">Comment</li>\n                  </ul>\n                </nz-dropdown-menu>\n              </td>\n            </tr>\n          </tbody>\n        </nz-table>\n</nz-card>\n\n<nz-dropdown-menu #menu=\"nzDropdownMenu\">\n  <div class=\"search-box\">\n    <input type=\"text\" nz-input placeholder=\"Search Ticket\" [(ngModel)]=\"searchValue\" />\n    <button nz-button nzSize=\"small\" nzType=\"primary\" (click)=\"search()\" class=\"search-button\">\n      Search\n    </button>\n    <button nz-button nzSize=\"small\" (click)=\"reset()\">Reset</button>\n  </div>\n</nz-dropdown-menu>\n\n<nz-modal\n[(nzVisible)]=\"isVisibleV\"\n[nzTitle]=\"modalViewTitle\"\n[nzContent]=\"modalViewContent\"\n[nzFooter]=\"modalViewFooter\"\n(nzOnCancel)=\"handleCancelView()\"\n>\n<ng-template #modalViewTitle>\nTicket Details\n</ng-template>\n\n<ng-template #modalViewContent>\n<div style=\"width: 500px;\">\n<p>Ticket Number : {{selectedTicket.ticketNum}}</p>\n<p>Client Name   : {{selectedTicket.name}}</p>\n<p>Client        : {{selectedTicket.phone}}</p>\n<p>Department    : {{selectedTicket.department}}</p>\n<p>Product       : {{selectedTicket.product}}</p>\n<p>Status        : {{selectedTicket.status}}</p>\n<p>Created By    : {{selectedTicket.createdBy}}</p>\n<p>Comment       : {{selectedTicket.comment}}</p>\n<p>Created on    : {{selectedTicket.createdOn}}</p>\n</div>\n</ng-template>\n\n<ng-template #modalViewFooter>\n<button nz-button nzType=\"default\" (click)=\"handleCancel()\">Cancel</button>\n</ng-template>\n</nz-modal>\n\n\n<nz-modal\n[(nzVisible)]=\"isVisible\"\n[nzTitle]=\"modalTitle\"\n[nzContent]=\"modalContent\"\n[nzFooter]=\"modalFooter\"\n(nzOnCancel)=\"handleCancel()\"\n>\n<ng-template #modalTitle>\n  Ticket Details\n</ng-template>\n\n<ng-template #modalContent>\n  <div style=\"width: 500px;\">\n    <p>Ticket Number : {{selectedTicket.ticketNum}}</p>\n    <p>Client Name   : {{selectedTicket.name}}</p>\n    <p>Client        : {{selectedTicket.phone}}</p>\n    <p>Department    : {{selectedTicket.department}}</p>\n    <p>Product       : {{selectedTicket.product}}</p>\n    <p>Status        : {{selectedTicket.status}}</p>\n    <p>Created By    : {{selectedTicket.createdBy}}</p>\n    <p>Comment       : {{selectedTicket.comment}}</p>\n    <p>Created on    : {{selectedTicket.createdOn}}</p>\n  </div>\n  \n  <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm(selectedTicket)\">\n    <nz-form-item>\n        <nz-form-control [nzSpan]=\"14\" nzErrorTip=\"Please write something here!\">\n        <textarea [(ngModel)]=\"closeTicketComment\" formControlName=\"closeTicketComment\" nz-input rows=\"2\" placeholder=\"write closing comment\"></textarea>\n        </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n        <nz-form-control style=\"text-align: center;\">\n        <button nz-button nzType=\"primary\"  [nzLoading]=\"updatingTicket\">Close Ticket</button>\n        </nz-form-control>\n    </nz-form-item>\n</form>\n</ng-template>\n\n<ng-template #modalFooter>\n  <button nz-button nzType=\"default\" (click)=\"handleCancel()\">Cancel</button>\n</ng-template>\n</nz-modal>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pending-tickets/pending-tickets.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pending-tickets/pending-tickets.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-card nzTitle=\"Pending Tickets\">\n  <div nz-row style=\"margin-bottom: 10px;\">\n    <span style=\"float: right; margin-right: 10px;\">\n        <button nz-button nzSize=\"small\" nz-th-extra class=\"ant-table-filter-icon\" nz-icon nz-dropdown\n            #dropdown=\"nzDropdown\" [nzDropdownMenu]=\"menu\" [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n            nzTrigger=\"click\" nzPlacement=\"bottomRight\" [nzClickHide]=\"false\" nzTableFilter>Search\n            <i nz-icon nzType=\"search\" nzTheme=\"outline\"></i>\n        </button>\n    </span>\n</div>\n        <nz-table #ticketsTable [nzData]=\"searchTickets\" [nzLoading]=\"loading\" [nzPageSize]=\"5\">\n                <thead>\n                  <tr>\n                    <th>Ticket Number</th>\n                    <th>Client</th>\n                    <th>Department</th>\n                    <th>Product</th>\n                    <th>Status</th>\n                    <th>Created on</th>\n                    <th>Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let data of ticketsTable.data\">\n                    <td>{{data.ticketNum}}</td>\n                    <td>{{data.phone}}</td>\n                    <td>{{data.department}}</td>\n                    <td>{{data.product}}</td>\n                    <td>{{data.status}}</td>\n                    <td>{{data.createdOn}}</td>\n                    <td>\n                      <button nz-button nz-dropdown [nzDropdownMenu]=\"menu4\">\n                        More\n                        <i nz-icon nzType=\"down\"></i>\n                      </button>\n\n                      <nz-dropdown-menu #menu4=\"nzDropdownMenu\">\n                        <ul nz-menu>\n                          <li nz-menu-item  (click)=\"showViewModal(data)\">View Ticket</li>\n                          <li nz-menu-item  (click)=\"showCommentModal(data)\">Comment</li>\n                        </ul>\n                      </nz-dropdown-menu>\n                    </td>\n                  </tr>\n                </tbody>\n              </nz-table>\n</nz-card>\n\n<nz-dropdown-menu #menu=\"nzDropdownMenu\">\n  <div class=\"search-box\">\n    <input type=\"text\" nz-input placeholder=\"Search Ticket\" [(ngModel)]=\"searchValue\" />\n    <button nz-button nzSize=\"small\" nzType=\"primary\" (click)=\"search()\" class=\"search-button\">\n      Search\n    </button>\n    <button nz-button nzSize=\"small\" (click)=\"reset()\">Reset</button>\n  </div>\n</nz-dropdown-menu>\n\n\n   <nz-modal\n      [(nzVisible)]=\"isVisibleCommentModal\"\n      [nzTitle]=\"modalTitle\"\n      [nzContent]=\"modalContent\"\n      [nzFooter]=\"modalFooter\"\n      (nzOnCancel)=\"handleCancelComment()\"\n    >\n      <ng-template #modalTitle>\n        Ticket Details\n      </ng-template>\n\n      <ng-template #modalContent>\n        <div style=\"width: 500px;\">\n          <p>Ticket Number : {{selectedTicket.ticketNum}}</p>\n          <p>Client Name   : {{selectedTicket.name}}</p>\n          <p>Client        : {{selectedTicket.phone}}</p>\n          <p>Department    : {{selectedTicket.department}}</p>\n          <p>Product       : {{selectedTicket.product}}</p>\n          <p>Status        : {{selectedTicket.status}}</p>\n          <p>Created By    : {{selectedTicket.createdBy}}</p>\n          <p>Comment       : {{selectedTicket.comment}}</p>\n          <p>Created on    : {{selectedTicket.createdOn}}</p>\n        </div>\n        \n        <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm(selectedTicket)\">\n          <nz-form-item>\n              <nz-form-control [nzSpan]=\"14\" nzErrorTip=\"Please write something here!\">\n              <textarea [(ngModel)]=\"closeTicketComment\" formControlName=\"closeTicketComment\" nz-input rows=\"2\" placeholder=\"write closing comment\"></textarea>\n              </nz-form-control>\n          </nz-form-item>\n    \n          <nz-form-item>\n              <nz-form-control style=\"text-align: center;\">\n              <button nz-button nzType=\"primary\"  [nzLoading]=\"updatingTicket\">Close Ticket</button>\n              </nz-form-control>\n          </nz-form-item>\n      </form>\n      </ng-template>\n\n      <ng-template #modalFooter>\n        <button nz-button nzType=\"default\" (click)=\"handleCancelComment()\">Cancel</button>\n      </ng-template>\n    </nz-modal> \n \n\n\n<nz-modal\n[(nzVisible)]=\"isVisible\"\n[nzTitle]=\"modalViewTitle\"\n[nzContent]=\"modalViewContent\"\n[nzFooter]=\"modalViewFooter\"\n(nzOnCancel)=\"handleCancel()\"\n>\n<ng-template #modalViewTitle>\n  Ticket Details\n</ng-template>\n\n<ng-template #modalViewContent>\n  <div style=\"width: 500px;\">\n    <p>Ticket Number : {{selectedTicket.ticketNum}}</p>\n    <p>Client Name   : {{selectedTicket.name}}</p>\n    <p>Client        : {{selectedTicket.phone}}</p>\n    <p>Department    : {{selectedTicket.department}}</p>\n    <p>Product       : {{selectedTicket.product}}</p>\n    <p>Status        : {{selectedTicket.status}}</p>\n    <p>Created By    : {{selectedTicket.createdBy}}</p>\n    <p>Comment       : {{selectedTicket.comment}}</p>\n    <p>Created on    : {{selectedTicket.createdOn}}</p>\n  </div>\n</ng-template>\n\n<ng-template #modalViewFooter>\n  <button nz-button nzType=\"default\" (click)=\"handleCancel()\">Cancel</button>\n</ng-template>\n</nz-modal>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ticket-list/ticket-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ticket-list/ticket-list.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-card nzTitle=\"Ticket List\" >\n  <div nz-row style=\"margin-bottom: 10px;\">\n    <span style=\"float: right; margin-right: 10px;\">\n        <button nz-button nzSize=\"small\" nz-th-extra class=\"ant-table-filter-icon\" nz-icon nz-dropdown\n            #dropdown=\"nzDropdown\" [nzDropdownMenu]=\"menu\" [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n            nzTrigger=\"click\" nzPlacement=\"bottomRight\" [nzClickHide]=\"false\" nzTableFilter>Search\n            <i nz-icon nzType=\"search\" nzTheme=\"outline\"></i>\n        </button>\n    </span>\n</div>\n  <nz-table #ticketsTable [nzData]=\"searchTickets\" [nzLoading]=\"loading\" [nzPageSize]=\"5\">\n          <thead>\n            <tr>\n              <th>Ticket Number</th>\n              <th>Client</th>\n              <th>Department</th>\n              <th>Product</th>\n              <th>Status</th>\n              <th>Created on</th>\n              <th>Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let data of ticketsTable.data\">\n              <td>{{data.ticketNum}}</td>\n              <td>{{data.phone}}</td>\n              <td>{{data.department}}</td>\n              <td>{{data.product}}</td>\n              <td>{{data.status}}</td>\n              <td>{{data.createdOn}}</td>\n              <td>\n                <a (click)=\"showModal(data)\">View Ticket</a>\n              </td>\n            </tr>\n          </tbody>\n        </nz-table>\n</nz-card>\n\n<nz-dropdown-menu #menu=\"nzDropdownMenu\">\n  <div class=\"search-box\">\n    <input type=\"text\" nz-input placeholder=\"Search Ticket\" [(ngModel)]=\"searchValue\" />\n    <button nz-button nzSize=\"small\" nzType=\"primary\" (click)=\"search()\" class=\"search-button\">\n      Search\n    </button>\n    <button nz-button nzSize=\"small\" (click)=\"reset()\">Reset</button>\n  </div>\n</nz-dropdown-menu>\n\n<nz-modal\n[(nzVisible)]=\"isVisible\"\n[nzTitle]=\"modalTitle\"\n[nzContent]=\"modalContent\"\n[nzFooter]=\"modalFooter\"\n(nzOnCancel)=\"handleCancel()\"\n>\n<ng-template #modalTitle>\n  Ticket Details\n</ng-template>\n\n<ng-template #modalContent>\n  <div style=\"width: 500px;\">\n    <p>Ticket Number : {{selectedTicket.ticketNum}}</p>\n    <p>Client Name   : {{selectedTicket.name}}</p>\n    <p>Client        : {{selectedTicket.phone}}</p>\n    <p>Department    : {{selectedTicket.department}}</p>\n    <p>Product       : {{selectedTicket.product}}</p>\n    <p>Status        : {{selectedTicket.status}}</p>\n    <p>Created By    : {{selectedTicket.createdBy}}</p>\n    <p>Comment       : {{selectedTicket.comment}}</p>\n    <p>Created on    : {{selectedTicket.createdOn}}</p>\n    <p>Closed By     : {{selectedTicket.closedBy}}</p>\n  </div>\n</ng-template>\n\n<ng-template #modalFooter>\n  <button nz-button nzType=\"default\" (click)=\"handleCancel()\">Cancel</button>\n</ng-template>\n</nz-modal>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/alert/alert.component.scss":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.service */ "./src/app/alert/alert.service.ts");



let AlertComponent = class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
    ngOnInit() {
        this.subscription = this.alertService.getAlert().subscribe(message => {
            switch (message && message.type) {
                case 'success':
                    message.cssClass = 'alert alert-success';
                    break;
                case 'error':
                    message.cssClass = 'alert alert-danger';
                    break;
            }
            this.message = message;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
AlertComponent.ctorParameters = () => [
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
];
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/alert/alert.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alert.component.scss */ "./src/app/alert/alert.component.scss")).default]
    })
], AlertComponent);



/***/ }),

/***/ "./src/app/alert/alert.service.ts":
/*!****************************************!*\
  !*** ./src/app/alert/alert.service.ts ***!
  \****************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AlertService = class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert message
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'success', text: message });
    }
    error(message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'error', text: message });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this.subject.next();
    }
};
AlertService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_open_ticket_open_ticket_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/open-ticket/open-ticket.component */ "./src/app/pages/open-ticket/open-ticket.component.ts");
/* harmony import */ var _pages_ticket_list_ticket_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/ticket-list/ticket-list.component */ "./src/app/pages/ticket-list/ticket-list.component.ts");
/* harmony import */ var _pages_pending_tickets_pending_tickets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/pending-tickets/pending-tickets.component */ "./src/app/pages/pending-tickets/pending-tickets.component.ts");
/* harmony import */ var _pages_closed_tickets_closed_tickets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/closed-tickets/closed-tickets.component */ "./src/app/pages/closed-tickets/closed-tickets.component.ts");
/* harmony import */ var _pages_over_due_tickets_over_due_tickets_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/over-due-tickets/over-due-tickets.component */ "./src/app/pages/over-due-tickets/over-due-tickets.component.ts");
/* harmony import */ var _pages_assigned_tickets_assigned_tickets_componet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/assigned-tickets/assigned-tickets.componet */ "./src/app/pages/assigned-tickets/assigned-tickets.componet.ts");
/* harmony import */ var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication/authentication.component */ "./src/app/authentication/authentication.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");












const routes = [
    { path: "", pathMatch: "full", redirectTo: 'dashboard' },
    { path: "login", pathMatch: "full", component: _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_9__["AuthenticationComponent"] },
    {
        path: "dashboard",
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
        children: [
            { path: "",
                pathMatch: "full",
                component: _pages_ticket_list_ticket_list_component__WEBPACK_IMPORTED_MODULE_4__["TicketListComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
            },
            { path: "ticketList",
                pathMatch: "full",
                component: _pages_ticket_list_ticket_list_component__WEBPACK_IMPORTED_MODULE_4__["TicketListComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
            },
            { path: "openTicket",
                pathMatch: "full",
                component: _pages_open_ticket_open_ticket_component__WEBPACK_IMPORTED_MODULE_3__["OpenTicketComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
            },
            {
                path: "assignedTickets",
                pathMatch: "full",
                component: _pages_assigned_tickets_assigned_tickets_componet__WEBPACK_IMPORTED_MODULE_8__["AssignedTicketsComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
            },
            {
                path: "viewOpenTickets",
                pathMatch: "full",
                component: _pages_pending_tickets_pending_tickets_component__WEBPACK_IMPORTED_MODULE_5__["PendingTicketsComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
            },
            {
                path: "viewAClosedTickets",
                pathMatch: "full",
                component: _pages_closed_tickets_closed_tickets_component__WEBPACK_IMPORTED_MODULE_6__["ClosedTicketsComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
            },
            {
                path: "viewOverDueTickets",
                pathMatch: "full",
                component: _pages_over_due_tickets_over_due_tickets_component__WEBPACK_IMPORTED_MODULE_7__["OverDueTicketsComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
            }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.isCollapsed = false;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _icons_provider_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons-provider.module */ "./src/app/icons-provider.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _pages_open_ticket_open_ticket_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/open-ticket/open-ticket.component */ "./src/app/pages/open-ticket/open-ticket.component.ts");
/* harmony import */ var _pages_ticket_list_ticket_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/ticket-list/ticket-list.component */ "./src/app/pages/ticket-list/ticket-list.component.ts");
/* harmony import */ var _pages_closed_tickets_closed_tickets_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/closed-tickets/closed-tickets.component */ "./src/app/pages/closed-tickets/closed-tickets.component.ts");
/* harmony import */ var _pages_over_due_tickets_over_due_tickets_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/over-due-tickets/over-due-tickets.component */ "./src/app/pages/over-due-tickets/over-due-tickets.component.ts");
/* harmony import */ var _pages_pending_tickets_pending_tickets_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/pending-tickets/pending-tickets.component */ "./src/app/pages/pending-tickets/pending-tickets.component.ts");
/* harmony import */ var _pages_assigned_tickets_assigned_tickets_componet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/assigned-tickets/assigned-tickets.componet */ "./src/app/pages/assigned-tickets/assigned-tickets.componet.ts");
/* harmony import */ var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./authentication/authentication.component */ "./src/app/authentication/authentication.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _interceptor_access_token_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./interceptor/access-token.interceptor */ "./src/app/interceptor/access-token.interceptor.ts");
/* harmony import */ var _interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./interceptor/error.interceptor */ "./src/app/interceptor/error.interceptor.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");


























Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_11___default.a);
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _pages_open_ticket_open_ticket_component__WEBPACK_IMPORTED_MODULE_12__["OpenTicketComponent"],
            _pages_ticket_list_ticket_list_component__WEBPACK_IMPORTED_MODULE_13__["TicketListComponent"],
            _pages_assigned_tickets_assigned_tickets_componet__WEBPACK_IMPORTED_MODULE_17__["AssignedTicketsComponent"],
            _pages_closed_tickets_closed_tickets_component__WEBPACK_IMPORTED_MODULE_14__["ClosedTicketsComponent"],
            _pages_over_due_tickets_over_due_tickets_component__WEBPACK_IMPORTED_MODULE_15__["OverDueTicketsComponent"],
            _pages_pending_tickets_pending_tickets_component__WEBPACK_IMPORTED_MODULE_16__["PendingTicketsComponent"],
            _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_18__["AuthenticationComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"],
            _alert_alert_component__WEBPACK_IMPORTED_MODULE_25__["AlertComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _icons_provider_module__WEBPACK_IMPORTED_MODULE_5__["IconsProviderModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"],
        ],
        providers: [
            _services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"],
            _guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _interceptor_access_token_interceptor__WEBPACK_IMPORTED_MODULE_23__["AccessTokenInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_24__["ErrorInterceptor"], multi: true },
            { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["en_US"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/authentication/authentication.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/authentication/authentication.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\n  background-color: #dfd9d9;\n  box-shadow: 0 10px 6px -6px #777;\n}\n\n.container {\n  margin-top: 150px;\n}\n\n#formBox {\n  box-shadow: 0 10px 6px -6px #777;\n}\n\n.head {\n  text-align: center;\n}\n\n.login-form {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n  margin: 0 auto;\n  max-width: 400px;\n}\n\n.login-form-forgot {\n  float: right;\n}\n\n.login-form-button {\n  background: #2196F3;\n  color: #f2f2f2;\n  border-radius: 15px;\n  width: 100%;\n}\n\n.login-form-button:hover {\n  background: #084f8a;\n  color: #f2f2f2;\n  width: 100%;\n}\n\n[nz-button] {\n  margin-right: 8px;\n  margin-bottom: 12px;\n}\n\n.register_now {\n  text-align: center;\n}\n\n.register_now a:hover {\n  color: #084f8a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbGFtYS9EZXNrdG9wL0N1c3RvbWVyLUNhcmUvc3JjL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUdRLGdDQUFBO0FDQ1o7O0FERUU7RUFDSSxpQkFBQTtBQ0NOOztBREVJO0VBSU8sZ0NBQUE7QUNBWDs7QURHRTtFQUNJLGtCQUFBO0FDQU47O0FERUU7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NOOztBREVJO0VBQ0UsWUFBQTtBQ0NOOztBREVJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQ047O0FERUk7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQ047O0FERUk7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDQ047O0FERUk7RUFDQyxrQkFBQTtBQ0NMOztBREVJO0VBQ0UsY0FBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmQ5ZDk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcbiAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XG4gIH1cbiAgXG4gIC5jb250YWluZXJ7XG4gICAgICBtYXJnaW4tdG9wOiAxNTBweFxuICB9XG4gIFxuICAgICNmb3JtQm94XG4gIHtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xuICAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcbiAgfVxuICBcbiAgLmhlYWR7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmxvZ2luLWZvcm0ge1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgfVxuICBcbiAgICAubG9naW4tZm9ybS1mb3Jnb3Qge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgXG4gICAgLmxvZ2luLWZvcm0tYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQ6ICMyMTk2RjM7XG4gICAgICBjb2xvcjogI2YyZjJmMjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICBcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgXG4gICAgLmxvZ2luLWZvcm0tYnV0dG9uOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYig4LCA3OSwgMTM4KTtcbiAgICAgIGNvbG9yOiAjZjJmMmYyOyAgXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIFxuICAgIFtuei1idXR0b25dIHtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB9XG4gIFxuICAgIC5yZWdpc3Rlcl9ub3d7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIFxuICAgIC5yZWdpc3Rlcl9ub3cgYTpob3ZlcntcbiAgICAgIGNvbG9yOiByZ2IoOCwgNzksIDEzOCk7XG4gICAgIH0iLCIubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZDlkOTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcbiAgLW1vei1ib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3NztcbiAgYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM3Nzc7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbn1cblxuI2Zvcm1Cb3gge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xuICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCA2cHggLTZweCAjNzc3O1xuICBib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzc3Nztcbn1cblxuLmhlYWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1mb3JtIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLmxvZ2luLWZvcm0tZm9yZ290IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubG9naW4tZm9ybS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMjE5NkYzO1xuICBjb2xvcjogI2YyZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dpbi1mb3JtLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwODRmOGE7XG4gIGNvbG9yOiAjZjJmMmYyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuW256LWJ1dHRvbl0ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLnJlZ2lzdGVyX25vdyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlZ2lzdGVyX25vdyBhOmhvdmVyIHtcbiAgY29sb3I6ICMwODRmOGE7XG59Il19 */");

/***/ }),

/***/ "./src/app/authentication/authentication.component.ts":
/*!************************************************************!*\
  !*** ./src/app/authentication/authentication.component.ts ***!
  \************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert/alert.service */ "./src/app/alert/alert.service.ts");






let AuthenticationComponent = class AuthenticationComponent {
    constructor(router, route, fb, authenticationService, alertService) {
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        if (this.authenticationService.currentUserValue) {
            this.router.navigateByUrl('/dashboard');
        }
    }
    submitForm(value) {
        console.log(value);
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        if (this.validateForm.valid) {
            this.login(value);
        }
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            remember: [true]
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    }
    login(user) {
        console.log(user);
        this.authenticationService.login(user.email, user.password).subscribe((data) => {
            this.router.navigate([this.returnUrl]);
        }, error => {
            this.alertService.error(error);
        });
    }
};
AuthenticationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
AuthenticationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-authentication',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./authentication.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/authentication.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./authentication.component.scss */ "./src/app/authentication/authentication.component.scss")).default]
    })
], AuthenticationComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: -webkit-box;\n  display: flex;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.app-layout {\n  height: 100vh;\n}\n\n.menu-sidebar {\n  position: relative;\n  z-index: 10;\n  min-height: 100vh;\n  box-shadow: 2px 0 6px #252525;\n}\n\n.header-trigger {\n  height: 64px;\n  padding: 20px 24px;\n  font-size: 20px;\n  cursor: pointer;\n  -webkit-transition: all 0.3s, padding 0s;\n  transition: all 0.3s, padding 0s;\n}\n\n.sidebar-logo {\n  position: relative;\n  height: 64px;\n  padding-left: 24px;\n  overflow: hidden;\n  line-height: 64px;\n  background: #500157;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n\n.sidebar-logo img {\n  display: inline-block;\n  height: 32px;\n  width: 32px;\n  vertical-align: middle;\n}\n\n.sidebar-logo h1 {\n  display: inline-block;\n  margin: 0 0 0 20px;\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;\n  vertical-align: middle;\n}\n\nnz-header {\n  padding: 0;\n  width: 100%;\n  z-index: 2;\n}\n\n.app-header {\n  position: relative;\n  height: 64px;\n  padding: 0;\n  background: #fff;\n}\n\nnz-content {\n  margin: 24px;\n}\n\n/* \n  [nz-menu-item]:hover {\n    background-color: rgb(241, 22, 241);\n  } */\n\n.inner-content {\n  padding: 24px;\n  background: #fff;\n  height: 100%;\n}\n\n/* \n  button:hover{\n    color: purple;\n    border-color: purple;\n  }\n   */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbGFtYS9EZXNrdG9wL0N1c3RvbWVyLUNhcmUvc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7QUNDSjs7QURNRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBQ0hKOztBRE1FO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDSEo7O0FETUU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlFQUFBO0VBQ0Esc0JBQUE7QUNISjs7QURNRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0hKOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDSEo7O0FET0U7RUFDRSxZQUFBO0FDSko7O0FETUE7OztLQUFBOztBQUtFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0pKOztBRE1BOzs7OztJQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgfVxuICBcbiAgLmFwcC1sYXlvdXQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbiAgXG4gIC5tZW51LXNpZGViYXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBib3gtc2hhZG93OiAycHggMCA2cHggcmdiKDM3LCAzNywgMzcpO1xuICB9XG4gIFxuICAuaGVhZGVyLXRyaWdnZXIge1xuICAgIGhlaWdodDogNjRweDtcbiAgICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzLHBhZGRpbmcgMHM7XG4gIH1cbiAgXG4gIC8vIC50cmlnZ2VyOmhvdmVyIHtcbiAgLy8gIGNvbG9yOiAjZDM0MWVjO1xuICAvLyB9XG4gIFxuICAuc2lkZWJhci1sb2dvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICAgIGJhY2tncm91bmQ6ICM1MDAxNTc7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgfVxuICBcbiAgLnNpZGViYXItbG9nbyBpbWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICBcbiAgLnNpZGViYXItbG9nbyBoMSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMCAwIDAgMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogQXZlbmlyLEhlbHZldGljYSBOZXVlLEFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgXG4gIG56LWhlYWRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIFxuICAuYXBwLWhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNjRweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgLy8gYm94LXNoYWRvdzogMCAxcHggNHB4ICByZ2IoMzYsIDM1LCAzNSk7XG4gIH1cbiAgXG4gIG56LWNvbnRlbnQge1xuICAgIG1hcmdpbjogMjRweDtcbiAgfVxuLyogXG4gIFtuei1tZW51LWl0ZW1dOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyMiwgMjQxKTtcbiAgfSAqL1xuICBcbiAgLmlubmVyLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbi8qIFxuICBidXR0b246aG92ZXJ7XG4gICAgY29sb3I6IHB1cnBsZTtcbiAgICBib3JkZXItY29sb3I6IHB1cnBsZTtcbiAgfVxuICAgKi8iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uYXBwLWxheW91dCB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5tZW51LXNpZGViYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYm94LXNoYWRvdzogMnB4IDAgNnB4ICMyNTI1MjU7XG59XG5cbi5oZWFkZXItdHJpZ2dlciB7XG4gIGhlaWdodDogNjRweDtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MsIHBhZGRpbmcgMHM7XG59XG5cbi5zaWRlYmFyLWxvZ28ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNjRweDtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBsaW5lLWhlaWdodDogNjRweDtcbiAgYmFja2dyb3VuZDogIzUwMDE1NztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5zaWRlYmFyLWxvZ28gaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uc2lkZWJhci1sb2dvIGgxIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsIEhlbHZldGljYSBOZXVlLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5uei1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbn1cblxuLmFwcC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNjRweDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxubnotY29udGVudCB7XG4gIG1hcmdpbjogMjRweDtcbn1cblxuLyogXG4gIFtuei1tZW51LWl0ZW1dOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyMiwgMjQxKTtcbiAgfSAqL1xuLmlubmVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qIFxuICBidXR0b246aG92ZXJ7XG4gICAgY29sb3I6IHB1cnBsZTtcbiAgICBib3JkZXItY29sb3I6IHB1cnBsZTtcbiAgfVxuICAgKi8iXX0= */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DashboardComponent = class DashboardComponent {
    constructor(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.loading = false;
    }
    logout() {
        this.loading = true;
        this.authService.logout();
        this.router.navigateByUrl('/login');
    }
    getFromLocalStrorage() {
        const users = JSON.parse(localStorage.getItem('currentUser'));
        console.log('============');
        console.log(users);
        return users;
    }
    ngOnInit() {
        this.userItems = this.getFromLocalStrorage();
        const name = this.userItems.name;
        console.log(name);
        this.userRole = this.userItems.user_role;
        console.log(this.userRole);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            console.log(currentUser);
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/icons-provider.module.ts":
/*!******************************************!*\
  !*** ./src/app/icons-provider.module.ts ***!
  \******************************************/
/*! exports provided: IconsProviderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsProviderModule", function() { return IconsProviderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular-icons.js");




const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__["MenuFoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__["MenuUnfoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__["DashboardOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__["FormOutline"]];
let IconsProviderModule = class IconsProviderModule {
};
IconsProviderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [
            { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NZ_ICONS"], useValue: icons }
        ]
    })
], IconsProviderModule);



/***/ }),

/***/ "./src/app/interceptor/access-token.interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/interceptor/access-token.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: AccessTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessTokenInterceptor", function() { return AccessTokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



let AccessTokenInterceptor = class AccessTokenInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
AccessTokenInterceptor.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AccessTokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AccessTokenInterceptor);



/***/ }),

/***/ "./src/app/interceptor/error.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/interceptor/error.interceptor.ts ***!
  \**************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            if (err.status = 401) {
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/pages/assigned-tickets/assigned-tickets.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/assigned-tickets/assigned-tickets.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ng-template {\n  width: 500px;\n}\n\nz-card {\n  width: 500px;\n}\n\nbutton:hover {\n  color: purple;\n  border-color: purple;\n}\n\n.search-box {\n  padding: 8px;\n}\n\n.search-box input {\n  width: 188px;\n  margin-bottom: 8px;\n  display: block;\n}\n\n.search-box button {\n  width: 90px;\n}\n\n.search-button {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbGFtYS9EZXNrdG9wL0N1c3RvbWVyLUNhcmUvc3JjL2FwcC9wYWdlcy9hc3NpZ25lZC10aWNrZXRzL2Fzc2lnbmVkLXRpY2tldHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Fzc2lnbmVkLXRpY2tldHMvYXNzaWduZWQtdGlja2V0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREdFO0VBQ0UsWUFBQTtBQ0FKOztBREdFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdFO0VBQ0UsV0FBQTtBQ0FKOztBREdFO0VBQ0UsaUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2lnbmVkLXRpY2tldHMvYXNzaWduZWQtdGlja2V0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5nLXRlbXBsYXRle1xuICAgIHdpZHRoOiA1MDBweDtcbn1cblxuei1jYXJke1xuICAgIHdpZHRoOiA1MDBweDtcbn1cblxuYnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOiBwdXJwbGU7XG4gICAgYm9yZGVyLWNvbG9yOiBwdXJwbGU7XG4gIH1cbiAgXG5cbiAgLnNlYXJjaC1ib3gge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuXG4gIC5zZWFyY2gtYm94IGlucHV0IHtcbiAgICB3aWR0aDogMTg4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnNlYXJjaC1ib3ggYnV0dG9uIHtcbiAgICB3aWR0aDogOTBweDtcbiAgfVxuXG4gIC5zZWFyY2gtYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfSIsIm5nLXRlbXBsYXRlIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuXG56LWNhcmQge1xuICB3aWR0aDogNTAwcHg7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiBwdXJwbGU7XG4gIGJvcmRlci1jb2xvcjogcHVycGxlO1xufVxuXG4uc2VhcmNoLWJveCB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLnNlYXJjaC1ib3ggaW5wdXQge1xuICB3aWR0aDogMTg4cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZWFyY2gtYm94IGJ1dHRvbiB7XG4gIHdpZHRoOiA5MHB4O1xufVxuXG4uc2VhcmNoLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/assigned-tickets/assigned-tickets.componet.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/assigned-tickets/assigned-tickets.componet.ts ***!
  \*********************************************************************/
/*! exports provided: AssignedTicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedTicketsComponent", function() { return AssignedTicketsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_tickets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tickets.service */ "./src/app/services/tickets.service.ts");




let AssignedTicketsComponent = class AssignedTicketsComponent {
    constructor(AssignedTicketService, fb) {
        this.AssignedTicketService = AssignedTicketService;
        this.fb = fb;
        this.searchValue = "";
        this.tickets = [];
        this.searchTickets = [];
        this.closeTicketComment = "";
        this.loading = true;
        this.isVisibleClosing = false;
        this.isVisibleV = false;
        this.isLoadingTwo = false;
        this.updatingTicket = false;
    }
    showModal(ticket) {
        this.isVisibleV = true;
        this.selectedTicket = ticket;
    }
    showClosingModal(ticket) {
        this.isVisibleClosing = true;
        this.selectedTicket = ticket;
    }
    handleOk() {
        console.log('Button ok clicked!');
        this.isVisibleClosing = false;
    }
    handleCancel() {
        console.log('Button cancel clicked!');
        this.isVisibleClosing = false;
    }
    handleOkView() {
        console.log('Button ok clicked!');
        this.isVisibleV = false;
    }
    handleCancelView() {
        console.log('Button cancel clicked!');
        this.isVisibleV = false;
    }
    closeTicket(ticket) {
        this.updatingTicket = true;
        const updateTicket = Object.assign({}, ticket);
        console.log(updateTicket);
        this.AssignedTicketService.updateTicketComment(ticket.id, updateTicket).subscribe((data) => {
            console.log(data);
            this.updatingTicket = false;
            this.isVisibleClosing = false;
        });
    }
    submitForm(ticket) {
        console.log(ticket);
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        if (this.validateForm.valid) {
            this.userItems = this.getFromLocalStrorage();
            const email = this.userItems.email;
            console.log('---CLOSED BY---');
            console.log(email);
            ticket.closedBy = email;
            ticket.closeTicketComment = this.closeTicketComment;
            console.log(ticket);
            this.closeTicket(ticket);
        }
    }
    getFromLocalStrorage() {
        const users = JSON.parse(localStorage.getItem('currentUser'));
        console.log('============');
        console.log(users);
        return users;
    }
    reset() {
        this.searchValue = '';
        this.search();
    }
    search() {
        this.searchTickets = this.tickets.filter(ticket => ticket.ticketNum.toString().includes(this.searchValue));
    }
    ngOnInit() {
        this.userItems = this.getFromLocalStrorage();
        const id = this.userItems.id;
        console.log(id);
        this.AssignedTicketService.getAssignedTickets(id).subscribe((data) => {
            console.log(data);
            this.tickets = data;
            this.searchTickets = data;
            this.loading = false;
            this.selectedTicket = data[0];
        });
        this.validateForm = this.fb.group({
            closeTicketComment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
};
AssignedTicketsComponent.ctorParameters = () => [
    { type: src_app_services_tickets_service__WEBPACK_IMPORTED_MODULE_3__["TicketsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AssignedTicketsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assigned-tickets',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assigned-tickets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assigned-tickets/assigned-tickets.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assigned-tickets.component.scss */ "./src/app/pages/assigned-tickets/assigned-tickets.component.scss")).default]
    })
], AssignedTicketsComponent);



/***/ }),

/***/ "./src/app/pages/closed-tickets/closed-tickets.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/closed-tickets/closed-tickets.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-box {\n  padding: 8px;\n}\n\n.search-box input {\n  width: 188px;\n  margin-bottom: 8px;\n  display: block;\n}\n\n.search-box button {\n  width: 90px;\n}\n\n.search-button {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbGFtYS9EZXNrdG9wL0N1c3RvbWVyLUNhcmUvc3JjL2FwcC9wYWdlcy9jbG9zZWQtdGlja2V0cy9jbG9zZWQtdGlja2V0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2xvc2VkLXRpY2tldHMvY2xvc2VkLXRpY2tldHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2xvc2VkLXRpY2tldHMvY2xvc2VkLXRpY2tldHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJveCB7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG5cbiAgLnNlYXJjaC1ib3ggaW5wdXQge1xuICAgIHdpZHRoOiAxODhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuc2VhcmNoLWJveCBidXR0b24ge1xuICAgIHdpZHRoOiA5MHB4O1xuICB9XG5cbiAgLnNlYXJjaC1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9IiwiLnNlYXJjaC1ib3gge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5zZWFyY2gtYm94IGlucHV0IHtcbiAgd2lkdGg6IDE4OHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VhcmNoLWJveCBidXR0b24ge1xuICB3aWR0aDogOTBweDtcbn1cblxuLnNlYXJjaC1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/closed-tickets/closed-tickets.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/closed-tickets/closed-tickets.component.ts ***!
  \******************************************************************/
/*! exports provided: ClosedTicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosedTicketsComponent", function() { return ClosedTicketsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_tickets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tickets.service */ "./src/app/services/tickets.service.ts");



let ClosedTicketsComponent = class ClosedTicketsComponent {
    constructor(closedTicketsService) {
        this.closedTicketsService = closedTicketsService;
        this.searchValue = "";
        this.tickets = [];
        this.searchTickets = [];
        this.loading = true;
        this.isVisible = false;
    }
    showModal(ticket) {
        this.isVisible = true;
        this.selectedTicket = ticket;
    }
    handleOk() {
        console.log('Button ok clicked!');
        this.isVisible = false;
    }
    handleCancel() {
        console.log('Button cancel clicked!');
        this.isVisible = false;
    }
    reset() {
        this.searchValue = '';
        this.search();
    }
    search() {
        this.searchTickets = this.tickets.filter(ticket => ticket.ticketNum.toString().includes(this.searchValue) || ticket.phone.toString().includes(this.searchValue) ||
            ticket.status.toString().includes(this.searchValue) || ticket.product.toString().includes(this.searchValue) ||
            ticket.department.toString().includes(this.searchValue));
    }
    ngOnInit() {
        this.closedTicketsService.getTicketsByStatusClosed().subscribe((data) => {
            console.log(data);
            this.tickets = data;
            this.searchTickets = data;
            this.loading = false;
            this.selectedTicket = data[0];
        });
    }
};
ClosedTicketsComponent.ctorParameters = () => [
    { type: src_app_services_tickets_service__WEBPACK_IMPORTED_MODULE_2__["TicketsService"] }
];
ClosedTicketsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-closed-tickets',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./closed-tickets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/closed-tickets/closed-tickets.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./closed-tickets.component.scss */ "./src/app/pages/closed-tickets/closed-tickets.component.scss")).default]
    })
], ClosedTicketsComponent);



/***/ }),

/***/ "./src/app/pages/open-ticket/open-ticket.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/open-ticket/open-ticket.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[nz-form] {\n  max-width: 100%;\n}\n\nbutton:hover {\n  color: purple;\n  border-color: purple;\n}\n\ninput:hover {\n  border-color: purple;\n}\n\ntextarea:hover {\n  border-color: purple;\n}\n\nnz-select:hover {\n  border-color: purple;\n}\n\nnz-option:hover {\n  border-color: purple;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbGFtYS9EZXNrdG9wL0N1c3RvbWVyLUNhcmUvc3JjL2FwcC9wYWdlcy9vcGVuLXRpY2tldC9vcGVuLXRpY2tldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3Blbi10aWNrZXQvb3Blbi10aWNrZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNFLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcGVuLXRpY2tldC9vcGVuLXRpY2tldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltuei1mb3JtXXtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICBidXR0b246aG92ZXJ7XG4gICAgY29sb3I6IHB1cnBsZTtcbiAgICBib3JkZXItY29sb3I6IHB1cnBsZTtcbiAgfVxuICBcbmlucHV0OmhvdmVye1xuICBib3JkZXItY29sb3I6IHB1cnBsZTtcbn1cblxudGV4dGFyZWE6aG92ZXJ7XG4gIGJvcmRlci1jb2xvcjogcHVycGxlO1xufVxuXG5uei1zZWxlY3Q6aG92ZXJ7XG4gIGJvcmRlci1jb2xvcjogcHVycGxlO1xufVxuXG5uei1vcHRpb246aG92ZXJ7XG4gIGJvcmRlci1jb2xvcjogcHVycGxlO1xufVxuXG4iLCJbbnotZm9ybV0ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiBwdXJwbGU7XG4gIGJvcmRlci1jb2xvcjogcHVycGxlO1xufVxuXG5pbnB1dDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogcHVycGxlO1xufVxuXG50ZXh0YXJlYTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogcHVycGxlO1xufVxuXG5uei1zZWxlY3Q6aG92ZXIge1xuICBib3JkZXItY29sb3I6IHB1cnBsZTtcbn1cblxubnotb3B0aW9uOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiBwdXJwbGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/open-ticket/open-ticket.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/open-ticket/open-ticket.component.ts ***!
  \************************************************************/
/*! exports provided: OpenTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenTicketComponent", function() { return OpenTicketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_tickets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tickets.service */ "./src/app/services/tickets.service.ts");




let OpenTicketComponent = class OpenTicketComponent {
    constructor(ticketService, fb) {
        this.ticketService = ticketService;
        this.fb = fb;
        this.isLoadingOne = false;
        this.isLoadingTwo = false;
        this.tickets = [];
        this.productList = [];
        this.departmentList = [];
    }
    loadOne() {
        this.isLoadingOne = true;
        // What is this for??
        setTimeout(() => {
            this.isLoadingOne = false;
        }, 5000);
    }
    loadTwo() {
        this.isLoadingTwo = true;
        // What is this for??
        setTimeout(() => {
            this.isLoadingTwo = false;
        }, 5000);
    }
    submitForm(value) {
        // console.log(value);
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        if (this.validateForm.valid) {
            this.saveTicket(value);
            this.resetForm();
        }
    }
    saveTicket(ticket) {
        this.userItems = this.getFromLocalStrorage();
        const email = this.userItems.email;
        console.log(email);
        ticket.createdBy = email;
        console.log(ticket);
        this.ticketService.addTicket(ticket).subscribe((data) => {
            console.log(data);
        });
        //console.log(results);
    }
    resetForm() {
        this.validateForm.reset();
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsPristine();
            this.validateForm.controls[key].updateValueAndValidity();
        }
    }
    getFromLocalStrorage() {
        const users = JSON.parse(localStorage.getItem('currentUser'));
        console.log('============');
        console.log(users);
        return users;
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            product: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            department: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator]]
        });
        this.ticketService.getTickets().subscribe((data) => {
            console.log(data);
            this.tickets = data;
        });
        this.ticketService.getProducts().subscribe((data) => {
            console.log(data);
            this.productList = data;
        });
        this.ticketService.getDepartments().subscribe((data) => {
            console.log(data);
            this.departmentList = data;
        });
    }
};
OpenTicketComponent.ctorParameters = () => [
    { type: src_app_services_tickets_service__WEBPACK_IMPORTED_MODULE_3__["TicketsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
OpenTicketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-open-ticket',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./open-ticket.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/open-ticket/open-ticket.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./open-ticket.component.scss */ "./src/app/pages/open-ticket/open-ticket.component.scss")).default]
    })
], OpenTicketComponent);



/***/ }),

/***/ "./src/app/pages/over-due-tickets/over-due-tickets.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/over-due-tickets/over-due-tickets.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-box {\n  padding: 8px;\n}\n\n.search-box input {\n  width: 188px;\n  margin-bottom: 8px;\n  display: block;\n}\n\n.search-box button {\n  width: 90px;\n}\n\n.search-button {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbGFtYS9EZXNrdG9wL0N1c3RvbWVyLUNhcmUvc3JjL2FwcC9wYWdlcy9vdmVyLWR1ZS10aWNrZXRzL292ZXItZHVlLXRpY2tldHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL292ZXItZHVlLXRpY2tldHMvb3Zlci1kdWUtdGlja2V0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vdmVyLWR1ZS10aWNrZXRzL292ZXItZHVlLXRpY2tldHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJveCB7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG5cbiAgLnNlYXJjaC1ib3ggaW5wdXQge1xuICAgIHdpZHRoOiAxODhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuc2VhcmNoLWJveCBidXR0b24ge1xuICAgIHdpZHRoOiA5MHB4O1xuICB9XG5cbiAgLnNlYXJjaC1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9IiwiLnNlYXJjaC1ib3gge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5zZWFyY2gtYm94IGlucHV0IHtcbiAgd2lkdGg6IDE4OHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VhcmNoLWJveCBidXR0b24ge1xuICB3aWR0aDogOTBweDtcbn1cblxuLnNlYXJjaC1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/over-due-tickets/over-due-tickets.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/over-due-tickets/over-due-tickets.component.ts ***!
  \**********************************************************************/
/*! exports provided: OverDueTicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverDueTicketsComponent", function() { return OverDueTicketsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_tickets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tickets.service */ "./src/app/services/tickets.service.ts");




let OverDueTicketsComponent = class OverDueTicketsComponent {
    constructor(ticketService, fb) {
        this.ticketService = ticketService;
        this.fb = fb;
        this.searchValue = "";
        this.tickets = [];
        this.searchTickets = [];
        this.closeTicketComment = "";
        this.loading = true;
        this.isVisible = false;
        this.isVisibleV = false;
        this.isLoadingTwo = false;
        this.updatingTicket = false;
    }
    showModal(ticket) {
        this.isVisibleV = true;
        this.selectedTicket = ticket;
    }
    showCommentModal(ticket) {
        this.isVisible = true;
        this.selectedTicket = ticket;
    }
    handleOk() {
        console.log('Button ok clicked!');
        this.isVisible = false;
    }
    handleCancel() {
        console.log('Button cancel clicked!');
        this.isVisible = false;
    }
    handleOkView() {
        console.log('Button ok clicked!');
        this.isVisibleV = false;
    }
    handleCancelView() {
        console.log('Button cancel clicked!');
        this.isVisibleV = false;
    }
    closeTicket(ticket) {
        this.updatingTicket = true;
        const updateTicket = Object.assign({}, ticket);
        this.ticketService.updateTicketComment(ticket.id, updateTicket).subscribe((data) => {
            console.log(data);
            this.updatingTicket = false;
            this.isVisible = false;
        });
    }
    submitForm(ticket) {
        console.log(ticket);
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        if (this.validateForm.valid) {
            // this.isVisible = false;
            ticket.closeTicketComment = this.closeTicketComment;
            this.closeTicket(ticket);
        }
    }
    reset() {
        this.searchValue = '';
        this.search();
    }
    search() {
        this.searchTickets = this.tickets.filter(ticket => ticket.ticketNum.toString().includes(this.searchValue) || ticket.phone.toString().includes(this.searchValue) ||
            ticket.status.toString().includes(this.searchValue) || ticket.product.toString().includes(this.searchValue) ||
            ticket.department.toString().includes(this.searchValue));
    }
    ngOnInit() {
        this.ticketService.getOverDueTickets().subscribe((data) => {
            console.log('TICKETS');
            console.log(data);
            this.tickets = data;
            this.searchTickets = data;
            this.loading = false;
            this.selectedTicket = data[0];
        });
        this.validateForm = this.fb.group({
            closeTicketComment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
};
OverDueTicketsComponent.ctorParameters = () => [
    { type: src_app_services_tickets_service__WEBPACK_IMPORTED_MODULE_3__["TicketsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
OverDueTicketsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-over-due-tickets',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./over-due-tickets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/over-due-tickets/over-due-tickets.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./over-due-tickets.component.scss */ "./src/app/pages/over-due-tickets/over-due-tickets.component.scss")).default]
    })
], OverDueTicketsComponent);



/***/ }),

/***/ "./src/app/pages/pending-tickets/pending-tickets.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/pending-tickets/pending-tickets.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-box {\n  padding: 8px;\n}\n\n.search-box input {\n  width: 188px;\n  margin-bottom: 8px;\n  display: block;\n}\n\n.search-box button {\n  width: 90px;\n}\n\n.search-button {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbGFtYS9EZXNrdG9wL0N1c3RvbWVyLUNhcmUvc3JjL2FwcC9wYWdlcy9wZW5kaW5nLXRpY2tldHMvcGVuZGluZy10aWNrZXRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wZW5kaW5nLXRpY2tldHMvcGVuZGluZy10aWNrZXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtBQ0NKOztBREVFO0VBQ0UsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlbmRpbmctdGlja2V0cy9wZW5kaW5nLXRpY2tldHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJveCB7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG5cbiAgLnNlYXJjaC1ib3ggaW5wdXQge1xuICAgIHdpZHRoOiAxODhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuc2VhcmNoLWJveCBidXR0b24ge1xuICAgIHdpZHRoOiA5MHB4O1xuICB9XG5cbiAgLnNlYXJjaC1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9IiwiLnNlYXJjaC1ib3gge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5zZWFyY2gtYm94IGlucHV0IHtcbiAgd2lkdGg6IDE4OHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VhcmNoLWJveCBidXR0b24ge1xuICB3aWR0aDogOTBweDtcbn1cblxuLnNlYXJjaC1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/pending-tickets/pending-tickets.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/pending-tickets/pending-tickets.component.ts ***!
  \********************************************************************/
/*! exports provided: PendingTicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingTicketsComponent", function() { return PendingTicketsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_tickets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tickets.service */ "./src/app/services/tickets.service.ts");




let PendingTicketsComponent = class PendingTicketsComponent {
    constructor(ticketService, fb) {
        this.ticketService = ticketService;
        this.fb = fb;
        this.searchValue = "";
        this.tickets = [];
        this.searchTickets = [];
        this.closeTicketComment = "";
        this.loading = true;
        this.isVisible = false;
        this.isVisibleCommentModal = false;
        this.isLoadingTwo = false;
        this.updatingTicket = false;
    }
    showViewModal(ticket) {
        console.log('Show View Modal!!!!');
        this.isVisible = true;
        this.selectedTicket = ticket;
    }
    showCommentModal(ticket) {
        console.log('Show Comment Modal!!!!');
        this.isVisibleCommentModal = true;
        this.selectedTicket = ticket;
    }
    handleOk() {
        console.log('Button Okay Clicked');
        this.isVisible = false;
    }
    handleCancel() {
        console.log('Button cancel clicked!');
        this.isVisible = false;
    }
    handleCancelComment() {
        console.log('Comment Button cancel clicked!');
        this.isVisibleCommentModal = false;
    }
    closeTicket(ticket) {
        this.updatingTicket = true;
        const updateTicket = Object.assign({}, ticket);
        this.ticketService.updateTicketComment(ticket.id, updateTicket).subscribe((data) => {
            console.log(data);
            this.updatingTicket = false;
            this.isVisibleCommentModal = false;
        });
    }
    submitForm(ticket) {
        console.log(ticket);
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        if (this.validateForm.valid) {
            // this.isVisible = false;
            ticket.closeTicketComment = this.closeTicketComment;
            this.closeTicket(ticket);
        }
    }
    loadTwo() {
        this.isLoadingTwo = true;
        setTimeout(() => {
            this.isLoadingTwo = false;
        }, 5000);
    }
    reset() {
        this.searchValue = '';
        this.search();
    }
    search() {
        this.searchTickets = this.tickets.filter(ticket => ticket.ticketNum.toString().includes(this.searchValue) || ticket.phone.toString().includes(this.searchValue) ||
            ticket.status.toString().includes(this.searchValue) || ticket.product.toString().includes(this.searchValue) ||
            ticket.department.toString().includes(this.searchValue));
    }
    ngOnInit() {
        this.ticketService.getTicketsByStatus().subscribe((data) => {
            console.log(data);
            this.tickets = data;
            this.searchTickets = data;
            this.loading = false;
            this.selectedTicket = data[0];
        });
        this.validateForm = this.fb.group({
            closeTicketComment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
};
PendingTicketsComponent.ctorParameters = () => [
    { type: src_app_services_tickets_service__WEBPACK_IMPORTED_MODULE_3__["TicketsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
PendingTicketsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pending-tickets',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pending-tickets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pending-tickets/pending-tickets.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pending-tickets.component.scss */ "./src/app/pages/pending-tickets/pending-tickets.component.scss")).default]
    })
], PendingTicketsComponent);



/***/ }),

/***/ "./src/app/pages/ticket-list/ticket-list.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/ticket-list/ticket-list.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-box {\n  padding: 8px;\n}\n\n.search-box input {\n  width: 188px;\n  margin-bottom: 8px;\n  display: block;\n}\n\n.search-box button {\n  width: 90px;\n}\n\n.search-button {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbGFtYS9EZXNrdG9wL0N1c3RvbWVyLUNhcmUvc3JjL2FwcC9wYWdlcy90aWNrZXQtbGlzdC90aWNrZXQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGlja2V0LWxpc3QvdGlja2V0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGlja2V0LWxpc3QvdGlja2V0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJveCB7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG5cbiAgLnNlYXJjaC1ib3ggaW5wdXQge1xuICAgIHdpZHRoOiAxODhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuc2VhcmNoLWJveCBidXR0b24ge1xuICAgIHdpZHRoOiA5MHB4O1xuICB9XG5cbiAgLnNlYXJjaC1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9IiwiLnNlYXJjaC1ib3gge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5zZWFyY2gtYm94IGlucHV0IHtcbiAgd2lkdGg6IDE4OHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2VhcmNoLWJveCBidXR0b24ge1xuICB3aWR0aDogOTBweDtcbn1cblxuLnNlYXJjaC1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/ticket-list/ticket-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/ticket-list/ticket-list.component.ts ***!
  \************************************************************/
/*! exports provided: TicketListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketListComponent", function() { return TicketListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_tickets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tickets.service */ "./src/app/services/tickets.service.ts");



let TicketListComponent = class TicketListComponent {
    constructor(ticketService) {
        this.ticketService = ticketService;
        this.searchValue = "";
        this.tickets = [];
        this.searchTickets = [];
        this.loading = true;
        this.isVisible = false;
    }
    showModal(ticket) {
        this.isVisible = true;
        this.selectedTicket = ticket;
    }
    handleOk() {
        console.log("Button ok clicked!");
        this.isVisible = false;
    }
    handleCancel() {
        console.log("Button cancel clicked!");
        this.isVisible = false;
    }
    reset() {
        this.searchValue = '';
        this.search();
    }
    search() {
        this.searchTickets = this.tickets.filter(ticket => ticket.ticketNum.toString().includes(this.searchValue) || ticket.phone.toString().includes(this.searchValue) ||
            ticket.status.toString().includes(this.searchValue) || ticket.product.toString().includes(this.searchValue) ||
            ticket.department.toString().includes(this.searchValue));
    }
    ngOnInit() {
        this.ticketService.getTickets().subscribe(data => {
            console.log(data);
            this.tickets = data;
            this.searchTickets = data;
            this.loading = false;
            this.selectedTicket = data[0];
        });
    }
};
TicketListComponent.ctorParameters = () => [
    { type: src_app_services_tickets_service__WEBPACK_IMPORTED_MODULE_2__["TicketsService"] }
];
TicketListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-ticket-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ticket-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ticket-list/ticket-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ticket-list.component.scss */ "./src/app/pages/ticket-list/ticket-list.component.scss")).default]
    })
], TicketListComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const BASE_URL = "http://localhost:3000";
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    login(email, password) {
        return this.http.post(`${BASE_URL}/auth/login`, { email, password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            // login successful if there's a jwt token in the response
            if (user && user.access_token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }
    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/tickets.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/tickets.service.ts ***!
  \*********************************************/
/*! exports provided: TicketsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsService", function() { return TicketsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const BASE_URL = "http://localhost:3000";
let TicketsService = class TicketsService {
    constructor(http) {
        this.http = http;
    }
    addTicket(ticket) {
        return this.http.post(`${BASE_URL}/tickets`, ticket);
    }
    getTickets() {
        return this.http.get(`${BASE_URL}/tickets`);
    }
    getTicketsByStatus() {
        return this.http.get(`${BASE_URL}/pending-tickets`);
    }
    getTicketsByStatusClosed() {
        return this.http.get(`${BASE_URL}/closed-tickets/Closed`);
    }
    getAssignedTickets(id) {
        console.log("*********************");
        console.log(id);
        return this.http.get(`${BASE_URL}/pending-tickets/${id}`);
    }
    getOverDueTickets() {
        return this.http.get(`${BASE_URL}/over-due-tickets`);
    }
    getProducts() {
        return this.http.get(`${BASE_URL}/products`);
    }
    getDepartments() {
        return this.http.get(`${BASE_URL}/departments`);
    }
    updateTicketComment(id, ticket) {
        return this.http.patch(`${BASE_URL}/tickets/${id}`, ticket);
    }
};
TicketsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TicketsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TicketsService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/malama/Desktop/Customer-Care/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map