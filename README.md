# Simulate Pi (π)

## Rationale

- A circle with radius `r` has the surface `r²π`.
- A circle with radius `r=1` has the surface `π`.
- A _quarter_ of a circle with radius `r=1` has the surface `π/4`.
- A square with side length `s` has the surface `s²`.
- A square with side length `s=1` has the surface `1`.

Given a square with side length `s=1` containing a quarter circle with `r=1` and
its center at a corner of the square: If a dot is drawn randomly on that square:

- The probability of the dot being drawn within the square is `P(S)=1`.
- The probability of the dot being drawn within the quarter circle is equal to
  the ratio of the circle area to the square area, i.e. `P(C)=(π/4)/1=π/4`.

If the ratio `P(C)/P(S)` of dots drawn onto the quarter circle to dots being
drawn onto the square is `π/4`, then `π=4*P(C)/P(S)`.

Thus, `π` can be calculated by taking the ratio of the number of dots drawn
within the circle and the number of dots totally drawn on the square, multiplied
by four.
