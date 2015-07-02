// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24676__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24677__i = 0, G__24677__a = new Array(arguments.length -  0);
while (G__24677__i < G__24677__a.length) {G__24677__a[G__24677__i] = arguments[G__24677__i + 0]; ++G__24677__i;}
  args = new cljs.core.IndexedSeq(G__24677__a,0);
} 
return G__24676__delegate.call(this,args);};
G__24676.cljs$lang$maxFixedArity = 0;
G__24676.cljs$lang$applyTo = (function (arglist__24678){
var args = cljs.core.seq(arglist__24678);
return G__24676__delegate(args);
});
G__24676.cljs$core$IFn$_invoke$arity$variadic = G__24676__delegate;
return G__24676;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24679){
var map__24681 = p__24679;
var map__24681__$1 = ((cljs.core.seq_QMARK_.call(null,map__24681))?cljs.core.apply.call(null,cljs.core.hash_map,map__24681):map__24681);
var message = cljs.core.get.call(null,map__24681__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24681__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18059__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18059__auto__)){
return or__18059__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18047__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18047__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18047__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21065__auto___24810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto___24810,ch){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto___24810,ch){
return (function (state_24784){
var state_val_24785 = (state_24784[(1)]);
if((state_val_24785 === (7))){
var inst_24780 = (state_24784[(2)]);
var state_24784__$1 = state_24784;
var statearr_24786_24811 = state_24784__$1;
(statearr_24786_24811[(2)] = inst_24780);

(statearr_24786_24811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24785 === (1))){
var state_24784__$1 = state_24784;
var statearr_24787_24812 = state_24784__$1;
(statearr_24787_24812[(2)] = null);

(statearr_24787_24812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24785 === (4))){
var inst_24748 = (state_24784[(7)]);
var inst_24748__$1 = (state_24784[(2)]);
var state_24784__$1 = (function (){var statearr_24788 = state_24784;
(statearr_24788[(7)] = inst_24748__$1);

return statearr_24788;
})();
if(cljs.core.truth_(inst_24748__$1)){
var statearr_24789_24813 = state_24784__$1;
(statearr_24789_24813[(1)] = (5));

} else {
var statearr_24790_24814 = state_24784__$1;
(statearr_24790_24814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24785 === (13))){
var state_24784__$1 = state_24784;
var statearr_24791_24815 = state_24784__$1;
(statearr_24791_24815[(2)] = null);

(statearr_24791_24815[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24785 === (6))){
var state_24784__$1 = state_24784;
var statearr_24792_24816 = state_24784__$1;
(statearr_24792_24816[(2)] = null);

(statearr_24792_24816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24785 === (3))){
var inst_24782 = (state_24784[(2)]);
var state_24784__$1 = state_24784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24784__$1,inst_24782);
} else {
if((state_val_24785 === (12))){
var inst_24755 = (state_24784[(8)]);
var inst_24768 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24755);
var inst_24769 = cljs.core.first.call(null,inst_24768);
var inst_24770 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24769);
var inst_24771 = console.warn("Figwheel: Not loading code with warnings - ",inst_24770);
var state_24784__$1 = state_24784;
var statearr_24793_24817 = state_24784__$1;
(statearr_24793_24817[(2)] = inst_24771);

(statearr_24793_24817[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24785 === (2))){
var state_24784__$1 = state_24784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24784__$1,(4),ch);
} else {
if((state_val_24785 === (11))){
var inst_24764 = (state_24784[(2)]);
var state_24784__$1 = state_24784;
var statearr_24794_24818 = state_24784__$1;
(statearr_24794_24818[(2)] = inst_24764);

(statearr_24794_24818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24785 === (9))){
var inst_24754 = (state_24784[(9)]);
var inst_24766 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24754,opts);
var state_24784__$1 = state_24784;
if(cljs.core.truth_(inst_24766)){
var statearr_24795_24819 = state_24784__$1;
(statearr_24795_24819[(1)] = (12));

} else {
var statearr_24796_24820 = state_24784__$1;
(statearr_24796_24820[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24785 === (5))){
var inst_24748 = (state_24784[(7)]);
var inst_24754 = (state_24784[(9)]);
var inst_24750 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24751 = (new cljs.core.PersistentArrayMap(null,2,inst_24750,null));
var inst_24752 = (new cljs.core.PersistentHashSet(null,inst_24751,null));
var inst_24753 = figwheel.client.focus_msgs.call(null,inst_24752,inst_24748);
var inst_24754__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24753);
var inst_24755 = cljs.core.first.call(null,inst_24753);
var inst_24756 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24754__$1,opts);
var state_24784__$1 = (function (){var statearr_24797 = state_24784;
(statearr_24797[(8)] = inst_24755);

(statearr_24797[(9)] = inst_24754__$1);

return statearr_24797;
})();
if(cljs.core.truth_(inst_24756)){
var statearr_24798_24821 = state_24784__$1;
(statearr_24798_24821[(1)] = (8));

} else {
var statearr_24799_24822 = state_24784__$1;
(statearr_24799_24822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24785 === (14))){
var inst_24774 = (state_24784[(2)]);
var state_24784__$1 = state_24784;
var statearr_24800_24823 = state_24784__$1;
(statearr_24800_24823[(2)] = inst_24774);

(statearr_24800_24823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24785 === (10))){
var inst_24776 = (state_24784[(2)]);
var state_24784__$1 = (function (){var statearr_24801 = state_24784;
(statearr_24801[(10)] = inst_24776);

return statearr_24801;
})();
var statearr_24802_24824 = state_24784__$1;
(statearr_24802_24824[(2)] = null);

(statearr_24802_24824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24785 === (8))){
var inst_24755 = (state_24784[(8)]);
var inst_24758 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24759 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24755);
var inst_24760 = cljs.core.async.timeout.call(null,(1000));
var inst_24761 = [inst_24759,inst_24760];
var inst_24762 = (new cljs.core.PersistentVector(null,2,(5),inst_24758,inst_24761,null));
var state_24784__$1 = state_24784;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24784__$1,(11),inst_24762);
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
});})(c__21065__auto___24810,ch))
;
return ((function (switch__21003__auto__,c__21065__auto___24810,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21004__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21004__auto____0 = (function (){
var statearr_24806 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24806[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21004__auto__);

(statearr_24806[(1)] = (1));

return statearr_24806;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21004__auto____1 = (function (state_24784){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_24784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e24807){if((e24807 instanceof Object)){
var ex__21007__auto__ = e24807;
var statearr_24808_24825 = state_24784;
(statearr_24808_24825[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24826 = state_24784;
state_24784 = G__24826;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21004__auto__ = function(state_24784){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21004__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21004__auto____1.call(this,state_24784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21004__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21004__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto___24810,ch))
})();
var state__21067__auto__ = (function (){var statearr_24809 = f__21066__auto__.call(null);
(statearr_24809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto___24810);

return statearr_24809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto___24810,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24827_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24827_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_24834 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24834){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_24832 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24833 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24832,_STAR_print_newline_STAR_24833,base_path_24834){
return (function() { 
var G__24835__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24835 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24836__i = 0, G__24836__a = new Array(arguments.length -  0);
while (G__24836__i < G__24836__a.length) {G__24836__a[G__24836__i] = arguments[G__24836__i + 0]; ++G__24836__i;}
  args = new cljs.core.IndexedSeq(G__24836__a,0);
} 
return G__24835__delegate.call(this,args);};
G__24835.cljs$lang$maxFixedArity = 0;
G__24835.cljs$lang$applyTo = (function (arglist__24837){
var args = cljs.core.seq(arglist__24837);
return G__24835__delegate(args);
});
G__24835.cljs$core$IFn$_invoke$arity$variadic = G__24835__delegate;
return G__24835;
})()
;})(_STAR_print_fn_STAR_24832,_STAR_print_newline_STAR_24833,base_path_24834))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24833;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24832;
}}catch (e24831){if((e24831 instanceof Error)){
var e = e24831;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24834], null));
} else {
var e = e24831;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24834))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24838){
var map__24843 = p__24838;
var map__24843__$1 = ((cljs.core.seq_QMARK_.call(null,map__24843))?cljs.core.apply.call(null,cljs.core.hash_map,map__24843):map__24843);
var opts = map__24843__$1;
var build_id = cljs.core.get.call(null,map__24843__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24843,map__24843__$1,opts,build_id){
return (function (p__24844){
var vec__24845 = p__24844;
var map__24846 = cljs.core.nth.call(null,vec__24845,(0),null);
var map__24846__$1 = ((cljs.core.seq_QMARK_.call(null,map__24846))?cljs.core.apply.call(null,cljs.core.hash_map,map__24846):map__24846);
var msg = map__24846__$1;
var msg_name = cljs.core.get.call(null,map__24846__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24845,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__24845,map__24846,map__24846__$1,msg,msg_name,_,map__24843,map__24843__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24845,map__24846,map__24846__$1,msg,msg_name,_,map__24843,map__24843__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24843,map__24843__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24850){
var vec__24851 = p__24850;
var map__24852 = cljs.core.nth.call(null,vec__24851,(0),null);
var map__24852__$1 = ((cljs.core.seq_QMARK_.call(null,map__24852))?cljs.core.apply.call(null,cljs.core.hash_map,map__24852):map__24852);
var msg = map__24852__$1;
var msg_name = cljs.core.get.call(null,map__24852__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24851,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24853){
var map__24861 = p__24853;
var map__24861__$1 = ((cljs.core.seq_QMARK_.call(null,map__24861))?cljs.core.apply.call(null,cljs.core.hash_map,map__24861):map__24861);
var on_compile_warning = cljs.core.get.call(null,map__24861__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24861__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24861,map__24861__$1,on_compile_warning,on_compile_fail){
return (function (p__24862){
var vec__24863 = p__24862;
var map__24864 = cljs.core.nth.call(null,vec__24863,(0),null);
var map__24864__$1 = ((cljs.core.seq_QMARK_.call(null,map__24864))?cljs.core.apply.call(null,cljs.core.hash_map,map__24864):map__24864);
var msg = map__24864__$1;
var msg_name = cljs.core.get.call(null,map__24864__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24863,(1));
var pred__24865 = cljs.core._EQ_;
var expr__24866 = msg_name;
if(cljs.core.truth_(pred__24865.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24866))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24865.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24866))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24861,map__24861__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto__,msg_hist,msg_names,msg){
return (function (state_25067){
var state_val_25068 = (state_25067[(1)]);
if((state_val_25068 === (7))){
var inst_25001 = (state_25067[(2)]);
var state_25067__$1 = state_25067;
var statearr_25069_25110 = state_25067__$1;
(statearr_25069_25110[(2)] = inst_25001);

(statearr_25069_25110[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (20))){
var inst_25029 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25067__$1 = state_25067;
if(cljs.core.truth_(inst_25029)){
var statearr_25070_25111 = state_25067__$1;
(statearr_25070_25111[(1)] = (22));

} else {
var statearr_25071_25112 = state_25067__$1;
(statearr_25071_25112[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (27))){
var inst_25041 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25042 = figwheel.client.heads_up.display_warning.call(null,inst_25041);
var state_25067__$1 = state_25067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25067__$1,(30),inst_25042);
} else {
if((state_val_25068 === (1))){
var inst_24989 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25067__$1 = state_25067;
if(cljs.core.truth_(inst_24989)){
var statearr_25072_25113 = state_25067__$1;
(statearr_25072_25113[(1)] = (2));

} else {
var statearr_25073_25114 = state_25067__$1;
(statearr_25073_25114[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (24))){
var inst_25057 = (state_25067[(2)]);
var state_25067__$1 = state_25067;
var statearr_25074_25115 = state_25067__$1;
(statearr_25074_25115[(2)] = inst_25057);

(statearr_25074_25115[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (4))){
var inst_25065 = (state_25067[(2)]);
var state_25067__$1 = state_25067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25067__$1,inst_25065);
} else {
if((state_val_25068 === (15))){
var inst_25017 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25018 = figwheel.client.format_messages.call(null,inst_25017);
var inst_25019 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25020 = figwheel.client.heads_up.display_error.call(null,inst_25018,inst_25019);
var state_25067__$1 = state_25067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25067__$1,(18),inst_25020);
} else {
if((state_val_25068 === (21))){
var inst_25059 = (state_25067[(2)]);
var state_25067__$1 = state_25067;
var statearr_25075_25116 = state_25067__$1;
(statearr_25075_25116[(2)] = inst_25059);

(statearr_25075_25116[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (31))){
var inst_25048 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25067__$1 = state_25067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25067__$1,(34),inst_25048);
} else {
if((state_val_25068 === (32))){
var state_25067__$1 = state_25067;
var statearr_25076_25117 = state_25067__$1;
(statearr_25076_25117[(2)] = null);

(statearr_25076_25117[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (33))){
var inst_25053 = (state_25067[(2)]);
var state_25067__$1 = state_25067;
var statearr_25077_25118 = state_25067__$1;
(statearr_25077_25118[(2)] = inst_25053);

(statearr_25077_25118[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (13))){
var inst_25007 = (state_25067[(2)]);
var inst_25008 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25009 = figwheel.client.format_messages.call(null,inst_25008);
var inst_25010 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25011 = figwheel.client.heads_up.display_error.call(null,inst_25009,inst_25010);
var state_25067__$1 = (function (){var statearr_25078 = state_25067;
(statearr_25078[(7)] = inst_25007);

return statearr_25078;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25067__$1,(14),inst_25011);
} else {
if((state_val_25068 === (22))){
var inst_25031 = figwheel.client.heads_up.clear.call(null);
var state_25067__$1 = state_25067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25067__$1,(25),inst_25031);
} else {
if((state_val_25068 === (29))){
var inst_25055 = (state_25067[(2)]);
var state_25067__$1 = state_25067;
var statearr_25079_25119 = state_25067__$1;
(statearr_25079_25119[(2)] = inst_25055);

(statearr_25079_25119[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (6))){
var inst_24997 = figwheel.client.heads_up.clear.call(null);
var state_25067__$1 = state_25067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25067__$1,(9),inst_24997);
} else {
if((state_val_25068 === (28))){
var inst_25046 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25067__$1 = state_25067;
if(cljs.core.truth_(inst_25046)){
var statearr_25080_25120 = state_25067__$1;
(statearr_25080_25120[(1)] = (31));

} else {
var statearr_25081_25121 = state_25067__$1;
(statearr_25081_25121[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (25))){
var inst_25033 = (state_25067[(2)]);
var inst_25034 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25035 = figwheel.client.heads_up.display_warning.call(null,inst_25034);
var state_25067__$1 = (function (){var statearr_25082 = state_25067;
(statearr_25082[(8)] = inst_25033);

return statearr_25082;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25067__$1,(26),inst_25035);
} else {
if((state_val_25068 === (34))){
var inst_25050 = (state_25067[(2)]);
var state_25067__$1 = state_25067;
var statearr_25083_25122 = state_25067__$1;
(statearr_25083_25122[(2)] = inst_25050);

(statearr_25083_25122[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (17))){
var inst_25061 = (state_25067[(2)]);
var state_25067__$1 = state_25067;
var statearr_25084_25123 = state_25067__$1;
(statearr_25084_25123[(2)] = inst_25061);

(statearr_25084_25123[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (3))){
var inst_25003 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25067__$1 = state_25067;
if(cljs.core.truth_(inst_25003)){
var statearr_25085_25124 = state_25067__$1;
(statearr_25085_25124[(1)] = (10));

} else {
var statearr_25086_25125 = state_25067__$1;
(statearr_25086_25125[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (12))){
var inst_25063 = (state_25067[(2)]);
var state_25067__$1 = state_25067;
var statearr_25087_25126 = state_25067__$1;
(statearr_25087_25126[(2)] = inst_25063);

(statearr_25087_25126[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (2))){
var inst_24991 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25067__$1 = state_25067;
if(cljs.core.truth_(inst_24991)){
var statearr_25088_25127 = state_25067__$1;
(statearr_25088_25127[(1)] = (5));

} else {
var statearr_25089_25128 = state_25067__$1;
(statearr_25089_25128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (23))){
var inst_25039 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25067__$1 = state_25067;
if(cljs.core.truth_(inst_25039)){
var statearr_25090_25129 = state_25067__$1;
(statearr_25090_25129[(1)] = (27));

} else {
var statearr_25091_25130 = state_25067__$1;
(statearr_25091_25130[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (19))){
var inst_25026 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25027 = figwheel.client.heads_up.append_message.call(null,inst_25026);
var state_25067__$1 = state_25067;
var statearr_25092_25131 = state_25067__$1;
(statearr_25092_25131[(2)] = inst_25027);

(statearr_25092_25131[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (11))){
var inst_25015 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25067__$1 = state_25067;
if(cljs.core.truth_(inst_25015)){
var statearr_25093_25132 = state_25067__$1;
(statearr_25093_25132[(1)] = (15));

} else {
var statearr_25094_25133 = state_25067__$1;
(statearr_25094_25133[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (9))){
var inst_24999 = (state_25067[(2)]);
var state_25067__$1 = state_25067;
var statearr_25095_25134 = state_25067__$1;
(statearr_25095_25134[(2)] = inst_24999);

(statearr_25095_25134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (5))){
var inst_24993 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25067__$1 = state_25067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25067__$1,(8),inst_24993);
} else {
if((state_val_25068 === (14))){
var inst_25013 = (state_25067[(2)]);
var state_25067__$1 = state_25067;
var statearr_25096_25135 = state_25067__$1;
(statearr_25096_25135[(2)] = inst_25013);

(statearr_25096_25135[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (26))){
var inst_25037 = (state_25067[(2)]);
var state_25067__$1 = state_25067;
var statearr_25097_25136 = state_25067__$1;
(statearr_25097_25136[(2)] = inst_25037);

(statearr_25097_25136[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (16))){
var inst_25024 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25067__$1 = state_25067;
if(cljs.core.truth_(inst_25024)){
var statearr_25098_25137 = state_25067__$1;
(statearr_25098_25137[(1)] = (19));

} else {
var statearr_25099_25138 = state_25067__$1;
(statearr_25099_25138[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (30))){
var inst_25044 = (state_25067[(2)]);
var state_25067__$1 = state_25067;
var statearr_25100_25139 = state_25067__$1;
(statearr_25100_25139[(2)] = inst_25044);

(statearr_25100_25139[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (10))){
var inst_25005 = figwheel.client.heads_up.clear.call(null);
var state_25067__$1 = state_25067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25067__$1,(13),inst_25005);
} else {
if((state_val_25068 === (18))){
var inst_25022 = (state_25067[(2)]);
var state_25067__$1 = state_25067;
var statearr_25101_25140 = state_25067__$1;
(statearr_25101_25140[(2)] = inst_25022);

(statearr_25101_25140[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25068 === (8))){
var inst_24995 = (state_25067[(2)]);
var state_25067__$1 = state_25067;
var statearr_25102_25141 = state_25067__$1;
(statearr_25102_25141[(2)] = inst_24995);

(statearr_25102_25141[(1)] = (7));


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
});})(c__21065__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21003__auto__,c__21065__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21004__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21004__auto____0 = (function (){
var statearr_25106 = [null,null,null,null,null,null,null,null,null];
(statearr_25106[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21004__auto__);

(statearr_25106[(1)] = (1));

return statearr_25106;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21004__auto____1 = (function (state_25067){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_25067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e25107){if((e25107 instanceof Object)){
var ex__21007__auto__ = e25107;
var statearr_25108_25142 = state_25067;
(statearr_25108_25142[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25143 = state_25067;
state_25067 = G__25143;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21004__auto__ = function(state_25067){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21004__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21004__auto____1.call(this,state_25067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21004__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21004__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto__,msg_hist,msg_names,msg))
})();
var state__21067__auto__ = (function (){var statearr_25109 = f__21066__auto__.call(null);
(statearr_25109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto__);

return statearr_25109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto__,msg_hist,msg_names,msg))
);

return c__21065__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21065__auto___25206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto___25206,ch){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto___25206,ch){
return (function (state_25189){
var state_val_25190 = (state_25189[(1)]);
if((state_val_25190 === (1))){
var state_25189__$1 = state_25189;
var statearr_25191_25207 = state_25189__$1;
(statearr_25191_25207[(2)] = null);

(statearr_25191_25207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (2))){
var state_25189__$1 = state_25189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25189__$1,(4),ch);
} else {
if((state_val_25190 === (3))){
var inst_25187 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25189__$1,inst_25187);
} else {
if((state_val_25190 === (4))){
var inst_25177 = (state_25189[(7)]);
var inst_25177__$1 = (state_25189[(2)]);
var state_25189__$1 = (function (){var statearr_25192 = state_25189;
(statearr_25192[(7)] = inst_25177__$1);

return statearr_25192;
})();
if(cljs.core.truth_(inst_25177__$1)){
var statearr_25193_25208 = state_25189__$1;
(statearr_25193_25208[(1)] = (5));

} else {
var statearr_25194_25209 = state_25189__$1;
(statearr_25194_25209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (5))){
var inst_25177 = (state_25189[(7)]);
var inst_25179 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25177);
var state_25189__$1 = state_25189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25189__$1,(8),inst_25179);
} else {
if((state_val_25190 === (6))){
var state_25189__$1 = state_25189;
var statearr_25195_25210 = state_25189__$1;
(statearr_25195_25210[(2)] = null);

(statearr_25195_25210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (7))){
var inst_25185 = (state_25189[(2)]);
var state_25189__$1 = state_25189;
var statearr_25196_25211 = state_25189__$1;
(statearr_25196_25211[(2)] = inst_25185);

(statearr_25196_25211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25190 === (8))){
var inst_25181 = (state_25189[(2)]);
var state_25189__$1 = (function (){var statearr_25197 = state_25189;
(statearr_25197[(8)] = inst_25181);

return statearr_25197;
})();
var statearr_25198_25212 = state_25189__$1;
(statearr_25198_25212[(2)] = null);

(statearr_25198_25212[(1)] = (2));


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
});})(c__21065__auto___25206,ch))
;
return ((function (switch__21003__auto__,c__21065__auto___25206,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21004__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21004__auto____0 = (function (){
var statearr_25202 = [null,null,null,null,null,null,null,null,null];
(statearr_25202[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21004__auto__);

(statearr_25202[(1)] = (1));

return statearr_25202;
});
var figwheel$client$heads_up_plugin_$_state_machine__21004__auto____1 = (function (state_25189){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_25189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e25203){if((e25203 instanceof Object)){
var ex__21007__auto__ = e25203;
var statearr_25204_25213 = state_25189;
(statearr_25204_25213[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25214 = state_25189;
state_25189 = G__25214;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21004__auto__ = function(state_25189){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21004__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21004__auto____1.call(this,state_25189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21004__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21004__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto___25206,ch))
})();
var state__21067__auto__ = (function (){var statearr_25205 = f__21066__auto__.call(null);
(statearr_25205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto___25206);

return statearr_25205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto___25206,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto__){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto__){
return (function (state_25235){
var state_val_25236 = (state_25235[(1)]);
if((state_val_25236 === (1))){
var inst_25230 = cljs.core.async.timeout.call(null,(3000));
var state_25235__$1 = state_25235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25235__$1,(2),inst_25230);
} else {
if((state_val_25236 === (2))){
var inst_25232 = (state_25235[(2)]);
var inst_25233 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25235__$1 = (function (){var statearr_25237 = state_25235;
(statearr_25237[(7)] = inst_25232);

return statearr_25237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25235__$1,inst_25233);
} else {
return null;
}
}
});})(c__21065__auto__))
;
return ((function (switch__21003__auto__,c__21065__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21004__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21004__auto____0 = (function (){
var statearr_25241 = [null,null,null,null,null,null,null,null];
(statearr_25241[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21004__auto__);

(statearr_25241[(1)] = (1));

return statearr_25241;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21004__auto____1 = (function (state_25235){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_25235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e25242){if((e25242 instanceof Object)){
var ex__21007__auto__ = e25242;
var statearr_25243_25245 = state_25235;
(statearr_25243_25245[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25246 = state_25235;
state_25235 = G__25246;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21004__auto__ = function(state_25235){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21004__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21004__auto____1.call(this,state_25235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21004__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21004__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto__))
})();
var state__21067__auto__ = (function (){var statearr_25244 = f__21066__auto__.call(null);
(statearr_25244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto__);

return statearr_25244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto__))
);

return c__21065__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25247){
var map__25253 = p__25247;
var map__25253__$1 = ((cljs.core.seq_QMARK_.call(null,map__25253))?cljs.core.apply.call(null,cljs.core.hash_map,map__25253):map__25253);
var ed = map__25253__$1;
var formatted_exception = cljs.core.get.call(null,map__25253__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25253__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25253__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25254_25258 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25255_25259 = null;
var count__25256_25260 = (0);
var i__25257_25261 = (0);
while(true){
if((i__25257_25261 < count__25256_25260)){
var msg_25262 = cljs.core._nth.call(null,chunk__25255_25259,i__25257_25261);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25262);

var G__25263 = seq__25254_25258;
var G__25264 = chunk__25255_25259;
var G__25265 = count__25256_25260;
var G__25266 = (i__25257_25261 + (1));
seq__25254_25258 = G__25263;
chunk__25255_25259 = G__25264;
count__25256_25260 = G__25265;
i__25257_25261 = G__25266;
continue;
} else {
var temp__4423__auto___25267 = cljs.core.seq.call(null,seq__25254_25258);
if(temp__4423__auto___25267){
var seq__25254_25268__$1 = temp__4423__auto___25267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25254_25268__$1)){
var c__18844__auto___25269 = cljs.core.chunk_first.call(null,seq__25254_25268__$1);
var G__25270 = cljs.core.chunk_rest.call(null,seq__25254_25268__$1);
var G__25271 = c__18844__auto___25269;
var G__25272 = cljs.core.count.call(null,c__18844__auto___25269);
var G__25273 = (0);
seq__25254_25258 = G__25270;
chunk__25255_25259 = G__25271;
count__25256_25260 = G__25272;
i__25257_25261 = G__25273;
continue;
} else {
var msg_25274 = cljs.core.first.call(null,seq__25254_25268__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25274);

var G__25275 = cljs.core.next.call(null,seq__25254_25268__$1);
var G__25276 = null;
var G__25277 = (0);
var G__25278 = (0);
seq__25254_25258 = G__25275;
chunk__25255_25259 = G__25276;
count__25256_25260 = G__25277;
i__25257_25261 = G__25278;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25279){
var map__25281 = p__25279;
var map__25281__$1 = ((cljs.core.seq_QMARK_.call(null,map__25281))?cljs.core.apply.call(null,cljs.core.hash_map,map__25281):map__25281);
var w = map__25281__$1;
var message = cljs.core.get.call(null,map__25281__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18047__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18047__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18047__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25288 = cljs.core.seq.call(null,plugins);
var chunk__25289 = null;
var count__25290 = (0);
var i__25291 = (0);
while(true){
if((i__25291 < count__25290)){
var vec__25292 = cljs.core._nth.call(null,chunk__25289,i__25291);
var k = cljs.core.nth.call(null,vec__25292,(0),null);
var plugin = cljs.core.nth.call(null,vec__25292,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25294 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25288,chunk__25289,count__25290,i__25291,pl_25294,vec__25292,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25294.call(null,msg_hist);
});})(seq__25288,chunk__25289,count__25290,i__25291,pl_25294,vec__25292,k,plugin))
);
} else {
}

var G__25295 = seq__25288;
var G__25296 = chunk__25289;
var G__25297 = count__25290;
var G__25298 = (i__25291 + (1));
seq__25288 = G__25295;
chunk__25289 = G__25296;
count__25290 = G__25297;
i__25291 = G__25298;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__25288);
if(temp__4423__auto__){
var seq__25288__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25288__$1)){
var c__18844__auto__ = cljs.core.chunk_first.call(null,seq__25288__$1);
var G__25299 = cljs.core.chunk_rest.call(null,seq__25288__$1);
var G__25300 = c__18844__auto__;
var G__25301 = cljs.core.count.call(null,c__18844__auto__);
var G__25302 = (0);
seq__25288 = G__25299;
chunk__25289 = G__25300;
count__25290 = G__25301;
i__25291 = G__25302;
continue;
} else {
var vec__25293 = cljs.core.first.call(null,seq__25288__$1);
var k = cljs.core.nth.call(null,vec__25293,(0),null);
var plugin = cljs.core.nth.call(null,vec__25293,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25303 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25288,chunk__25289,count__25290,i__25291,pl_25303,vec__25293,k,plugin,seq__25288__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25303.call(null,msg_hist);
});})(seq__25288,chunk__25289,count__25290,i__25291,pl_25303,vec__25293,k,plugin,seq__25288__$1,temp__4423__auto__))
);
} else {
}

var G__25304 = cljs.core.next.call(null,seq__25288__$1);
var G__25305 = null;
var G__25306 = (0);
var G__25307 = (0);
seq__25288 = G__25304;
chunk__25289 = G__25305;
count__25290 = G__25306;
i__25291 = G__25307;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__25309 = arguments.length;
switch (G__25309) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19099__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19099__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25312){
var map__25313 = p__25312;
var map__25313__$1 = ((cljs.core.seq_QMARK_.call(null,map__25313))?cljs.core.apply.call(null,cljs.core.hash_map,map__25313):map__25313);
var opts = map__25313__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25311){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25311));
});

//# sourceMappingURL=client.js.map