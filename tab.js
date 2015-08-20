window.Tab=function(jTabs,jPages,callback){
    if(arguments.length==2){
        if($.isFunction(jPages)){
            callback=jPages;
            jPages=$();
        }else{
            callback=$.noop;
        }
    }else if(arguments.length===1){
        jPages=$();
        callback=$.noop;
    }



    var jempty=$();
    var jLast=jempty;
    var jLastPage=jempty;
    var valueJele={};
    var pages={};
    jPages.each(function(){
        var jPage=$(this);
        pages[jPage.data('tab')]=jPage;
    });
    jTabs.each(function(){
        var jEle=$(this);
        var value=jEle.data("tab");
        valueJele[value]=jEle;

        jEle.click(function(){
            change.call(this,value);
        });
    });
    function change(value){
        var tmp=tab.currentValue;
        tab.currentValue=value;
        var res=callback.apply(null,arguments);

        if(res===false){
            tab.currentValue=tmp;
            return;
        }
        if(jLast.is(this)){
            return;
        }
        var jEle=$(this);
        jLast.removeClass("active");
        jEle.addClass("active");

        jLastPage.hide();
        jLastPage=pages[value]||jempty;
        jLastPage.show();
        jLast=jEle;
    }

    var tab=function(value){
        var jEle=valueJele[value]||jempty;
        change.apply(jEle[0],arguments);
    };
    tab.pages=pages;
    tab.tabs=valueJele;
    return tab;
};