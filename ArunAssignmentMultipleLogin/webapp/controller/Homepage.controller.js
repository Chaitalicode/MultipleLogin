sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("AA.ArunAssignmentMultipleLogin.controller.Homepage", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf AA.ArunAssignmentMultipleLogin.view.Homepage
		 */
		onInit: function () {
			debugger;
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.attachRoutePatternMatched(this.ObjectMatched, this);
			var oJSONModel = new sap.ui.model.json.JSONModel();
			this.getOwnerComponent().setModel(oJSONModel, "jsonData");
		},

		ObjectMatched: function (oEvent) {
			debugger;

			var detailEmp = oEvent.getParameter("arguments").LogP;
			this.getView().getModel("jsonData").setProperty("/isenabled", true);
			if (detailEmp !== null && detailEmp !== " ") {
				if(detailEmp.includes("EMP")){
				this.getView().byId("idPD").setVisible(true);
				this.getView().getModel("jsonData").setProperty("/isenabled", false);
				var sPath = detailEmp.split(" ")[1];
				this.getView().byId("idSimpleFormITF").bindElement("/EmployeeData/" + sPath);
				this.getView().byId("idTxt").bindProperty("text", "/MyJSON/" + sPath + "/name");
				this.getView().byId("idAdd").setEnabled(false);
				}
				else if(detailEmp.includes("CUST")){
				this.getView().byId("idPD").setVisible(false);
				this.getView().getModel("jsonData").setProperty("/isenabled", false);
				var myPath = detailEmp.split(" ")[1];
				this.getView().byId("mySimpleForm1").bindElement("/CustomerData/" + myPath);
				// this.getView().byId("idTxt").bindProperty("text", "/MyJSON/" + sPath + "/name");
				this.getView().byId("idAdd").setEnabled(false);
				}
			}
		},

		onPress: function (oEvent) {
			debugger;
			this.oItem = oEvent.getSource().getBindingContext().getPath();

			this.aData = [];
			this.aData.push(this.oItem);
			if (!this.fragOpen) {
				this.fragOpen = new sap.ui.xmlfragment(this.getView().getId("idDialog"), "AA.ArunAssignmentMultipleLogin.Fragment.Detail", this);
				this.getView().addDependent(this.fragOpen);

				this.getView().byId("idSimpleForm").bindElement(this.oItem);

			} else {
				this.fragOpen = sap.ui.xmlfragment(this.getView().getId("idDialog"), "AA.ArunAssignmentMultipleLogin.Fragment.Detail", this);
				this.getView().addDependent(this.fragOpen);
				this.getView().byId("idSimpleForm").bindElement(this.oItem);

			}
			this.fragOpen.open();

		},

		onUpdate: function () {
			debugger;
			// var inptIdVal = this.getView().byId("idP").getValue();

			// var inptNameVal = this.getView().byId("idName").getValue();

			// var inptDeptVal = this.getView().byId("idDept").getValue();
			// var inptPhnVal = this.getView().byId("idPhone").getValue();
			// var inptAddrVal = this.getView().byId("idAddr").getValue();
			// var inptSalVal = this.getView().byId("idSalary").getValue();

			// var myObj = {
			// 	"id": inptIdVal,
			// 	"name": inptNameVal,
			// 	"dept": inptDeptVal,
			// 	"phone": inptPhnVal,
			// 	"addr": inptAddrVal,
			// 	"salary": inptSalVal
			// };

			// var myNewModel = this.getView().getModel().getProperty(this.oItem);
			// this.getView().getModel().setProperty(this.oItem, myObj);
			this.fragOpen.close();
			this.byId("idDialog").destroy();
		},

		onAdd: function (oEvent) {
			// this.getView().getModel().getData().EmployeeData.push({id: '',name: '',dept: '',phone: '',addr: '',salary: ''});
			// this.getView().getModel().refresh();
			if (!this.fragOpen1) {
				this.fragOpen1 = new sap.ui.xmlfragment(this.getView().getId("idDialog1"), "AA.ArunAssignmentMultipleLogin.Fragment.Add", this);
				this.getView().addDependent(this.fragOpen1);

			}
			this.fragOpen1.open();
		},

		onSave: function () {
			var inptIdVal = this.getView().byId("idP1").getValue();

			var inptNameVal = this.getView().byId("idName1").getValue();

			var inptDeptVal = this.getView().byId("idDept1").getValue();
			var inptPhnVal = this.getView().byId("idPhone1").getValue();
			var inptAddrVal = this.getView().byId("idAddr1").getValue();
			var inptSalVal = this.getView().byId("idSalary1").getValue();

			var myObj = {
				"id": inptIdVal,
				"name": inptNameVal,
				"dept": inptDeptVal,
				"phone": inptPhnVal,
				"addr": inptAddrVal,
				"salary": inptSalVal
			};

			var myMod = this.getView().getModel().getProperty("/EmployeeData");
			myMod.push(myObj);
			this.getView().getModel().setProperty("/EmployeeData", myMod);

			this.fragOpen1.close();
			this.byId("idDialog1").destroy();
		},

		onClose: function () {
			this.fragOpen.close();
			this.byId("idDialog").destroy();
		},

		onClose1: function () {
			this.fragOpen1.close();
			this.byId("idDialog1").destroy();
		},
		onLogout: function () {
			this.oRouter.navTo("RouteApp");
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf AA.ArunAssignmentMultipleLogin.view.Homepage
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf AA.ArunAssignmentMultipleLogin.view.Homepage
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf AA.ArunAssignmentMultipleLogin.view.Homepage
		 */
		//	onExit: function() {
		//
		//	}

	});

});