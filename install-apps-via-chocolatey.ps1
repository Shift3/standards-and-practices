# Note: upgrade is the recommended choco subcommand / verb for scripted installations

$ToInstall = @(
    '7zip',
    'adoptopenjdk',
    'boostnote',
    'filezilla',
    'Firefox',
    'git',
    'GoogleChrome',
    # 'libreoffice-fresh',
    'microsoft-teams',
    'notepadplusplus',
    'nvm',
    'python2',
    'python3',
    'shutup10',
    'slack',
    'sysinternals',
    'vscode',
    'WinPcap',
    'wireshark'
)

$ToInstall | ForEach-Object {
    choco upgrade -y $_
}
