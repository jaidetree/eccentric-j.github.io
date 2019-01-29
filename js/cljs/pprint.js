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
var len__4641__auto___5403 = arguments.length;
var i__4642__auto___5404 = (0);
while(true){
if((i__4642__auto___5404 < len__4641__auto___5403)){
args__4647__auto__.push((arguments[i__4642__auto___5404]));

var G__5405 = (i__4642__auto___5404 + (1));
i__4642__auto___5404 = G__5405;
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
cljs.pprint.print.cljs$lang$applyTo = (function (seq5402){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5402));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5407 = arguments.length;
var i__4642__auto___5408 = (0);
while(true){
if((i__4642__auto___5408 < len__4641__auto___5407)){
args__4647__auto__.push((arguments[i__4642__auto___5408]));

var G__5409 = (i__4642__auto___5408 + (1));
i__4642__auto___5408 = G__5409;
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
cljs.pprint.println.cljs$lang$applyTo = (function (seq5406){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5406));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__5410 = cljs.core._EQ_;
var expr__5411 = c;
if(cljs.core.truth_((function (){var G__5413 = "\b";
var G__5414 = expr__5411;
return (pred__5410.cljs$core$IFn$_invoke$arity$2 ? pred__5410.cljs$core$IFn$_invoke$arity$2(G__5413,G__5414) : pred__5410.call(null,G__5413,G__5414));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__5415 = "\t";
var G__5416 = expr__5411;
return (pred__5410.cljs$core$IFn$_invoke$arity$2 ? pred__5410.cljs$core$IFn$_invoke$arity$2(G__5415,G__5416) : pred__5410.call(null,G__5415,G__5416));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__5417 = "\n";
var G__5418 = expr__5411;
return (pred__5410.cljs$core$IFn$_invoke$arity$2 ? pred__5410.cljs$core$IFn$_invoke$arity$2(G__5417,G__5418) : pred__5410.call(null,G__5417,G__5418));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__5419 = "\f";
var G__5420 = expr__5411;
return (pred__5410.cljs$core$IFn$_invoke$arity$2 ? pred__5410.cljs$core$IFn$_invoke$arity$2(G__5419,G__5420) : pred__5410.call(null,G__5419,G__5420));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__5421 = "\r";
var G__5422 = expr__5411;
return (pred__5410.cljs$core$IFn$_invoke$arity$2 ? pred__5410.cljs$core$IFn$_invoke$arity$2(G__5421,G__5422) : pred__5410.call(null,G__5421,G__5422));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__5423 = "\"";
var G__5424 = expr__5411;
return (pred__5410.cljs$core$IFn$_invoke$arity$2 ? pred__5410.cljs$core$IFn$_invoke$arity$2(G__5423,G__5424) : pred__5410.call(null,G__5423,G__5424));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__5425 = "\\";
var G__5426 = expr__5411;
return (pred__5410.cljs$core$IFn$_invoke$arity$2 ? pred__5410.cljs$core$IFn$_invoke$arity$2(G__5425,G__5426) : pred__5410.call(null,G__5425,G__5426));
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
var len__4641__auto___5428 = arguments.length;
var i__4642__auto___5429 = (0);
while(true){
if((i__4642__auto___5429 < len__4641__auto___5428)){
args__4647__auto__.push((arguments[i__4642__auto___5429]));

var G__5430 = (i__4642__auto___5429 + (1));
i__4642__auto___5429 = G__5430;
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
cljs.pprint.pr.cljs$lang$applyTo = (function (seq5427){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5427));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5432 = arguments.length;
var i__4642__auto___5433 = (0);
while(true){
if((i__4642__auto___5433 < len__4641__auto___5432)){
args__4647__auto__.push((arguments[i__4642__auto___5433]));

var G__5434 = (i__4642__auto___5433 + (1));
i__4642__auto___5433 = G__5434;
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
cljs.pprint.prn.cljs$lang$applyTo = (function (seq5431){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5431));
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
var vec__5435 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5435,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5435,(1),null);
var G__5438 = new_context;
var G__5439 = remainder;
var G__5440 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__5438;
lis__$1 = G__5439;
acc = G__5440;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__5441 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5441,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5441,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__5444 = new_context;
var G__5445 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__5444;
acc = G__5445;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__5446 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5446,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5446,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5446,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__5449 = new_context;
var G__5450 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__5449;
acc = G__5450;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4434__auto__ = (function cljs$pprint$unzip_map_$_iter__5451(s__5452){
return (new cljs.core.LazySeq(null,(function (){
var s__5452__$1 = s__5452;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__5452__$1);
if(temp__5720__auto__){
var s__5452__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5452__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__5452__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__5454 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__5453 = (0);
while(true){
if((i__5453 < size__4433__auto__)){
var vec__5455 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__5453);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5455,(0),null);
var vec__5458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5455,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5458,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5458,(1),null);
cljs.core.chunk_append(b__5454,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__5483 = (i__5453 + (1));
i__5453 = G__5483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5454),cljs$pprint$unzip_map_$_iter__5451(cljs.core.chunk_rest(s__5452__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5454),null);
}
} else {
var vec__5461 = cljs.core.first(s__5452__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5461,(0),null);
var vec__5464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5461,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5464,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5464,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__5451(cljs.core.rest(s__5452__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4434__auto__ = (function cljs$pprint$unzip_map_$_iter__5467(s__5468){
return (new cljs.core.LazySeq(null,(function (){
var s__5468__$1 = s__5468;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__5468__$1);
if(temp__5720__auto__){
var s__5468__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5468__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__5468__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__5470 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__5469 = (0);
while(true){
if((i__5469 < size__4433__auto__)){
var vec__5471 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__5469);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5471,(0),null);
var vec__5474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5471,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5474,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5474,(1),null);
cljs.core.chunk_append(b__5470,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__5484 = (i__5469 + (1));
i__5469 = G__5484;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5470),cljs$pprint$unzip_map_$_iter__5467(cljs.core.chunk_rest(s__5468__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5470),null);
}
} else {
var vec__5477 = cljs.core.first(s__5468__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5477,(0),null);
var vec__5480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5477,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5480,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5480,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__5467(cljs.core.rest(s__5468__$2)));
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

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4434__auto__ = (function cljs$pprint$tuple_map_$_iter__5485(s__5486){
return (new cljs.core.LazySeq(null,(function (){
var s__5486__$1 = s__5486;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__5486__$1);
if(temp__5720__auto__){
var s__5486__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5486__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__5486__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__5488 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__5487 = (0);
while(true){
if((i__5487 < size__4433__auto__)){
var vec__5489 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__5487);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5489,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5489,(1),null);
cljs.core.chunk_append(b__5488,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__5495 = (i__5487 + (1));
i__5487 = G__5495;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5488),cljs$pprint$tuple_map_$_iter__5485(cljs.core.chunk_rest(s__5486__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5488),null);
}
} else {
var vec__5492 = cljs.core.first(s__5486__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5492,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5492,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__5485(cljs.core.rest(s__5486__$2)));
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
var G__5496 = (n - (1));
n = G__5496;
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
var G__5497 = (n + (1));
n = G__5497;
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
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__5499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__5499) : test.call(null,G__5499));
})())))){
return pos;
} else {
var G__5500 = (pos + (1));
pos = G__5500;
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
var G__5501 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__5501) : sym.call(null,G__5501));
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
var G__5504 = arguments.length;
switch (G__5504) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint5505 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint5505 = (function (writer,max_columns,fields,meta5506){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta5506 = meta5506;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint5505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_5507,meta5506__$1){
var self__ = this;
var _5507__$1 = this;
return (new cljs.pprint.t_cljs$pprint5505(self__.writer,self__.max_columns,self__.fields,meta5506__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint5505.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_5507){
var self__ = this;
var _5507__$1 = this;
return self__.meta5506;
});})(fields))
;

cljs.pprint.t_cljs$pprint5505.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint5505.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint5505.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__5508 = cljs.core._EQ_;
var expr__5509 = cljs.core.type(x);
if(cljs.core.truth_((pred__5508.cljs$core$IFn$_invoke$arity$2 ? pred__5508.cljs$core$IFn$_invoke$arity$2(String,expr__5509) : pred__5508.call(null,String,expr__5509)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__5508,expr__5509,this$__$1,fields){
return (function (p1__5502_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__5502_SHARP_,"\n");
});})(s,nl,pred__5508,expr__5509,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_((pred__5508.cljs$core$IFn$_invoke$arity$2 ? pred__5508.cljs$core$IFn$_invoke$arity$2(Number,expr__5509) : pred__5508.call(null,Number,expr__5509)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__5509)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint5505.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta5506], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint5505.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint5505.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint5505";

cljs.pprint.t_cljs$pprint5505.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.pprint/t_cljs$pprint5505");
});})(fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint5505.
 */
cljs.pprint.__GT_t_cljs$pprint5505 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint5505(writer__$1,max_columns__$1,fields__$1,meta5506){
return (new cljs.pprint.t_cljs$pprint5505(writer__$1,max_columns__$1,fields__$1,meta5506));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint5505(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k5513,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__5517 = k5513;
var G__5517__$1 = (((G__5517 instanceof cljs.core.Keyword))?G__5517.fqn:null);
switch (G__5517__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5513,else__4304__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__5518){
var vec__5519 = p__5518;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5519,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5519,(1),null);
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

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5512){
var self__ = this;
var G__5512__$1 = this;
return (new cljs.core.RecordIter((0),G__5512__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4159__auto____$1 = (function (){var fexpr__5522 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__5522(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5514,other5515){
var self__ = this;
var this5514__$1 = this;
return (((!((other5515 == null)))) && ((this5514__$1.constructor === other5515.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5514__$1.parent,other5515.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5514__$1.section,other5515.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5514__$1.start_col,other5515.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5514__$1.indent,other5515.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5514__$1.done_nl,other5515.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5514__$1.intra_block_nl,other5515.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5514__$1.prefix,other5515.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5514__$1.per_line_prefix,other5515.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5514__$1.suffix,other5515.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5514__$1.logical_block_callback,other5515.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5514__$1.__extmap,other5515.__extmap)));
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

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__5512){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__5523 = cljs.core.keyword_identical_QMARK_;
var expr__5524 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__5526 = cljs.core.cst$kw$parent;
var G__5527 = expr__5524;
return (pred__5523.cljs$core$IFn$_invoke$arity$2 ? pred__5523.cljs$core$IFn$_invoke$arity$2(G__5526,G__5527) : pred__5523.call(null,G__5526,G__5527));
})())){
return (new cljs.pprint.logical_block(G__5512,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5528 = cljs.core.cst$kw$section;
var G__5529 = expr__5524;
return (pred__5523.cljs$core$IFn$_invoke$arity$2 ? pred__5523.cljs$core$IFn$_invoke$arity$2(G__5528,G__5529) : pred__5523.call(null,G__5528,G__5529));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__5512,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5530 = cljs.core.cst$kw$start_DASH_col;
var G__5531 = expr__5524;
return (pred__5523.cljs$core$IFn$_invoke$arity$2 ? pred__5523.cljs$core$IFn$_invoke$arity$2(G__5530,G__5531) : pred__5523.call(null,G__5530,G__5531));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__5512,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5532 = cljs.core.cst$kw$indent;
var G__5533 = expr__5524;
return (pred__5523.cljs$core$IFn$_invoke$arity$2 ? pred__5523.cljs$core$IFn$_invoke$arity$2(G__5532,G__5533) : pred__5523.call(null,G__5532,G__5533));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__5512,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5534 = cljs.core.cst$kw$done_DASH_nl;
var G__5535 = expr__5524;
return (pred__5523.cljs$core$IFn$_invoke$arity$2 ? pred__5523.cljs$core$IFn$_invoke$arity$2(G__5534,G__5535) : pred__5523.call(null,G__5534,G__5535));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__5512,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5536 = cljs.core.cst$kw$intra_DASH_block_DASH_nl;
var G__5537 = expr__5524;
return (pred__5523.cljs$core$IFn$_invoke$arity$2 ? pred__5523.cljs$core$IFn$_invoke$arity$2(G__5536,G__5537) : pred__5523.call(null,G__5536,G__5537));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__5512,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5538 = cljs.core.cst$kw$prefix;
var G__5539 = expr__5524;
return (pred__5523.cljs$core$IFn$_invoke$arity$2 ? pred__5523.cljs$core$IFn$_invoke$arity$2(G__5538,G__5539) : pred__5523.call(null,G__5538,G__5539));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__5512,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5540 = cljs.core.cst$kw$per_DASH_line_DASH_prefix;
var G__5541 = expr__5524;
return (pred__5523.cljs$core$IFn$_invoke$arity$2 ? pred__5523.cljs$core$IFn$_invoke$arity$2(G__5540,G__5541) : pred__5523.call(null,G__5540,G__5541));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__5512,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5542 = cljs.core.cst$kw$suffix;
var G__5543 = expr__5524;
return (pred__5523.cljs$core$IFn$_invoke$arity$2 ? pred__5523.cljs$core$IFn$_invoke$arity$2(G__5542,G__5543) : pred__5523.call(null,G__5542,G__5543));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__5512,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5544 = cljs.core.cst$kw$logical_DASH_block_DASH_callback;
var G__5545 = expr__5524;
return (pred__5523.cljs$core$IFn$_invoke$arity$2 ? pred__5523.cljs$core$IFn$_invoke$arity$2(G__5544,G__5545) : pred__5523.call(null,G__5544,G__5545));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__5512,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__5512),null));
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

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__5512){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__5512,self__.__extmap,self__.__hash));
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
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__5516){
var extmap__4340__auto__ = (function (){var G__5546 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__5516,cljs.core.cst$kw$parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], 0));
if(cljs.core.record_QMARK_(G__5516)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5546);
} else {
return G__5546;
}
})();
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__5516),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__5516),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__5516),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__5516),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__5516),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__5516),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__5516),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__5516),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__5516),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__5516),null,cljs.core.not_empty(extmap__4340__auto__),null));
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
var G__5548 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__5548;
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

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k5550,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__5554 = k5550;
var G__5554__$1 = (((G__5554 instanceof cljs.core.Keyword))?G__5554.fqn:null);
switch (G__5554__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5550,else__4304__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__5555){
var vec__5556 = p__5555;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5556,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5556,(1),null);
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

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5549){
var self__ = this;
var G__5549__$1 = this;
return (new cljs.core.RecordIter((0),G__5549__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4159__auto____$1 = (function (){var fexpr__5559 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__5559(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5551,other5552){
var self__ = this;
var this5551__$1 = this;
return (((!((other5552 == null)))) && ((this5551__$1.constructor === other5552.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5551__$1.type_tag,other5552.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5551__$1.data,other5552.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5551__$1.trailing_white_space,other5552.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5551__$1.start_pos,other5552.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5551__$1.end_pos,other5552.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5551__$1.__extmap,other5552.__extmap)));
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

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__5549){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__5560 = cljs.core.keyword_identical_QMARK_;
var expr__5561 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__5563 = cljs.core.cst$kw$type_DASH_tag;
var G__5564 = expr__5561;
return (pred__5560.cljs$core$IFn$_invoke$arity$2 ? pred__5560.cljs$core$IFn$_invoke$arity$2(G__5563,G__5564) : pred__5560.call(null,G__5563,G__5564));
})())){
return (new cljs.pprint.buffer_blob(G__5549,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5565 = cljs.core.cst$kw$data;
var G__5566 = expr__5561;
return (pred__5560.cljs$core$IFn$_invoke$arity$2 ? pred__5560.cljs$core$IFn$_invoke$arity$2(G__5565,G__5566) : pred__5560.call(null,G__5565,G__5566));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__5549,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5567 = cljs.core.cst$kw$trailing_DASH_white_DASH_space;
var G__5568 = expr__5561;
return (pred__5560.cljs$core$IFn$_invoke$arity$2 ? pred__5560.cljs$core$IFn$_invoke$arity$2(G__5567,G__5568) : pred__5560.call(null,G__5567,G__5568));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__5549,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5569 = cljs.core.cst$kw$start_DASH_pos;
var G__5570 = expr__5561;
return (pred__5560.cljs$core$IFn$_invoke$arity$2 ? pred__5560.cljs$core$IFn$_invoke$arity$2(G__5569,G__5570) : pred__5560.call(null,G__5569,G__5570));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__5549,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5571 = cljs.core.cst$kw$end_DASH_pos;
var G__5572 = expr__5561;
return (pred__5560.cljs$core$IFn$_invoke$arity$2 ? pred__5560.cljs$core$IFn$_invoke$arity$2(G__5571,G__5572) : pred__5560.call(null,G__5571,G__5572));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__5549,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__5549),null));
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

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__5549){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__5549,self__.__extmap,self__.__hash));
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
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__5553){
var extmap__4340__auto__ = (function (){var G__5573 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__5553,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0));
if(cljs.core.record_QMARK_(G__5553)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5573);
} else {
return G__5573;
}
})();
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__5553),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__5553),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__5553),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__5553),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__5553),null,cljs.core.not_empty(extmap__4340__auto__),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__5333__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__5333__auto__),cljs.core.cst$kw$buffer_DASH_blob);
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

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k5576,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__5580 = k5576;
var G__5580__$1 = (((G__5580 instanceof cljs.core.Keyword))?G__5580.fqn:null);
switch (G__5580__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5576,else__4304__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__5581){
var vec__5582 = p__5581;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5582,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5582,(1),null);
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

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5575){
var self__ = this;
var G__5575__$1 = this;
return (new cljs.core.RecordIter((0),G__5575__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4159__auto____$1 = (function (){var fexpr__5585 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__5585(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5577,other5578){
var self__ = this;
var this5577__$1 = this;
return (((!((other5578 == null)))) && ((this5577__$1.constructor === other5578.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5577__$1.type_tag,other5578.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5577__$1.type,other5578.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5577__$1.logical_block,other5578.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5577__$1.start_pos,other5578.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5577__$1.end_pos,other5578.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5577__$1.__extmap,other5578.__extmap)));
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

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__5575){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__5586 = cljs.core.keyword_identical_QMARK_;
var expr__5587 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__5589 = cljs.core.cst$kw$type_DASH_tag;
var G__5590 = expr__5587;
return (pred__5586.cljs$core$IFn$_invoke$arity$2 ? pred__5586.cljs$core$IFn$_invoke$arity$2(G__5589,G__5590) : pred__5586.call(null,G__5589,G__5590));
})())){
return (new cljs.pprint.nl_t(G__5575,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5591 = cljs.core.cst$kw$type;
var G__5592 = expr__5587;
return (pred__5586.cljs$core$IFn$_invoke$arity$2 ? pred__5586.cljs$core$IFn$_invoke$arity$2(G__5591,G__5592) : pred__5586.call(null,G__5591,G__5592));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__5575,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5593 = cljs.core.cst$kw$logical_DASH_block;
var G__5594 = expr__5587;
return (pred__5586.cljs$core$IFn$_invoke$arity$2 ? pred__5586.cljs$core$IFn$_invoke$arity$2(G__5593,G__5594) : pred__5586.call(null,G__5593,G__5594));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__5575,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5595 = cljs.core.cst$kw$start_DASH_pos;
var G__5596 = expr__5587;
return (pred__5586.cljs$core$IFn$_invoke$arity$2 ? pred__5586.cljs$core$IFn$_invoke$arity$2(G__5595,G__5596) : pred__5586.call(null,G__5595,G__5596));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__5575,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5597 = cljs.core.cst$kw$end_DASH_pos;
var G__5598 = expr__5587;
return (pred__5586.cljs$core$IFn$_invoke$arity$2 ? pred__5586.cljs$core$IFn$_invoke$arity$2(G__5597,G__5598) : pred__5586.call(null,G__5597,G__5598));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__5575,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__5575),null));
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

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__5575){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__5575,self__.__extmap,self__.__hash));
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
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__5579){
var extmap__4340__auto__ = (function (){var G__5599 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__5579,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0));
if(cljs.core.record_QMARK_(G__5579)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5599);
} else {
return G__5599;
}
})();
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__5579),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__5579),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__5579),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__5579),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__5579),null,cljs.core.not_empty(extmap__4340__auto__),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__5333__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__5333__auto__),cljs.core.cst$kw$nl_DASH_t);
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

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k5602,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__5606 = k5602;
var G__5606__$1 = (((G__5606 instanceof cljs.core.Keyword))?G__5606.fqn:null);
switch (G__5606__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5602,else__4304__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__5607){
var vec__5608 = p__5607;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5608,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5608,(1),null);
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

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5601){
var self__ = this;
var G__5601__$1 = this;
return (new cljs.core.RecordIter((0),G__5601__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4159__auto____$1 = (function (){var fexpr__5611 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__5611(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5603,other5604){
var self__ = this;
var this5603__$1 = this;
return (((!((other5604 == null)))) && ((this5603__$1.constructor === other5604.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5603__$1.type_tag,other5604.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5603__$1.logical_block,other5604.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5603__$1.start_pos,other5604.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5603__$1.end_pos,other5604.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5603__$1.__extmap,other5604.__extmap)));
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

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__5601){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__5612 = cljs.core.keyword_identical_QMARK_;
var expr__5613 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__5615 = cljs.core.cst$kw$type_DASH_tag;
var G__5616 = expr__5613;
return (pred__5612.cljs$core$IFn$_invoke$arity$2 ? pred__5612.cljs$core$IFn$_invoke$arity$2(G__5615,G__5616) : pred__5612.call(null,G__5615,G__5616));
})())){
return (new cljs.pprint.start_block_t(G__5601,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5617 = cljs.core.cst$kw$logical_DASH_block;
var G__5618 = expr__5613;
return (pred__5612.cljs$core$IFn$_invoke$arity$2 ? pred__5612.cljs$core$IFn$_invoke$arity$2(G__5617,G__5618) : pred__5612.call(null,G__5617,G__5618));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__5601,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5619 = cljs.core.cst$kw$start_DASH_pos;
var G__5620 = expr__5613;
return (pred__5612.cljs$core$IFn$_invoke$arity$2 ? pred__5612.cljs$core$IFn$_invoke$arity$2(G__5619,G__5620) : pred__5612.call(null,G__5619,G__5620));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__5601,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5621 = cljs.core.cst$kw$end_DASH_pos;
var G__5622 = expr__5613;
return (pred__5612.cljs$core$IFn$_invoke$arity$2 ? pred__5612.cljs$core$IFn$_invoke$arity$2(G__5621,G__5622) : pred__5612.call(null,G__5621,G__5622));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__5601,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__5601),null));
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

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__5601){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__5601,self__.__extmap,self__.__hash));
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
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__5605){
var extmap__4340__auto__ = (function (){var G__5623 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__5605,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0));
if(cljs.core.record_QMARK_(G__5605)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5623);
} else {
return G__5623;
}
})();
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__5605),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__5605),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__5605),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__5605),null,cljs.core.not_empty(extmap__4340__auto__),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__5333__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__5333__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
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

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k5626,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__5630 = k5626;
var G__5630__$1 = (((G__5630 instanceof cljs.core.Keyword))?G__5630.fqn:null);
switch (G__5630__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5626,else__4304__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__5631){
var vec__5632 = p__5631;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5632,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5632,(1),null);
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

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5625){
var self__ = this;
var G__5625__$1 = this;
return (new cljs.core.RecordIter((0),G__5625__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4159__auto____$1 = (function (){var fexpr__5635 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__5635(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5627,other5628){
var self__ = this;
var this5627__$1 = this;
return (((!((other5628 == null)))) && ((this5627__$1.constructor === other5628.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5627__$1.type_tag,other5628.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5627__$1.logical_block,other5628.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5627__$1.start_pos,other5628.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5627__$1.end_pos,other5628.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5627__$1.__extmap,other5628.__extmap)));
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

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__5625){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__5636 = cljs.core.keyword_identical_QMARK_;
var expr__5637 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__5639 = cljs.core.cst$kw$type_DASH_tag;
var G__5640 = expr__5637;
return (pred__5636.cljs$core$IFn$_invoke$arity$2 ? pred__5636.cljs$core$IFn$_invoke$arity$2(G__5639,G__5640) : pred__5636.call(null,G__5639,G__5640));
})())){
return (new cljs.pprint.end_block_t(G__5625,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5641 = cljs.core.cst$kw$logical_DASH_block;
var G__5642 = expr__5637;
return (pred__5636.cljs$core$IFn$_invoke$arity$2 ? pred__5636.cljs$core$IFn$_invoke$arity$2(G__5641,G__5642) : pred__5636.call(null,G__5641,G__5642));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__5625,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5643 = cljs.core.cst$kw$start_DASH_pos;
var G__5644 = expr__5637;
return (pred__5636.cljs$core$IFn$_invoke$arity$2 ? pred__5636.cljs$core$IFn$_invoke$arity$2(G__5643,G__5644) : pred__5636.call(null,G__5643,G__5644));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__5625,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5645 = cljs.core.cst$kw$end_DASH_pos;
var G__5646 = expr__5637;
return (pred__5636.cljs$core$IFn$_invoke$arity$2 ? pred__5636.cljs$core$IFn$_invoke$arity$2(G__5645,G__5646) : pred__5636.call(null,G__5645,G__5646));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__5625,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__5625),null));
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

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__5625){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__5625,self__.__extmap,self__.__hash));
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
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__5629){
var extmap__4340__auto__ = (function (){var G__5647 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__5629,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0));
if(cljs.core.record_QMARK_(G__5629)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5647);
} else {
return G__5647;
}
})();
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__5629),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__5629),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__5629),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__5629),null,cljs.core.not_empty(extmap__4340__auto__),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__5333__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__5333__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
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

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k5650,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__5654 = k5650;
var G__5654__$1 = (((G__5654 instanceof cljs.core.Keyword))?G__5654.fqn:null);
switch (G__5654__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5650,else__4304__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__5655){
var vec__5656 = p__5655;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5656,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5656,(1),null);
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

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5649){
var self__ = this;
var G__5649__$1 = this;
return (new cljs.core.RecordIter((0),G__5649__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4159__auto____$1 = (function (){var fexpr__5659 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__5659(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5651,other5652){
var self__ = this;
var this5651__$1 = this;
return (((!((other5652 == null)))) && ((this5651__$1.constructor === other5652.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5651__$1.type_tag,other5652.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5651__$1.logical_block,other5652.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5651__$1.relative_to,other5652.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5651__$1.offset,other5652.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5651__$1.start_pos,other5652.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5651__$1.end_pos,other5652.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5651__$1.__extmap,other5652.__extmap)));
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

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__5649){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__5660 = cljs.core.keyword_identical_QMARK_;
var expr__5661 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__5663 = cljs.core.cst$kw$type_DASH_tag;
var G__5664 = expr__5661;
return (pred__5660.cljs$core$IFn$_invoke$arity$2 ? pred__5660.cljs$core$IFn$_invoke$arity$2(G__5663,G__5664) : pred__5660.call(null,G__5663,G__5664));
})())){
return (new cljs.pprint.indent_t(G__5649,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5665 = cljs.core.cst$kw$logical_DASH_block;
var G__5666 = expr__5661;
return (pred__5660.cljs$core$IFn$_invoke$arity$2 ? pred__5660.cljs$core$IFn$_invoke$arity$2(G__5665,G__5666) : pred__5660.call(null,G__5665,G__5666));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__5649,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5667 = cljs.core.cst$kw$relative_DASH_to;
var G__5668 = expr__5661;
return (pred__5660.cljs$core$IFn$_invoke$arity$2 ? pred__5660.cljs$core$IFn$_invoke$arity$2(G__5667,G__5668) : pred__5660.call(null,G__5667,G__5668));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__5649,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5669 = cljs.core.cst$kw$offset;
var G__5670 = expr__5661;
return (pred__5660.cljs$core$IFn$_invoke$arity$2 ? pred__5660.cljs$core$IFn$_invoke$arity$2(G__5669,G__5670) : pred__5660.call(null,G__5669,G__5670));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__5649,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5671 = cljs.core.cst$kw$start_DASH_pos;
var G__5672 = expr__5661;
return (pred__5660.cljs$core$IFn$_invoke$arity$2 ? pred__5660.cljs$core$IFn$_invoke$arity$2(G__5671,G__5672) : pred__5660.call(null,G__5671,G__5672));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__5649,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5673 = cljs.core.cst$kw$end_DASH_pos;
var G__5674 = expr__5661;
return (pred__5660.cljs$core$IFn$_invoke$arity$2 ? pred__5660.cljs$core$IFn$_invoke$arity$2(G__5673,G__5674) : pred__5660.call(null,G__5673,G__5674));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__5649,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__5649),null));
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

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__5649){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__5649,self__.__extmap,self__.__hash));
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
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__5653){
var extmap__4340__auto__ = (function (){var G__5675 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__5653,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0));
if(cljs.core.record_QMARK_(G__5653)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5675);
} else {
return G__5675;
}
})();
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__5653),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__5653),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__5653),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__5653),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__5653),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__5653),null,cljs.core.not_empty(extmap__4340__auto__),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__5333__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__5333__auto__),cljs.core.cst$kw$indent_DASH_t);
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
var hierarchy__4528__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__5679 = cljs.core.get_global_hierarchy;
return (fexpr__5679.cljs$core$IFn$_invoke$arity$0 ? fexpr__5679.cljs$core$IFn$_invoke$arity$0() : fexpr__5679.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__){
return (function (p1__5678_SHARP_,p2__5677_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__5677_SHARP_);
});})(method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__))
,cljs.core.cst$kw$default,hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__5720__auto___5681 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5720__auto___5681)){
var cb_5682 = temp__5720__auto___5681;
var G__5680_5683 = cljs.core.cst$kw$start;
(cb_5682.cljs$core$IFn$_invoke$arity$1 ? cb_5682.cljs$core$IFn$_invoke$arity$1(G__5680_5683) : cb_5682.call(null,G__5680_5683));
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__5720__auto___5684 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5720__auto___5684)){
var prefix_5685 = temp__5720__auto___5684;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_5685);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__5720__auto___5687 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5720__auto___5687)){
var cb_5688 = temp__5720__auto___5687;
var G__5686_5689 = cljs.core.cst$kw$end;
(cb_5688.cljs$core$IFn$_invoke$arity$1 ? cb_5688.cljs$core$IFn$_invoke$arity$1(G__5686_5689) : cb_5688.call(null,G__5686_5689));
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
return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__5690 = cljs.core._EQ_;
var expr__5691 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__5693 = cljs.core.cst$kw$block;
var G__5694 = expr__5691;
return (pred__5690.cljs$core$IFn$_invoke$arity$2 ? pred__5690.cljs$core$IFn$_invoke$arity$2(G__5693,G__5694) : pred__5690.call(null,G__5693,G__5694));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__5695 = cljs.core.cst$kw$current;
var G__5696 = expr__5691;
return (pred__5690.cljs$core$IFn$_invoke$arity$2 ? pred__5690.cljs$core$IFn$_invoke$arity$2(G__5695,G__5696) : pred__5690.call(null,G__5695,G__5696));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__5691)].join('')));
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
var temp__5718__auto___5697 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5718__auto___5697)){
var tws_5698 = temp__5718__auto___5697;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_5698);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__5699 = cljs.core.seq(tokens);
var chunk__5700 = null;
var count__5701 = (0);
var i__5702 = (0);
while(true){
if((i__5702 < count__5701)){
var token = chunk__5700.cljs$core$IIndexed$_nth$arity$2(null,i__5702);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t)))){
var temp__5718__auto___5703 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5718__auto___5703)){
var tws_5704 = temp__5718__auto___5703;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_5704);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_5705 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__4036__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4036__auto__)){
return tws_5705;
} else {
return and__4036__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_5705);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}


var G__5706 = seq__5699;
var G__5707 = chunk__5700;
var G__5708 = count__5701;
var G__5709 = (i__5702 + (1));
seq__5699 = G__5706;
chunk__5700 = G__5707;
count__5701 = G__5708;
i__5702 = G__5709;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__5699);
if(temp__5720__auto__){
var seq__5699__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5699__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__5699__$1);
var G__5710 = cljs.core.chunk_rest(seq__5699__$1);
var G__5711 = c__4461__auto__;
var G__5712 = cljs.core.count(c__4461__auto__);
var G__5713 = (0);
seq__5699 = G__5710;
chunk__5700 = G__5711;
count__5701 = G__5712;
i__5702 = G__5713;
continue;
} else {
var token = cljs.core.first(seq__5699__$1);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t)))){
var temp__5718__auto___5714 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5718__auto___5714)){
var tws_5715 = temp__5718__auto___5714;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_5715);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_5716 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__4036__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4036__auto__)){
return tws_5716;
} else {
return and__4036__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_5716);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}


var G__5717 = cljs.core.next(seq__5699__$1);
var G__5718 = null;
var G__5719 = (0);
var G__5720 = (0);
seq__5699 = G__5717;
chunk__5700 = G__5718;
count__5701 = G__5719;
i__5702 = G__5720;
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
var hierarchy__4528__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__5721 = cljs.core.get_global_hierarchy;
return (fexpr__5721.cljs$core$IFn$_invoke$arity$0 ? fexpr__5721.cljs$core$IFn$_invoke$arity$0() : fexpr__5721.call(null));
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
return (function (p1__5722_SHARP_){
return (!(((cljs.pprint.nl_t_QMARK_(p1__5722_SHARP_)) && (cljs.pprint.ancestor_QMARK_(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__5722_SHARP_),lb)))));
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__5723_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__5723_SHARP_);
return (!(((cljs.pprint.nl_t_QMARK_(p1__5723_SHARP_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb)) || (cljs.pprint.ancestor_QMARK_(nl_lb,lb)))))));
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

var G__5724 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__5724;
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

var istr_5725 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_5725);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__5726_SHARP_){
return (!(cljs.pprint.nl_t_QMARK_(p1__5726_SHARP_)));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__5727 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5727,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5727,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__5730 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5730,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5730,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__5733 = newl;
var G__5734 = this$;
var G__5735 = section;
var G__5736 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__5733,G__5734,G__5735,G__5736) : cljs.pprint.emit_nl_QMARK_.call(null,G__5733,G__5734,G__5735,G__5736));
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
var G__5737 = new_buffer;
buffer = G__5737;
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
var oldpos_5742 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_5743 = (oldpos_5742 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_5743);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_5742,newpos_5743));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__5738_5744 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__5739_5745 = null;
var count__5740_5746 = (0);
var i__5741_5747 = (0);
while(true){
if((i__5741_5747 < count__5740_5746)){
var l_5748__$1 = chunk__5739_5745.cljs$core$IIndexed$_nth$arity$2(null,i__5741_5747);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_5748__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__5749 = seq__5738_5744;
var G__5750 = chunk__5739_5745;
var G__5751 = count__5740_5746;
var G__5752 = (i__5741_5747 + (1));
seq__5738_5744 = G__5749;
chunk__5739_5745 = G__5750;
count__5740_5746 = G__5751;
i__5741_5747 = G__5752;
continue;
} else {
var temp__5720__auto___5753 = cljs.core.seq(seq__5738_5744);
if(temp__5720__auto___5753){
var seq__5738_5754__$1 = temp__5720__auto___5753;
if(cljs.core.chunked_seq_QMARK_(seq__5738_5754__$1)){
var c__4461__auto___5755 = cljs.core.chunk_first(seq__5738_5754__$1);
var G__5756 = cljs.core.chunk_rest(seq__5738_5754__$1);
var G__5757 = c__4461__auto___5755;
var G__5758 = cljs.core.count(c__4461__auto___5755);
var G__5759 = (0);
seq__5738_5744 = G__5756;
chunk__5739_5745 = G__5757;
count__5740_5746 = G__5758;
i__5741_5747 = G__5759;
continue;
} else {
var l_5760__$1 = cljs.core.first(seq__5738_5754__$1);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_5760__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__5761 = cljs.core.next(seq__5738_5754__$1);
var G__5762 = null;
var G__5763 = (0);
var G__5764 = (0);
seq__5738_5744 = G__5761;
chunk__5739_5745 = G__5762;
count__5740_5746 = G__5763;
i__5741_5747 = G__5764;
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
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint5765 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint5765 = (function (writer,max_columns,miser_width,lb,fields,meta5766){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta5766 = meta5766;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint5765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_5767,meta5766__$1){
var self__ = this;
var _5767__$1 = this;
return (new cljs.pprint.t_cljs$pprint5765(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta5766__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint5765.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_5767){
var self__ = this;
var _5767__$1 = this;
return self__.meta5766;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint5765.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint5765.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__5768 = cljs.core._EQ_;
var expr__5769 = cljs.core.type(x);
if(cljs.core.truth_((pred__5768.cljs$core$IFn$_invoke$arity$2 ? pred__5768.cljs$core$IFn$_invoke$arity$2(String,expr__5769) : pred__5768.call(null,String,expr__5769)))){
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
if(cljs.core.truth_((pred__5768.cljs$core$IFn$_invoke$arity$2 ? pred__5768.cljs$core$IFn$_invoke$arity$2(Number,expr__5769) : pred__5768.call(null,Number,expr__5769)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__5769)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint5765.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint5765.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint5765.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
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

cljs.pprint.t_cljs$pprint5765.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta5766], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint5765.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint5765.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint5765";

cljs.pprint.t_cljs$pprint5765.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.pprint/t_cljs$pprint5765");
});})(lb,fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint5765.
 */
cljs.pprint.__GT_t_cljs$pprint5765 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint5765(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta5766){
return (new cljs.pprint.t_cljs$pprint5765(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta5766));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint5765(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var temp__5720__auto___5772 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5720__auto___5772)){
var cb_5773 = temp__5720__auto___5772;
var G__5771_5774 = cljs.core.cst$kw$start;
(cb_5773.cljs$core$IFn$_invoke$arity$1 ? cb_5773.cljs$core$IFn$_invoke$arity$1(G__5771_5774) : cb_5773.call(null,G__5771_5774));
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

var temp__5720__auto___5776 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5720__auto___5776)){
var cb_5777 = temp__5720__auto___5776;
var G__5775_5778 = cljs.core.cst$kw$end;
(cb_5777.cljs$core$IFn$_invoke$arity$1 ? cb_5777.cljs$core$IFn$_invoke$arity$1(G__5775_5778) : cb_5777.call(null,G__5775_5778));
} else {
}
} else {
var oldpos_5779 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_5780 = (oldpos_5779 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_5780);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_5779,newpos_5780));
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

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__5781 = cljs.core._EQ_;
var expr__5782 = relative_to;
if(cljs.core.truth_((function (){var G__5784 = cljs.core.cst$kw$block;
var G__5785 = expr__5782;
return (pred__5781.cljs$core$IFn$_invoke$arity$2 ? pred__5781.cljs$core$IFn$_invoke$arity$2(G__5784,G__5785) : pred__5781.call(null,G__5784,G__5785));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__5786 = cljs.core.cst$kw$current;
var G__5787 = expr__5782;
return (pred__5781.cljs$core$IFn$_invoke$arity$2 ? pred__5781.cljs$core$IFn$_invoke$arity$2(G__5786,G__5787) : pred__5781.call(null,G__5786,G__5787));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__5782)].join('')));
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__5788_SHARP_){
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__5788_SHARP_));
if(cljs.core.truth_(temp__5720__auto__)){
var v = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__5788_SHARP_)], null);
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
var len__4641__auto___5821 = arguments.length;
var i__4642__auto___5822 = (0);
while(true){
if((i__4642__auto___5822 < len__4641__auto___5821)){
args__4647__auto__.push((arguments[i__4642__auto___5822]));

var G__5823 = (i__4642__auto___5822 + (1));
i__4642__auto___5822 = G__5823;
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
var _STAR_print_base_STAR__orig_val__5793 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR__orig_val__5794 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR__orig_val__5795 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__5796 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR__orig_val__5797 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR__orig_val__5798 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR__orig_val__5799 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR__orig_val__5800 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR__orig_val__5801 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR__orig_val__5802 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR__orig_val__5803 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR__orig_val__5804 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
var _STAR_print_base_STAR__temp_val__5805 = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);
var _STAR_print_circle_STAR__temp_val__5806 = cljs.core.cst$kw$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);
var _STAR_print_length_STAR__temp_val__5807 = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);
var _STAR_print_level_STAR__temp_val__5808 = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);
var _STAR_print_lines_STAR__temp_val__5809 = cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);
var _STAR_print_miser_width_STAR__temp_val__5810 = cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);
var _STAR_print_pprint_dispatch_STAR__temp_val__5811 = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);
var _STAR_print_pretty_STAR__temp_val__5812 = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);
var _STAR_print_radix_STAR__temp_val__5813 = cljs.core.cst$kw$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);
var _STAR_print_readably_STAR__temp_val__5814 = cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);
var _STAR_print_right_margin_STAR__temp_val__5815 = cljs.core.cst$kw$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);
var _STAR_print_suppress_namespaces_STAR__temp_val__5816 = cljs.core.cst$kw$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);
cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__temp_val__5805;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__temp_val__5806;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__5807;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__5808;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__temp_val__5809;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__temp_val__5810;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__5811;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__5812;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__temp_val__5813;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__5814;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__5815;

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__temp_val__5816;

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,cljs.core.cst$kw$stream))?cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__5316__auto___5824 = base_writer;
var new_writer__5317__auto___5825 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__5316__auto___5824));
var _STAR_out_STAR__orig_val__5817_5826 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__5818_5827 = ((new_writer__5317__auto___5825)?cljs.pprint.make_pretty_writer(base_writer__5316__auto___5824,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__5316__auto___5824);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__5818_5827;

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__5817_5826;
}} else {
var _STAR_out_STAR__orig_val__5819_5828 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__5820_5829 = base_writer;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__5820_5829;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__5819_5828;
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
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__orig_val__5804;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__5803;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__5802;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__orig_val__5801;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__5800;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__5799;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__orig_val__5798;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__orig_val__5797;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__5796;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__5795;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__orig_val__5794;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__orig_val__5793;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.pprint.write.cljs$lang$applyTo = (function (seq5791){
var G__5792 = cljs.core.first(seq5791);
var seq5791__$1 = cljs.core.next(seq5791);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5792,seq5791__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__5831 = arguments.length;
switch (G__5831) {
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
var _STAR_out_STAR__orig_val__5832 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__5833 = (new cljs.core.StringBufferWriter(sb));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__5833;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__5832;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__5316__auto__ = writer;
var new_writer__5317__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__5316__auto__));
var _STAR_out_STAR__orig_val__5834 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__5835 = ((new_writer__5317__auto__)?cljs.pprint.make_pretty_writer(base_writer__5316__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__5316__auto__);
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__5835;

try{var _STAR_print_pretty_STAR__orig_val__5836_5839 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_pretty_STAR__temp_val__5837_5840 = true;
cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__5837_5840;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__5836_5839;
}
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_))))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__5834;
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
var len__4641__auto___5844 = arguments.length;
var i__4642__auto___5845 = (0);
while(true){
if((i__4642__auto___5845 < len__4641__auto___5844)){
args__4647__auto__.push((arguments[i__4642__auto___5845]));

var G__5846 = (i__4642__auto___5845 + (1));
i__4642__auto___5845 = G__5846;
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
cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq5841){
var G__5842 = cljs.core.first(seq5841);
var seq5841__$1 = cljs.core.next(seq5841);
var G__5843 = cljs.core.first(seq5841__$1);
var seq5841__$2 = cljs.core.next(seq5841__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5842,G__5843,seq5841__$2);
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

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k5848,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__5852 = k5848;
var G__5852__$1 = (((G__5852 instanceof cljs.core.Keyword))?G__5852.fqn:null);
switch (G__5852__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5848,else__4304__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__5853){
var vec__5854 = p__5853;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5854,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5854,(1),null);
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

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5847){
var self__ = this;
var G__5847__$1 = this;
return (new cljs.core.RecordIter((0),G__5847__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4159__auto____$1 = (function (){var fexpr__5857 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__5857(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5849,other5850){
var self__ = this;
var this5849__$1 = this;
return (((!((other5850 == null)))) && ((this5849__$1.constructor === other5850.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5849__$1.seq,other5850.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5849__$1.rest,other5850.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5849__$1.pos,other5850.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5849__$1.__extmap,other5850.__extmap)));
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

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__5847){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__5858 = cljs.core.keyword_identical_QMARK_;
var expr__5859 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__5861 = cljs.core.cst$kw$seq;
var G__5862 = expr__5859;
return (pred__5858.cljs$core$IFn$_invoke$arity$2 ? pred__5858.cljs$core$IFn$_invoke$arity$2(G__5861,G__5862) : pred__5858.call(null,G__5861,G__5862));
})())){
return (new cljs.pprint.arg_navigator(G__5847,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5863 = cljs.core.cst$kw$rest;
var G__5864 = expr__5859;
return (pred__5858.cljs$core$IFn$_invoke$arity$2 ? pred__5858.cljs$core$IFn$_invoke$arity$2(G__5863,G__5864) : pred__5858.call(null,G__5863,G__5864));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__5847,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5865 = cljs.core.cst$kw$pos;
var G__5866 = expr__5859;
return (pred__5858.cljs$core$IFn$_invoke$arity$2 ? pred__5858.cljs$core$IFn$_invoke$arity$2(G__5865,G__5866) : pred__5858.call(null,G__5865,G__5866));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__5847,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__5847),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$seq,self__.seq,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$rest,self__.rest,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$pos,self__.pos,null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__5847){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__5847,self__.__extmap,self__.__hash));
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
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__5851){
var extmap__4340__auto__ = (function (){var G__5867 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__5851,cljs.core.cst$kw$seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], 0));
if(cljs.core.record_QMARK_(G__5851)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5867);
} else {
return G__5867;
}
})();
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__5851),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__5851),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__5851),null,cljs.core.not_empty(extmap__4340__auto__),null));
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
var vec__5869 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5869,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5869,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format(raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__5872 = navigator;
var G__5873 = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__5872,G__5873) : cljs.pprint.relative_reposition.call(null,G__5872,G__5873));
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

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k5875,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__5879 = k5875;
var G__5879__$1 = (((G__5879 instanceof cljs.core.Keyword))?G__5879.fqn:null);
switch (G__5879__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5875,else__4304__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__5880){
var vec__5881 = p__5880;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5881,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5881,(1),null);
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

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__5874){
var self__ = this;
var G__5874__$1 = this;
return (new cljs.core.RecordIter((0),G__5874__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4159__auto____$1 = (function (){var fexpr__5884 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__5884(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this5876,other5877){
var self__ = this;
var this5876__$1 = this;
return (((!((other5877 == null)))) && ((this5876__$1.constructor === other5877.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5876__$1.func,other5877.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5876__$1.def,other5877.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5876__$1.params,other5877.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5876__$1.offset,other5877.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this5876__$1.__extmap,other5877.__extmap)));
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

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__5874){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__5885 = cljs.core.keyword_identical_QMARK_;
var expr__5886 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__5888 = cljs.core.cst$kw$func;
var G__5889 = expr__5886;
return (pred__5885.cljs$core$IFn$_invoke$arity$2 ? pred__5885.cljs$core$IFn$_invoke$arity$2(G__5888,G__5889) : pred__5885.call(null,G__5888,G__5889));
})())){
return (new cljs.pprint.compiled_directive(G__5874,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5890 = cljs.core.cst$kw$def;
var G__5891 = expr__5886;
return (pred__5885.cljs$core$IFn$_invoke$arity$2 ? pred__5885.cljs$core$IFn$_invoke$arity$2(G__5890,G__5891) : pred__5885.call(null,G__5890,G__5891));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__5874,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5892 = cljs.core.cst$kw$params;
var G__5893 = expr__5886;
return (pred__5885.cljs$core$IFn$_invoke$arity$2 ? pred__5885.cljs$core$IFn$_invoke$arity$2(G__5892,G__5893) : pred__5885.call(null,G__5892,G__5893));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__5874,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5894 = cljs.core.cst$kw$offset;
var G__5895 = expr__5886;
return (pred__5885.cljs$core$IFn$_invoke$arity$2 ? pred__5885.cljs$core$IFn$_invoke$arity$2(G__5894,G__5895) : pred__5885.call(null,G__5894,G__5895));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__5874,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__5874),null));
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

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__5874){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__5874,self__.__extmap,self__.__hash));
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
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__5878){
var extmap__4340__auto__ = (function (){var G__5896 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__5878,cljs.core.cst$kw$func,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], 0));
if(cljs.core.record_QMARK_(G__5878)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__5896);
} else {
return G__5896;
}
})();
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__5878),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__5878),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__5878),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__5878),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__5898,navigator){
var vec__5899 = p__5898;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5899,(0),null);
var vec__5902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5899,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5902,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5902,(1),null);
var vec__5905 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5905,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5905,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__5908 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5908,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5908,(1),null);
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
var vec__5911 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5911,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5911,(1),null);
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
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__5914_SHARP_){
if((p1__5914_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__5914_SHARP_,base),cljs.core.quot(p1__5914_SHARP_,base)], null);
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
return (function (p1__5915_SHARP_){
if((p1__5915_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__5915_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__5915_SHARP_ - (10))));
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
var vec__5917 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5917,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5917,(1),null);
if(cljs.pprint.integral_QMARK_(arg)){
var neg_5920 = (arg < (0));
var pos_arg_5921 = ((neg_5920)?(- arg):arg);
var raw_str_5922 = cljs.pprint.opt_base_str(base,pos_arg_5921);
var group_str_5923 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_5920,pos_arg_5921,raw_str_5922,vec__5917,arg,arg_navigator__$1){
return (function (p1__5916_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__5916_SHARP_);
});})(neg_5920,pos_arg_5921,raw_str_5922,vec__5917,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_5922));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_5922);
var signed_str_5924 = ((neg_5920)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_5923)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_5923)].join(''):group_str_5923
));
var padded_str_5925 = (((signed_str_5924.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_5924.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_5924)].join(''):signed_str_5924);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_5925], 0));
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
var G__5926 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__5927 = (pos - (1));
var G__5928 = cljs.core.first(remainder);
var G__5929 = cljs.core.next(remainder);
acc = G__5926;
pos = G__5927;
this$ = G__5928;
remainder = G__5929;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__5930 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5930,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5930,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_5933 = (((arg < (0)))?(- arg):arg);
var parts_5934 = cljs.pprint.remainders((1000),abs_arg_5933);
if((cljs.core.count(parts_5934) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_5935 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_5934);
var full_str_5936 = cljs.pprint.add_english_scales(parts_strs_5935,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_5936)].join('')], 0));
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
var vec__5937 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5937,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5937,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_5940 = (((arg < (0)))?(- arg):arg);
var parts_5941 = cljs.pprint.remainders((1000),abs_arg_5940);
if((cljs.core.count(parts_5941) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_5942 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_5941));
var head_str_5943 = cljs.pprint.add_english_scales(parts_strs_5942,(1));
var tail_str_5944 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_5941));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((!(cljs.core.empty_QMARK_(head_str_5943)))) && ((!(cljs.core.empty_QMARK_(tail_str_5944))))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_5943),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_5944)].join(''):(((!(cljs.core.empty_QMARK_(head_str_5943))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_5943),"th"].join(''):tail_str_5944
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_5945 = cljs.core.rem(arg,(100));
var not_teens_5946 = ((((11) < low_two_digits_5945)) || (((19) > low_two_digits_5945)));
var low_digit_5947 = cljs.core.rem(low_two_digits_5945,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((low_digit_5947 === (1))) && (not_teens_5946)))?"st":(((((low_digit_5947 === (2))) && (not_teens_5946)))?"nd":(((((low_digit_5947 === (3))) && (not_teens_5946)))?"rd":"th"
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
var vec__5948 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5948,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5948,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_5951 = cljs.pprint.remainders((10),arg);
var acc_5952 = cljs.core.PersistentVector.EMPTY;
var pos_5953 = (cljs.core.count(digits_5951) - (1));
var digits_5954__$1 = digits_5951;
while(true){
if(cljs.core.empty_QMARK_(digits_5954__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_5952)], 0));
} else {
var digit_5955 = cljs.core.first(digits_5954__$1);
var G__5956 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_5955))?acc_5952:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_5952,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_5953),(digit_5955 - (1)))));
var G__5957 = (pos_5953 - (1));
var G__5958 = cljs.core.next(digits_5954__$1);
acc_5952 = G__5956;
pos_5953 = G__5957;
digits_5954__$1 = G__5958;
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
var vec__5959 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5959,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5959,(1),null);
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
var vec__5962 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5962,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5962,(1),null);
var pred__5965_5972 = cljs.core._EQ_;
var expr__5966_5973 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__5968 = "o";
var G__5969 = expr__5966_5973;
return (pred__5965_5972.cljs$core$IFn$_invoke$arity$2 ? pred__5965_5972.cljs$core$IFn$_invoke$arity$2(G__5968,G__5969) : pred__5965_5972.call(null,G__5968,G__5969));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__5970 = "u";
var G__5971 = expr__5966_5973;
return (pred__5965_5972.cljs$core$IFn$_invoke$arity$2 ? pred__5965_5972.cljs$core$IFn$_invoke$arity$2(G__5970,G__5971) : pred__5965_5972.call(null,G__5970,G__5971));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__5965_5972.cljs$core$IFn$_invoke$arity$2 ? pred__5965_5972.cljs$core$IFn$_invoke$arity$2(null,expr__5966_5973) : pred__5965_5972.call(null,null,expr__5966_5973)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__5966_5973)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__5974 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5974,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5974,(1),null);
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
var vec__5977 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5977,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5977,(1),null);
var vec__5980 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5980,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5980,(1),null);
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
var vec__5983 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5983,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5983,(1),null);
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
var G__5986 = (i - (1));
i = G__5986;
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
var vec__5987 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5987,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5987,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5987,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5987,(3),null);
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
var vec__5990 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5990,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5990,(1),null);
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
var vec__5993 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5993,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5993,(1),null);
var vec__5996 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5996,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5996,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__5999 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5999,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5999,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__4047__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp)));
var vec__6002 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6002,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6002,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6002,(2),null);
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
var len_6005 = cljs.core.count(fixed_repr__$1);
var signed_len_6006 = (cljs.core.truth_(add_sign)?(len_6005 + (1)):len_6005);
var prepend_zero_6007__$1 = ((prepend_zero) && ((!((signed_len_6006 >= w)))));
var append_zero_6008__$1 = ((append_zero) && ((!((signed_len_6006 >= w)))));
var full_len_6009 = ((((prepend_zero_6007__$1) || (append_zero_6008__$1)))?(signed_len_6006 + (1)):signed_len_6006);
if(cljs.core.truth_((function (){var and__4036__auto__ = (full_len_6009 > w);
if(and__4036__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4036__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_6009),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_6007__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_6008__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__6010 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6010,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6010,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__6016_6026 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__6017_6027 = G__6016_6026;
var mantissa_6028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6017_6027,(0),null);
var exp_6029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6017_6027,(1),null);
var G__6016_6030__$1 = G__6016_6026;
while(true){
var vec__6020_6031 = G__6016_6030__$1;
var mantissa_6032__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6020_6031,(0),null);
var exp_6033__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6020_6031,(1),null);
var w_6034 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_6035 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_6036 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_6037 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_6038 = (function (){var or__4047__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "E";
}
})();
var add_sign_6039 = (function (){var or__4047__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_6040 = (k_6037 <= (0));
var scaled_exp_6041 = (exp_6033__$1 - (k_6037 - (1)));
var scaled_exp_str_6042 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_6041));
var scaled_exp_str_6043__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_6038),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_6041 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_6036)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_6036 - cljs.core.count(scaled_exp_str_6042)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_6042)].join('');
var exp_width_6044 = cljs.core.count(scaled_exp_str_6043__$1);
var base_mantissa_width_6045 = cljs.core.count(mantissa_6032__$1);
var scaled_mantissa_6046 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_6037),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_6032__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_6035)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_6035 - (base_mantissa_width_6045 - (1))) - (((k_6037 < (0)))?(- k_6037):(0))),"0")):null))].join('');
var w_mantissa_6047 = (cljs.core.truth_(w_6034)?(w_6034 - exp_width_6044):null);
var vec__6023_6048 = cljs.pprint.round_str(scaled_mantissa_6046,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_6037,(0)))?(d_6035 - (1)):(((k_6037 > (0)))?d_6035:(((k_6037 < (0)))?(d_6035 - (1)):null))),(cljs.core.truth_(w_mantissa_6047)?(w_mantissa_6047 - (cljs.core.truth_(add_sign_6039)?(1):(0))):null));
var rounded_mantissa_6049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6023_6048,(0),null);
var __6050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6023_6048,(1),null);
var incr_exp_6051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6023_6048,(2),null);
var full_mantissa_6052 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_6049,k_6037);
var append_zero_6053 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_6037,cljs.core.count(rounded_mantissa_6049))) && ((d_6035 == null)));
if(cljs.core.not(incr_exp_6051)){
if(cljs.core.truth_(w_6034)){
var len_6054 = (cljs.core.count(full_mantissa_6052) + exp_width_6044);
var signed_len_6055 = (cljs.core.truth_(add_sign_6039)?(len_6054 + (1)):len_6054);
var prepend_zero_6056__$1 = ((prepend_zero_6040) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_6055,w_6034)))));
var full_len_6057 = ((prepend_zero_6056__$1)?(signed_len_6055 + (1)):signed_len_6055);
var append_zero_6058__$1 = ((append_zero_6053) && ((full_len_6057 < w_6034)));
if(cljs.core.truth_((function (){var and__4036__auto__ = (function (){var or__4047__auto__ = (full_len_6057 > w_6034);
if(or__4047__auto__){
return or__4047__auto__;
} else {
var and__4036__auto__ = e_6036;
if(cljs.core.truth_(and__4036__auto__)){
return ((exp_width_6044 - (2)) > e_6036);
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
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_6034,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_6034 - full_len_6057) - ((append_zero_6058__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_6039)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_6056__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_6052),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_6058__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_6043__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_6039)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_6040)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_6052),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_6053)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_6043__$1)].join('')], 0));
}
} else {
var G__6059 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_6049,(exp_6033__$1 + (1))], null);
G__6016_6030__$1 = G__6059;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__6060 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6060,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6060,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__6063 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6063,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6063,(1),null);
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
var vec__6066 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6066,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6066,(1),null);
var vec__6069 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6069,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6069,(1),null);
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
var vec__6072 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6072,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6072,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6072,(2),null);
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
var vec__6075 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6075,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6075,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses)))))?cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__6078 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6078,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6078,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__6081 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6081,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6081,(1),null);
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
var vec__6084 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6084,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6084,(1),null);
var vec__6087 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6087,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6087,(1),null);
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
var G__6090 = (count + (1));
var G__6091 = iter_result;
var G__6092 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__6090;
args__$1 = G__6091;
last_pos = G__6092;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__6093 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6093,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6093,(1),null);
var vec__6096 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6096,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6096,(1),null);
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
var G__6099 = (count + (1));
var G__6100 = cljs.core.next(arg_list__$1);
count = G__6099;
arg_list__$1 = G__6100;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__6101 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6101,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6101,(1),null);
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
var G__6104 = (count + (1));
var G__6105 = iter_result;
var G__6106 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__6104;
navigator__$2 = G__6105;
last_pos = G__6106;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__6107 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6107,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6107,(1),null);
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
var vec__6110 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6110,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6110,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__6113 = (count + (1));
var G__6114 = navigator__$3;
count = G__6113;
navigator__$2 = G__6114;
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
var vec__6115 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__6118 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__6119 = (new cljs.core.StringBufferWriter(sb));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__6119;

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__6118;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6115,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6115,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__6120 = cljs.core.next(clauses__$1);
var G__6121 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__6122 = iter_result;
clauses__$1 = G__6120;
acc = G__6121;
navigator__$1 = G__6122;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__6123 = (function (){var temp__5720__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5720__auto__)){
var else$ = temp__5720__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__6126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6123,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6126,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6123,(1),null);
var navigator__$1 = (function (){var or__4047__auto__ = new_navigator;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return navigator;
}
})();
var vec__6129 = (function (){var temp__5720__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5720__auto__)){
var p = temp__5720__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6129,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6129,(1),null);
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
var vec__6132 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6132,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6132,(1),null);
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

var slots_6135__$1 = slots;
var extra_pad_6136__$1 = extra_pad;
var strs_6137__$1 = strs;
var pad_only_6138 = (function (){var or__4047__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_6137__$1),(1))) && (cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq(strs_6137__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_6138))?cljs.core.first(strs_6137__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__4047__auto__ = pad_only_6138;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = cljs.core.next(strs_6137__$1);
if(or__4047__auto____$1){
return or__4047__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_6136__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__6139 = (slots_6135__$1 - (1));
var G__6140 = (extra_pad_6136__$1 - (1));
var G__6141 = (cljs.core.truth_(pad_only_6138)?strs_6137__$1:cljs.core.next(strs_6137__$1));
var G__6142 = false;
slots_6135__$1 = G__6139;
extra_pad_6136__$1 = G__6140;
strs_6137__$1 = G__6141;
pad_only_6138 = G__6142;
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
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint6143 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint6143 = (function (writer,meta6144){
this.writer = writer;
this.meta6144 = meta6144;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint6143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6145,meta6144__$1){
var self__ = this;
var _6145__$1 = this;
return (new cljs.pprint.t_cljs$pprint6143(self__.writer,meta6144__$1));
});

cljs.pprint.t_cljs$pprint6143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6145){
var self__ = this;
var _6145__$1 = this;
return self__.meta6144;
});

cljs.pprint.t_cljs$pprint6143.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint6143.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__6146 = cljs.core._EQ_;
var expr__6147 = cljs.core.type(x);
if(cljs.core.truth_((pred__6146.cljs$core$IFn$_invoke$arity$2 ? pred__6146.cljs$core$IFn$_invoke$arity$2(String,expr__6147) : pred__6146.call(null,String,expr__6147)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__6146.cljs$core$IFn$_invoke$arity$2 ? pred__6146.cljs$core$IFn$_invoke$arity$2(Number,expr__6147) : pred__6146.call(null,Number,expr__6147)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__6147)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint6143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta6144], null);
});

cljs.pprint.t_cljs$pprint6143.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint6143.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint6143";

cljs.pprint.t_cljs$pprint6143.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.pprint/t_cljs$pprint6143");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint6143.
 */
cljs.pprint.__GT_t_cljs$pprint6143 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint6143(writer__$1,meta6144){
return (new cljs.pprint.t_cljs$pprint6143(writer__$1,meta6144));
});

}

return (new cljs.pprint.t_cljs$pprint6143(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint6149 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint6149 = (function (writer,meta6150){
this.writer = writer;
this.meta6150 = meta6150;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint6149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6151,meta6150__$1){
var self__ = this;
var _6151__$1 = this;
return (new cljs.pprint.t_cljs$pprint6149(self__.writer,meta6150__$1));
});

cljs.pprint.t_cljs$pprint6149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6151){
var self__ = this;
var _6151__$1 = this;
return self__.meta6150;
});

cljs.pprint.t_cljs$pprint6149.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint6149.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__6152 = cljs.core._EQ_;
var expr__6153 = cljs.core.type(x);
if(cljs.core.truth_((pred__6152.cljs$core$IFn$_invoke$arity$2 ? pred__6152.cljs$core$IFn$_invoke$arity$2(String,expr__6153) : pred__6152.call(null,String,expr__6153)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__6152.cljs$core$IFn$_invoke$arity$2 ? pred__6152.cljs$core$IFn$_invoke$arity$2(Number,expr__6153) : pred__6152.call(null,Number,expr__6153)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__6153)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint6149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta6150], null);
});

cljs.pprint.t_cljs$pprint6149.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint6149.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint6149";

cljs.pprint.t_cljs$pprint6149.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.pprint/t_cljs$pprint6149");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint6149.
 */
cljs.pprint.__GT_t_cljs$pprint6149 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint6149(writer__$1,meta6150){
return (new cljs.pprint.t_cljs$pprint6149(writer__$1,meta6150));
});

}

return (new cljs.pprint.t_cljs$pprint6149(writer,cljs.core.PersistentArrayMap.EMPTY));
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
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint6155 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint6155 = (function (writer,last_was_whitespace_QMARK_,meta6156){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta6156 = meta6156;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint6155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_6157,meta6156__$1){
var self__ = this;
var _6157__$1 = this;
return (new cljs.pprint.t_cljs$pprint6155(self__.writer,self__.last_was_whitespace_QMARK_,meta6156__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint6155.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_6157){
var self__ = this;
var _6157__$1 = this;
return self__.meta6156;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint6155.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint6155.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__6158 = cljs.core._EQ_;
var expr__6159 = cljs.core.type(x);
if(cljs.core.truth_((pred__6158.cljs$core$IFn$_invoke$arity$2 ? pred__6158.cljs$core$IFn$_invoke$arity$2(String,expr__6159) : pred__6158.call(null,String,expr__6159)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,(function (){var G__6161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__6161);
})());
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__6158.cljs$core$IFn$_invoke$arity$2 ? pred__6158.cljs$core$IFn$_invoke$arity$2(Number,expr__6159) : pred__6158.call(null,Number,expr__6159)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__6159)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint6155.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta6156], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint6155.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint6155.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint6155";

cljs.pprint.t_cljs$pprint6155.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.pprint/t_cljs$pprint6155");
});})(last_was_whitespace_QMARK_))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint6155.
 */
cljs.pprint.__GT_t_cljs$pprint6155 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint6155(writer__$1,last_was_whitespace_QMARK___$1,meta6156){
return (new cljs.pprint.t_cljs$pprint6155(writer__$1,last_was_whitespace_QMARK___$1,meta6156));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint6155(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint6162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint6162 = (function (writer,capped,meta6163){
this.writer = writer;
this.capped = capped;
this.meta6163 = meta6163;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint6162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_6164,meta6163__$1){
var self__ = this;
var _6164__$1 = this;
return (new cljs.pprint.t_cljs$pprint6162(self__.writer,self__.capped,meta6163__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint6162.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_6164){
var self__ = this;
var _6164__$1 = this;
return self__.meta6163;
});})(capped))
;

cljs.pprint.t_cljs$pprint6162.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint6162.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__6165 = cljs.core._EQ_;
var expr__6166 = cljs.core.type(x);
if(cljs.core.truth_((pred__6165.cljs$core$IFn$_invoke$arity$2 ? pred__6165.cljs$core$IFn$_invoke$arity$2(String,expr__6166) : pred__6165.call(null,String,expr__6166)))){
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
if(cljs.core.truth_((pred__6165.cljs$core$IFn$_invoke$arity$2 ? pred__6165.cljs$core$IFn$_invoke$arity$2(Number,expr__6166) : pred__6165.call(null,Number,expr__6166)))){
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__6166)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint6162.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta6163], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint6162.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint6162.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint6162";

cljs.pprint.t_cljs$pprint6162.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.pprint/t_cljs$pprint6162");
});})(capped))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint6162.
 */
cljs.pprint.__GT_t_cljs$pprint6162 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint6162(writer__$1,capped__$1,meta6163){
return (new cljs.pprint.t_cljs$pprint6162(writer__$1,capped__$1,meta6163));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint6162(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR__orig_val__6168 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__6169 = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__6169;

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__6168;
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
var colnum_6171 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_6172 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_6173 = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_6174 = (((current_6173 < colnum_6171))?(colnum_6171 - current_6173):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_6172,(0)))?(0):(colinc_6172 - cljs.core.rem((current_6173 - colnum_6171),colinc_6172))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_6174," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_6175 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_6176 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_6177 = (colrel_6175 + cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_6178 = (((colinc_6176 > (0)))?cljs.core.rem(start_col_6177,colinc_6176):(0));
var space_count_6179 = (colrel_6175 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_6178))?(0):(colinc_6176 - offset_6178)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_6179," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__6180 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6180,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6180,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6183_6187 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6184_6188 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6185_6189 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6186_6190 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6185_6189;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6186_6190;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6184_6188;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6183_6187;
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
return (function (p1__6191_SHARP_,p2__6192_SHARP_,p3__6193_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__6191_SHARP_,p2__6192_SHARP_,p3__6193_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__6194_SHARP_,p2__6195_SHARP_,p3__6196_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__6194_SHARP_,p2__6195_SHARP_,p3__6196_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__6197_SHARP_,p2__6198_SHARP_,p3__6199_SHARP_){
return cljs.pprint.format_integer((10),p1__6197_SHARP_,p2__6198_SHARP_,p3__6199_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__6200_SHARP_,p2__6201_SHARP_,p3__6202_SHARP_){
return cljs.pprint.format_integer((2),p1__6200_SHARP_,p2__6201_SHARP_,p3__6202_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__6203_SHARP_,p2__6204_SHARP_,p3__6205_SHARP_){
return cljs.pprint.format_integer((8),p1__6203_SHARP_,p2__6204_SHARP_,p3__6205_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__6206_SHARP_,p2__6207_SHARP_,p3__6208_SHARP_){
return cljs.pprint.format_integer((16),p1__6206_SHARP_,p2__6207_SHARP_,p3__6208_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__6209_SHARP_,p2__6210_SHARP_,p3__6211_SHARP_){
return cljs.pprint.format_integer(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__6209_SHARP_),p1__6209_SHARP_,p2__6210_SHARP_,p3__6211_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4036__auto__;
}
})())){
return (function (p1__6212_SHARP_,p2__6213_SHARP_,p3__6214_SHARP_){
return cljs.pprint.format_old_roman(p1__6212_SHARP_,p2__6213_SHARP_,p3__6214_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__6215_SHARP_,p2__6216_SHARP_,p3__6217_SHARP_){
return cljs.pprint.format_new_roman(p1__6215_SHARP_,p2__6216_SHARP_,p3__6217_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__6218_SHARP_,p2__6219_SHARP_,p3__6220_SHARP_){
return cljs.pprint.format_ordinal_english(p1__6218_SHARP_,p2__6219_SHARP_,p3__6220_SHARP_);
});
} else {
return (function (p1__6221_SHARP_,p2__6222_SHARP_,p3__6223_SHARP_){
return cljs.pprint.format_cardinal_english(p1__6221_SHARP_,p2__6222_SHARP_,p3__6223_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__6233 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6233,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6233,(1),null);
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
var n__4518__auto___6251 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_6252 = (0);
while(true){
if((i_6252 < n__4518__auto___6251)){
cljs.pprint.prn();

var G__6253 = (i_6252 + (1));
i_6252 = G__6253;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_6254 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_6254 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__4518__auto___6255 = (cnt_6254 - (1));
var i_6256 = (0);
while(true){
if((i_6256 < n__4518__auto___6255)){
cljs.pprint.prn();

var G__6257 = (i_6256 + (1));
i_6256 = G__6257;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4518__auto___6258 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_6259 = (0);
while(true){
if((i_6259 < n__4518__auto___6258)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__6260 = (i_6259 + (1));
i_6259 = G__6260;
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
return (function (p1__6224_SHARP_,p2__6225_SHARP_,p3__6226_SHARP_){
return cljs.pprint.relative_tabulation(p1__6224_SHARP_,p2__6225_SHARP_,p3__6226_SHARP_);
});
} else {
return (function (p1__6227_SHARP_,p2__6228_SHARP_,p3__6229_SHARP_){
return cljs.pprint.absolute_tabulation(p1__6227_SHARP_,p2__6228_SHARP_,p3__6229_SHARP_);
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
var vec__6236 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6236,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6236,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__6239 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6239,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6239,(1),null);
var vec__6242 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6242,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6242,(1),null);
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
return (function (p1__6230_SHARP_,p2__6231_SHARP_,p3__6232_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__6230_SHARP_,p2__6231_SHARP_,p3__6232_SHARP_);
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
var vec__6245 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6245,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6245,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__6248 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6248,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6248,(1),null);
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
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__6261){
var vec__6262 = p__6261;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6262,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6262,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6262,(2),null);
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
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__6265){
var vec__6266 = p__6265;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6266,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6266,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__6269){
var vec__6270 = p__6269;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6270,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6270,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6270,(2),null);
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

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__6273_SHARP_,p2__6274_SHARP_){
var val = cljs.core.first(p1__6273_SHARP_);
if((!((((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__6274_SHARP_)),cljs.core.type(val))))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(p2__6274_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__6273_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__4434__auto__ = (function cljs$pprint$map_params_$_iter__6278(s__6279){
return (new cljs.core.LazySeq(null,(function (){
var s__6279__$1 = s__6279;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__6279__$1);
if(temp__5720__auto__){
var s__6279__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6279__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__6279__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__6281 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__6280 = (0);
while(true){
if((i__6280 < size__4433__auto__)){
var vec__6282 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__6280);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6282,(0),null);
var vec__6285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6282,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6285,(0),null);
cljs.core.chunk_append(b__6281,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__6294 = (i__6280 + (1));
i__6280 = G__6294;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6281),cljs$pprint$map_params_$_iter__6278(cljs.core.chunk_rest(s__6279__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6281),null);
}
} else {
var vec__6288 = cljs.core.first(s__6279__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6288,(0),null);
var vec__6291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6288,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6291,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__6278(cljs.core.rest(s__6279__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__6275_SHARP_,p2__6276_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__6275_SHARP_,p2__6276_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6277_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__6277_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__6295 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6295,(0),null);
var vec__6298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6295,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6298,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6298,(1),null);
var vec__6301 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6301,(0),null);
var vec__6304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6301,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6304,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6304,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6304,(2),null);
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

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__6307 = cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__6307.cljs$core$IFn$_invoke$arity$2 ? fexpr__6307.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__6307.call(null,params,offset__$2));
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
var vec__6308 = cljs.pprint.collect_clauses(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6308,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6308,(1),null);
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
return cljs.core.second(cljs.pprint.consume((function (p__6311){
var vec__6312 = p__6311;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6312,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6312,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6312,(2),null);
var vec__6315 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6315,(0),null);
var vec__6318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6315,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6318,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6318,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6318,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6318,(3),null);
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
var _STAR_format_str_STAR__orig_val__6321 = cljs.pprint._STAR_format_str_STAR_;
var _STAR_format_str_STAR__temp_val__6322 = format_str;
cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__temp_val__6322;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR__orig_val__6321,_STAR_format_str_STAR__temp_val__6322){
return (function (p__6323){
var vec__6324 = p__6323;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6324,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6324,(1),null);
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
});})(_STAR_format_str_STAR__orig_val__6321,_STAR_format_str_STAR__temp_val__6322))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__orig_val__6321;
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
var G__6327 = cljs.core.next(format__$1);
format__$1 = G__6327;
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
var G__6329 = arguments.length;
switch (G__6329) {
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
var _STAR_out_STAR__orig_val__6330 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__6331 = wrapped_stream;
cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__6331;

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
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__6330;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.pprint.abort_QMARK_(context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__6332 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6332,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6332,(1),null);
var vec__6335 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6335,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6335,(1),null);
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
var macro_char = (function (){var G__6339 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__6339) : cljs.pprint.reader_macros.call(null,G__6339));
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
var _STAR_current_level_STAR__orig_val__6340_6345 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6341_6346 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6342_6347 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6343_6348 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6342_6347;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6343_6348;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count6344_6349 = (0);
var alis_6350__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count6344_6349 < cljs.core._STAR_print_length_STAR_)))){
if(alis_6350__$1){
cljs.pprint.write_out(cljs.core.first(alis_6350__$1));

if(cljs.core.next(alis_6350__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__6351 = (length_count6344_6349 + (1));
var G__6352 = cljs.core.next(alis_6350__$1);
length_count6344_6349 = G__6351;
alis_6350__$1 = G__6352;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6341_6346;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6340_6345;
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
var _STAR_current_level_STAR__orig_val__6353_6358 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6354_6359 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6355_6360 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6356_6361 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6355_6360;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6356_6361;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count6357_6362 = (0);
var aseq_6363 = cljs.core.seq(avec);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count6357_6362 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_6363){
cljs.pprint.write_out(cljs.core.first(aseq_6363));

if(cljs.core.next(aseq_6363)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__6364 = (length_count6357_6362 + (1));
var G__6365 = cljs.core.next(aseq_6363);
length_count6357_6362 = G__6364;
aseq_6363 = G__6365;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6354_6359;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6353_6358;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__5381__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (format_in__5381__auto__,cf__5382__auto__){
return (function() { 
var G__6366__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6366 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6367__i = 0, G__6367__a = new Array(arguments.length -  0);
while (G__6367__i < G__6367__a.length) {G__6367__a[G__6367__i] = arguments[G__6367__i + 0]; ++G__6367__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6367__a,0,null);
} 
return G__6366__delegate.call(this,args__5383__auto__);};
G__6366.cljs$lang$maxFixedArity = 0;
G__6366.cljs$lang$applyTo = (function (arglist__6368){
var args__5383__auto__ = cljs.core.seq(arglist__6368);
return G__6366__delegate(args__5383__auto__);
});
G__6366.cljs$core$IFn$_invoke$arity$variadic = G__6366__delegate;
return G__6366;
})()
;
;})(format_in__5381__auto__,cf__5382__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__6369 = (((!(cljs.core.record_QMARK_(amap))))?(function (){var fexpr__6372 = new cljs.core.Var(function(){return cljs.core.lift_ns;},cljs.core.cst$sym$cljs$core_SLASH_lift_DASH_ns,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$lift_DASH_ns,"cljs/core.cljs",15,1,10127,10127,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__6372.cljs$core$IFn$_invoke$arity$1 ? fexpr__6372.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__6372.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6369,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6369,(1),null);
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
var _STAR_current_level_STAR__orig_val__6373_6382 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6374_6383 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6375_6384 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6376_6385 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6375_6384;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6376_6385;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count6377_6386 = (0);
var aseq_6387 = cljs.core.seq(amap__$1);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count6377_6386 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_6387){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6378_6388 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6379_6389 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6380_6390 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6381_6391 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6380_6390;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6381_6391;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_6387));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_6387)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6379_6389;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6378_6388;
}}


if(cljs.core.next(aseq_6387)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__6392 = (length_count6377_6386 + (1));
var G__6393 = cljs.core.next(aseq_6387);
length_count6377_6386 = G__6392;
aseq_6387 = G__6393;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6374_6383;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6373_6382;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__5381__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (format_in__5381__auto__,cf__5382__auto__){
return (function() { 
var G__6394__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6394 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6395__i = 0, G__6395__a = new Array(arguments.length -  0);
while (G__6395__i < G__6395__a.length) {G__6395__a[G__6395__i] = arguments[G__6395__i + 0]; ++G__6395__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6395__a,0,null);
} 
return G__6394__delegate.call(this,args__5383__auto__);};
G__6394.cljs$lang$maxFixedArity = 0;
G__6394.cljs$lang$applyTo = (function (arglist__6396){
var args__5383__auto__ = cljs.core.seq(arglist__6396);
return G__6394__delegate(args__5383__auto__);
});
G__6394.cljs$core$IFn$_invoke$arity$variadic = G__6394__delegate;
return G__6394;
})()
;
;})(format_in__5381__auto__,cf__5382__auto__))
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
var _STAR_current_level_STAR__orig_val__6397_6403 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6398_6404 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6399_6405 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6400_6406 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6399_6405;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6400_6406;

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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6398_6404;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6397_6403;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__5381__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (format_in__5381__auto__,cf__5382__auto__){
return (function() { 
var G__6407__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6407 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6408__i = 0, G__6408__a = new Array(arguments.length -  0);
while (G__6408__i < G__6408__a.length) {G__6408__a[G__6408__i] = arguments[G__6408__i + 0]; ++G__6408__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6408__a,0,null);
} 
return G__6407__delegate.call(this,args__5383__auto__);};
G__6407.cljs$lang$maxFixedArity = 0;
G__6407.cljs$lang$applyTo = (function (arglist__6409){
var args__5383__auto__ = cljs.core.seq(arglist__6409);
return G__6407__delegate(args__5383__auto__);
});
G__6407.cljs$core$IFn$_invoke$arity$variadic = G__6407__delegate;
return G__6407;
})()
;
;})(format_in__5381__auto__,cf__5382__auto__))
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
var hierarchy__4528__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__6411 = cljs.core.get_global_hierarchy;
return (fexpr__6411.cljs$core$IFn$_invoke$arity$0 ? fexpr__6411.cljs$core$IFn$_invoke$arity$0() : fexpr__6411.call(null));
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
var vec__6412 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6412,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6412,(1),null);
var vec__6415 = reference;
var seq__6416 = cljs.core.seq(vec__6415);
var first__6417 = cljs.core.first(seq__6416);
var seq__6416__$1 = cljs.core.next(seq__6416);
var keyw = first__6417;
var args = seq__6416__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6418_6438 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6419_6439 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6420_6440 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6421_6441 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6420_6440;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6421_6441;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__6422_6442 = (function (){var format_in__5381__auto__ = "~w~:i";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (format_in__5381__auto__,cf__5382__auto__,_STAR_current_level_STAR__orig_val__6418_6438,_STAR_current_length_STAR__orig_val__6419_6439,_STAR_current_level_STAR__temp_val__6420_6440,_STAR_current_length_STAR__temp_val__6421_6441,vec__6412,start,end,vec__6415,seq__6416,first__6417,seq__6416__$1,keyw,args){
return (function() { 
var G__6443__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6443 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6444__i = 0, G__6444__a = new Array(arguments.length -  0);
while (G__6444__i < G__6444__a.length) {G__6444__a[G__6444__i] = arguments[G__6444__i + 0]; ++G__6444__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6444__a,0,null);
} 
return G__6443__delegate.call(this,args__5383__auto__);};
G__6443.cljs$lang$maxFixedArity = 0;
G__6443.cljs$lang$applyTo = (function (arglist__6445){
var args__5383__auto__ = cljs.core.seq(arglist__6445);
return G__6443__delegate(args__5383__auto__);
});
G__6443.cljs$core$IFn$_invoke$arity$variadic = G__6443__delegate;
return G__6443;
})()
;
;})(format_in__5381__auto__,cf__5382__auto__,_STAR_current_level_STAR__orig_val__6418_6438,_STAR_current_length_STAR__orig_val__6419_6439,_STAR_current_level_STAR__temp_val__6420_6440,_STAR_current_length_STAR__temp_val__6421_6441,vec__6412,start,end,vec__6415,seq__6416,first__6417,seq__6416__$1,keyw,args))
})();
(fexpr__6422_6442.cljs$core$IFn$_invoke$arity$1 ? fexpr__6422_6442.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__6422_6442.call(null,keyw));

var args_6446__$1 = args;
while(true){
if(cljs.core.seq(args_6446__$1)){
var fexpr__6423_6447 = (function (){var format_in__5381__auto__ = " ";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (args_6446__$1,format_in__5381__auto__,cf__5382__auto__,_STAR_current_level_STAR__orig_val__6418_6438,_STAR_current_length_STAR__orig_val__6419_6439,_STAR_current_level_STAR__temp_val__6420_6440,_STAR_current_length_STAR__temp_val__6421_6441,vec__6412,start,end,vec__6415,seq__6416,first__6417,seq__6416__$1,keyw,args){
return (function() { 
var G__6448__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6448 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6449__i = 0, G__6449__a = new Array(arguments.length -  0);
while (G__6449__i < G__6449__a.length) {G__6449__a[G__6449__i] = arguments[G__6449__i + 0]; ++G__6449__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6449__a,0,null);
} 
return G__6448__delegate.call(this,args__5383__auto__);};
G__6448.cljs$lang$maxFixedArity = 0;
G__6448.cljs$lang$applyTo = (function (arglist__6450){
var args__5383__auto__ = cljs.core.seq(arglist__6450);
return G__6448__delegate(args__5383__auto__);
});
G__6448.cljs$core$IFn$_invoke$arity$variadic = G__6448__delegate;
return G__6448;
})()
;
;})(args_6446__$1,format_in__5381__auto__,cf__5382__auto__,_STAR_current_level_STAR__orig_val__6418_6438,_STAR_current_length_STAR__orig_val__6419_6439,_STAR_current_level_STAR__temp_val__6420_6440,_STAR_current_length_STAR__temp_val__6421_6441,vec__6412,start,end,vec__6415,seq__6416,first__6417,seq__6416__$1,keyw,args))
})();
(fexpr__6423_6447.cljs$core$IFn$_invoke$arity$0 ? fexpr__6423_6447.cljs$core$IFn$_invoke$arity$0() : fexpr__6423_6447.call(null));

var arg_6451 = cljs.core.first(args_6446__$1);
if(cljs.core.sequential_QMARK_(arg_6451)){
var vec__6424_6452 = cljs.pprint.brackets(arg_6451);
var start_6453__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6424_6452,(0),null);
var end_6454__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6424_6452,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6427_6455 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6428_6456 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6429_6457 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6430_6458 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6429_6457;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6430_6458;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_6453__$1,null,end_6454__$1);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_6451),(3))) && ((cljs.core.second(arg_6451) instanceof cljs.core.Keyword)))){
var vec__6431_6459 = arg_6451;
var ns_6460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6431_6459,(0),null);
var kw_6461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6431_6459,(1),null);
var lis_6462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6431_6459,(2),null);
var fexpr__6434_6463 = (function (){var format_in__5381__auto__ = "~w ~w ";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (args_6446__$1,format_in__5381__auto__,cf__5382__auto__,vec__6431_6459,ns_6460,kw_6461,lis_6462,_STAR_current_level_STAR__orig_val__6427_6455,_STAR_current_length_STAR__orig_val__6428_6456,_STAR_current_level_STAR__temp_val__6429_6457,_STAR_current_length_STAR__temp_val__6430_6458,vec__6424_6452,start_6453__$1,end_6454__$1,arg_6451,_STAR_current_level_STAR__orig_val__6418_6438,_STAR_current_length_STAR__orig_val__6419_6439,_STAR_current_level_STAR__temp_val__6420_6440,_STAR_current_length_STAR__temp_val__6421_6441,vec__6412,start,end,vec__6415,seq__6416,first__6417,seq__6416__$1,keyw,args){
return (function() { 
var G__6464__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6464 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6465__i = 0, G__6465__a = new Array(arguments.length -  0);
while (G__6465__i < G__6465__a.length) {G__6465__a[G__6465__i] = arguments[G__6465__i + 0]; ++G__6465__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6465__a,0,null);
} 
return G__6464__delegate.call(this,args__5383__auto__);};
G__6464.cljs$lang$maxFixedArity = 0;
G__6464.cljs$lang$applyTo = (function (arglist__6466){
var args__5383__auto__ = cljs.core.seq(arglist__6466);
return G__6464__delegate(args__5383__auto__);
});
G__6464.cljs$core$IFn$_invoke$arity$variadic = G__6464__delegate;
return G__6464;
})()
;
;})(args_6446__$1,format_in__5381__auto__,cf__5382__auto__,vec__6431_6459,ns_6460,kw_6461,lis_6462,_STAR_current_level_STAR__orig_val__6427_6455,_STAR_current_length_STAR__orig_val__6428_6456,_STAR_current_level_STAR__temp_val__6429_6457,_STAR_current_length_STAR__temp_val__6430_6458,vec__6424_6452,start_6453__$1,end_6454__$1,arg_6451,_STAR_current_level_STAR__orig_val__6418_6438,_STAR_current_length_STAR__orig_val__6419_6439,_STAR_current_level_STAR__temp_val__6420_6440,_STAR_current_length_STAR__temp_val__6421_6441,vec__6412,start,end,vec__6415,seq__6416,first__6417,seq__6416__$1,keyw,args))
})();
(fexpr__6434_6463.cljs$core$IFn$_invoke$arity$2 ? fexpr__6434_6463.cljs$core$IFn$_invoke$arity$2(ns_6460,kw_6461) : fexpr__6434_6463.call(null,ns_6460,kw_6461));

if(cljs.core.sequential_QMARK_(lis_6462)){
var fexpr__6435_6467 = (function (){var format_in__5381__auto__ = ((cljs.core.vector_QMARK_(lis_6462))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (args_6446__$1,format_in__5381__auto__,cf__5382__auto__,vec__6431_6459,ns_6460,kw_6461,lis_6462,_STAR_current_level_STAR__orig_val__6427_6455,_STAR_current_length_STAR__orig_val__6428_6456,_STAR_current_level_STAR__temp_val__6429_6457,_STAR_current_length_STAR__temp_val__6430_6458,vec__6424_6452,start_6453__$1,end_6454__$1,arg_6451,_STAR_current_level_STAR__orig_val__6418_6438,_STAR_current_length_STAR__orig_val__6419_6439,_STAR_current_level_STAR__temp_val__6420_6440,_STAR_current_length_STAR__temp_val__6421_6441,vec__6412,start,end,vec__6415,seq__6416,first__6417,seq__6416__$1,keyw,args){
return (function() { 
var G__6468__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6468 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6469__i = 0, G__6469__a = new Array(arguments.length -  0);
while (G__6469__i < G__6469__a.length) {G__6469__a[G__6469__i] = arguments[G__6469__i + 0]; ++G__6469__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6469__a,0,null);
} 
return G__6468__delegate.call(this,args__5383__auto__);};
G__6468.cljs$lang$maxFixedArity = 0;
G__6468.cljs$lang$applyTo = (function (arglist__6470){
var args__5383__auto__ = cljs.core.seq(arglist__6470);
return G__6468__delegate(args__5383__auto__);
});
G__6468.cljs$core$IFn$_invoke$arity$variadic = G__6468__delegate;
return G__6468;
})()
;
;})(args_6446__$1,format_in__5381__auto__,cf__5382__auto__,vec__6431_6459,ns_6460,kw_6461,lis_6462,_STAR_current_level_STAR__orig_val__6427_6455,_STAR_current_length_STAR__orig_val__6428_6456,_STAR_current_level_STAR__temp_val__6429_6457,_STAR_current_length_STAR__temp_val__6430_6458,vec__6424_6452,start_6453__$1,end_6454__$1,arg_6451,_STAR_current_level_STAR__orig_val__6418_6438,_STAR_current_length_STAR__orig_val__6419_6439,_STAR_current_level_STAR__temp_val__6420_6440,_STAR_current_length_STAR__temp_val__6421_6441,vec__6412,start,end,vec__6415,seq__6416,first__6417,seq__6416__$1,keyw,args))
})();
(fexpr__6435_6467.cljs$core$IFn$_invoke$arity$1 ? fexpr__6435_6467.cljs$core$IFn$_invoke$arity$1(lis_6462) : fexpr__6435_6467.call(null,lis_6462));
} else {
cljs.pprint.write_out(lis_6462);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__5381__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (args_6446__$1,format_in__5381__auto__,cf__5382__auto__,_STAR_current_level_STAR__orig_val__6427_6455,_STAR_current_length_STAR__orig_val__6428_6456,_STAR_current_level_STAR__temp_val__6429_6457,_STAR_current_length_STAR__temp_val__6430_6458,vec__6424_6452,start_6453__$1,end_6454__$1,arg_6451,_STAR_current_level_STAR__orig_val__6418_6438,_STAR_current_length_STAR__orig_val__6419_6439,_STAR_current_level_STAR__temp_val__6420_6440,_STAR_current_length_STAR__temp_val__6421_6441,vec__6412,start,end,vec__6415,seq__6416,first__6417,seq__6416__$1,keyw,args){
return (function() { 
var G__6471__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6471 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6472__i = 0, G__6472__a = new Array(arguments.length -  0);
while (G__6472__i < G__6472__a.length) {G__6472__a[G__6472__i] = arguments[G__6472__i + 0]; ++G__6472__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6472__a,0,null);
} 
return G__6471__delegate.call(this,args__5383__auto__);};
G__6471.cljs$lang$maxFixedArity = 0;
G__6471.cljs$lang$applyTo = (function (arglist__6473){
var args__5383__auto__ = cljs.core.seq(arglist__6473);
return G__6471__delegate(args__5383__auto__);
});
G__6471.cljs$core$IFn$_invoke$arity$variadic = G__6471__delegate;
return G__6471;
})()
;
;})(args_6446__$1,format_in__5381__auto__,cf__5382__auto__,_STAR_current_level_STAR__orig_val__6427_6455,_STAR_current_length_STAR__orig_val__6428_6456,_STAR_current_level_STAR__temp_val__6429_6457,_STAR_current_length_STAR__temp_val__6430_6458,vec__6424_6452,start_6453__$1,end_6454__$1,arg_6451,_STAR_current_level_STAR__orig_val__6418_6438,_STAR_current_length_STAR__orig_val__6419_6439,_STAR_current_level_STAR__temp_val__6420_6440,_STAR_current_length_STAR__temp_val__6421_6441,vec__6412,start,end,vec__6415,seq__6416,first__6417,seq__6416__$1,keyw,args))
})(),arg_6451);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6428_6456;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6427_6455;
}}


if(cljs.core.next(args_6446__$1)){
var fexpr__6436_6474 = (function (){var format_in__5381__auto__ = "~_";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (args_6446__$1,format_in__5381__auto__,cf__5382__auto__,vec__6424_6452,start_6453__$1,end_6454__$1,arg_6451,_STAR_current_level_STAR__orig_val__6418_6438,_STAR_current_length_STAR__orig_val__6419_6439,_STAR_current_level_STAR__temp_val__6420_6440,_STAR_current_length_STAR__temp_val__6421_6441,vec__6412,start,end,vec__6415,seq__6416,first__6417,seq__6416__$1,keyw,args){
return (function() { 
var G__6475__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6475 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6476__i = 0, G__6476__a = new Array(arguments.length -  0);
while (G__6476__i < G__6476__a.length) {G__6476__a[G__6476__i] = arguments[G__6476__i + 0]; ++G__6476__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6476__a,0,null);
} 
return G__6475__delegate.call(this,args__5383__auto__);};
G__6475.cljs$lang$maxFixedArity = 0;
G__6475.cljs$lang$applyTo = (function (arglist__6477){
var args__5383__auto__ = cljs.core.seq(arglist__6477);
return G__6475__delegate(args__5383__auto__);
});
G__6475.cljs$core$IFn$_invoke$arity$variadic = G__6475__delegate;
return G__6475;
})()
;
;})(args_6446__$1,format_in__5381__auto__,cf__5382__auto__,vec__6424_6452,start_6453__$1,end_6454__$1,arg_6451,_STAR_current_level_STAR__orig_val__6418_6438,_STAR_current_length_STAR__orig_val__6419_6439,_STAR_current_level_STAR__temp_val__6420_6440,_STAR_current_length_STAR__temp_val__6421_6441,vec__6412,start,end,vec__6415,seq__6416,first__6417,seq__6416__$1,keyw,args))
})();
(fexpr__6436_6474.cljs$core$IFn$_invoke$arity$0 ? fexpr__6436_6474.cljs$core$IFn$_invoke$arity$0() : fexpr__6436_6474.call(null));
} else {
}
} else {
cljs.pprint.write_out(arg_6451);

if(cljs.core.next(args_6446__$1)){
var fexpr__6437_6478 = (function (){var format_in__5381__auto__ = "~:_";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (args_6446__$1,format_in__5381__auto__,cf__5382__auto__,arg_6451,_STAR_current_level_STAR__orig_val__6418_6438,_STAR_current_length_STAR__orig_val__6419_6439,_STAR_current_level_STAR__temp_val__6420_6440,_STAR_current_length_STAR__temp_val__6421_6441,vec__6412,start,end,vec__6415,seq__6416,first__6417,seq__6416__$1,keyw,args){
return (function() { 
var G__6479__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6479 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6480__i = 0, G__6480__a = new Array(arguments.length -  0);
while (G__6480__i < G__6480__a.length) {G__6480__a[G__6480__i] = arguments[G__6480__i + 0]; ++G__6480__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6480__a,0,null);
} 
return G__6479__delegate.call(this,args__5383__auto__);};
G__6479.cljs$lang$maxFixedArity = 0;
G__6479.cljs$lang$applyTo = (function (arglist__6481){
var args__5383__auto__ = cljs.core.seq(arglist__6481);
return G__6479__delegate(args__5383__auto__);
});
G__6479.cljs$core$IFn$_invoke$arity$variadic = G__6479__delegate;
return G__6479;
})()
;
;})(args_6446__$1,format_in__5381__auto__,cf__5382__auto__,arg_6451,_STAR_current_level_STAR__orig_val__6418_6438,_STAR_current_length_STAR__orig_val__6419_6439,_STAR_current_level_STAR__temp_val__6420_6440,_STAR_current_length_STAR__temp_val__6421_6441,vec__6412,start,end,vec__6415,seq__6416,first__6417,seq__6416__$1,keyw,args))
})();
(fexpr__6437_6478.cljs$core$IFn$_invoke$arity$0 ? fexpr__6437_6478.cljs$core$IFn$_invoke$arity$0() : fexpr__6437_6478.call(null));
} else {
}
}

var G__6482 = cljs.core.next(args_6446__$1);
args_6446__$1 = G__6482;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6419_6439;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6418_6438;
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
var vec__6483 = alis;
var seq__6484 = cljs.core.seq(vec__6483);
var first__6485 = cljs.core.first(seq__6484);
var seq__6484__$1 = cljs.core.next(seq__6484);
var ns_sym = first__6485;
var first__6485__$1 = cljs.core.first(seq__6484__$1);
var seq__6484__$2 = cljs.core.next(seq__6484__$1);
var ns_name = first__6485__$1;
var stuff = seq__6484__$2;
var vec__6486 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6486,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6486,(1),null);
var vec__6489 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6489,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6489,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6492_6501 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6493_6502 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6494_6503 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6495_6504 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6494_6503;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6495_6504;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__6496_6505 = (function (){var format_in__5381__auto__ = "~w ~1I~@_~w";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (format_in__5381__auto__,cf__5382__auto__,_STAR_current_level_STAR__orig_val__6492_6501,_STAR_current_length_STAR__orig_val__6493_6502,_STAR_current_level_STAR__temp_val__6494_6503,_STAR_current_length_STAR__temp_val__6495_6504,vec__6483,seq__6484,first__6485,seq__6484__$1,ns_sym,first__6485__$1,seq__6484__$2,ns_name,stuff,vec__6486,doc_str,stuff__$1,vec__6489,attr_map,references){
return (function() { 
var G__6506__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6506 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6507__i = 0, G__6507__a = new Array(arguments.length -  0);
while (G__6507__i < G__6507__a.length) {G__6507__a[G__6507__i] = arguments[G__6507__i + 0]; ++G__6507__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6507__a,0,null);
} 
return G__6506__delegate.call(this,args__5383__auto__);};
G__6506.cljs$lang$maxFixedArity = 0;
G__6506.cljs$lang$applyTo = (function (arglist__6508){
var args__5383__auto__ = cljs.core.seq(arglist__6508);
return G__6506__delegate(args__5383__auto__);
});
G__6506.cljs$core$IFn$_invoke$arity$variadic = G__6506__delegate;
return G__6506;
})()
;
;})(format_in__5381__auto__,cf__5382__auto__,_STAR_current_level_STAR__orig_val__6492_6501,_STAR_current_length_STAR__orig_val__6493_6502,_STAR_current_level_STAR__temp_val__6494_6503,_STAR_current_length_STAR__temp_val__6495_6504,vec__6483,seq__6484,first__6485,seq__6484__$1,ns_sym,first__6485__$1,seq__6484__$2,ns_name,stuff,vec__6486,doc_str,stuff__$1,vec__6489,attr_map,references))
})();
(fexpr__6496_6505.cljs$core$IFn$_invoke$arity$2 ? fexpr__6496_6505.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__6496_6505.call(null,ns_sym,ns_name));

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
var fexpr__6497_6509 = (function (){var format_in__5381__auto__ = "~@:_";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (format_in__5381__auto__,cf__5382__auto__,_STAR_current_level_STAR__orig_val__6492_6501,_STAR_current_length_STAR__orig_val__6493_6502,_STAR_current_level_STAR__temp_val__6494_6503,_STAR_current_length_STAR__temp_val__6495_6504,vec__6483,seq__6484,first__6485,seq__6484__$1,ns_sym,first__6485__$1,seq__6484__$2,ns_name,stuff,vec__6486,doc_str,stuff__$1,vec__6489,attr_map,references){
return (function() { 
var G__6510__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6510 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6511__i = 0, G__6511__a = new Array(arguments.length -  0);
while (G__6511__i < G__6511__a.length) {G__6511__a[G__6511__i] = arguments[G__6511__i + 0]; ++G__6511__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6511__a,0,null);
} 
return G__6510__delegate.call(this,args__5383__auto__);};
G__6510.cljs$lang$maxFixedArity = 0;
G__6510.cljs$lang$applyTo = (function (arglist__6512){
var args__5383__auto__ = cljs.core.seq(arglist__6512);
return G__6510__delegate(args__5383__auto__);
});
G__6510.cljs$core$IFn$_invoke$arity$variadic = G__6510__delegate;
return G__6510;
})()
;
;})(format_in__5381__auto__,cf__5382__auto__,_STAR_current_level_STAR__orig_val__6492_6501,_STAR_current_length_STAR__orig_val__6493_6502,_STAR_current_level_STAR__temp_val__6494_6503,_STAR_current_length_STAR__temp_val__6495_6504,vec__6483,seq__6484,first__6485,seq__6484__$1,ns_sym,first__6485__$1,seq__6484__$2,ns_name,stuff,vec__6486,doc_str,stuff__$1,vec__6489,attr_map,references))
})();
(fexpr__6497_6509.cljs$core$IFn$_invoke$arity$0 ? fexpr__6497_6509.cljs$core$IFn$_invoke$arity$0() : fexpr__6497_6509.call(null));
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
var G__6499_6513 = attr_map;
var G__6500_6514 = cljs.core.seq(references);
var fexpr__6498_6515 = (function (){var format_in__5381__auto__ = "~w~:[~;~:@_~]";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (format_in__5381__auto__,cf__5382__auto__,G__6499_6513,G__6500_6514,_STAR_current_level_STAR__orig_val__6492_6501,_STAR_current_length_STAR__orig_val__6493_6502,_STAR_current_level_STAR__temp_val__6494_6503,_STAR_current_length_STAR__temp_val__6495_6504,vec__6483,seq__6484,first__6485,seq__6484__$1,ns_sym,first__6485__$1,seq__6484__$2,ns_name,stuff,vec__6486,doc_str,stuff__$1,vec__6489,attr_map,references){
return (function() { 
var G__6516__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6516 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6517__i = 0, G__6517__a = new Array(arguments.length -  0);
while (G__6517__i < G__6517__a.length) {G__6517__a[G__6517__i] = arguments[G__6517__i + 0]; ++G__6517__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6517__a,0,null);
} 
return G__6516__delegate.call(this,args__5383__auto__);};
G__6516.cljs$lang$maxFixedArity = 0;
G__6516.cljs$lang$applyTo = (function (arglist__6518){
var args__5383__auto__ = cljs.core.seq(arglist__6518);
return G__6516__delegate(args__5383__auto__);
});
G__6516.cljs$core$IFn$_invoke$arity$variadic = G__6516__delegate;
return G__6516;
})()
;
;})(format_in__5381__auto__,cf__5382__auto__,G__6499_6513,G__6500_6514,_STAR_current_level_STAR__orig_val__6492_6501,_STAR_current_length_STAR__orig_val__6493_6502,_STAR_current_level_STAR__temp_val__6494_6503,_STAR_current_length_STAR__temp_val__6495_6504,vec__6483,seq__6484,first__6485,seq__6484__$1,ns_sym,first__6485__$1,seq__6484__$2,ns_name,stuff,vec__6486,doc_str,stuff__$1,vec__6489,attr_map,references))
})();
(fexpr__6498_6515.cljs$core$IFn$_invoke$arity$2 ? fexpr__6498_6515.cljs$core$IFn$_invoke$arity$2(G__6499_6513,G__6500_6514) : fexpr__6498_6515.call(null,G__6499_6513,G__6500_6514));
} else {
}

var references_6519__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_6519__$1));

var temp__5720__auto___6520 = cljs.core.next(references_6519__$1);
if(temp__5720__auto___6520){
var references_6521__$2 = temp__5720__auto___6520;
cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__6522 = references_6521__$2;
references_6519__$1 = G__6522;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6493_6502;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6492_6501;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__5381__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (format_in__5381__auto__,cf__5382__auto__){
return (function() { 
var G__6523__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6523 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6524__i = 0, G__6524__a = new Array(arguments.length -  0);
while (G__6524__i < G__6524__a.length) {G__6524__a[G__6524__i] = arguments[G__6524__i + 0]; ++G__6524__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6524__a,0,null);
} 
return G__6523__delegate.call(this,args__5383__auto__);};
G__6523.cljs$lang$maxFixedArity = 0;
G__6523.cljs$lang$applyTo = (function (arglist__6525){
var args__5383__auto__ = cljs.core.seq(arglist__6525);
return G__6523__delegate(args__5383__auto__);
});
G__6523.cljs$core$IFn$_invoke$arity$variadic = G__6523__delegate;
return G__6523;
})()
;
;})(format_in__5381__auto__,cf__5382__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__6526_6529 = (function (){var format_in__5381__auto__ = " ~_";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (format_in__5381__auto__,cf__5382__auto__){
return (function() { 
var G__6530__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6530 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6531__i = 0, G__6531__a = new Array(arguments.length -  0);
while (G__6531__i < G__6531__a.length) {G__6531__a[G__6531__i] = arguments[G__6531__i + 0]; ++G__6531__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6531__a,0,null);
} 
return G__6530__delegate.call(this,args__5383__auto__);};
G__6530.cljs$lang$maxFixedArity = 0;
G__6530.cljs$lang$applyTo = (function (arglist__6532){
var args__5383__auto__ = cljs.core.seq(arglist__6532);
return G__6530__delegate(args__5383__auto__);
});
G__6530.cljs$core$IFn$_invoke$arity$variadic = G__6530__delegate;
return G__6530;
})()
;
;})(format_in__5381__auto__,cf__5382__auto__))
})();
(fexpr__6526_6529.cljs$core$IFn$_invoke$arity$0 ? fexpr__6526_6529.cljs$core$IFn$_invoke$arity$0() : fexpr__6526_6529.call(null));
} else {
var fexpr__6527_6533 = (function (){var format_in__5381__auto__ = " ~@_";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (format_in__5381__auto__,cf__5382__auto__){
return (function() { 
var G__6534__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6534 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6535__i = 0, G__6535__a = new Array(arguments.length -  0);
while (G__6535__i < G__6535__a.length) {G__6535__a[G__6535__i] = arguments[G__6535__i + 0]; ++G__6535__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6535__a,0,null);
} 
return G__6534__delegate.call(this,args__5383__auto__);};
G__6534.cljs$lang$maxFixedArity = 0;
G__6534.cljs$lang$applyTo = (function (arglist__6536){
var args__5383__auto__ = cljs.core.seq(arglist__6536);
return G__6534__delegate(args__5383__auto__);
});
G__6534.cljs$core$IFn$_invoke$arity$variadic = G__6534__delegate;
return G__6534;
})()
;
;})(format_in__5381__auto__,cf__5382__auto__))
})();
(fexpr__6527_6533.cljs$core$IFn$_invoke$arity$0 ? fexpr__6527_6533.cljs$core$IFn$_invoke$arity$0() : fexpr__6527_6533.call(null));
}

var fexpr__6528 = (function (){var format_in__5381__auto__ = "~{~w~^ ~_~}";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (format_in__5381__auto__,cf__5382__auto__){
return (function() { 
var G__6537__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6537 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6538__i = 0, G__6538__a = new Array(arguments.length -  0);
while (G__6538__i < G__6538__a.length) {G__6538__a[G__6538__i] = arguments[G__6538__i + 0]; ++G__6538__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6538__a,0,null);
} 
return G__6537__delegate.call(this,args__5383__auto__);};
G__6537.cljs$lang$maxFixedArity = 0;
G__6537.cljs$lang$applyTo = (function (arglist__6539){
var args__5383__auto__ = cljs.core.seq(arglist__6539);
return G__6537__delegate(args__5383__auto__);
});
G__6537.cljs$core$IFn$_invoke$arity$variadic = G__6537__delegate;
return G__6537;
})()
;
;})(format_in__5381__auto__,cf__5382__auto__))
})();
return (fexpr__6528.cljs$core$IFn$_invoke$arity$1 ? fexpr__6528.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__6528.call(null,alis));
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__6540 = (function (){var format_in__5381__auto__ = " ~_~{~w~^ ~_~}";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (format_in__5381__auto__,cf__5382__auto__){
return (function() { 
var G__6541__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6541 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6542__i = 0, G__6542__a = new Array(arguments.length -  0);
while (G__6542__i < G__6542__a.length) {G__6542__a[G__6542__i] = arguments[G__6542__i + 0]; ++G__6542__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6542__a,0,null);
} 
return G__6541__delegate.call(this,args__5383__auto__);};
G__6541.cljs$lang$maxFixedArity = 0;
G__6541.cljs$lang$applyTo = (function (arglist__6543){
var args__5383__auto__ = cljs.core.seq(arglist__6543);
return G__6541__delegate(args__5383__auto__);
});
G__6541.cljs$core$IFn$_invoke$arity$variadic = G__6541__delegate;
return G__6541;
})()
;
;})(format_in__5381__auto__,cf__5382__auto__))
})();
return (fexpr__6540.cljs$core$IFn$_invoke$arity$1 ? fexpr__6540.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__6540.call(null,alis));
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__6544 = alis;
var seq__6545 = cljs.core.seq(vec__6544);
var first__6546 = cljs.core.first(seq__6545);
var seq__6545__$1 = cljs.core.next(seq__6545);
var defn_sym = first__6546;
var first__6546__$1 = cljs.core.first(seq__6545__$1);
var seq__6545__$2 = cljs.core.next(seq__6545__$1);
var defn_name = first__6546__$1;
var stuff = seq__6545__$2;
var vec__6547 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6547,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6547,(1),null);
var vec__6550 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6550,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6550,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6553_6560 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6554_6561 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6555_6562 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6556_6563 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6555_6562;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6556_6563;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__6557_6564 = (function (){var format_in__5381__auto__ = "~w ~1I~@_~w";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (format_in__5381__auto__,cf__5382__auto__,_STAR_current_level_STAR__orig_val__6553_6560,_STAR_current_length_STAR__orig_val__6554_6561,_STAR_current_level_STAR__temp_val__6555_6562,_STAR_current_length_STAR__temp_val__6556_6563,vec__6544,seq__6545,first__6546,seq__6545__$1,defn_sym,first__6546__$1,seq__6545__$2,defn_name,stuff,vec__6547,doc_str,stuff__$1,vec__6550,attr_map,stuff__$2){
return (function() { 
var G__6565__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6565 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6566__i = 0, G__6566__a = new Array(arguments.length -  0);
while (G__6566__i < G__6566__a.length) {G__6566__a[G__6566__i] = arguments[G__6566__i + 0]; ++G__6566__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6566__a,0,null);
} 
return G__6565__delegate.call(this,args__5383__auto__);};
G__6565.cljs$lang$maxFixedArity = 0;
G__6565.cljs$lang$applyTo = (function (arglist__6567){
var args__5383__auto__ = cljs.core.seq(arglist__6567);
return G__6565__delegate(args__5383__auto__);
});
G__6565.cljs$core$IFn$_invoke$arity$variadic = G__6565__delegate;
return G__6565;
})()
;
;})(format_in__5381__auto__,cf__5382__auto__,_STAR_current_level_STAR__orig_val__6553_6560,_STAR_current_length_STAR__orig_val__6554_6561,_STAR_current_level_STAR__temp_val__6555_6562,_STAR_current_length_STAR__temp_val__6556_6563,vec__6544,seq__6545,first__6546,seq__6545__$1,defn_sym,first__6546__$1,seq__6545__$2,defn_name,stuff,vec__6547,doc_str,stuff__$1,vec__6550,attr_map,stuff__$2))
})();
(fexpr__6557_6564.cljs$core$IFn$_invoke$arity$2 ? fexpr__6557_6564.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__6557_6564.call(null,defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__6558_6568 = (function (){var format_in__5381__auto__ = " ~_~w";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (format_in__5381__auto__,cf__5382__auto__,_STAR_current_level_STAR__orig_val__6553_6560,_STAR_current_length_STAR__orig_val__6554_6561,_STAR_current_level_STAR__temp_val__6555_6562,_STAR_current_length_STAR__temp_val__6556_6563,vec__6544,seq__6545,first__6546,seq__6545__$1,defn_sym,first__6546__$1,seq__6545__$2,defn_name,stuff,vec__6547,doc_str,stuff__$1,vec__6550,attr_map,stuff__$2){
return (function() { 
var G__6569__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6569 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6570__i = 0, G__6570__a = new Array(arguments.length -  0);
while (G__6570__i < G__6570__a.length) {G__6570__a[G__6570__i] = arguments[G__6570__i + 0]; ++G__6570__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6570__a,0,null);
} 
return G__6569__delegate.call(this,args__5383__auto__);};
G__6569.cljs$lang$maxFixedArity = 0;
G__6569.cljs$lang$applyTo = (function (arglist__6571){
var args__5383__auto__ = cljs.core.seq(arglist__6571);
return G__6569__delegate(args__5383__auto__);
});
G__6569.cljs$core$IFn$_invoke$arity$variadic = G__6569__delegate;
return G__6569;
})()
;
;})(format_in__5381__auto__,cf__5382__auto__,_STAR_current_level_STAR__orig_val__6553_6560,_STAR_current_length_STAR__orig_val__6554_6561,_STAR_current_level_STAR__temp_val__6555_6562,_STAR_current_length_STAR__temp_val__6556_6563,vec__6544,seq__6545,first__6546,seq__6545__$1,defn_sym,first__6546__$1,seq__6545__$2,defn_name,stuff,vec__6547,doc_str,stuff__$1,vec__6550,attr_map,stuff__$2))
})();
(fexpr__6558_6568.cljs$core$IFn$_invoke$arity$1 ? fexpr__6558_6568.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__6558_6568.call(null,doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__6559_6572 = (function (){var format_in__5381__auto__ = " ~_~w";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (format_in__5381__auto__,cf__5382__auto__,_STAR_current_level_STAR__orig_val__6553_6560,_STAR_current_length_STAR__orig_val__6554_6561,_STAR_current_level_STAR__temp_val__6555_6562,_STAR_current_length_STAR__temp_val__6556_6563,vec__6544,seq__6545,first__6546,seq__6545__$1,defn_sym,first__6546__$1,seq__6545__$2,defn_name,stuff,vec__6547,doc_str,stuff__$1,vec__6550,attr_map,stuff__$2){
return (function() { 
var G__6573__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6573 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6574__i = 0, G__6574__a = new Array(arguments.length -  0);
while (G__6574__i < G__6574__a.length) {G__6574__a[G__6574__i] = arguments[G__6574__i + 0]; ++G__6574__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6574__a,0,null);
} 
return G__6573__delegate.call(this,args__5383__auto__);};
G__6573.cljs$lang$maxFixedArity = 0;
G__6573.cljs$lang$applyTo = (function (arglist__6575){
var args__5383__auto__ = cljs.core.seq(arglist__6575);
return G__6573__delegate(args__5383__auto__);
});
G__6573.cljs$core$IFn$_invoke$arity$variadic = G__6573__delegate;
return G__6573;
})()
;
;})(format_in__5381__auto__,cf__5382__auto__,_STAR_current_level_STAR__orig_val__6553_6560,_STAR_current_length_STAR__orig_val__6554_6561,_STAR_current_level_STAR__temp_val__6555_6562,_STAR_current_length_STAR__temp_val__6556_6563,vec__6544,seq__6545,first__6546,seq__6545__$1,defn_sym,first__6546__$1,seq__6545__$2,defn_name,stuff,vec__6547,doc_str,stuff__$1,vec__6550,attr_map,stuff__$2))
})();
(fexpr__6559_6572.cljs$core$IFn$_invoke$arity$1 ? fexpr__6559_6572.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__6559_6572.call(null,attr_map));
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6554_6561;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6553_6560;
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
var _STAR_current_level_STAR__orig_val__6576_6585 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6577_6586 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6578_6587 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6579_6588 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6578_6587;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6579_6588;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count6580_6589 = (0);
var binding_6590 = binding_vec;
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count6580_6589 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq(binding_6590)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6581_6591 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6582_6592 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6583_6593 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6584_6594 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6583_6593;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6584_6594;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_6590));

if(cljs.core.next(binding_6590)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(binding_6590));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6582_6592;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6581_6591;
}}


if(cljs.core.next(cljs.core.rest(binding_6590))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__6595 = (length_count6580_6589 + (1));
var G__6596 = cljs.core.next(cljs.core.rest(binding_6590));
length_count6580_6589 = G__6595;
binding_6590 = G__6596;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6577_6586;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6576_6585;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6597_6604 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6598_6605 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6599_6606 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6600_6607 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6599_6606;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6600_6607;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis))))){
var fexpr__6601_6608 = (function (){var format_in__5381__auto__ = "~w ~1I~@_";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (format_in__5381__auto__,cf__5382__auto__,_STAR_current_level_STAR__orig_val__6597_6604,_STAR_current_length_STAR__orig_val__6598_6605,_STAR_current_level_STAR__temp_val__6599_6606,_STAR_current_length_STAR__temp_val__6600_6607,base_sym){
return (function() { 
var G__6609__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6609 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6610__i = 0, G__6610__a = new Array(arguments.length -  0);
while (G__6610__i < G__6610__a.length) {G__6610__a[G__6610__i] = arguments[G__6610__i + 0]; ++G__6610__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6610__a,0,null);
} 
return G__6609__delegate.call(this,args__5383__auto__);};
G__6609.cljs$lang$maxFixedArity = 0;
G__6609.cljs$lang$applyTo = (function (arglist__6611){
var args__5383__auto__ = cljs.core.seq(arglist__6611);
return G__6609__delegate(args__5383__auto__);
});
G__6609.cljs$core$IFn$_invoke$arity$variadic = G__6609__delegate;
return G__6609;
})()
;
;})(format_in__5381__auto__,cf__5382__auto__,_STAR_current_level_STAR__orig_val__6597_6604,_STAR_current_length_STAR__orig_val__6598_6605,_STAR_current_level_STAR__temp_val__6599_6606,_STAR_current_length_STAR__temp_val__6600_6607,base_sym))
})();
(fexpr__6601_6608.cljs$core$IFn$_invoke$arity$1 ? fexpr__6601_6608.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__6601_6608.call(null,base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__6603_6612 = cljs.core.next(cljs.core.rest(alis));
var fexpr__6602_6613 = (function (){var format_in__5381__auto__ = " ~_~{~w~^ ~_~}";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (format_in__5381__auto__,cf__5382__auto__,G__6603_6612,_STAR_current_level_STAR__orig_val__6597_6604,_STAR_current_length_STAR__orig_val__6598_6605,_STAR_current_level_STAR__temp_val__6599_6606,_STAR_current_length_STAR__temp_val__6600_6607,base_sym){
return (function() { 
var G__6614__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6614 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6615__i = 0, G__6615__a = new Array(arguments.length -  0);
while (G__6615__i < G__6615__a.length) {G__6615__a[G__6615__i] = arguments[G__6615__i + 0]; ++G__6615__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6615__a,0,null);
} 
return G__6614__delegate.call(this,args__5383__auto__);};
G__6614.cljs$lang$maxFixedArity = 0;
G__6614.cljs$lang$applyTo = (function (arglist__6616){
var args__5383__auto__ = cljs.core.seq(arglist__6616);
return G__6614__delegate(args__5383__auto__);
});
G__6614.cljs$core$IFn$_invoke$arity$variadic = G__6614__delegate;
return G__6614;
})()
;
;})(format_in__5381__auto__,cf__5382__auto__,G__6603_6612,_STAR_current_level_STAR__orig_val__6597_6604,_STAR_current_length_STAR__orig_val__6598_6605,_STAR_current_level_STAR__temp_val__6599_6606,_STAR_current_length_STAR__temp_val__6600_6607,base_sym))
})();
(fexpr__6602_6613.cljs$core$IFn$_invoke$arity$1 ? fexpr__6602_6613.cljs$core$IFn$_invoke$arity$1(G__6603_6612) : fexpr__6602_6613.call(null,G__6603_6612));
} else {
cljs.pprint.pprint_simple_code_list(alis);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6598_6605;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6597_6604;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__5381__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (format_in__5381__auto__,cf__5382__auto__){
return (function() { 
var G__6617__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6617 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6618__i = 0, G__6618__a = new Array(arguments.length -  0);
while (G__6618__i < G__6618__a.length) {G__6618__a[G__6618__i] = arguments[G__6618__i + 0]; ++G__6618__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6618__a,0,null);
} 
return G__6617__delegate.call(this,args__5383__auto__);};
G__6617.cljs$lang$maxFixedArity = 0;
G__6617.cljs$lang$applyTo = (function (arglist__6619){
var args__5383__auto__ = cljs.core.seq(arglist__6619);
return G__6617__delegate(args__5383__auto__);
});
G__6617.cljs$core$IFn$_invoke$arity$variadic = G__6617__delegate;
return G__6617;
})()
;
;})(format_in__5381__auto__,cf__5382__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6620_6629 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6621_6630 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6622_6631 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6623_6632 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6622_6631;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6623_6632;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var length_count6624_6633 = (0);
var alis_6634__$1 = cljs.core.next(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count6624_6633 < cljs.core._STAR_print_length_STAR_)))){
if(alis_6634__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6625_6635 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6626_6636 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6627_6637 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6628_6638 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6627_6637;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6628_6638;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_6634__$1));

if(cljs.core.next(alis_6634__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_6634__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6626_6636;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6625_6635;
}}


if(cljs.core.next(cljs.core.rest(alis_6634__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__6639 = (length_count6624_6633 + (1));
var G__6640 = cljs.core.next(cljs.core.rest(alis_6634__$1));
length_count6624_6633 = G__6639;
alis_6634__$1 = G__6640;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6621_6630;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6620_6629;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6641_6650 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6642_6651 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6643_6652 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6644_6653 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6643_6652;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6644_6653;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__5381__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (format_in__5381__auto__,cf__5382__auto__,_STAR_current_level_STAR__orig_val__6641_6650,_STAR_current_length_STAR__orig_val__6642_6651,_STAR_current_level_STAR__temp_val__6643_6652,_STAR_current_length_STAR__temp_val__6644_6653){
return (function() { 
var G__6654__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6654 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6655__i = 0, G__6655__a = new Array(arguments.length -  0);
while (G__6655__i < G__6655__a.length) {G__6655__a[G__6655__i] = arguments[G__6655__i + 0]; ++G__6655__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6655__a,0,null);
} 
return G__6654__delegate.call(this,args__5383__auto__);};
G__6654.cljs$lang$maxFixedArity = 0;
G__6654.cljs$lang$applyTo = (function (arglist__6656){
var args__5383__auto__ = cljs.core.seq(arglist__6656);
return G__6654__delegate(args__5383__auto__);
});
G__6654.cljs$core$IFn$_invoke$arity$variadic = G__6654__delegate;
return G__6654;
})()
;
;})(format_in__5381__auto__,cf__5382__auto__,_STAR_current_level_STAR__orig_val__6641_6650,_STAR_current_length_STAR__orig_val__6642_6651,_STAR_current_level_STAR__temp_val__6643_6652,_STAR_current_length_STAR__temp_val__6644_6653))
})(),alis);

var length_count6645_6657 = (0);
var alis_6658__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count6645_6657 < cljs.core._STAR_print_length_STAR_)))){
if(alis_6658__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6646_6659 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6647_6660 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6648_6661 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6649_6662 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6648_6661;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6649_6662;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_6658__$1));

if(cljs.core.next(alis_6658__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_6658__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6647_6660;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6646_6659;
}}


if(cljs.core.next(cljs.core.rest(alis_6658__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__6663 = (length_count6645_6657 + (1));
var G__6664 = cljs.core.next(cljs.core.rest(alis_6658__$1));
length_count6645_6657 = G__6663;
alis_6658__$1 = G__6664;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6642_6651;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6641_6650;
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
var _STAR_symbol_map_STAR__orig_val__6667 = cljs.pprint._STAR_symbol_map_STAR_;
var _STAR_symbol_map_STAR__temp_val__6668 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR__orig_val__6667,args,nlis){
return (function (p1__6665_SHARP_,p2__6666_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__6665_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__6666_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR__orig_val__6667,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));
cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__temp_val__6668;

try{var fexpr__6669 = (function (){var format_in__5381__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__5382__auto__ = ((typeof format_in__5381__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__5381__auto__) : cljs.pprint.cached_compile.call(null,format_in__5381__auto__)):format_in__5381__auto__);
return ((function (format_in__5381__auto__,cf__5382__auto__,_STAR_symbol_map_STAR__orig_val__6667,_STAR_symbol_map_STAR__temp_val__6668,args,nlis){
return (function() { 
var G__6670__delegate = function (args__5383__auto__){
var navigator__5384__auto__ = cljs.pprint.init_navigator(args__5383__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__5382__auto__,navigator__5384__auto__);
};
var G__6670 = function (var_args){
var args__5383__auto__ = null;
if (arguments.length > 0) {
var G__6671__i = 0, G__6671__a = new Array(arguments.length -  0);
while (G__6671__i < G__6671__a.length) {G__6671__a[G__6671__i] = arguments[G__6671__i + 0]; ++G__6671__i;}
  args__5383__auto__ = new cljs.core.IndexedSeq(G__6671__a,0,null);
} 
return G__6670__delegate.call(this,args__5383__auto__);};
G__6670.cljs$lang$maxFixedArity = 0;
G__6670.cljs$lang$applyTo = (function (arglist__6672){
var args__5383__auto__ = cljs.core.seq(arglist__6672);
return G__6670__delegate(args__5383__auto__);
});
G__6670.cljs$core$IFn$_invoke$arity$variadic = G__6670__delegate;
return G__6670;
})()
;
;})(format_in__5381__auto__,cf__5382__auto__,_STAR_symbol_map_STAR__orig_val__6667,_STAR_symbol_map_STAR__temp_val__6668,args,nlis))
})();
return (fexpr__6669.cljs$core$IFn$_invoke$arity$1 ? fexpr__6669.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__6669.call(null,nlis));
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__orig_val__6667;
}} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__6673_6678 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__6674_6679 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__6675_6680 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__6676_6681 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__6675_6680;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__6676_6681;

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

var length_count6677_6682 = (0);
var alis_6683__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count6677_6682 < cljs.core._STAR_print_length_STAR_)))){
if(alis_6683__$1){
cljs.pprint.write_out(cljs.core.first(alis_6683__$1));

if(cljs.core.next(alis_6683__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__6684 = (length_count6677_6682 + (1));
var G__6685 = cljs.core.next(alis_6683__$1);
length_count6677_6682 = G__6684;
alis_6683__$1 = G__6685;
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
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__6674_6679;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__6673_6678;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4434__auto__ = (function cljs$pprint$two_forms_$_iter__6686(s__6687){
return (new cljs.core.LazySeq(null,(function (){
var s__6687__$1 = s__6687;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__6687__$1);
if(temp__5720__auto__){
var s__6687__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6687__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__6687__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__6689 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__6688 = (0);
while(true){
if((i__6688 < size__4433__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__6688);
cljs.core.chunk_append(b__6689,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__6690 = (i__6688 + (1));
i__6688 = G__6690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6689),cljs$pprint$two_forms_$_iter__6686(cljs.core.chunk_rest(s__6687__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6689),null);
}
} else {
var x = cljs.core.first(s__6687__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__6686(cljs.core.rest(s__6687__$2)));
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
return (function (p1__6691_SHARP_){
var vec__6692 = p1__6691_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6692,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6692,(1),null);
if(cljs.core.not((function (){var or__4047__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__6691_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5718__auto__ = (function (){var G__6695 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__6695) : cljs.pprint._STAR_code_table_STAR_.call(null,G__6695));
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
var hierarchy__4528__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__6696 = cljs.core.get_global_hierarchy;
return (fexpr__6696.cljs$core$IFn$_invoke$arity$0 ? fexpr__6696.cljs$core$IFn$_invoke$arity$0() : fexpr__6696.call(null));
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
var G__6701 = arguments.length;
switch (G__6701) {
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6697_SHARP_){
return cljs.core.count(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__6697_SHARP_,k)));
}),rows));
}),ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths){
return (function (p1__6698_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__6698_SHARP_,"-"));
});})(widths))
,widths);
var fmt_row = ((function (widths,spacers){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__4434__auto__ = ((function (widths,spacers){
return (function cljs$pprint$iter__6702(s__6703){
return (new cljs.core.LazySeq(null,((function (widths,spacers){
return (function (){
var s__6703__$1 = s__6703;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__6703__$1);
if(temp__5720__auto__){
var s__6703__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6703__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__6703__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__6705 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__6704 = (0);
while(true){
if((i__6704 < size__4433__auto__)){
var vec__6706 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__6704);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6706,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6706,(1),null);
cljs.core.chunk_append(b__6705,cljs.pprint.add_padding(width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)));

var G__6717 = (i__6704 + (1));
i__6704 = G__6717;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6705),cljs$pprint$iter__6702(cljs.core.chunk_rest(s__6703__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6705),null);
}
} else {
var vec__6709 = cljs.core.first(s__6703__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6709,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6709,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),cljs$pprint$iter__6702(cljs.core.rest(s__6703__$2)));
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
return (function (p1__6699_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__6699_SHARP_);
});})(iter__4434__auto__,widths,spacers))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__6712 = cljs.core.seq(rows);
var chunk__6713 = null;
var count__6714 = (0);
var i__6715 = (0);
while(true){
if((i__6715 < count__6714)){
var row = chunk__6713.cljs$core$IIndexed$_nth$arity$2(null,i__6715);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__6718 = seq__6712;
var G__6719 = chunk__6713;
var G__6720 = count__6714;
var G__6721 = (i__6715 + (1));
seq__6712 = G__6718;
chunk__6713 = G__6719;
count__6714 = G__6720;
i__6715 = G__6721;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6712);
if(temp__5720__auto__){
var seq__6712__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6712__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__6712__$1);
var G__6722 = cljs.core.chunk_rest(seq__6712__$1);
var G__6723 = c__4461__auto__;
var G__6724 = cljs.core.count(c__4461__auto__);
var G__6725 = (0);
seq__6712 = G__6722;
chunk__6713 = G__6723;
count__6714 = G__6724;
i__6715 = G__6725;
continue;
} else {
var row = cljs.core.first(seq__6712__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__6726 = cljs.core.next(seq__6712__$1);
var G__6727 = null;
var G__6728 = (0);
var G__6729 = (0);
seq__6712 = G__6726;
chunk__6713 = G__6727;
count__6714 = G__6728;
i__6715 = G__6729;
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

