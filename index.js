const { GrokNode } = require('./dist/nodes/GrokNode/GrokNode.node');
const { GrokApi } = require('./dist/credentials/GrokApi.credentials');

module.exports = {
    nodes: [
        GrokNode
    ],
    credentials: [
        GrokApi
    ],
    version: require('./package.json').version,
};
