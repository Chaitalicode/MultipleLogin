sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("AA.ArunAssignmentMultipleLogin.controller.App", {
		onInit: function () {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},
		onLogin: function () {
			var emailVal = this.getView().byId("emailVal").getValue();
			var pwdVal = this.getView().byId("pwdVal").getValue();

			var myModelEmp = this.getView().getModel().getProperty("/EmployeeData");
			var myModelCust = this.getView().getModel().getProperty("/CustomerData");
			if (emailVal === "admin@gmail.com" && pwdVal === "admin") {
				this.oRouter.navTo("home",{
					LogP:" "
				});
			} else {
				for (var i = 0; i < myModelEmp.length; i++) {
					if (myModelEmp[i].gmail === emailVal && myModelEmp[i].pwd === pwdVal) {
						var myID = myModelEmp[i].id;
						this.oRouter.navTo("home", {
							LogP: myID + " "+ i
						});
						return;
					} else {
						for (var j = 0; j < myModelCust.length; j++) {
							if (myModelCust[j].gmail === emailVal && myModelCust[j].pwd === pwdVal) {
								var myID1 = myModelCust[j].id;
								this.oRouter.navTo("home", {
									LogP: myID1 + " "+ j
								});
							}
						}
					}
				}
			}
		},

		onCreateAccount:function(oEvent){
		// if(!this.Createfrag){
		// 	var myID = this.createId("createID");
		// 	this.Createfrag = new sap.ui.xmlfragment(myID,"AA.ArunAssignmentMultipleLogin")
		// }
			this.oRouter.navTo("CreateAcc");
		}
	});
});
