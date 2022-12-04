if(typeof Vietlott == "undefined") Vietlott={};
if(typeof Vietlott.WebRender == "undefined") Vietlott.WebRender={};
if(typeof Vietlott.WebRender.FrontendRenderUtility_class == "undefined") Vietlott.WebRender.FrontendRenderUtility_class={};
Vietlott.WebRender.FrontendRenderUtility_class = function() {};
Object.extend(Vietlott.WebRender.FrontendRenderUtility_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	url: '/ajaxpro/Vietlott.WebRender.FrontendRenderUtility,Vietlott.WebRender.ashx'
}));
Vietlott.WebRender.FrontendRenderUtility = new Vietlott.WebRender.FrontendRenderUtility_class();

