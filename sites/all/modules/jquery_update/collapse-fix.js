// $Id: collapse-fix.js,v 1.1 2007/04/26 15:14:38 jjeff Exp $
// redefining toggleFieldset for compatibility with later versions of JQuery
Drupal.toggleFieldset = function(fieldset) {
  if ($(fieldset).is('.collapsed')) {
    var content = $('> div', fieldset).hide();
    $(fieldset).removeClass('collapsed');
    content.slideDown( {
    duration: 300, // THE FIX
      complete: function() {
        // Make sure we open to height auto
        $(this).css('height', 'auto');
        Drupal.collapseScrollIntoView(this.parentNode);
        this.parentNode.animating = false;
      },
      step: function() {
         // Scroll the fieldset into view
        Drupal.collapseScrollIntoView(this.parentNode);
      }
    });
    if (typeof Drupal.textareaAttach != 'undefined') {
      // Initialize resizable textareas that are now revealed
      Drupal.textareaAttach(null, fieldset);
    }
  }
  else {
    var content = $('> div', fieldset).slideUp('medium', function() {
      $(this.parentNode).addClass('collapsed');
      this.parentNode.animating = false;
    });
  }
}
/*
     FILE ARCHIVED ON 22:32:36 Oct 08, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:02:07 Mar 28, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/