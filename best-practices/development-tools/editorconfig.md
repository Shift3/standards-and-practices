# EditorConfig

[EditorConfig](https://editorconfig.org/) helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. Many editors and IDEs support it natively, and many others support it via plugins.

## Editor & IDE Support

Check [editorconfig.org](https://editorconfig.org/) to see if your text editor or IDE has [built-in support](https://editorconfig.org/#pre-installed) or [requires a plugin](https://editorconfig.org/#download). For convenience, here are some shortcuts to plugins for some commonly-used editors:

* [Atom](https://github.com/sindresorhus/atom-editorconfig#readme)
* [Emacs](https://github.com/editorconfig/editorconfig-emacs#readme)
* [Sublime Text](https://github.com/sindresorhus/editorconfig-sublime#readme) (via [Package Control](https://packagecontrol.io/packages/EditorConfig))
* [Vim](https://github.com/editorconfig/editorconfig-vim#readme)
* [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## Sample .editorconfig

Here's a sample `.editorconfig` that can be dropped into your projects. The EditorConfig wiki includes a [complete list of properties](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties) that you can use to customize your specific project.

```
# EditorConfig is awesome:
# http://editorconfig.org

root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 4
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.html]
indent_size = 2

[*.{js,jsx}]
indent_size = 2

[*.md]
max_line_length = off
trim_trailing_whitespace = false
```
