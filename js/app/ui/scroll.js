// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('app.ui.scroll');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('app.util');
app.ui.scroll.scrollable_elements = (function app$ui$scroll$scrollable_elements(){
return app.util.query_all(".scrolling");
});
app.ui.scroll.window__GT_rect = (function app$ui$scroll$window__GT_rect(win){
var doc = win.document.documentElement;
var width = win.innerWidth;
var height = win.innerHeight;
var top = doc.scrollTop;
var bottom = (top + height);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height,cljs.core.cst$kw$top,top,cljs.core.cst$kw$bottom,bottom], null);
});
app.ui.scroll.el__GT_rect = (function app$ui$scroll$el__GT_rect(el){
var client = el.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,client.top,cljs.core.cst$kw$bottom,client.bottom], null);
});
app.ui.scroll.el_visible_QMARK_ = (function app$ui$scroll$el_visible_QMARK_(frame,el){
var el_rect = app.ui.scroll.el__GT_rect(el);
return (((cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(el_rect) <= cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(frame))) && ((cljs.core.cst$kw$bottom.cljs$core$IFn$_invoke$arity$1(el_rect) >= (0))));
});
app.ui.scroll.create_update = (function app$ui$scroll$create_update(frame,el){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$visible_QMARK_,app.ui.scroll.el_visible_QMARK_(frame,el),cljs.core.cst$kw$el,el], null);
});
app.ui.scroll.split_classes = (function app$ui$scroll$split_classes(el){
return cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(el.className,/ /));
});
app.ui.scroll.update_classes = (function app$ui$scroll$update_classes(visible_QMARK_,classes){
if(cljs.core.truth_(visible_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,"within-view");
} else {
if(cljs.core.contains_QMARK_(classes,"reset")){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["within-view",null], null), null),classes);
} else {
return classes;

}
}
});
app.ui.scroll.apply_scroll_updates = (function app$ui$scroll$apply_scroll_updates(scroll_updates){
var seq__6762 = cljs.core.seq(scroll_updates);
var chunk__6763 = null;
var count__6764 = (0);
var i__6765 = (0);
while(true){
if((i__6765 < count__6764)){
var map__6766 = chunk__6763.cljs$core$IIndexed$_nth$arity$2(null,i__6765);
var map__6766__$1 = (((((!((map__6766 == null))))?(((((map__6766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6766):map__6766);
var el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6766__$1,cljs.core.cst$kw$el);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6766__$1,cljs.core.cst$kw$visible_QMARK_);
var classes_6770 = app.ui.scroll.update_classes(visible_QMARK_,app.ui.scroll.split_classes(el));
el.className = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes_6770);


var G__6771 = seq__6762;
var G__6772 = chunk__6763;
var G__6773 = count__6764;
var G__6774 = (i__6765 + (1));
seq__6762 = G__6771;
chunk__6763 = G__6772;
count__6764 = G__6773;
i__6765 = G__6774;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6762);
if(temp__5720__auto__){
var seq__6762__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6762__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__6762__$1);
var G__6775 = cljs.core.chunk_rest(seq__6762__$1);
var G__6776 = c__4461__auto__;
var G__6777 = cljs.core.count(c__4461__auto__);
var G__6778 = (0);
seq__6762 = G__6775;
chunk__6763 = G__6776;
count__6764 = G__6777;
i__6765 = G__6778;
continue;
} else {
var map__6768 = cljs.core.first(seq__6762__$1);
var map__6768__$1 = (((((!((map__6768 == null))))?(((((map__6768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6768):map__6768);
var el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6768__$1,cljs.core.cst$kw$el);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6768__$1,cljs.core.cst$kw$visible_QMARK_);
var classes_6779 = app.ui.scroll.update_classes(visible_QMARK_,app.ui.scroll.split_classes(el));
el.className = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes_6779);


var G__6780 = cljs.core.next(seq__6762__$1);
var G__6781 = null;
var G__6782 = (0);
var G__6783 = (0);
seq__6762 = G__6780;
chunk__6763 = G__6781;
count__6764 = G__6782;
i__6765 = G__6783;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Looks for a list of elements with .scrolling and adds .within-view if
 *   el is partially visible. If .reset is present will remove .within-view when
 *   scrolled out of view.
 */
app.ui.scroll.update_scroll_elements_BANG_ = (function app$ui$scroll$update_scroll_elements_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___6786 = arguments.length;
var i__4642__auto___6787 = (0);
while(true){
if((i__4642__auto___6787 < len__4641__auto___6786)){
args__4647__auto__.push((arguments[i__4642__auto___6787]));

var G__6788 = (i__4642__auto___6787 + (1));
i__4642__auto___6787 = G__6788;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return app.ui.scroll.update_scroll_elements_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

app.ui.scroll.update_scroll_elements_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_){
var frame = app.ui.scroll.window__GT_rect(window);
return app.ui.scroll.apply_scroll_updates(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (frame){
return (function (p1__6784_SHARP_){
return app.ui.scroll.create_update(frame,p1__6784_SHARP_);
});})(frame))
,app.ui.scroll.scrollable_elements()));
});

app.ui.scroll.update_scroll_elements_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
app.ui.scroll.update_scroll_elements_BANG_.cljs$lang$applyTo = (function (seq6785){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6785));
});

