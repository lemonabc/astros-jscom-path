扩展JS组件文件结构

Astros中，JS组件的目录规则是

```
jslib[dir]
    dialog[dir]
        dialog.js
        dialog.less
        img[dir]
            ...
```

该中间件针对部分组件只有纯JS的情况，扩展了JS组件文件形式，可以省略父目录：

```
jslib[dir]
    dialog[dir]
        dialog.js
        dialog.less
        img[dir]
            ...
    cookie.js
    io.js
```

