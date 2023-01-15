# Function variables
As mentioned in previous documentation articles, functions within codeunits can use one or multiple variables. Which are like arguments, except they are not passed to the function when called, an only used internally of the function.

These variables are not part of the function definition and are defined in the optional `VARS` section of the function.

Just like function arguments, they are notated beginning with a name, called the `identifier`, followed by a colon, a type, and ended with a semicolon.

---

# Example

An example of this looks like this:
```pea
CODEUNIT Shapes
BEGIN
    -- Func with 2 arguments
    FUNCTION DrawPixel RETURNS void
    ARGS
        x: int32;
        y: int32;
    VARS
        colorR: uint8;
        colorG: uint8;
        colorB: uint8;
    BEGIN
    END
END
```