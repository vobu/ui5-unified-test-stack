sap.ui.define(["./BaseController", "sap/m/MessageBox"], function (BaseController, MessageBox) {
	"use strict";

	return BaseController.extend("single.teststack.controller.Main", {
		sayHello: function () {
			MessageBox.show("Hello World!");
		}
	});
});
