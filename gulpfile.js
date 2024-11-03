const { src, dest, series } = require('gulp');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const path = require('path');

const packageJson = require('./package.json');

function copyReadme() {
    return src('README_TEMPLATE.md')
        .pipe(replace('{{NODE_NAME}}', packageJson.n8n.name))
        .pipe(rename('README.md'))
        .pipe(dest('.'));
}

function copyAssets() {
    return src('nodes/**/openrouter.svg')
        .pipe(dest(file => {
            // Construct the destination path relative to the 'dist' directory
            const relativePath = path.relative('nodes', file.path);
            return path.join('dist', relativePath);
        }));
}

exports.default = series(copyReadme, copyAssets);
