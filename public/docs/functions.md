# Functions
Functions in pea are units of code that can be called from other functions. They can receive some arguments, on which it performs a series of actions, and then returns some value of some 'return type'.

Functions are started with the `FUNCTION` keyword, followed by the name of the function, followed by a return type, followed by optionally arguments, and variables, which will be explained later on, and then a scope.

---

## Example

An example of such function would look like this:
```
CODEUNIT Shapes
BEGIN
    FUNCTION Rectangle RETURNS void
    BEGIN
        -- Function content goes here
    END
END
```

Here we define a function named Rectangle in the Shapes codeunit. This function does not return anything, so we use the `void` keyword to indicate that. This function does not take any arguments, or uses any variables, so we do not need to specify any.

---

## Types

other examples of types can be found in the following table:
| Type    | Description                                                                                                      |
| ------  | ---------------------------------------------------------------------------------------------------------------- |
| void    | This type indicates an absence of a type, for example when a function does not return anything                   |
| string  | This type indicates a string, which is a sequence of characters                                                  |
| boolean | This type indicates a boolean, which can be either true or false                                                 |
| ptr     | This type indicates a pointer, which is a reference to another value in memory                                   |
| int8    | This type indicates a 8 bit integer, which can be a number between -128 and 127                                  |
| int16   | This type indicates a 16 bit integer, which can be a number between -32768 and 32767                             |
| int32   | This type indicates a 32 bit integer, which can be a number between -2147483648 and 2147483647                   |
| int64   | This type indicates a 64 bit integer, which can be a number between -9223372036854775808 and 9223372036854775807 |
| uint8   | This type indicates a 8 bit unsigned integer, which can be a number between 0 and 255                            |
| uint16  | This type indicates a 16 bit unsigned integer, which can be a number between 0 and 6553                          |
| uint32  | This type indicates a 32 bit unsigned integer, which can be a number between 0 and 4294967295                    |
| uint64  | This type indicates a 64 bit unsigned integer, which can be a number between 0 and 18446744073709551615          |
| f8      | This type indicates a 8 bit floating point number                                                                |
| f16     | This type indicates a 16 bit floating point number                                                               |
| f32     | This type indicates a 32 bit floating point number                                                               |
