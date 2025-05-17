(function($, Backbone, _, app) {

  var TemplateView = Backbone.View.extend({
    templateName: '',
    initialize: function() {
      this.template = _.template($(this.templateName).html());
    },
    render: function() {
      var context = this.getContext(),
        html = this.template(context);
      this.$el.html(html);
    },
    getContext: function() {
      return {};
    }
  });

  var FormView = TemplateView.extend({
    events: {
      'submit form': 'submit',
      'click button.cancel': 'done'
    },
    errorTemplate: _.template('<span class="error"><%- msg %></span>'),
    clearErrors: function() {
      $('.error', this.form).remove();
    },
    showErrors: function(errors) {
      _.map(errors, function(fieldErrors, name) {
        var field = $(':input[name=' + name + ']', this.form),
          label = $('label[for=' + field.attr('id') + ']', this.form);
        if (label.length === 0) {
          label = $('label', this.form).first();
        }

        function appendError(msg) {
          label.before(this.errorTemplate({
            msg: msg
          }));
        }
        _.map(fieldErrors, appendError, this);
      }, this);
    },
    serializeForm: function(form) {
      return _.object(_.map(form.serializeArray(), function(item) {
        // Convert object to tuple of (name, value)
        return [item.name, item.value];
      }));
    },
    submit: function(event) {
      event.preventDefault();
      this.form = $(event.currentTarget);
      this.clearErrors();
    },
    failure: function(xhr, status, error) {
      var errors = xhr.responseJSON;
      this.showErrors(errors);
    },
    done: function(event) {
      if (event) {
        event.preventDefault();
      }
      this.trigger('done');
      this.remove();
    },
    modelFailure: function(model, xhr, options) {
      var errors = xhr.responseJSON;
      this.showErrors(errors);
    }
  });

  var NewItemView = FormView.extend({
    templateName: '#new-item-template',
    className: 'new-item',
    submit: function(event) {
      var self = this,
        attributes = {};
      FormView.prototype.submit.apply(this, arguments);
      attributes = this.serializeForm(this.form);
      app.collections.ready.done(function() {
        app.items.create(attributes, {
          wait: true,
          success: $.proxy(self.success, self),
          error: $.proxy(self.modelFailure, self)
        });
      });
    },
    getContext: function() {
      return {
        categories: app.categories || null
      };
    },
    success: function(model) {
      this.done();
      window.location.hash = '#item/' + model.get('id');
    }
  });

  var HomepageView = TemplateView.extend({
    templateName: '#home-template',
    events: {
      'click button.add': 'renderAddForm'
    },
    initialize: function(options) {
      var self = this;
      TemplateView.prototype.initialize.apply(this, arguments);
      app.collections.ready.done(function() {
        var end = new Date();
        end.setDate(end.getDate() - 7);
        end = end.toISOString().replace(/T.*/g, '');
        app.items.fetch({
          data: {
            end_min: end
          },
          success: $.proxy(self.render, self)
        });
      });
    },
    getContext: function() {
      return {
        items: app.items || null
      };
    },
    renderAddForm: function(event) {
      var view = new NewItemView(),
        link = $(event.currentTarget);
      event.preventDefault();
      link.before(view.el);
      link.hide();
      view.render();
      view.on('done', function() {
        link.show();
      });
    }
  });

  var LoginView = FormView.extend({
    id: 'login',
    templateName: '#login-template',
    submit: function(event) {
      var data = {};
      FormView.prototype.submit.apply(this, arguments);
      data = this.serializeForm(this.form);
      $.post(app.apiLogin, data)
        .done($.proxy(this.loginSuccess, this))
        .fail($.proxy(this.failure, this));
    },
    loginSuccess: function(data) {
      app.session.save(data.token);
      window.location = '/static/index.html';
    }
  });

  var HeaderView = TemplateView.extend({
    tagName: 'header',
    templateName: '#header-template',
    events: {
      'click a.logout': 'logout'
    },
    getContext: function() {
      return {
        authenticated: app.session.authenticated()
      };
    },
    logout: function(event) {
      event.preventDefault();
      app.session.delete();
      window.location = '/static/index.html';
    }
  });

  var ItemView = TemplateView.extend({
    templateName: '#item-template',
    initialize: function(options) {
      var self = this;
      TemplateView.prototype.initialize.apply(this, arguments);
      this.itemId = options.itemId;
      this.item = null;
    },
    getContext: function() {
      return {
        item: this.item
      };
    },
    render: function() {
      TemplateView.prototype.render.apply(this, arguments);
    },
  });

  app.views.HomepageView = HomepageView;
  app.views.LoginView = LoginView;
  app.views.HeaderView = HeaderView;
  app.views.ItemView = ItemView;

})(jQuery, Backbone, _, app);
