import logger from "../../utils/logUtil";
import camelcase from "camelcase";


class Fullstory{
    constructor(config) {
        this.fs_org = config.fs_org;
        this.fs_debug_mode = config.fs_debug_mode;
        this.name = "FULLSTORY";
    }

    static getFSProperties(properties) {
        var FS_properties = {}
        Object.keys(properties).map(function(key, index){
            FS_properties[
                key === 'displayName' || key === 'email' ? key : Fullstory.camelCaseField(key)
            ] = properties[key];
        });
        return FS_properties;
    }

    static camelCaseField(fieldName) {
        // Do not camel case across type suffixes.
        var parts = fieldName.split('_');
        if (parts.length > 1) {
          var typeSuffix = parts.pop();
          switch (typeSuffix) {
            case 'str':
            case 'int':
            case 'date':
            case 'real':
            case 'bool':
            case 'strs':
            case 'ints':
            case 'dates':
            case 'reals':
            case 'bools':
              return camelcase(parts.join('_')) + '_' + typeSuffix;
            default: // passthrough
          }
        }
        // No type suffix found. Camel case the whole field name.
        return camelcase(fieldName);
    }

    init() {
        logger.debug("===in init FULLSTORY===");
        
        window['_fs_debug'] = this.fs_debug_mode;
        window['_fs_host'] = 'fullstory.com';
        window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
        window['_fs_org'] = this.fs_org;
        window['_fs_namespace'] = 'FS';
        (function(m,n,e,t,l,o,g,y){
            if (e in m) {if(m.console && m.console.log) { 
            m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
            g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
            o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
            y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
            g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
            g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
            g.log = function(a,b){g("log",[a,b])};
            g.consent=function(a){g("consent",!arguments.length||a)};
            g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
            g.clearUserCookie=function(){};
            g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
            if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
        })(window,document,window['_fs_namespace'],'script','user');
    }

    page(rudderElement) {
        console.log(rudderElement);
        let rudderMessage = rudderElement.message;
        let pageName = rudderMessage.name;
        let pageCategory = rudderMessage.properties
            ? rudderMessage.properties.category
            : undefined;// ask
        
        let url = rudderMessage.properties.url;
        let eventName ;

        if (pageName) {
            eventName = "Viewed " + pageName + " page";
        }

        if (pageCategory && pageName) {
            eventName = "Viewed " + pageCategory + " " + pageName + " page";
        }

        if(!eventName && url) {
            eventName = "Viewed " + url;
        }

        let props = {
            event: eventName,
            userId: rudderMessage.userId,
            anonymousId: rudderMessage.anonymousId,
            ...rudderMessage.properties
        };

        FS.event("Page", Fullstory.getFSProperties(props));
    }

    identify(rudderElement) {
        logger.debug("in FULLSORY identify");
        FS.identify(rudderElement.message.userId, Fullstory.getFSProperties(rudderElement.message.context.traits));
    }

    track(rudderElement) {
        logger.debug("in FULLSTORY track");
        FS.event(rudderElement.message.event, Fullstory.getFSProperties(rudderElement.message.properties));
    }

    isLoaded() {
        logger.debug("in FULLSTORY isLoaded");
        return !!window.FS;
    }
}

export { Fullstory };