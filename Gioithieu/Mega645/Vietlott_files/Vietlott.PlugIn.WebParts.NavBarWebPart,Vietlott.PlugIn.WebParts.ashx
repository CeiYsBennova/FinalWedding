if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.NavBarWebPart_class == "undefined") Vietlott.PlugIn.WebParts.NavBarWebPart_class={};
Vietlott.PlugIn.WebParts.NavBarWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.NavBarWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideSearch: function(ORenderInfo, Keyword) {
		return this.invoke("ServerSideSearch", {"ORenderInfo":ORenderInfo, "Keyword":Keyword}, this.ServerSideSearch.getArguments().slice(2));
	},
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.NavBarWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.NavBarWebPart = new Vietlott.PlugIn.WebParts.NavBarWebPart_class();

