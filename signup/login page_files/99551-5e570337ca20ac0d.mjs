(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[99551],{946618:(e,r,t)=>{t.d(r,{Z:()=>c});var a=t(739425);const n=/\/today\/(article|best|trending)\/[\w-]+\/(\d+)/,s=/\/discover\/article\/[\w-]+\/(\d+)/,i=(e,r)=>r?e.substring(r.length).split("/")[0]:e,o=({boardUrl:e,path:r,pinId:t,pinnerUserName:o,query:c,search:l,storyPinDataId:d})=>{var u,p;if(!r)return"";let m="";switch(r){case"/":case"/homefeed/":return"UserHomefeedResource";case o&&`/${o}/pins/`:return"UserPinsResource";case o&&`/${o}/`:case/\/_activity\//.test(r)&&r:return"UserActivityPinsResource";case/\/_created\//.test(r)&&r:return d?"UserStoryPinsFeedResource":"UserActivityPinsResource";case/\/_community\//.test(r)&&r:return"UserDiscoveredPinsResource";case/\/_shop\//.test(r)&&r:return"StoreFrontFeedResource";case/\/_saved\//.test(r)&&r:return"BoardlessPinsResource";case o&&`/${o}/_shopping_list/`:return"ShoppingListFeedResource";case/\/visual-search\//.test(r)&&r:return"VisualLiveSearchResource";case/\/pin\//.test(r)&&r:m="/pin/";const _=i(r,m);if(t!==_)return`RelatedPinFeedResource_${_}`;break;case/\/search\//.test(r)&&r:if(l){return`SearchResource_${((0,a.mB)(l,{shouldDecode:!1}).q||"").toLowerCase()}`}if(c)return`SearchResource_${encodeURIComponent(c.q||"").toLowerCase()}`;break;case s.test(r)&&r:return`ExploreArticleResource_${(null===(u=r.match(s))||void 0===u?void 0:u[2])||"unknown"}`;case/\/discover\/article\//.test(r)&&r:m="/discover/article/";return`ExploreArticleResource_${i(r,m)}`;case/\/categories\//.test(r)&&r:m="/categories/";return`CategoryFeedResource_${i(r,m)}`;case/\/discover\/topics\//.test(r)&&r:return"CategoryFeedResource";case/\/news_hub\//.test(r)&&r:m="/news_hub/";return`NewsHubDetailsResource_${i(r,m)}`;case/\/_tools\/more-ideas\//.test(r)&&r:return"BoardContentRecommendationResource";case/\/topics\//.test(r)&&r:m="/topics/";return`TopicFeedResource_${i(r,m)}`;case o&&`/${o}/products/`:return"StoreFrontFeedResource";case/\/source\//.test(r)&&r:m="/source/";return`DomainFeedResource_${i(r,m)}`;case/\/explore\//.test(r)&&r:m="/explore/";return`SearchResource_${i(r,m)}`;case e:case!!e&&/\/more_ideas\//.test(r)&&r:return"BoardFeedResource";case e&&r.indexOf(e)>-1&&r:return"BoardSectionPinsResource";case/\/following\//.test(r)&&r:return"FollowingFeedResource";case/\/brand_catalog\//.test(r)&&r:return"BrandCatalogFeedResource";case n.test(r)&&r:return`TodayArticleFeedResource_${(null===(p=r.match(n))||void 0===p?void 0:p[2])||"unknown"}`;case/\/today\//.test(r):return"TodayTabResource";case/\story_feed\//.test(r)&&r:if(l){const{feed_type:e,request_params:r}=(0,a.mB)(l);return`StoryFeedResource_${e}_${r}`}}return""},c=({boardUrl:e,location:r,pinId:t,pinnerUserName:a,previousHistory:n,storyPinDataId:s,trackingParams:i,trackingParamsMap:c={}})=>{if(!t||!i||!r)return;if(!c)return`${i}~0`;const{pathname:l,search:d,query:u}=r,p=o({boardUrl:e,path:l,pinId:t,pinnerUserName:a,query:u,search:d,storyPinDataId:s,trackingParams:i,trackingParamsMap:c}),m=Object.keys(c);let _;if((l||"").startsWith("/pin/")){const e=m.find((e=>"PinResource"!==e));_=e?c[e]:c.PinResource}else _=c[p];let h;if(!_&&n&&n.length){const r=(e=>{let r=null==e?void 0:e.pathname;return r?(r.match(/\/search\//)&&null!=e&&e.search&&(r+=e.search),r.toLowerCase()):""})(n[n.length-1].location);h=o({boardUrl:e,path:r,pinId:t,pinnerUserName:a,query:u,search:d,storyPinDataId:s,trackingParams:i,trackingParamsMap:c}),_=c[h]}return _||(_=`${i||""}~0`),_}},354428:(e,r,t)=>{t.d(r,{Se:()=>k,iw:()=>v,gV:()=>h,G3:()=>b,Gj:()=>P,Jd:()=>_,$3:()=>g});var a=t(965533),n=t(457628),s=t(791045),i=t(970588),o=t(250307);const c=e=>"string"!=typeof e&&e?e.state:null;var l=t(845098),d=t(48040),u=t(957733),p=t(625168),m=t(795142);const _=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},h=({isOffsiteUrl:e,event:r})=>!e&&(r.metaKey||r.ctrlKey),g=({location:e,pinId:r,surface:t})=>!!t&&!m.ZF.includes(t)||e.pathname.includes(r),k=(e,r)=>{var t,a;const i=Math.round(1e3*Math.random())+"",o=Math.round(1e3*Math.random())+"";n.t8((0,s.GS)(i),o);const c={token:`${i}-${o}`,url:e,...r&&!r.params?r.queryParams:{pin:null!==(t=null==r?void 0:r.params.pinId)&&void 0!==t?t:void 0,csr:null==r||!r.params.csrId||null!==(a=r.params)&&void 0!==a&&a.pinId?void 0:r.params.csrId,client_tracking_params:null==r?void 0:r.params.clientTrackingParams,aux_data:null!=r&&r.params.auxData?JSON.stringify(r.params.auxData):void 0}};return`/offsite/?${(0,l.Z)(c)}`},P=(e,r)=>{(0,a.Z)(k(e,r),!0)},v=async({clientTrackingParams:e,href:r,isMounted:t,pinId:a,spamCheckCallback:n})=>{const s=await(0,i.Z)({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:e,pin_id:a,url:r}});if(!s.resource_response.error&&t){const e=s.resource_response.data||{},{message:r,redirect_status:t,url:a}=e;n({blocked:["blocked","suspicious","porn"].includes(t),message:r,redirectStatus:t,sanitized_url:a})}},b=({event:e,onHistoryChange:r,href:t,history:n,target:s})=>{const i=(0,o.Z)(t),l=c(t),m=(0,d.Z)(i);m===p.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===s?(0,a.Z)(i,"blank"===s):n&&m===p.Z.SAME_ORIGIN&&(n.push((0,u.Z)({url:i}),null!=l?l:{}),r&&r({event:e}))}},599551:(e,r,t)=>{t.d(r,{Z:()=>u,p:()=>p});var a=t(667294),n=t(616550),s=t(946618),i=t(354428),o=t(300657),c=t(250307),l=t(28630),d=t(554318);function u(e){var r,t,u;const{externalData:p,href:m,onHistoryChange:_,target:h}=e,[g,k]=(0,a.useState)(null),[P,v]=(0,a.useState)(!1),b=(0,n.useHistory)(),f=(0,n.useLocation)(),y=(0,c.Z)(m),I=(0,l.Z)({url:y}),{showWarning:w}=null!==(r=(0,d.s)())&&void 0!==r?r:{},{pin:R,surface:S}=p||{},x=R?(0,s.Z)({boardUrl:null===(t=R.board)||void 0===t?void 0:t.url,location:f,pinId:R.id,pinnerUserName:null===(u=R.pinner)||void 0===u?void 0:u.username,storyPinDataId:R.story_pin_data_id,trackingParams:R.tracking_params,trackingParamsMap:R.tracking_params_map}):null,A=(0,o.Z)();return(0,a.useEffect)((()=>(v(!0),()=>{v(!1)})),[]),(0,a.useEffect)((()=>{I&&R&&null===g&&P&&(!R.promoter||R.is_downstream_promotion)&&(0,i.$3)({location:f,pinId:R.id,surface:S})&&(0,i.iw)({clientTrackingParams:x,isMounted:P,pinId:R.id,spamCheckCallback:e=>k(e),href:y})}),[x,R,S,y,I,P,f,g]),({event:e})=>{var r;(0,i.gV)({isOffsiteUrl:I,event:e})||(e.preventDefault(),m&&(I||null!=p&&p.dangerouslyForceOffsiteUrl?A({auxData:null==p?void 0:p.auxData,clientTrackingParams:x,pin:(null==p?void 0:p.pin)&&{attributionSourceId:p.pin.attribution_source_id,campaignId:p.pin.campaign_id,isPromoted:p.pin.is_promoted,pinPromotionId:p.pin.pin_promotion_id},pinId:null==p||null===(r=p.pin)||void 0===r?void 0:r.id,queryParams:null==p?void 0:p.queryParams,showWarning:w,spamCheck:g,url:y}):(0,i.G3)({event:e,href:m,history:b,onHistoryChange:_,target:"blank"===h?"blank":null})))}}const p=({children:e,...r})=>e({handleClick:u(r)})},300657:(e,r,t)=>{t.d(r,{Z:()=>u});var a=t(758579),n=t(78309),s=t(969327),i=t(388011),o=t(354428),c=t(3060),l=t(204926);const d=()=>{const{logContextEvent:e}=(0,i.v)();return({attributionSourceId:r,auxData:t,campaignId:i,clientTrackingParams:l,href:d,isPromoted:u,pinId:p,pinPromotionId:m})=>{var _;if(!u)return!1;const h=(0,a.Z)(),g=(0,o.Se)(d,{params:{pinId:p,csrId:null,clientTrackingParams:l,auxData:t}}),k=null!==(_=null==h?void 0:h.userAgent.browserName)&&void 0!==_?_:"";if((0,s.G6)(k)){var P,v;const{group:t}=null!==(P=null==h?void 0:h.experimentsClient.checkExperiment("m10n_event_conversion_measurement"))&&void 0!==P?P:{},a=null!=h&&null!==(v=h.userAgent)&&void 0!==v&&v.browserVersion?h.userAgent.browserVersion:"0.0",s=parseFloat(a.split(".")[0]+"."+a.split(".")[1]);if(void 0!==i&&s>=14.1&&["enabled_safari"].includes(t)){const t=r||(e=>""+(e%32*8+Math.floor(((new Date).getTime()-16409952e5)/864e5)%8))(null!=m?m:0);return((e,r,t)=>{const a=document.createElement("a");a.setAttribute("href",r),a.setAttribute("target","_blank"),a.setAttribute("rel","noopener nofollow noreferrer"),a.style.cursor="pointer",a.style.display="block",a.setAttribute(n.$N.ATTRIBUTION_SOURCE_ID,e),a.setAttribute(n.$N.ATTRIBUTE_DESTINATION,t),a.setAttribute(n.$N.ATTRIBUTE_ON,t),a.click()})(t,g,d),e({event_type:101,clientTrackingParams:l,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:m||"",click_measurement_campaign_id:i||"",is_pcm:!0,attribution_source_id:t,page_url:d}}),!0}}else if((0,s.i7)(k)){var b,f;const{group:t}=null!==(b=null==h?void 0:h.experimentsClient.checkExperiment("m10n_event_conversion_measurement_chrome"))&&void 0!==b?b:{},a=null!=h&&null!==(f=h.userAgent)&&void 0!==f&&f.browserVersion?parseInt(h.userAgent.browserVersion.split(".")[0],10):0;if(void 0!==r&&a>=101&&["enabled"].includes(t)){const t=null!=r?r:"0";return((e,r,t)=>{const a=new URL(`${c.C0}/attribution_source/`);a.searchParams.set(n.NR.SOURCE_EVENT_ID,e),a.searchParams.set(n.NR.DESTINATION,t),a.searchParams.set(n.NR.PRIORITY,n.NR.CLICK_PRIORITY),a.searchParams.set(n.NR.EXPIRY,n.uV),a.searchParams.set(n.NR.SOURCE_EVENT_TYPE,"click");const s=document.createElement("a");s.setAttribute("href",r),s.setAttribute("target","_blank"),s.setAttribute("rel","noopener nofollow noreferrer"),s.style.cursor="pointer",s.style.display="block",s.setAttribute(n.NR.SOURCE,a.toString()),s.click()})(t,g,d),e({event_type:101,clientTrackingParams:l,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:m||"",click_measurement_campaign_id:i||"",is_arapi:!0,attribution_source_id:t,page_url:d}}),!0}}return!1}},u=e=>{const r=d();return({auxData:t,clientTrackingParams:a,pin:n,pinId:s,queryParams:i,showWarning:c,spamCheck:d,url:u})=>{"undefined"!=typeof window&&window.Windows?(0,l.Z)(u,{clientTrackingParams:a,pinId:s,hasPin:!!n,auxData:t}):n||null!=e&&e.isFromClickthroughLink?null!=d&&d.blocked?null==c||c(d):n&&r({attributionSourceId:n.attributionSourceId,auxData:t,campaignId:n.campaignId,clientTrackingParams:a,href:u,isPromoted:n.isPromoted,pinId:s,pinPromotionId:n.pinPromotionId})||(0,o.Gj)(u,{params:{pinId:s,clientTrackingParams:a,auxData:t}}):(0,o.Gj)(u,i?{queryParams:i}:{params:{pinId:s}})}}},250307:(e,r,t)=>{t.d(r,{Z:()=>a});const a=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},957733:(e,r,t)=>{t.d(r,{Z:()=>s});const a=(e,r)=>0===e.lastIndexOf(r,0);var n=t(17330);const s=({url:e})=>{const r=(0,n.Z)("/");return a(e,r)?e.substr(r.length-1):e}},204926:(e,r,t)=>{t.d(r,{Z:()=>s});var a=t(970588),n=t(354428);function s(e,r){const{auxData:t,clientTrackingParams:s,hasPin:i,pinId:o}=r||{};(0,a.Z)({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:i?s:void 0,pin_id:o,url:e,aux_data:JSON.stringify(t)}}).then((r=>{if(r&&r.resource_response&&!r.resource_response.error){const{resource_response:e}=r,{redirect_status:t,url:a}=e.data;if(!["blocked","suspicious","porn"].includes(t)){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){const e=new window.Windows.Foundation.Uri(a);window.Windows.System.Launcher.launchUriAsync(e)}return}}(0,n.Gj)(e,{params:i?{pinId:o,clientTrackingParams:s,auxData:t}:{pinId:o}})}))}},795142:(e,r,t)=>{t.d(r,{UP:()=>o,Wv:()=>n,ZF:()=>a,zI:()=>s,zl:()=>i});const a=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],n=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","RelatedProductsFeed","UserProfilePinGrid","ShoppingGridShippedMetadataWithVisitButton"],s=[...n,"ShoppingGridShippedMetadata","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ProductPinsFeed","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid"],i=["ShoppingSquareGridDomain","ShoppingGridShippedMetadata","ShoppingSquareGridStorefront","ShoppingSquareGridStorefrontDomain","ShoppingGridShippedMetadataWithVisitButton"],o=["BaseBoardPinGrid"]},554318:(e,r,t)=>{t.d(r,{Z:()=>g,s:()=>h});var a=t(667294),n=t(583592),s=t(608575),i=t(883119),o=t(88622),c=t(536042),l=t(630089),d=t(785893);const u=()=>{var e;const r=(0,c.ZP)(),{dismissWarning:t}=null!==(e=h())&&void 0!==e?e:{};return(0,d.jsx)(i.xu,{paddingX:3,children:(0,d.jsx)(i.zx,{fullWidth:!0,color:"red",onClick:t,text:r._('Okay', 'Dismiss a modal stating that clicking through to a link has been blocked', 'Dismiss a modal stating that clicking through to a link has been blocked')})})},p=()=>{const e=(0,c.ZP)();return(0,d.jsx)(i.xv,{inline:!0,weight:"bold",children:(0,d.jsx)(i.rU,{target:"blank",href:"https://policy.pinterest.com/community-guidelines#section-spam",display:"inlineBlock",underline:"hover",children:e._('Learn more', 'Link text leading to policy website', 'Link text leading to policy website')})})},m=({message:e,sanitized_url:r})=>{var t;const a=(0,c.ZP)(),{dismissWarning:n}=null!==(t=h())&&void 0!==t?t:{};return(0,d.jsx)(o.ZP,{accessibilityModalLabel:a._('We have blocked this link', 'Modal label when clicking a spammy link', 'Modal label when clicking a spammy link'),onDismiss:n,heading:a._('Heads up!', 'Modal heading when clicking through to a link has been blocked', 'Modal heading when clicking through to a link has been blocked'),footer:(0,d.jsx)(u,{}),children:(0,d.jsxs)(i.xu,{padding:6,children:[(0,d.jsx)(i.xv,{children:(0,l.nk)("{{ message }} {{ learnMore }}",{message:e,learnMore:(0,d.jsx)(p,{},"learnMoreLink")})}),(0,d.jsxs)(i.xu,{alignItems:"center",display:"flex",marginTop:4,children:[(0,d.jsx)(i.xu,{marginEnd:3,children:(0,d.jsx)(i.JO,{accessibilityLabel:a._('Blocked link address', 'Icon label preceding a block url', 'Icon label preceding a block url'),color:"error",icon:"report",inline:!0,size:24})}),(0,d.jsx)(i.xv,{inline:!0,lineClamp:1,weight:"bold",children:s.parse(r).hostname})]})]})})},{Provider:_,useMaybeHook:h}=(0,n.Z)("SpammyClickthrough");function g({children:e}){const[r,t]=(0,a.useState)(null),n=(0,a.useCallback)((()=>{t(null)}),[t]),s=(0,a.useCallback)((e=>{t(e)}),[t]),i=(0,a.useMemo)((()=>({dismissWarning:n,showWarning:s})),[n,s]);return(0,d.jsxs)(_,{value:i,children:[r&&(0,d.jsx)(m,{...r}),e]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/99551-5e570337ca20ac0d.mjs.map