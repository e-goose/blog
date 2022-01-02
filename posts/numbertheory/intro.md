<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [ ['$$','$$'], ["\\(","\\)"] ],
      displayMath: [ ['$$','$$'], ["\\(","\\)"] ],
    },
    TeX: {
      Macros: {
        bra: ["\\langle{#1}|", 1],
        ket: ["|{#1}\\rangle", 1],
        braket: ["\\langle{#1}\\rangle", 1],
        bk: ["\\langle{#1}|{#2}|{#3}\\rangle", 3]
     }
   }
  });
</script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/latest.js?config=TeX-MML-AM_CHTML' async></script>
[← Back to number theory page](/blog/posts/numbertheory)
# Brilliant's Number Theory Course Notes: Introduction

## Modular Arithmetic
Modular arithmetic is the part of number theory used to study cyclical systems– where taking enough steps “forward” brings you back to where you started.  

### mod arith problem  
<img src="https://user-images.githubusercontent.com/71861034/147881435-93b9d0ae-4773-4132-8a59-0435d58e6793.png" width="300" height="300">  
If you add a blue number (like 2 or 7) to a yellow number (like 4 or 9), what color will the sum be?  

Purple. Bc blue (mod 5)  2, yellow (mod 5) = 4, so the sum (mod 5) will always be 1 (mod 5)– so purple. We take (mod 5) because table cycles through five colors– thus making modular arithmetic a logical operation.  

### another mod arith problem  
<img src="https://ds055uzetaobb.cloudfront.net/brioche/solvable/19d305cc9e.c1c9dab3fa.Ie2m8J.png?width=560" width="300" height="300">  
What color is 8 \times 17?  

blue– 8 (mod 3) \equiv -1 \equiv 17 (mod 3). -1 \times -1 (mod 3) \equiv 1 (mod 3), which is blue.  

Also, we could represent it like this, where j and k are whole integer numbers and thus 3j + 2 and 3k + 2 are numbers with remainder 2 when divided by 3.
(3j+2)×(3k+2)  
=(3j×3k)+(3j×2)+(3k×2)+(2×2)
=9jk+6j+6k+4  
=9jk+6j+6k+3+1  
=3(3jk+2j+2k+1)+1  
All numbers remainder one when divided by three are blue
