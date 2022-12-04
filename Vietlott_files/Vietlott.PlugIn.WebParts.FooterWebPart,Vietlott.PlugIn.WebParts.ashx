if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.FooterWebPart_class == "undefined") Vietlott.PlugIn.WebParts.FooterWebPart_class={};
Vietlott.PlugIn.WebParts.FooterWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.FooterWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.FooterWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.FooterWebPart = new Vietlott.PlugIn.WebParts.FooterWebPart_class();

