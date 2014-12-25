var MC = (function (MC, $) {

  'use strict';

  MC.initializeToggles = function () {
    $('body').on('toggle:close', '[data-toggle="button"]', function () {
      var toggle = $(this);
      var target = $('#' + toggle.attr('aria-controls'));
      toggle.attr('aria-pressed', 'false');
      target.attr('aria-expanded', 'false');
    });

    $('body').on('toggle:open', '[data-toggle="button"]', function () {
      var toggle = $(this);
      var target = $('#' + toggle.attr('aria-controls'));
      toggle.attr('aria-pressed', 'true');
      target.attr('aria-expanded', 'true');
    });

    $('body').on('click', '[data-toggle="button"]', function (e) {
      e.preventDefault();
      var toggle = $(this);
      if (toggle.attr('aria-pressed') === 'true') {
        toggle.trigger('toggle:close');
      } else {
        toggle.trigger('toggle:open');
      }
    });

    $('body').on('click', '.js-toggle-close', function (e) {
      e.preventDefault();
      var sel = $(this).attr('aria-controls');
      var toggle = $('[data-toggle="button"][aria-controls="' + sel + '"]' +
        '[aria-pressed="true"]');
      toggle.trigger('toggle:close');
    });
  };

  return MC;

}(MC || {}, jQuery));

MC.initializeToggles();
