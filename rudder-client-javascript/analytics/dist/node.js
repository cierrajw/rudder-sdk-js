"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function replacer(e,t){return t&&""!=t?t:void 0}function generateUUID(){let e=(new Date).getTime();return"undefined"!=typeof performance&&"function"==typeof performance.now&&(e+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){let r=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?r:3&r|8).toString(16)}))}function getCurrentTimeFormatted(){let e=(new Date).toISOString();return e.split("T")[0]+" "+e.split("T")[1].split("Z")[0].split(".")[0]+"+"+e.split("Z")[0].split(".")[1]}function getJSONTrimmed(e,t,r){let s=r.bind(e),n=new XMLHttpRequest;n.open("GET",t,!0),n.onload=function(){let e=n.status;200==e?(console.log("status 200"),s(200,n.responseText)):s(e),console.log("in response process")},console.log("before send"),n.send(),console.log("after send")}Object.defineProperty(exports,"__esModule",{value:!0});let MessageType={TRACK:"track",PAGE:"page",IDENTIFY:"identify"},ECommerceEvents={PRODUCTS_SEARCHED:"Products Searched",PRODUCT_LIST_VIEWED:"Product List Viewed",PRODUCT_LIST_FILTERED:"Product List Filtered",PROMOTION_VIEWED:"Promotion Viewed",PROMOTION_CLICKED:"Promotion Clicked",PRODUCT_CLICKED:"Product Clicked",PRODUCT_VIEWED:"Product Viewed",PRODUCT_ADDED:"Product Added",PRODUCT_REMOVED:"Product Removed",CART_VIEWED:"Cart Viewed",CHECKOUT_STARTED:"Checkout Started",CHECKOUT_STEP_VIEWED:"Checkout Step Viewed",CHECKOUT_STEP_COMPLETED:"Checkout Step Completed",PAYMENT_INFO_ENTERED:"Payment Info Entered",ORDER_UPDATED:"Order Updated",ORDER_COMPLETED:"Order Completed",ORDER_REFUNDED:"Order Refunded",ORDER_CANCELLED:"Order Cancelled",COUPON_ENTERED:"Coupon Entered",COUPON_APPLIED:"Coupon Applied",COUPON_DENIED:"Coupon Denied",COUPON_REMOVED:"Coupon Removed",PRODUCT_ADDED_TO_WISHLIST:"Product Added to Wishlist",PRODUCT_REMOVED_FROM_WISHLIST:"Product Removed from Wishlist",WISH_LIST_PRODUCT_ADDED_TO_CART:"Wishlist Product Added to Cart",PRODUCT_SHARED:"Product Shared",CART_SHARED:"Cart Shared",PRODUCT_REVIEWED:"Product Reviewed"},BASE_URL="http://18.222.145.124:5000/dump",CONFIG_URL="https://api.rudderlabs.com",FLUSH_QUEUE_SIZE=30,FLUSH_INTERVAL_DEFAULT=5e3;function ScriptLoader(e,t){console.log("in script loader=== "+e);var r=document.createElement("script");r.src=t,r.type="text/javascript",r.id=e;var s=document.getElementsByTagName("script")[0];console.log("==script==",s),s.parentNode.insertBefore(r,s)}var HubSpot=function(){function e(t){_classCallCheck(this,e),this.hubId=t}return _createClass(e,[{key:"init",value:function(){ScriptLoader("hubspot-integration","http://js.hs-scripts.com/"+this.hubId+".js"),console.log("===in init===")}},{key:"identify",value:function(e){console.log("in HubspotAnalyticsManager identify");var t=e.rl_message.rl_context.rl_traits,r={};for(var s in t){if(Object.getOwnPropertyDescriptor(t,s)&&t[s])r[s.startsWith("rl_")?s.substring(3,s.length):s]=t[s]}if(r.address){var n=r.address;for(var i in delete r.address,n)if(Object.getOwnPropertyDescriptor(n,i)&&n[i]){var o=i.startsWith("rl_")?i.substring(3,i.length):i;r[o="street"==o?"address":o]=n[i]}}var l=e.rl_message.rl_context.rl_user_properties;for(var a in l){if(Object.getOwnPropertyDescriptor(l,a)&&l[a])r[a.startsWith("rl_")?a.substring(3,a.length):a]=l[a]}(console.log(r),void 0!==("undefined"==typeof window?"undefined":_typeof(window)))&&(window._hsq=window._hsq||[]).push(["identify",r])}},{key:"track",value:function(e){console.log("in HubspotAnalyticsManager track");var t=window._hsq=window._hsq||[],r={};r.id=e.rl_message.rl_event,e.rl_message.rl_properties&&e.rl_message.rl_properties.revenue&&(console.log("revenue: "+e.rl_message.rl_properties.revenue),r.value=e.rl_message.rl_properties.revenue),t.push(["trackEvent",r])}},{key:"page",value:function(e){console.log("in HubspotAnalyticsManager page");var t=window._hsq=window._hsq||[];e.rl_message.rl_properties&&e.rl_message.rl_properties.path&&t.push(["setPath",e.rl_message.rl_properties.path]),t.push(["trackPageView"])}},{key:"loaded",value:function(){return console.log("in hubspot isLoaded"),!(!window._hsq||window._hsq.push===Array.prototype.push)}}]),e}(),index=HubSpot,integrations={HS:index};class RudderApp{constructor(){this.rl_build="1.0.0",this.rl_name="RudderLabs JavaScript SDK",this.rl_namespace="com.rudderlabs.javascript",this.rl_version="1.0.0"}}class RudderLibraryInfo{constructor(){this.rl_name="RudderLabs JavaScript SDK",this.rl_version="1.0.0"}}class RudderOSInfo{constructor(){this.rl_name="",this.rl_version=""}}class RudderScreenInfo{constructor(){this.rl_density=0,this.rl_width=0,this.rl_height=0}}class RudderContext{constructor(){this.rl_app=new RudderApp,this.rl_traits=null,this.rl_library=new RudderLibraryInfo;let e=new RudderOSInfo;e.rl_version="";let t=new RudderScreenInfo;"undefined"==typeof window?(t.rl_width=0,t.rl_height=0,t.rl_density=0,e.rl_version="",e.rl_name="",this.rl_user_agent=null,this.rl_locale=null):(t.rl_width=window.width,t.rl_height=window.height,t.rl_density=window.devicePixelRatio,this.rl_user_agent=navigator.userAgent,this.rl_locale=navigator.language||navigator.browserLanguage),this.screen=t,this.rl_device=null,this.rl_network=null}}class RudderMessage{constructor(){this.rl_channel="web",this.rl_context=new RudderContext,this.rl_type=null,this.rl_action=null,this.rl_message_id=generateUUID().toString(),this.rl_timestamp=(new Date).getTime(),this.rl_anonymous_id=generateUUID().toString(),this.rl_user_id=null,this.rl_event=null,this.rl_properties={},this.rl_integrations={},this.rl_integrations.all=!0}getProperty(e){return this.rl_properties[e]}addProperty(e,t){this.rl_properties[e]=t}validateFor(e){if(!this.rl_properties)throw new Error("Key rl_properties is required");switch(e){case MessageType.TRACK:if(!this.rl_event)throw new Error("Key rl_event is required for track event");if(this.rl_event in Object.values(ECommerceEvents))switch(this.rl_event){case ECommerceEvents.CHECKOUT_STEP_VIEWED:case ECommerceEvents.CHECKOUT_STEP_COMPLETED:case ECommerceEvents.PAYMENT_INFO_ENTERED:this.checkForKey("checkout_id"),this.checkForKey("step");break;case ECommerceEvents.PROMOTION_VIEWED:case ECommerceEvents.PROMOTION_CLICKED:this.checkForKey("promotion_id");break;case ECommerceEvents.ORDER_REFUNDED:this.checkForKey("order_id")}else this.rl_properties.rl_category||(this.rl_properties.rl_category=this.rl_event);break;case MessageType.PAGE:break;case MessageType.SCREEN:if(!this.rl_properties.name)throw new Error("Key 'name' is required in rl_properties")}}checkForKey(e){if(!this.rl_properties[e])throw new Error("Key '"+e+"' is required in rl_properties")}}class RudderElement{constructor(){this.rl_message=new RudderMessage}setType(e){this.rl_message.rl_type=e}setProperty(e){this.rl_message.rl_properties=e}setUserProperty(e){this.rl_message.rl_user_properties=e}setUserId(e){this.rl_message.rl_user_id=e}setEventName(e){this.rl_message.rl_event=e}updateTraits(e){this.rl_message.rl_context.rl_traits=e}getElementContent(){return this.rl_message}}class RudderElementBuilder{constructor(){this.rudderProperty=null,this.rudderUserProperty=null,this.event=null,this.userId=null,this.channel=null,this.type=null}setProperty(e){return this.rudderProperty=e,this}setPropertyBuilder(e){return this.rudderProperty=e.build(),this}setUserProperty(e){return this.rudderUserProperty=e,this}setUserPropertyBuilder(e){return this.rudderUserProperty=e.build(),this}setEvent(e){return this.event=e,this}setUserId(e){return this.userId=e,this}setChannel(e){return this.channel=e,this}setType(e){return this.type=e,this}build(){let e=new RudderElement;return e.setUserId(this.userId),e.setType(this.type),e.setEventName(this.event),e.setProperty(this.rudderProperty),e.setUserProperty(this.rudderUserProperty),e}}class RudderTraits{constructor(){this.rl_address=null,this.rl_age=null,this.rl_birthday=null,this.rl_company=null,this.rl_createdat=null,this.rl_description=null,this.rl_email=null,this.rl_firstname=null,this.rl_gender=null,this.rl_id=null,this.rl_lastname=null,this.rl_name=null,this.rl_phone=null,this.rl_title=null,this.rl_username=null}setAddress(e){return this.rl_address=e,this}setAge(e){return this.rl_age=e,this}setBirthday(e){return this.rl_birthday=e,this}setCompany(e){return this.rl_company=e,this}setCreatedAt(e){return this.rl_createdat=e,this}setDescription(e){return this.rl_description=e,this}setEmail(e){return this.rl_email=e,this}setFirstname(e){return this.rl_firstname=e,this}setId(e){return this.rl_id=e,this}setLastname(e){return this.rl_lastname=e,this}setName(e){return this.rl_name=e,this}setPhone(e){return this.rl_phone=e,this}setTitle(e){return this.rl_title=e,this}setUsername(e){return this.rl_username=e,this}}let defaults={user_storage_key:"rl_user_id",user_storage_trait:"rl_trait"};class Storage{constructor(){this.storage=window.localStorage}setItem(e,t){let r="";"string"==typeof t&&(r=t),"object"==typeof t&&(r=JSON.stringify(t)),this.storage.setItem(e,r)}setUserId(e){"string"==typeof e?this.storage.setItem(defaults.user_storage_key,e):console.log("userId should be string")}setUserTraits(e){"object"==typeof e?this.storage.setItem(defaults.user_storage_trait,JSON.stringify(e)):console.log("traits should be object")}getItem(e){let t=this.storage.getItem(e);return JSON.parse(t)}getUserId(){return this.storage.getItem(defaults.user_storage_key)}getUserTraits(){return JSON.parse(this.storage.getItem(defaults.user_storage_trait))}removeItem(e){this.storage.removeItem(e)}clear(){this.storage.clear()}}var Storage$1=Storage;class RudderPayload{constructor(){this.batch=null,this.write_key=null}}class EventRepository{constructor(){this.eventsBuffer=[],this.url=BASE_URL,this.state="READY",setInterval(this.preaparePayloadAndFlush,FLUSH_INTERVAL_DEFAULT,this)}preaparePayloadAndFlush(e){if(console.log("==== in preaparePayloadAndFlush with state: "+e.state),console.log(e.eventsBuffer),0!=e.eventsBuffer.length&&"PROCESSING"!==e.state){var t=e.eventsBuffer.slice(0,FLUSH_QUEUE_SIZE),r=new RudderPayload;r.batch=t,r.write_key=e.write_key,r.sent_at=getCurrentTimeFormatted();var s=new XMLHttpRequest;console.log("==== in flush sending to Rudder BE ===="),console.log(JSON.stringify(r,replacer).replace(/rl_/g,"")),s.open("POST",e.url,!0),s.setRequestHeader("Content-Type","application/json"),s.onreadystatechange=function(){4===s.readyState&&200===s.status?(console.log("====== request processed successfully: "+s.status),e.eventsBuffer=e.eventsBuffer.slice(FLUSH_QUEUE_SIZE),console.log(e.eventsBuffer.length)):4===s.readyState&&200!==s.status&&console.log("====== request failed with status: "+s.status),e.state="READY"},s.send(JSON.stringify(r,replacer).replace(/rl_/g,"")),e.state="PROCESSING"}}flush(e){console.log(this.eventsBuffer),this.eventsBuffer.push(e.getElementContent()),console.log("==== Added to flush queue ====="+this.eventsBuffer.length)}}let eventRepository=new EventRepository;function init(e,t){var r=this;console.log("supported intgs ",integrations);if(this.clientIntegrationObjects=[],e&&0!=e.length){e.forEach((function(e){var s=integrations[e];if("HS"===e){t[0].hubId;"6405167";var n=new s("6405167");n.init(),r.clientIntegrationObjects.push(n)}}));for(var s=function(e){r.toBeProcessedByIntegrationArray.forEach((function(t){var s,n=t[0];t.shift(),(s=r.clientIntegrationObjects[e])[n].apply(s,_toConsumableArray(t))}))},n=0;n<this.clientIntegrationObjects.length;n++)s(n);this.toBeProcessedByIntegrationArray=[]}else this.toBeProcessedByIntegrationArray=[]}function flush(e){this.eventRepository||(this.eventRepository=eventRepository),this.eventRepository.flush(e)}var Analytics=function(){function e(){_classCallCheck(this,e),this.prop1="val1",this.prop2="val2",this.ready=!1,this.writeKey="",this.eventsBuffer=[],this.clientIntegrations=[],this.configArray=[],this.clientIntegrationObjects=void 0,this.toBeProcessedArray=[],this.toBeProcessedByIntegrationArray=[],this.storage=new Storage$1,this.userId=null!=this.storage.getUserId()?this.storage.getUserId():generateUUID(),this.userTraits=null!=this.storage.getUserTraits()?this.storage.getUserTraits():{},this.storage.setUserId(this.userId),this.eventRepository=eventRepository}return _createClass(e,[{key:"processResponse",value:function(e,t){(t=JSON.parse(t)).source.destinations.forEach((function(e,t){console.log("Destination "+t+" Enabled? "+e.enabled+" Type: "+e.destinationDefinition.name+" Use Native SDK? "+e.config.useNativeSDK),e.enabled&&e.config.useNativeSDK&&(this.clientIntegrations.push(e.destinationDefinition.name),this.configArray.push(e.config))}),this),init.call(this,this.clientIntegrations,this.configArray)}},{key:"page",value:function(e,t,r,s,n){var i=Array.from(arguments);console.log("args ",i),"function"==typeof s&&(n=s,s=null),"function"==typeof r&&(n=r,s=r=null),"function"==typeof t&&(n=t,s=r=t=null),"object"===_typeof(e)&&(s=t,r=e,t=e=null),"object"===_typeof(t)&&(s=r,r=t,t=null),"string"==typeof e&&"string"!=typeof t&&(t=e,e=null),this.userId||(this.userId=generateUUID(),this.storage.setUserId(this.userId));var o=(new RudderElementBuilder).setType("page").build();t&&(console.log("name ",t),o.rl_message.rl_name=t),e&&(r||(r={}),r.category=e),r&&(console.log(JSON.parse(JSON.stringify(r))),o.rl_message.rl_properties=r),o.rl_message.rl_context.rl_traits=this.userTraits,o.rl_message.rl_anonymous_id=o.rl_message.rl_user_id=o.rl_message.rl_context.rl_traits.rl_anonymous_id=this.userId,console.log(JSON.stringify(o)),this.clientIntegrationObjects&&this.clientIntegrationObjects.forEach((function(e){e.page(o)})),this.clientIntegrationObjects||this.toBeProcessedByIntegrationArray.push(["page",o]),flush.call(this,o),console.log("page called "+this.prop1),n&&n()}},{key:"track",value:function(e,t,r,s){"function"==typeof r&&(s=r,r=null),"function"==typeof t&&(s=t,r=null,t=null),this.userId||(this.userId=generateUUID(),this.storage.setUserId(this.userId));var n=(new RudderElementBuilder).setType("track").build();e&&n.setEventName(e),t&&n.setProperty(t),n.rl_message.rl_context.rl_traits=this.userTraits,n.rl_message.rl_anonymous_id=n.rl_message.rl_user_id=n.rl_message.rl_context.rl_traits.rl_anonymous_id=this.userId,console.log(JSON.stringify(n)),this.clientIntegrationObjects&&this.clientIntegrationObjects.forEach((function(e){console.log("called in normal flow"),e.track(n)})),this.clientIntegrationObjects||(console.log("pushing in replay queue"),this.toBeProcessedByIntegrationArray.push(["track",n])),flush.call(this,n),console.log("track is called "+this.prop2),s&&s()}},{key:"identify",value:function(e,t,r,s){"function"==typeof r&&(s=r,r=null),"function"==typeof t&&(s=t,r=null,t=null),"object"==_typeof(e)&&(r=t,t=e,e=this.userId),this.userId=e,this.storage.setUserId(this.userId);var n=(new RudderElementBuilder).setType("identify").build(),i=new RudderTraits;if(console.log(t),t)for(var o in t)Object.getOwnPropertyDescriptor(t,o)&&t[o]&&(i[o]=t[o]);this.userTraits=t,this.storage.setUserTraits(this.userTraits),n.rl_message.rl_context.rl_traits=this.userTraits,n.rl_message.rl_anonymous_id=n.rl_message.rl_user_id=n.rl_message.rl_context.rl_traits.rl_anonymous_id=this.userId,console.log(JSON.stringify(n)),this.clientIntegrationObjects&&this.clientIntegrationObjects.forEach((function(e){console.log("called in normal flow"),e.identify(n)})),this.clientIntegrationObjects||(console.log("pushing in replay queue"),this.toBeProcessedByIntegrationArray.push(["identify",n])),flush.call(this,n),console.log("identify is called "+this.prop2),s&&s()}},{key:"reset",value:function(){this.userId="",this.userTraits={},this.storage.clear()}},{key:"load",value:function(e){console.log("inside load "+this.prop1),this.writeKey=e,getJSONTrimmed(this,CONFIG_URL+"/source-config?write_key="+e,this.processResponse)}}]),e}(),instance=new Analytics,eventsPushedAlready=!!window.analytics&&window.analytics.push==Array.prototype.push,methodArg=window.analytics?window.analytics[0]:[];if(methodArg.length>0&&"load"==methodArg[0]&&instance[methodArg[0]](methodArg[1]),eventsPushedAlready){for(var i=1;i<window.analytics.length;i++)instance.toBeProcessedArray.push(window.analytics[i]);for(var _i2=0;_i2<instance.toBeProcessedArray.length;_i2++){var event=_toConsumableArray(instance.toBeProcessedArray[_i2]),method=event[0];event.shift(),instance[method].apply(instance,_toConsumableArray(event))}instance.toBeProcessedArray=[]}var identify=instance.identify.bind(instance),page=instance.page.bind(instance),track=instance.track.bind(instance),reset=instance.reset.bind(instance),load=instance.load.bind(instance);exports.identify=identify,exports.load=load,exports.page=page,exports.reset=reset,exports.track=track;