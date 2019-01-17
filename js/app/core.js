// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
app.core.drip = (function app$core$drip(p__5179){
var map__5180 = p__5179;
var map__5180__$1 = (((((!((map__5180 == null))))?(((((map__5180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5180):map__5180);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5180__$1,cljs.core.cst$kw$width);
var G__5182 = document.createElement("div");
G__5182.setAttribute("class","drip");

G__5182.setAttribute("style",["width:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px;height:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((5) + cljs.core.rand_int((10)))),"px"].join(''));

return G__5182;
});
app.core.parse_max_height = (function app$core$parse_max_height(el){
var max_height = el.style.maxHeight;
if(cljs.core.truth_(cljs.core.not_empty(max_height))){
return ((16) * cljs.core.re_find(/\d+/,max_height));
} else {
return null;
}
});
app.core.calc_min_height = (function app$core$calc_min_height(max_height){
return ((0.3 * max_height) | (0));
});
app.core.animate_drips = (function app$core$animate_drips(){
var drips = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(Array.from(document.querySelectorAll(".drip")));
var seq__5183 = cljs.core.seq(drips);
var chunk__5184 = null;
var count__5185 = (0);
var i__5186 = (0);
while(true){
if((i__5186 < count__5185)){
var drip = chunk__5184.cljs$core$IIndexed$_nth$arity$2(null,i__5186);
var max_height_5187 = (function (){var or__4047__auto__ = app.core.parse_max_height(drip);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (100);
}
})();
var min_height_5188 = app.core.calc_min_height(max_height_5187);
drip.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.rand_int(max_height_5187) + min_height_5188)),"px"].join('');


var G__5189 = seq__5183;
var G__5190 = chunk__5184;
var G__5191 = count__5185;
var G__5192 = (i__5186 + (1));
seq__5183 = G__5189;
chunk__5184 = G__5190;
count__5185 = G__5191;
i__5186 = G__5192;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__5183);
if(temp__5720__auto__){
var seq__5183__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5183__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__5183__$1);
var G__5193 = cljs.core.chunk_rest(seq__5183__$1);
var G__5194 = c__4461__auto__;
var G__5195 = cljs.core.count(c__4461__auto__);
var G__5196 = (0);
seq__5183 = G__5193;
chunk__5184 = G__5194;
count__5185 = G__5195;
i__5186 = G__5196;
continue;
} else {
var drip = cljs.core.first(seq__5183__$1);
var max_height_5197 = (function (){var or__4047__auto__ = app.core.parse_max_height(drip);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (100);
}
})();
var min_height_5198 = app.core.calc_min_height(max_height_5197);
drip.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.rand_int(max_height_5197) + min_height_5198)),"px"].join('');


var G__5199 = cljs.core.next(seq__5183__$1);
var G__5200 = null;
var G__5201 = (0);
var G__5202 = (0);
seq__5183 = G__5199;
chunk__5184 = G__5200;
count__5185 = G__5201;
i__5186 = G__5202;
continue;
}
} else {
return null;
}
}
break;
}
});
app.core.init = (function app$core$init(){
return setTimeout(app.core.animate_drips,(1000));
});
