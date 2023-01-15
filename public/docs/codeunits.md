# Codeunits
Codeunits (sometimes called CU's) are the main unit of code in pea. They are sort of the equivalent of a class in other languages. They are started with the `CODEUNIT`, followed by the name of the codeunit, followed by a scope.

These classes contain a set of functions that have to do with each other. For example, a codeunit for drawing shapes, where you have the functions `Shapes.Rectangle`, `Shapes.Circle`, `Shapes.Triangle`, etc.

A file can contain multiple codeunits, and there must always be a codeunit named `Main` as it is the starting point of your program.

---

# Example

```pea
-- This CU is the starting point of your program
CODEUNIT Main
BEGIN
    -- CU Content goes here
END

-- This CU is for drawing shapes
CODEUNIT Shapes
BEGIN
    -- CU Content goes here
END
```