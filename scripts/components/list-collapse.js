(function () {
    $(document).ready(function () {

        $('.nested-list').wrap("<div class='nested-list-wrapper'></div>");

        $('.nested-list-wrapper')
            .on('select_node.jstree', function (e, data) {
                data.instance.toggle_node(data.node); //set open on one click
            })
            .jstree({
                "core": {
                    "themes": {
                        "dots": true // no connecting dots between dots
                    }
                },
                "plugins" : [] // activate the state plugin on this instance
            });

        /*set open list in 'changelog page' by load*/
        $('.changelog .nested-list-wrapper').on('ready.jstree', function() {
            $(".nested-list-wrapper").jstree("open_all");
        });

    });
})();