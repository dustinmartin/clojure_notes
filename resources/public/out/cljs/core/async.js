// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t26488 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26488 = (function (fn_handler,f,meta26489){
this.fn_handler = fn_handler;
this.f = f;
this.meta26489 = meta26489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26490,meta26489__$1){
var self__ = this;
var _26490__$1 = this;
return (new cljs.core.async.t26488(self__.fn_handler,self__.f,meta26489__$1));
});

cljs.core.async.t26488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26490){
var self__ = this;
var _26490__$1 = this;
return self__.meta26489;
});

cljs.core.async.t26488.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26488.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26488.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26488.cljs$lang$type = true;

cljs.core.async.t26488.cljs$lang$ctorStr = "cljs.core.async/t26488";

cljs.core.async.t26488.cljs$lang$ctorPrWriter = (function (this__18638__auto__,writer__18639__auto__,opt__18640__auto__){
return cljs.core._write.call(null,writer__18639__auto__,"cljs.core.async/t26488");
});

cljs.core.async.__GT_t26488 = (function cljs$core$async$fn_handler_$___GT_t26488(fn_handler__$1,f__$1,meta26489){
return (new cljs.core.async.t26488(fn_handler__$1,f__$1,meta26489));
});

}

return (new cljs.core.async.t26488(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__26492 = buff;
if(G__26492){
var bit__18733__auto__ = null;
if(cljs.core.truth_((function (){var or__18059__auto__ = bit__18733__auto__;
if(cljs.core.truth_(or__18059__auto__)){
return or__18059__auto__;
} else {
return G__26492.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26492.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26492);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26492);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__26494 = arguments.length;
switch (G__26494) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__26497 = arguments.length;
switch (G__26497) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26499 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26499);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26499,ret){
return (function (){
return fn1.call(null,val_26499);
});})(val_26499,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__26501 = arguments.length;
switch (G__26501) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4421__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4421__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__18944__auto___26503 = n;
var x_26504 = (0);
while(true){
if((x_26504 < n__18944__auto___26503)){
(a[x_26504] = (0));

var G__26505 = (x_26504 + (1));
x_26504 = G__26505;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26506 = (i + (1));
i = G__26506;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26510 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26510 = (function (alt_flag,flag,meta26511){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26511 = meta26511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26512,meta26511__$1){
var self__ = this;
var _26512__$1 = this;
return (new cljs.core.async.t26510(self__.alt_flag,self__.flag,meta26511__$1));
});})(flag))
;

cljs.core.async.t26510.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26512){
var self__ = this;
var _26512__$1 = this;
return self__.meta26511;
});})(flag))
;

cljs.core.async.t26510.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26510.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26510.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26510.cljs$lang$type = true;

cljs.core.async.t26510.cljs$lang$ctorStr = "cljs.core.async/t26510";

cljs.core.async.t26510.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18638__auto__,writer__18639__auto__,opt__18640__auto__){
return cljs.core._write.call(null,writer__18639__auto__,"cljs.core.async/t26510");
});})(flag))
;

cljs.core.async.__GT_t26510 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t26510(alt_flag__$1,flag__$1,meta26511){
return (new cljs.core.async.t26510(alt_flag__$1,flag__$1,meta26511));
});})(flag))
;

}

return (new cljs.core.async.t26510(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t26516 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26516 = (function (alt_handler,flag,cb,meta26517){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26517 = meta26517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26518,meta26517__$1){
var self__ = this;
var _26518__$1 = this;
return (new cljs.core.async.t26516(self__.alt_handler,self__.flag,self__.cb,meta26517__$1));
});

cljs.core.async.t26516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26518){
var self__ = this;
var _26518__$1 = this;
return self__.meta26517;
});

cljs.core.async.t26516.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26516.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26516.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26516.cljs$lang$type = true;

cljs.core.async.t26516.cljs$lang$ctorStr = "cljs.core.async/t26516";

cljs.core.async.t26516.cljs$lang$ctorPrWriter = (function (this__18638__auto__,writer__18639__auto__,opt__18640__auto__){
return cljs.core._write.call(null,writer__18639__auto__,"cljs.core.async/t26516");
});

cljs.core.async.__GT_t26516 = (function cljs$core$async$alt_handler_$___GT_t26516(alt_handler__$1,flag__$1,cb__$1,meta26517){
return (new cljs.core.async.t26516(alt_handler__$1,flag__$1,cb__$1,meta26517));
});

}

return (new cljs.core.async.t26516(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26519_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26519_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26520_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26520_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18059__auto__ = wport;
if(cljs.core.truth_(or__18059__auto__)){
return or__18059__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26521 = (i + (1));
i = G__26521;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18059__auto__ = ret;
if(cljs.core.truth_(or__18059__auto__)){
return or__18059__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__18047__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18047__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18047__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19099__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19099__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26524){
var map__26525 = p__26524;
var map__26525__$1 = ((cljs.core.seq_QMARK_.call(null,map__26525))?cljs.core.apply.call(null,cljs.core.hash_map,map__26525):map__26525);
var opts = map__26525__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26522){
var G__26523 = cljs.core.first.call(null,seq26522);
var seq26522__$1 = cljs.core.next.call(null,seq26522);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26523,seq26522__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__26527 = arguments.length;
switch (G__26527) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21065__auto___26576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto___26576){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto___26576){
return (function (state_26551){
var state_val_26552 = (state_26551[(1)]);
if((state_val_26552 === (7))){
var inst_26547 = (state_26551[(2)]);
var state_26551__$1 = state_26551;
var statearr_26553_26577 = state_26551__$1;
(statearr_26553_26577[(2)] = inst_26547);

(statearr_26553_26577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26552 === (1))){
var state_26551__$1 = state_26551;
var statearr_26554_26578 = state_26551__$1;
(statearr_26554_26578[(2)] = null);

(statearr_26554_26578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26552 === (4))){
var inst_26530 = (state_26551[(7)]);
var inst_26530__$1 = (state_26551[(2)]);
var inst_26531 = (inst_26530__$1 == null);
var state_26551__$1 = (function (){var statearr_26555 = state_26551;
(statearr_26555[(7)] = inst_26530__$1);

return statearr_26555;
})();
if(cljs.core.truth_(inst_26531)){
var statearr_26556_26579 = state_26551__$1;
(statearr_26556_26579[(1)] = (5));

} else {
var statearr_26557_26580 = state_26551__$1;
(statearr_26557_26580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26552 === (13))){
var state_26551__$1 = state_26551;
var statearr_26558_26581 = state_26551__$1;
(statearr_26558_26581[(2)] = null);

(statearr_26558_26581[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26552 === (6))){
var inst_26530 = (state_26551[(7)]);
var state_26551__$1 = state_26551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26551__$1,(11),to,inst_26530);
} else {
if((state_val_26552 === (3))){
var inst_26549 = (state_26551[(2)]);
var state_26551__$1 = state_26551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26551__$1,inst_26549);
} else {
if((state_val_26552 === (12))){
var state_26551__$1 = state_26551;
var statearr_26559_26582 = state_26551__$1;
(statearr_26559_26582[(2)] = null);

(statearr_26559_26582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26552 === (2))){
var state_26551__$1 = state_26551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26551__$1,(4),from);
} else {
if((state_val_26552 === (11))){
var inst_26540 = (state_26551[(2)]);
var state_26551__$1 = state_26551;
if(cljs.core.truth_(inst_26540)){
var statearr_26560_26583 = state_26551__$1;
(statearr_26560_26583[(1)] = (12));

} else {
var statearr_26561_26584 = state_26551__$1;
(statearr_26561_26584[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26552 === (9))){
var state_26551__$1 = state_26551;
var statearr_26562_26585 = state_26551__$1;
(statearr_26562_26585[(2)] = null);

(statearr_26562_26585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26552 === (5))){
var state_26551__$1 = state_26551;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26563_26586 = state_26551__$1;
(statearr_26563_26586[(1)] = (8));

} else {
var statearr_26564_26587 = state_26551__$1;
(statearr_26564_26587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26552 === (14))){
var inst_26545 = (state_26551[(2)]);
var state_26551__$1 = state_26551;
var statearr_26565_26588 = state_26551__$1;
(statearr_26565_26588[(2)] = inst_26545);

(statearr_26565_26588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26552 === (10))){
var inst_26537 = (state_26551[(2)]);
var state_26551__$1 = state_26551;
var statearr_26566_26589 = state_26551__$1;
(statearr_26566_26589[(2)] = inst_26537);

(statearr_26566_26589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26552 === (8))){
var inst_26534 = cljs.core.async.close_BANG_.call(null,to);
var state_26551__$1 = state_26551;
var statearr_26567_26590 = state_26551__$1;
(statearr_26567_26590[(2)] = inst_26534);

(statearr_26567_26590[(1)] = (10));


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
});})(c__21065__auto___26576))
;
return ((function (switch__21003__auto__,c__21065__auto___26576){
return (function() {
var cljs$core$async$state_machine__21004__auto__ = null;
var cljs$core$async$state_machine__21004__auto____0 = (function (){
var statearr_26571 = [null,null,null,null,null,null,null,null];
(statearr_26571[(0)] = cljs$core$async$state_machine__21004__auto__);

(statearr_26571[(1)] = (1));

return statearr_26571;
});
var cljs$core$async$state_machine__21004__auto____1 = (function (state_26551){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_26551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e26572){if((e26572 instanceof Object)){
var ex__21007__auto__ = e26572;
var statearr_26573_26591 = state_26551;
(statearr_26573_26591[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26592 = state_26551;
state_26551 = G__26592;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
cljs$core$async$state_machine__21004__auto__ = function(state_26551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21004__auto____1.call(this,state_26551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21004__auto____0;
cljs$core$async$state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21004__auto____1;
return cljs$core$async$state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto___26576))
})();
var state__21067__auto__ = (function (){var statearr_26574 = f__21066__auto__.call(null);
(statearr_26574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto___26576);

return statearr_26574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto___26576))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26776){
var vec__26777 = p__26776;
var v = cljs.core.nth.call(null,vec__26777,(0),null);
var p = cljs.core.nth.call(null,vec__26777,(1),null);
var job = vec__26777;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21065__auto___26959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto___26959,res,vec__26777,v,p,job,jobs,results){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto___26959,res,vec__26777,v,p,job,jobs,results){
return (function (state_26782){
var state_val_26783 = (state_26782[(1)]);
if((state_val_26783 === (1))){
var state_26782__$1 = state_26782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26782__$1,(2),res,v);
} else {
if((state_val_26783 === (2))){
var inst_26779 = (state_26782[(2)]);
var inst_26780 = cljs.core.async.close_BANG_.call(null,res);
var state_26782__$1 = (function (){var statearr_26784 = state_26782;
(statearr_26784[(7)] = inst_26779);

return statearr_26784;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26782__$1,inst_26780);
} else {
return null;
}
}
});})(c__21065__auto___26959,res,vec__26777,v,p,job,jobs,results))
;
return ((function (switch__21003__auto__,c__21065__auto___26959,res,vec__26777,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____0 = (function (){
var statearr_26788 = [null,null,null,null,null,null,null,null];
(statearr_26788[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__);

(statearr_26788[(1)] = (1));

return statearr_26788;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____1 = (function (state_26782){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_26782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e26789){if((e26789 instanceof Object)){
var ex__21007__auto__ = e26789;
var statearr_26790_26960 = state_26782;
(statearr_26790_26960[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26961 = state_26782;
state_26782 = G__26961;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__ = function(state_26782){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____1.call(this,state_26782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto___26959,res,vec__26777,v,p,job,jobs,results))
})();
var state__21067__auto__ = (function (){var statearr_26791 = f__21066__auto__.call(null);
(statearr_26791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto___26959);

return statearr_26791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto___26959,res,vec__26777,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26792){
var vec__26793 = p__26792;
var v = cljs.core.nth.call(null,vec__26793,(0),null);
var p = cljs.core.nth.call(null,vec__26793,(1),null);
var job = vec__26793;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__18944__auto___26962 = n;
var __26963 = (0);
while(true){
if((__26963 < n__18944__auto___26962)){
var G__26794_26964 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26794_26964) {
case "compute":
var c__21065__auto___26966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26963,c__21065__auto___26966,G__26794_26964,n__18944__auto___26962,jobs,results,process,async){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (__26963,c__21065__auto___26966,G__26794_26964,n__18944__auto___26962,jobs,results,process,async){
return (function (state_26807){
var state_val_26808 = (state_26807[(1)]);
if((state_val_26808 === (1))){
var state_26807__$1 = state_26807;
var statearr_26809_26967 = state_26807__$1;
(statearr_26809_26967[(2)] = null);

(statearr_26809_26967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (2))){
var state_26807__$1 = state_26807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26807__$1,(4),jobs);
} else {
if((state_val_26808 === (3))){
var inst_26805 = (state_26807[(2)]);
var state_26807__$1 = state_26807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26807__$1,inst_26805);
} else {
if((state_val_26808 === (4))){
var inst_26797 = (state_26807[(2)]);
var inst_26798 = process.call(null,inst_26797);
var state_26807__$1 = state_26807;
if(cljs.core.truth_(inst_26798)){
var statearr_26810_26968 = state_26807__$1;
(statearr_26810_26968[(1)] = (5));

} else {
var statearr_26811_26969 = state_26807__$1;
(statearr_26811_26969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (5))){
var state_26807__$1 = state_26807;
var statearr_26812_26970 = state_26807__$1;
(statearr_26812_26970[(2)] = null);

(statearr_26812_26970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (6))){
var state_26807__$1 = state_26807;
var statearr_26813_26971 = state_26807__$1;
(statearr_26813_26971[(2)] = null);

(statearr_26813_26971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26808 === (7))){
var inst_26803 = (state_26807[(2)]);
var state_26807__$1 = state_26807;
var statearr_26814_26972 = state_26807__$1;
(statearr_26814_26972[(2)] = inst_26803);

(statearr_26814_26972[(1)] = (3));


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
});})(__26963,c__21065__auto___26966,G__26794_26964,n__18944__auto___26962,jobs,results,process,async))
;
return ((function (__26963,switch__21003__auto__,c__21065__auto___26966,G__26794_26964,n__18944__auto___26962,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____0 = (function (){
var statearr_26818 = [null,null,null,null,null,null,null];
(statearr_26818[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__);

(statearr_26818[(1)] = (1));

return statearr_26818;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____1 = (function (state_26807){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_26807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e26819){if((e26819 instanceof Object)){
var ex__21007__auto__ = e26819;
var statearr_26820_26973 = state_26807;
(statearr_26820_26973[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26974 = state_26807;
state_26807 = G__26974;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__ = function(state_26807){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____1.call(this,state_26807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__;
})()
;})(__26963,switch__21003__auto__,c__21065__auto___26966,G__26794_26964,n__18944__auto___26962,jobs,results,process,async))
})();
var state__21067__auto__ = (function (){var statearr_26821 = f__21066__auto__.call(null);
(statearr_26821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto___26966);

return statearr_26821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(__26963,c__21065__auto___26966,G__26794_26964,n__18944__auto___26962,jobs,results,process,async))
);


break;
case "async":
var c__21065__auto___26975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26963,c__21065__auto___26975,G__26794_26964,n__18944__auto___26962,jobs,results,process,async){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (__26963,c__21065__auto___26975,G__26794_26964,n__18944__auto___26962,jobs,results,process,async){
return (function (state_26834){
var state_val_26835 = (state_26834[(1)]);
if((state_val_26835 === (1))){
var state_26834__$1 = state_26834;
var statearr_26836_26976 = state_26834__$1;
(statearr_26836_26976[(2)] = null);

(statearr_26836_26976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (2))){
var state_26834__$1 = state_26834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26834__$1,(4),jobs);
} else {
if((state_val_26835 === (3))){
var inst_26832 = (state_26834[(2)]);
var state_26834__$1 = state_26834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26834__$1,inst_26832);
} else {
if((state_val_26835 === (4))){
var inst_26824 = (state_26834[(2)]);
var inst_26825 = async.call(null,inst_26824);
var state_26834__$1 = state_26834;
if(cljs.core.truth_(inst_26825)){
var statearr_26837_26977 = state_26834__$1;
(statearr_26837_26977[(1)] = (5));

} else {
var statearr_26838_26978 = state_26834__$1;
(statearr_26838_26978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (5))){
var state_26834__$1 = state_26834;
var statearr_26839_26979 = state_26834__$1;
(statearr_26839_26979[(2)] = null);

(statearr_26839_26979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (6))){
var state_26834__$1 = state_26834;
var statearr_26840_26980 = state_26834__$1;
(statearr_26840_26980[(2)] = null);

(statearr_26840_26980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26835 === (7))){
var inst_26830 = (state_26834[(2)]);
var state_26834__$1 = state_26834;
var statearr_26841_26981 = state_26834__$1;
(statearr_26841_26981[(2)] = inst_26830);

(statearr_26841_26981[(1)] = (3));


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
});})(__26963,c__21065__auto___26975,G__26794_26964,n__18944__auto___26962,jobs,results,process,async))
;
return ((function (__26963,switch__21003__auto__,c__21065__auto___26975,G__26794_26964,n__18944__auto___26962,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____0 = (function (){
var statearr_26845 = [null,null,null,null,null,null,null];
(statearr_26845[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__);

(statearr_26845[(1)] = (1));

return statearr_26845;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____1 = (function (state_26834){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_26834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e26846){if((e26846 instanceof Object)){
var ex__21007__auto__ = e26846;
var statearr_26847_26982 = state_26834;
(statearr_26847_26982[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26983 = state_26834;
state_26834 = G__26983;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__ = function(state_26834){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____1.call(this,state_26834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__;
})()
;})(__26963,switch__21003__auto__,c__21065__auto___26975,G__26794_26964,n__18944__auto___26962,jobs,results,process,async))
})();
var state__21067__auto__ = (function (){var statearr_26848 = f__21066__auto__.call(null);
(statearr_26848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto___26975);

return statearr_26848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(__26963,c__21065__auto___26975,G__26794_26964,n__18944__auto___26962,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26984 = (__26963 + (1));
__26963 = G__26984;
continue;
} else {
}
break;
}

var c__21065__auto___26985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto___26985,jobs,results,process,async){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto___26985,jobs,results,process,async){
return (function (state_26870){
var state_val_26871 = (state_26870[(1)]);
if((state_val_26871 === (1))){
var state_26870__$1 = state_26870;
var statearr_26872_26986 = state_26870__$1;
(statearr_26872_26986[(2)] = null);

(statearr_26872_26986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (2))){
var state_26870__$1 = state_26870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26870__$1,(4),from);
} else {
if((state_val_26871 === (3))){
var inst_26868 = (state_26870[(2)]);
var state_26870__$1 = state_26870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26870__$1,inst_26868);
} else {
if((state_val_26871 === (4))){
var inst_26851 = (state_26870[(7)]);
var inst_26851__$1 = (state_26870[(2)]);
var inst_26852 = (inst_26851__$1 == null);
var state_26870__$1 = (function (){var statearr_26873 = state_26870;
(statearr_26873[(7)] = inst_26851__$1);

return statearr_26873;
})();
if(cljs.core.truth_(inst_26852)){
var statearr_26874_26987 = state_26870__$1;
(statearr_26874_26987[(1)] = (5));

} else {
var statearr_26875_26988 = state_26870__$1;
(statearr_26875_26988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (5))){
var inst_26854 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26870__$1 = state_26870;
var statearr_26876_26989 = state_26870__$1;
(statearr_26876_26989[(2)] = inst_26854);

(statearr_26876_26989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (6))){
var inst_26856 = (state_26870[(8)]);
var inst_26851 = (state_26870[(7)]);
var inst_26856__$1 = cljs.core.async.chan.call(null,(1));
var inst_26857 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26858 = [inst_26851,inst_26856__$1];
var inst_26859 = (new cljs.core.PersistentVector(null,2,(5),inst_26857,inst_26858,null));
var state_26870__$1 = (function (){var statearr_26877 = state_26870;
(statearr_26877[(8)] = inst_26856__$1);

return statearr_26877;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26870__$1,(8),jobs,inst_26859);
} else {
if((state_val_26871 === (7))){
var inst_26866 = (state_26870[(2)]);
var state_26870__$1 = state_26870;
var statearr_26878_26990 = state_26870__$1;
(statearr_26878_26990[(2)] = inst_26866);

(statearr_26878_26990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26871 === (8))){
var inst_26856 = (state_26870[(8)]);
var inst_26861 = (state_26870[(2)]);
var state_26870__$1 = (function (){var statearr_26879 = state_26870;
(statearr_26879[(9)] = inst_26861);

return statearr_26879;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26870__$1,(9),results,inst_26856);
} else {
if((state_val_26871 === (9))){
var inst_26863 = (state_26870[(2)]);
var state_26870__$1 = (function (){var statearr_26880 = state_26870;
(statearr_26880[(10)] = inst_26863);

return statearr_26880;
})();
var statearr_26881_26991 = state_26870__$1;
(statearr_26881_26991[(2)] = null);

(statearr_26881_26991[(1)] = (2));


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
});})(c__21065__auto___26985,jobs,results,process,async))
;
return ((function (switch__21003__auto__,c__21065__auto___26985,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____0 = (function (){
var statearr_26885 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26885[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__);

(statearr_26885[(1)] = (1));

return statearr_26885;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____1 = (function (state_26870){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_26870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e26886){if((e26886 instanceof Object)){
var ex__21007__auto__ = e26886;
var statearr_26887_26992 = state_26870;
(statearr_26887_26992[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26993 = state_26870;
state_26870 = G__26993;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__ = function(state_26870){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____1.call(this,state_26870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto___26985,jobs,results,process,async))
})();
var state__21067__auto__ = (function (){var statearr_26888 = f__21066__auto__.call(null);
(statearr_26888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto___26985);

return statearr_26888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto___26985,jobs,results,process,async))
);


var c__21065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto__,jobs,results,process,async){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto__,jobs,results,process,async){
return (function (state_26926){
var state_val_26927 = (state_26926[(1)]);
if((state_val_26927 === (7))){
var inst_26922 = (state_26926[(2)]);
var state_26926__$1 = state_26926;
var statearr_26928_26994 = state_26926__$1;
(statearr_26928_26994[(2)] = inst_26922);

(statearr_26928_26994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (20))){
var state_26926__$1 = state_26926;
var statearr_26929_26995 = state_26926__$1;
(statearr_26929_26995[(2)] = null);

(statearr_26929_26995[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (1))){
var state_26926__$1 = state_26926;
var statearr_26930_26996 = state_26926__$1;
(statearr_26930_26996[(2)] = null);

(statearr_26930_26996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (4))){
var inst_26891 = (state_26926[(7)]);
var inst_26891__$1 = (state_26926[(2)]);
var inst_26892 = (inst_26891__$1 == null);
var state_26926__$1 = (function (){var statearr_26931 = state_26926;
(statearr_26931[(7)] = inst_26891__$1);

return statearr_26931;
})();
if(cljs.core.truth_(inst_26892)){
var statearr_26932_26997 = state_26926__$1;
(statearr_26932_26997[(1)] = (5));

} else {
var statearr_26933_26998 = state_26926__$1;
(statearr_26933_26998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (15))){
var inst_26904 = (state_26926[(8)]);
var state_26926__$1 = state_26926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26926__$1,(18),to,inst_26904);
} else {
if((state_val_26927 === (21))){
var inst_26917 = (state_26926[(2)]);
var state_26926__$1 = state_26926;
var statearr_26934_26999 = state_26926__$1;
(statearr_26934_26999[(2)] = inst_26917);

(statearr_26934_26999[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (13))){
var inst_26919 = (state_26926[(2)]);
var state_26926__$1 = (function (){var statearr_26935 = state_26926;
(statearr_26935[(9)] = inst_26919);

return statearr_26935;
})();
var statearr_26936_27000 = state_26926__$1;
(statearr_26936_27000[(2)] = null);

(statearr_26936_27000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (6))){
var inst_26891 = (state_26926[(7)]);
var state_26926__$1 = state_26926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26926__$1,(11),inst_26891);
} else {
if((state_val_26927 === (17))){
var inst_26912 = (state_26926[(2)]);
var state_26926__$1 = state_26926;
if(cljs.core.truth_(inst_26912)){
var statearr_26937_27001 = state_26926__$1;
(statearr_26937_27001[(1)] = (19));

} else {
var statearr_26938_27002 = state_26926__$1;
(statearr_26938_27002[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (3))){
var inst_26924 = (state_26926[(2)]);
var state_26926__$1 = state_26926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26926__$1,inst_26924);
} else {
if((state_val_26927 === (12))){
var inst_26901 = (state_26926[(10)]);
var state_26926__$1 = state_26926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26926__$1,(14),inst_26901);
} else {
if((state_val_26927 === (2))){
var state_26926__$1 = state_26926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26926__$1,(4),results);
} else {
if((state_val_26927 === (19))){
var state_26926__$1 = state_26926;
var statearr_26939_27003 = state_26926__$1;
(statearr_26939_27003[(2)] = null);

(statearr_26939_27003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (11))){
var inst_26901 = (state_26926[(2)]);
var state_26926__$1 = (function (){var statearr_26940 = state_26926;
(statearr_26940[(10)] = inst_26901);

return statearr_26940;
})();
var statearr_26941_27004 = state_26926__$1;
(statearr_26941_27004[(2)] = null);

(statearr_26941_27004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (9))){
var state_26926__$1 = state_26926;
var statearr_26942_27005 = state_26926__$1;
(statearr_26942_27005[(2)] = null);

(statearr_26942_27005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (5))){
var state_26926__$1 = state_26926;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26943_27006 = state_26926__$1;
(statearr_26943_27006[(1)] = (8));

} else {
var statearr_26944_27007 = state_26926__$1;
(statearr_26944_27007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (14))){
var inst_26904 = (state_26926[(8)]);
var inst_26906 = (state_26926[(11)]);
var inst_26904__$1 = (state_26926[(2)]);
var inst_26905 = (inst_26904__$1 == null);
var inst_26906__$1 = cljs.core.not.call(null,inst_26905);
var state_26926__$1 = (function (){var statearr_26945 = state_26926;
(statearr_26945[(8)] = inst_26904__$1);

(statearr_26945[(11)] = inst_26906__$1);

return statearr_26945;
})();
if(inst_26906__$1){
var statearr_26946_27008 = state_26926__$1;
(statearr_26946_27008[(1)] = (15));

} else {
var statearr_26947_27009 = state_26926__$1;
(statearr_26947_27009[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (16))){
var inst_26906 = (state_26926[(11)]);
var state_26926__$1 = state_26926;
var statearr_26948_27010 = state_26926__$1;
(statearr_26948_27010[(2)] = inst_26906);

(statearr_26948_27010[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (10))){
var inst_26898 = (state_26926[(2)]);
var state_26926__$1 = state_26926;
var statearr_26949_27011 = state_26926__$1;
(statearr_26949_27011[(2)] = inst_26898);

(statearr_26949_27011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (18))){
var inst_26909 = (state_26926[(2)]);
var state_26926__$1 = state_26926;
var statearr_26950_27012 = state_26926__$1;
(statearr_26950_27012[(2)] = inst_26909);

(statearr_26950_27012[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26927 === (8))){
var inst_26895 = cljs.core.async.close_BANG_.call(null,to);
var state_26926__$1 = state_26926;
var statearr_26951_27013 = state_26926__$1;
(statearr_26951_27013[(2)] = inst_26895);

(statearr_26951_27013[(1)] = (10));


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
});})(c__21065__auto__,jobs,results,process,async))
;
return ((function (switch__21003__auto__,c__21065__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____0 = (function (){
var statearr_26955 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26955[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__);

(statearr_26955[(1)] = (1));

return statearr_26955;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____1 = (function (state_26926){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_26926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e26956){if((e26956 instanceof Object)){
var ex__21007__auto__ = e26956;
var statearr_26957_27014 = state_26926;
(statearr_26957_27014[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27015 = state_26926;
state_26926 = G__27015;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__ = function(state_26926){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____1.call(this,state_26926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto__,jobs,results,process,async))
})();
var state__21067__auto__ = (function (){var statearr_26958 = f__21066__auto__.call(null);
(statearr_26958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto__);

return statearr_26958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto__,jobs,results,process,async))
);

return c__21065__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__27017 = arguments.length;
switch (G__27017) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__27020 = arguments.length;
switch (G__27020) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__27023 = arguments.length;
switch (G__27023) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21065__auto___27075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto___27075,tc,fc){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto___27075,tc,fc){
return (function (state_27049){
var state_val_27050 = (state_27049[(1)]);
if((state_val_27050 === (7))){
var inst_27045 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
var statearr_27051_27076 = state_27049__$1;
(statearr_27051_27076[(2)] = inst_27045);

(statearr_27051_27076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (1))){
var state_27049__$1 = state_27049;
var statearr_27052_27077 = state_27049__$1;
(statearr_27052_27077[(2)] = null);

(statearr_27052_27077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (4))){
var inst_27026 = (state_27049[(7)]);
var inst_27026__$1 = (state_27049[(2)]);
var inst_27027 = (inst_27026__$1 == null);
var state_27049__$1 = (function (){var statearr_27053 = state_27049;
(statearr_27053[(7)] = inst_27026__$1);

return statearr_27053;
})();
if(cljs.core.truth_(inst_27027)){
var statearr_27054_27078 = state_27049__$1;
(statearr_27054_27078[(1)] = (5));

} else {
var statearr_27055_27079 = state_27049__$1;
(statearr_27055_27079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (13))){
var state_27049__$1 = state_27049;
var statearr_27056_27080 = state_27049__$1;
(statearr_27056_27080[(2)] = null);

(statearr_27056_27080[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (6))){
var inst_27026 = (state_27049[(7)]);
var inst_27032 = p.call(null,inst_27026);
var state_27049__$1 = state_27049;
if(cljs.core.truth_(inst_27032)){
var statearr_27057_27081 = state_27049__$1;
(statearr_27057_27081[(1)] = (9));

} else {
var statearr_27058_27082 = state_27049__$1;
(statearr_27058_27082[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (3))){
var inst_27047 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27049__$1,inst_27047);
} else {
if((state_val_27050 === (12))){
var state_27049__$1 = state_27049;
var statearr_27059_27083 = state_27049__$1;
(statearr_27059_27083[(2)] = null);

(statearr_27059_27083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (2))){
var state_27049__$1 = state_27049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27049__$1,(4),ch);
} else {
if((state_val_27050 === (11))){
var inst_27026 = (state_27049[(7)]);
var inst_27036 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27049__$1,(8),inst_27036,inst_27026);
} else {
if((state_val_27050 === (9))){
var state_27049__$1 = state_27049;
var statearr_27060_27084 = state_27049__$1;
(statearr_27060_27084[(2)] = tc);

(statearr_27060_27084[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (5))){
var inst_27029 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27030 = cljs.core.async.close_BANG_.call(null,fc);
var state_27049__$1 = (function (){var statearr_27061 = state_27049;
(statearr_27061[(8)] = inst_27029);

return statearr_27061;
})();
var statearr_27062_27085 = state_27049__$1;
(statearr_27062_27085[(2)] = inst_27030);

(statearr_27062_27085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (14))){
var inst_27043 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
var statearr_27063_27086 = state_27049__$1;
(statearr_27063_27086[(2)] = inst_27043);

(statearr_27063_27086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (10))){
var state_27049__$1 = state_27049;
var statearr_27064_27087 = state_27049__$1;
(statearr_27064_27087[(2)] = fc);

(statearr_27064_27087[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27050 === (8))){
var inst_27038 = (state_27049[(2)]);
var state_27049__$1 = state_27049;
if(cljs.core.truth_(inst_27038)){
var statearr_27065_27088 = state_27049__$1;
(statearr_27065_27088[(1)] = (12));

} else {
var statearr_27066_27089 = state_27049__$1;
(statearr_27066_27089[(1)] = (13));

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
});})(c__21065__auto___27075,tc,fc))
;
return ((function (switch__21003__auto__,c__21065__auto___27075,tc,fc){
return (function() {
var cljs$core$async$state_machine__21004__auto__ = null;
var cljs$core$async$state_machine__21004__auto____0 = (function (){
var statearr_27070 = [null,null,null,null,null,null,null,null,null];
(statearr_27070[(0)] = cljs$core$async$state_machine__21004__auto__);

(statearr_27070[(1)] = (1));

return statearr_27070;
});
var cljs$core$async$state_machine__21004__auto____1 = (function (state_27049){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_27049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e27071){if((e27071 instanceof Object)){
var ex__21007__auto__ = e27071;
var statearr_27072_27090 = state_27049;
(statearr_27072_27090[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27091 = state_27049;
state_27049 = G__27091;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
cljs$core$async$state_machine__21004__auto__ = function(state_27049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21004__auto____1.call(this,state_27049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21004__auto____0;
cljs$core$async$state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21004__auto____1;
return cljs$core$async$state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto___27075,tc,fc))
})();
var state__21067__auto__ = (function (){var statearr_27073 = f__21066__auto__.call(null);
(statearr_27073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto___27075);

return statearr_27073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto___27075,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto__){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto__){
return (function (state_27138){
var state_val_27139 = (state_27138[(1)]);
if((state_val_27139 === (1))){
var inst_27124 = init;
var state_27138__$1 = (function (){var statearr_27140 = state_27138;
(statearr_27140[(7)] = inst_27124);

return statearr_27140;
})();
var statearr_27141_27156 = state_27138__$1;
(statearr_27141_27156[(2)] = null);

(statearr_27141_27156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (2))){
var state_27138__$1 = state_27138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27138__$1,(4),ch);
} else {
if((state_val_27139 === (3))){
var inst_27136 = (state_27138[(2)]);
var state_27138__$1 = state_27138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27138__$1,inst_27136);
} else {
if((state_val_27139 === (4))){
var inst_27127 = (state_27138[(8)]);
var inst_27127__$1 = (state_27138[(2)]);
var inst_27128 = (inst_27127__$1 == null);
var state_27138__$1 = (function (){var statearr_27142 = state_27138;
(statearr_27142[(8)] = inst_27127__$1);

return statearr_27142;
})();
if(cljs.core.truth_(inst_27128)){
var statearr_27143_27157 = state_27138__$1;
(statearr_27143_27157[(1)] = (5));

} else {
var statearr_27144_27158 = state_27138__$1;
(statearr_27144_27158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (5))){
var inst_27124 = (state_27138[(7)]);
var state_27138__$1 = state_27138;
var statearr_27145_27159 = state_27138__$1;
(statearr_27145_27159[(2)] = inst_27124);

(statearr_27145_27159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (6))){
var inst_27124 = (state_27138[(7)]);
var inst_27127 = (state_27138[(8)]);
var inst_27131 = f.call(null,inst_27124,inst_27127);
var inst_27124__$1 = inst_27131;
var state_27138__$1 = (function (){var statearr_27146 = state_27138;
(statearr_27146[(7)] = inst_27124__$1);

return statearr_27146;
})();
var statearr_27147_27160 = state_27138__$1;
(statearr_27147_27160[(2)] = null);

(statearr_27147_27160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (7))){
var inst_27134 = (state_27138[(2)]);
var state_27138__$1 = state_27138;
var statearr_27148_27161 = state_27138__$1;
(statearr_27148_27161[(2)] = inst_27134);

(statearr_27148_27161[(1)] = (3));


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
});})(c__21065__auto__))
;
return ((function (switch__21003__auto__,c__21065__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21004__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21004__auto____0 = (function (){
var statearr_27152 = [null,null,null,null,null,null,null,null,null];
(statearr_27152[(0)] = cljs$core$async$reduce_$_state_machine__21004__auto__);

(statearr_27152[(1)] = (1));

return statearr_27152;
});
var cljs$core$async$reduce_$_state_machine__21004__auto____1 = (function (state_27138){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_27138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e27153){if((e27153 instanceof Object)){
var ex__21007__auto__ = e27153;
var statearr_27154_27162 = state_27138;
(statearr_27154_27162[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27163 = state_27138;
state_27138 = G__27163;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21004__auto__ = function(state_27138){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21004__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21004__auto____1.call(this,state_27138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21004__auto____0;
cljs$core$async$reduce_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21004__auto____1;
return cljs$core$async$reduce_$_state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto__))
})();
var state__21067__auto__ = (function (){var statearr_27155 = f__21066__auto__.call(null);
(statearr_27155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto__);

return statearr_27155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto__))
);

return c__21065__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__27165 = arguments.length;
switch (G__27165) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto__){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto__){
return (function (state_27190){
var state_val_27191 = (state_27190[(1)]);
if((state_val_27191 === (7))){
var inst_27172 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
var statearr_27192_27216 = state_27190__$1;
(statearr_27192_27216[(2)] = inst_27172);

(statearr_27192_27216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (1))){
var inst_27166 = cljs.core.seq.call(null,coll);
var inst_27167 = inst_27166;
var state_27190__$1 = (function (){var statearr_27193 = state_27190;
(statearr_27193[(7)] = inst_27167);

return statearr_27193;
})();
var statearr_27194_27217 = state_27190__$1;
(statearr_27194_27217[(2)] = null);

(statearr_27194_27217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (4))){
var inst_27167 = (state_27190[(7)]);
var inst_27170 = cljs.core.first.call(null,inst_27167);
var state_27190__$1 = state_27190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27190__$1,(7),ch,inst_27170);
} else {
if((state_val_27191 === (13))){
var inst_27184 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
var statearr_27195_27218 = state_27190__$1;
(statearr_27195_27218[(2)] = inst_27184);

(statearr_27195_27218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (6))){
var inst_27175 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
if(cljs.core.truth_(inst_27175)){
var statearr_27196_27219 = state_27190__$1;
(statearr_27196_27219[(1)] = (8));

} else {
var statearr_27197_27220 = state_27190__$1;
(statearr_27197_27220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (3))){
var inst_27188 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27190__$1,inst_27188);
} else {
if((state_val_27191 === (12))){
var state_27190__$1 = state_27190;
var statearr_27198_27221 = state_27190__$1;
(statearr_27198_27221[(2)] = null);

(statearr_27198_27221[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (2))){
var inst_27167 = (state_27190[(7)]);
var state_27190__$1 = state_27190;
if(cljs.core.truth_(inst_27167)){
var statearr_27199_27222 = state_27190__$1;
(statearr_27199_27222[(1)] = (4));

} else {
var statearr_27200_27223 = state_27190__$1;
(statearr_27200_27223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (11))){
var inst_27181 = cljs.core.async.close_BANG_.call(null,ch);
var state_27190__$1 = state_27190;
var statearr_27201_27224 = state_27190__$1;
(statearr_27201_27224[(2)] = inst_27181);

(statearr_27201_27224[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (9))){
var state_27190__$1 = state_27190;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27202_27225 = state_27190__$1;
(statearr_27202_27225[(1)] = (11));

} else {
var statearr_27203_27226 = state_27190__$1;
(statearr_27203_27226[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (5))){
var inst_27167 = (state_27190[(7)]);
var state_27190__$1 = state_27190;
var statearr_27204_27227 = state_27190__$1;
(statearr_27204_27227[(2)] = inst_27167);

(statearr_27204_27227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (10))){
var inst_27186 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
var statearr_27205_27228 = state_27190__$1;
(statearr_27205_27228[(2)] = inst_27186);

(statearr_27205_27228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (8))){
var inst_27167 = (state_27190[(7)]);
var inst_27177 = cljs.core.next.call(null,inst_27167);
var inst_27167__$1 = inst_27177;
var state_27190__$1 = (function (){var statearr_27206 = state_27190;
(statearr_27206[(7)] = inst_27167__$1);

return statearr_27206;
})();
var statearr_27207_27229 = state_27190__$1;
(statearr_27207_27229[(2)] = null);

(statearr_27207_27229[(1)] = (2));


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
});})(c__21065__auto__))
;
return ((function (switch__21003__auto__,c__21065__auto__){
return (function() {
var cljs$core$async$state_machine__21004__auto__ = null;
var cljs$core$async$state_machine__21004__auto____0 = (function (){
var statearr_27211 = [null,null,null,null,null,null,null,null];
(statearr_27211[(0)] = cljs$core$async$state_machine__21004__auto__);

(statearr_27211[(1)] = (1));

return statearr_27211;
});
var cljs$core$async$state_machine__21004__auto____1 = (function (state_27190){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_27190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e27212){if((e27212 instanceof Object)){
var ex__21007__auto__ = e27212;
var statearr_27213_27230 = state_27190;
(statearr_27213_27230[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27231 = state_27190;
state_27190 = G__27231;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
cljs$core$async$state_machine__21004__auto__ = function(state_27190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21004__auto____1.call(this,state_27190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21004__auto____0;
cljs$core$async$state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21004__auto____1;
return cljs$core$async$state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto__))
})();
var state__21067__auto__ = (function (){var statearr_27214 = f__21066__auto__.call(null);
(statearr_27214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto__);

return statearr_27214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto__))
);

return c__21065__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj27233 = {};
return obj27233;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18047__auto__ = _;
if(and__18047__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18047__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18695__auto__ = (((_ == null))?null:_);
return (function (){var or__18059__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18695__auto__)]);
if(or__18059__auto__){
return or__18059__auto__;
} else {
var or__18059__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18059__auto____$1){
return or__18059__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27235 = {};
return obj27235;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18047__auto__ = m;
if(and__18047__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18047__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18695__auto__ = (((m == null))?null:m);
return (function (){var or__18059__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18695__auto__)]);
if(or__18059__auto__){
return or__18059__auto__;
} else {
var or__18059__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18059__auto____$1){
return or__18059__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18047__auto__ = m;
if(and__18047__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18047__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18695__auto__ = (((m == null))?null:m);
return (function (){var or__18059__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18695__auto__)]);
if(or__18059__auto__){
return or__18059__auto__;
} else {
var or__18059__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18059__auto____$1){
return or__18059__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18047__auto__ = m;
if(and__18047__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18047__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18695__auto__ = (((m == null))?null:m);
return (function (){var or__18059__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18695__auto__)]);
if(or__18059__auto__){
return or__18059__auto__;
} else {
var or__18059__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18059__auto____$1){
return or__18059__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t27457 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27457 = (function (mult,ch,cs,meta27458){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27458 = meta27458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27459,meta27458__$1){
var self__ = this;
var _27459__$1 = this;
return (new cljs.core.async.t27457(self__.mult,self__.ch,self__.cs,meta27458__$1));
});})(cs))
;

cljs.core.async.t27457.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27459){
var self__ = this;
var _27459__$1 = this;
return self__.meta27458;
});})(cs))
;

cljs.core.async.t27457.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27457.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27457.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27457.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27457.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27457.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27457.cljs$lang$type = true;

cljs.core.async.t27457.cljs$lang$ctorStr = "cljs.core.async/t27457";

cljs.core.async.t27457.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18638__auto__,writer__18639__auto__,opt__18640__auto__){
return cljs.core._write.call(null,writer__18639__auto__,"cljs.core.async/t27457");
});})(cs))
;

cljs.core.async.__GT_t27457 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t27457(mult__$1,ch__$1,cs__$1,meta27458){
return (new cljs.core.async.t27457(mult__$1,ch__$1,cs__$1,meta27458));
});})(cs))
;

}

return (new cljs.core.async.t27457(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21065__auto___27678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto___27678,cs,m,dchan,dctr,done){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto___27678,cs,m,dchan,dctr,done){
return (function (state_27590){
var state_val_27591 = (state_27590[(1)]);
if((state_val_27591 === (7))){
var inst_27586 = (state_27590[(2)]);
var state_27590__$1 = state_27590;
var statearr_27592_27679 = state_27590__$1;
(statearr_27592_27679[(2)] = inst_27586);

(statearr_27592_27679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (20))){
var inst_27491 = (state_27590[(7)]);
var inst_27501 = cljs.core.first.call(null,inst_27491);
var inst_27502 = cljs.core.nth.call(null,inst_27501,(0),null);
var inst_27503 = cljs.core.nth.call(null,inst_27501,(1),null);
var state_27590__$1 = (function (){var statearr_27593 = state_27590;
(statearr_27593[(8)] = inst_27502);

return statearr_27593;
})();
if(cljs.core.truth_(inst_27503)){
var statearr_27594_27680 = state_27590__$1;
(statearr_27594_27680[(1)] = (22));

} else {
var statearr_27595_27681 = state_27590__$1;
(statearr_27595_27681[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (27))){
var inst_27462 = (state_27590[(9)]);
var inst_27531 = (state_27590[(10)]);
var inst_27533 = (state_27590[(11)]);
var inst_27538 = (state_27590[(12)]);
var inst_27538__$1 = cljs.core._nth.call(null,inst_27531,inst_27533);
var inst_27539 = cljs.core.async.put_BANG_.call(null,inst_27538__$1,inst_27462,done);
var state_27590__$1 = (function (){var statearr_27596 = state_27590;
(statearr_27596[(12)] = inst_27538__$1);

return statearr_27596;
})();
if(cljs.core.truth_(inst_27539)){
var statearr_27597_27682 = state_27590__$1;
(statearr_27597_27682[(1)] = (30));

} else {
var statearr_27598_27683 = state_27590__$1;
(statearr_27598_27683[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (1))){
var state_27590__$1 = state_27590;
var statearr_27599_27684 = state_27590__$1;
(statearr_27599_27684[(2)] = null);

(statearr_27599_27684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (24))){
var inst_27491 = (state_27590[(7)]);
var inst_27508 = (state_27590[(2)]);
var inst_27509 = cljs.core.next.call(null,inst_27491);
var inst_27471 = inst_27509;
var inst_27472 = null;
var inst_27473 = (0);
var inst_27474 = (0);
var state_27590__$1 = (function (){var statearr_27600 = state_27590;
(statearr_27600[(13)] = inst_27474);

(statearr_27600[(14)] = inst_27471);

(statearr_27600[(15)] = inst_27473);

(statearr_27600[(16)] = inst_27472);

(statearr_27600[(17)] = inst_27508);

return statearr_27600;
})();
var statearr_27601_27685 = state_27590__$1;
(statearr_27601_27685[(2)] = null);

(statearr_27601_27685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (39))){
var state_27590__$1 = state_27590;
var statearr_27605_27686 = state_27590__$1;
(statearr_27605_27686[(2)] = null);

(statearr_27605_27686[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (4))){
var inst_27462 = (state_27590[(9)]);
var inst_27462__$1 = (state_27590[(2)]);
var inst_27463 = (inst_27462__$1 == null);
var state_27590__$1 = (function (){var statearr_27606 = state_27590;
(statearr_27606[(9)] = inst_27462__$1);

return statearr_27606;
})();
if(cljs.core.truth_(inst_27463)){
var statearr_27607_27687 = state_27590__$1;
(statearr_27607_27687[(1)] = (5));

} else {
var statearr_27608_27688 = state_27590__$1;
(statearr_27608_27688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (15))){
var inst_27474 = (state_27590[(13)]);
var inst_27471 = (state_27590[(14)]);
var inst_27473 = (state_27590[(15)]);
var inst_27472 = (state_27590[(16)]);
var inst_27487 = (state_27590[(2)]);
var inst_27488 = (inst_27474 + (1));
var tmp27602 = inst_27471;
var tmp27603 = inst_27473;
var tmp27604 = inst_27472;
var inst_27471__$1 = tmp27602;
var inst_27472__$1 = tmp27604;
var inst_27473__$1 = tmp27603;
var inst_27474__$1 = inst_27488;
var state_27590__$1 = (function (){var statearr_27609 = state_27590;
(statearr_27609[(13)] = inst_27474__$1);

(statearr_27609[(14)] = inst_27471__$1);

(statearr_27609[(15)] = inst_27473__$1);

(statearr_27609[(16)] = inst_27472__$1);

(statearr_27609[(18)] = inst_27487);

return statearr_27609;
})();
var statearr_27610_27689 = state_27590__$1;
(statearr_27610_27689[(2)] = null);

(statearr_27610_27689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (21))){
var inst_27512 = (state_27590[(2)]);
var state_27590__$1 = state_27590;
var statearr_27614_27690 = state_27590__$1;
(statearr_27614_27690[(2)] = inst_27512);

(statearr_27614_27690[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (31))){
var inst_27538 = (state_27590[(12)]);
var inst_27542 = done.call(null,null);
var inst_27543 = cljs.core.async.untap_STAR_.call(null,m,inst_27538);
var state_27590__$1 = (function (){var statearr_27615 = state_27590;
(statearr_27615[(19)] = inst_27542);

return statearr_27615;
})();
var statearr_27616_27691 = state_27590__$1;
(statearr_27616_27691[(2)] = inst_27543);

(statearr_27616_27691[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (32))){
var inst_27530 = (state_27590[(20)]);
var inst_27531 = (state_27590[(10)]);
var inst_27533 = (state_27590[(11)]);
var inst_27532 = (state_27590[(21)]);
var inst_27545 = (state_27590[(2)]);
var inst_27546 = (inst_27533 + (1));
var tmp27611 = inst_27530;
var tmp27612 = inst_27531;
var tmp27613 = inst_27532;
var inst_27530__$1 = tmp27611;
var inst_27531__$1 = tmp27612;
var inst_27532__$1 = tmp27613;
var inst_27533__$1 = inst_27546;
var state_27590__$1 = (function (){var statearr_27617 = state_27590;
(statearr_27617[(20)] = inst_27530__$1);

(statearr_27617[(10)] = inst_27531__$1);

(statearr_27617[(11)] = inst_27533__$1);

(statearr_27617[(22)] = inst_27545);

(statearr_27617[(21)] = inst_27532__$1);

return statearr_27617;
})();
var statearr_27618_27692 = state_27590__$1;
(statearr_27618_27692[(2)] = null);

(statearr_27618_27692[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (40))){
var inst_27558 = (state_27590[(23)]);
var inst_27562 = done.call(null,null);
var inst_27563 = cljs.core.async.untap_STAR_.call(null,m,inst_27558);
var state_27590__$1 = (function (){var statearr_27619 = state_27590;
(statearr_27619[(24)] = inst_27562);

return statearr_27619;
})();
var statearr_27620_27693 = state_27590__$1;
(statearr_27620_27693[(2)] = inst_27563);

(statearr_27620_27693[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (33))){
var inst_27549 = (state_27590[(25)]);
var inst_27551 = cljs.core.chunked_seq_QMARK_.call(null,inst_27549);
var state_27590__$1 = state_27590;
if(inst_27551){
var statearr_27621_27694 = state_27590__$1;
(statearr_27621_27694[(1)] = (36));

} else {
var statearr_27622_27695 = state_27590__$1;
(statearr_27622_27695[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (13))){
var inst_27481 = (state_27590[(26)]);
var inst_27484 = cljs.core.async.close_BANG_.call(null,inst_27481);
var state_27590__$1 = state_27590;
var statearr_27623_27696 = state_27590__$1;
(statearr_27623_27696[(2)] = inst_27484);

(statearr_27623_27696[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (22))){
var inst_27502 = (state_27590[(8)]);
var inst_27505 = cljs.core.async.close_BANG_.call(null,inst_27502);
var state_27590__$1 = state_27590;
var statearr_27624_27697 = state_27590__$1;
(statearr_27624_27697[(2)] = inst_27505);

(statearr_27624_27697[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (36))){
var inst_27549 = (state_27590[(25)]);
var inst_27553 = cljs.core.chunk_first.call(null,inst_27549);
var inst_27554 = cljs.core.chunk_rest.call(null,inst_27549);
var inst_27555 = cljs.core.count.call(null,inst_27553);
var inst_27530 = inst_27554;
var inst_27531 = inst_27553;
var inst_27532 = inst_27555;
var inst_27533 = (0);
var state_27590__$1 = (function (){var statearr_27625 = state_27590;
(statearr_27625[(20)] = inst_27530);

(statearr_27625[(10)] = inst_27531);

(statearr_27625[(11)] = inst_27533);

(statearr_27625[(21)] = inst_27532);

return statearr_27625;
})();
var statearr_27626_27698 = state_27590__$1;
(statearr_27626_27698[(2)] = null);

(statearr_27626_27698[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (41))){
var inst_27549 = (state_27590[(25)]);
var inst_27565 = (state_27590[(2)]);
var inst_27566 = cljs.core.next.call(null,inst_27549);
var inst_27530 = inst_27566;
var inst_27531 = null;
var inst_27532 = (0);
var inst_27533 = (0);
var state_27590__$1 = (function (){var statearr_27627 = state_27590;
(statearr_27627[(20)] = inst_27530);

(statearr_27627[(10)] = inst_27531);

(statearr_27627[(27)] = inst_27565);

(statearr_27627[(11)] = inst_27533);

(statearr_27627[(21)] = inst_27532);

return statearr_27627;
})();
var statearr_27628_27699 = state_27590__$1;
(statearr_27628_27699[(2)] = null);

(statearr_27628_27699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (43))){
var state_27590__$1 = state_27590;
var statearr_27629_27700 = state_27590__$1;
(statearr_27629_27700[(2)] = null);

(statearr_27629_27700[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (29))){
var inst_27574 = (state_27590[(2)]);
var state_27590__$1 = state_27590;
var statearr_27630_27701 = state_27590__$1;
(statearr_27630_27701[(2)] = inst_27574);

(statearr_27630_27701[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (44))){
var inst_27583 = (state_27590[(2)]);
var state_27590__$1 = (function (){var statearr_27631 = state_27590;
(statearr_27631[(28)] = inst_27583);

return statearr_27631;
})();
var statearr_27632_27702 = state_27590__$1;
(statearr_27632_27702[(2)] = null);

(statearr_27632_27702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (6))){
var inst_27522 = (state_27590[(29)]);
var inst_27521 = cljs.core.deref.call(null,cs);
var inst_27522__$1 = cljs.core.keys.call(null,inst_27521);
var inst_27523 = cljs.core.count.call(null,inst_27522__$1);
var inst_27524 = cljs.core.reset_BANG_.call(null,dctr,inst_27523);
var inst_27529 = cljs.core.seq.call(null,inst_27522__$1);
var inst_27530 = inst_27529;
var inst_27531 = null;
var inst_27532 = (0);
var inst_27533 = (0);
var state_27590__$1 = (function (){var statearr_27633 = state_27590;
(statearr_27633[(29)] = inst_27522__$1);

(statearr_27633[(20)] = inst_27530);

(statearr_27633[(10)] = inst_27531);

(statearr_27633[(11)] = inst_27533);

(statearr_27633[(30)] = inst_27524);

(statearr_27633[(21)] = inst_27532);

return statearr_27633;
})();
var statearr_27634_27703 = state_27590__$1;
(statearr_27634_27703[(2)] = null);

(statearr_27634_27703[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (28))){
var inst_27549 = (state_27590[(25)]);
var inst_27530 = (state_27590[(20)]);
var inst_27549__$1 = cljs.core.seq.call(null,inst_27530);
var state_27590__$1 = (function (){var statearr_27635 = state_27590;
(statearr_27635[(25)] = inst_27549__$1);

return statearr_27635;
})();
if(inst_27549__$1){
var statearr_27636_27704 = state_27590__$1;
(statearr_27636_27704[(1)] = (33));

} else {
var statearr_27637_27705 = state_27590__$1;
(statearr_27637_27705[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (25))){
var inst_27533 = (state_27590[(11)]);
var inst_27532 = (state_27590[(21)]);
var inst_27535 = (inst_27533 < inst_27532);
var inst_27536 = inst_27535;
var state_27590__$1 = state_27590;
if(cljs.core.truth_(inst_27536)){
var statearr_27638_27706 = state_27590__$1;
(statearr_27638_27706[(1)] = (27));

} else {
var statearr_27639_27707 = state_27590__$1;
(statearr_27639_27707[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (34))){
var state_27590__$1 = state_27590;
var statearr_27640_27708 = state_27590__$1;
(statearr_27640_27708[(2)] = null);

(statearr_27640_27708[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (17))){
var state_27590__$1 = state_27590;
var statearr_27641_27709 = state_27590__$1;
(statearr_27641_27709[(2)] = null);

(statearr_27641_27709[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (3))){
var inst_27588 = (state_27590[(2)]);
var state_27590__$1 = state_27590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27590__$1,inst_27588);
} else {
if((state_val_27591 === (12))){
var inst_27517 = (state_27590[(2)]);
var state_27590__$1 = state_27590;
var statearr_27642_27710 = state_27590__$1;
(statearr_27642_27710[(2)] = inst_27517);

(statearr_27642_27710[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (2))){
var state_27590__$1 = state_27590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27590__$1,(4),ch);
} else {
if((state_val_27591 === (23))){
var state_27590__$1 = state_27590;
var statearr_27643_27711 = state_27590__$1;
(statearr_27643_27711[(2)] = null);

(statearr_27643_27711[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (35))){
var inst_27572 = (state_27590[(2)]);
var state_27590__$1 = state_27590;
var statearr_27644_27712 = state_27590__$1;
(statearr_27644_27712[(2)] = inst_27572);

(statearr_27644_27712[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (19))){
var inst_27491 = (state_27590[(7)]);
var inst_27495 = cljs.core.chunk_first.call(null,inst_27491);
var inst_27496 = cljs.core.chunk_rest.call(null,inst_27491);
var inst_27497 = cljs.core.count.call(null,inst_27495);
var inst_27471 = inst_27496;
var inst_27472 = inst_27495;
var inst_27473 = inst_27497;
var inst_27474 = (0);
var state_27590__$1 = (function (){var statearr_27645 = state_27590;
(statearr_27645[(13)] = inst_27474);

(statearr_27645[(14)] = inst_27471);

(statearr_27645[(15)] = inst_27473);

(statearr_27645[(16)] = inst_27472);

return statearr_27645;
})();
var statearr_27646_27713 = state_27590__$1;
(statearr_27646_27713[(2)] = null);

(statearr_27646_27713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (11))){
var inst_27491 = (state_27590[(7)]);
var inst_27471 = (state_27590[(14)]);
var inst_27491__$1 = cljs.core.seq.call(null,inst_27471);
var state_27590__$1 = (function (){var statearr_27647 = state_27590;
(statearr_27647[(7)] = inst_27491__$1);

return statearr_27647;
})();
if(inst_27491__$1){
var statearr_27648_27714 = state_27590__$1;
(statearr_27648_27714[(1)] = (16));

} else {
var statearr_27649_27715 = state_27590__$1;
(statearr_27649_27715[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (9))){
var inst_27519 = (state_27590[(2)]);
var state_27590__$1 = state_27590;
var statearr_27650_27716 = state_27590__$1;
(statearr_27650_27716[(2)] = inst_27519);

(statearr_27650_27716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (5))){
var inst_27469 = cljs.core.deref.call(null,cs);
var inst_27470 = cljs.core.seq.call(null,inst_27469);
var inst_27471 = inst_27470;
var inst_27472 = null;
var inst_27473 = (0);
var inst_27474 = (0);
var state_27590__$1 = (function (){var statearr_27651 = state_27590;
(statearr_27651[(13)] = inst_27474);

(statearr_27651[(14)] = inst_27471);

(statearr_27651[(15)] = inst_27473);

(statearr_27651[(16)] = inst_27472);

return statearr_27651;
})();
var statearr_27652_27717 = state_27590__$1;
(statearr_27652_27717[(2)] = null);

(statearr_27652_27717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (14))){
var state_27590__$1 = state_27590;
var statearr_27653_27718 = state_27590__$1;
(statearr_27653_27718[(2)] = null);

(statearr_27653_27718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (45))){
var inst_27580 = (state_27590[(2)]);
var state_27590__$1 = state_27590;
var statearr_27654_27719 = state_27590__$1;
(statearr_27654_27719[(2)] = inst_27580);

(statearr_27654_27719[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (26))){
var inst_27522 = (state_27590[(29)]);
var inst_27576 = (state_27590[(2)]);
var inst_27577 = cljs.core.seq.call(null,inst_27522);
var state_27590__$1 = (function (){var statearr_27655 = state_27590;
(statearr_27655[(31)] = inst_27576);

return statearr_27655;
})();
if(inst_27577){
var statearr_27656_27720 = state_27590__$1;
(statearr_27656_27720[(1)] = (42));

} else {
var statearr_27657_27721 = state_27590__$1;
(statearr_27657_27721[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (16))){
var inst_27491 = (state_27590[(7)]);
var inst_27493 = cljs.core.chunked_seq_QMARK_.call(null,inst_27491);
var state_27590__$1 = state_27590;
if(inst_27493){
var statearr_27658_27722 = state_27590__$1;
(statearr_27658_27722[(1)] = (19));

} else {
var statearr_27659_27723 = state_27590__$1;
(statearr_27659_27723[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (38))){
var inst_27569 = (state_27590[(2)]);
var state_27590__$1 = state_27590;
var statearr_27660_27724 = state_27590__$1;
(statearr_27660_27724[(2)] = inst_27569);

(statearr_27660_27724[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (30))){
var state_27590__$1 = state_27590;
var statearr_27661_27725 = state_27590__$1;
(statearr_27661_27725[(2)] = null);

(statearr_27661_27725[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (10))){
var inst_27474 = (state_27590[(13)]);
var inst_27472 = (state_27590[(16)]);
var inst_27480 = cljs.core._nth.call(null,inst_27472,inst_27474);
var inst_27481 = cljs.core.nth.call(null,inst_27480,(0),null);
var inst_27482 = cljs.core.nth.call(null,inst_27480,(1),null);
var state_27590__$1 = (function (){var statearr_27662 = state_27590;
(statearr_27662[(26)] = inst_27481);

return statearr_27662;
})();
if(cljs.core.truth_(inst_27482)){
var statearr_27663_27726 = state_27590__$1;
(statearr_27663_27726[(1)] = (13));

} else {
var statearr_27664_27727 = state_27590__$1;
(statearr_27664_27727[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (18))){
var inst_27515 = (state_27590[(2)]);
var state_27590__$1 = state_27590;
var statearr_27665_27728 = state_27590__$1;
(statearr_27665_27728[(2)] = inst_27515);

(statearr_27665_27728[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (42))){
var state_27590__$1 = state_27590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27590__$1,(45),dchan);
} else {
if((state_val_27591 === (37))){
var inst_27549 = (state_27590[(25)]);
var inst_27558 = (state_27590[(23)]);
var inst_27462 = (state_27590[(9)]);
var inst_27558__$1 = cljs.core.first.call(null,inst_27549);
var inst_27559 = cljs.core.async.put_BANG_.call(null,inst_27558__$1,inst_27462,done);
var state_27590__$1 = (function (){var statearr_27666 = state_27590;
(statearr_27666[(23)] = inst_27558__$1);

return statearr_27666;
})();
if(cljs.core.truth_(inst_27559)){
var statearr_27667_27729 = state_27590__$1;
(statearr_27667_27729[(1)] = (39));

} else {
var statearr_27668_27730 = state_27590__$1;
(statearr_27668_27730[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27591 === (8))){
var inst_27474 = (state_27590[(13)]);
var inst_27473 = (state_27590[(15)]);
var inst_27476 = (inst_27474 < inst_27473);
var inst_27477 = inst_27476;
var state_27590__$1 = state_27590;
if(cljs.core.truth_(inst_27477)){
var statearr_27669_27731 = state_27590__$1;
(statearr_27669_27731[(1)] = (10));

} else {
var statearr_27670_27732 = state_27590__$1;
(statearr_27670_27732[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__21065__auto___27678,cs,m,dchan,dctr,done))
;
return ((function (switch__21003__auto__,c__21065__auto___27678,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21004__auto__ = null;
var cljs$core$async$mult_$_state_machine__21004__auto____0 = (function (){
var statearr_27674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27674[(0)] = cljs$core$async$mult_$_state_machine__21004__auto__);

(statearr_27674[(1)] = (1));

return statearr_27674;
});
var cljs$core$async$mult_$_state_machine__21004__auto____1 = (function (state_27590){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_27590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e27675){if((e27675 instanceof Object)){
var ex__21007__auto__ = e27675;
var statearr_27676_27733 = state_27590;
(statearr_27676_27733[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27734 = state_27590;
state_27590 = G__27734;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21004__auto__ = function(state_27590){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21004__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21004__auto____1.call(this,state_27590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21004__auto____0;
cljs$core$async$mult_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21004__auto____1;
return cljs$core$async$mult_$_state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto___27678,cs,m,dchan,dctr,done))
})();
var state__21067__auto__ = (function (){var statearr_27677 = f__21066__auto__.call(null);
(statearr_27677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto___27678);

return statearr_27677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto___27678,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__27736 = arguments.length;
switch (G__27736) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj27739 = {};
return obj27739;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18047__auto__ = m;
if(and__18047__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18047__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18695__auto__ = (((m == null))?null:m);
return (function (){var or__18059__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18695__auto__)]);
if(or__18059__auto__){
return or__18059__auto__;
} else {
var or__18059__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18059__auto____$1){
return or__18059__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18047__auto__ = m;
if(and__18047__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18047__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18695__auto__ = (((m == null))?null:m);
return (function (){var or__18059__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18695__auto__)]);
if(or__18059__auto__){
return or__18059__auto__;
} else {
var or__18059__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18059__auto____$1){
return or__18059__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18047__auto__ = m;
if(and__18047__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18047__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18695__auto__ = (((m == null))?null:m);
return (function (){var or__18059__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18695__auto__)]);
if(or__18059__auto__){
return or__18059__auto__;
} else {
var or__18059__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18059__auto____$1){
return or__18059__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18047__auto__ = m;
if(and__18047__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18047__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18695__auto__ = (((m == null))?null:m);
return (function (){var or__18059__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18695__auto__)]);
if(or__18059__auto__){
return or__18059__auto__;
} else {
var or__18059__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18059__auto____$1){
return or__18059__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18047__auto__ = m;
if(and__18047__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18047__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18695__auto__ = (((m == null))?null:m);
return (function (){var or__18059__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18695__auto__)]);
if(or__18059__auto__){
return or__18059__auto__;
} else {
var or__18059__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18059__auto____$1){
return or__18059__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19099__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19099__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27744){
var map__27745 = p__27744;
var map__27745__$1 = ((cljs.core.seq_QMARK_.call(null,map__27745))?cljs.core.apply.call(null,cljs.core.hash_map,map__27745):map__27745);
var opts = map__27745__$1;
var statearr_27746_27749 = state;
(statearr_27746_27749[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__27745,map__27745__$1,opts){
return (function (val){
var statearr_27747_27750 = state;
(statearr_27747_27750[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27745,map__27745__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_27748_27751 = state;
(statearr_27748_27751[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27740){
var G__27741 = cljs.core.first.call(null,seq27740);
var seq27740__$1 = cljs.core.next.call(null,seq27740);
var G__27742 = cljs.core.first.call(null,seq27740__$1);
var seq27740__$2 = cljs.core.next.call(null,seq27740__$1);
var G__27743 = cljs.core.first.call(null,seq27740__$2);
var seq27740__$3 = cljs.core.next.call(null,seq27740__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27741,G__27742,G__27743,seq27740__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t27871 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27871 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27872){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27872 = meta27872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27873,meta27872__$1){
var self__ = this;
var _27873__$1 = this;
return (new cljs.core.async.t27871(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27872__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27871.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27873){
var self__ = this;
var _27873__$1 = this;
return self__.meta27872;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27871.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27871.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27871.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27871.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27871.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27871.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27871.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27871.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27871.cljs$lang$type = true;

cljs.core.async.t27871.cljs$lang$ctorStr = "cljs.core.async/t27871";

cljs.core.async.t27871.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18638__auto__,writer__18639__auto__,opt__18640__auto__){
return cljs.core._write.call(null,writer__18639__auto__,"cljs.core.async/t27871");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27871 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27871(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27872){
return (new cljs.core.async.t27871(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27872));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27871(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21065__auto___27990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto___27990,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto___27990,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27943){
var state_val_27944 = (state_27943[(1)]);
if((state_val_27944 === (7))){
var inst_27887 = (state_27943[(7)]);
var inst_27892 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27887);
var state_27943__$1 = state_27943;
var statearr_27945_27991 = state_27943__$1;
(statearr_27945_27991[(2)] = inst_27892);

(statearr_27945_27991[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (20))){
var inst_27902 = (state_27943[(8)]);
var state_27943__$1 = state_27943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27943__$1,(23),out,inst_27902);
} else {
if((state_val_27944 === (1))){
var inst_27877 = (state_27943[(9)]);
var inst_27877__$1 = calc_state.call(null);
var inst_27878 = cljs.core.seq_QMARK_.call(null,inst_27877__$1);
var state_27943__$1 = (function (){var statearr_27946 = state_27943;
(statearr_27946[(9)] = inst_27877__$1);

return statearr_27946;
})();
if(inst_27878){
var statearr_27947_27992 = state_27943__$1;
(statearr_27947_27992[(1)] = (2));

} else {
var statearr_27948_27993 = state_27943__$1;
(statearr_27948_27993[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (24))){
var inst_27895 = (state_27943[(10)]);
var inst_27887 = inst_27895;
var state_27943__$1 = (function (){var statearr_27949 = state_27943;
(statearr_27949[(7)] = inst_27887);

return statearr_27949;
})();
var statearr_27950_27994 = state_27943__$1;
(statearr_27950_27994[(2)] = null);

(statearr_27950_27994[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (4))){
var inst_27877 = (state_27943[(9)]);
var inst_27883 = (state_27943[(2)]);
var inst_27884 = cljs.core.get.call(null,inst_27883,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27885 = cljs.core.get.call(null,inst_27883,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27886 = cljs.core.get.call(null,inst_27883,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27887 = inst_27877;
var state_27943__$1 = (function (){var statearr_27951 = state_27943;
(statearr_27951[(11)] = inst_27886);

(statearr_27951[(7)] = inst_27887);

(statearr_27951[(12)] = inst_27884);

(statearr_27951[(13)] = inst_27885);

return statearr_27951;
})();
var statearr_27952_27995 = state_27943__$1;
(statearr_27952_27995[(2)] = null);

(statearr_27952_27995[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (15))){
var state_27943__$1 = state_27943;
var statearr_27953_27996 = state_27943__$1;
(statearr_27953_27996[(2)] = null);

(statearr_27953_27996[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (21))){
var inst_27895 = (state_27943[(10)]);
var inst_27887 = inst_27895;
var state_27943__$1 = (function (){var statearr_27954 = state_27943;
(statearr_27954[(7)] = inst_27887);

return statearr_27954;
})();
var statearr_27955_27997 = state_27943__$1;
(statearr_27955_27997[(2)] = null);

(statearr_27955_27997[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (13))){
var inst_27939 = (state_27943[(2)]);
var state_27943__$1 = state_27943;
var statearr_27956_27998 = state_27943__$1;
(statearr_27956_27998[(2)] = inst_27939);

(statearr_27956_27998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (22))){
var inst_27937 = (state_27943[(2)]);
var state_27943__$1 = state_27943;
var statearr_27957_27999 = state_27943__$1;
(statearr_27957_27999[(2)] = inst_27937);

(statearr_27957_27999[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (6))){
var inst_27941 = (state_27943[(2)]);
var state_27943__$1 = state_27943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27943__$1,inst_27941);
} else {
if((state_val_27944 === (25))){
var state_27943__$1 = state_27943;
var statearr_27958_28000 = state_27943__$1;
(statearr_27958_28000[(2)] = null);

(statearr_27958_28000[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (17))){
var inst_27917 = (state_27943[(14)]);
var state_27943__$1 = state_27943;
var statearr_27959_28001 = state_27943__$1;
(statearr_27959_28001[(2)] = inst_27917);

(statearr_27959_28001[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (3))){
var inst_27877 = (state_27943[(9)]);
var state_27943__$1 = state_27943;
var statearr_27960_28002 = state_27943__$1;
(statearr_27960_28002[(2)] = inst_27877);

(statearr_27960_28002[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (12))){
var inst_27896 = (state_27943[(15)]);
var inst_27917 = (state_27943[(14)]);
var inst_27903 = (state_27943[(16)]);
var inst_27917__$1 = inst_27896.call(null,inst_27903);
var state_27943__$1 = (function (){var statearr_27961 = state_27943;
(statearr_27961[(14)] = inst_27917__$1);

return statearr_27961;
})();
if(cljs.core.truth_(inst_27917__$1)){
var statearr_27962_28003 = state_27943__$1;
(statearr_27962_28003[(1)] = (17));

} else {
var statearr_27963_28004 = state_27943__$1;
(statearr_27963_28004[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (2))){
var inst_27877 = (state_27943[(9)]);
var inst_27880 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27877);
var state_27943__$1 = state_27943;
var statearr_27964_28005 = state_27943__$1;
(statearr_27964_28005[(2)] = inst_27880);

(statearr_27964_28005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (23))){
var inst_27928 = (state_27943[(2)]);
var state_27943__$1 = state_27943;
if(cljs.core.truth_(inst_27928)){
var statearr_27965_28006 = state_27943__$1;
(statearr_27965_28006[(1)] = (24));

} else {
var statearr_27966_28007 = state_27943__$1;
(statearr_27966_28007[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (19))){
var inst_27925 = (state_27943[(2)]);
var state_27943__$1 = state_27943;
if(cljs.core.truth_(inst_27925)){
var statearr_27967_28008 = state_27943__$1;
(statearr_27967_28008[(1)] = (20));

} else {
var statearr_27968_28009 = state_27943__$1;
(statearr_27968_28009[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (11))){
var inst_27902 = (state_27943[(8)]);
var inst_27908 = (inst_27902 == null);
var state_27943__$1 = state_27943;
if(cljs.core.truth_(inst_27908)){
var statearr_27969_28010 = state_27943__$1;
(statearr_27969_28010[(1)] = (14));

} else {
var statearr_27970_28011 = state_27943__$1;
(statearr_27970_28011[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (9))){
var inst_27895 = (state_27943[(10)]);
var inst_27895__$1 = (state_27943[(2)]);
var inst_27896 = cljs.core.get.call(null,inst_27895__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27897 = cljs.core.get.call(null,inst_27895__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27898 = cljs.core.get.call(null,inst_27895__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27943__$1 = (function (){var statearr_27971 = state_27943;
(statearr_27971[(10)] = inst_27895__$1);

(statearr_27971[(15)] = inst_27896);

(statearr_27971[(17)] = inst_27897);

return statearr_27971;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27943__$1,(10),inst_27898);
} else {
if((state_val_27944 === (5))){
var inst_27887 = (state_27943[(7)]);
var inst_27890 = cljs.core.seq_QMARK_.call(null,inst_27887);
var state_27943__$1 = state_27943;
if(inst_27890){
var statearr_27972_28012 = state_27943__$1;
(statearr_27972_28012[(1)] = (7));

} else {
var statearr_27973_28013 = state_27943__$1;
(statearr_27973_28013[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (14))){
var inst_27903 = (state_27943[(16)]);
var inst_27910 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27903);
var state_27943__$1 = state_27943;
var statearr_27974_28014 = state_27943__$1;
(statearr_27974_28014[(2)] = inst_27910);

(statearr_27974_28014[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (26))){
var inst_27933 = (state_27943[(2)]);
var state_27943__$1 = state_27943;
var statearr_27975_28015 = state_27943__$1;
(statearr_27975_28015[(2)] = inst_27933);

(statearr_27975_28015[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (16))){
var inst_27913 = (state_27943[(2)]);
var inst_27914 = calc_state.call(null);
var inst_27887 = inst_27914;
var state_27943__$1 = (function (){var statearr_27976 = state_27943;
(statearr_27976[(7)] = inst_27887);

(statearr_27976[(18)] = inst_27913);

return statearr_27976;
})();
var statearr_27977_28016 = state_27943__$1;
(statearr_27977_28016[(2)] = null);

(statearr_27977_28016[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (10))){
var inst_27903 = (state_27943[(16)]);
var inst_27902 = (state_27943[(8)]);
var inst_27901 = (state_27943[(2)]);
var inst_27902__$1 = cljs.core.nth.call(null,inst_27901,(0),null);
var inst_27903__$1 = cljs.core.nth.call(null,inst_27901,(1),null);
var inst_27904 = (inst_27902__$1 == null);
var inst_27905 = cljs.core._EQ_.call(null,inst_27903__$1,change);
var inst_27906 = (inst_27904) || (inst_27905);
var state_27943__$1 = (function (){var statearr_27978 = state_27943;
(statearr_27978[(16)] = inst_27903__$1);

(statearr_27978[(8)] = inst_27902__$1);

return statearr_27978;
})();
if(cljs.core.truth_(inst_27906)){
var statearr_27979_28017 = state_27943__$1;
(statearr_27979_28017[(1)] = (11));

} else {
var statearr_27980_28018 = state_27943__$1;
(statearr_27980_28018[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (18))){
var inst_27896 = (state_27943[(15)]);
var inst_27903 = (state_27943[(16)]);
var inst_27897 = (state_27943[(17)]);
var inst_27920 = cljs.core.empty_QMARK_.call(null,inst_27896);
var inst_27921 = inst_27897.call(null,inst_27903);
var inst_27922 = cljs.core.not.call(null,inst_27921);
var inst_27923 = (inst_27920) && (inst_27922);
var state_27943__$1 = state_27943;
var statearr_27981_28019 = state_27943__$1;
(statearr_27981_28019[(2)] = inst_27923);

(statearr_27981_28019[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27944 === (8))){
var inst_27887 = (state_27943[(7)]);
var state_27943__$1 = state_27943;
var statearr_27982_28020 = state_27943__$1;
(statearr_27982_28020[(2)] = inst_27887);

(statearr_27982_28020[(1)] = (9));


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
});})(c__21065__auto___27990,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21003__auto__,c__21065__auto___27990,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21004__auto__ = null;
var cljs$core$async$mix_$_state_machine__21004__auto____0 = (function (){
var statearr_27986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27986[(0)] = cljs$core$async$mix_$_state_machine__21004__auto__);

(statearr_27986[(1)] = (1));

return statearr_27986;
});
var cljs$core$async$mix_$_state_machine__21004__auto____1 = (function (state_27943){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_27943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e27987){if((e27987 instanceof Object)){
var ex__21007__auto__ = e27987;
var statearr_27988_28021 = state_27943;
(statearr_27988_28021[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28022 = state_27943;
state_27943 = G__28022;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21004__auto__ = function(state_27943){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21004__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21004__auto____1.call(this,state_27943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21004__auto____0;
cljs$core$async$mix_$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21004__auto____1;
return cljs$core$async$mix_$_state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto___27990,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21067__auto__ = (function (){var statearr_27989 = f__21066__auto__.call(null);
(statearr_27989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto___27990);

return statearr_27989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto___27990,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj28024 = {};
return obj28024;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18047__auto__ = p;
if(and__18047__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18047__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18695__auto__ = (((p == null))?null:p);
return (function (){var or__18059__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18695__auto__)]);
if(or__18059__auto__){
return or__18059__auto__;
} else {
var or__18059__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18059__auto____$1){
return or__18059__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18047__auto__ = p;
if(and__18047__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18047__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18695__auto__ = (((p == null))?null:p);
return (function (){var or__18059__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18695__auto__)]);
if(or__18059__auto__){
return or__18059__auto__;
} else {
var or__18059__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18059__auto____$1){
return or__18059__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__28026 = arguments.length;
switch (G__28026) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18047__auto__ = p;
if(and__18047__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18047__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18695__auto__ = (((p == null))?null:p);
return (function (){var or__18059__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18695__auto__)]);
if(or__18059__auto__){
return or__18059__auto__;
} else {
var or__18059__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18059__auto____$1){
return or__18059__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18047__auto__ = p;
if(and__18047__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18047__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18695__auto__ = (((p == null))?null:p);
return (function (){var or__18059__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18695__auto__)]);
if(or__18059__auto__){
return or__18059__auto__;
} else {
var or__18059__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18059__auto____$1){
return or__18059__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__28030 = arguments.length;
switch (G__28030) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18059__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18059__auto__)){
return or__18059__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18059__auto__,mults){
return (function (p1__28028_SHARP_){
if(cljs.core.truth_(p1__28028_SHARP_.call(null,topic))){
return p1__28028_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28028_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18059__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28031 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28031 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28032){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28032 = meta28032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28033,meta28032__$1){
var self__ = this;
var _28033__$1 = this;
return (new cljs.core.async.t28031(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28032__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28031.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28033){
var self__ = this;
var _28033__$1 = this;
return self__.meta28032;
});})(mults,ensure_mult))
;

cljs.core.async.t28031.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28031.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28031.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28031.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28031.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t28031.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28031.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28031.cljs$lang$type = true;

cljs.core.async.t28031.cljs$lang$ctorStr = "cljs.core.async/t28031";

cljs.core.async.t28031.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18638__auto__,writer__18639__auto__,opt__18640__auto__){
return cljs.core._write.call(null,writer__18639__auto__,"cljs.core.async/t28031");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28031 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t28031(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28032){
return (new cljs.core.async.t28031(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28032));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28031(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21065__auto___28154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto___28154,mults,ensure_mult,p){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto___28154,mults,ensure_mult,p){
return (function (state_28105){
var state_val_28106 = (state_28105[(1)]);
if((state_val_28106 === (7))){
var inst_28101 = (state_28105[(2)]);
var state_28105__$1 = state_28105;
var statearr_28107_28155 = state_28105__$1;
(statearr_28107_28155[(2)] = inst_28101);

(statearr_28107_28155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (20))){
var state_28105__$1 = state_28105;
var statearr_28108_28156 = state_28105__$1;
(statearr_28108_28156[(2)] = null);

(statearr_28108_28156[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (1))){
var state_28105__$1 = state_28105;
var statearr_28109_28157 = state_28105__$1;
(statearr_28109_28157[(2)] = null);

(statearr_28109_28157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (24))){
var inst_28084 = (state_28105[(7)]);
var inst_28093 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28084);
var state_28105__$1 = state_28105;
var statearr_28110_28158 = state_28105__$1;
(statearr_28110_28158[(2)] = inst_28093);

(statearr_28110_28158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (4))){
var inst_28036 = (state_28105[(8)]);
var inst_28036__$1 = (state_28105[(2)]);
var inst_28037 = (inst_28036__$1 == null);
var state_28105__$1 = (function (){var statearr_28111 = state_28105;
(statearr_28111[(8)] = inst_28036__$1);

return statearr_28111;
})();
if(cljs.core.truth_(inst_28037)){
var statearr_28112_28159 = state_28105__$1;
(statearr_28112_28159[(1)] = (5));

} else {
var statearr_28113_28160 = state_28105__$1;
(statearr_28113_28160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (15))){
var inst_28078 = (state_28105[(2)]);
var state_28105__$1 = state_28105;
var statearr_28114_28161 = state_28105__$1;
(statearr_28114_28161[(2)] = inst_28078);

(statearr_28114_28161[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (21))){
var inst_28098 = (state_28105[(2)]);
var state_28105__$1 = (function (){var statearr_28115 = state_28105;
(statearr_28115[(9)] = inst_28098);

return statearr_28115;
})();
var statearr_28116_28162 = state_28105__$1;
(statearr_28116_28162[(2)] = null);

(statearr_28116_28162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (13))){
var inst_28060 = (state_28105[(10)]);
var inst_28062 = cljs.core.chunked_seq_QMARK_.call(null,inst_28060);
var state_28105__$1 = state_28105;
if(inst_28062){
var statearr_28117_28163 = state_28105__$1;
(statearr_28117_28163[(1)] = (16));

} else {
var statearr_28118_28164 = state_28105__$1;
(statearr_28118_28164[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (22))){
var inst_28090 = (state_28105[(2)]);
var state_28105__$1 = state_28105;
if(cljs.core.truth_(inst_28090)){
var statearr_28119_28165 = state_28105__$1;
(statearr_28119_28165[(1)] = (23));

} else {
var statearr_28120_28166 = state_28105__$1;
(statearr_28120_28166[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (6))){
var inst_28084 = (state_28105[(7)]);
var inst_28036 = (state_28105[(8)]);
var inst_28086 = (state_28105[(11)]);
var inst_28084__$1 = topic_fn.call(null,inst_28036);
var inst_28085 = cljs.core.deref.call(null,mults);
var inst_28086__$1 = cljs.core.get.call(null,inst_28085,inst_28084__$1);
var state_28105__$1 = (function (){var statearr_28121 = state_28105;
(statearr_28121[(7)] = inst_28084__$1);

(statearr_28121[(11)] = inst_28086__$1);

return statearr_28121;
})();
if(cljs.core.truth_(inst_28086__$1)){
var statearr_28122_28167 = state_28105__$1;
(statearr_28122_28167[(1)] = (19));

} else {
var statearr_28123_28168 = state_28105__$1;
(statearr_28123_28168[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (25))){
var inst_28095 = (state_28105[(2)]);
var state_28105__$1 = state_28105;
var statearr_28124_28169 = state_28105__$1;
(statearr_28124_28169[(2)] = inst_28095);

(statearr_28124_28169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (17))){
var inst_28060 = (state_28105[(10)]);
var inst_28069 = cljs.core.first.call(null,inst_28060);
var inst_28070 = cljs.core.async.muxch_STAR_.call(null,inst_28069);
var inst_28071 = cljs.core.async.close_BANG_.call(null,inst_28070);
var inst_28072 = cljs.core.next.call(null,inst_28060);
var inst_28046 = inst_28072;
var inst_28047 = null;
var inst_28048 = (0);
var inst_28049 = (0);
var state_28105__$1 = (function (){var statearr_28125 = state_28105;
(statearr_28125[(12)] = inst_28071);

(statearr_28125[(13)] = inst_28047);

(statearr_28125[(14)] = inst_28046);

(statearr_28125[(15)] = inst_28048);

(statearr_28125[(16)] = inst_28049);

return statearr_28125;
})();
var statearr_28126_28170 = state_28105__$1;
(statearr_28126_28170[(2)] = null);

(statearr_28126_28170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (3))){
var inst_28103 = (state_28105[(2)]);
var state_28105__$1 = state_28105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28105__$1,inst_28103);
} else {
if((state_val_28106 === (12))){
var inst_28080 = (state_28105[(2)]);
var state_28105__$1 = state_28105;
var statearr_28127_28171 = state_28105__$1;
(statearr_28127_28171[(2)] = inst_28080);

(statearr_28127_28171[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (2))){
var state_28105__$1 = state_28105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28105__$1,(4),ch);
} else {
if((state_val_28106 === (23))){
var state_28105__$1 = state_28105;
var statearr_28128_28172 = state_28105__$1;
(statearr_28128_28172[(2)] = null);

(statearr_28128_28172[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (19))){
var inst_28036 = (state_28105[(8)]);
var inst_28086 = (state_28105[(11)]);
var inst_28088 = cljs.core.async.muxch_STAR_.call(null,inst_28086);
var state_28105__$1 = state_28105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28105__$1,(22),inst_28088,inst_28036);
} else {
if((state_val_28106 === (11))){
var inst_28060 = (state_28105[(10)]);
var inst_28046 = (state_28105[(14)]);
var inst_28060__$1 = cljs.core.seq.call(null,inst_28046);
var state_28105__$1 = (function (){var statearr_28129 = state_28105;
(statearr_28129[(10)] = inst_28060__$1);

return statearr_28129;
})();
if(inst_28060__$1){
var statearr_28130_28173 = state_28105__$1;
(statearr_28130_28173[(1)] = (13));

} else {
var statearr_28131_28174 = state_28105__$1;
(statearr_28131_28174[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (9))){
var inst_28082 = (state_28105[(2)]);
var state_28105__$1 = state_28105;
var statearr_28132_28175 = state_28105__$1;
(statearr_28132_28175[(2)] = inst_28082);

(statearr_28132_28175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (5))){
var inst_28043 = cljs.core.deref.call(null,mults);
var inst_28044 = cljs.core.vals.call(null,inst_28043);
var inst_28045 = cljs.core.seq.call(null,inst_28044);
var inst_28046 = inst_28045;
var inst_28047 = null;
var inst_28048 = (0);
var inst_28049 = (0);
var state_28105__$1 = (function (){var statearr_28133 = state_28105;
(statearr_28133[(13)] = inst_28047);

(statearr_28133[(14)] = inst_28046);

(statearr_28133[(15)] = inst_28048);

(statearr_28133[(16)] = inst_28049);

return statearr_28133;
})();
var statearr_28134_28176 = state_28105__$1;
(statearr_28134_28176[(2)] = null);

(statearr_28134_28176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (14))){
var state_28105__$1 = state_28105;
var statearr_28138_28177 = state_28105__$1;
(statearr_28138_28177[(2)] = null);

(statearr_28138_28177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (16))){
var inst_28060 = (state_28105[(10)]);
var inst_28064 = cljs.core.chunk_first.call(null,inst_28060);
var inst_28065 = cljs.core.chunk_rest.call(null,inst_28060);
var inst_28066 = cljs.core.count.call(null,inst_28064);
var inst_28046 = inst_28065;
var inst_28047 = inst_28064;
var inst_28048 = inst_28066;
var inst_28049 = (0);
var state_28105__$1 = (function (){var statearr_28139 = state_28105;
(statearr_28139[(13)] = inst_28047);

(statearr_28139[(14)] = inst_28046);

(statearr_28139[(15)] = inst_28048);

(statearr_28139[(16)] = inst_28049);

return statearr_28139;
})();
var statearr_28140_28178 = state_28105__$1;
(statearr_28140_28178[(2)] = null);

(statearr_28140_28178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (10))){
var inst_28047 = (state_28105[(13)]);
var inst_28046 = (state_28105[(14)]);
var inst_28048 = (state_28105[(15)]);
var inst_28049 = (state_28105[(16)]);
var inst_28054 = cljs.core._nth.call(null,inst_28047,inst_28049);
var inst_28055 = cljs.core.async.muxch_STAR_.call(null,inst_28054);
var inst_28056 = cljs.core.async.close_BANG_.call(null,inst_28055);
var inst_28057 = (inst_28049 + (1));
var tmp28135 = inst_28047;
var tmp28136 = inst_28046;
var tmp28137 = inst_28048;
var inst_28046__$1 = tmp28136;
var inst_28047__$1 = tmp28135;
var inst_28048__$1 = tmp28137;
var inst_28049__$1 = inst_28057;
var state_28105__$1 = (function (){var statearr_28141 = state_28105;
(statearr_28141[(13)] = inst_28047__$1);

(statearr_28141[(14)] = inst_28046__$1);

(statearr_28141[(17)] = inst_28056);

(statearr_28141[(15)] = inst_28048__$1);

(statearr_28141[(16)] = inst_28049__$1);

return statearr_28141;
})();
var statearr_28142_28179 = state_28105__$1;
(statearr_28142_28179[(2)] = null);

(statearr_28142_28179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (18))){
var inst_28075 = (state_28105[(2)]);
var state_28105__$1 = state_28105;
var statearr_28143_28180 = state_28105__$1;
(statearr_28143_28180[(2)] = inst_28075);

(statearr_28143_28180[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28106 === (8))){
var inst_28048 = (state_28105[(15)]);
var inst_28049 = (state_28105[(16)]);
var inst_28051 = (inst_28049 < inst_28048);
var inst_28052 = inst_28051;
var state_28105__$1 = state_28105;
if(cljs.core.truth_(inst_28052)){
var statearr_28144_28181 = state_28105__$1;
(statearr_28144_28181[(1)] = (10));

} else {
var statearr_28145_28182 = state_28105__$1;
(statearr_28145_28182[(1)] = (11));

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
});})(c__21065__auto___28154,mults,ensure_mult,p))
;
return ((function (switch__21003__auto__,c__21065__auto___28154,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21004__auto__ = null;
var cljs$core$async$state_machine__21004__auto____0 = (function (){
var statearr_28149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28149[(0)] = cljs$core$async$state_machine__21004__auto__);

(statearr_28149[(1)] = (1));

return statearr_28149;
});
var cljs$core$async$state_machine__21004__auto____1 = (function (state_28105){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_28105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e28150){if((e28150 instanceof Object)){
var ex__21007__auto__ = e28150;
var statearr_28151_28183 = state_28105;
(statearr_28151_28183[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28184 = state_28105;
state_28105 = G__28184;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
cljs$core$async$state_machine__21004__auto__ = function(state_28105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21004__auto____1.call(this,state_28105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21004__auto____0;
cljs$core$async$state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21004__auto____1;
return cljs$core$async$state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto___28154,mults,ensure_mult,p))
})();
var state__21067__auto__ = (function (){var statearr_28152 = f__21066__auto__.call(null);
(statearr_28152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto___28154);

return statearr_28152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto___28154,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__28186 = arguments.length;
switch (G__28186) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__28189 = arguments.length;
switch (G__28189) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__28192 = arguments.length;
switch (G__28192) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21065__auto___28262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto___28262,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto___28262,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28231){
var state_val_28232 = (state_28231[(1)]);
if((state_val_28232 === (7))){
var state_28231__$1 = state_28231;
var statearr_28233_28263 = state_28231__$1;
(statearr_28233_28263[(2)] = null);

(statearr_28233_28263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (1))){
var state_28231__$1 = state_28231;
var statearr_28234_28264 = state_28231__$1;
(statearr_28234_28264[(2)] = null);

(statearr_28234_28264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (4))){
var inst_28195 = (state_28231[(7)]);
var inst_28197 = (inst_28195 < cnt);
var state_28231__$1 = state_28231;
if(cljs.core.truth_(inst_28197)){
var statearr_28235_28265 = state_28231__$1;
(statearr_28235_28265[(1)] = (6));

} else {
var statearr_28236_28266 = state_28231__$1;
(statearr_28236_28266[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (15))){
var inst_28227 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
var statearr_28237_28267 = state_28231__$1;
(statearr_28237_28267[(2)] = inst_28227);

(statearr_28237_28267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (13))){
var inst_28220 = cljs.core.async.close_BANG_.call(null,out);
var state_28231__$1 = state_28231;
var statearr_28238_28268 = state_28231__$1;
(statearr_28238_28268[(2)] = inst_28220);

(statearr_28238_28268[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (6))){
var state_28231__$1 = state_28231;
var statearr_28239_28269 = state_28231__$1;
(statearr_28239_28269[(2)] = null);

(statearr_28239_28269[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (3))){
var inst_28229 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28231__$1,inst_28229);
} else {
if((state_val_28232 === (12))){
var inst_28217 = (state_28231[(8)]);
var inst_28217__$1 = (state_28231[(2)]);
var inst_28218 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28217__$1);
var state_28231__$1 = (function (){var statearr_28240 = state_28231;
(statearr_28240[(8)] = inst_28217__$1);

return statearr_28240;
})();
if(cljs.core.truth_(inst_28218)){
var statearr_28241_28270 = state_28231__$1;
(statearr_28241_28270[(1)] = (13));

} else {
var statearr_28242_28271 = state_28231__$1;
(statearr_28242_28271[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (2))){
var inst_28194 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28195 = (0);
var state_28231__$1 = (function (){var statearr_28243 = state_28231;
(statearr_28243[(7)] = inst_28195);

(statearr_28243[(9)] = inst_28194);

return statearr_28243;
})();
var statearr_28244_28272 = state_28231__$1;
(statearr_28244_28272[(2)] = null);

(statearr_28244_28272[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (11))){
var inst_28195 = (state_28231[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28231,(10),Object,null,(9));
var inst_28204 = chs__$1.call(null,inst_28195);
var inst_28205 = done.call(null,inst_28195);
var inst_28206 = cljs.core.async.take_BANG_.call(null,inst_28204,inst_28205);
var state_28231__$1 = state_28231;
var statearr_28245_28273 = state_28231__$1;
(statearr_28245_28273[(2)] = inst_28206);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28231__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (9))){
var inst_28195 = (state_28231[(7)]);
var inst_28208 = (state_28231[(2)]);
var inst_28209 = (inst_28195 + (1));
var inst_28195__$1 = inst_28209;
var state_28231__$1 = (function (){var statearr_28246 = state_28231;
(statearr_28246[(7)] = inst_28195__$1);

(statearr_28246[(10)] = inst_28208);

return statearr_28246;
})();
var statearr_28247_28274 = state_28231__$1;
(statearr_28247_28274[(2)] = null);

(statearr_28247_28274[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (5))){
var inst_28215 = (state_28231[(2)]);
var state_28231__$1 = (function (){var statearr_28248 = state_28231;
(statearr_28248[(11)] = inst_28215);

return statearr_28248;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28231__$1,(12),dchan);
} else {
if((state_val_28232 === (14))){
var inst_28217 = (state_28231[(8)]);
var inst_28222 = cljs.core.apply.call(null,f,inst_28217);
var state_28231__$1 = state_28231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28231__$1,(16),out,inst_28222);
} else {
if((state_val_28232 === (16))){
var inst_28224 = (state_28231[(2)]);
var state_28231__$1 = (function (){var statearr_28249 = state_28231;
(statearr_28249[(12)] = inst_28224);

return statearr_28249;
})();
var statearr_28250_28275 = state_28231__$1;
(statearr_28250_28275[(2)] = null);

(statearr_28250_28275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (10))){
var inst_28199 = (state_28231[(2)]);
var inst_28200 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28231__$1 = (function (){var statearr_28251 = state_28231;
(statearr_28251[(13)] = inst_28199);

return statearr_28251;
})();
var statearr_28252_28276 = state_28231__$1;
(statearr_28252_28276[(2)] = inst_28200);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28231__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (8))){
var inst_28213 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
var statearr_28253_28277 = state_28231__$1;
(statearr_28253_28277[(2)] = inst_28213);

(statearr_28253_28277[(1)] = (5));


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
});})(c__21065__auto___28262,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21003__auto__,c__21065__auto___28262,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21004__auto__ = null;
var cljs$core$async$state_machine__21004__auto____0 = (function (){
var statearr_28257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28257[(0)] = cljs$core$async$state_machine__21004__auto__);

(statearr_28257[(1)] = (1));

return statearr_28257;
});
var cljs$core$async$state_machine__21004__auto____1 = (function (state_28231){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_28231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e28258){if((e28258 instanceof Object)){
var ex__21007__auto__ = e28258;
var statearr_28259_28278 = state_28231;
(statearr_28259_28278[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28279 = state_28231;
state_28231 = G__28279;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
cljs$core$async$state_machine__21004__auto__ = function(state_28231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21004__auto____1.call(this,state_28231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21004__auto____0;
cljs$core$async$state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21004__auto____1;
return cljs$core$async$state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto___28262,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21067__auto__ = (function (){var statearr_28260 = f__21066__auto__.call(null);
(statearr_28260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto___28262);

return statearr_28260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto___28262,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__28282 = arguments.length;
switch (G__28282) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21065__auto___28337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto___28337,out){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto___28337,out){
return (function (state_28312){
var state_val_28313 = (state_28312[(1)]);
if((state_val_28313 === (7))){
var inst_28292 = (state_28312[(7)]);
var inst_28291 = (state_28312[(8)]);
var inst_28291__$1 = (state_28312[(2)]);
var inst_28292__$1 = cljs.core.nth.call(null,inst_28291__$1,(0),null);
var inst_28293 = cljs.core.nth.call(null,inst_28291__$1,(1),null);
var inst_28294 = (inst_28292__$1 == null);
var state_28312__$1 = (function (){var statearr_28314 = state_28312;
(statearr_28314[(7)] = inst_28292__$1);

(statearr_28314[(9)] = inst_28293);

(statearr_28314[(8)] = inst_28291__$1);

return statearr_28314;
})();
if(cljs.core.truth_(inst_28294)){
var statearr_28315_28338 = state_28312__$1;
(statearr_28315_28338[(1)] = (8));

} else {
var statearr_28316_28339 = state_28312__$1;
(statearr_28316_28339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28313 === (1))){
var inst_28283 = cljs.core.vec.call(null,chs);
var inst_28284 = inst_28283;
var state_28312__$1 = (function (){var statearr_28317 = state_28312;
(statearr_28317[(10)] = inst_28284);

return statearr_28317;
})();
var statearr_28318_28340 = state_28312__$1;
(statearr_28318_28340[(2)] = null);

(statearr_28318_28340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28313 === (4))){
var inst_28284 = (state_28312[(10)]);
var state_28312__$1 = state_28312;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28312__$1,(7),inst_28284);
} else {
if((state_val_28313 === (6))){
var inst_28308 = (state_28312[(2)]);
var state_28312__$1 = state_28312;
var statearr_28319_28341 = state_28312__$1;
(statearr_28319_28341[(2)] = inst_28308);

(statearr_28319_28341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28313 === (3))){
var inst_28310 = (state_28312[(2)]);
var state_28312__$1 = state_28312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28312__$1,inst_28310);
} else {
if((state_val_28313 === (2))){
var inst_28284 = (state_28312[(10)]);
var inst_28286 = cljs.core.count.call(null,inst_28284);
var inst_28287 = (inst_28286 > (0));
var state_28312__$1 = state_28312;
if(cljs.core.truth_(inst_28287)){
var statearr_28321_28342 = state_28312__$1;
(statearr_28321_28342[(1)] = (4));

} else {
var statearr_28322_28343 = state_28312__$1;
(statearr_28322_28343[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28313 === (11))){
var inst_28284 = (state_28312[(10)]);
var inst_28301 = (state_28312[(2)]);
var tmp28320 = inst_28284;
var inst_28284__$1 = tmp28320;
var state_28312__$1 = (function (){var statearr_28323 = state_28312;
(statearr_28323[(11)] = inst_28301);

(statearr_28323[(10)] = inst_28284__$1);

return statearr_28323;
})();
var statearr_28324_28344 = state_28312__$1;
(statearr_28324_28344[(2)] = null);

(statearr_28324_28344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28313 === (9))){
var inst_28292 = (state_28312[(7)]);
var state_28312__$1 = state_28312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28312__$1,(11),out,inst_28292);
} else {
if((state_val_28313 === (5))){
var inst_28306 = cljs.core.async.close_BANG_.call(null,out);
var state_28312__$1 = state_28312;
var statearr_28325_28345 = state_28312__$1;
(statearr_28325_28345[(2)] = inst_28306);

(statearr_28325_28345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28313 === (10))){
var inst_28304 = (state_28312[(2)]);
var state_28312__$1 = state_28312;
var statearr_28326_28346 = state_28312__$1;
(statearr_28326_28346[(2)] = inst_28304);

(statearr_28326_28346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28313 === (8))){
var inst_28292 = (state_28312[(7)]);
var inst_28293 = (state_28312[(9)]);
var inst_28284 = (state_28312[(10)]);
var inst_28291 = (state_28312[(8)]);
var inst_28296 = (function (){var cs = inst_28284;
var vec__28289 = inst_28291;
var v = inst_28292;
var c = inst_28293;
return ((function (cs,vec__28289,v,c,inst_28292,inst_28293,inst_28284,inst_28291,state_val_28313,c__21065__auto___28337,out){
return (function (p1__28280_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28280_SHARP_);
});
;})(cs,vec__28289,v,c,inst_28292,inst_28293,inst_28284,inst_28291,state_val_28313,c__21065__auto___28337,out))
})();
var inst_28297 = cljs.core.filterv.call(null,inst_28296,inst_28284);
var inst_28284__$1 = inst_28297;
var state_28312__$1 = (function (){var statearr_28327 = state_28312;
(statearr_28327[(10)] = inst_28284__$1);

return statearr_28327;
})();
var statearr_28328_28347 = state_28312__$1;
(statearr_28328_28347[(2)] = null);

(statearr_28328_28347[(1)] = (2));


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
});})(c__21065__auto___28337,out))
;
return ((function (switch__21003__auto__,c__21065__auto___28337,out){
return (function() {
var cljs$core$async$state_machine__21004__auto__ = null;
var cljs$core$async$state_machine__21004__auto____0 = (function (){
var statearr_28332 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28332[(0)] = cljs$core$async$state_machine__21004__auto__);

(statearr_28332[(1)] = (1));

return statearr_28332;
});
var cljs$core$async$state_machine__21004__auto____1 = (function (state_28312){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_28312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e28333){if((e28333 instanceof Object)){
var ex__21007__auto__ = e28333;
var statearr_28334_28348 = state_28312;
(statearr_28334_28348[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28349 = state_28312;
state_28312 = G__28349;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
cljs$core$async$state_machine__21004__auto__ = function(state_28312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21004__auto____1.call(this,state_28312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21004__auto____0;
cljs$core$async$state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21004__auto____1;
return cljs$core$async$state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto___28337,out))
})();
var state__21067__auto__ = (function (){var statearr_28335 = f__21066__auto__.call(null);
(statearr_28335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto___28337);

return statearr_28335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto___28337,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__28351 = arguments.length;
switch (G__28351) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21065__auto___28399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto___28399,out){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto___28399,out){
return (function (state_28375){
var state_val_28376 = (state_28375[(1)]);
if((state_val_28376 === (7))){
var inst_28357 = (state_28375[(7)]);
var inst_28357__$1 = (state_28375[(2)]);
var inst_28358 = (inst_28357__$1 == null);
var inst_28359 = cljs.core.not.call(null,inst_28358);
var state_28375__$1 = (function (){var statearr_28377 = state_28375;
(statearr_28377[(7)] = inst_28357__$1);

return statearr_28377;
})();
if(inst_28359){
var statearr_28378_28400 = state_28375__$1;
(statearr_28378_28400[(1)] = (8));

} else {
var statearr_28379_28401 = state_28375__$1;
(statearr_28379_28401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (1))){
var inst_28352 = (0);
var state_28375__$1 = (function (){var statearr_28380 = state_28375;
(statearr_28380[(8)] = inst_28352);

return statearr_28380;
})();
var statearr_28381_28402 = state_28375__$1;
(statearr_28381_28402[(2)] = null);

(statearr_28381_28402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (4))){
var state_28375__$1 = state_28375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28375__$1,(7),ch);
} else {
if((state_val_28376 === (6))){
var inst_28370 = (state_28375[(2)]);
var state_28375__$1 = state_28375;
var statearr_28382_28403 = state_28375__$1;
(statearr_28382_28403[(2)] = inst_28370);

(statearr_28382_28403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (3))){
var inst_28372 = (state_28375[(2)]);
var inst_28373 = cljs.core.async.close_BANG_.call(null,out);
var state_28375__$1 = (function (){var statearr_28383 = state_28375;
(statearr_28383[(9)] = inst_28372);

return statearr_28383;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28375__$1,inst_28373);
} else {
if((state_val_28376 === (2))){
var inst_28352 = (state_28375[(8)]);
var inst_28354 = (inst_28352 < n);
var state_28375__$1 = state_28375;
if(cljs.core.truth_(inst_28354)){
var statearr_28384_28404 = state_28375__$1;
(statearr_28384_28404[(1)] = (4));

} else {
var statearr_28385_28405 = state_28375__$1;
(statearr_28385_28405[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (11))){
var inst_28352 = (state_28375[(8)]);
var inst_28362 = (state_28375[(2)]);
var inst_28363 = (inst_28352 + (1));
var inst_28352__$1 = inst_28363;
var state_28375__$1 = (function (){var statearr_28386 = state_28375;
(statearr_28386[(10)] = inst_28362);

(statearr_28386[(8)] = inst_28352__$1);

return statearr_28386;
})();
var statearr_28387_28406 = state_28375__$1;
(statearr_28387_28406[(2)] = null);

(statearr_28387_28406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (9))){
var state_28375__$1 = state_28375;
var statearr_28388_28407 = state_28375__$1;
(statearr_28388_28407[(2)] = null);

(statearr_28388_28407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (5))){
var state_28375__$1 = state_28375;
var statearr_28389_28408 = state_28375__$1;
(statearr_28389_28408[(2)] = null);

(statearr_28389_28408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (10))){
var inst_28367 = (state_28375[(2)]);
var state_28375__$1 = state_28375;
var statearr_28390_28409 = state_28375__$1;
(statearr_28390_28409[(2)] = inst_28367);

(statearr_28390_28409[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (8))){
var inst_28357 = (state_28375[(7)]);
var state_28375__$1 = state_28375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28375__$1,(11),out,inst_28357);
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
});})(c__21065__auto___28399,out))
;
return ((function (switch__21003__auto__,c__21065__auto___28399,out){
return (function() {
var cljs$core$async$state_machine__21004__auto__ = null;
var cljs$core$async$state_machine__21004__auto____0 = (function (){
var statearr_28394 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28394[(0)] = cljs$core$async$state_machine__21004__auto__);

(statearr_28394[(1)] = (1));

return statearr_28394;
});
var cljs$core$async$state_machine__21004__auto____1 = (function (state_28375){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_28375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e28395){if((e28395 instanceof Object)){
var ex__21007__auto__ = e28395;
var statearr_28396_28410 = state_28375;
(statearr_28396_28410[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28411 = state_28375;
state_28375 = G__28411;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
cljs$core$async$state_machine__21004__auto__ = function(state_28375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21004__auto____1.call(this,state_28375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21004__auto____0;
cljs$core$async$state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21004__auto____1;
return cljs$core$async$state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto___28399,out))
})();
var state__21067__auto__ = (function (){var statearr_28397 = f__21066__auto__.call(null);
(statearr_28397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto___28399);

return statearr_28397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto___28399,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t28419 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28419 = (function (map_LT_,f,ch,meta28420){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28420 = meta28420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28421,meta28420__$1){
var self__ = this;
var _28421__$1 = this;
return (new cljs.core.async.t28419(self__.map_LT_,self__.f,self__.ch,meta28420__$1));
});

cljs.core.async.t28419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28421){
var self__ = this;
var _28421__$1 = this;
return self__.meta28420;
});

cljs.core.async.t28419.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28419.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28419.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28419.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28419.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28422 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28422 = (function (map_LT_,f,ch,meta28420,_,fn1,meta28423){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28420 = meta28420;
this._ = _;
this.fn1 = fn1;
this.meta28423 = meta28423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28424,meta28423__$1){
var self__ = this;
var _28424__$1 = this;
return (new cljs.core.async.t28422(self__.map_LT_,self__.f,self__.ch,self__.meta28420,self__._,self__.fn1,meta28423__$1));
});})(___$1))
;

cljs.core.async.t28422.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28424){
var self__ = this;
var _28424__$1 = this;
return self__.meta28423;
});})(___$1))
;

cljs.core.async.t28422.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28422.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28422.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28412_SHARP_){
return f1.call(null,(((p1__28412_SHARP_ == null))?null:self__.f.call(null,p1__28412_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28422.cljs$lang$type = true;

cljs.core.async.t28422.cljs$lang$ctorStr = "cljs.core.async/t28422";

cljs.core.async.t28422.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18638__auto__,writer__18639__auto__,opt__18640__auto__){
return cljs.core._write.call(null,writer__18639__auto__,"cljs.core.async/t28422");
});})(___$1))
;

cljs.core.async.__GT_t28422 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t28422(map_LT___$1,f__$1,ch__$1,meta28420__$1,___$2,fn1__$1,meta28423){
return (new cljs.core.async.t28422(map_LT___$1,f__$1,ch__$1,meta28420__$1,___$2,fn1__$1,meta28423));
});})(___$1))
;

}

return (new cljs.core.async.t28422(self__.map_LT_,self__.f,self__.ch,self__.meta28420,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18047__auto__ = ret;
if(cljs.core.truth_(and__18047__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18047__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t28419.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28419.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28419.cljs$lang$type = true;

cljs.core.async.t28419.cljs$lang$ctorStr = "cljs.core.async/t28419";

cljs.core.async.t28419.cljs$lang$ctorPrWriter = (function (this__18638__auto__,writer__18639__auto__,opt__18640__auto__){
return cljs.core._write.call(null,writer__18639__auto__,"cljs.core.async/t28419");
});

cljs.core.async.__GT_t28419 = (function cljs$core$async$map_LT__$___GT_t28419(map_LT___$1,f__$1,ch__$1,meta28420){
return (new cljs.core.async.t28419(map_LT___$1,f__$1,ch__$1,meta28420));
});

}

return (new cljs.core.async.t28419(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t28428 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28428 = (function (map_GT_,f,ch,meta28429){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28429 = meta28429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28430,meta28429__$1){
var self__ = this;
var _28430__$1 = this;
return (new cljs.core.async.t28428(self__.map_GT_,self__.f,self__.ch,meta28429__$1));
});

cljs.core.async.t28428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28430){
var self__ = this;
var _28430__$1 = this;
return self__.meta28429;
});

cljs.core.async.t28428.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28428.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28428.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28428.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28428.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28428.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28428.cljs$lang$type = true;

cljs.core.async.t28428.cljs$lang$ctorStr = "cljs.core.async/t28428";

cljs.core.async.t28428.cljs$lang$ctorPrWriter = (function (this__18638__auto__,writer__18639__auto__,opt__18640__auto__){
return cljs.core._write.call(null,writer__18639__auto__,"cljs.core.async/t28428");
});

cljs.core.async.__GT_t28428 = (function cljs$core$async$map_GT__$___GT_t28428(map_GT___$1,f__$1,ch__$1,meta28429){
return (new cljs.core.async.t28428(map_GT___$1,f__$1,ch__$1,meta28429));
});

}

return (new cljs.core.async.t28428(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t28434 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28434 = (function (filter_GT_,p,ch,meta28435){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28435 = meta28435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28436,meta28435__$1){
var self__ = this;
var _28436__$1 = this;
return (new cljs.core.async.t28434(self__.filter_GT_,self__.p,self__.ch,meta28435__$1));
});

cljs.core.async.t28434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28436){
var self__ = this;
var _28436__$1 = this;
return self__.meta28435;
});

cljs.core.async.t28434.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28434.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28434.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28434.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28434.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28434.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28434.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28434.cljs$lang$type = true;

cljs.core.async.t28434.cljs$lang$ctorStr = "cljs.core.async/t28434";

cljs.core.async.t28434.cljs$lang$ctorPrWriter = (function (this__18638__auto__,writer__18639__auto__,opt__18640__auto__){
return cljs.core._write.call(null,writer__18639__auto__,"cljs.core.async/t28434");
});

cljs.core.async.__GT_t28434 = (function cljs$core$async$filter_GT__$___GT_t28434(filter_GT___$1,p__$1,ch__$1,meta28435){
return (new cljs.core.async.t28434(filter_GT___$1,p__$1,ch__$1,meta28435));
});

}

return (new cljs.core.async.t28434(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__28438 = arguments.length;
switch (G__28438) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21065__auto___28481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto___28481,out){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto___28481,out){
return (function (state_28459){
var state_val_28460 = (state_28459[(1)]);
if((state_val_28460 === (7))){
var inst_28455 = (state_28459[(2)]);
var state_28459__$1 = state_28459;
var statearr_28461_28482 = state_28459__$1;
(statearr_28461_28482[(2)] = inst_28455);

(statearr_28461_28482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (1))){
var state_28459__$1 = state_28459;
var statearr_28462_28483 = state_28459__$1;
(statearr_28462_28483[(2)] = null);

(statearr_28462_28483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (4))){
var inst_28441 = (state_28459[(7)]);
var inst_28441__$1 = (state_28459[(2)]);
var inst_28442 = (inst_28441__$1 == null);
var state_28459__$1 = (function (){var statearr_28463 = state_28459;
(statearr_28463[(7)] = inst_28441__$1);

return statearr_28463;
})();
if(cljs.core.truth_(inst_28442)){
var statearr_28464_28484 = state_28459__$1;
(statearr_28464_28484[(1)] = (5));

} else {
var statearr_28465_28485 = state_28459__$1;
(statearr_28465_28485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (6))){
var inst_28441 = (state_28459[(7)]);
var inst_28446 = p.call(null,inst_28441);
var state_28459__$1 = state_28459;
if(cljs.core.truth_(inst_28446)){
var statearr_28466_28486 = state_28459__$1;
(statearr_28466_28486[(1)] = (8));

} else {
var statearr_28467_28487 = state_28459__$1;
(statearr_28467_28487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (3))){
var inst_28457 = (state_28459[(2)]);
var state_28459__$1 = state_28459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28459__$1,inst_28457);
} else {
if((state_val_28460 === (2))){
var state_28459__$1 = state_28459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28459__$1,(4),ch);
} else {
if((state_val_28460 === (11))){
var inst_28449 = (state_28459[(2)]);
var state_28459__$1 = state_28459;
var statearr_28468_28488 = state_28459__$1;
(statearr_28468_28488[(2)] = inst_28449);

(statearr_28468_28488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (9))){
var state_28459__$1 = state_28459;
var statearr_28469_28489 = state_28459__$1;
(statearr_28469_28489[(2)] = null);

(statearr_28469_28489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (5))){
var inst_28444 = cljs.core.async.close_BANG_.call(null,out);
var state_28459__$1 = state_28459;
var statearr_28470_28490 = state_28459__$1;
(statearr_28470_28490[(2)] = inst_28444);

(statearr_28470_28490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (10))){
var inst_28452 = (state_28459[(2)]);
var state_28459__$1 = (function (){var statearr_28471 = state_28459;
(statearr_28471[(8)] = inst_28452);

return statearr_28471;
})();
var statearr_28472_28491 = state_28459__$1;
(statearr_28472_28491[(2)] = null);

(statearr_28472_28491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28460 === (8))){
var inst_28441 = (state_28459[(7)]);
var state_28459__$1 = state_28459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28459__$1,(11),out,inst_28441);
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
});})(c__21065__auto___28481,out))
;
return ((function (switch__21003__auto__,c__21065__auto___28481,out){
return (function() {
var cljs$core$async$state_machine__21004__auto__ = null;
var cljs$core$async$state_machine__21004__auto____0 = (function (){
var statearr_28476 = [null,null,null,null,null,null,null,null,null];
(statearr_28476[(0)] = cljs$core$async$state_machine__21004__auto__);

(statearr_28476[(1)] = (1));

return statearr_28476;
});
var cljs$core$async$state_machine__21004__auto____1 = (function (state_28459){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_28459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e28477){if((e28477 instanceof Object)){
var ex__21007__auto__ = e28477;
var statearr_28478_28492 = state_28459;
(statearr_28478_28492[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28493 = state_28459;
state_28459 = G__28493;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
cljs$core$async$state_machine__21004__auto__ = function(state_28459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21004__auto____1.call(this,state_28459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21004__auto____0;
cljs$core$async$state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21004__auto____1;
return cljs$core$async$state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto___28481,out))
})();
var state__21067__auto__ = (function (){var statearr_28479 = f__21066__auto__.call(null);
(statearr_28479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto___28481);

return statearr_28479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto___28481,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__28495 = arguments.length;
switch (G__28495) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21065__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto__){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto__){
return (function (state_28662){
var state_val_28663 = (state_28662[(1)]);
if((state_val_28663 === (7))){
var inst_28658 = (state_28662[(2)]);
var state_28662__$1 = state_28662;
var statearr_28664_28705 = state_28662__$1;
(statearr_28664_28705[(2)] = inst_28658);

(statearr_28664_28705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (20))){
var inst_28628 = (state_28662[(7)]);
var inst_28639 = (state_28662[(2)]);
var inst_28640 = cljs.core.next.call(null,inst_28628);
var inst_28614 = inst_28640;
var inst_28615 = null;
var inst_28616 = (0);
var inst_28617 = (0);
var state_28662__$1 = (function (){var statearr_28665 = state_28662;
(statearr_28665[(8)] = inst_28614);

(statearr_28665[(9)] = inst_28616);

(statearr_28665[(10)] = inst_28617);

(statearr_28665[(11)] = inst_28615);

(statearr_28665[(12)] = inst_28639);

return statearr_28665;
})();
var statearr_28666_28706 = state_28662__$1;
(statearr_28666_28706[(2)] = null);

(statearr_28666_28706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (1))){
var state_28662__$1 = state_28662;
var statearr_28667_28707 = state_28662__$1;
(statearr_28667_28707[(2)] = null);

(statearr_28667_28707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (4))){
var inst_28603 = (state_28662[(13)]);
var inst_28603__$1 = (state_28662[(2)]);
var inst_28604 = (inst_28603__$1 == null);
var state_28662__$1 = (function (){var statearr_28668 = state_28662;
(statearr_28668[(13)] = inst_28603__$1);

return statearr_28668;
})();
if(cljs.core.truth_(inst_28604)){
var statearr_28669_28708 = state_28662__$1;
(statearr_28669_28708[(1)] = (5));

} else {
var statearr_28670_28709 = state_28662__$1;
(statearr_28670_28709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (15))){
var state_28662__$1 = state_28662;
var statearr_28674_28710 = state_28662__$1;
(statearr_28674_28710[(2)] = null);

(statearr_28674_28710[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (21))){
var state_28662__$1 = state_28662;
var statearr_28675_28711 = state_28662__$1;
(statearr_28675_28711[(2)] = null);

(statearr_28675_28711[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (13))){
var inst_28614 = (state_28662[(8)]);
var inst_28616 = (state_28662[(9)]);
var inst_28617 = (state_28662[(10)]);
var inst_28615 = (state_28662[(11)]);
var inst_28624 = (state_28662[(2)]);
var inst_28625 = (inst_28617 + (1));
var tmp28671 = inst_28614;
var tmp28672 = inst_28616;
var tmp28673 = inst_28615;
var inst_28614__$1 = tmp28671;
var inst_28615__$1 = tmp28673;
var inst_28616__$1 = tmp28672;
var inst_28617__$1 = inst_28625;
var state_28662__$1 = (function (){var statearr_28676 = state_28662;
(statearr_28676[(8)] = inst_28614__$1);

(statearr_28676[(14)] = inst_28624);

(statearr_28676[(9)] = inst_28616__$1);

(statearr_28676[(10)] = inst_28617__$1);

(statearr_28676[(11)] = inst_28615__$1);

return statearr_28676;
})();
var statearr_28677_28712 = state_28662__$1;
(statearr_28677_28712[(2)] = null);

(statearr_28677_28712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (22))){
var state_28662__$1 = state_28662;
var statearr_28678_28713 = state_28662__$1;
(statearr_28678_28713[(2)] = null);

(statearr_28678_28713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (6))){
var inst_28603 = (state_28662[(13)]);
var inst_28612 = f.call(null,inst_28603);
var inst_28613 = cljs.core.seq.call(null,inst_28612);
var inst_28614 = inst_28613;
var inst_28615 = null;
var inst_28616 = (0);
var inst_28617 = (0);
var state_28662__$1 = (function (){var statearr_28679 = state_28662;
(statearr_28679[(8)] = inst_28614);

(statearr_28679[(9)] = inst_28616);

(statearr_28679[(10)] = inst_28617);

(statearr_28679[(11)] = inst_28615);

return statearr_28679;
})();
var statearr_28680_28714 = state_28662__$1;
(statearr_28680_28714[(2)] = null);

(statearr_28680_28714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (17))){
var inst_28628 = (state_28662[(7)]);
var inst_28632 = cljs.core.chunk_first.call(null,inst_28628);
var inst_28633 = cljs.core.chunk_rest.call(null,inst_28628);
var inst_28634 = cljs.core.count.call(null,inst_28632);
var inst_28614 = inst_28633;
var inst_28615 = inst_28632;
var inst_28616 = inst_28634;
var inst_28617 = (0);
var state_28662__$1 = (function (){var statearr_28681 = state_28662;
(statearr_28681[(8)] = inst_28614);

(statearr_28681[(9)] = inst_28616);

(statearr_28681[(10)] = inst_28617);

(statearr_28681[(11)] = inst_28615);

return statearr_28681;
})();
var statearr_28682_28715 = state_28662__$1;
(statearr_28682_28715[(2)] = null);

(statearr_28682_28715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (3))){
var inst_28660 = (state_28662[(2)]);
var state_28662__$1 = state_28662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28662__$1,inst_28660);
} else {
if((state_val_28663 === (12))){
var inst_28648 = (state_28662[(2)]);
var state_28662__$1 = state_28662;
var statearr_28683_28716 = state_28662__$1;
(statearr_28683_28716[(2)] = inst_28648);

(statearr_28683_28716[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (2))){
var state_28662__$1 = state_28662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28662__$1,(4),in$);
} else {
if((state_val_28663 === (23))){
var inst_28656 = (state_28662[(2)]);
var state_28662__$1 = state_28662;
var statearr_28684_28717 = state_28662__$1;
(statearr_28684_28717[(2)] = inst_28656);

(statearr_28684_28717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (19))){
var inst_28643 = (state_28662[(2)]);
var state_28662__$1 = state_28662;
var statearr_28685_28718 = state_28662__$1;
(statearr_28685_28718[(2)] = inst_28643);

(statearr_28685_28718[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (11))){
var inst_28628 = (state_28662[(7)]);
var inst_28614 = (state_28662[(8)]);
var inst_28628__$1 = cljs.core.seq.call(null,inst_28614);
var state_28662__$1 = (function (){var statearr_28686 = state_28662;
(statearr_28686[(7)] = inst_28628__$1);

return statearr_28686;
})();
if(inst_28628__$1){
var statearr_28687_28719 = state_28662__$1;
(statearr_28687_28719[(1)] = (14));

} else {
var statearr_28688_28720 = state_28662__$1;
(statearr_28688_28720[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (9))){
var inst_28650 = (state_28662[(2)]);
var inst_28651 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28662__$1 = (function (){var statearr_28689 = state_28662;
(statearr_28689[(15)] = inst_28650);

return statearr_28689;
})();
if(cljs.core.truth_(inst_28651)){
var statearr_28690_28721 = state_28662__$1;
(statearr_28690_28721[(1)] = (21));

} else {
var statearr_28691_28722 = state_28662__$1;
(statearr_28691_28722[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (5))){
var inst_28606 = cljs.core.async.close_BANG_.call(null,out);
var state_28662__$1 = state_28662;
var statearr_28692_28723 = state_28662__$1;
(statearr_28692_28723[(2)] = inst_28606);

(statearr_28692_28723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (14))){
var inst_28628 = (state_28662[(7)]);
var inst_28630 = cljs.core.chunked_seq_QMARK_.call(null,inst_28628);
var state_28662__$1 = state_28662;
if(inst_28630){
var statearr_28693_28724 = state_28662__$1;
(statearr_28693_28724[(1)] = (17));

} else {
var statearr_28694_28725 = state_28662__$1;
(statearr_28694_28725[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (16))){
var inst_28646 = (state_28662[(2)]);
var state_28662__$1 = state_28662;
var statearr_28695_28726 = state_28662__$1;
(statearr_28695_28726[(2)] = inst_28646);

(statearr_28695_28726[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28663 === (10))){
var inst_28617 = (state_28662[(10)]);
var inst_28615 = (state_28662[(11)]);
var inst_28622 = cljs.core._nth.call(null,inst_28615,inst_28617);
var state_28662__$1 = state_28662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28662__$1,(13),out,inst_28622);
} else {
if((state_val_28663 === (18))){
var inst_28628 = (state_28662[(7)]);
var inst_28637 = cljs.core.first.call(null,inst_28628);
var state_28662__$1 = state_28662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28662__$1,(20),out,inst_28637);
} else {
if((state_val_28663 === (8))){
var inst_28616 = (state_28662[(9)]);
var inst_28617 = (state_28662[(10)]);
var inst_28619 = (inst_28617 < inst_28616);
var inst_28620 = inst_28619;
var state_28662__$1 = state_28662;
if(cljs.core.truth_(inst_28620)){
var statearr_28696_28727 = state_28662__$1;
(statearr_28696_28727[(1)] = (10));

} else {
var statearr_28697_28728 = state_28662__$1;
(statearr_28697_28728[(1)] = (11));

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
});})(c__21065__auto__))
;
return ((function (switch__21003__auto__,c__21065__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21004__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21004__auto____0 = (function (){
var statearr_28701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28701[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21004__auto__);

(statearr_28701[(1)] = (1));

return statearr_28701;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21004__auto____1 = (function (state_28662){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_28662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e28702){if((e28702 instanceof Object)){
var ex__21007__auto__ = e28702;
var statearr_28703_28729 = state_28662;
(statearr_28703_28729[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28730 = state_28662;
state_28662 = G__28730;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21004__auto__ = function(state_28662){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21004__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21004__auto____1.call(this,state_28662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21004__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21004__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto__))
})();
var state__21067__auto__ = (function (){var statearr_28704 = f__21066__auto__.call(null);
(statearr_28704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto__);

return statearr_28704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto__))
);

return c__21065__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__28732 = arguments.length;
switch (G__28732) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__28735 = arguments.length;
switch (G__28735) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__28738 = arguments.length;
switch (G__28738) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21065__auto___28788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto___28788,out){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto___28788,out){
return (function (state_28762){
var state_val_28763 = (state_28762[(1)]);
if((state_val_28763 === (7))){
var inst_28757 = (state_28762[(2)]);
var state_28762__$1 = state_28762;
var statearr_28764_28789 = state_28762__$1;
(statearr_28764_28789[(2)] = inst_28757);

(statearr_28764_28789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (1))){
var inst_28739 = null;
var state_28762__$1 = (function (){var statearr_28765 = state_28762;
(statearr_28765[(7)] = inst_28739);

return statearr_28765;
})();
var statearr_28766_28790 = state_28762__$1;
(statearr_28766_28790[(2)] = null);

(statearr_28766_28790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (4))){
var inst_28742 = (state_28762[(8)]);
var inst_28742__$1 = (state_28762[(2)]);
var inst_28743 = (inst_28742__$1 == null);
var inst_28744 = cljs.core.not.call(null,inst_28743);
var state_28762__$1 = (function (){var statearr_28767 = state_28762;
(statearr_28767[(8)] = inst_28742__$1);

return statearr_28767;
})();
if(inst_28744){
var statearr_28768_28791 = state_28762__$1;
(statearr_28768_28791[(1)] = (5));

} else {
var statearr_28769_28792 = state_28762__$1;
(statearr_28769_28792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (6))){
var state_28762__$1 = state_28762;
var statearr_28770_28793 = state_28762__$1;
(statearr_28770_28793[(2)] = null);

(statearr_28770_28793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (3))){
var inst_28759 = (state_28762[(2)]);
var inst_28760 = cljs.core.async.close_BANG_.call(null,out);
var state_28762__$1 = (function (){var statearr_28771 = state_28762;
(statearr_28771[(9)] = inst_28759);

return statearr_28771;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28762__$1,inst_28760);
} else {
if((state_val_28763 === (2))){
var state_28762__$1 = state_28762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28762__$1,(4),ch);
} else {
if((state_val_28763 === (11))){
var inst_28742 = (state_28762[(8)]);
var inst_28751 = (state_28762[(2)]);
var inst_28739 = inst_28742;
var state_28762__$1 = (function (){var statearr_28772 = state_28762;
(statearr_28772[(7)] = inst_28739);

(statearr_28772[(10)] = inst_28751);

return statearr_28772;
})();
var statearr_28773_28794 = state_28762__$1;
(statearr_28773_28794[(2)] = null);

(statearr_28773_28794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (9))){
var inst_28742 = (state_28762[(8)]);
var state_28762__$1 = state_28762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28762__$1,(11),out,inst_28742);
} else {
if((state_val_28763 === (5))){
var inst_28739 = (state_28762[(7)]);
var inst_28742 = (state_28762[(8)]);
var inst_28746 = cljs.core._EQ_.call(null,inst_28742,inst_28739);
var state_28762__$1 = state_28762;
if(inst_28746){
var statearr_28775_28795 = state_28762__$1;
(statearr_28775_28795[(1)] = (8));

} else {
var statearr_28776_28796 = state_28762__$1;
(statearr_28776_28796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (10))){
var inst_28754 = (state_28762[(2)]);
var state_28762__$1 = state_28762;
var statearr_28777_28797 = state_28762__$1;
(statearr_28777_28797[(2)] = inst_28754);

(statearr_28777_28797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (8))){
var inst_28739 = (state_28762[(7)]);
var tmp28774 = inst_28739;
var inst_28739__$1 = tmp28774;
var state_28762__$1 = (function (){var statearr_28778 = state_28762;
(statearr_28778[(7)] = inst_28739__$1);

return statearr_28778;
})();
var statearr_28779_28798 = state_28762__$1;
(statearr_28779_28798[(2)] = null);

(statearr_28779_28798[(1)] = (2));


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
});})(c__21065__auto___28788,out))
;
return ((function (switch__21003__auto__,c__21065__auto___28788,out){
return (function() {
var cljs$core$async$state_machine__21004__auto__ = null;
var cljs$core$async$state_machine__21004__auto____0 = (function (){
var statearr_28783 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28783[(0)] = cljs$core$async$state_machine__21004__auto__);

(statearr_28783[(1)] = (1));

return statearr_28783;
});
var cljs$core$async$state_machine__21004__auto____1 = (function (state_28762){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_28762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e28784){if((e28784 instanceof Object)){
var ex__21007__auto__ = e28784;
var statearr_28785_28799 = state_28762;
(statearr_28785_28799[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28800 = state_28762;
state_28762 = G__28800;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
cljs$core$async$state_machine__21004__auto__ = function(state_28762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21004__auto____1.call(this,state_28762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21004__auto____0;
cljs$core$async$state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21004__auto____1;
return cljs$core$async$state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto___28788,out))
})();
var state__21067__auto__ = (function (){var statearr_28786 = f__21066__auto__.call(null);
(statearr_28786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto___28788);

return statearr_28786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto___28788,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__28802 = arguments.length;
switch (G__28802) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21065__auto___28871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto___28871,out){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto___28871,out){
return (function (state_28840){
var state_val_28841 = (state_28840[(1)]);
if((state_val_28841 === (7))){
var inst_28836 = (state_28840[(2)]);
var state_28840__$1 = state_28840;
var statearr_28842_28872 = state_28840__$1;
(statearr_28842_28872[(2)] = inst_28836);

(statearr_28842_28872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (1))){
var inst_28803 = (new Array(n));
var inst_28804 = inst_28803;
var inst_28805 = (0);
var state_28840__$1 = (function (){var statearr_28843 = state_28840;
(statearr_28843[(7)] = inst_28804);

(statearr_28843[(8)] = inst_28805);

return statearr_28843;
})();
var statearr_28844_28873 = state_28840__$1;
(statearr_28844_28873[(2)] = null);

(statearr_28844_28873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (4))){
var inst_28808 = (state_28840[(9)]);
var inst_28808__$1 = (state_28840[(2)]);
var inst_28809 = (inst_28808__$1 == null);
var inst_28810 = cljs.core.not.call(null,inst_28809);
var state_28840__$1 = (function (){var statearr_28845 = state_28840;
(statearr_28845[(9)] = inst_28808__$1);

return statearr_28845;
})();
if(inst_28810){
var statearr_28846_28874 = state_28840__$1;
(statearr_28846_28874[(1)] = (5));

} else {
var statearr_28847_28875 = state_28840__$1;
(statearr_28847_28875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (15))){
var inst_28830 = (state_28840[(2)]);
var state_28840__$1 = state_28840;
var statearr_28848_28876 = state_28840__$1;
(statearr_28848_28876[(2)] = inst_28830);

(statearr_28848_28876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (13))){
var state_28840__$1 = state_28840;
var statearr_28849_28877 = state_28840__$1;
(statearr_28849_28877[(2)] = null);

(statearr_28849_28877[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (6))){
var inst_28805 = (state_28840[(8)]);
var inst_28826 = (inst_28805 > (0));
var state_28840__$1 = state_28840;
if(cljs.core.truth_(inst_28826)){
var statearr_28850_28878 = state_28840__$1;
(statearr_28850_28878[(1)] = (12));

} else {
var statearr_28851_28879 = state_28840__$1;
(statearr_28851_28879[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (3))){
var inst_28838 = (state_28840[(2)]);
var state_28840__$1 = state_28840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28840__$1,inst_28838);
} else {
if((state_val_28841 === (12))){
var inst_28804 = (state_28840[(7)]);
var inst_28828 = cljs.core.vec.call(null,inst_28804);
var state_28840__$1 = state_28840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28840__$1,(15),out,inst_28828);
} else {
if((state_val_28841 === (2))){
var state_28840__$1 = state_28840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28840__$1,(4),ch);
} else {
if((state_val_28841 === (11))){
var inst_28820 = (state_28840[(2)]);
var inst_28821 = (new Array(n));
var inst_28804 = inst_28821;
var inst_28805 = (0);
var state_28840__$1 = (function (){var statearr_28852 = state_28840;
(statearr_28852[(7)] = inst_28804);

(statearr_28852[(8)] = inst_28805);

(statearr_28852[(10)] = inst_28820);

return statearr_28852;
})();
var statearr_28853_28880 = state_28840__$1;
(statearr_28853_28880[(2)] = null);

(statearr_28853_28880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (9))){
var inst_28804 = (state_28840[(7)]);
var inst_28818 = cljs.core.vec.call(null,inst_28804);
var state_28840__$1 = state_28840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28840__$1,(11),out,inst_28818);
} else {
if((state_val_28841 === (5))){
var inst_28804 = (state_28840[(7)]);
var inst_28805 = (state_28840[(8)]);
var inst_28813 = (state_28840[(11)]);
var inst_28808 = (state_28840[(9)]);
var inst_28812 = (inst_28804[inst_28805] = inst_28808);
var inst_28813__$1 = (inst_28805 + (1));
var inst_28814 = (inst_28813__$1 < n);
var state_28840__$1 = (function (){var statearr_28854 = state_28840;
(statearr_28854[(12)] = inst_28812);

(statearr_28854[(11)] = inst_28813__$1);

return statearr_28854;
})();
if(cljs.core.truth_(inst_28814)){
var statearr_28855_28881 = state_28840__$1;
(statearr_28855_28881[(1)] = (8));

} else {
var statearr_28856_28882 = state_28840__$1;
(statearr_28856_28882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (14))){
var inst_28833 = (state_28840[(2)]);
var inst_28834 = cljs.core.async.close_BANG_.call(null,out);
var state_28840__$1 = (function (){var statearr_28858 = state_28840;
(statearr_28858[(13)] = inst_28833);

return statearr_28858;
})();
var statearr_28859_28883 = state_28840__$1;
(statearr_28859_28883[(2)] = inst_28834);

(statearr_28859_28883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (10))){
var inst_28824 = (state_28840[(2)]);
var state_28840__$1 = state_28840;
var statearr_28860_28884 = state_28840__$1;
(statearr_28860_28884[(2)] = inst_28824);

(statearr_28860_28884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28841 === (8))){
var inst_28804 = (state_28840[(7)]);
var inst_28813 = (state_28840[(11)]);
var tmp28857 = inst_28804;
var inst_28804__$1 = tmp28857;
var inst_28805 = inst_28813;
var state_28840__$1 = (function (){var statearr_28861 = state_28840;
(statearr_28861[(7)] = inst_28804__$1);

(statearr_28861[(8)] = inst_28805);

return statearr_28861;
})();
var statearr_28862_28885 = state_28840__$1;
(statearr_28862_28885[(2)] = null);

(statearr_28862_28885[(1)] = (2));


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
});})(c__21065__auto___28871,out))
;
return ((function (switch__21003__auto__,c__21065__auto___28871,out){
return (function() {
var cljs$core$async$state_machine__21004__auto__ = null;
var cljs$core$async$state_machine__21004__auto____0 = (function (){
var statearr_28866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28866[(0)] = cljs$core$async$state_machine__21004__auto__);

(statearr_28866[(1)] = (1));

return statearr_28866;
});
var cljs$core$async$state_machine__21004__auto____1 = (function (state_28840){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_28840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e28867){if((e28867 instanceof Object)){
var ex__21007__auto__ = e28867;
var statearr_28868_28886 = state_28840;
(statearr_28868_28886[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28887 = state_28840;
state_28840 = G__28887;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
cljs$core$async$state_machine__21004__auto__ = function(state_28840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21004__auto____1.call(this,state_28840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21004__auto____0;
cljs$core$async$state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21004__auto____1;
return cljs$core$async$state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto___28871,out))
})();
var state__21067__auto__ = (function (){var statearr_28869 = f__21066__auto__.call(null);
(statearr_28869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto___28871);

return statearr_28869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto___28871,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__28889 = arguments.length;
switch (G__28889) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21065__auto___28962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21065__auto___28962,out){
return (function (){
var f__21066__auto__ = (function (){var switch__21003__auto__ = ((function (c__21065__auto___28962,out){
return (function (state_28931){
var state_val_28932 = (state_28931[(1)]);
if((state_val_28932 === (7))){
var inst_28927 = (state_28931[(2)]);
var state_28931__$1 = state_28931;
var statearr_28933_28963 = state_28931__$1;
(statearr_28933_28963[(2)] = inst_28927);

(statearr_28933_28963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (1))){
var inst_28890 = [];
var inst_28891 = inst_28890;
var inst_28892 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28931__$1 = (function (){var statearr_28934 = state_28931;
(statearr_28934[(7)] = inst_28891);

(statearr_28934[(8)] = inst_28892);

return statearr_28934;
})();
var statearr_28935_28964 = state_28931__$1;
(statearr_28935_28964[(2)] = null);

(statearr_28935_28964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (4))){
var inst_28895 = (state_28931[(9)]);
var inst_28895__$1 = (state_28931[(2)]);
var inst_28896 = (inst_28895__$1 == null);
var inst_28897 = cljs.core.not.call(null,inst_28896);
var state_28931__$1 = (function (){var statearr_28936 = state_28931;
(statearr_28936[(9)] = inst_28895__$1);

return statearr_28936;
})();
if(inst_28897){
var statearr_28937_28965 = state_28931__$1;
(statearr_28937_28965[(1)] = (5));

} else {
var statearr_28938_28966 = state_28931__$1;
(statearr_28938_28966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (15))){
var inst_28921 = (state_28931[(2)]);
var state_28931__$1 = state_28931;
var statearr_28939_28967 = state_28931__$1;
(statearr_28939_28967[(2)] = inst_28921);

(statearr_28939_28967[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (13))){
var state_28931__$1 = state_28931;
var statearr_28940_28968 = state_28931__$1;
(statearr_28940_28968[(2)] = null);

(statearr_28940_28968[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (6))){
var inst_28891 = (state_28931[(7)]);
var inst_28916 = inst_28891.length;
var inst_28917 = (inst_28916 > (0));
var state_28931__$1 = state_28931;
if(cljs.core.truth_(inst_28917)){
var statearr_28941_28969 = state_28931__$1;
(statearr_28941_28969[(1)] = (12));

} else {
var statearr_28942_28970 = state_28931__$1;
(statearr_28942_28970[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (3))){
var inst_28929 = (state_28931[(2)]);
var state_28931__$1 = state_28931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28931__$1,inst_28929);
} else {
if((state_val_28932 === (12))){
var inst_28891 = (state_28931[(7)]);
var inst_28919 = cljs.core.vec.call(null,inst_28891);
var state_28931__$1 = state_28931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28931__$1,(15),out,inst_28919);
} else {
if((state_val_28932 === (2))){
var state_28931__$1 = state_28931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28931__$1,(4),ch);
} else {
if((state_val_28932 === (11))){
var inst_28895 = (state_28931[(9)]);
var inst_28899 = (state_28931[(10)]);
var inst_28909 = (state_28931[(2)]);
var inst_28910 = [];
var inst_28911 = inst_28910.push(inst_28895);
var inst_28891 = inst_28910;
var inst_28892 = inst_28899;
var state_28931__$1 = (function (){var statearr_28943 = state_28931;
(statearr_28943[(11)] = inst_28911);

(statearr_28943[(7)] = inst_28891);

(statearr_28943[(8)] = inst_28892);

(statearr_28943[(12)] = inst_28909);

return statearr_28943;
})();
var statearr_28944_28971 = state_28931__$1;
(statearr_28944_28971[(2)] = null);

(statearr_28944_28971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (9))){
var inst_28891 = (state_28931[(7)]);
var inst_28907 = cljs.core.vec.call(null,inst_28891);
var state_28931__$1 = state_28931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28931__$1,(11),out,inst_28907);
} else {
if((state_val_28932 === (5))){
var inst_28895 = (state_28931[(9)]);
var inst_28899 = (state_28931[(10)]);
var inst_28892 = (state_28931[(8)]);
var inst_28899__$1 = f.call(null,inst_28895);
var inst_28900 = cljs.core._EQ_.call(null,inst_28899__$1,inst_28892);
var inst_28901 = cljs.core.keyword_identical_QMARK_.call(null,inst_28892,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28902 = (inst_28900) || (inst_28901);
var state_28931__$1 = (function (){var statearr_28945 = state_28931;
(statearr_28945[(10)] = inst_28899__$1);

return statearr_28945;
})();
if(cljs.core.truth_(inst_28902)){
var statearr_28946_28972 = state_28931__$1;
(statearr_28946_28972[(1)] = (8));

} else {
var statearr_28947_28973 = state_28931__$1;
(statearr_28947_28973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (14))){
var inst_28924 = (state_28931[(2)]);
var inst_28925 = cljs.core.async.close_BANG_.call(null,out);
var state_28931__$1 = (function (){var statearr_28949 = state_28931;
(statearr_28949[(13)] = inst_28924);

return statearr_28949;
})();
var statearr_28950_28974 = state_28931__$1;
(statearr_28950_28974[(2)] = inst_28925);

(statearr_28950_28974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (10))){
var inst_28914 = (state_28931[(2)]);
var state_28931__$1 = state_28931;
var statearr_28951_28975 = state_28931__$1;
(statearr_28951_28975[(2)] = inst_28914);

(statearr_28951_28975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28932 === (8))){
var inst_28895 = (state_28931[(9)]);
var inst_28891 = (state_28931[(7)]);
var inst_28899 = (state_28931[(10)]);
var inst_28904 = inst_28891.push(inst_28895);
var tmp28948 = inst_28891;
var inst_28891__$1 = tmp28948;
var inst_28892 = inst_28899;
var state_28931__$1 = (function (){var statearr_28952 = state_28931;
(statearr_28952[(14)] = inst_28904);

(statearr_28952[(7)] = inst_28891__$1);

(statearr_28952[(8)] = inst_28892);

return statearr_28952;
})();
var statearr_28953_28976 = state_28931__$1;
(statearr_28953_28976[(2)] = null);

(statearr_28953_28976[(1)] = (2));


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
});})(c__21065__auto___28962,out))
;
return ((function (switch__21003__auto__,c__21065__auto___28962,out){
return (function() {
var cljs$core$async$state_machine__21004__auto__ = null;
var cljs$core$async$state_machine__21004__auto____0 = (function (){
var statearr_28957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28957[(0)] = cljs$core$async$state_machine__21004__auto__);

(statearr_28957[(1)] = (1));

return statearr_28957;
});
var cljs$core$async$state_machine__21004__auto____1 = (function (state_28931){
while(true){
var ret_value__21005__auto__ = (function (){try{while(true){
var result__21006__auto__ = switch__21003__auto__.call(null,state_28931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21006__auto__;
}
break;
}
}catch (e28958){if((e28958 instanceof Object)){
var ex__21007__auto__ = e28958;
var statearr_28959_28977 = state_28931;
(statearr_28959_28977[(5)] = ex__21007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28978 = state_28931;
state_28931 = G__28978;
continue;
} else {
return ret_value__21005__auto__;
}
break;
}
});
cljs$core$async$state_machine__21004__auto__ = function(state_28931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21004__auto____1.call(this,state_28931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21004__auto____0;
cljs$core$async$state_machine__21004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21004__auto____1;
return cljs$core$async$state_machine__21004__auto__;
})()
;})(switch__21003__auto__,c__21065__auto___28962,out))
})();
var state__21067__auto__ = (function (){var statearr_28960 = f__21066__auto__.call(null);
(statearr_28960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21065__auto___28962);

return statearr_28960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21067__auto__);
});})(c__21065__auto___28962,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map