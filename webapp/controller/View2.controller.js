sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.product4.controller.View2", {
            onInit: function () {

                var oJSONDATAA={
                    VehicleName:[
                        {
                            VehicleID:"C",
                            VehicleName:"Car"
                        },
                      
                        {
                            VehicleID:"B",
                            VehicleName:"Bus" 
                        },
                        {
                            VehicleID:"T",
                            VehicleName:"Truck"
                        },
                        {
                            VehicleID:"A",
                            VehicleName:"Auto"
                        }
                    ]
                };
                var oVehicleJSONModel=new sap.ui.model.json.JSONModel(oJSONDATAA)
                this.getView().setModel(oVehicleJSONModel,"oVehicleModel");


                const oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("RouteView2").attachPatternMatched(this.onObjectMatched, this);
            },
            onObjectMatched:function(oEvent){
                debugger
              var value1 = oEvent.getParameter("arguments").v1
              var value2 = oEvent.getParameter("arguments").v2

         this.getView().byId("VehicleNo").setValue(value1);
         this.getView().byId("VehicleName").setValue(value2)
            },
            
               
        });
    });
