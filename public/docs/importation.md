# Imports

In the pea programming language, you can import other codeunits into from other files. This is done with the `IMPORT` keyword, followed by a string literal containing the **relative path** to the file you want to import, followed by a scope.

---

# Example

an example of this is the following:
```
IMPORT "libraries/Shapes.pea"

CODEUNIT Main
BEGIN
    FUNCTION Main RETURNS int32
    BEGIN
        CALL Shapes.Rectangle 1, 2, 3, 4;
    END
END
```

In this example, we import the Shapes codeunit from the file `libraries/Shapes.pea`. This means that we can now use the functions defined in that codeunit in our codeunit.

These import paths are recursive and relative to the file you are currently in. This means that if you have the following file structure:
