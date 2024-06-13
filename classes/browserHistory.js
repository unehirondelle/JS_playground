class BrowserHistory {

    /**
     * @param {string} url
     * if url is set, it means new tab with url
     * otherwise, it is empty new tab
     */
    constructor(url) {
        this.history = [];
        this.cursor = 0;
        if (url) {
            this.history.push(url);
        }
    }

    /**
     * @param { string } url
     */
    visit(url) {
        this.history[++this.cursor] = url;
    }

    /**
     * @return {string} current url
     */
    get current() {
        return this.history[this.cursor];
    }

    // go to previous entry
    goBack() {
        this.cursor = Math.max(0, this.cursor - 1);
    }

    // go to next visited url
    forward() {
        this.cursor = Math.min(this.cursor + 1, this.history.length - 1);
    }
}

module.exports = {BrowserHistory};