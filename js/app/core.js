// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
app.core.drip = (function app$core$drip(p__5177){
var map__5178 = p__5177;
var map__5178__$1 = (((((!((map__5178 == null))))?(((((map__5178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5178):map__5178);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5178__$1,cljs.core.cst$kw$width);
var G__5180 = document.createElement("div");
G__5180.setAttribute("class","drip");

G__5180.setAttribute("style",["width:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px;height:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((5) + cljs.core.rand_int((10)))),"px"].join(''));

return G__5180;
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
var seq__5181 = cljs.core.seq(drips);
var chunk__5182 = null;
var count__5183 = (0);
var i__5184 = (0);
while(true){
if((i__5184 < count__5183)){
var drip = chunk__5182.cljs$core$IIndexed$_nth$arity$2(null,i__5184);
var max_height_5185 = (function (){var or__4047__auto__ = app.core.parse_max_height(drip);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (100);
}
})();
var min_height_5186 = app.core.calc_min_height(max_height_5185);
drip.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.rand_int(max_height_5185) + min_height_5186)),"px"].join('');


var G__5187 = seq__5181;
var G__5188 = chunk__5182;
var G__5189 = count__5183;
var G__5190 = (i__5184 + (1));
seq__5181 = G__5187;
chunk__5182 = G__5188;
count__5183 = G__5189;
i__5184 = G__5190;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__5181);
if(temp__5720__auto__){
var seq__5181__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5181__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__5181__$1);
var G__5191 = cljs.core.chunk_rest(seq__5181__$1);
var G__5192 = c__4461__auto__;
var G__5193 = cljs.core.count(c__4461__auto__);
var G__5194 = (0);
seq__5181 = G__5191;
chunk__5182 = G__5192;
count__5183 = G__5193;
i__5184 = G__5194;
continue;
} else {
var drip = cljs.core.first(seq__5181__$1);
var max_height_5195 = (function (){var or__4047__auto__ = app.core.parse_max_height(drip);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (100);
}
})();
var min_height_5196 = app.core.calc_min_height(max_height_5195);
drip.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.rand_int(max_height_5195) + min_height_5196)),"px"].join('');


var G__5197 = cljs.core.next(seq__5181__$1);
var G__5198 = null;
var G__5199 = (0);
var G__5200 = (0);
seq__5181 = G__5197;
chunk__5182 = G__5198;
count__5183 = G__5199;
i__5184 = G__5200;
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
