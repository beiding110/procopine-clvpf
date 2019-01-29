const SCALE_SIZE = 1.2,//缩放大小
    ROTATE_RANGE = 10,//抖动角度
    SHAKE_STEP = 10;//抖动次数
var shake = '\
.clvpf-animate_shake{\
    animation:shake 2s infinite;\
}\
@keyframes shake{\
    0% {transform:none;}\
    30% {transform:scale(' + SCALE_SIZE + ');}\
    34% {transform:scale(' + SCALE_SIZE + ') rotate(' + ROTATE_RANGE + 'deg);}\
    38% {transform:scale(' + SCALE_SIZE + ') rotate(-' + (ROTATE_RANGE - (ROTATE_RANGE / SHAKE_STEP)) + 'deg);}\
    42% {transform:scale(' + SCALE_SIZE + ') rotate(' + (ROTATE_RANGE - (2 * (ROTATE_RANGE / SHAKE_STEP))) + 'deg);}\
    46% {transform:scale(' + SCALE_SIZE + ') rotate(-' + (ROTATE_RANGE - (3 * (ROTATE_RANGE / SHAKE_STEP))) + 'deg);}\
    50% {transform:scale(' + SCALE_SIZE + ') rotate(' + (ROTATE_RANGE - (4 * (ROTATE_RANGE / SHAKE_STEP))) + 'deg);}\
    54% {transform:scale(' + SCALE_SIZE + ') rotate(-' + (ROTATE_RANGE - (5 * (ROTATE_RANGE / SHAKE_STEP))) + 'deg);}\
    58% {transform:scale(' + SCALE_SIZE + ') rotate(' + (ROTATE_RANGE - (6 * (ROTATE_RANGE / SHAKE_STEP))) + 'deg);}\
    62% {transform:scale(' + SCALE_SIZE + ') rotate(-' + (ROTATE_RANGE - (7 * (ROTATE_RANGE / SHAKE_STEP))) + 'deg);}\
    66% {transform:scale(' + SCALE_SIZE + ') rotate(' + (ROTATE_RANGE - (8 * (ROTATE_RANGE / SHAKE_STEP))) + 'deg);}\
    70% {transform:scale(' + SCALE_SIZE + ') rotate(-' + (ROTATE_RANGE - (9 * (ROTATE_RANGE / SHAKE_STEP))) + 'deg);}\
    74% {transform:scale(' + SCALE_SIZE + ');}\
    100% {transform:none;}\
}\
';

const BOLD_COLOR = '#9E44A1',//阴影颜色
    BOLD_SIZE = '10px';
var shadow = '\
.clvpf-animate_shadow{animation:shadow 2s infinite;}\
@keyframes shadow{\
    0% {box-shadow: none;}\
    50% {box-shadow: 0 0 ' + BOLD_SIZE + ' ' + BOLD_COLOR +';}\
    100% {box-shadow: none;}\
}\
';

module.exports = (shake + shadow)
