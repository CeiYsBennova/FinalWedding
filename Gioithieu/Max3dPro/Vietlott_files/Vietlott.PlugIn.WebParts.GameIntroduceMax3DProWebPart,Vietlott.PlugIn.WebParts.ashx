if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.PlugIn == "undefined") Vietlott.PlugIn={};
if(typeof Vietlott.PlugIn.WebParts == "undefined") Vietlott.PlugIn.WebParts={};
if(typeof Vietlott.PlugIn.WebParts.GameIntroduceMax3DProWebPart_class == "undefined") Vietlott.PlugIn.WebParts.GameIntroduceMax3DProWebPart_class={};
Vietlott.PlugIn.WebParts.GameIntroduceMax3DProWebPart_class = function() {};
Object.extend(Vietlott.PlugIn.WebParts.GameIntroduceMax3DProWebPart_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	url: '/ajaxpro/Vietlott.PlugIn.WebParts.GameIntroduceMax3DProWebPart,Vietlott.PlugIn.WebParts.ashx'
}));
Vietlott.PlugIn.WebParts.GameIntroduceMax3DProWebPart = new Vietlott.PlugIn.WebParts.GameIntroduceMax3DProWebPart_class();

