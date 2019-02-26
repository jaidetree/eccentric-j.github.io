// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('app.fx.drip');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('app.util');
app.fx.drip.drip = (function app$fx$drip$drip(p__6738){
var map__6739 = p__6738;
var map__6739__$1 = (((((!((map__6739 == null))))?(((((map__6739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6739):map__6739);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6739__$1,cljs.core.cst$kw$width);
var G__6741 = document.createElement("div");
G__6741.setAttribute("class","drip");

G__6741.setAttribute("style",["width:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px;height:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((5) + cljs.core.rand_int((10)))),"px"].join(''));

return G__6741;
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
var seq__6742 = cljs.core.seq(drips);
var chunk__6743 = null;
var count__6744 = (0);
var i__6745 = (0);
while(true){
if((i__6745 < count__6744)){
var drip = chunk__6743.cljs$core$IIndexed$_nth$arity$2(null,i__6745);
var max_height_6746 = (function (){var or__4047__auto__ = app.fx.drip.parse_max_height(drip);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (100);
}
})();
var min_height_6747 = app.fx.drip.calc_min_height(max_height_6746);
drip.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.rand_int(max_height_6746) + min_height_6747)),"px"].join('');


var G__6748 = seq__6742;
var G__6749 = chunk__6743;
var G__6750 = count__6744;
var G__6751 = (i__6745 + (1));
seq__6742 = G__6748;
chunk__6743 = G__6749;
count__6744 = G__6750;
i__6745 = G__6751;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6742);
if(temp__5720__auto__){
var seq__6742__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6742__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__6742__$1);
var G__6752 = cljs.core.chunk_rest(seq__6742__$1);
var G__6753 = c__4461__auto__;
var G__6754 = cljs.core.count(c__4461__auto__);
var G__6755 = (0);
seq__6742 = G__6752;
chunk__6743 = G__6753;
count__6744 = G__6754;
i__6745 = G__6755;
continue;
} else {
var drip = cljs.core.first(seq__6742__$1);
var max_height_6756 = (function (){var or__4047__auto__ = app.fx.drip.parse_max_height(drip);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (100);
}
})();
var min_height_6757 = app.fx.drip.calc_min_height(max_height_6756);
drip.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.rand_int(max_height_6756) + min_height_6757)),"px"].join('');


var G__6758 = cljs.core.next(seq__6742__$1);
var G__6759 = null;
var G__6760 = (0);
var G__6761 = (0);
seq__6742 = G__6758;
chunk__6743 = G__6759;
count__6744 = G__6760;
i__6745 = G__6761;
continue;
}
} else {
return null;
}
}
break;
}
});
