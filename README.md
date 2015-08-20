# Tab.js

用于导航栏切换

```html
<div id="tabs">
	<div data-tab="a">a</div>
	<div data-tab="b">b</div>
	<div data-tab="c">c</div>
</div>
<div id="tab_pages">
	<div data-tab="a">page a</div>
	<div data-tab="b">page b</div>
	<div data-tab="c">page c</div>
</div>
```

```javascript
var tab=Tab($('#tabs [data-tab]'),$('#tab_pages [data-tab]'),function(current){
	// tabed 回调
	alert('当前是：'+current+'页面');
});
```


```javascript
tab.currentValue; //当前的页面名

tab.pages; //page的jQuery对象的hashmap
tab.pages.a;// 保存着 #tab_pages [data-tab=a] 这个的jQuery对象

tab.tabs; //tab的jQuery对象的hashmap
tab.tabs.a;// 保存着 #tabs [data-tab=a] 这个的jQuery对象
```

当然没有page也是可以的，这时就像radio标签

```javascript
var tab=Tab($('#tabs [data-tab]'),function(current){
	// tabed 回调
	alert('当前是：'+current);
});
```

trigger

```javascript
tab('c');//切换到c 并且触发回调
```

如何只改变状态，不触发回调

```javascript
var tab=Tab($('#tabs [data-tab]'),function(current,isTrigger){
	// tabed 回调
	if(!isTrigger){
		alert('当前是：'+current);
	}
});
tab('c',true);
```