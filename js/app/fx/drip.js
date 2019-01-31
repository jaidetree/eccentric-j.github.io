// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('app.fx.drip');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('app.util');
app.fx.drip.drip = (function app$fx$drip$drip(p__6736){
var map__6737 = p__6736;
var map__6737__$1 = (((((!((map__6737 == null))))?(((((map__6737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6737):map__6737);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6737__$1,cljs.core.cst$kw$width);
var G__6739 = document.createElement("div");
G__6739.setAttribute("class","drip");

G__6739.setAttribute("style",["width:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px;height:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((5) + cljs.core.rand_int((10)))),"px"].join(''));

return G__6739;
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
var seq__6740 = cljs.core.seq(drips);
var chunk__6741 = null;
var count__6742 = (0);
var i__6743 = (0);
while(true){
if((i__6743 < count__6742)){
var drip = chunk__6741.cljs$core$IIndexed$_nth$arity$2(null,i__6743);
var max_height_6744 = (function (){var or__4047__auto__ = app.fx.drip.parse_max_height(drip);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (100);
}
})();
var min_height_6745 = app.fx.drip.calc_min_height(max_height_6744);
drip.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.rand_int(max_height_6744) + min_height_6745)),"px"].join('');


var G__6746 = seq__6740;
var G__6747 = chunk__6741;
var G__6748 = count__6742;
var G__6749 = (i__6743 + (1));
seq__6740 = G__6746;
chunk__6741 = G__6747;
count__6742 = G__6748;
i__6743 = G__6749;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6740);
if(temp__5720__auto__){
var seq__6740__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6740__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__6740__$1);
var G__6750 = cljs.core.chunk_rest(seq__6740__$1);
var G__6751 = c__4461__auto__;
var G__6752 = cljs.core.count(c__4461__auto__);
var G__6753 = (0);
seq__6740 = G__6750;
chunk__6741 = G__6751;
count__6742 = G__6752;
i__6743 = G__6753;
continue;
} else {
var drip = cljs.core.first(seq__6740__$1);
var max_height_6754 = (function (){var or__4047__auto__ = app.fx.drip.parse_max_height(drip);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (100);
}
})();
var min_height_6755 = app.fx.drip.calc_min_height(max_height_6754);
drip.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.rand_int(max_height_6754) + min_height_6755)),"px"].join('');


var G__6756 = cljs.core.next(seq__6740__$1);
var G__6757 = null;
var G__6758 = (0);
var G__6759 = (0);
seq__6740 = G__6756;
chunk__6741 = G__6757;
count__6742 = G__6758;
i__6743 = G__6759;
continue;
}
} else {
return null;
}
}
break;
}
});
