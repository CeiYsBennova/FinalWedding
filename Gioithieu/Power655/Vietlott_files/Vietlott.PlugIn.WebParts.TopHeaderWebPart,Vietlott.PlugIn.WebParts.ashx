if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.TopHeaderWebPart_class == "undefined") Vietlott.PlugIn.WebParts.TopHeaderWebPart_class={};
Vietlott.PlugIn.WebParts.TopHeaderWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.TopHeaderWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.TopHeaderWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.TopHeaderWebPart = new Vietlott.PlugIn.WebParts.TopHeaderWebPart_class();

