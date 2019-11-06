# Note: upgrade is the recommended choco subcommand / verb for scripted installations

$ToInstall = @(
    '7zip',
    'adoptopenjdk',
    'boostnote',
    'filezilla',
    'Firefox',
    'git',
    'GoogleChrome',
    'microsoft-teams',
    'nvm',
    'python3',
    'shutup10',
    'slack',
    'sysinternals',
    'vscode'
)

$ToInstall | ForEach-Object {
    choco upgrade -y $_
}
