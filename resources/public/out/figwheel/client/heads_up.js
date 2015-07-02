// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19099__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19099__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__25466_25474 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__25467_25475 = null;
var count__25468_25476 = (0);
var i__25469_25477 = (0);
while(true){
if((i__25469_25477 < count__25468_25476)){
var k_25478 = cljs.core._nth.call(null,chunk__25467_25475,i__25469_25477);
e.setAttribute(cljs.core.name.call(null,k_25478),cljs.core.get.call(null,attrs,k_25478));

var G__25479 = seq__25466_25474;
var G__25480 = chunk__25467_25475;
var G__25481 = count__25468_25476;
var G__25482 = (i__25469_25477 + (1));
seq__25466_25474 = G__25479;
chunk__25467_25475 = G__25480;
count__25468_25476 = G__25481;
i__25469_25477 = G__25482;
continue;
} else {
var temp__4423__auto___25483 = cljs.core.seq.call(null,seq__25466_25474);
if(temp__4423__auto___25483){
var seq__25466_25484__$1 = temp__4423__auto___25483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25466_25484__$1)){
var c__18844__auto___25485 = cljs.core.chunk_first.call(null,seq__25466_25484__$1);
var G__25486 = cljs.core.chunk_rest.call(null,seq__25466_25484__$1);
var G__25487 = c__18844__auto___25485;
var G__25488 = cljs.core.count.call(null,c__18844__auto___25485);
var G__25489 = (0);
seq__25466_25474 = G__25486;
chunk__25467_25475 = G__25487;
count__25468_25476 = G__25488;
i__25469_25477 = G__25489;
continue;
} else {
var k_25490 = cljs.core.first.call(null,seq__25466_25484__$1);
e.setAttribute(cljs.core.name.call(null,k_25490),cljs.core.get.call(null,attrs,k_25490));

var G__25491 = cljs.core.next.call(null,seq__25466_25484__$1);
var G__25492 = null;
var G__25493 = (0);
var G__25494 = (0);
seq__25466_25474 = G__25491;
chunk__25467_25475 = G__25492;
count__25468_25476 = G__25493;
i__25469_25477 = G__25494;
continue;
}
} else {
}
}
break;
}

var seq__25470_25495 = cljs.core.seq.call(null,children);
var chunk__25471_25496 = null;
var count__25472_25497 = (0);
var i__25473_25498 = (0);
while(true){
if((i__25473_25498 < count__25472_25497)){
var ch_25499 = cljs.core._nth.call(null,chunk__25471_25496,i__25473_25498);
e.appendChild(ch_25499);

var G__25500 = seq__25470_25495;
var G__25501 = chunk__25471_25496;
var G__25502 = count__25472_25497;
var G__25503 = (i__25473_25498 + (1));
seq__25470_25495 = G__25500;
chunk__25471_25496 = G__25501;
count__25472_25497 = G__25502;
i__25473_25498 = G__25503;
continue;
} else {
var temp__4423__auto___25504 = cljs.core.seq.call(null,seq__25470_25495);
if(temp__4423__auto___25504){
var seq__25470_25505__$1 = temp__4423__auto___25504;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25470_25505__$1)){
var c__18844__auto___25506 = cljs.core.chunk_first.call(null,seq__25470_25505__$1);
var G__25507 = cljs.core.chunk_rest.call(null,seq__25470_25505__$1);
var G__25508 = c__18844__auto___25506;
var G__25509 = cljs.core.count.call(null,c__18844__auto___25506);
var G__25510 = (0);
seq__25470_25495 = G__25507;
chunk__25471_25496 = G__25508;
count__25472_25497 = G__25509;
i__25473_25498 = G__25510;
continue;
} else {
var ch_25511 = cljs.core.first.call(null,seq__25470_25505__$1);
e.appendChild(ch_25511);

var G__25512 = cljs.core.next.call(null,seq__25470_25505__$1);
var G__25513 = null;
var G__25514 = (0);
var G__25515 = (0);
seq__25470_25495 = G__25512;
chunk__25471_25496 = G__25513;
count__25472_25497 = G__25514;
i__25473_25498 = G__25515;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq25463){
var G__25464 = cljs.core.first.call(null,seq25463);
var seq25463__$1 = cljs.core.next.call(null,seq25463);
var G__25465 = cljs.core.first.call(null,seq25463__$1);
var seq25463__$2 = cljs.core.next.call(null,seq25463__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__25464,G__25465,seq25463__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__18954__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18955__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18956__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18957__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18958__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__18954__auto__,prefer_table__18955__auto__,method_cache__18956__auto__,cached_hierarchy__18957__auto__,hierarchy__18958__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__18954__auto__,prefer_table__18955__auto__,method_cache__18956__auto__,cached_hierarchy__18957__auto__,hierarchy__18958__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18958__auto__,method_table__18954__auto__,prefer_table__18955__auto__,method_cache__18956__auto__,cached_hierarchy__18957__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_25516 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_25516.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_25516.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_25516.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_25516);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__25517,st_map){
var map__25521 = p__25517;
var map__25521__$1 = ((cljs.core.seq_QMARK_.call(null,map__25521))?cljs.core.apply.call(null,cljs.core.hash_map,map__25521):map__25521);
var container_el = cljs.core.get.call(null,map__25521__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__25521,map__25521__$1,container_el){
return (function (p__25522){
var vec__25523 = p__25522;
var k = cljs.core.nth.call(null,vec__25523,(0),null);
var v = cljs.core.nth.call(null,vec__25523,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__25521,map__25521__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__25524,dom_str){
var map__25526 = p__25524;
var map__25526__$1 = ((cljs.core.seq_QMARK_.call(null,map__25526))?cljs.core.apply.call(null,cljs.core.hash_map,map__25526):map__25526);
var c = map__25526__$1;
var content_area_el = cljs.core.get.call(null,map__25526__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__25527){
var map__25529 = p__25527;
var map__25529__$1 = ((cljs.core.seq_QMARK_.call(null,map__25529))?cljs.core.apply.call(null,cljs.core.hash_map,map__25529):map__25529);
var content_area_el = cljs.core.get.call(null,map__25529__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto__){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto__){
return (function (state_25571){
var state_val_25572 = (state_25571[(1)]);
if((state_val_25572 === (1))){
var inst_25556 = (state_25571[(7)]);
var inst_25556__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25557 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25558 = ["10px","10px","100%","68px","1.0"];
var inst_25559 = cljs.core.PersistentHashMap.fromArrays(inst_25557,inst_25558);
var inst_25560 = cljs.core.merge.call(null,inst_25559,style);
var inst_25561 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25556__$1,inst_25560);
var inst_25562 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25556__$1,msg);
var inst_25563 = cljs.core.async.timeout.call(null,(300));
var state_25571__$1 = (function (){var statearr_25573 = state_25571;
(statearr_25573[(8)] = inst_25562);

(statearr_25573[(9)] = inst_25561);

(statearr_25573[(7)] = inst_25556__$1);

return statearr_25573;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25571__$1,(2),inst_25563);
} else {
if((state_val_25572 === (2))){
var inst_25556 = (state_25571[(7)]);
var inst_25565 = (state_25571[(2)]);
var inst_25566 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_25567 = ["auto"];
var inst_25568 = cljs.core.PersistentHashMap.fromArrays(inst_25566,inst_25567);
var inst_25569 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25556,inst_25568);
var state_25571__$1 = (function (){var statearr_25574 = state_25571;
(statearr_25574[(10)] = inst_25565);

return statearr_25574;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25571__$1,inst_25569);
} else {
return null;
}
}
});})(c__21065__auto__))
;
return ((function (switch__21003__auto__,c__21065__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21004__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21004__auto____0 = (function (){
var statearr_25578 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25578[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21004__auto__);

(statearr_25578[(1)] = (1));

return statearr_25578;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21004__auto____1 = (function (state_25571){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_25571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e25579){if((e25579 instanceof Object)){
var ex__21007__auto__ = e25579;
var statearr_25580_25582 = state_25571;
(statearr_25580_25582[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25583 = state_25571;
state_25571 = G__25583;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21004__auto__ = function(state_25571){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21004__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21004__auto____1.call(this,state_25571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21004__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21004__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto__))
})();
var state__21067__auto__ = (function (){var statearr_25581 = f__21066__auto__.call(null);
(statearr_25581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto__);

return statearr_25581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto__))
);

return c__21065__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4421__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4421__auto__)){
var vec__25585 = temp__4421__auto__;
var f = cljs.core.nth.call(null,vec__25585,(0),null);
var ln = cljs.core.nth.call(null,vec__25585,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__25588 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__25588,(0),null);
var file_line = cljs.core.nth.call(null,vec__25588,(1),null);
var file_column = cljs.core.nth.call(null,vec__25588,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__25588,file_name,file_line,file_column){
return (function (p1__25586_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__25586_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__25588,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18059__auto__ = file_line;
if(cljs.core.truth_(or__18059__auto__)){
return or__18059__auto__;
} else {
var and__18047__auto__ = cause;
if(cljs.core.truth_(and__18047__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18047__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__25590 = figwheel.client.heads_up.ensure_container.call(null);
var map__25590__$1 = ((cljs.core.seq_QMARK_.call(null,map__25590))?cljs.core.apply.call(null,cljs.core.hash_map,map__25590):map__25590);
var content_area_el = cljs.core.get.call(null,map__25590__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto__){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto__){
return (function (state_25637){
var state_val_25638 = (state_25637[(1)]);
if((state_val_25638 === (1))){
var inst_25620 = (state_25637[(7)]);
var inst_25620__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25621 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25622 = ["0.0"];
var inst_25623 = cljs.core.PersistentHashMap.fromArrays(inst_25621,inst_25622);
var inst_25624 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25620__$1,inst_25623);
var inst_25625 = cljs.core.async.timeout.call(null,(300));
var state_25637__$1 = (function (){var statearr_25639 = state_25637;
(statearr_25639[(8)] = inst_25624);

(statearr_25639[(7)] = inst_25620__$1);

return statearr_25639;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25637__$1,(2),inst_25625);
} else {
if((state_val_25638 === (2))){
var inst_25620 = (state_25637[(7)]);
var inst_25627 = (state_25637[(2)]);
var inst_25628 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_25629 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_25630 = cljs.core.PersistentHashMap.fromArrays(inst_25628,inst_25629);
var inst_25631 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25620,inst_25630);
var inst_25632 = cljs.core.async.timeout.call(null,(200));
var state_25637__$1 = (function (){var statearr_25640 = state_25637;
(statearr_25640[(9)] = inst_25631);

(statearr_25640[(10)] = inst_25627);

return statearr_25640;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25637__$1,(3),inst_25632);
} else {
if((state_val_25638 === (3))){
var inst_25620 = (state_25637[(7)]);
var inst_25634 = (state_25637[(2)]);
var inst_25635 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25620,"");
var state_25637__$1 = (function (){var statearr_25641 = state_25637;
(statearr_25641[(11)] = inst_25634);

return statearr_25641;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25637__$1,inst_25635);
} else {
return null;
}
}
}
});})(c__21065__auto__))
;
return ((function (switch__21003__auto__,c__21065__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21004__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21004__auto____0 = (function (){
var statearr_25645 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25645[(0)] = figwheel$client$heads_up$clear_$_state_machine__21004__auto__);

(statearr_25645[(1)] = (1));

return statearr_25645;
});
var figwheel$client$heads_up$clear_$_state_machine__21004__auto____1 = (function (state_25637){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_25637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e25646){if((e25646 instanceof Object)){
var ex__21007__auto__ = e25646;
var statearr_25647_25649 = state_25637;
(statearr_25647_25649[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25650 = state_25637;
state_25637 = G__25650;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21004__auto__ = function(state_25637){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21004__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21004__auto____1.call(this,state_25637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21004__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21004__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto__))
})();
var state__21067__auto__ = (function (){var statearr_25648 = f__21066__auto__.call(null);
(statearr_25648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto__);

return statearr_25648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto__))
);

return c__21065__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto__){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto__){
return (function (state_25682){
var state_val_25683 = (state_25682[(1)]);
if((state_val_25683 === (1))){
var inst_25672 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_25682__$1 = state_25682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25682__$1,(2),inst_25672);
} else {
if((state_val_25683 === (2))){
var inst_25674 = (state_25682[(2)]);
var inst_25675 = cljs.core.async.timeout.call(null,(400));
var state_25682__$1 = (function (){var statearr_25684 = state_25682;
(statearr_25684[(7)] = inst_25674);

return statearr_25684;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25682__$1,(3),inst_25675);
} else {
if((state_val_25683 === (3))){
var inst_25677 = (state_25682[(2)]);
var inst_25678 = figwheel.client.heads_up.clear.call(null);
var state_25682__$1 = (function (){var statearr_25685 = state_25682;
(statearr_25685[(8)] = inst_25677);

return statearr_25685;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25682__$1,(4),inst_25678);
} else {
if((state_val_25683 === (4))){
var inst_25680 = (state_25682[(2)]);
var state_25682__$1 = state_25682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25682__$1,inst_25680);
} else {
return null;
}
}
}
}
});})(c__21065__auto__))
;
return ((function (switch__21003__auto__,c__21065__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21004__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21004__auto____0 = (function (){
var statearr_25689 = [null,null,null,null,null,null,null,null,null];
(statearr_25689[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21004__auto__);

(statearr_25689[(1)] = (1));

return statearr_25689;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21004__auto____1 = (function (state_25682){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_25682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e25690){if((e25690 instanceof Object)){
var ex__21007__auto__ = e25690;
var statearr_25691_25693 = state_25682;
(statearr_25691_25693[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25694 = state_25682;
state_25682 = G__25694;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21004__auto__ = function(state_25682){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21004__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21004__auto____1.call(this,state_25682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21004__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21004__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto__))
})();
var state__21067__auto__ = (function (){var statearr_25692 = f__21066__auto__.call(null);
(statearr_25692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto__);

return statearr_25692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto__))
);

return c__21065__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map