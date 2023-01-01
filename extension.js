const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('Extension "pvsc-pm" is now active!')

  async function scrollUp() {
    vscode.commands.executeCommand('cursorUp')
    vscode.commands.executeCommand('scrollLineUp')
  }

  async function scrollDown() {
    vscode.commands.executeCommand('cursorDown')
    vscode.commands.executeCommand('scrollLineDown')
  }

  context.subscriptions.push(vscode.commands.registerCommand('pvsc-pm.scrollUp', scrollUp))
  context.subscriptions.push(vscode.commands.registerCommand('pvsc-pm.scrollDown', scrollDown))
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
