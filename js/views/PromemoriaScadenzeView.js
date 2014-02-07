(function () {
    app.views.PromemoriaScadenzeView = Backbone.View.extend({
        el: '#page-2-content',
        initialize: function () {
            this.render();
        },
        template: _.template("hello: <%= positionLon %>"),
        render: function () {
            this.$el.html(this.template(this.model.attributes));
        }
    });
})();