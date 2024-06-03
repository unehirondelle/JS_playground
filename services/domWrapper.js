function $(el) {
    return {
        css: function(property, value) {
            el.style[property] = value;
            return this;
        }
    }
}

module.exports = {$};

