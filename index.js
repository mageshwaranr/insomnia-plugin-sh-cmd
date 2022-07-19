const { promisify } = require('util');
const exec = promisify(require('child_process').exec)

module.exports.templateTags = [
  {
    displayName: '/bin/sh',
    name: 'shCmdExec',
    description: 'Executes given command using child_process package, basically /bin/sh cmd',
    args: [
      {
        displayName: 'Type',
        type: 'enum',
        options: [
          { displayName: 'Execute command returning String value', value: 'string' },
          { displayName: 'Execute command returning JSON value', value: 'json' }
        ],
      },
      {
        displayName: 'Command/shell to be executed',
        help: 'Executes the given command using require("child_process").exec command',
        type: 'string',
        encoding: 'base64',
      }
    ],
    async run(context, type = 'string', cmd) {

      try {
        var resp = await exec(cmd);
      } catch (failed) {
        console.log('Command execution failed with ' + failed)
        return failed.stderr;
      };

      if (type == 'json') {
        return JSON.parse(resp.stdout.trim()) // add test case
      }
      return resp.stdout.trim();
    },
  },
];
