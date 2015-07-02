// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25710_25722 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25711_25723 = null;
var count__25712_25724 = (0);
var i__25713_25725 = (0);
while(true){
if((i__25713_25725 < count__25712_25724)){
var f_25726 = cljs.core._nth.call(null,chunk__25711_25723,i__25713_25725);
cljs.core.println.call(null,"  ",f_25726);

var G__25727 = seq__25710_25722;
var G__25728 = chunk__25711_25723;
var G__25729 = count__25712_25724;
var G__25730 = (i__25713_25725 + (1));
seq__25710_25722 = G__25727;
chunk__25711_25723 = G__25728;
count__25712_25724 = G__25729;
i__25713_25725 = G__25730;
continue;
} else {
var temp__4423__auto___25731 = cljs.core.seq.call(null,seq__25710_25722);
if(temp__4423__auto___25731){
var seq__25710_25732__$1 = temp__4423__auto___25731;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25710_25732__$1)){
var c__18844__auto___25733 = cljs.core.chunk_first.call(null,seq__25710_25732__$1);
var G__25734 = cljs.core.chunk_rest.call(null,seq__25710_25732__$1);
var G__25735 = c__18844__auto___25733;
var G__25736 = cljs.core.count.call(null,c__18844__auto___25733);
var G__25737 = (0);
seq__25710_25722 = G__25734;
chunk__25711_25723 = G__25735;
count__25712_25724 = G__25736;
i__25713_25725 = G__25737;
continue;
} else {
var f_25738 = cljs.core.first.call(null,seq__25710_25732__$1);
cljs.core.println.call(null,"  ",f_25738);

var G__25739 = cljs.core.next.call(null,seq__25710_25732__$1);
var G__25740 = null;
var G__25741 = (0);
var G__25742 = (0);
seq__25710_25722 = G__25739;
chunk__25711_25723 = G__25740;
count__25712_25724 = G__25741;
i__25713_25725 = G__25742;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__18059__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18059__auto__)){
return or__18059__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25714 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25715 = null;
var count__25716 = (0);
var i__25717 = (0);
while(true){
if((i__25717 < count__25716)){
var vec__25718 = cljs.core._nth.call(null,chunk__25715,i__25717);
var name = cljs.core.nth.call(null,vec__25718,(0),null);
var map__25719 = cljs.core.nth.call(null,vec__25718,(1),null);
var map__25719__$1 = ((cljs.core.seq_QMARK_.call(null,map__25719))?cljs.core.apply.call(null,cljs.core.hash_map,map__25719):map__25719);
var doc = cljs.core.get.call(null,map__25719__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25719__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25743 = seq__25714;
var G__25744 = chunk__25715;
var G__25745 = count__25716;
var G__25746 = (i__25717 + (1));
seq__25714 = G__25743;
chunk__25715 = G__25744;
count__25716 = G__25745;
i__25717 = G__25746;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__25714);
if(temp__4423__auto__){
var seq__25714__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25714__$1)){
var c__18844__auto__ = cljs.core.chunk_first.call(null,seq__25714__$1);
var G__25747 = cljs.core.chunk_rest.call(null,seq__25714__$1);
var G__25748 = c__18844__auto__;
var G__25749 = cljs.core.count.call(null,c__18844__auto__);
var G__25750 = (0);
seq__25714 = G__25747;
chunk__25715 = G__25748;
count__25716 = G__25749;
i__25717 = G__25750;
continue;
} else {
var vec__25720 = cljs.core.first.call(null,seq__25714__$1);
var name = cljs.core.nth.call(null,vec__25720,(0),null);
var map__25721 = cljs.core.nth.call(null,vec__25720,(1),null);
var map__25721__$1 = ((cljs.core.seq_QMARK_.call(null,map__25721))?cljs.core.apply.call(null,cljs.core.hash_map,map__25721):map__25721);
var doc = cljs.core.get.call(null,map__25721__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25721__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25751 = cljs.core.next.call(null,seq__25714__$1);
var G__25752 = null;
var G__25753 = (0);
var G__25754 = (0);
seq__25714 = G__25751;
chunk__25715 = G__25752;
count__25716 = G__25753;
i__25717 = G__25754;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map