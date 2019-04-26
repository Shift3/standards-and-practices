# NativeScript

To avoid Out Of Memory exception:
1- Try as possible use small images size.
2- Don't use ImageSource or Base64 encoded string as possible because the Bitmap is transferred to Javascript 
(Javascript garbage collection happens less frequently than Java garbage collection which might lead to Out Of Memory).
