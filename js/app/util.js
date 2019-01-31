// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('app.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
app.util.log = (function app$util$log(var_args){
var args__4647__auto__ = [];
var len__4641__auto___6731 = arguments.length;
var i__4642__auto___6732 = (0);
while(true){
if((i__4642__auto___6732 < len__4641__auto___6731)){
args__4647__auto__.push((arguments[i__4642__auto___6732]));

var G__6733 = (i__4642__auto___6732 + (1));
i__4642__auto___6732 = G__6733;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return app.util.log.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

app.util.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,args);
});

app.util.log.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
app.util.log.cljs$lang$applyTo = (function (seq6730){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6730));
});

app.util.query_all = (function app$util$query_all(selector){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(Array.from(document.querySelectorAll(selector)));
});
