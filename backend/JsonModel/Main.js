class General {
    header = {
        code: 0, messege: ""
    };
    body = [];
    constructor(header, body) {
        this.header = header;
        this.body = body;
    }
}

module.exports = General