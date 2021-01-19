sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("AA.ArunAssignmentMultipleLogin.controller.CreateAccount", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf AA.ArunAssignmentMultipleLogin.view.CreateAccount
		 */
		onInit: function () {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},

		onCreateAccount: function () {
			debugger;
			var nameVal = this.getView().byId("nameVal").getValue();
			var cmpyVal = this.getView().byId("cmpyVal").getValue();
			var addrVal = this.getView().byId("addrVal").getValue();
			var emailVal = this.getView().byId("emailVal").getValue();
			var pwdVal = this.getView().byId("pwdVal").getValue();
			var randomGenerateID = "CUST" + Math.floor(Math.random() * 100) + 1;
			// this.getView().byId("shuttleId").setValue(randomGenerate);

			var myObj = {
				"id": randomGenerateID,
				"name": nameVal,
				"companyName": cmpyVal,
				"address": addrVal,
				"gmail": emailVal,
				"pwd": pwdVal
			};

			var myMod = this.getView().getModel().getProperty("/CustomerData");
			myMod.push(myObj);
			sap.m.MessageToast.show("Successfully Created Account");
		},

		onLoginBtn: function () {
			this.oRouter.navTo("RouteApp");

		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf AA.ArunAssignmentMultipleLogin.view.CreateAccount
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf AA.ArunAssignmentMultipleLogin.view.CreateAccount
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf AA.ArunAssignmentMultipleLogin.view.CreateAccount
		 */
		//	onExit: function() {
		//
		//	}

	});

});