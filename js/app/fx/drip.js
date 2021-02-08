// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('app.fx.drip');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('app.util');
app.fx.drip.drip = (function app$fx$drip$drip(p__5281){
var map__5282 = p__5281;
var map__5282__$1 = (((((!((map__5282 == null))))?(((((map__5282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5282):map__5282);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5282__$1,cljs.core.cst$kw$width);
var G__5284 = document.createElement("div");
G__5284.setAttribute("class","drip");

G__5284.setAttribute("style",["width:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px;height:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((5) + cljs.core.rand_int((10)))),"px"].join(''));

return G__5284;
});
app.fx.drip.parse_max_height = (function app$fx$drip$parse_max_height(el){
var max_height = el.style.maxHeight;
if(cljs.core.truth_(cljs.core.not_empty(max_height))){
return ((16) * cljs.core.re_find(/\d+/,max_height));
} else {
return null;
}
});
app.fx.drip.calc_min_height = (function app$fx$drip$calc_min_height(max_height){
return ((0.3 * max_height) | (0));
});
app.fx.drip.animate_drips = (function app$fx$drip$animate_drips(){
var drips = app.util.query_all(".drip");
var seq__5285 = cljs.core.seq(drips);
var chunk__5286 = null;
var count__5287 = (0);
var i__5288 = (0);
while(true){
if((i__5288 < count__5287)){
var drip = chunk__5286.cljs$core$IIndexed$_nth$arity$2(null,i__5288);
var max_height_5289 = (function (){var or__4047__auto__ = app.fx.drip.parse_max_height(drip);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (100);
}
})();
var min_height_5290 = app.fx.drip.calc_min_height(max_height_5289);
drip.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.rand_int(max_height_5289) + min_height_5290)),"px"].join('');


var G__5291 = seq__5285;
var G__5292 = chunk__5286;
var G__5293 = count__5287;
var G__5294 = (i__5288 + (1));
seq__5285 = G__5291;
chunk__5286 = G__5292;
count__5287 = G__5293;
i__5288 = G__5294;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__5285);
if(temp__5720__auto__){
var seq__5285__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5285__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__5285__$1);
var G__5295 = cljs.core.chunk_rest(seq__5285__$1);
var G__5296 = c__4461__auto__;
var G__5297 = cljs.core.count(c__4461__auto__);
var G__5298 = (0);
seq__5285 = G__5295;
chunk__5286 = G__5296;
count__5287 = G__5297;
i__5288 = G__5298;
continue;
} else {
var drip = cljs.core.first(seq__5285__$1);
var max_height_5299 = (function (){var or__4047__auto__ = app.fx.drip.parse_max_height(drip);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (100);
}
})();
var min_height_5300 = app.fx.drip.calc_min_height(max_height_5299);
drip.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.rand_int(max_height_5299) + min_height_5300)),"px"].join('');


var G__5301 = cljs.core.next(seq__5285__$1);
var G__5302 = null;
var G__5303 = (0);
var G__5304 = (0);
seq__5285 = G__5301;
chunk__5286 = G__5302;
count__5287 = G__5303;
i__5288 = G__5304;
continue;
}
} else {
return null;
}
}
break;
}
});
