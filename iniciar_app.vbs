Dim WshShell, oNet, bRodando

Set WshShell = CreateObject("WScript.Shell")
Set oNet = CreateObject("WScript.Network")

' Verifica se o servidor ja esta rodando na porta 3001
bRodando = False
On Error Resume Next
Dim oHTTP
Set oHTTP = CreateObject("MSXML2.XMLHTTP")
oHTTP.Open "GET", "http://localhost:3001/api/health", False
oHTTP.Send
If oHTTP.Status = 200 Then bRodando = True
On Error GoTo 0

' Se nao esta rodando, inicia o servidor em segundo plano
If Not bRodando Then
    WshShell.Run "cmd /c cd /d C:\CasaRP\app && node server.js >> C:\CasaRP\app\server.log 2>&1", 0, False
    WScript.Sleep 2500
End If

' Abre o browser na URL do app
WshShell.Run "http://localhost:3001"
