// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.events');
goog.require('app.fx.drip');
goog.require('app.ui.scroll');
goog.require('app.util');
goog.require('cljs.pprint');
app.core.init = (function app$core$init(){
setTimeout(app.fx.drip.animate_drips,(1000));

goog.events.listen(window,"scroll",app.ui.scroll.update_scroll_elements_BANG_);

return goog.events.listenOnce(window,"DOMContentLoaded",app.ui.scroll.update_scroll_elements_BANG_);
});
