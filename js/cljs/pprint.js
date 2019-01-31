// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5401 = arguments.length;
var i__4642__auto___5402 = (0);
while(true){
if((i__4642__auto___5402 < len__4641__auto___5401)){
args__4647__auto__.push((arguments[i__4642__auto___5402]));

var G__5403 = (i__4642__auto___5402 + (1));
i__4642__auto___5402 = G__5403;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.print.cljs$lang$applyTo = (function (seq5400){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5400));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5405 = arguments.length;
var i__4642__auto___5406 = (0);
while(true){
if((i__4642__auto___5406 < len__4641__auto___5405)){
args__4647__auto__.push((arguments[i__4642__auto___5406]));

var G__5407 = (i__4642__auto___5406 + (1));
i__4642__auto___5406 = G__5407;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.println.cljs$lang$applyTo = (function (seq5404){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5404));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__5408 = cljs.core._EQ_;
var expr__5409 = c;
if(cljs.core.truth_((function (){var G__5411 = "\b";
var G__5412 = expr__5409;
return (pred__5408.cljs$core$IFn$_invoke$arity$2 ? pred__5408.cljs$core$IFn$_invoke$arity$2(G__5411,G__5412) : pred__5408.call(null,G__5411,G__5412));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__5413 = "\t";
var G__5414 = expr__5409;
return (pred__5408.cljs$core$IFn$_invoke$arity$2 ? pred__5408.cljs$core$IFn$_invoke$arity$2(G__5413,G__5414) : pred__5408.call(null,G__5413,G__5414));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__5415 = "\n";
var G__5416 = expr__5409;
return (pred__5408.cljs$core$IFn$_invoke$arity$2 ? pred__5408.cljs$core$IFn$_invoke$arity$2(G__5415,G__5416) : pred__5408.call(null,G__5415,G__5416));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__5417 = "\f";
var G__5418 = expr__5409;
return (pred__5408.cljs$core$IFn$_invoke$arity$2 ? pred__5408.cljs$core$IFn$_invoke$arity$2(G__5417,G__5418) : pred__5408.call(null,G__5417,G__5418));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__5419 = "\r";
var G__5420 = expr__5409;
return (pred__5408.cljs$core$IFn$_invoke$arity$2 ? pred__5408.cljs$core$IFn$_invoke$arity$2(G__5419,G__5420) : pred__5408.call(null,G__5419,G__5420));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__5421 = "\"";
var G__5422 = expr__5409;
return (pred__5408.cljs$core$IFn$_invoke$arity$2 ? pred__5408.cljs$core$IFn$_invoke$arity$2(G__5421,G__5422) : pred__5408.call(null,G__5421,G__5422));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__5423 = "\\";
var G__5424 = expr__5409;
return (pred__5408.cljs$core$IFn$_invoke$arity$2 ? pred__5408.cljs$core$IFn$_invoke$arity$2(G__5423,G__5424) : pred__5408.call(null,G__5423,G__5424));
})())){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5426 = arguments.length;
var i__4642__auto___5427 = (0);
while(true){
if((i__4642__auto___5427 < len__4641__auto___5426)){
args__4647__auto__.push((arguments[i__4642__auto___5427]));

var G__5428 = (i__4642__auto___5427 + (1));
i__4642__auto___5427 = G__5428;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.pr.cljs$lang$applyTo = (function (seq5425){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5425));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5430 = arguments.length;
var i__4642__auto___5431 = (0);
while(true){
if((i__4642__auto___5431 < len__4641__auto___5430)){
args__4647__auto__.push((arguments[i__4642__auto___5431]));

var G__5432 = (i__4642__auto___5431 + (1));
i__4642__auto___5431 = G__5432;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.prn.cljs$lang$applyTo = (function (seq5429){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5429));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return ((typeof n === 'number') && ((!(isNaN(n)))) && ((!((n === Infinity)))) && ((!((parseFloat(n) === parseInt(n,(10)))))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if(((typeof c === 'string') && ((c.length === (1))))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__5433 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5433,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5433,(1),null);
var G__5436 = new_context;
var G__5437 = remainder;
var G__5438 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__5436;
lis__$1 = G__5437;
acc = G__5438;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__5439 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5439,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5439,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__5442 = new_context;
var G__5443 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__5442;
acc = G__5443;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__5444 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5444,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5444,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5444,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__5447 = new_context;
var G__5448 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__5447;
acc = G__5448;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4434__auto__ = (function cljs$pprint$unzip_map_$_iter__5449(s__5450){
return (new cljs.core.LazySeq(null,(function (){
var s__5450__$1 = s__5450;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__5450__$1);
if(temp__5720__auto__){
var s__5450__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5450__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__5450__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__5452 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__5451 = (0);
while(true){
if((i__5451 < size__4433__auto__)){
var vec__5453 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__5451);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5453,(0),null);
var vec__5456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5453,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5456,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5456,(1),null);
cljs.core.chunk_append(b__5452,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__5481 = (i__5451 + (1));
i__5451 = G__5481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5452),cljs$pprint$unzip_map_$_iter__5449(cljs.core.chunk_rest(s__5450__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5452),null);
}
} else {
var vec__5459 = cljs.core.first(s__5450__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5459,(0),null);
var vec__5462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5459,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5462,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5462,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__5449(cljs.core.rest(s__5450__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4434__auto__ = (function cljs$pprint$unzip_map_$_iter__5465(s__5466){
return (new cljs.core.LazySeq(null,(function (){
var s__5466__$1 = s__5466;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__5466__$1);
if(temp__5720__auto__){
var s__5466__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5466__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__5466__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__5468 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__5467 = (0);
while(true){
if((i__5467 < size__4433__auto__)){
var vec__5469 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__5467);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5469,(0),null);
var vec__5472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5469,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5472,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5472,(1),null);
cljs.core.chunk_append(b__5468,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__5482 = (i__5467 + (1));
i__5467 = G__5482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5468),cljs$pprint$unzip_map_$_iter__5465(cljs.core.chunk_rest(s__5466__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5468),null);
}
} else {
var vec__5475 = cljs.core.first(s__5466__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5475,(0),null);
var vec__5478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5475,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5478,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5478,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__5465(cljs.core.rest(s__5466__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4434__auto__ = (function cljs$pprint$tuple_map_$_iter__5483(s__5484){
return (new cljs.core.LazySeq(null,(function (){
var s__5484__$1 = s__5484;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__5484__$1);
if(temp__5720__auto__){
var s__5484__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5484__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__5484__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__5486 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__5485 = (0);
while(true){
if((i__5485 < size__4433__auto__)){
var vec__5487 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__5485);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5487,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5487,(1),null);
cljs.core.chunk_append(b__5486,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__5493 = (i__5485 + (1));
i__5485 = G__5493;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5486),cljs$pprint$tuple_map_$_iter__5483(cljs.core.chunk_rest(s__5484__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5486),null);
}
} else {
var vec__5490 = cljs.core.first(s__5484__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5490,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5490,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__5483(cljs.core.rest(s__5484__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c)))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__5494 = (n - (1));
n = G__5494;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c)))){
var n = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__5495 = (n + (1));
n = G__5495;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__5497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__5497) : test.call(null,G__5497));
})())))){
return pos;
} else {
var G__5498 = (pos + (1));
pos = G__5498;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((((!((pp == null)))) && ((!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__4347__auto__ = (((pp == null))?null:pp);
var m__4348__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__4348__auto__.call(null,pp));
} else {
var m__4348__auto____$1 = (cljs.pprint._ppflush["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(pp) : m__4348__auto____$1.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__5499 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__5499) : sym.call(null,G__5499));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$cur);
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$line);
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$max);
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,cljs.core.cst$kw$max,new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$base);
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(0));

cljs.pprint.set_field(this$,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$,cljs.core.cst$kw$line) + (1)));
} else {
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$,cljs.core.cst$kw$cur) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,cljs.core.cst$kw$base),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__5502 = arguments.length;
switch (G__5502) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max,max_columns,cljs.core.cst$kw$cur,(0),cljs.core.cst$kw$line,(0),cljs.core.cst$kw$base,writer], null));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint5503 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint5503 = (function (writer,max_columns,fields,meta5504){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta5504 = meta5504;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint5503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_5505,meta5504__$1){
var self__ = this;
var _5505__$1 = this;
return (new cljs.pprint.t_cljs$pprint5503(self__.writer,self__.max_columns,self__.fields,meta5504__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint5503.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_5505){
var self__ = this;
var _5505__$1 = this;
return self__.meta5504;
});})(fields))
;

cljs.pprint.t_cljs$pprint5503.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint5503.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint5503.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__5506 = cljs.core._EQ_;
var expr__5507 = cljs.core.type(x);
if(cljs.core.truth_((pred__5506.cljs$core$IFn$_invoke$arity$2 ? pred__5506.cljs$core$IFn$_invoke$arity$2(String,expr__5507) : pred__5506.call(null,String,expr__5507)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__5506,expr__5507,this$__$1,fields){
return (function (p1__5500_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__5500_SHARP_,"\n");
});})(s,nl,pred__5506,expr__5507,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_((pred__5506.cljs$core$IFn$_invoke$arity$2 ? pred__5506.cljs$core$IFn$_invoke$arity$2(Number,expr__5507) : pred__5506.call(null,Number,expr__5507)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__5507)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint5503.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta5504], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint5503.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint5503.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint5503";

cljs.pprint.t_cljs$pprint5503.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.pprint/t_cljs$pprint5503");
});})(fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint5503.
 */
cljs.pprint.__GT_t_cljs$pprint5503 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint5503(writer__$1,max_columns__$1,fields__$1,meta5504){
return (new cljs.pprint.t_cljs$pprint5503(writer__$1,max_columns__$1,fields__$1,meta5504));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint5503(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k5511,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__5515 = k5511;
var G__5515__$1 = (((G__5515 instanceof cljs.core.Keyword))?G__5515.fqn:null);
switch (G__5515__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5511,else__4304__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__5516){
var vec__5517 = p__5516;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5517,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5517,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#cljs.pprint.logical-block{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5510){
var self__ = this;
var G__5510__$1 = this;
return (new cljs.core.RecordIter((0),G__5510__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__5520 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__5520(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5512,other5513){
var self__ = this;
var this5512__$1 = this;
return (((!((other5513 == null)))) && ((this5512__$1.constructor === other5513.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5512__$1.parent,other5513.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5512__$1.section,other5513.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5512__$1.start_col,other5513.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5512__$1.indent,other5513.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5512__$1.done_nl,other5513.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5512__$1.intra_block_nl,other5513.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5512__$1.prefix,other5513.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5512__$1.per_line_prefix,other5513.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5512__$1.suffix,other5513.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5512__$1.logical_block_callback,other5513.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5512__$1.__extmap,other5513.__extmap)));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$suffix,null,cljs.core.cst$kw$indent,null,cljs.core.cst$kw$parent,null,cljs.core.cst$kw$section,null,cljs.core.cst$kw$done_DASH_nl,null,cljs.core.cst$kw$start_DASH_col,null,cljs.core.cst$kw$prefix,null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__5510){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__5521 = cljs.core.keyword_identical_QMARK_;
var expr__5522 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__5524 = cljs.core.cst$kw$parent;
var G__5525 = expr__5522;
return (pred__5521.cljs$core$IFn$_invoke$arity$2 ? pred__5521.cljs$core$IFn$_invoke$arity$2(G__5524,G__5525) : pred__5521.call(null,G__5524,G__5525));
})())){
return (new cljs.pprint.logical_block(G__5510,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5526 = cljs.core.cst$kw$section;
var G__5527 = expr__5522;
return (pred__5521.cljs$core$IFn$_invoke$arity$2 ? pred__5521.cljs$core$IFn$_invoke$arity$2(G__5526,G__5527) : pred__5521.call(null,G__5526,G__5527));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__5510,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5528 = cljs.core.cst$kw$start_DASH_col;
var G__5529 = expr__5522;
return (pred__5521.cljs$core$IFn$_invoke$arity$2 ? pred__5521.cljs$core$IFn$_invoke$arity$2(G__5528,G__5529) : pred__5521.call(null,G__5528,G__5529));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__5510,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5530 = cljs.core.cst$kw$indent;
var G__5531 = expr__5522;
return (pred__5521.cljs$core$IFn$_invoke$arity$2 ? pred__5521.cljs$core$IFn$_invoke$arity$2(G__5530,G__5531) : pred__5521.call(null,G__5530,G__5531));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__5510,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5532 = cljs.core.cst$kw$done_DASH_nl;
var G__5533 = expr__5522;
return (pred__5521.cljs$core$IFn$_invoke$arity$2 ? pred__5521.cljs$core$IFn$_invoke$arity$2(G__5532,G__5533) : pred__5521.call(null,G__5532,G__5533));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__5510,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5534 = cljs.core.cst$kw$intra_DASH_block_DASH_nl;
var G__5535 = expr__5522;
return (pred__5521.cljs$core$IFn$_invoke$arity$2 ? pred__5521.cljs$core$IFn$_invoke$arity$2(G__5534,G__5535) : pred__5521.call(null,G__5534,G__5535));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__5510,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5536 = cljs.core.cst$kw$prefix;
var G__5537 = expr__5522;
return (pred__5521.cljs$core$IFn$_invoke$arity$2 ? pred__5521.cljs$core$IFn$_invoke$arity$2(G__5536,G__5537) : pred__5521.call(null,G__5536,G__5537));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__5510,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5538 = cljs.core.cst$kw$per_DASH_line_DASH_prefix;
var G__5539 = expr__5522;
return (pred__5521.cljs$core$IFn$_invoke$arity$2 ? pred__5521.cljs$core$IFn$_invoke$arity$2(G__5538,G__5539) : pred__5521.call(null,G__5538,G__5539));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__5510,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5540 = cljs.core.cst$kw$suffix;
var G__5541 = expr__5522;
return (pred__5521.cljs$core$IFn$_invoke$arity$2 ? pred__5521.cljs$core$IFn$_invoke$arity$2(G__5540,G__5541) : pred__5521.call(null,G__5540,G__5541));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__5510,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5542 = cljs.core.cst$kw$logical_DASH_block_DASH_callback;
var G__5543 = expr__5522;
return (pred__5521.cljs$core$IFn$_invoke$arity$2 ? pred__5521.cljs$core$IFn$_invoke$arity$2(G__5542,G__5543) : pred__5521.call(null,G__5542,G__5543));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__5510,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__5510),null));
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
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$parent,self__.parent,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$section,self__.section,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_col,self__.start_col,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$indent,self__.indent,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$done_DASH_nl,self__.done_nl,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$prefix,self__.prefix,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$suffix,self__.suffix,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback,null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__5510){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__5510,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$section,cljs.core.cst$sym$start_DASH_col,cljs.core.cst$sym$indent,cljs.core.cst$sym$done_DASH_nl,cljs.core.cst$sym$intra_DASH_block_DASH_nl,cljs.core.cst$sym$prefix,cljs.core.cst$sym$per_DASH_line_DASH_prefix,cljs.core.cst$sym$suffix,cljs.core.cst$sym$logical_DASH_block_DASH_callback], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"cljs.pprint/logical-block");
});

/**
 * Positional factory function for cljs.pprint/logical-block.
 */
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

/**
 * Factory function for cljs.pprint/logical-block, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__5514){
var extmap__4340__auto__ = (function (){var G__5544 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__5514,cljs.core.cst$kw$parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], 0));
if(cljs.core.record_QMARK_(G__5514)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5544);
} else {
return G__5544;
}
})();
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__5514),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__5514),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__5514),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__5514),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__5514),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__5514),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__5514),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__5514),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__5514),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__5514),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__5546 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__5546;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k5548,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__5552 = k5548;
var G__5552__$1 = (((G__5552 instanceof cljs.core.Keyword))?G__5552.fqn:null);
switch (G__5552__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5548,else__4304__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__5553){
var vec__5554 = p__5553;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5554,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5554,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5547){
var self__ = this;
var G__5547__$1 = this;
return (new cljs.core.RecordIter((0),G__5547__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__5557 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__5557(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5549,other5550){
var self__ = this;
var this5549__$1 = this;
return (((!((other5550 == null)))) && ((this5549__$1.constructor === other5550.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5549__$1.type_tag,other5550.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5549__$1.data,other5550.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5549__$1.trailing_white_space,other5550.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5549__$1.start_pos,other5550.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5549__$1.end_pos,other5550.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5549__$1.__extmap,other5550.__extmap)));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$data,null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__5547){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__5558 = cljs.core.keyword_identical_QMARK_;
var expr__5559 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__5561 = cljs.core.cst$kw$type_DASH_tag;
var G__5562 = expr__5559;
return (pred__5558.cljs$core$IFn$_invoke$arity$2 ? pred__5558.cljs$core$IFn$_invoke$arity$2(G__5561,G__5562) : pred__5558.call(null,G__5561,G__5562));
})())){
return (new cljs.pprint.buffer_blob(G__5547,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5563 = cljs.core.cst$kw$data;
var G__5564 = expr__5559;
return (pred__5558.cljs$core$IFn$_invoke$arity$2 ? pred__5558.cljs$core$IFn$_invoke$arity$2(G__5563,G__5564) : pred__5558.call(null,G__5563,G__5564));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__5547,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5565 = cljs.core.cst$kw$trailing_DASH_white_DASH_space;
var G__5566 = expr__5559;
return (pred__5558.cljs$core$IFn$_invoke$arity$2 ? pred__5558.cljs$core$IFn$_invoke$arity$2(G__5565,G__5566) : pred__5558.call(null,G__5565,G__5566));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__5547,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5567 = cljs.core.cst$kw$start_DASH_pos;
var G__5568 = expr__5559;
return (pred__5558.cljs$core$IFn$_invoke$arity$2 ? pred__5558.cljs$core$IFn$_invoke$arity$2(G__5567,G__5568) : pred__5558.call(null,G__5567,G__5568));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__5547,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5569 = cljs.core.cst$kw$end_DASH_pos;
var G__5570 = expr__5559;
return (pred__5558.cljs$core$IFn$_invoke$arity$2 ? pred__5558.cljs$core$IFn$_invoke$arity$2(G__5569,G__5570) : pred__5558.call(null,G__5569,G__5570));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__5547,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__5547),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__5547){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__5547,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$data,cljs.core.cst$sym$trailing_DASH_white_DASH_space,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"cljs.pprint/buffer-blob");
});

/**
 * Positional factory function for cljs.pprint/buffer-blob.
 */
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/buffer-blob, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__5551){
var extmap__4340__auto__ = (function (){var G__5571 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__5551,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0));
if(cljs.core.record_QMARK_(G__5551)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5571);
} else {
return G__5571;
}
})();
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__5551),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__5551),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__5551),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__5551),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__5551),null,cljs.core.not_empty(extmap__4340__auto__),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__5331__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__5331__auto__),cljs.core.cst$kw$buffer_DASH_blob);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k5574,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__5578 = k5574;
var G__5578__$1 = (((G__5578 instanceof cljs.core.Keyword))?G__5578.fqn:null);
switch (G__5578__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5574,else__4304__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__5579){
var vec__5580 = p__5579;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5580,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5580,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#cljs.pprint.nl-t{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5573){
var self__ = this;
var G__5573__$1 = this;
return (new cljs.core.RecordIter((0),G__5573__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__5583 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__5583(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5575,other5576){
var self__ = this;
var this5575__$1 = this;
return (((!((other5576 == null)))) && ((this5575__$1.constructor === other5576.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5575__$1.type_tag,other5576.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5575__$1.type,other5576.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5575__$1.logical_block,other5576.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5575__$1.start_pos,other5576.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5575__$1.end_pos,other5576.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5575__$1.__extmap,other5576.__extmap)));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__5573){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__5584 = cljs.core.keyword_identical_QMARK_;
var expr__5585 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__5587 = cljs.core.cst$kw$type_DASH_tag;
var G__5588 = expr__5585;
return (pred__5584.cljs$core$IFn$_invoke$arity$2 ? pred__5584.cljs$core$IFn$_invoke$arity$2(G__5587,G__5588) : pred__5584.call(null,G__5587,G__5588));
})())){
return (new cljs.pprint.nl_t(G__5573,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5589 = cljs.core.cst$kw$type;
var G__5590 = expr__5585;
return (pred__5584.cljs$core$IFn$_invoke$arity$2 ? pred__5584.cljs$core$IFn$_invoke$arity$2(G__5589,G__5590) : pred__5584.call(null,G__5589,G__5590));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__5573,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5591 = cljs.core.cst$kw$logical_DASH_block;
var G__5592 = expr__5585;
return (pred__5584.cljs$core$IFn$_invoke$arity$2 ? pred__5584.cljs$core$IFn$_invoke$arity$2(G__5591,G__5592) : pred__5584.call(null,G__5591,G__5592));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__5573,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5593 = cljs.core.cst$kw$start_DASH_pos;
var G__5594 = expr__5585;
return (pred__5584.cljs$core$IFn$_invoke$arity$2 ? pred__5584.cljs$core$IFn$_invoke$arity$2(G__5593,G__5594) : pred__5584.call(null,G__5593,G__5594));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__5573,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5595 = cljs.core.cst$kw$end_DASH_pos;
var G__5596 = expr__5585;
return (pred__5584.cljs$core$IFn$_invoke$arity$2 ? pred__5584.cljs$core$IFn$_invoke$arity$2(G__5595,G__5596) : pred__5584.call(null,G__5595,G__5596));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__5573,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__5573),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$type,self__.type,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__5573){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__5573,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$type,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"cljs.pprint/nl-t");
});

/**
 * Positional factory function for cljs.pprint/nl-t.
 */
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/nl-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__5577){
var extmap__4340__auto__ = (function (){var G__5597 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__5577,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0));
if(cljs.core.record_QMARK_(G__5577)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5597);
} else {
return G__5597;
}
})();
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__5577),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__5577),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__5577),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__5577),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__5577),null,cljs.core.not_empty(extmap__4340__auto__),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__5331__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__5331__auto__),cljs.core.cst$kw$nl_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k5600,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__5604 = k5600;
var G__5604__$1 = (((G__5604 instanceof cljs.core.Keyword))?G__5604.fqn:null);
switch (G__5604__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5600,else__4304__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__5605){
var vec__5606 = p__5605;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5606,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5606,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5599){
var self__ = this;
var G__5599__$1 = this;
return (new cljs.core.RecordIter((0),G__5599__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__5609 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__5609(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5601,other5602){
var self__ = this;
var this5601__$1 = this;
return (((!((other5602 == null)))) && ((this5601__$1.constructor === other5602.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5601__$1.type_tag,other5602.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5601__$1.logical_block,other5602.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5601__$1.start_pos,other5602.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5601__$1.end_pos,other5602.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5601__$1.__extmap,other5602.__extmap)));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__5599){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__5610 = cljs.core.keyword_identical_QMARK_;
var expr__5611 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__5613 = cljs.core.cst$kw$type_DASH_tag;
var G__5614 = expr__5611;
return (pred__5610.cljs$core$IFn$_invoke$arity$2 ? pred__5610.cljs$core$IFn$_invoke$arity$2(G__5613,G__5614) : pred__5610.call(null,G__5613,G__5614));
})())){
return (new cljs.pprint.start_block_t(G__5599,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5615 = cljs.core.cst$kw$logical_DASH_block;
var G__5616 = expr__5611;
return (pred__5610.cljs$core$IFn$_invoke$arity$2 ? pred__5610.cljs$core$IFn$_invoke$arity$2(G__5615,G__5616) : pred__5610.call(null,G__5615,G__5616));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__5599,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5617 = cljs.core.cst$kw$start_DASH_pos;
var G__5618 = expr__5611;
return (pred__5610.cljs$core$IFn$_invoke$arity$2 ? pred__5610.cljs$core$IFn$_invoke$arity$2(G__5617,G__5618) : pred__5610.call(null,G__5617,G__5618));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__5599,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5619 = cljs.core.cst$kw$end_DASH_pos;
var G__5620 = expr__5611;
return (pred__5610.cljs$core$IFn$_invoke$arity$2 ? pred__5610.cljs$core$IFn$_invoke$arity$2(G__5619,G__5620) : pred__5610.call(null,G__5619,G__5620));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__5599,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__5599),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__5599){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__5599,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"cljs.pprint/start-block-t");
});

/**
 * Positional factory function for cljs.pprint/start-block-t.
 */
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/start-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__5603){
var extmap__4340__auto__ = (function (){var G__5621 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__5603,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0));
if(cljs.core.record_QMARK_(G__5603)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5621);
} else {
return G__5621;
}
})();
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__5603),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__5603),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__5603),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__5603),null,cljs.core.not_empty(extmap__4340__auto__),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__5331__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__5331__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k5624,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__5628 = k5624;
var G__5628__$1 = (((G__5628 instanceof cljs.core.Keyword))?G__5628.fqn:null);
switch (G__5628__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5624,else__4304__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__5629){
var vec__5630 = p__5629;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5630,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5630,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5623){
var self__ = this;
var G__5623__$1 = this;
return (new cljs.core.RecordIter((0),G__5623__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__5633 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__5633(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5625,other5626){
var self__ = this;
var this5625__$1 = this;
return (((!((other5626 == null)))) && ((this5625__$1.constructor === other5626.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5625__$1.type_tag,other5626.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5625__$1.logical_block,other5626.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5625__$1.start_pos,other5626.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5625__$1.end_pos,other5626.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5625__$1.__extmap,other5626.__extmap)));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__5623){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__5634 = cljs.core.keyword_identical_QMARK_;
var expr__5635 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__5637 = cljs.core.cst$kw$type_DASH_tag;
var G__5638 = expr__5635;
return (pred__5634.cljs$core$IFn$_invoke$arity$2 ? pred__5634.cljs$core$IFn$_invoke$arity$2(G__5637,G__5638) : pred__5634.call(null,G__5637,G__5638));
})())){
return (new cljs.pprint.end_block_t(G__5623,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5639 = cljs.core.cst$kw$logical_DASH_block;
var G__5640 = expr__5635;
return (pred__5634.cljs$core$IFn$_invoke$arity$2 ? pred__5634.cljs$core$IFn$_invoke$arity$2(G__5639,G__5640) : pred__5634.call(null,G__5639,G__5640));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__5623,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5641 = cljs.core.cst$kw$start_DASH_pos;
var G__5642 = expr__5635;
return (pred__5634.cljs$core$IFn$_invoke$arity$2 ? pred__5634.cljs$core$IFn$_invoke$arity$2(G__5641,G__5642) : pred__5634.call(null,G__5641,G__5642));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__5623,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5643 = cljs.core.cst$kw$end_DASH_pos;
var G__5644 = expr__5635;
return (pred__5634.cljs$core$IFn$_invoke$arity$2 ? pred__5634.cljs$core$IFn$_invoke$arity$2(G__5643,G__5644) : pred__5634.call(null,G__5643,G__5644));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__5623,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__5623),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__5623){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__5623,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"cljs.pprint/end-block-t");
});

/**
 * Positional factory function for cljs.pprint/end-block-t.
 */
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/end-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__5627){
var extmap__4340__auto__ = (function (){var G__5645 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__5627,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0));
if(cljs.core.record_QMARK_(G__5627)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5645);
} else {
return G__5645;
}
})();
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__5627),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__5627),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__5627),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__5627),null,cljs.core.not_empty(extmap__4340__auto__),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__5331__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__5331__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k5648,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__5652 = k5648;
var G__5652__$1 = (((G__5652 instanceof cljs.core.Keyword))?G__5652.fqn:null);
switch (G__5652__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5648,else__4304__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__5653){
var vec__5654 = p__5653;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5654,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5654,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#cljs.pprint.indent-t{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5647){
var self__ = this;
var G__5647__$1 = this;
return (new cljs.core.RecordIter((0),G__5647__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__5657 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__5657(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5649,other5650){
var self__ = this;
var this5649__$1 = this;
return (((!((other5650 == null)))) && ((this5649__$1.constructor === other5650.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5649__$1.type_tag,other5650.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5649__$1.logical_block,other5650.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5649__$1.relative_to,other5650.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5649__$1.offset,other5650.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5649__$1.start_pos,other5650.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5649__$1.end_pos,other5650.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5649__$1.__extmap,other5650.__extmap)));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$relative_DASH_to,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__5647){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__5658 = cljs.core.keyword_identical_QMARK_;
var expr__5659 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__5661 = cljs.core.cst$kw$type_DASH_tag;
var G__5662 = expr__5659;
return (pred__5658.cljs$core$IFn$_invoke$arity$2 ? pred__5658.cljs$core$IFn$_invoke$arity$2(G__5661,G__5662) : pred__5658.call(null,G__5661,G__5662));
})())){
return (new cljs.pprint.indent_t(G__5647,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5663 = cljs.core.cst$kw$logical_DASH_block;
var G__5664 = expr__5659;
return (pred__5658.cljs$core$IFn$_invoke$arity$2 ? pred__5658.cljs$core$IFn$_invoke$arity$2(G__5663,G__5664) : pred__5658.call(null,G__5663,G__5664));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__5647,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5665 = cljs.core.cst$kw$relative_DASH_to;
var G__5666 = expr__5659;
return (pred__5658.cljs$core$IFn$_invoke$arity$2 ? pred__5658.cljs$core$IFn$_invoke$arity$2(G__5665,G__5666) : pred__5658.call(null,G__5665,G__5666));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__5647,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5667 = cljs.core.cst$kw$offset;
var G__5668 = expr__5659;
return (pred__5658.cljs$core$IFn$_invoke$arity$2 ? pred__5658.cljs$core$IFn$_invoke$arity$2(G__5667,G__5668) : pred__5658.call(null,G__5667,G__5668));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__5647,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5669 = cljs.core.cst$kw$start_DASH_pos;
var G__5670 = expr__5659;
return (pred__5658.cljs$core$IFn$_invoke$arity$2 ? pred__5658.cljs$core$IFn$_invoke$arity$2(G__5669,G__5670) : pred__5658.call(null,G__5669,G__5670));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__5647,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5671 = cljs.core.cst$kw$end_DASH_pos;
var G__5672 = expr__5659;
return (pred__5658.cljs$core$IFn$_invoke$arity$2 ? pred__5658.cljs$core$IFn$_invoke$arity$2(G__5671,G__5672) : pred__5658.call(null,G__5671,G__5672));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__5647,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__5647),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$type_DASH_tag,self__.type_tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$logical_DASH_block,self__.logical_block,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$relative_DASH_to,self__.relative_to,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$offset,self__.offset,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start_DASH_pos,self__.start_pos,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$end_DASH_pos,self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__5647){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__5647,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$relative_DASH_to,cljs.core.cst$sym$offset,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"cljs.pprint/indent-t");
});

/**
 * Positional factory function for cljs.pprint/indent-t.
 */
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/indent-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__5651){
var extmap__4340__auto__ = (function (){var G__5673 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__5651,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0));
if(cljs.core.record_QMARK_(G__5651)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5673);
} else {
return G__5673;
}
})();
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__5651),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__5651),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__5651),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__5651),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__5651),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__5651),null,cljs.core.not_empty(extmap__4340__auto__),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__5331__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__5331__auto__),cljs.core.cst$kw$indent_DASH_t);
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.write_token !== 'undefined')){
} else {
cljs.pprint.write_token = (function (){var method_table__4524__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__5677 = cljs.core.get_global_hierarchy;
return (fexpr__5677.cljs$core$IFn$_invoke$arity$0 ? fexpr__5677.cljs$core$IFn$_invoke$arity$0() : fexpr__5677.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__){
return (function (p1__5676_SHARP_,p2__5675_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__5675_SHARP_);
});})(method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__))
,cljs.core.cst$kw$default,hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__5720__auto___5679 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5720__auto___5679)){
var cb_5680 = temp__5720__auto___5679;
var G__5678_5681 = cljs.core.cst$kw$start;
(cb_5680.cljs$core$IFn$_invoke$arity$1 ? cb_5680.cljs$core$IFn$_invoke$arity$1(G__5678_5681) : cb_5680.call(null,G__5678_5681));
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__5720__auto___5682 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5720__auto___5682)){
var prefix_5683 = temp__5720__auto___5682;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_5683);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__5720__auto___5685 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5720__auto___5685)){
var cb_5686 = temp__5720__auto___5685;
var G__5684_5687 = cljs.core.cst$kw$end;
(cb_5686.cljs$core$IFn$_invoke$arity$1 ? cb_5686.cljs$core$IFn$_invoke$arity$1(G__5684_5687) : cb_5686.call(null,G__5684_5687));
} else {
}

var temp__5720__auto__ = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5720__auto__)){
var suffix = temp__5720__auto__;
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$indent_DASH_t,(function (this$,token){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__5688 = cljs.core._EQ_;
var expr__5689 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__5691 = cljs.core.cst$kw$block;
var G__5692 = expr__5689;
return (pred__5688.cljs$core$IFn$_invoke$arity$2 ? pred__5688.cljs$core$IFn$_invoke$arity$2(G__5691,G__5692) : pred__5688.call(null,G__5691,G__5692));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__5693 = cljs.core.cst$kw$current;
var G__5694 = expr__5689;
return (pred__5688.cljs$core$IFn$_invoke$arity$2 ? pred__5688.cljs$core$IFn$_invoke$arity$2(G__5693,G__5694) : pred__5688.call(null,G__5693,G__5694));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__5689)].join('')));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$buffer_DASH_blob,(function (this$,token){
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nl_DASH_t,(function (this$,token){
if(cljs.core.truth_((function (){var or__4047__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$mandatory);
if(or__4047__auto__){
return or__4047__auto__;
} else {
var and__4036__auto__ = (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$fill)));
if(and__4036__auto__){
return cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__4036__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__5718__auto___5695 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5718__auto___5695)){
var tws_5696 = temp__5718__auto___5695;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_5696);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__5697 = cljs.core.seq(tokens);
var chunk__5698 = null;
var count__5699 = (0);
var i__5700 = (0);
while(true){
if((i__5700 < count__5699)){
var token = chunk__5698.cljs$core$IIndexed$_nth$arity$2(null,i__5700);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t)))){
var temp__5718__auto___5701 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5718__auto___5701)){
var tws_5702 = temp__5718__auto___5701;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_5702);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_5703 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__4036__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4036__auto__)){
return tws_5703;
} else {
return and__4036__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_5703);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}


var G__5704 = seq__5697;
var G__5705 = chunk__5698;
var G__5706 = count__5699;
var G__5707 = (i__5700 + (1));
seq__5697 = G__5704;
chunk__5698 = G__5705;
count__5699 = G__5706;
i__5700 = G__5707;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__5697);
if(temp__5720__auto__){
var seq__5697__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5697__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__5697__$1);
var G__5708 = cljs.core.chunk_rest(seq__5697__$1);
var G__5709 = c__4461__auto__;
var G__5710 = cljs.core.count(c__4461__auto__);
var G__5711 = (0);
seq__5697 = G__5708;
chunk__5698 = G__5709;
count__5699 = G__5710;
i__5700 = G__5711;
continue;
} else {
var token = cljs.core.first(seq__5697__$1);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t)))){
var temp__5718__auto___5712 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5718__auto___5712)){
var tws_5713 = temp__5718__auto___5712;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_5713);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_5714 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__4036__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4036__auto__)){
return tws_5714;
} else {
return and__4036__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_5714);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}


var G__5715 = cljs.core.next(seq__5697__$1);
var G__5716 = null;
var G__5717 = (0);
var G__5718 = (0);
seq__5697 = G__5715;
chunk__5698 = G__5716;
count__5699 = G__5717;
i__5700 = G__5718;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return (((maxcol == null)) || (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol)));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__4047__auto__ = cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (!(cljs.pprint.tokens_fit_QMARK_(this$,section)));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width(this$);
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__4036__auto__ = miser_width;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = maxcol;
if(cljs.core.truth_(and__4036__auto____$1)){
var and__4036__auto____$2 = (cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__4036__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return and__4036__auto____$2;
}
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined')){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__4524__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__5719 = cljs.core.get_global_hierarchy;
return (fexpr__5719.cljs$core$IFn$_invoke$arity$0 ? fexpr__5719.cljs$core$IFn$_invoke$arity$0() : fexpr__5719.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__){
return (function (t,_,___$1,___$2){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__))
,cljs.core.cst$kw$default,hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$linear,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$miser,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill,(function (newl,this$,section,subsection){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
var or__4047__auto__ = cljs.core.deref(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = (!(cljs.pprint.tokens_fit_QMARK_(this$,subsection)));
if(or__4047__auto____$1){
return or__4047__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$mandatory,(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__5720_SHARP_){
return (!(((cljs.pprint.nl_t_QMARK_(p1__5720_SHARP_)) && (cljs.pprint.ancestor_QMARK_(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__5720_SHARP_),lb)))));
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__5721_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__5721_SHARP_);
return (!(((cljs.pprint.nl_t_QMARK_(p1__5721_SHARP_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb)) || (cljs.pprint.ancestor_QMARK_(nl_lb,lb)))))));
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__5722 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__5722;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_5723 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_5723);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__5724_SHARP_){
return (!(cljs.pprint.nl_t_QMARK_(p1__5724_SHARP_)));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__5725 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5725,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5725,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__5728 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5728,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5728,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__5731 = newl;
var G__5732 = this$;
var G__5733 = section;
var G__5734 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__5731,G__5732,G__5733,G__5734) : cljs.pprint.emit_nl_QMARK_.call(null,G__5731,G__5732,G__5733,G__5734));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = (!(cljs.pprint.tokens_fit_QMARK_(this$,result)));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if((!(cljs.pprint.tokens_fit_QMARK_(this$,buffer)))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if((!((buffer === new_buffer)))){
var G__5735 = new_buffer;
buffer = G__5735;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if((!(cljs.pprint.tokens_fit_QMARK_(this$,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__5718__auto__ = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5718__auto__)){
var buf = temp__5718__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5720__auto__ = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5720__auto__)){
var tws = temp__5720__auto__;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffering,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_5740 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_5741 = (oldpos_5740 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_5741);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_5740,newpos_5741));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__5736_5742 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__5737_5743 = null;
var count__5738_5744 = (0);
var i__5739_5745 = (0);
while(true){
if((i__5739_5745 < count__5738_5744)){
var l_5746__$1 = chunk__5737_5743.cljs$core$IIndexed$_nth$arity$2(null,i__5739_5745);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_5746__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__5747 = seq__5736_5742;
var G__5748 = chunk__5737_5743;
var G__5749 = count__5738_5744;
var G__5750 = (i__5739_5745 + (1));
seq__5736_5742 = G__5747;
chunk__5737_5743 = G__5748;
count__5738_5744 = G__5749;
i__5739_5745 = G__5750;
continue;
} else {
var temp__5720__auto___5751 = cljs.core.seq(seq__5736_5742);
if(temp__5720__auto___5751){
var seq__5736_5752__$1 = temp__5720__auto___5751;
if(cljs.core.chunked_seq_QMARK_(seq__5736_5752__$1)){
var c__4461__auto___5753 = cljs.core.chunk_first(seq__5736_5752__$1);
var G__5754 = cljs.core.chunk_rest(seq__5736_5752__$1);
var G__5755 = c__4461__auto___5753;
var G__5756 = cljs.core.count(c__4461__auto___5753);
var G__5757 = (0);
seq__5736_5742 = G__5754;
chunk__5737_5743 = G__5755;
count__5738_5744 = G__5756;
i__5739_5745 = G__5757;
continue;
} else {
var l_5758__$1 = cljs.core.first(seq__5736_5752__$1);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_5758__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__5759 = cljs.core.next(seq__5736_5752__$1);
var G__5760 = null;
var G__5761 = (0);
var G__5762 = (0);
seq__5736_5742 = G__5759;
chunk__5737_5743 = G__5760;
count__5738_5744 = G__5761;
i__5739_5745 = G__5762;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffering,cljs.core.cst$kw$writing);

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$buffer_DASH_block,cljs.core.cst$kw$pretty_DASH_writer,cljs.core.cst$kw$sections,cljs.core.cst$kw$mode,cljs.core.cst$kw$pos,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$base,cljs.core.cst$kw$buffer_DASH_level,cljs.core.cst$kw$buffer],[lb,miser_width,lb,true,null,cljs.core.cst$kw$writing,(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint5763 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint5763 = (function (writer,max_columns,miser_width,lb,fields,meta5764){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta5764 = meta5764;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint5763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_5765,meta5764__$1){
var self__ = this;
var _5765__$1 = this;
return (new cljs.pprint.t_cljs$pprint5763(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta5764__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint5763.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_5765){
var self__ = this;
var _5765__$1 = this;
return self__.meta5764;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint5763.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint5763.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__5766 = cljs.core._EQ_;
var expr__5767 = cljs.core.type(x);
if(cljs.core.truth_((pred__5766.cljs$core$IFn$_invoke$arity$2 ? pred__5766.cljs$core$IFn$_invoke$arity$2(String,expr__5767) : pred__5766.call(null,String,expr__5767)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,white_space);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__5766.cljs$core$IFn$_invoke$arity$2 ? pred__5766.cljs$core$IFn$_invoke$arity$2(Number,expr__5767) : pred__5766.call(null,Number,expr__5767)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__5767)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint5763.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint5763.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint5763.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),cljs.core.cst$kw$buffering)){
cljs.pprint.write_tokens(this$__$1,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint5763.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta5764], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint5763.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint5763.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint5763";

cljs.pprint.t_cljs$pprint5763.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.pprint/t_cljs$pprint5763");
});})(lb,fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint5763.
 */
cljs.pprint.__GT_t_cljs$pprint5763 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint5763(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta5764){
return (new cljs.pprint.t_cljs$pprint5763(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta5764));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint5763(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var temp__5720__auto___5770 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5720__auto___5770)){
var cb_5771 = temp__5720__auto___5770;
var G__5769_5772 = cljs.core.cst$kw$start;
(cb_5771.cljs$core$IFn$_invoke$arity$1 ? cb_5771.cljs$core$IFn$_invoke$arity$1(G__5769_5772) : cb_5771.call(null,G__5769_5772));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__5720__auto___5774 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5720__auto___5774)){
var cb_5775 = temp__5720__auto___5774;
var G__5773_5776 = cljs.core.cst$kw$end;
(cb_5775.cljs$core$IFn$_invoke$arity$1 ? cb_5775.cljs$core$IFn$_invoke$arity$1(G__5773_5776) : cb_5775.call(null,G__5773_5776));
} else {
}
} else {
var oldpos_5777 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_5778 = (oldpos_5777 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_5778);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_5777,newpos_5778));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$buffering);

var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__5779 = cljs.core._EQ_;
var expr__5780 = relative_to;
if(cljs.core.truth_((function (){var G__5782 = cljs.core.cst$kw$block;
var G__5783 = expr__5780;
return (pred__5779.cljs$core$IFn$_invoke$arity$2 ? pred__5779.cljs$core$IFn$_invoke$arity$2(G__5782,G__5783) : pred__5779.call(null,G__5782,G__5783));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__5784 = cljs.core.cst$kw$current;
var G__5785 = expr__5780;
return (pred__5779.cljs$core$IFn$_invoke$arity$2 ? pred__5779.cljs$core$IFn$_invoke$arity$2(G__5784,G__5785) : pred__5779.call(null,G__5784,G__5785));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__5780)].join('')));
}
}
})()));
} else {
var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined')){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__5786_SHARP_){
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__5786_SHARP_));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__5786_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__4036__auto__ = (((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__4036__auto__){
return cljs.core.cst$kw$pretty_DASH_writer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return and__4036__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__4036__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__4036__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})();
if((!(cljs.pprint._STAR_print_pretty_STAR_))){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5819 = arguments.length;
var i__4642__auto___5820 = (0);
while(true){
if((i__4642__auto___5820 < len__4641__auto___5819)){
args__4647__auto__.push((arguments[i__4642__auto___5820]));

var G__5821 = (i__4642__auto___5820 + (1));
i__4642__auto___5820 = G__5821;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stream,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR__orig_val__5791 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR__orig_val__5792 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR__orig_val__5793 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__5794 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR__orig_val__5795 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR__orig_val__5796 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR__orig_val__5797 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR__orig_val__5798 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR__orig_val__5799 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR__orig_val__5800 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR__orig_val__5801 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR__orig_val__5802 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
var _STAR_print_base_STAR__temp_val__5803 = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);
var _STAR_print_circle_STAR__temp_val__5804 = cljs.core.cst$kw$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);
var _STAR_print_length_STAR__temp_val__5805 = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);
var _STAR_print_level_STAR__temp_val__5806 = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);
var _STAR_print_lines_STAR__temp_val__5807 = cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);
var _STAR_print_miser_width_STAR__temp_val__5808 = cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);
var _STAR_print_pprint_dispatch_STAR__temp_val__5809 = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);
var _STAR_print_pretty_STAR__temp_val__5810 = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);
var _STAR_print_radix_STAR__temp_val__5811 = cljs.core.cst$kw$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);
var _STAR_print_readably_STAR__temp_val__5812 = cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);
var _STAR_print_right_margin_STAR__temp_val__5813 = cljs.core.cst$kw$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);
var _STAR_print_suppress_namespaces_STAR__temp_val__5814 = cljs.core.cst$kw$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);
cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__temp_val__5803;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__temp_val__5804;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__5805;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__5806;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__temp_val__5807;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__temp_val__5808;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__5809;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__5810;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__temp_val__5811;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__5812;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__5813;

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__temp_val__5814;

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,cljs.core.cst$kw$stream))?cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__5314__auto___5822 = base_writer;
var new_writer__5315__auto___5823 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__5314__auto___5822));
var _STAR_out_STAR__orig_val__5815_5824 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__5816_5825 = ((new_writer__5315__auto___5823)?cljs.pprint.make_pretty_writer(base_writer__5314__auto___5822,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__5314__auto___5822);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__5816_5825;

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__5815_5824;
}} else {
var _STAR_out_STAR__orig_val__5817_5826 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__5818_5827 = base_writer;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__5818_5827;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__5817_5826;
}}

if(optval === true){
cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
}

if((optval == null)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__orig_val__5802;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__5801;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__5800;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__orig_val__5799;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__5798;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__5797;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__orig_val__5796;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__orig_val__5795;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__5794;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__5793;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__orig_val__5792;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__orig_val__5791;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.pprint.write.cljs$lang$applyTo = (function (seq5789){
var G__5790 = cljs.core.first(seq5789);
var seq5789__$1 = cljs.core.next(seq5789);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5790,seq5789__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__5829 = arguments.length;
switch (G__5829) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__5830 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__5831 = (new cljs.core.StringBufferWriter(sb));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__5831;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__5830;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__5314__auto__ = writer;
var new_writer__5315__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__5314__auto__));
var _STAR_out_STAR__orig_val__5832 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__5833 = ((new_writer__5315__auto__)?cljs.pprint.make_pretty_writer(base_writer__5314__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__5314__auto__);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__5833;

try{var _STAR_print_pretty_STAR__orig_val__5834_5837 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_pretty_STAR__temp_val__5835_5838 = true;
cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__5835_5838;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__5834_5837;
}
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_))))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__5832;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__4036__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__4036__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__4036__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mandatory,null,cljs.core.cst$kw$miser,null,cljs.core.cst$kw$fill,null,cljs.core.cst$kw$linear,null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$current,null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$section,null,cljs.core.cst$kw$line,null,cljs.core.cst$kw$line_DASH_relative,null,cljs.core.cst$kw$section_DASH_relative,null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5842 = arguments.length;
var i__4642__auto___5843 = (0);
while(true){
if((i__4642__auto___5843 < len__4641__auto___5842)){
args__4647__auto__.push((arguments[i__4642__auto___5843]));

var G__5844 = (i__4642__auto___5843 + (1));
i__4642__auto___5843 = G__5844;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format(format_in):format_in);
var navigator = cljs.pprint.init_navigator(args);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator);
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq5839){
var G__5840 = cljs.core.first(seq5839);
var seq5839__$1 = cljs.core.next(seq5839);
var G__5841 = cljs.core.first(seq5839__$1);
var seq5839__$2 = cljs.core.next(seq5839__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5840,G__5841,seq5839__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),"^",cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k5846,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__5850 = k5846;
var G__5850__$1 = (((G__5850 instanceof cljs.core.Keyword))?G__5850.fqn:null);
switch (G__5850__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5846,else__4304__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__5851){
var vec__5852 = p__5851;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5852,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5852,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5845){
var self__ = this;
var G__5845__$1 = this;
return (new cljs.core.RecordIter((0),G__5845__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__5855 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__5855(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5847,other5848){
var self__ = this;
var this5847__$1 = this;
return (((!((other5848 == null)))) && ((this5847__$1.constructor === other5848.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5847__$1.seq,other5848.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5847__$1.rest,other5848.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5847__$1.pos,other5848.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5847__$1.__extmap,other5848.__extmap)));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,null,cljs.core.cst$kw$seq,null,cljs.core.cst$kw$rest,null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__5845){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__5856 = cljs.core.keyword_identical_QMARK_;
var expr__5857 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__5859 = cljs.core.cst$kw$seq;
var G__5860 = expr__5857;
return (pred__5856.cljs$core$IFn$_invoke$arity$2 ? pred__5856.cljs$core$IFn$_invoke$arity$2(G__5859,G__5860) : pred__5856.call(null,G__5859,G__5860));
})())){
return (new cljs.pprint.arg_navigator(G__5845,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5861 = cljs.core.cst$kw$rest;
var G__5862 = expr__5857;
return (pred__5856.cljs$core$IFn$_invoke$arity$2 ? pred__5856.cljs$core$IFn$_invoke$arity$2(G__5861,G__5862) : pred__5856.call(null,G__5861,G__5862));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__5845,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5863 = cljs.core.cst$kw$pos;
var G__5864 = expr__5857;
return (pred__5856.cljs$core$IFn$_invoke$arity$2 ? pred__5856.cljs$core$IFn$_invoke$arity$2(G__5863,G__5864) : pred__5856.call(null,G__5863,G__5864));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__5845,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__5845),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$seq,self__.seq,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$rest,self__.rest,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$pos,self__.pos,null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__5845){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__5845,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$seq,cljs.core.cst$sym$rest,cljs.core.cst$sym$pos], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"cljs.pprint/arg-navigator");
});

/**
 * Positional factory function for cljs.pprint/arg-navigator.
 */
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/arg-navigator, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__5849){
var extmap__4340__auto__ = (function (){var G__5865 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__5849,cljs.core.cst$kw$seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], 0));
if(cljs.core.record_QMARK_(G__5849)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5865);
} else {
return G__5865;
}
})();
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__5849),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__5849),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__5849),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__5867 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5867,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5867,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format(raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__5870 = navigator;
var G__5871 = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__5870,G__5871) : cljs.pprint.relative_reposition.call(null,G__5870,G__5871));
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k5873,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__5877 = k5873;
var G__5877__$1 = (((G__5877 instanceof cljs.core.Keyword))?G__5877.fqn:null);
switch (G__5877__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5873,else__4304__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__5878){
var vec__5879 = p__5878;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5879,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5879,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5872){
var self__ = this;
var G__5872__$1 = this;
return (new cljs.core.RecordIter((0),G__5872__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__5882 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__5882(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5874,other5875){
var self__ = this;
var this5874__$1 = this;
return (((!((other5875 == null)))) && ((this5874__$1.constructor === other5875.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5874__$1.func,other5875.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5874__$1.def,other5875.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5874__$1.params,other5875.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5874__$1.offset,other5875.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5874__$1.__extmap,other5875.__extmap)));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$func,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$def,null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__5872){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__5883 = cljs.core.keyword_identical_QMARK_;
var expr__5884 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__5886 = cljs.core.cst$kw$func;
var G__5887 = expr__5884;
return (pred__5883.cljs$core$IFn$_invoke$arity$2 ? pred__5883.cljs$core$IFn$_invoke$arity$2(G__5886,G__5887) : pred__5883.call(null,G__5886,G__5887));
})())){
return (new cljs.pprint.compiled_directive(G__5872,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5888 = cljs.core.cst$kw$def;
var G__5889 = expr__5884;
return (pred__5883.cljs$core$IFn$_invoke$arity$2 ? pred__5883.cljs$core$IFn$_invoke$arity$2(G__5888,G__5889) : pred__5883.call(null,G__5888,G__5889));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__5872,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5890 = cljs.core.cst$kw$params;
var G__5891 = expr__5884;
return (pred__5883.cljs$core$IFn$_invoke$arity$2 ? pred__5883.cljs$core$IFn$_invoke$arity$2(G__5890,G__5891) : pred__5883.call(null,G__5890,G__5891));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__5872,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5892 = cljs.core.cst$kw$offset;
var G__5893 = expr__5884;
return (pred__5883.cljs$core$IFn$_invoke$arity$2 ? pred__5883.cljs$core$IFn$_invoke$arity$2(G__5892,G__5893) : pred__5883.call(null,G__5892,G__5893));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__5872,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__5872),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$func,self__.func,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$def,self__.def,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$params,self__.params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$offset,self__.offset,null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__5872){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__5872,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$func,cljs.core.cst$sym$def,cljs.core.cst$sym$params,cljs.core.cst$sym$offset], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"cljs.pprint/compiled-directive");
});

/**
 * Positional factory function for cljs.pprint/compiled-directive.
 */
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

/**
 * Factory function for cljs.pprint/compiled-directive, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__5876){
var extmap__4340__auto__ = (function (){var G__5894 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__5876,cljs.core.cst$kw$func,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], 0));
if(cljs.core.record_QMARK_(G__5876)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5894);
} else {
return G__5894;
}
})();
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__5876),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__5876),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__5876),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__5876),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__5896,navigator){
var vec__5897 = p__5896;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5897,(0),null);
var vec__5900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5897,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5900,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5900,(1),null);
var vec__5903 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5903,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5903,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__5906 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5906,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5906,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.opt_base_str(cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__5909 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5909,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5909,(1),null);
var base_output = (function (){var or__4047__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params)) + (1)) * cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__5912_SHARP_){
if((p1__5912_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__5912_SHARP_,base),cljs.core.quot(p1__5912_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__5913_SHARP_){
if((p1__5913_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__5913_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__5913_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__5915 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5915,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5915,(1),null);
if(cljs.pprint.integral_QMARK_(arg)){
var neg_5918 = (arg < (0));
var pos_arg_5919 = ((neg_5918)?(- arg):arg);
var raw_str_5920 = cljs.pprint.opt_base_str(base,pos_arg_5919);
var group_str_5921 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_5918,pos_arg_5919,raw_str_5920,vec__5915,arg,arg_navigator__$1){
return (function (p1__5914_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__5914_SHARP_);
});})(neg_5918,pos_arg_5919,raw_str_5920,vec__5915,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_5920));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_5920);
var signed_str_5922 = ((neg_5918)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_5921)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_5921)].join(''):group_str_5921
));
var padded_str_5923 = (((signed_str_5922.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_5922.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_5922)].join(''):signed_str_5922);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_5923], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$colinc,(1),cljs.core.cst$kw$minpad,(0),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((hundreds > (0))) && ((tens > (0)))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((!(cljs.core.empty_QMARK_(this$)))) && ((!(cljs.core.empty_QMARK_(acc))))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((!(cljs.core.empty_QMARK_(this$)))) && (((pos + offset) > (0)))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__5924 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__5925 = (pos - (1));
var G__5926 = cljs.core.first(remainder);
var G__5927 = cljs.core.next(remainder);
acc = G__5924;
pos = G__5925;
this$ = G__5926;
remainder = G__5927;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__5928 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5928,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5928,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_5931 = (((arg < (0)))?(- arg):arg);
var parts_5932 = cljs.pprint.remainders((1000),abs_arg_5931);
if((cljs.core.count(parts_5932) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_5933 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_5932);
var full_str_5934 = cljs.pprint.add_english_scales(parts_strs_5933,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_5934)].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((hundreds > (0))) && ((tens > (0)))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if((((ten_digit > (0))) && ((!((unit_digit > (0))))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__5935 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5935,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5935,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_5938 = (((arg < (0)))?(- arg):arg);
var parts_5939 = cljs.pprint.remainders((1000),abs_arg_5938);
if((cljs.core.count(parts_5939) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_5940 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_5939));
var head_str_5941 = cljs.pprint.add_english_scales(parts_strs_5940,(1));
var tail_str_5942 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_5939));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((!(cljs.core.empty_QMARK_(head_str_5941)))) && ((!(cljs.core.empty_QMARK_(tail_str_5942))))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_5941),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_5942)].join(''):(((!(cljs.core.empty_QMARK_(head_str_5941))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_5941),"th"].join(''):tail_str_5942
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_5943 = cljs.core.rem(arg,(100));
var not_teens_5944 = ((((11) < low_two_digits_5943)) || (((19) > low_two_digits_5943)));
var low_digit_5945 = cljs.core.rem(low_two_digits_5943,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((low_digit_5945 === (1))) && (not_teens_5944)))?"st":(((((low_digit_5945 === (2))) && (not_teens_5944)))?"nd":(((((low_digit_5945 === (3))) && (not_teens_5944)))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__5946 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5946,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5946,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_5949 = cljs.pprint.remainders((10),arg);
var acc_5950 = cljs.core.PersistentVector.EMPTY;
var pos_5951 = (cljs.core.count(digits_5949) - (1));
var digits_5952__$1 = digits_5949;
while(true){
if(cljs.core.empty_QMARK_(digits_5952__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_5950)], 0));
} else {
var digit_5953 = cljs.core.first(digits_5952__$1);
var G__5954 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_5953))?acc_5950:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_5950,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_5951),(digit_5953 - (1)))));
var G__5955 = (pos_5951 - (1));
var G__5956 = cljs.core.next(digits_5952__$1);
acc_5950 = G__5954;
pos_5951 = G__5955;
digits_5952__$1 = G__5956;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__5957 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5957,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5957,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__5960 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5960,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5960,(1),null);
var pred__5963_5970 = cljs.core._EQ_;
var expr__5964_5971 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__5966 = "o";
var G__5967 = expr__5964_5971;
return (pred__5963_5970.cljs$core$IFn$_invoke$arity$2 ? pred__5963_5970.cljs$core$IFn$_invoke$arity$2(G__5966,G__5967) : pred__5963_5970.call(null,G__5966,G__5967));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__5968 = "u";
var G__5969 = expr__5964_5971;
return (pred__5963_5970.cljs$core$IFn$_invoke$arity$2 ? pred__5963_5970.cljs$core$IFn$_invoke$arity$2(G__5968,G__5969) : pred__5963_5970.call(null,G__5968,G__5969));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__5963_5970.cljs$core$IFn$_invoke$arity$2 ? pred__5963_5970.cljs$core$IFn$_invoke$arity$2(null,expr__5964_5971) : pred__5963_5970.call(null,null,expr__5964_5971)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__5964_5971)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__5972 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5972,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5972,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,token)));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.pprint.abort_QMARK_(context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__5975 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5975,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5975,(1),null);
var vec__5978 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5978,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5978,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(f));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(s) - (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__5981 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5981,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5981,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = (((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+"))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__5984 = (i - (1));
i = G__5984;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__4047__auto__ = d;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__4135__auto__ = (2);
var y__4136__auto__ = w;
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__4135__auto__ = (e + (1));
var y__4136__auto__ = (w__$1 - (1));
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})():(w__$1 + e)
));
var vec__5985 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5985,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5985,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5985,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5985,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__5988 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5988,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5988,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var vec__5991 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5991,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5991,(1),null);
var vec__5994 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5994,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5994,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__5997 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5997,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5997,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__4047__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp)));
var vec__6000 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6000,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6000,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6000,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__4036__auto__ = w;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = d;
if(cljs.core.truth_(and__4036__auto____$1)){
return (((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0))))));
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_6003 = cljs.core.count(fixed_repr__$1);
var signed_len_6004 = (cljs.core.truth_(add_sign)?(len_6003 + (1)):len_6003);
var prepend_zero_6005__$1 = ((prepend_zero) && ((!((signed_len_6004 >= w)))));
var append_zero_6006__$1 = ((append_zero) && ((!((signed_len_6004 >= w)))));
var full_len_6007 = ((((prepend_zero_6005__$1) || (append_zero_6006__$1)))?(signed_len_6004 + (1)):signed_len_6004);
if(cljs.core.truth_((function (){var and__4036__auto__ = (full_len_6007 > w);
if(and__4036__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4036__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_6007),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_6005__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_6006__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__6008 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6008,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6008,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__6014_6024 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__6015_6025 = G__6014_6024;
var mantissa_6026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6015_6025,(0),null);
var exp_6027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6015_6025,(1),null);
var G__6014_6028__$1 = G__6014_6024;
while(true){
var vec__6018_6029 = G__6014_6028__$1;
var mantissa_6030__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6018_6029,(0),null);
var exp_6031__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6018_6029,(1),null);
var w_6032 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_6033 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_6034 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_6035 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_6036 = (function (){var or__4047__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "E";
}
})();
var add_sign_6037 = (function (){var or__4047__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_6038 = (k_6035 <= (0));
var scaled_exp_6039 = (exp_6031__$1 - (k_6035 - (1)));
var scaled_exp_str_6040 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_6039));
var scaled_exp_str_6041__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_6036),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_6039 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_6034)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_6034 - cljs.core.count(scaled_exp_str_6040)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_6040)].join('');
var exp_width_6042 = cljs.core.count(scaled_exp_str_6041__$1);
var base_mantissa_width_6043 = cljs.core.count(mantissa_6030__$1);
var scaled_mantissa_6044 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_6035),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_6030__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_6033)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_6033 - (base_mantissa_width_6043 - (1))) - (((k_6035 < (0)))?(- k_6035):(0))),"0")):null))].join('');
var w_mantissa_6045 = (cljs.core.truth_(w_6032)?(w_6032 - exp_width_6042):null);
var vec__6021_6046 = cljs.pprint.round_str(scaled_mantissa_6044,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_6035,(0)))?(d_6033 - (1)):(((k_6035 > (0)))?d_6033:(((k_6035 < (0)))?(d_6033 - (1)):null))),(cljs.core.truth_(w_mantissa_6045)?(w_mantissa_6045 - (cljs.core.truth_(add_sign_6037)?(1):(0))):null));
var rounded_mantissa_6047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6021_6046,(0),null);
var __6048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6021_6046,(1),null);
var incr_exp_6049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6021_6046,(2),null);
var full_mantissa_6050 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_6047,k_6035);
var append_zero_6051 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_6035,cljs.core.count(rounded_mantissa_6047))) && ((d_6033 == null)));
if(cljs.core.not(incr_exp_6049)){
if(cljs.core.truth_(w_6032)){
var len_6052 = (cljs.core.count(full_mantissa_6050) + exp_width_6042);
var signed_len_6053 = (cljs.core.truth_(add_sign_6037)?(len_6052 + (1)):len_6052);
var prepend_zero_6054__$1 = ((prepend_zero_6038) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_6053,w_6032)))));
var full_len_6055 = ((prepend_zero_6054__$1)?(signed_len_6053 + (1)):signed_len_6053);
var append_zero_6056__$1 = ((append_zero_6051) && ((full_len_6055 < w_6032)));
if(cljs.core.truth_((function (){var and__4036__auto__ = (function (){var or__4047__auto__ = (full_len_6055 > w_6032);
if(or__4047__auto__){
return or__4047__auto__;
} else {
var and__4036__auto__ = e_6034;
if(cljs.core.truth_(and__4036__auto__)){
return ((exp_width_6042 - (2)) > e_6034);
} else {
return and__4036__auto__;
}
}
})();
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4036__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_6032,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_6032 - full_len_6055) - ((append_zero_6056__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_6037)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_6054__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_6050),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_6056__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_6041__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_6037)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_6038)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_6050),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_6051)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_6041__$1)].join('')], 0));
}
} else {
var G__6057 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_6047,(exp_6031__$1 + (1))], null);
G__6014_6028__$1 = G__6057;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__6058 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6058,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6058,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__6061 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6061,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6061,(1),null);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__4135__auto__ = cljs.core.count(mantissa);
var y__4136__auto__ = (function (){var x__4138__auto__ = n;
var y__4139__auto__ = (7);
return ((x__4138__auto__ < y__4139__auto__) ? x__4138__auto__ : y__4139__auto__);
})();
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})());
var dd = (d__$1 - n);
if(((((0) <= dd)) && ((dd <= d__$1)))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$w,ww,cljs.core.cst$kw$d,dd,cljs.core.cst$kw$k,(0),cljs.core.cst$kw$overflowchar,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__6064 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6064,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6064,(1),null);
var vec__6067 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6067,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6067,(1),null);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__4047__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (arg < (0));
}
})();
var vec__6070 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6070,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6070,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6070,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4036__auto__)){
return add_sign;
} else {
return and__4036__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params));
if(and__4036__auto__){
return add_sign;
} else {
return and__4036__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(params);
var vec__6073 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6073,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6073,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses)))))?cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__6076 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6076,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6076,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__6079 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6079,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6079,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__6082 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6082,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6082,(1),null);
var vec__6085 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6085,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6085,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4047__auto__ = ((cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
var and__4036__auto__ = max_count;
if(cljs.core.truth_(and__4036__auto__)){
return (count >= max_count);
} else {
return and__4036__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__6088 = (count + (1));
var G__6089 = iter_result;
var G__6090 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__6088;
args__$1 = G__6089;
last_pos = G__6090;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__6091 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6091,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6091,(1),null);
var vec__6094 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6094,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6094,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__4047__auto__ = ((cljs.core.empty_QMARK_(arg_list__$1)) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
var and__4036__auto__ = max_count;
if(cljs.core.truth_(and__4036__auto__)){
return (count >= max_count);
} else {
return and__4036__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__6097 = (count + (1));
var G__6098 = cljs.core.next(arg_list__$1);
count = G__6097;
arg_list__$1 = G__6098;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__6099 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6099,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6099,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4047__auto__ = ((cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
var and__4036__auto__ = max_count;
if(cljs.core.truth_(and__4036__auto__)){
return (count >= max_count);
} else {
return and__4036__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__6102 = (count + (1));
var G__6103 = iter_result;
var G__6104 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__6102;
navigator__$2 = G__6103;
last_pos = G__6104;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__6105 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6105,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6105,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__4047__auto__ = ((cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
var and__4036__auto__ = max_count;
if(cljs.core.truth_(and__4036__auto__)){
return (count >= max_count);
} else {
return and__4036__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__6108 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6108,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6108,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__6111 = (count + (1));
var G__6112 = navigator__$3;
count = G__6111;
navigator__$2 = G__6112;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block(params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses(params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__6113 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__6116 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__6117 = (new cljs.core.StringBufferWriter(sb));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__6117;

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__6116;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6113,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6113,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__6118 = cljs.core.next(clauses__$1);
var G__6119 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__6120 = iter_result;
clauses__$1 = G__6118;
acc = G__6119;
navigator__$1 = G__6120;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__6121 = (function (){var temp__5720__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5720__auto__)){
var else$ = temp__5720__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__6124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6121,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6124,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6121,(1),null);
var navigator__$1 = (function (){var or__4047__auto__ = new_navigator;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return navigator;
}
})();
var vec__6127 = (function (){var temp__5720__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5720__auto__)){
var p = temp__5720__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6127,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6127,(1),null);
var navigator__$2 = (function (){var or__4047__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__4047__auto__ = cljs.core.first(cljs.core.cst$kw$min_DASH_remaining.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__4047__auto__ = cljs.core.first(cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var vec__6130 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6130,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6130,(1),null);
var slots = (function (){var x__4135__auto__ = (1);
var y__4136__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params);
var minpad = cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params);
var colinc = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__4135__auto__ = minpad;
var y__4136__auto__ = cljs.core.quot(total_pad,slots);
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__4036__auto__ = eol_str;
if(cljs.core.truth_(and__4036__auto__)){
return (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__4036__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_6133__$1 = slots;
var extra_pad_6134__$1 = extra_pad;
var strs_6135__$1 = strs;
var pad_only_6136 = (function (){var or__4047__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_6135__$1),(1))) && (cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq(strs_6135__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_6136))?cljs.core.first(strs_6135__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__4047__auto__ = pad_only_6136;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = cljs.core.next(strs_6135__$1);
if(or__4047__auto____$1){
return or__4047__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_6134__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__6137 = (slots_6133__$1 - (1));
var G__6138 = (extra_pad_6134__$1 - (1));
var G__6139 = (cljs.core.truth_(pad_only_6136)?strs_6135__$1:cljs.core.next(strs_6135__$1));
var G__6140 = false;
slots_6133__$1 = G__6137;
extra_pad_6134__$1 = G__6138;
strs_6135__$1 = G__6139;
pad_only_6136 = G__6140;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint6141 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint6141 = (function (writer,meta6142){
this.writer = writer;
this.meta6142 = meta6142;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint6141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6143,meta6142__$1){
var self__ = this;
var _6143__$1 = this;
return (new cljs.pprint.t_cljs$pprint6141(self__.writer,meta6142__$1));
});

cljs.pprint.t_cljs$pprint6141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6143){
var self__ = this;
var _6143__$1 = this;
return self__.meta6142;
});

cljs.pprint.t_cljs$pprint6141.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint6141.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__6144 = cljs.core._EQ_;
var expr__6145 = cljs.core.type(x);
if(cljs.core.truth_((pred__6144.cljs$core$IFn$_invoke$arity$2 ? pred__6144.cljs$core$IFn$_invoke$arity$2(String,expr__6145) : pred__6144.call(null,String,expr__6145)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__6144.cljs$core$IFn$_invoke$arity$2 ? pred__6144.cljs$core$IFn$_invoke$arity$2(Number,expr__6145) : pred__6144.call(null,Number,expr__6145)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__6145)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint6141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta6142], null);
});

cljs.pprint.t_cljs$pprint6141.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint6141.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint6141";

cljs.pprint.t_cljs$pprint6141.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.pprint/t_cljs$pprint6141");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint6141.
 */
cljs.pprint.__GT_t_cljs$pprint6141 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint6141(writer__$1,meta6142){
return (new cljs.pprint.t_cljs$pprint6141(writer__$1,meta6142));
});

}

return (new cljs.pprint.t_cljs$pprint6141(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint6147 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint6147 = (function (writer,meta6148){
this.writer = writer;
this.meta6148 = meta6148;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint6147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6149,meta6148__$1){
var self__ = this;
var _6149__$1 = this;
return (new cljs.pprint.t_cljs$pprint6147(self__.writer,meta6148__$1));
});

cljs.pprint.t_cljs$pprint6147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6149){
var self__ = this;
var _6149__$1 = this;
return self__.meta6148;
});

cljs.pprint.t_cljs$pprint6147.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint6147.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__6150 = cljs.core._EQ_;
var expr__6151 = cljs.core.type(x);
if(cljs.core.truth_((pred__6150.cljs$core$IFn$_invoke$arity$2 ? pred__6150.cljs$core$IFn$_invoke$arity$2(String,expr__6151) : pred__6150.call(null,String,expr__6151)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__6150.cljs$core$IFn$_invoke$arity$2 ? pred__6150.cljs$core$IFn$_invoke$arity$2(Number,expr__6151) : pred__6150.call(null,Number,expr__6151)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__6151)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint6147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta6148], null);
});

cljs.pprint.t_cljs$pprint6147.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint6147.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint6147";

cljs.pprint.t_cljs$pprint6147.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.pprint/t_cljs$pprint6147");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint6147.
 */
cljs.pprint.__GT_t_cljs$pprint6147 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint6147(writer__$1,meta6148){
return (new cljs.pprint.t_cljs$pprint6147(writer__$1,meta6148));
});

}

return (new cljs.pprint.t_cljs$pprint6147(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__4036__auto__ = first_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = f;
if(cljs.core.truth_(and__4036__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__4036__auto__ = m;
if(cljs.core.truth_(and__4036__auto__)){
return (m.index + (1));
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint6153 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint6153 = (function (writer,last_was_whitespace_QMARK_,meta6154){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta6154 = meta6154;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint6153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_6155,meta6154__$1){
var self__ = this;
var _6155__$1 = this;
return (new cljs.pprint.t_cljs$pprint6153(self__.writer,self__.last_was_whitespace_QMARK_,meta6154__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint6153.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_6155){
var self__ = this;
var _6155__$1 = this;
return self__.meta6154;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint6153.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint6153.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__6156 = cljs.core._EQ_;
var expr__6157 = cljs.core.type(x);
if(cljs.core.truth_((pred__6156.cljs$core$IFn$_invoke$arity$2 ? pred__6156.cljs$core$IFn$_invoke$arity$2(String,expr__6157) : pred__6156.call(null,String,expr__6157)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,(function (){var G__6159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__6159);
})());
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__6156.cljs$core$IFn$_invoke$arity$2 ? pred__6156.cljs$core$IFn$_invoke$arity$2(Number,expr__6157) : pred__6156.call(null,Number,expr__6157)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__6157)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint6153.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta6154], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint6153.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint6153.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint6153";

cljs.pprint.t_cljs$pprint6153.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.pprint/t_cljs$pprint6153");
});})(last_was_whitespace_QMARK_))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint6153.
 */
cljs.pprint.__GT_t_cljs$pprint6153 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint6153(writer__$1,last_was_whitespace_QMARK___$1,meta6154){
return (new cljs.pprint.t_cljs$pprint6153(writer__$1,last_was_whitespace_QMARK___$1,meta6154));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint6153(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint6160 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint6160 = (function (writer,capped,meta6161){
this.writer = writer;
this.capped = capped;
this.meta6161 = meta6161;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint6160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_6162,meta6161__$1){
var self__ = this;
var _6162__$1 = this;
return (new cljs.pprint.t_cljs$pprint6160(self__.writer,self__.capped,meta6161__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint6160.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_6162){
var self__ = this;
var _6162__$1 = this;
return self__.meta6161;
});})(capped))
;

cljs.pprint.t_cljs$pprint6160.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint6160.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__6163 = cljs.core._EQ_;
var expr__6164 = cljs.core.type(x);
if(cljs.core.truth_((pred__6163.cljs$core$IFn$_invoke$arity$2 ? pred__6163.cljs$core$IFn$_invoke$arity$2(String,expr__6164) : pred__6163.call(null,String,expr__6164)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__4036__auto__ = m;
if(cljs.core.truth_(and__4036__auto__)){
return m.index;
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__6163.cljs$core$IFn$_invoke$arity$2 ? pred__6163.cljs$core$IFn$_invoke$arity$2(Number,expr__6164) : pred__6163.call(null,Number,expr__6164)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.not(cljs.core.deref(self__.capped));
if(and__4036__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__4036__auto__;
}
})())){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__6164)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint6160.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta6161], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint6160.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint6160.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint6160";

cljs.pprint.t_cljs$pprint6160.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.pprint/t_cljs$pprint6160");
});})(capped))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint6160.
 */
cljs.pprint.__GT_t_cljs$pprint6160 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint6160(writer__$1,capped__$1,meta6161){
return (new cljs.pprint.t_cljs$pprint6160(writer__$1,capped__$1,meta6161));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint6160(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR__orig_val__6166 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__6167 = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__6167;

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__6166;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if((((!((cljs.core._STAR_out_STAR_ == null))))?(((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$))))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_6169 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_6170 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_6171 = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_6172 = (((current_6171 < colnum_6169))?(colnum_6169 - current_6171):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_6170,(0)))?(0):(colinc_6170 - cljs.core.rem((current_6171 - colnum_6169),colinc_6170))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_6172," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_6173 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_6174 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_6175 = (colrel_6173 + cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_6176 = (((colinc_6174 > (0)))?cljs.core.rem(start_col_6175,colinc_6174):(0));
var space_count_6177 = (colrel_6173 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_6176))?(0):(colinc_6174 - offset_6176)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_6177," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__6178 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6178,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6178,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6181_6185 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6182_6186 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6183_6187 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6184_6188 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6183_6187;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6184_6188;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6182_6186;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6181_6185;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$current:cljs.core.cst$kw$block);
cljs.pprint.pprint_indent(relative_to,cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$mandatory:cljs.core.cst$kw$fill):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$miser:cljs.core.cst$kw$linear));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"A",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__6189_SHARP_,p2__6190_SHARP_,p3__6191_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__6189_SHARP_,p2__6190_SHARP_,p3__6191_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__6192_SHARP_,p2__6193_SHARP_,p3__6194_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__6192_SHARP_,p2__6193_SHARP_,p3__6194_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__6195_SHARP_,p2__6196_SHARP_,p3__6197_SHARP_){
return cljs.pprint.format_integer((10),p1__6195_SHARP_,p2__6196_SHARP_,p3__6197_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__6198_SHARP_,p2__6199_SHARP_,p3__6200_SHARP_){
return cljs.pprint.format_integer((2),p1__6198_SHARP_,p2__6199_SHARP_,p3__6200_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__6201_SHARP_,p2__6202_SHARP_,p3__6203_SHARP_){
return cljs.pprint.format_integer((8),p1__6201_SHARP_,p2__6202_SHARP_,p3__6203_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__6204_SHARP_,p2__6205_SHARP_,p3__6206_SHARP_){
return cljs.pprint.format_integer((16),p1__6204_SHARP_,p2__6205_SHARP_,p3__6206_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__6207_SHARP_,p2__6208_SHARP_,p3__6209_SHARP_){
return cljs.pprint.format_integer(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__6207_SHARP_),p1__6207_SHARP_,p2__6208_SHARP_,p3__6209_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4036__auto__;
}
})())){
return (function (p1__6210_SHARP_,p2__6211_SHARP_,p3__6212_SHARP_){
return cljs.pprint.format_old_roman(p1__6210_SHARP_,p2__6211_SHARP_,p3__6212_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__6213_SHARP_,p2__6214_SHARP_,p3__6215_SHARP_){
return cljs.pprint.format_new_roman(p1__6213_SHARP_,p2__6214_SHARP_,p3__6215_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__6216_SHARP_,p2__6217_SHARP_,p3__6218_SHARP_){
return cljs.pprint.format_ordinal_english(p1__6216_SHARP_,p2__6217_SHARP_,p3__6218_SHARP_);
});
} else {
return (function (p1__6219_SHARP_,p2__6220_SHARP_,p3__6221_SHARP_){
return cljs.pprint.format_cardinal_english(p1__6219_SHARP_,p2__6220_SHARP_,p3__6221_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__6231 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6231,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6231,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"C",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$char_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"F",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"E",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"G",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"$",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"%",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4518__auto___6249 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_6250 = (0);
while(true){
if((i_6250 < n__4518__auto___6249)){
cljs.pprint.prn();

var G__6251 = (i_6250 + (1));
i_6250 = G__6251;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_6252 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_6252 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__4518__auto___6253 = (cnt_6252 - (1));
var i_6254 = (0);
while(true){
if((i_6254 < n__4518__auto___6253)){
cljs.pprint.prn();

var G__6255 = (i_6254 + (1));
i_6254 = G__6255;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4518__auto___6256 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_6257 = (0);
while(true){
if((i_6257 < n__4518__auto___6256)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__6258 = (i_6257 + (1));
i_6257 = G__6258;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"~",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"\n",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"T",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$colnum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__6222_SHARP_,p2__6223_SHARP_,p3__6224_SHARP_){
return cljs.pprint.relative_tabulation(p1__6222_SHARP_,p2__6223_SHARP_,p3__6224_SHARP_);
});
} else {
return (function (p1__6225_SHARP_,p2__6226_SHARP_,p3__6227_SHARP_){
return cljs.pprint.absolute_tabulation(p1__6225_SHARP_,p2__6226_SHARP_,p3__6227_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"*",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"?",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__6234 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6234,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6234,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__6237 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6237,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6237,(1),null);
var vec__6240 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6240,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6240,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"(",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,")",cljs.core.cst$kw$allows_DASH_separator,null,cljs.core.cst$kw$else,null], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4036__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__6228_SHARP_,p2__6229_SHARP_,p3__6230_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__6228_SHARP_,p2__6229_SHARP_,p3__6230_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,")",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"[",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,"]",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$last], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,";",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$min_DASH_remaining,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$max_DASH_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$separator,true], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"]",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"{",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$max_DASH_iterations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$right,"}",cljs.core.cst$kw$allows_DASH_separator,false], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4036__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"}",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"<",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,">",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$first], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,">",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"^",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(3),[cljs.core.cst$kw$arg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.cst$kw$colon_DASH_up_DASH_arrow:cljs.core.cst$kw$up_DASH_arrow);
if(cljs.core.truth_((function (){var and__4036__auto__ = arg1;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = arg2;
if(cljs.core.truth_(and__4036__auto____$1)){
return arg3;
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = arg1;
if(cljs.core.truth_(and__4036__auto__)){
return arg2;
} else {
return and__4036__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"W",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var or__4047__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,null,cljs.core.cst$kw$length,null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pretty,true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__6243 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6243,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6243,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__6246 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6246,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6246,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"_",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"I",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remaining_DASH_arg_DASH_count,null,cljs.core.cst$kw$parameter_DASH_from_DASH_args,null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__6259){
var vec__6260 = p__6259;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6260,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6260,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6260,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__6263){
var vec__6264 = p__6263;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6264,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6264,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__6267){
var vec__6268 = p__6267;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6268,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6268,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6268,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error(["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4036__auto__){
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4036__auto__;
}
})())){
cljs.pprint.format_error(["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4036__auto__){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4036__auto__;
}
})())){
cljs.pprint.format_error(["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.not(cljs.core.cst$kw$both.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4036__auto__){
var and__4036__auto____$1 = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__4036__auto____$1)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())){
return cljs.pprint.format_error(["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__4138__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__4139__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__4138__auto__ < y__4139__auto__) ? x__4138__auto__ : y__4139__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__6271_SHARP_,p2__6272_SHARP_){
var val = cljs.core.first(p1__6271_SHARP_);
if((!((((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__6272_SHARP_)),cljs.core.type(val))))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(p2__6272_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__6271_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__4434__auto__ = (function cljs$pprint$map_params_$_iter__6276(s__6277){
return (new cljs.core.LazySeq(null,(function (){
var s__6277__$1 = s__6277;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__6277__$1);
if(temp__5720__auto__){
var s__6277__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6277__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__6277__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__6279 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__6278 = (0);
while(true){
if((i__6278 < size__4433__auto__)){
var vec__6280 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__6278);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6280,(0),null);
var vec__6283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6280,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6283,(0),null);
cljs.core.chunk_append(b__6279,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__6292 = (i__6278 + (1));
i__6278 = G__6292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6279),cljs$pprint$map_params_$_iter__6276(cljs.core.chunk_rest(s__6277__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6279),null);
}
} else {
var vec__6286 = cljs.core.first(s__6277__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6286,(0),null);
var vec__6289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6286,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6289,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__6276(cljs.core.rest(s__6277__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__6273_SHARP_,p2__6274_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__6273_SHARP_,p2__6274_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6275_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__6275_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__6293 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6293,(0),null);
var vec__6296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6293,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6296,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6296,(1),null);
var vec__6299 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6299,(0),null);
var vec__6302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6299,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6302,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6302,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6302,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error(["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__6305 = cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__6305.cljs$core$IFn$_invoke$arity$2 ? fexpr__6305.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__6305.call(null,params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__4036__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__4036__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__6306 = cljs.pprint.collect_clauses(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6306,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6306,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$))], 0)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket_info),cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_bracket,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$separator,null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__6309){
var vec__6310 = p__6309;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6310,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6310,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6310,(2),null);
var vec__6313 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6313,(0),null);
var vec__6316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6313,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6316,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6316,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6316,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6316,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$right_DASH_bracket)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?cljs.core.cst$kw$else:cljs.core.cst$kw$clauses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$right_DASH_params,right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$else)){
if(cljs.core.truth_(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause_map))))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$else_DASH_params,else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$separator)){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$allows_DASH_separator.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR__orig_val__6319 = cljs.pprint._STAR_format_str_STAR_;
var _STAR_format_str_STAR__temp_val__6320 = format_str;
cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__temp_val__6320;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR__orig_val__6319,_STAR_format_str_STAR__temp_val__6320){
return (function (p__6321){
var vec__6322 = p__6321;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6322,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6322,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR__orig_val__6319,_STAR_format_str_STAR__temp_val__6320))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__orig_val__6319;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__6325 = cljs.core.next(format__$1);
format__$1 = G__6325;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__6327 = arguments.length;
switch (G__6327) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = ((((cljs.core.not(stream)) || (stream === true)))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = ((((cljs.pprint.needs_pretty(format)) && (cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream)))))?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR__orig_val__6328 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__6329 = wrapped_stream;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__6329;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if((!((real_stream === wrapped_stream)))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if(stream === true){
return cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__6328;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.pprint.abort_QMARK_(context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__6330 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6330,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6330,(1),null);
var vec__6333 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6333,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6333,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$quote,"'",cljs.core.cst$sym$var,"#'",cljs.core.cst$sym$clojure$core_SLASH_deref,"@",cljs.core.cst$sym$clojure$core_SLASH_unquote,"~",cljs.core.cst$sym$cljs$core_SLASH_deref,"@",cljs.core.cst$sym$cljs$core_SLASH_unquote,"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__6337 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__6337) : cljs.pprint.reader_macros.call(null,G__6337));
})();
if(cljs.core.truth_((function (){var and__4036__auto__ = macro_char;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__4036__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6338_6343 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6339_6344 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6340_6345 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6341_6346 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6340_6345;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6341_6346;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count6342_6347 = (0);
var alis_6348__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count6342_6347 < cljs.core._STAR_print_length_STAR_)))){
if(alis_6348__$1){
cljs.pprint.write_out(cljs.core.first(alis_6348__$1));

if(cljs.core.next(alis_6348__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__6349 = (length_count6342_6347 + (1));
var G__6350 = cljs.core.next(alis_6348__$1);
length_count6342_6347 = G__6349;
alis_6348__$1 = G__6350;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6339_6344;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6338_6343;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6351_6356 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6352_6357 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6353_6358 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6354_6359 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6353_6358;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6354_6359;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count6355_6360 = (0);
var aseq_6361 = cljs.core.seq(avec);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count6355_6360 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_6361){
cljs.pprint.write_out(cljs.core.first(aseq_6361));

if(cljs.core.next(aseq_6361)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__6362 = (length_count6355_6360 + (1));
var G__6363 = cljs.core.next(aseq_6361);
length_count6355_6360 = G__6362;
aseq_6361 = G__6363;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6352_6357;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6351_6356;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__5379__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (format_in__5379__auto__,cf__5380__auto__){
return (function() { 
var G__6364__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6364 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6365__i = 0, G__6365__a = new Array(arguments.length -  0);
while (G__6365__i < G__6365__a.length) {G__6365__a[G__6365__i] = arguments[G__6365__i + 0]; ++G__6365__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6365__a,0,null);
} 
return G__6364__delegate.call(this,args__5381__auto__);};
G__6364.cljs$lang$maxFixedArity = 0;
G__6364.cljs$lang$applyTo = (function (arglist__6366){
var args__5381__auto__ = cljs.core.seq(arglist__6366);
return G__6364__delegate(args__5381__auto__);
});
G__6364.cljs$core$IFn$_invoke$arity$variadic = G__6364__delegate;
return G__6364;
})()
;
;})(format_in__5379__auto__,cf__5380__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__6367 = (((!(cljs.core.record_QMARK_(amap))))?(function (){var fexpr__6370 = new cljs.core.Var(function(){return cljs.core.lift_ns;},cljs.core.cst$sym$cljs$core_SLASH_lift_DASH_ns,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$lift_DASH_ns,"cljs/core.cljs",15,1,10127,10127,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__6370.cljs$core$IFn$_invoke$arity$1 ? fexpr__6370.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__6370.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6367,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6367,(1),null);
var amap__$1 = (function (){var or__4047__auto__ = lift_map;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6371_6380 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6372_6381 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6373_6382 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6374_6383 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6373_6382;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6374_6383;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count6375_6384 = (0);
var aseq_6385 = cljs.core.seq(amap__$1);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count6375_6384 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_6385){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6376_6386 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6377_6387 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6378_6388 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6379_6389 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6378_6388;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6379_6389;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_6385));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_6385)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6377_6387;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6376_6386;
}}


if(cljs.core.next(aseq_6385)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__6390 = (length_count6375_6384 + (1));
var G__6391 = cljs.core.next(aseq_6385);
length_count6375_6384 = G__6390;
aseq_6385 = G__6391;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6372_6381;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6371_6380;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__5379__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (format_in__5379__auto__,cf__5380__auto__){
return (function() { 
var G__6392__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6392 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6393__i = 0, G__6393__a = new Array(arguments.length -  0);
while (G__6393__i < G__6393__a.length) {G__6393__a[G__6393__i] = arguments[G__6393__i + 0]; ++G__6393__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6393__a,0,null);
} 
return G__6392__delegate.call(this,args__5381__auto__);};
G__6392.cljs$lang$maxFixedArity = 0;
G__6392.cljs$lang$applyTo = (function (arglist__6394){
var args__5381__auto__ = cljs.core.seq(arglist__6394);
return G__6392__delegate(args__5381__auto__);
});
G__6392.cljs$core$IFn$_invoke$arity$variadic = G__6392__delegate;
return G__6392;
})()
;
;})(format_in__5379__auto__,cf__5380__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__4047__auto__ = (function (){var temp__5720__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5720__auto__)){
var match = temp__5720__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6395_6401 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6396_6402 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6397_6403 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6398_6404 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6397_6403;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6398_6404;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint.write_out((((function (){var and__4036__auto__ = (((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__4036__auto__){
return (!(cljs.core._realized_QMARK_(o)));
} else {
return and__4036__auto__;
}
})())?cljs.core.cst$kw$not_DASH_delivered:cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6396_6402;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6395_6401;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__5379__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (format_in__5379__auto__,cf__5380__auto__){
return (function() { 
var G__6405__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6405 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6406__i = 0, G__6406__a = new Array(arguments.length -  0);
while (G__6406__i < G__6406__a.length) {G__6406__a[G__6406__i] = arguments[G__6406__i + 0]; ++G__6406__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6406__a,0,null);
} 
return G__6405__delegate.call(this,args__5381__auto__);};
G__6405.cljs$lang$maxFixedArity = 0;
G__6405.cljs$lang$applyTo = (function (arglist__6407){
var args__5381__auto__ = cljs.core.seq(arglist__6407);
return G__6405__delegate(args__5381__auto__);
});
G__6405.cljs$core$IFn$_invoke$arity$variadic = G__6405__delegate;
return G__6405;
})()
;
;})(format_in__5379__auto__,cf__5380__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return cljs.core.cst$kw$queue;
} else {
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return cljs.core.cst$kw$deref;
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.seq_QMARK_(obj)){
return cljs.core.cst$kw$list;
} else {
if(cljs.core.map_QMARK_(obj)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_(obj)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.set_QMARK_(obj)){
return cljs.core.cst$kw$set;
} else {
if((obj == null)){
return null;
} else {
return cljs.core.cst$kw$default;

}
}
}
}
}
}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.simple_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__4524__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__6409 = cljs.core.get_global_hierarchy;
return (fexpr__6409.cljs$core$IFn$_invoke$arity$0 ? fexpr__6409.cljs$core$IFn$_invoke$arity$0() : fexpr__6409.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__6410 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6410,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6410,(1),null);
var vec__6413 = reference;
var seq__6414 = cljs.core.seq(vec__6413);
var first__6415 = cljs.core.first(seq__6414);
var seq__6414__$1 = cljs.core.next(seq__6414);
var keyw = first__6415;
var args = seq__6414__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6416_6436 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6417_6437 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6418_6438 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6419_6439 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6418_6438;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6419_6439;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__6420_6440 = (function (){var format_in__5379__auto__ = "~w~:i";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (format_in__5379__auto__,cf__5380__auto__,_STAR_current_level_STAR__orig_val__6416_6436,_STAR_current_length_STAR__orig_val__6417_6437,_STAR_current_level_STAR__temp_val__6418_6438,_STAR_current_length_STAR__temp_val__6419_6439,vec__6410,start,end,vec__6413,seq__6414,first__6415,seq__6414__$1,keyw,args){
return (function() { 
var G__6441__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6441 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6442__i = 0, G__6442__a = new Array(arguments.length -  0);
while (G__6442__i < G__6442__a.length) {G__6442__a[G__6442__i] = arguments[G__6442__i + 0]; ++G__6442__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6442__a,0,null);
} 
return G__6441__delegate.call(this,args__5381__auto__);};
G__6441.cljs$lang$maxFixedArity = 0;
G__6441.cljs$lang$applyTo = (function (arglist__6443){
var args__5381__auto__ = cljs.core.seq(arglist__6443);
return G__6441__delegate(args__5381__auto__);
});
G__6441.cljs$core$IFn$_invoke$arity$variadic = G__6441__delegate;
return G__6441;
})()
;
;})(format_in__5379__auto__,cf__5380__auto__,_STAR_current_level_STAR__orig_val__6416_6436,_STAR_current_length_STAR__orig_val__6417_6437,_STAR_current_level_STAR__temp_val__6418_6438,_STAR_current_length_STAR__temp_val__6419_6439,vec__6410,start,end,vec__6413,seq__6414,first__6415,seq__6414__$1,keyw,args))
})();
(fexpr__6420_6440.cljs$core$IFn$_invoke$arity$1 ? fexpr__6420_6440.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__6420_6440.call(null,keyw));

var args_6444__$1 = args;
while(true){
if(cljs.core.seq(args_6444__$1)){
var fexpr__6421_6445 = (function (){var format_in__5379__auto__ = " ";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (args_6444__$1,format_in__5379__auto__,cf__5380__auto__,_STAR_current_level_STAR__orig_val__6416_6436,_STAR_current_length_STAR__orig_val__6417_6437,_STAR_current_level_STAR__temp_val__6418_6438,_STAR_current_length_STAR__temp_val__6419_6439,vec__6410,start,end,vec__6413,seq__6414,first__6415,seq__6414__$1,keyw,args){
return (function() { 
var G__6446__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6446 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6447__i = 0, G__6447__a = new Array(arguments.length -  0);
while (G__6447__i < G__6447__a.length) {G__6447__a[G__6447__i] = arguments[G__6447__i + 0]; ++G__6447__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6447__a,0,null);
} 
return G__6446__delegate.call(this,args__5381__auto__);};
G__6446.cljs$lang$maxFixedArity = 0;
G__6446.cljs$lang$applyTo = (function (arglist__6448){
var args__5381__auto__ = cljs.core.seq(arglist__6448);
return G__6446__delegate(args__5381__auto__);
});
G__6446.cljs$core$IFn$_invoke$arity$variadic = G__6446__delegate;
return G__6446;
})()
;
;})(args_6444__$1,format_in__5379__auto__,cf__5380__auto__,_STAR_current_level_STAR__orig_val__6416_6436,_STAR_current_length_STAR__orig_val__6417_6437,_STAR_current_level_STAR__temp_val__6418_6438,_STAR_current_length_STAR__temp_val__6419_6439,vec__6410,start,end,vec__6413,seq__6414,first__6415,seq__6414__$1,keyw,args))
})();
(fexpr__6421_6445.cljs$core$IFn$_invoke$arity$0 ? fexpr__6421_6445.cljs$core$IFn$_invoke$arity$0() : fexpr__6421_6445.call(null));

var arg_6449 = cljs.core.first(args_6444__$1);
if(cljs.core.sequential_QMARK_(arg_6449)){
var vec__6422_6450 = cljs.pprint.brackets(arg_6449);
var start_6451__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6422_6450,(0),null);
var end_6452__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6422_6450,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6425_6453 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6426_6454 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6427_6455 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6428_6456 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6427_6455;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6428_6456;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_6451__$1,null,end_6452__$1);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_6449),(3))) && ((cljs.core.second(arg_6449) instanceof cljs.core.Keyword)))){
var vec__6429_6457 = arg_6449;
var ns_6458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6429_6457,(0),null);
var kw_6459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6429_6457,(1),null);
var lis_6460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6429_6457,(2),null);
var fexpr__6432_6461 = (function (){var format_in__5379__auto__ = "~w ~w ";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (args_6444__$1,format_in__5379__auto__,cf__5380__auto__,vec__6429_6457,ns_6458,kw_6459,lis_6460,_STAR_current_level_STAR__orig_val__6425_6453,_STAR_current_length_STAR__orig_val__6426_6454,_STAR_current_level_STAR__temp_val__6427_6455,_STAR_current_length_STAR__temp_val__6428_6456,vec__6422_6450,start_6451__$1,end_6452__$1,arg_6449,_STAR_current_level_STAR__orig_val__6416_6436,_STAR_current_length_STAR__orig_val__6417_6437,_STAR_current_level_STAR__temp_val__6418_6438,_STAR_current_length_STAR__temp_val__6419_6439,vec__6410,start,end,vec__6413,seq__6414,first__6415,seq__6414__$1,keyw,args){
return (function() { 
var G__6462__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6462 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6463__i = 0, G__6463__a = new Array(arguments.length -  0);
while (G__6463__i < G__6463__a.length) {G__6463__a[G__6463__i] = arguments[G__6463__i + 0]; ++G__6463__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6463__a,0,null);
} 
return G__6462__delegate.call(this,args__5381__auto__);};
G__6462.cljs$lang$maxFixedArity = 0;
G__6462.cljs$lang$applyTo = (function (arglist__6464){
var args__5381__auto__ = cljs.core.seq(arglist__6464);
return G__6462__delegate(args__5381__auto__);
});
G__6462.cljs$core$IFn$_invoke$arity$variadic = G__6462__delegate;
return G__6462;
})()
;
;})(args_6444__$1,format_in__5379__auto__,cf__5380__auto__,vec__6429_6457,ns_6458,kw_6459,lis_6460,_STAR_current_level_STAR__orig_val__6425_6453,_STAR_current_length_STAR__orig_val__6426_6454,_STAR_current_level_STAR__temp_val__6427_6455,_STAR_current_length_STAR__temp_val__6428_6456,vec__6422_6450,start_6451__$1,end_6452__$1,arg_6449,_STAR_current_level_STAR__orig_val__6416_6436,_STAR_current_length_STAR__orig_val__6417_6437,_STAR_current_level_STAR__temp_val__6418_6438,_STAR_current_length_STAR__temp_val__6419_6439,vec__6410,start,end,vec__6413,seq__6414,first__6415,seq__6414__$1,keyw,args))
})();
(fexpr__6432_6461.cljs$core$IFn$_invoke$arity$2 ? fexpr__6432_6461.cljs$core$IFn$_invoke$arity$2(ns_6458,kw_6459) : fexpr__6432_6461.call(null,ns_6458,kw_6459));

if(cljs.core.sequential_QMARK_(lis_6460)){
var fexpr__6433_6465 = (function (){var format_in__5379__auto__ = ((cljs.core.vector_QMARK_(lis_6460))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (args_6444__$1,format_in__5379__auto__,cf__5380__auto__,vec__6429_6457,ns_6458,kw_6459,lis_6460,_STAR_current_level_STAR__orig_val__6425_6453,_STAR_current_length_STAR__orig_val__6426_6454,_STAR_current_level_STAR__temp_val__6427_6455,_STAR_current_length_STAR__temp_val__6428_6456,vec__6422_6450,start_6451__$1,end_6452__$1,arg_6449,_STAR_current_level_STAR__orig_val__6416_6436,_STAR_current_length_STAR__orig_val__6417_6437,_STAR_current_level_STAR__temp_val__6418_6438,_STAR_current_length_STAR__temp_val__6419_6439,vec__6410,start,end,vec__6413,seq__6414,first__6415,seq__6414__$1,keyw,args){
return (function() { 
var G__6466__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6466 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6467__i = 0, G__6467__a = new Array(arguments.length -  0);
while (G__6467__i < G__6467__a.length) {G__6467__a[G__6467__i] = arguments[G__6467__i + 0]; ++G__6467__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6467__a,0,null);
} 
return G__6466__delegate.call(this,args__5381__auto__);};
G__6466.cljs$lang$maxFixedArity = 0;
G__6466.cljs$lang$applyTo = (function (arglist__6468){
var args__5381__auto__ = cljs.core.seq(arglist__6468);
return G__6466__delegate(args__5381__auto__);
});
G__6466.cljs$core$IFn$_invoke$arity$variadic = G__6466__delegate;
return G__6466;
})()
;
;})(args_6444__$1,format_in__5379__auto__,cf__5380__auto__,vec__6429_6457,ns_6458,kw_6459,lis_6460,_STAR_current_level_STAR__orig_val__6425_6453,_STAR_current_length_STAR__orig_val__6426_6454,_STAR_current_level_STAR__temp_val__6427_6455,_STAR_current_length_STAR__temp_val__6428_6456,vec__6422_6450,start_6451__$1,end_6452__$1,arg_6449,_STAR_current_level_STAR__orig_val__6416_6436,_STAR_current_length_STAR__orig_val__6417_6437,_STAR_current_level_STAR__temp_val__6418_6438,_STAR_current_length_STAR__temp_val__6419_6439,vec__6410,start,end,vec__6413,seq__6414,first__6415,seq__6414__$1,keyw,args))
})();
(fexpr__6433_6465.cljs$core$IFn$_invoke$arity$1 ? fexpr__6433_6465.cljs$core$IFn$_invoke$arity$1(lis_6460) : fexpr__6433_6465.call(null,lis_6460));
} else {
cljs.pprint.write_out(lis_6460);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__5379__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (args_6444__$1,format_in__5379__auto__,cf__5380__auto__,_STAR_current_level_STAR__orig_val__6425_6453,_STAR_current_length_STAR__orig_val__6426_6454,_STAR_current_level_STAR__temp_val__6427_6455,_STAR_current_length_STAR__temp_val__6428_6456,vec__6422_6450,start_6451__$1,end_6452__$1,arg_6449,_STAR_current_level_STAR__orig_val__6416_6436,_STAR_current_length_STAR__orig_val__6417_6437,_STAR_current_level_STAR__temp_val__6418_6438,_STAR_current_length_STAR__temp_val__6419_6439,vec__6410,start,end,vec__6413,seq__6414,first__6415,seq__6414__$1,keyw,args){
return (function() { 
var G__6469__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6469 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6470__i = 0, G__6470__a = new Array(arguments.length -  0);
while (G__6470__i < G__6470__a.length) {G__6470__a[G__6470__i] = arguments[G__6470__i + 0]; ++G__6470__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6470__a,0,null);
} 
return G__6469__delegate.call(this,args__5381__auto__);};
G__6469.cljs$lang$maxFixedArity = 0;
G__6469.cljs$lang$applyTo = (function (arglist__6471){
var args__5381__auto__ = cljs.core.seq(arglist__6471);
return G__6469__delegate(args__5381__auto__);
});
G__6469.cljs$core$IFn$_invoke$arity$variadic = G__6469__delegate;
return G__6469;
})()
;
;})(args_6444__$1,format_in__5379__auto__,cf__5380__auto__,_STAR_current_level_STAR__orig_val__6425_6453,_STAR_current_length_STAR__orig_val__6426_6454,_STAR_current_level_STAR__temp_val__6427_6455,_STAR_current_length_STAR__temp_val__6428_6456,vec__6422_6450,start_6451__$1,end_6452__$1,arg_6449,_STAR_current_level_STAR__orig_val__6416_6436,_STAR_current_length_STAR__orig_val__6417_6437,_STAR_current_level_STAR__temp_val__6418_6438,_STAR_current_length_STAR__temp_val__6419_6439,vec__6410,start,end,vec__6413,seq__6414,first__6415,seq__6414__$1,keyw,args))
})(),arg_6449);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6426_6454;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6425_6453;
}}


if(cljs.core.next(args_6444__$1)){
var fexpr__6434_6472 = (function (){var format_in__5379__auto__ = "~_";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (args_6444__$1,format_in__5379__auto__,cf__5380__auto__,vec__6422_6450,start_6451__$1,end_6452__$1,arg_6449,_STAR_current_level_STAR__orig_val__6416_6436,_STAR_current_length_STAR__orig_val__6417_6437,_STAR_current_level_STAR__temp_val__6418_6438,_STAR_current_length_STAR__temp_val__6419_6439,vec__6410,start,end,vec__6413,seq__6414,first__6415,seq__6414__$1,keyw,args){
return (function() { 
var G__6473__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6473 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6474__i = 0, G__6474__a = new Array(arguments.length -  0);
while (G__6474__i < G__6474__a.length) {G__6474__a[G__6474__i] = arguments[G__6474__i + 0]; ++G__6474__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6474__a,0,null);
} 
return G__6473__delegate.call(this,args__5381__auto__);};
G__6473.cljs$lang$maxFixedArity = 0;
G__6473.cljs$lang$applyTo = (function (arglist__6475){
var args__5381__auto__ = cljs.core.seq(arglist__6475);
return G__6473__delegate(args__5381__auto__);
});
G__6473.cljs$core$IFn$_invoke$arity$variadic = G__6473__delegate;
return G__6473;
})()
;
;})(args_6444__$1,format_in__5379__auto__,cf__5380__auto__,vec__6422_6450,start_6451__$1,end_6452__$1,arg_6449,_STAR_current_level_STAR__orig_val__6416_6436,_STAR_current_length_STAR__orig_val__6417_6437,_STAR_current_level_STAR__temp_val__6418_6438,_STAR_current_length_STAR__temp_val__6419_6439,vec__6410,start,end,vec__6413,seq__6414,first__6415,seq__6414__$1,keyw,args))
})();
(fexpr__6434_6472.cljs$core$IFn$_invoke$arity$0 ? fexpr__6434_6472.cljs$core$IFn$_invoke$arity$0() : fexpr__6434_6472.call(null));
} else {
}
} else {
cljs.pprint.write_out(arg_6449);

if(cljs.core.next(args_6444__$1)){
var fexpr__6435_6476 = (function (){var format_in__5379__auto__ = "~:_";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (args_6444__$1,format_in__5379__auto__,cf__5380__auto__,arg_6449,_STAR_current_level_STAR__orig_val__6416_6436,_STAR_current_length_STAR__orig_val__6417_6437,_STAR_current_level_STAR__temp_val__6418_6438,_STAR_current_length_STAR__temp_val__6419_6439,vec__6410,start,end,vec__6413,seq__6414,first__6415,seq__6414__$1,keyw,args){
return (function() { 
var G__6477__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6477 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6478__i = 0, G__6478__a = new Array(arguments.length -  0);
while (G__6478__i < G__6478__a.length) {G__6478__a[G__6478__i] = arguments[G__6478__i + 0]; ++G__6478__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6478__a,0,null);
} 
return G__6477__delegate.call(this,args__5381__auto__);};
G__6477.cljs$lang$maxFixedArity = 0;
G__6477.cljs$lang$applyTo = (function (arglist__6479){
var args__5381__auto__ = cljs.core.seq(arglist__6479);
return G__6477__delegate(args__5381__auto__);
});
G__6477.cljs$core$IFn$_invoke$arity$variadic = G__6477__delegate;
return G__6477;
})()
;
;})(args_6444__$1,format_in__5379__auto__,cf__5380__auto__,arg_6449,_STAR_current_level_STAR__orig_val__6416_6436,_STAR_current_length_STAR__orig_val__6417_6437,_STAR_current_level_STAR__temp_val__6418_6438,_STAR_current_length_STAR__temp_val__6419_6439,vec__6410,start,end,vec__6413,seq__6414,first__6415,seq__6414__$1,keyw,args))
})();
(fexpr__6435_6476.cljs$core$IFn$_invoke$arity$0 ? fexpr__6435_6476.cljs$core$IFn$_invoke$arity$0() : fexpr__6435_6476.call(null));
} else {
}
}

var G__6480 = cljs.core.next(args_6444__$1);
args_6444__$1 = G__6480;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6417_6437;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6416_6436;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__6481 = alis;
var seq__6482 = cljs.core.seq(vec__6481);
var first__6483 = cljs.core.first(seq__6482);
var seq__6482__$1 = cljs.core.next(seq__6482);
var ns_sym = first__6483;
var first__6483__$1 = cljs.core.first(seq__6482__$1);
var seq__6482__$2 = cljs.core.next(seq__6482__$1);
var ns_name = first__6483__$1;
var stuff = seq__6482__$2;
var vec__6484 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6484,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6484,(1),null);
var vec__6487 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6487,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6487,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6490_6499 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6491_6500 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6492_6501 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6493_6502 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6492_6501;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6493_6502;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__6494_6503 = (function (){var format_in__5379__auto__ = "~w ~1I~@_~w";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (format_in__5379__auto__,cf__5380__auto__,_STAR_current_level_STAR__orig_val__6490_6499,_STAR_current_length_STAR__orig_val__6491_6500,_STAR_current_level_STAR__temp_val__6492_6501,_STAR_current_length_STAR__temp_val__6493_6502,vec__6481,seq__6482,first__6483,seq__6482__$1,ns_sym,first__6483__$1,seq__6482__$2,ns_name,stuff,vec__6484,doc_str,stuff__$1,vec__6487,attr_map,references){
return (function() { 
var G__6504__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6504 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6505__i = 0, G__6505__a = new Array(arguments.length -  0);
while (G__6505__i < G__6505__a.length) {G__6505__a[G__6505__i] = arguments[G__6505__i + 0]; ++G__6505__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6505__a,0,null);
} 
return G__6504__delegate.call(this,args__5381__auto__);};
G__6504.cljs$lang$maxFixedArity = 0;
G__6504.cljs$lang$applyTo = (function (arglist__6506){
var args__5381__auto__ = cljs.core.seq(arglist__6506);
return G__6504__delegate(args__5381__auto__);
});
G__6504.cljs$core$IFn$_invoke$arity$variadic = G__6504__delegate;
return G__6504;
})()
;
;})(format_in__5379__auto__,cf__5380__auto__,_STAR_current_level_STAR__orig_val__6490_6499,_STAR_current_length_STAR__orig_val__6491_6500,_STAR_current_level_STAR__temp_val__6492_6501,_STAR_current_length_STAR__temp_val__6493_6502,vec__6481,seq__6482,first__6483,seq__6482__$1,ns_sym,first__6483__$1,seq__6482__$2,ns_name,stuff,vec__6484,doc_str,stuff__$1,vec__6487,attr_map,references))
})();
(fexpr__6494_6503.cljs$core$IFn$_invoke$arity$2 ? fexpr__6494_6503.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__6494_6503.call(null,ns_sym,ns_name));

if(cljs.core.truth_((function (){var or__4047__auto__ = doc_str;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = attr_map;
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
var fexpr__6495_6507 = (function (){var format_in__5379__auto__ = "~@:_";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (format_in__5379__auto__,cf__5380__auto__,_STAR_current_level_STAR__orig_val__6490_6499,_STAR_current_length_STAR__orig_val__6491_6500,_STAR_current_level_STAR__temp_val__6492_6501,_STAR_current_length_STAR__temp_val__6493_6502,vec__6481,seq__6482,first__6483,seq__6482__$1,ns_sym,first__6483__$1,seq__6482__$2,ns_name,stuff,vec__6484,doc_str,stuff__$1,vec__6487,attr_map,references){
return (function() { 
var G__6508__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6508 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6509__i = 0, G__6509__a = new Array(arguments.length -  0);
while (G__6509__i < G__6509__a.length) {G__6509__a[G__6509__i] = arguments[G__6509__i + 0]; ++G__6509__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6509__a,0,null);
} 
return G__6508__delegate.call(this,args__5381__auto__);};
G__6508.cljs$lang$maxFixedArity = 0;
G__6508.cljs$lang$applyTo = (function (arglist__6510){
var args__5381__auto__ = cljs.core.seq(arglist__6510);
return G__6508__delegate(args__5381__auto__);
});
G__6508.cljs$core$IFn$_invoke$arity$variadic = G__6508__delegate;
return G__6508;
})()
;
;})(format_in__5379__auto__,cf__5380__auto__,_STAR_current_level_STAR__orig_val__6490_6499,_STAR_current_length_STAR__orig_val__6491_6500,_STAR_current_level_STAR__temp_val__6492_6501,_STAR_current_length_STAR__temp_val__6493_6502,vec__6481,seq__6482,first__6483,seq__6482__$1,ns_sym,first__6483__$1,seq__6482__$2,ns_name,stuff,vec__6484,doc_str,stuff__$1,vec__6487,attr_map,references))
})();
(fexpr__6495_6507.cljs$core$IFn$_invoke$arity$0 ? fexpr__6495_6507.cljs$core$IFn$_invoke$arity$0() : fexpr__6495_6507.call(null));
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__4047__auto__ = attr_map;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
var G__6497_6511 = attr_map;
var G__6498_6512 = cljs.core.seq(references);
var fexpr__6496_6513 = (function (){var format_in__5379__auto__ = "~w~:[~;~:@_~]";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (format_in__5379__auto__,cf__5380__auto__,G__6497_6511,G__6498_6512,_STAR_current_level_STAR__orig_val__6490_6499,_STAR_current_length_STAR__orig_val__6491_6500,_STAR_current_level_STAR__temp_val__6492_6501,_STAR_current_length_STAR__temp_val__6493_6502,vec__6481,seq__6482,first__6483,seq__6482__$1,ns_sym,first__6483__$1,seq__6482__$2,ns_name,stuff,vec__6484,doc_str,stuff__$1,vec__6487,attr_map,references){
return (function() { 
var G__6514__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6514 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6515__i = 0, G__6515__a = new Array(arguments.length -  0);
while (G__6515__i < G__6515__a.length) {G__6515__a[G__6515__i] = arguments[G__6515__i + 0]; ++G__6515__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6515__a,0,null);
} 
return G__6514__delegate.call(this,args__5381__auto__);};
G__6514.cljs$lang$maxFixedArity = 0;
G__6514.cljs$lang$applyTo = (function (arglist__6516){
var args__5381__auto__ = cljs.core.seq(arglist__6516);
return G__6514__delegate(args__5381__auto__);
});
G__6514.cljs$core$IFn$_invoke$arity$variadic = G__6514__delegate;
return G__6514;
})()
;
;})(format_in__5379__auto__,cf__5380__auto__,G__6497_6511,G__6498_6512,_STAR_current_level_STAR__orig_val__6490_6499,_STAR_current_length_STAR__orig_val__6491_6500,_STAR_current_level_STAR__temp_val__6492_6501,_STAR_current_length_STAR__temp_val__6493_6502,vec__6481,seq__6482,first__6483,seq__6482__$1,ns_sym,first__6483__$1,seq__6482__$2,ns_name,stuff,vec__6484,doc_str,stuff__$1,vec__6487,attr_map,references))
})();
(fexpr__6496_6513.cljs$core$IFn$_invoke$arity$2 ? fexpr__6496_6513.cljs$core$IFn$_invoke$arity$2(G__6497_6511,G__6498_6512) : fexpr__6496_6513.call(null,G__6497_6511,G__6498_6512));
} else {
}

var references_6517__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_6517__$1));

var temp__5720__auto___6518 = cljs.core.next(references_6517__$1);
if(temp__5720__auto___6518){
var references_6519__$2 = temp__5720__auto___6518;
cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__6520 = references_6519__$2;
references_6517__$1 = G__6520;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6491_6500;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6490_6499;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__5379__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (format_in__5379__auto__,cf__5380__auto__){
return (function() { 
var G__6521__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6521 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6522__i = 0, G__6522__a = new Array(arguments.length -  0);
while (G__6522__i < G__6522__a.length) {G__6522__a[G__6522__i] = arguments[G__6522__i + 0]; ++G__6522__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6522__a,0,null);
} 
return G__6521__delegate.call(this,args__5381__auto__);};
G__6521.cljs$lang$maxFixedArity = 0;
G__6521.cljs$lang$applyTo = (function (arglist__6523){
var args__5381__auto__ = cljs.core.seq(arglist__6523);
return G__6521__delegate(args__5381__auto__);
});
G__6521.cljs$core$IFn$_invoke$arity$variadic = G__6521__delegate;
return G__6521;
})()
;
;})(format_in__5379__auto__,cf__5380__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__6524_6527 = (function (){var format_in__5379__auto__ = " ~_";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (format_in__5379__auto__,cf__5380__auto__){
return (function() { 
var G__6528__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6528 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6529__i = 0, G__6529__a = new Array(arguments.length -  0);
while (G__6529__i < G__6529__a.length) {G__6529__a[G__6529__i] = arguments[G__6529__i + 0]; ++G__6529__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6529__a,0,null);
} 
return G__6528__delegate.call(this,args__5381__auto__);};
G__6528.cljs$lang$maxFixedArity = 0;
G__6528.cljs$lang$applyTo = (function (arglist__6530){
var args__5381__auto__ = cljs.core.seq(arglist__6530);
return G__6528__delegate(args__5381__auto__);
});
G__6528.cljs$core$IFn$_invoke$arity$variadic = G__6528__delegate;
return G__6528;
})()
;
;})(format_in__5379__auto__,cf__5380__auto__))
})();
(fexpr__6524_6527.cljs$core$IFn$_invoke$arity$0 ? fexpr__6524_6527.cljs$core$IFn$_invoke$arity$0() : fexpr__6524_6527.call(null));
} else {
var fexpr__6525_6531 = (function (){var format_in__5379__auto__ = " ~@_";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (format_in__5379__auto__,cf__5380__auto__){
return (function() { 
var G__6532__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6532 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6533__i = 0, G__6533__a = new Array(arguments.length -  0);
while (G__6533__i < G__6533__a.length) {G__6533__a[G__6533__i] = arguments[G__6533__i + 0]; ++G__6533__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6533__a,0,null);
} 
return G__6532__delegate.call(this,args__5381__auto__);};
G__6532.cljs$lang$maxFixedArity = 0;
G__6532.cljs$lang$applyTo = (function (arglist__6534){
var args__5381__auto__ = cljs.core.seq(arglist__6534);
return G__6532__delegate(args__5381__auto__);
});
G__6532.cljs$core$IFn$_invoke$arity$variadic = G__6532__delegate;
return G__6532;
})()
;
;})(format_in__5379__auto__,cf__5380__auto__))
})();
(fexpr__6525_6531.cljs$core$IFn$_invoke$arity$0 ? fexpr__6525_6531.cljs$core$IFn$_invoke$arity$0() : fexpr__6525_6531.call(null));
}

var fexpr__6526 = (function (){var format_in__5379__auto__ = "~{~w~^ ~_~}";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (format_in__5379__auto__,cf__5380__auto__){
return (function() { 
var G__6535__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6535 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6536__i = 0, G__6536__a = new Array(arguments.length -  0);
while (G__6536__i < G__6536__a.length) {G__6536__a[G__6536__i] = arguments[G__6536__i + 0]; ++G__6536__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6536__a,0,null);
} 
return G__6535__delegate.call(this,args__5381__auto__);};
G__6535.cljs$lang$maxFixedArity = 0;
G__6535.cljs$lang$applyTo = (function (arglist__6537){
var args__5381__auto__ = cljs.core.seq(arglist__6537);
return G__6535__delegate(args__5381__auto__);
});
G__6535.cljs$core$IFn$_invoke$arity$variadic = G__6535__delegate;
return G__6535;
})()
;
;})(format_in__5379__auto__,cf__5380__auto__))
})();
return (fexpr__6526.cljs$core$IFn$_invoke$arity$1 ? fexpr__6526.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__6526.call(null,alis));
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__6538 = (function (){var format_in__5379__auto__ = " ~_~{~w~^ ~_~}";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (format_in__5379__auto__,cf__5380__auto__){
return (function() { 
var G__6539__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6539 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6540__i = 0, G__6540__a = new Array(arguments.length -  0);
while (G__6540__i < G__6540__a.length) {G__6540__a[G__6540__i] = arguments[G__6540__i + 0]; ++G__6540__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6540__a,0,null);
} 
return G__6539__delegate.call(this,args__5381__auto__);};
G__6539.cljs$lang$maxFixedArity = 0;
G__6539.cljs$lang$applyTo = (function (arglist__6541){
var args__5381__auto__ = cljs.core.seq(arglist__6541);
return G__6539__delegate(args__5381__auto__);
});
G__6539.cljs$core$IFn$_invoke$arity$variadic = G__6539__delegate;
return G__6539;
})()
;
;})(format_in__5379__auto__,cf__5380__auto__))
})();
return (fexpr__6538.cljs$core$IFn$_invoke$arity$1 ? fexpr__6538.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__6538.call(null,alis));
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__6542 = alis;
var seq__6543 = cljs.core.seq(vec__6542);
var first__6544 = cljs.core.first(seq__6543);
var seq__6543__$1 = cljs.core.next(seq__6543);
var defn_sym = first__6544;
var first__6544__$1 = cljs.core.first(seq__6543__$1);
var seq__6543__$2 = cljs.core.next(seq__6543__$1);
var defn_name = first__6544__$1;
var stuff = seq__6543__$2;
var vec__6545 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6545,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6545,(1),null);
var vec__6548 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6548,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6548,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6551_6558 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6552_6559 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6553_6560 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6554_6561 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6553_6560;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6554_6561;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__6555_6562 = (function (){var format_in__5379__auto__ = "~w ~1I~@_~w";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (format_in__5379__auto__,cf__5380__auto__,_STAR_current_level_STAR__orig_val__6551_6558,_STAR_current_length_STAR__orig_val__6552_6559,_STAR_current_level_STAR__temp_val__6553_6560,_STAR_current_length_STAR__temp_val__6554_6561,vec__6542,seq__6543,first__6544,seq__6543__$1,defn_sym,first__6544__$1,seq__6543__$2,defn_name,stuff,vec__6545,doc_str,stuff__$1,vec__6548,attr_map,stuff__$2){
return (function() { 
var G__6563__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6563 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6564__i = 0, G__6564__a = new Array(arguments.length -  0);
while (G__6564__i < G__6564__a.length) {G__6564__a[G__6564__i] = arguments[G__6564__i + 0]; ++G__6564__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6564__a,0,null);
} 
return G__6563__delegate.call(this,args__5381__auto__);};
G__6563.cljs$lang$maxFixedArity = 0;
G__6563.cljs$lang$applyTo = (function (arglist__6565){
var args__5381__auto__ = cljs.core.seq(arglist__6565);
return G__6563__delegate(args__5381__auto__);
});
G__6563.cljs$core$IFn$_invoke$arity$variadic = G__6563__delegate;
return G__6563;
})()
;
;})(format_in__5379__auto__,cf__5380__auto__,_STAR_current_level_STAR__orig_val__6551_6558,_STAR_current_length_STAR__orig_val__6552_6559,_STAR_current_level_STAR__temp_val__6553_6560,_STAR_current_length_STAR__temp_val__6554_6561,vec__6542,seq__6543,first__6544,seq__6543__$1,defn_sym,first__6544__$1,seq__6543__$2,defn_name,stuff,vec__6545,doc_str,stuff__$1,vec__6548,attr_map,stuff__$2))
})();
(fexpr__6555_6562.cljs$core$IFn$_invoke$arity$2 ? fexpr__6555_6562.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__6555_6562.call(null,defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__6556_6566 = (function (){var format_in__5379__auto__ = " ~_~w";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (format_in__5379__auto__,cf__5380__auto__,_STAR_current_level_STAR__orig_val__6551_6558,_STAR_current_length_STAR__orig_val__6552_6559,_STAR_current_level_STAR__temp_val__6553_6560,_STAR_current_length_STAR__temp_val__6554_6561,vec__6542,seq__6543,first__6544,seq__6543__$1,defn_sym,first__6544__$1,seq__6543__$2,defn_name,stuff,vec__6545,doc_str,stuff__$1,vec__6548,attr_map,stuff__$2){
return (function() { 
var G__6567__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6567 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6568__i = 0, G__6568__a = new Array(arguments.length -  0);
while (G__6568__i < G__6568__a.length) {G__6568__a[G__6568__i] = arguments[G__6568__i + 0]; ++G__6568__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6568__a,0,null);
} 
return G__6567__delegate.call(this,args__5381__auto__);};
G__6567.cljs$lang$maxFixedArity = 0;
G__6567.cljs$lang$applyTo = (function (arglist__6569){
var args__5381__auto__ = cljs.core.seq(arglist__6569);
return G__6567__delegate(args__5381__auto__);
});
G__6567.cljs$core$IFn$_invoke$arity$variadic = G__6567__delegate;
return G__6567;
})()
;
;})(format_in__5379__auto__,cf__5380__auto__,_STAR_current_level_STAR__orig_val__6551_6558,_STAR_current_length_STAR__orig_val__6552_6559,_STAR_current_level_STAR__temp_val__6553_6560,_STAR_current_length_STAR__temp_val__6554_6561,vec__6542,seq__6543,first__6544,seq__6543__$1,defn_sym,first__6544__$1,seq__6543__$2,defn_name,stuff,vec__6545,doc_str,stuff__$1,vec__6548,attr_map,stuff__$2))
})();
(fexpr__6556_6566.cljs$core$IFn$_invoke$arity$1 ? fexpr__6556_6566.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__6556_6566.call(null,doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__6557_6570 = (function (){var format_in__5379__auto__ = " ~_~w";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (format_in__5379__auto__,cf__5380__auto__,_STAR_current_level_STAR__orig_val__6551_6558,_STAR_current_length_STAR__orig_val__6552_6559,_STAR_current_level_STAR__temp_val__6553_6560,_STAR_current_length_STAR__temp_val__6554_6561,vec__6542,seq__6543,first__6544,seq__6543__$1,defn_sym,first__6544__$1,seq__6543__$2,defn_name,stuff,vec__6545,doc_str,stuff__$1,vec__6548,attr_map,stuff__$2){
return (function() { 
var G__6571__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6571 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6572__i = 0, G__6572__a = new Array(arguments.length -  0);
while (G__6572__i < G__6572__a.length) {G__6572__a[G__6572__i] = arguments[G__6572__i + 0]; ++G__6572__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6572__a,0,null);
} 
return G__6571__delegate.call(this,args__5381__auto__);};
G__6571.cljs$lang$maxFixedArity = 0;
G__6571.cljs$lang$applyTo = (function (arglist__6573){
var args__5381__auto__ = cljs.core.seq(arglist__6573);
return G__6571__delegate(args__5381__auto__);
});
G__6571.cljs$core$IFn$_invoke$arity$variadic = G__6571__delegate;
return G__6571;
})()
;
;})(format_in__5379__auto__,cf__5380__auto__,_STAR_current_level_STAR__orig_val__6551_6558,_STAR_current_length_STAR__orig_val__6552_6559,_STAR_current_level_STAR__temp_val__6553_6560,_STAR_current_length_STAR__temp_val__6554_6561,vec__6542,seq__6543,first__6544,seq__6543__$1,defn_sym,first__6544__$1,seq__6543__$2,defn_name,stuff,vec__6545,doc_str,stuff__$1,vec__6548,attr_map,stuff__$2))
})();
(fexpr__6557_6570.cljs$core$IFn$_invoke$arity$1 ? fexpr__6557_6570.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__6557_6570.call(null,attr_map));
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__4047__auto__ = doc_str;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__4047__auto__ = doc_str;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6552_6559;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6551_6558;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6574_6583 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6575_6584 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6576_6585 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6577_6586 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6576_6585;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6577_6586;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count6578_6587 = (0);
var binding_6588 = binding_vec;
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count6578_6587 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq(binding_6588)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6579_6589 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6580_6590 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6581_6591 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6582_6592 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6581_6591;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6582_6592;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_6588));

if(cljs.core.next(binding_6588)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(binding_6588));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6580_6590;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6579_6589;
}}


if(cljs.core.next(cljs.core.rest(binding_6588))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__6593 = (length_count6578_6587 + (1));
var G__6594 = cljs.core.next(cljs.core.rest(binding_6588));
length_count6578_6587 = G__6593;
binding_6588 = G__6594;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6575_6584;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6574_6583;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6595_6602 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6596_6603 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6597_6604 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6598_6605 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6597_6604;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6598_6605;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis))))){
var fexpr__6599_6606 = (function (){var format_in__5379__auto__ = "~w ~1I~@_";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (format_in__5379__auto__,cf__5380__auto__,_STAR_current_level_STAR__orig_val__6595_6602,_STAR_current_length_STAR__orig_val__6596_6603,_STAR_current_level_STAR__temp_val__6597_6604,_STAR_current_length_STAR__temp_val__6598_6605,base_sym){
return (function() { 
var G__6607__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6607 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6608__i = 0, G__6608__a = new Array(arguments.length -  0);
while (G__6608__i < G__6608__a.length) {G__6608__a[G__6608__i] = arguments[G__6608__i + 0]; ++G__6608__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6608__a,0,null);
} 
return G__6607__delegate.call(this,args__5381__auto__);};
G__6607.cljs$lang$maxFixedArity = 0;
G__6607.cljs$lang$applyTo = (function (arglist__6609){
var args__5381__auto__ = cljs.core.seq(arglist__6609);
return G__6607__delegate(args__5381__auto__);
});
G__6607.cljs$core$IFn$_invoke$arity$variadic = G__6607__delegate;
return G__6607;
})()
;
;})(format_in__5379__auto__,cf__5380__auto__,_STAR_current_level_STAR__orig_val__6595_6602,_STAR_current_length_STAR__orig_val__6596_6603,_STAR_current_level_STAR__temp_val__6597_6604,_STAR_current_length_STAR__temp_val__6598_6605,base_sym))
})();
(fexpr__6599_6606.cljs$core$IFn$_invoke$arity$1 ? fexpr__6599_6606.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__6599_6606.call(null,base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__6601_6610 = cljs.core.next(cljs.core.rest(alis));
var fexpr__6600_6611 = (function (){var format_in__5379__auto__ = " ~_~{~w~^ ~_~}";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (format_in__5379__auto__,cf__5380__auto__,G__6601_6610,_STAR_current_level_STAR__orig_val__6595_6602,_STAR_current_length_STAR__orig_val__6596_6603,_STAR_current_level_STAR__temp_val__6597_6604,_STAR_current_length_STAR__temp_val__6598_6605,base_sym){
return (function() { 
var G__6612__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6612 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6613__i = 0, G__6613__a = new Array(arguments.length -  0);
while (G__6613__i < G__6613__a.length) {G__6613__a[G__6613__i] = arguments[G__6613__i + 0]; ++G__6613__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6613__a,0,null);
} 
return G__6612__delegate.call(this,args__5381__auto__);};
G__6612.cljs$lang$maxFixedArity = 0;
G__6612.cljs$lang$applyTo = (function (arglist__6614){
var args__5381__auto__ = cljs.core.seq(arglist__6614);
return G__6612__delegate(args__5381__auto__);
});
G__6612.cljs$core$IFn$_invoke$arity$variadic = G__6612__delegate;
return G__6612;
})()
;
;})(format_in__5379__auto__,cf__5380__auto__,G__6601_6610,_STAR_current_level_STAR__orig_val__6595_6602,_STAR_current_length_STAR__orig_val__6596_6603,_STAR_current_level_STAR__temp_val__6597_6604,_STAR_current_length_STAR__temp_val__6598_6605,base_sym))
})();
(fexpr__6600_6611.cljs$core$IFn$_invoke$arity$1 ? fexpr__6600_6611.cljs$core$IFn$_invoke$arity$1(G__6601_6610) : fexpr__6600_6611.call(null,G__6601_6610));
} else {
cljs.pprint.pprint_simple_code_list(alis);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6596_6603;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6595_6602;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__5379__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (format_in__5379__auto__,cf__5380__auto__){
return (function() { 
var G__6615__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6615 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6616__i = 0, G__6616__a = new Array(arguments.length -  0);
while (G__6616__i < G__6616__a.length) {G__6616__a[G__6616__i] = arguments[G__6616__i + 0]; ++G__6616__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6616__a,0,null);
} 
return G__6615__delegate.call(this,args__5381__auto__);};
G__6615.cljs$lang$maxFixedArity = 0;
G__6615.cljs$lang$applyTo = (function (arglist__6617){
var args__5381__auto__ = cljs.core.seq(arglist__6617);
return G__6615__delegate(args__5381__auto__);
});
G__6615.cljs$core$IFn$_invoke$arity$variadic = G__6615__delegate;
return G__6615;
})()
;
;})(format_in__5379__auto__,cf__5380__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6618_6627 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6619_6628 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6620_6629 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6621_6630 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6620_6629;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6621_6630;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var length_count6622_6631 = (0);
var alis_6632__$1 = cljs.core.next(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count6622_6631 < cljs.core._STAR_print_length_STAR_)))){
if(alis_6632__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6623_6633 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6624_6634 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6625_6635 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6626_6636 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6625_6635;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6626_6636;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_6632__$1));

if(cljs.core.next(alis_6632__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_6632__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6624_6634;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6623_6633;
}}


if(cljs.core.next(cljs.core.rest(alis_6632__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__6637 = (length_count6622_6631 + (1));
var G__6638 = cljs.core.next(cljs.core.rest(alis_6632__$1));
length_count6622_6631 = G__6637;
alis_6632__$1 = G__6638;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6619_6628;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6618_6627;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6639_6648 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6640_6649 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6641_6650 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6642_6651 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6641_6650;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6642_6651;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__5379__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (format_in__5379__auto__,cf__5380__auto__,_STAR_current_level_STAR__orig_val__6639_6648,_STAR_current_length_STAR__orig_val__6640_6649,_STAR_current_level_STAR__temp_val__6641_6650,_STAR_current_length_STAR__temp_val__6642_6651){
return (function() { 
var G__6652__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6652 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6653__i = 0, G__6653__a = new Array(arguments.length -  0);
while (G__6653__i < G__6653__a.length) {G__6653__a[G__6653__i] = arguments[G__6653__i + 0]; ++G__6653__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6653__a,0,null);
} 
return G__6652__delegate.call(this,args__5381__auto__);};
G__6652.cljs$lang$maxFixedArity = 0;
G__6652.cljs$lang$applyTo = (function (arglist__6654){
var args__5381__auto__ = cljs.core.seq(arglist__6654);
return G__6652__delegate(args__5381__auto__);
});
G__6652.cljs$core$IFn$_invoke$arity$variadic = G__6652__delegate;
return G__6652;
})()
;
;})(format_in__5379__auto__,cf__5380__auto__,_STAR_current_level_STAR__orig_val__6639_6648,_STAR_current_length_STAR__orig_val__6640_6649,_STAR_current_level_STAR__temp_val__6641_6650,_STAR_current_length_STAR__temp_val__6642_6651))
})(),alis);

var length_count6643_6655 = (0);
var alis_6656__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count6643_6655 < cljs.core._STAR_print_length_STAR_)))){
if(alis_6656__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6644_6657 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6645_6658 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6646_6659 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6647_6660 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6646_6659;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6647_6660;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_6656__$1));

if(cljs.core.next(alis_6656__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_6656__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6645_6658;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6644_6657;
}}


if(cljs.core.next(cljs.core.rest(alis_6656__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__6661 = (length_count6643_6655 + (1));
var G__6662 = cljs.core.next(cljs.core.rest(alis_6656__$1));
length_count6643_6655 = G__6661;
alis_6656__$1 = G__6662;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6640_6649;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6639_6648;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR__orig_val__6665 = cljs.pprint._STAR_symbol_map_STAR_;
var _STAR_symbol_map_STAR__temp_val__6666 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR__orig_val__6665,args,nlis){
return (function (p1__6663_SHARP_,p2__6664_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__6663_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__6664_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR__orig_val__6665,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));
cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__temp_val__6666;

try{var fexpr__6667 = (function (){var format_in__5379__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__5380__auto__ = ((typeof format_in__5379__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5379__auto__) : cljs.pprint.cached_compile.call(null,format_in__5379__auto__)):format_in__5379__auto__);
return ((function (format_in__5379__auto__,cf__5380__auto__,_STAR_symbol_map_STAR__orig_val__6665,_STAR_symbol_map_STAR__temp_val__6666,args,nlis){
return (function() { 
var G__6668__delegate = function (args__5381__auto__){
var navigator__5382__auto__ = cljs.pprint.init_navigator(args__5381__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5380__auto__,navigator__5382__auto__);
};
var G__6668 = function (var_args){
var args__5381__auto__ = null;
if (arguments.length > 0) {
var G__6669__i = 0, G__6669__a = new Array(arguments.length -  0);
while (G__6669__i < G__6669__a.length) {G__6669__a[G__6669__i] = arguments[G__6669__i + 0]; ++G__6669__i;}
  args__5381__auto__ = new cljs.core.IndexedSeq(G__6669__a,0,null);
} 
return G__6668__delegate.call(this,args__5381__auto__);};
G__6668.cljs$lang$maxFixedArity = 0;
G__6668.cljs$lang$applyTo = (function (arglist__6670){
var args__5381__auto__ = cljs.core.seq(arglist__6670);
return G__6668__delegate(args__5381__auto__);
});
G__6668.cljs$core$IFn$_invoke$arity$variadic = G__6668__delegate;
return G__6668;
})()
;
;})(format_in__5379__auto__,cf__5380__auto__,_STAR_symbol_map_STAR__orig_val__6665,_STAR_symbol_map_STAR__temp_val__6666,args,nlis))
})();
return (fexpr__6667.cljs$core$IFn$_invoke$arity$1 ? fexpr__6667.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__6667.call(null,nlis));
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__orig_val__6665;
}} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6671_6676 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6672_6677 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6673_6678 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6674_6679 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6673_6678;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6674_6679;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

var length_count6675_6680 = (0);
var alis_6681__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count6675_6680 < cljs.core._STAR_print_length_STAR_)))){
if(alis_6681__$1){
cljs.pprint.write_out(cljs.core.first(alis_6681__$1));

if(cljs.core.next(alis_6681__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__6682 = (length_count6675_6680 + (1));
var G__6683 = cljs.core.next(alis_6681__$1);
length_count6675_6680 = G__6682;
alis_6681__$1 = G__6683;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6672_6677;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6671_6676;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4434__auto__ = (function cljs$pprint$two_forms_$_iter__6684(s__6685){
return (new cljs.core.LazySeq(null,(function (){
var s__6685__$1 = s__6685;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__6685__$1);
if(temp__5720__auto__){
var s__6685__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6685__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__6685__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__6687 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__6686 = (0);
while(true){
if((i__6686 < size__4433__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__6686);
cljs.core.chunk_append(b__6687,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__6688 = (i__6686 + (1));
i__6686 = G__6688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6687),cljs$pprint$two_forms_$_iter__6684(cljs.core.chunk_rest(s__6685__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6687),null);
}
} else {
var x = cljs.core.first(s__6685__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__6684(cljs.core.rest(s__6685__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__6689_SHARP_){
var vec__6690 = p1__6689_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6690,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6690,(1),null);
if(cljs.core.not((function (){var or__4047__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__6689_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5718__auto__ = (function (){var G__6693 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__6693) : cljs.pprint._STAR_code_table_STAR_.call(null,G__6693));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var special_form = temp__5718__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5718__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__5718__auto__)){
var arg_num = temp__5718__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.code_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__4524__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__6694 = cljs.core.get_global_hierarchy;
return (fexpr__6694.cljs$core$IFn$_invoke$arity$0 ? fexpr__6694.cljs$core$IFn$_invoke$arity$0() : fexpr__6694.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$symbol,cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$queue,cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$deref,cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__4135__auto__ = (0);
var y__4136__auto__ = (width - cljs.core.count(s));
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__6699 = arguments.length;
switch (G__6699) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6695_SHARP_){
return cljs.core.count(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__6695_SHARP_,k)));
}),rows));
}),ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths){
return (function (p1__6696_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__6696_SHARP_,"-"));
});})(widths))
,widths);
var fmt_row = ((function (widths,spacers){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__4434__auto__ = ((function (widths,spacers){
return (function cljs$pprint$iter__6700(s__6701){
return (new cljs.core.LazySeq(null,((function (widths,spacers){
return (function (){
var s__6701__$1 = s__6701;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__6701__$1);
if(temp__5720__auto__){
var s__6701__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6701__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__6701__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__6703 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__6702 = (0);
while(true){
if((i__6702 < size__4433__auto__)){
var vec__6704 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__6702);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6704,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6704,(1),null);
cljs.core.chunk_append(b__6703,cljs.pprint.add_padding(width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)));

var G__6715 = (i__6702 + (1));
i__6702 = G__6715;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6703),cljs$pprint$iter__6700(cljs.core.chunk_rest(s__6701__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6703),null);
}
} else {
var vec__6707 = cljs.core.first(s__6701__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6707,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6707,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),cljs$pprint$iter__6700(cljs.core.rest(s__6701__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers))
,null,null));
});})(widths,spacers))
;
return iter__4434__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__4434__auto__,widths,spacers){
return (function (p1__6697_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__6697_SHARP_);
});})(iter__4434__auto__,widths,spacers))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__6710 = cljs.core.seq(rows);
var chunk__6711 = null;
var count__6712 = (0);
var i__6713 = (0);
while(true){
if((i__6713 < count__6712)){
var row = chunk__6711.cljs$core$IIndexed$_nth$arity$2(null,i__6713);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__6716 = seq__6710;
var G__6717 = chunk__6711;
var G__6718 = count__6712;
var G__6719 = (i__6713 + (1));
seq__6710 = G__6716;
chunk__6711 = G__6717;
count__6712 = G__6718;
i__6713 = G__6719;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6710);
if(temp__5720__auto__){
var seq__6710__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6710__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__6710__$1);
var G__6720 = cljs.core.chunk_rest(seq__6710__$1);
var G__6721 = c__4461__auto__;
var G__6722 = cljs.core.count(c__4461__auto__);
var G__6723 = (0);
seq__6710 = G__6720;
chunk__6711 = G__6721;
count__6712 = G__6722;
i__6713 = G__6723;
continue;
} else {
var row = cljs.core.first(seq__6710__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__6724 = cljs.core.next(seq__6710__$1);
var G__6725 = null;
var G__6726 = (0);
var G__6727 = (0);
seq__6710 = G__6724;
chunk__6711 = G__6725;
count__6712 = G__6726;
i__6713 = G__6727;
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
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;

