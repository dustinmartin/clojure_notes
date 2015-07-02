// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__25775_SHARP_,p2__25776_SHARP_){
var and__18047__auto__ = p1__25775_SHARP_;
if(cljs.core.truth_(and__18047__auto__)){
return p2__25776_SHARP_;
} else {
return and__18047__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18059__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18059__auto__){
return or__18059__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18059__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18059__auto__){
return or__18059__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18059__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18059__auto__)){
return or__18059__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__18954__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18955__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18956__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18957__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18958__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18958__auto__,method_table__18954__auto__,prefer_table__18955__auto__,method_cache__18956__auto__,cached_hierarchy__18957__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__25777){
var map__25778 = p__25777;
var map__25778__$1 = ((cljs.core.seq_QMARK_.call(null,map__25778))?cljs.core.apply.call(null,cljs.core.hash_map,map__25778):map__25778);
var file = cljs.core.get.call(null,map__25778__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__25779){
var map__25780 = p__25779;
var map__25780__$1 = ((cljs.core.seq_QMARK_.call(null,map__25780))?cljs.core.apply.call(null,cljs.core.hash_map,map__25780):map__25780);
var namespace = cljs.core.get.call(null,map__25780__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__18954__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18955__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18956__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18957__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18958__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18958__auto__,method_table__18954__auto__,prefer_table__18955__auto__,method_cache__18956__auto__,cached_hierarchy__18957__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e25781){if((e25781 instanceof Error)){
var e = e25781;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25781;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__25783 = arguments.length;
switch (G__25783) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25785,callback){
var map__25787 = p__25785;
var map__25787__$1 = ((cljs.core.seq_QMARK_.call(null,map__25787))?cljs.core.apply.call(null,cljs.core.hash_map,map__25787):map__25787);
var file_msg = map__25787__$1;
var request_url = cljs.core.get.call(null,map__25787__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25787,map__25787__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25787,map__25787__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25788){
var map__25790 = p__25788;
var map__25790__$1 = ((cljs.core.seq_QMARK_.call(null,map__25790))?cljs.core.apply.call(null,cljs.core.hash_map,map__25790):map__25790);
var file_msg = map__25790__$1;
var namespace = cljs.core.get.call(null,map__25790__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__25790__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__18059__auto__ = meta_data;
if(cljs.core.truth_(or__18059__auto__)){
return or__18059__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18047__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18047__auto__){
var or__18059__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18059__auto__)){
return or__18059__auto__;
} else {
var or__18059__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18059__auto____$1)){
return or__18059__auto____$1;
} else {
var and__18047__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18047__auto____$1){
var or__18059__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18059__auto____$2){
return or__18059__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18047__auto____$1;
}
}
}
} else {
return and__18047__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25791,callback){
var map__25793 = p__25791;
var map__25793__$1 = ((cljs.core.seq_QMARK_.call(null,map__25793))?cljs.core.apply.call(null,cljs.core.hash_map,map__25793):map__25793);
var file_msg = map__25793__$1;
var request_url = cljs.core.get.call(null,map__25793__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25793__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21065__auto___25880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto___25880,out){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto___25880,out){
return (function (state_25862){
var state_val_25863 = (state_25862[(1)]);
if((state_val_25863 === (1))){
var inst_25840 = cljs.core.nth.call(null,files,(0),null);
var inst_25841 = cljs.core.nthnext.call(null,files,(1));
var inst_25842 = files;
var state_25862__$1 = (function (){var statearr_25864 = state_25862;
(statearr_25864[(7)] = inst_25842);

(statearr_25864[(8)] = inst_25840);

(statearr_25864[(9)] = inst_25841);

return statearr_25864;
})();
var statearr_25865_25881 = state_25862__$1;
(statearr_25865_25881[(2)] = null);

(statearr_25865_25881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (2))){
var inst_25842 = (state_25862[(7)]);
var inst_25845 = (state_25862[(10)]);
var inst_25845__$1 = cljs.core.nth.call(null,inst_25842,(0),null);
var inst_25846 = cljs.core.nthnext.call(null,inst_25842,(1));
var inst_25847 = (inst_25845__$1 == null);
var inst_25848 = cljs.core.not.call(null,inst_25847);
var state_25862__$1 = (function (){var statearr_25866 = state_25862;
(statearr_25866[(11)] = inst_25846);

(statearr_25866[(10)] = inst_25845__$1);

return statearr_25866;
})();
if(inst_25848){
var statearr_25867_25882 = state_25862__$1;
(statearr_25867_25882[(1)] = (4));

} else {
var statearr_25868_25883 = state_25862__$1;
(statearr_25868_25883[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (3))){
var inst_25860 = (state_25862[(2)]);
var state_25862__$1 = state_25862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25862__$1,inst_25860);
} else {
if((state_val_25863 === (4))){
var inst_25845 = (state_25862[(10)]);
var inst_25850 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25845);
var state_25862__$1 = state_25862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25862__$1,(7),inst_25850);
} else {
if((state_val_25863 === (5))){
var inst_25856 = cljs.core.async.close_BANG_.call(null,out);
var state_25862__$1 = state_25862;
var statearr_25869_25884 = state_25862__$1;
(statearr_25869_25884[(2)] = inst_25856);

(statearr_25869_25884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (6))){
var inst_25858 = (state_25862[(2)]);
var state_25862__$1 = state_25862;
var statearr_25870_25885 = state_25862__$1;
(statearr_25870_25885[(2)] = inst_25858);

(statearr_25870_25885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25863 === (7))){
var inst_25846 = (state_25862[(11)]);
var inst_25852 = (state_25862[(2)]);
var inst_25853 = cljs.core.async.put_BANG_.call(null,out,inst_25852);
var inst_25842 = inst_25846;
var state_25862__$1 = (function (){var statearr_25871 = state_25862;
(statearr_25871[(12)] = inst_25853);

(statearr_25871[(7)] = inst_25842);

return statearr_25871;
})();
var statearr_25872_25886 = state_25862__$1;
(statearr_25872_25886[(2)] = null);

(statearr_25872_25886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__21065__auto___25880,out))
;
return ((function (switch__21003__auto__,c__21065__auto___25880,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21004__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21004__auto____0 = (function (){
var statearr_25876 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25876[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21004__auto__);

(statearr_25876[(1)] = (1));

return statearr_25876;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21004__auto____1 = (function (state_25862){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_25862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e25877){if((e25877 instanceof Object)){
var ex__21007__auto__ = e25877;
var statearr_25878_25887 = state_25862;
(statearr_25878_25887[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25888 = state_25862;
state_25862 = G__25888;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21004__auto__ = function(state_25862){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21004__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21004__auto____1.call(this,state_25862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21004__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21004__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto___25880,out))
})();
var state__21067__auto__ = (function (){var statearr_25879 = f__21066__auto__.call(null);
(statearr_25879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto___25880);

return statearr_25879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto___25880,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__25889,p__25890){
var map__25893 = p__25889;
var map__25893__$1 = ((cljs.core.seq_QMARK_.call(null,map__25893))?cljs.core.apply.call(null,cljs.core.hash_map,map__25893):map__25893);
var opts = map__25893__$1;
var url_rewriter = cljs.core.get.call(null,map__25893__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__25894 = p__25890;
var map__25894__$1 = ((cljs.core.seq_QMARK_.call(null,map__25894))?cljs.core.apply.call(null,cljs.core.hash_map,map__25894):map__25894);
var file_msg = map__25894__$1;
var file = cljs.core.get.call(null,map__25894__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25895){
var map__25898 = p__25895;
var map__25898__$1 = ((cljs.core.seq_QMARK_.call(null,map__25898))?cljs.core.apply.call(null,cljs.core.hash_map,map__25898):map__25898);
var eval_body__$1 = cljs.core.get.call(null,map__25898__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25898__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18047__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18047__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18047__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e25899){var e = e25899;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25904,p__25905){
var map__26107 = p__25904;
var map__26107__$1 = ((cljs.core.seq_QMARK_.call(null,map__26107))?cljs.core.apply.call(null,cljs.core.hash_map,map__26107):map__26107);
var opts = map__26107__$1;
var before_jsload = cljs.core.get.call(null,map__26107__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26107__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__26107__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__26108 = p__25905;
var map__26108__$1 = ((cljs.core.seq_QMARK_.call(null,map__26108))?cljs.core.apply.call(null,cljs.core.hash_map,map__26108):map__26108);
var msg = map__26108__$1;
var files = cljs.core.get.call(null,map__26108__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto__,map__26107,map__26107__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26108,map__26108__$1,msg,files){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto__,map__26107,map__26107__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26108,map__26108__$1,msg,files){
return (function (state_26233){
var state_val_26234 = (state_26233[(1)]);
if((state_val_26234 === (7))){
var inst_26122 = (state_26233[(7)]);
var inst_26120 = (state_26233[(8)]);
var inst_26123 = (state_26233[(9)]);
var inst_26121 = (state_26233[(10)]);
var inst_26128 = cljs.core._nth.call(null,inst_26121,inst_26123);
var inst_26129 = figwheel.client.file_reloading.eval_body.call(null,inst_26128);
var inst_26130 = (inst_26123 + (1));
var tmp26235 = inst_26122;
var tmp26236 = inst_26120;
var tmp26237 = inst_26121;
var inst_26120__$1 = tmp26236;
var inst_26121__$1 = tmp26237;
var inst_26122__$1 = tmp26235;
var inst_26123__$1 = inst_26130;
var state_26233__$1 = (function (){var statearr_26238 = state_26233;
(statearr_26238[(7)] = inst_26122__$1);

(statearr_26238[(11)] = inst_26129);

(statearr_26238[(8)] = inst_26120__$1);

(statearr_26238[(9)] = inst_26123__$1);

(statearr_26238[(10)] = inst_26121__$1);

return statearr_26238;
})();
var statearr_26239_26308 = state_26233__$1;
(statearr_26239_26308[(2)] = null);

(statearr_26239_26308[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (20))){
var inst_26166 = (state_26233[(12)]);
var inst_26172 = (state_26233[(13)]);
var inst_26169 = (state_26233[(14)]);
var inst_26165 = (state_26233[(15)]);
var inst_26170 = (state_26233[(16)]);
var inst_26175 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26177 = (function (){var all_files = inst_26165;
var files_SINGLEQUOTE_ = inst_26166;
var res_SINGLEQUOTE_ = inst_26169;
var res = inst_26170;
var files_not_loaded = inst_26172;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26166,inst_26172,inst_26169,inst_26165,inst_26170,inst_26175,state_val_26234,c__21065__auto__,map__26107,map__26107__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26108,map__26108__$1,msg,files){
return (function (p__26176){
var map__26240 = p__26176;
var map__26240__$1 = ((cljs.core.seq_QMARK_.call(null,map__26240))?cljs.core.apply.call(null,cljs.core.hash_map,map__26240):map__26240);
var namespace = cljs.core.get.call(null,map__26240__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26240__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26166,inst_26172,inst_26169,inst_26165,inst_26170,inst_26175,state_val_26234,c__21065__auto__,map__26107,map__26107__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26108,map__26108__$1,msg,files))
})();
var inst_26178 = cljs.core.map.call(null,inst_26177,inst_26170);
var inst_26179 = cljs.core.pr_str.call(null,inst_26178);
var inst_26180 = figwheel.client.utils.log.call(null,inst_26179);
var inst_26181 = (function (){var all_files = inst_26165;
var files_SINGLEQUOTE_ = inst_26166;
var res_SINGLEQUOTE_ = inst_26169;
var res = inst_26170;
var files_not_loaded = inst_26172;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26166,inst_26172,inst_26169,inst_26165,inst_26170,inst_26175,inst_26177,inst_26178,inst_26179,inst_26180,state_val_26234,c__21065__auto__,map__26107,map__26107__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26108,map__26108__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26166,inst_26172,inst_26169,inst_26165,inst_26170,inst_26175,inst_26177,inst_26178,inst_26179,inst_26180,state_val_26234,c__21065__auto__,map__26107,map__26107__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26108,map__26108__$1,msg,files))
})();
var inst_26182 = setTimeout(inst_26181,(10));
var state_26233__$1 = (function (){var statearr_26241 = state_26233;
(statearr_26241[(17)] = inst_26180);

(statearr_26241[(18)] = inst_26175);

return statearr_26241;
})();
var statearr_26242_26309 = state_26233__$1;
(statearr_26242_26309[(2)] = inst_26182);

(statearr_26242_26309[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (27))){
var inst_26192 = (state_26233[(19)]);
var state_26233__$1 = state_26233;
var statearr_26243_26310 = state_26233__$1;
(statearr_26243_26310[(2)] = inst_26192);

(statearr_26243_26310[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (1))){
var inst_26112 = (state_26233[(20)]);
var inst_26109 = before_jsload.call(null,files);
var inst_26110 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26111 = (function (){return ((function (inst_26112,inst_26109,inst_26110,state_val_26234,c__21065__auto__,map__26107,map__26107__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26108,map__26108__$1,msg,files){
return (function (p1__25900_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25900_SHARP_);
});
;})(inst_26112,inst_26109,inst_26110,state_val_26234,c__21065__auto__,map__26107,map__26107__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26108,map__26108__$1,msg,files))
})();
var inst_26112__$1 = cljs.core.filter.call(null,inst_26111,files);
var inst_26113 = cljs.core.not_empty.call(null,inst_26112__$1);
var state_26233__$1 = (function (){var statearr_26244 = state_26233;
(statearr_26244[(21)] = inst_26110);

(statearr_26244[(20)] = inst_26112__$1);

(statearr_26244[(22)] = inst_26109);

return statearr_26244;
})();
if(cljs.core.truth_(inst_26113)){
var statearr_26245_26311 = state_26233__$1;
(statearr_26245_26311[(1)] = (2));

} else {
var statearr_26246_26312 = state_26233__$1;
(statearr_26246_26312[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (24))){
var state_26233__$1 = state_26233;
var statearr_26247_26313 = state_26233__$1;
(statearr_26247_26313[(2)] = null);

(statearr_26247_26313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (4))){
var inst_26157 = (state_26233[(2)]);
var inst_26158 = (function (){return ((function (inst_26157,state_val_26234,c__21065__auto__,map__26107,map__26107__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26108,map__26108__$1,msg,files){
return (function (p1__25901_SHARP_){
var and__18047__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25901_SHARP_);
if(cljs.core.truth_(and__18047__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25901_SHARP_));
} else {
return and__18047__auto__;
}
});
;})(inst_26157,state_val_26234,c__21065__auto__,map__26107,map__26107__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26108,map__26108__$1,msg,files))
})();
var inst_26159 = cljs.core.filter.call(null,inst_26158,files);
var state_26233__$1 = (function (){var statearr_26248 = state_26233;
(statearr_26248[(23)] = inst_26157);

(statearr_26248[(24)] = inst_26159);

return statearr_26248;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_26249_26314 = state_26233__$1;
(statearr_26249_26314[(1)] = (16));

} else {
var statearr_26250_26315 = state_26233__$1;
(statearr_26250_26315[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (15))){
var inst_26147 = (state_26233[(2)]);
var state_26233__$1 = state_26233;
var statearr_26251_26316 = state_26233__$1;
(statearr_26251_26316[(2)] = inst_26147);

(statearr_26251_26316[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (21))){
var state_26233__$1 = state_26233;
var statearr_26252_26317 = state_26233__$1;
(statearr_26252_26317[(2)] = null);

(statearr_26252_26317[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (31))){
var inst_26200 = (state_26233[(25)]);
var inst_26210 = (state_26233[(2)]);
var inst_26211 = cljs.core.not_empty.call(null,inst_26200);
var state_26233__$1 = (function (){var statearr_26253 = state_26233;
(statearr_26253[(26)] = inst_26210);

return statearr_26253;
})();
if(cljs.core.truth_(inst_26211)){
var statearr_26254_26318 = state_26233__$1;
(statearr_26254_26318[(1)] = (32));

} else {
var statearr_26255_26319 = state_26233__$1;
(statearr_26255_26319[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (32))){
var inst_26200 = (state_26233[(25)]);
var inst_26213 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26200);
var inst_26214 = cljs.core.pr_str.call(null,inst_26213);
var inst_26215 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_26214)].join('');
var inst_26216 = figwheel.client.utils.log.call(null,inst_26215);
var state_26233__$1 = state_26233;
var statearr_26256_26320 = state_26233__$1;
(statearr_26256_26320[(2)] = inst_26216);

(statearr_26256_26320[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (33))){
var state_26233__$1 = state_26233;
var statearr_26257_26321 = state_26233__$1;
(statearr_26257_26321[(2)] = null);

(statearr_26257_26321[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (13))){
var inst_26133 = (state_26233[(27)]);
var inst_26137 = cljs.core.chunk_first.call(null,inst_26133);
var inst_26138 = cljs.core.chunk_rest.call(null,inst_26133);
var inst_26139 = cljs.core.count.call(null,inst_26137);
var inst_26120 = inst_26138;
var inst_26121 = inst_26137;
var inst_26122 = inst_26139;
var inst_26123 = (0);
var state_26233__$1 = (function (){var statearr_26258 = state_26233;
(statearr_26258[(7)] = inst_26122);

(statearr_26258[(8)] = inst_26120);

(statearr_26258[(9)] = inst_26123);

(statearr_26258[(10)] = inst_26121);

return statearr_26258;
})();
var statearr_26259_26322 = state_26233__$1;
(statearr_26259_26322[(2)] = null);

(statearr_26259_26322[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (22))){
var inst_26172 = (state_26233[(13)]);
var inst_26185 = (state_26233[(2)]);
var inst_26186 = cljs.core.not_empty.call(null,inst_26172);
var state_26233__$1 = (function (){var statearr_26260 = state_26233;
(statearr_26260[(28)] = inst_26185);

return statearr_26260;
})();
if(cljs.core.truth_(inst_26186)){
var statearr_26261_26323 = state_26233__$1;
(statearr_26261_26323[(1)] = (23));

} else {
var statearr_26262_26324 = state_26233__$1;
(statearr_26262_26324[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (36))){
var state_26233__$1 = state_26233;
var statearr_26263_26325 = state_26233__$1;
(statearr_26263_26325[(2)] = null);

(statearr_26263_26325[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (29))){
var inst_26199 = (state_26233[(29)]);
var inst_26204 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26199);
var inst_26205 = cljs.core.pr_str.call(null,inst_26204);
var inst_26206 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26205)].join('');
var inst_26207 = figwheel.client.utils.log.call(null,inst_26206);
var state_26233__$1 = state_26233;
var statearr_26264_26326 = state_26233__$1;
(statearr_26264_26326[(2)] = inst_26207);

(statearr_26264_26326[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (6))){
var inst_26154 = (state_26233[(2)]);
var state_26233__$1 = state_26233;
var statearr_26265_26327 = state_26233__$1;
(statearr_26265_26327[(2)] = inst_26154);

(statearr_26265_26327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (28))){
var inst_26199 = (state_26233[(29)]);
var inst_26198 = (state_26233[(2)]);
var inst_26199__$1 = cljs.core.get.call(null,inst_26198,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26200 = cljs.core.get.call(null,inst_26198,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_26201 = cljs.core.get.call(null,inst_26198,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26202 = cljs.core.not_empty.call(null,inst_26199__$1);
var state_26233__$1 = (function (){var statearr_26266 = state_26233;
(statearr_26266[(25)] = inst_26200);

(statearr_26266[(29)] = inst_26199__$1);

(statearr_26266[(30)] = inst_26201);

return statearr_26266;
})();
if(cljs.core.truth_(inst_26202)){
var statearr_26267_26328 = state_26233__$1;
(statearr_26267_26328[(1)] = (29));

} else {
var statearr_26268_26329 = state_26233__$1;
(statearr_26268_26329[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (25))){
var inst_26231 = (state_26233[(2)]);
var state_26233__$1 = state_26233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26233__$1,inst_26231);
} else {
if((state_val_26234 === (34))){
var inst_26201 = (state_26233[(30)]);
var inst_26219 = (state_26233[(2)]);
var inst_26220 = cljs.core.not_empty.call(null,inst_26201);
var state_26233__$1 = (function (){var statearr_26269 = state_26233;
(statearr_26269[(31)] = inst_26219);

return statearr_26269;
})();
if(cljs.core.truth_(inst_26220)){
var statearr_26270_26330 = state_26233__$1;
(statearr_26270_26330[(1)] = (35));

} else {
var statearr_26271_26331 = state_26233__$1;
(statearr_26271_26331[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (17))){
var inst_26159 = (state_26233[(24)]);
var state_26233__$1 = state_26233;
var statearr_26272_26332 = state_26233__$1;
(statearr_26272_26332[(2)] = inst_26159);

(statearr_26272_26332[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (3))){
var state_26233__$1 = state_26233;
var statearr_26273_26333 = state_26233__$1;
(statearr_26273_26333[(2)] = null);

(statearr_26273_26333[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (12))){
var inst_26150 = (state_26233[(2)]);
var state_26233__$1 = state_26233;
var statearr_26274_26334 = state_26233__$1;
(statearr_26274_26334[(2)] = inst_26150);

(statearr_26274_26334[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (2))){
var inst_26112 = (state_26233[(20)]);
var inst_26119 = cljs.core.seq.call(null,inst_26112);
var inst_26120 = inst_26119;
var inst_26121 = null;
var inst_26122 = (0);
var inst_26123 = (0);
var state_26233__$1 = (function (){var statearr_26275 = state_26233;
(statearr_26275[(7)] = inst_26122);

(statearr_26275[(8)] = inst_26120);

(statearr_26275[(9)] = inst_26123);

(statearr_26275[(10)] = inst_26121);

return statearr_26275;
})();
var statearr_26276_26335 = state_26233__$1;
(statearr_26276_26335[(2)] = null);

(statearr_26276_26335[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (23))){
var inst_26166 = (state_26233[(12)]);
var inst_26172 = (state_26233[(13)]);
var inst_26169 = (state_26233[(14)]);
var inst_26165 = (state_26233[(15)]);
var inst_26170 = (state_26233[(16)]);
var inst_26192 = (state_26233[(19)]);
var inst_26188 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26191 = (function (){var all_files = inst_26165;
var files_SINGLEQUOTE_ = inst_26166;
var res_SINGLEQUOTE_ = inst_26169;
var res = inst_26170;
var files_not_loaded = inst_26172;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26166,inst_26172,inst_26169,inst_26165,inst_26170,inst_26192,inst_26188,state_val_26234,c__21065__auto__,map__26107,map__26107__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26108,map__26108__$1,msg,files){
return (function (p__26190){
var map__26277 = p__26190;
var map__26277__$1 = ((cljs.core.seq_QMARK_.call(null,map__26277))?cljs.core.apply.call(null,cljs.core.hash_map,map__26277):map__26277);
var meta_data = cljs.core.get.call(null,map__26277__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26166,inst_26172,inst_26169,inst_26165,inst_26170,inst_26192,inst_26188,state_val_26234,c__21065__auto__,map__26107,map__26107__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26108,map__26108__$1,msg,files))
})();
var inst_26192__$1 = cljs.core.group_by.call(null,inst_26191,inst_26172);
var inst_26193 = cljs.core.seq_QMARK_.call(null,inst_26192__$1);
var state_26233__$1 = (function (){var statearr_26278 = state_26233;
(statearr_26278[(19)] = inst_26192__$1);

(statearr_26278[(32)] = inst_26188);

return statearr_26278;
})();
if(inst_26193){
var statearr_26279_26336 = state_26233__$1;
(statearr_26279_26336[(1)] = (26));

} else {
var statearr_26280_26337 = state_26233__$1;
(statearr_26280_26337[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (35))){
var inst_26201 = (state_26233[(30)]);
var inst_26222 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26201);
var inst_26223 = cljs.core.pr_str.call(null,inst_26222);
var inst_26224 = [cljs.core.str("not required: "),cljs.core.str(inst_26223)].join('');
var inst_26225 = figwheel.client.utils.log.call(null,inst_26224);
var state_26233__$1 = state_26233;
var statearr_26281_26338 = state_26233__$1;
(statearr_26281_26338[(2)] = inst_26225);

(statearr_26281_26338[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (19))){
var inst_26166 = (state_26233[(12)]);
var inst_26169 = (state_26233[(14)]);
var inst_26165 = (state_26233[(15)]);
var inst_26170 = (state_26233[(16)]);
var inst_26169__$1 = (state_26233[(2)]);
var inst_26170__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26169__$1);
var inst_26171 = (function (){var all_files = inst_26165;
var files_SINGLEQUOTE_ = inst_26166;
var res_SINGLEQUOTE_ = inst_26169__$1;
var res = inst_26170__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_26166,inst_26169,inst_26165,inst_26170,inst_26169__$1,inst_26170__$1,state_val_26234,c__21065__auto__,map__26107,map__26107__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26108,map__26108__$1,msg,files){
return (function (p1__25903_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25903_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_26166,inst_26169,inst_26165,inst_26170,inst_26169__$1,inst_26170__$1,state_val_26234,c__21065__auto__,map__26107,map__26107__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26108,map__26108__$1,msg,files))
})();
var inst_26172 = cljs.core.filter.call(null,inst_26171,inst_26169__$1);
var inst_26173 = cljs.core.not_empty.call(null,inst_26170__$1);
var state_26233__$1 = (function (){var statearr_26282 = state_26233;
(statearr_26282[(13)] = inst_26172);

(statearr_26282[(14)] = inst_26169__$1);

(statearr_26282[(16)] = inst_26170__$1);

return statearr_26282;
})();
if(cljs.core.truth_(inst_26173)){
var statearr_26283_26339 = state_26233__$1;
(statearr_26283_26339[(1)] = (20));

} else {
var statearr_26284_26340 = state_26233__$1;
(statearr_26284_26340[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (11))){
var state_26233__$1 = state_26233;
var statearr_26285_26341 = state_26233__$1;
(statearr_26285_26341[(2)] = null);

(statearr_26285_26341[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (9))){
var inst_26152 = (state_26233[(2)]);
var state_26233__$1 = state_26233;
var statearr_26286_26342 = state_26233__$1;
(statearr_26286_26342[(2)] = inst_26152);

(statearr_26286_26342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (5))){
var inst_26122 = (state_26233[(7)]);
var inst_26123 = (state_26233[(9)]);
var inst_26125 = (inst_26123 < inst_26122);
var inst_26126 = inst_26125;
var state_26233__$1 = state_26233;
if(cljs.core.truth_(inst_26126)){
var statearr_26287_26343 = state_26233__$1;
(statearr_26287_26343[(1)] = (7));

} else {
var statearr_26288_26344 = state_26233__$1;
(statearr_26288_26344[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (14))){
var inst_26133 = (state_26233[(27)]);
var inst_26142 = cljs.core.first.call(null,inst_26133);
var inst_26143 = figwheel.client.file_reloading.eval_body.call(null,inst_26142);
var inst_26144 = cljs.core.next.call(null,inst_26133);
var inst_26120 = inst_26144;
var inst_26121 = null;
var inst_26122 = (0);
var inst_26123 = (0);
var state_26233__$1 = (function (){var statearr_26289 = state_26233;
(statearr_26289[(7)] = inst_26122);

(statearr_26289[(8)] = inst_26120);

(statearr_26289[(33)] = inst_26143);

(statearr_26289[(9)] = inst_26123);

(statearr_26289[(10)] = inst_26121);

return statearr_26289;
})();
var statearr_26290_26345 = state_26233__$1;
(statearr_26290_26345[(2)] = null);

(statearr_26290_26345[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (26))){
var inst_26192 = (state_26233[(19)]);
var inst_26195 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26192);
var state_26233__$1 = state_26233;
var statearr_26291_26346 = state_26233__$1;
(statearr_26291_26346[(2)] = inst_26195);

(statearr_26291_26346[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (16))){
var inst_26159 = (state_26233[(24)]);
var inst_26161 = (function (){var all_files = inst_26159;
return ((function (all_files,inst_26159,state_val_26234,c__21065__auto__,map__26107,map__26107__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26108,map__26108__$1,msg,files){
return (function (p1__25902_SHARP_){
return cljs.core.update_in.call(null,p1__25902_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_26159,state_val_26234,c__21065__auto__,map__26107,map__26107__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26108,map__26108__$1,msg,files))
})();
var inst_26162 = cljs.core.map.call(null,inst_26161,inst_26159);
var state_26233__$1 = state_26233;
var statearr_26292_26347 = state_26233__$1;
(statearr_26292_26347[(2)] = inst_26162);

(statearr_26292_26347[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (30))){
var state_26233__$1 = state_26233;
var statearr_26293_26348 = state_26233__$1;
(statearr_26293_26348[(2)] = null);

(statearr_26293_26348[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (10))){
var inst_26133 = (state_26233[(27)]);
var inst_26135 = cljs.core.chunked_seq_QMARK_.call(null,inst_26133);
var state_26233__$1 = state_26233;
if(inst_26135){
var statearr_26294_26349 = state_26233__$1;
(statearr_26294_26349[(1)] = (13));

} else {
var statearr_26295_26350 = state_26233__$1;
(statearr_26295_26350[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (18))){
var inst_26166 = (state_26233[(12)]);
var inst_26165 = (state_26233[(15)]);
var inst_26165__$1 = (state_26233[(2)]);
var inst_26166__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_26165__$1);
var inst_26167 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26166__$1);
var state_26233__$1 = (function (){var statearr_26296 = state_26233;
(statearr_26296[(12)] = inst_26166__$1);

(statearr_26296[(15)] = inst_26165__$1);

return statearr_26296;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26233__$1,(19),inst_26167);
} else {
if((state_val_26234 === (37))){
var inst_26228 = (state_26233[(2)]);
var state_26233__$1 = state_26233;
var statearr_26297_26351 = state_26233__$1;
(statearr_26297_26351[(2)] = inst_26228);

(statearr_26297_26351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (8))){
var inst_26120 = (state_26233[(8)]);
var inst_26133 = (state_26233[(27)]);
var inst_26133__$1 = cljs.core.seq.call(null,inst_26120);
var state_26233__$1 = (function (){var statearr_26298 = state_26233;
(statearr_26298[(27)] = inst_26133__$1);

return statearr_26298;
})();
if(inst_26133__$1){
var statearr_26299_26352 = state_26233__$1;
(statearr_26299_26352[(1)] = (10));

} else {
var statearr_26300_26353 = state_26233__$1;
(statearr_26300_26353[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21065__auto__,map__26107,map__26107__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26108,map__26108__$1,msg,files))
;
return ((function (switch__21003__auto__,c__21065__auto__,map__26107,map__26107__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26108,map__26108__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21004__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21004__auto____0 = (function (){
var statearr_26304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26304[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21004__auto__);

(statearr_26304[(1)] = (1));

return statearr_26304;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21004__auto____1 = (function (state_26233){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_26233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e26305){if((e26305 instanceof Object)){
var ex__21007__auto__ = e26305;
var statearr_26306_26354 = state_26233;
(statearr_26306_26354[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26355 = state_26233;
state_26233 = G__26355;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21004__auto__ = function(state_26233){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21004__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21004__auto____1.call(this,state_26233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21004__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21004__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto__,map__26107,map__26107__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26108,map__26108__$1,msg,files))
})();
var state__21067__auto__ = (function (){var statearr_26307 = f__21066__auto__.call(null);
(statearr_26307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto__);

return statearr_26307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto__,map__26107,map__26107__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26108,map__26108__$1,msg,files))
);

return c__21065__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26358,link){
var map__26360 = p__26358;
var map__26360__$1 = ((cljs.core.seq_QMARK_.call(null,map__26360))?cljs.core.apply.call(null,cljs.core.hash_map,map__26360):map__26360);
var file = cljs.core.get.call(null,map__26360__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__26360,map__26360__$1,file){
return (function (p1__26356_SHARP_,p2__26357_SHARP_){
if(cljs.core._EQ_.call(null,p1__26356_SHARP_,p2__26357_SHARP_)){
return p1__26356_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__26360,map__26360__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26364){
var map__26365 = p__26364;
var map__26365__$1 = ((cljs.core.seq_QMARK_.call(null,map__26365))?cljs.core.apply.call(null,cljs.core.hash_map,map__26365):map__26365);
var match_length = cljs.core.get.call(null,map__26365__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26365__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26361_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26361_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__26367 = arguments.length;
switch (G__26367) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26369){
var map__26371 = p__26369;
var map__26371__$1 = ((cljs.core.seq_QMARK_.call(null,map__26371))?cljs.core.apply.call(null,cljs.core.hash_map,map__26371):map__26371);
var f_data = map__26371__$1;
var file = cljs.core.get.call(null,map__26371__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__26371__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4421__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4421__auto__)){
var link = temp__4421__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18059__auto__ = request_url;
if(cljs.core.truth_(or__18059__auto__)){
return or__18059__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26372,files_msg){
var map__26394 = p__26372;
var map__26394__$1 = ((cljs.core.seq_QMARK_.call(null,map__26394))?cljs.core.apply.call(null,cljs.core.hash_map,map__26394):map__26394);
var opts = map__26394__$1;
var on_cssload = cljs.core.get.call(null,map__26394__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26395_26415 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26396_26416 = null;
var count__26397_26417 = (0);
var i__26398_26418 = (0);
while(true){
if((i__26398_26418 < count__26397_26417)){
var f_26419 = cljs.core._nth.call(null,chunk__26396_26416,i__26398_26418);
figwheel.client.file_reloading.reload_css_file.call(null,f_26419);

var G__26420 = seq__26395_26415;
var G__26421 = chunk__26396_26416;
var G__26422 = count__26397_26417;
var G__26423 = (i__26398_26418 + (1));
seq__26395_26415 = G__26420;
chunk__26396_26416 = G__26421;
count__26397_26417 = G__26422;
i__26398_26418 = G__26423;
continue;
} else {
var temp__4423__auto___26424 = cljs.core.seq.call(null,seq__26395_26415);
if(temp__4423__auto___26424){
var seq__26395_26425__$1 = temp__4423__auto___26424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26395_26425__$1)){
var c__18844__auto___26426 = cljs.core.chunk_first.call(null,seq__26395_26425__$1);
var G__26427 = cljs.core.chunk_rest.call(null,seq__26395_26425__$1);
var G__26428 = c__18844__auto___26426;
var G__26429 = cljs.core.count.call(null,c__18844__auto___26426);
var G__26430 = (0);
seq__26395_26415 = G__26427;
chunk__26396_26416 = G__26428;
count__26397_26417 = G__26429;
i__26398_26418 = G__26430;
continue;
} else {
var f_26431 = cljs.core.first.call(null,seq__26395_26425__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26431);

var G__26432 = cljs.core.next.call(null,seq__26395_26425__$1);
var G__26433 = null;
var G__26434 = (0);
var G__26435 = (0);
seq__26395_26415 = G__26432;
chunk__26396_26416 = G__26433;
count__26397_26417 = G__26434;
i__26398_26418 = G__26435;
continue;
}
} else {
}
}
break;
}

var c__21065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto__,map__26394,map__26394__$1,opts,on_cssload){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto__,map__26394,map__26394__$1,opts,on_cssload){
return (function (state_26405){
var state_val_26406 = (state_26405[(1)]);
if((state_val_26406 === (1))){
var inst_26399 = cljs.core.async.timeout.call(null,(100));
var state_26405__$1 = state_26405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26405__$1,(2),inst_26399);
} else {
if((state_val_26406 === (2))){
var inst_26401 = (state_26405[(2)]);
var inst_26402 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_26403 = on_cssload.call(null,inst_26402);
var state_26405__$1 = (function (){var statearr_26407 = state_26405;
(statearr_26407[(7)] = inst_26401);

return statearr_26407;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26405__$1,inst_26403);
} else {
return null;
}
}
});})(c__21065__auto__,map__26394,map__26394__$1,opts,on_cssload))
;
return ((function (switch__21003__auto__,c__21065__auto__,map__26394,map__26394__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21004__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21004__auto____0 = (function (){
var statearr_26411 = [null,null,null,null,null,null,null,null];
(statearr_26411[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21004__auto__);

(statearr_26411[(1)] = (1));

return statearr_26411;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21004__auto____1 = (function (state_26405){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_26405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e26412){if((e26412 instanceof Object)){
var ex__21007__auto__ = e26412;
var statearr_26413_26436 = state_26405;
(statearr_26413_26436[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26437 = state_26405;
state_26405 = G__26437;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21004__auto__ = function(state_26405){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21004__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21004__auto____1.call(this,state_26405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21004__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21004__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto__,map__26394,map__26394__$1,opts,on_cssload))
})();
var state__21067__auto__ = (function (){var statearr_26414 = f__21066__auto__.call(null);
(statearr_26414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto__);

return statearr_26414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto__,map__26394,map__26394__$1,opts,on_cssload))
);

return c__21065__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map