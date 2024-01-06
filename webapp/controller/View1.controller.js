sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.com.product4.controller.View1", {
            onInit: function () {
                var oJSONDATA={
                    VehicleDetails:[
                        {
                            VehicleNo:1014,
                            VehicleName:"Car",
                            OwnerName: "HemChand",
                            City:"New Delhi",
                            State: "Delhi"

                        },
                        {
                            VehicleNo:2014,
                            VehicleName:"Bus",
                            OwnerName: "Brijesh",
                            City:"Lucknow",
                            State: "UP"

                        },
                        {
                            VehicleNo:3014,
                            VehicleName:"Auto",
                            OwnerName: "Arun",
                            City:"Ludhiyana",
                            State: "Punjab"
  
                        },    
                        {
                            VehicleNo:4014,
                            VehicleName:"Truck",
                            OwnerName: "Varun",
                            City:"Rohtak",
                            State: "Haryana"
                        }

                    ]
                };
                var oVehicleJSONModel = new sap.ui.model.json.JSONModel(oJSONDATA);
                  this.getView().setModel(oVehicleJSONModel, "oVehicleJSONModel");
            },
            onRowPress:function(oEvent){
    
                var oSelectedObject = oEvent.getSource().getBindingContext("oVehicleJSONModel").getObject();
                var oRouter =  this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteView2",{
                    v1: oSelectedObject.VehicleNo,
                    v2: oSelectedObject.VehicleName,
                })
            },
            onSearch:function(){

                var VehicleNo = this.getView().byId("VehicleNo").getValue();
                var oTableBinding = this.getView().byId("VehicleTable").getBinding("items");
                var oMyFilter = new sap.ui.model.Filter("VehicleNo",sap.ui.model.FilterOperator.EQ,VehicleNo)
                if(VehicleNo){
                    oTableBinding.filter(oMyFilter);
                }else{
                    oTableBinding.filter([]);
                }
                     
      }

            })
        });
    
