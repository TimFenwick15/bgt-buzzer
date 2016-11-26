import win32com.client

wsh = win32com.client.Dispatch('WScript.Shell')
wsh.SendKeys('{END}')

print('hello from python')
