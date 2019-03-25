# Insomnia Plugin - Shell command executor

This is a plugin for [Insomnia](https://insomnia.rest) that enables you to execute some shell commands and use it output.
Commands are exeucted using `child_process`.`exec`. ie., equivalent to `/bin/sh` `<cmd-specified>`

You can use this for example to get generate a signed token using existing utility script available.

## Installation

Install the `insomnia-plugin-sh-cmd` plugin from Preferences > Plugins. or copying contents inside plugin folder.

## Usage
Insert function either in headers or body either by typing `ctrl + space` or start type `{{`

- Enter your command
- Choose JSON type if you want to parse your output using `JSON.parse()`

See screenshot below
![Screenshot](https://raw.githubusercontent.com/mageshwaranr/insomnia-plugin-sh-cmd/master/example-usage.png)