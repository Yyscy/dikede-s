export const imgError = {
  inserted: function(element, { value }) {
    if (element.src !== '') {
      element.onerror = function() {
        element.src = value
      }
    } else {
      element.src = value
    }
  }

}
