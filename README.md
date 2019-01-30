# Clvpf.js

## clever-prompt

根据id、class在文档中自动创建提示框并进行展示

### 使用说明

```js

new Clvpf({
    el: '#main_con',
    target: [
        {
            el: '#tip1',
            text: '点击“立即创建”按钮\n创建信息',
            pos: 'right'
        },
        {
            el: '#tip2',
            text: '填写活动名称',
            ani: 'shadow'
        },
        {
            el: '#tip3',
            text: '点击取消则会取消提交表单',
            pos: 'left',
            ani: 'shadow'
        },
        {
            el: '#tip4',
            text: '活动形式为非必填内容',
            pos: 'top',
            ani: 'shadow'
        },
    ]
})

```

### 参数说明

#### 一级参数

 `el` ：作为显示根节点的元素，该元素会被设置position为 `relative`；

 `target` ：需要提示的元素数组；

#### target中的二级参数

`el` ：目标元素的id或class；

`text` ：提示的文字内容

`pos` ：提示相对于组件的位置： `right（默认）` 、 `left` 、 `top` 、 `bottom` ；

`ani` ：动画类型： `shake（默认）` 、 `shadow` ；
