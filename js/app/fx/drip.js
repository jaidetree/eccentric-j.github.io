// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('app.fx.drip');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('app.util');
app.fx.drip.drip = (function app$fx$drip$drip(p__6767){
var map__6768 = p__6767;
var map__6768__$1 = (((((!((map__6768 == null))))?(((((map__6768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6768):map__6768);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6768__$1,cljs.core.cst$kw$width);
var G__6770 = document.createElement("div");
G__6770.setAttribute("class","drip");

G__6770.setAttribute("style",["width:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px;height:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((5) + cljs.core.rand_int((10)))),"px"].join(''));

return G__6770;
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
var seq__6771 = cljs.core.seq(drips);
var chunk__6772 = null;
var count__6773 = (0);
var i__6774 = (0);
while(true){
if((i__6774 < count__6773)){
var drip = chunk__6772.cljs$core$IIndexed$_nth$arity$2(null,i__6774);
var max_height_6775 = (function (){var or__4047__auto__ = app.fx.drip.parse_max_height(drip);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (100);
}
})();
var min_height_6776 = app.fx.drip.calc_min_height(max_height_6775);
drip.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.rand_int(max_height_6775) + min_height_6776)),"px"].join('');


var G__6777 = seq__6771;
var G__6778 = chunk__6772;
var G__6779 = count__6773;
var G__6780 = (i__6774 + (1));
seq__6771 = G__6777;
chunk__6772 = G__6778;
count__6773 = G__6779;
i__6774 = G__6780;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6771);
if(temp__5720__auto__){
var seq__6771__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6771__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__6771__$1);
var G__6781 = cljs.core.chunk_rest(seq__6771__$1);
var G__6782 = c__4461__auto__;
var G__6783 = cljs.core.count(c__4461__auto__);
var G__6784 = (0);
seq__6771 = G__6781;
chunk__6772 = G__6782;
count__6773 = G__6783;
i__6774 = G__6784;
continue;
} else {
var drip = cljs.core.first(seq__6771__$1);
var max_height_6785 = (function (){var or__4047__auto__ = app.fx.drip.parse_max_height(drip);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (100);
}
})();
var min_height_6786 = app.fx.drip.calc_min_height(max_height_6785);
drip.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.rand_int(max_height_6785) + min_height_6786)),"px"].join('');


var G__6787 = cljs.core.next(seq__6771__$1);
var G__6788 = null;
var G__6789 = (0);
var G__6790 = (0);
seq__6771 = G__6787;
chunk__6772 = G__6788;
count__6773 = G__6789;
i__6774 = G__6790;
continue;
}
} else {
return null;
}
}
break;
}
});
