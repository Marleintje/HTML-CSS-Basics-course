# Tips for cleaning articles in the CMS

- When you copy-paste content from a website (for example an old Flinndal article):
    - First copy from the website and paste into an editor (like this one, or NotePad);
    - Check if all the HTML looks good
    - Then copy from your editor and paste into the CMS

- When checking the HTML, pay attention to:
    - Do all elements have an opening and closing tag? Mind the position of the slash. Example: <h1>Hello!</h1>
    - Do all self-closing elements have only one tag? The slash is optional. Example: <img href="#" src="xxx"/>
    - Are the usage of <br>, <hr> and &nbsp; avoided to a minimum, so only used where necessary?
    - Have all elements without content been deleted? Example: <p></p>
    - Try to keep your html as basic as possible (just the correct tags and content). For example, if you use colors on headers, it will probably interfere with the code we write that targets all headers and gives them all the same color.
    - More than 1 white space is OK, it will always be reduced to 1 white space.