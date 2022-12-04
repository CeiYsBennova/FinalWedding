if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.Utility == "undefined") Vietlott.Utility={};
if(typeof Vietlott.Utility.WebEnvironments_class == "undefined") Vietlott.Utility.WebEnvironments_class={};
Vietlott.Utility.WebEnvironments_class = function() {};
Object.extend(Vietlott.Utility.WebEnvironments_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideCreateRenderInfo: function(SiteId) {
		return this.invoke("ServerSideCreateRenderInfo", {"SiteId":SiteId}, this.ServerSideCreateRenderInfo.getArguments().slice(1));
	},
	ServerSideFrontEndCreateRenderInfo: function(SiteId) {
		return this.invoke("ServerSideFrontEndCreateRenderInfo", {"SiteId":SiteId}, this.ServerSideFrontEndCreateRenderInfo.getArguments().slice(1));
	},
	FormatTextForEditor: function(Data) {
		return this.invoke("FormatTextForEditor", {"Data":Data}, this.FormatTextForEditor.getArguments().slice(1));
	},
	url: '/ajaxpro/Vietlott.Utility.WebEnvironments,Vietlott.Utility.ashx'
}));
Vietlott.Utility.WebEnvironments = new Vietlott.Utility.WebEnvironments_class();

