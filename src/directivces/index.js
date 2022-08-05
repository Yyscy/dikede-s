export const imgError = {
  inserted: function(element, { value }) {
    element.onerror = function() {
      element.src = value
    }
  }

}
