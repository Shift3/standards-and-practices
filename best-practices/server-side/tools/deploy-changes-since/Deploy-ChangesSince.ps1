# Deploy-ChangesSince.ps1
# 
# Example usage: ./Deploy-ChangesSince.ps1 -EarliestChangeDate "2019-06-20" -DestServer "ultra-gro.shift3sandbox.com" -DestBasePath "Ultra-Gro"
# Note that you should run this from the directory on your local machine where
# your source code is located. Also, make sure that you have the latest source
# (preferably from the main branch) checked out before you run this script!
# 
# Finally, make sure to give the correct path to Deploy-ChangesSince.ps1,
# either absolute or relative. Even if you're in the same directory as this
# file, PowerShell won't run it unless you specify ./ ahead of the filename.

param([DateTime]$EarliestChangeDate, [String]$DestServer, [String]$DestBasePath)

[String]$SrcBasePath = Get-Location
Get-ChildItem -Recurse | Where-Object {!$_.PSIsContainer -and ($_.LastWriteTime -gt $EarliestChangeDate)} | Sort-Object LastWriteTime -Descending | ForEach-Object {
    [String]$SrcPath = $_.FullName
    [String]$SubPath = $SrcPath.Replace($SrcBasePath, "")
    [String]$DestPath = $DestServer + ":" + $DestBasePath + $SubPath
    [String]$CmdToRun = "scp $SrcPath $DestPath"
    # Output the command we're about to run before running it
    $CmdToRun
    scp $SrcPath $DestPath
}
