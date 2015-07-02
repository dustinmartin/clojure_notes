// Compiled by ClojureScript 0.0-3211 {}
goog.provide('clojure_notes.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
clojure_notes.core.notes = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
clojure_notes.core.log = (function clojure_notes$core$log(value){

return console.log(cljs.core.clj__GT_js.call(null,value));
});
clojure_notes.core.add_note = (function clojure_notes$core$add_note(text){

cljs.core.reset_BANG_.call(null,clojure_notes.core.notes,cljs.core.conj.call(null,cljs.core.deref.call(null,clojure_notes.core.notes),text));

return clojure_notes.core.log.call(null,cljs.core.deref.call(null,clojure_notes.core.notes));
});
clojure_notes.core.remove_note = (function clojure_notes$core$remove_note(text){

cljs.core.reset_BANG_.call(null,clojure_notes.core.notes,cljs.core.filter.call(null,(function (note){
return cljs.core.not_EQ_.call(null,note,text);
}),cljs.core.deref.call(null,clojure_notes.core.notes)));

return clojure_notes.core.log.call(null,cljs.core.deref.call(null,clojure_notes.core.notes));
});
clojure_notes.core.reset_notes = (function clojure_notes$core$reset_notes(){

cljs.core.reset_BANG_.call(null,clojure_notes.core.notes,cljs.core.PersistentVector.EMPTY);

return clojure_notes.core.log.call(null,cljs.core.deref.call(null,clojure_notes.core.notes));
});
clojure_notes.core.add_note.call(null,"foo");
clojure_notes.core.add_note.call(null,"bar");
clojure_notes.core.add_note.call(null,"baz");
clojure_notes.core.remove_note.call(null,"foo");
clojure_notes.core.reset_notes.call(null);

//# sourceMappingURL=core.js.map