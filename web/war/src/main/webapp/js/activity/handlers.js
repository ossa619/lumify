
define([], function() {
    return [
        {
            type: 'findPath',
            titleRenderer: function(el, process) {
                require(['data', 'util/formatters'], function(appData, F) {
                    $.when(
                        appData.getVertexTitle(process.sourceVertexId),
                        appData.getVertexTitle(process.destVertexId)
                    ).done(function(source, dest) {
                        el.textContent = source + ' → ' + dest;
                        $('<div>')
                            .css({
                                fontSize: '90%'
                            })
                            .text(i18n('popovers.find_path.hops.option', process.hops))
                            .appendTo(el);
                    });
                });
            },
            finishedComponentPath: 'activity/builtin/findPath'
        }
    ];
})
