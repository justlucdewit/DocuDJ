
# Function arguments
As mentioned in earlier articles, functions within codeunits can take one or multiple
arguments. These arguments are part of the function definition and are defined in the optional `ARGS` section of the function.

They are notated beginning with a name, called the `identifier`, followed by a colon, a type, and ended with a semicolon.

The ARGS section of the function is defined after the function name, yet before the function body, and can contain multiple arguments. 

---

## Example
A few examples of this is:
```
CODEUNIT Shapes
BEGIN
    -- Func with 0 arguments (VARS could be left out)
    FUNCTION Update RETURNS void
    ARGS
    BEGIN
    END

    -- Func with 1 argument
    FUNCTION SetWindowTitle RETURNS void
    ARGS
        title: string;
    BEGIN
    END

    -- Func with 2 arguments
    FUNCTION DrawPixel RETURNS void
    ARGS
        x: int32;
        y: int32;
    BEGIN
    END
END
```