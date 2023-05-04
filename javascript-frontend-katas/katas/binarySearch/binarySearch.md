## Binary Search

The goal of this kata is to implement a function that searches for a number in a list and returns its index or -1 if it's not found. Essentially the same functionality as `Array.prototype.indexOf`.

You should implement this functionality using a [Binary Search algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm). Binary search is a very common algorithm for searching ordered lists. An example of this algorithm would be searching for Northcoders' number in the phonebook:

1. You open the phonebook in half and see what letter you're on.
2. If it's a letter previous to 'N', you discard all the pages on your left and keep searching on your right.
3. You open the remaining pages in half and see what letter you're on. If it's a letter after 'N', you discard the pages on your right and keep searching on the pages on your left.
4. Repeat the process until there's only one page left.

You can assume that the array passed to the function will always be ordered and have unique, numeric values.

### Extra credit

- See if you can refactor your function to call itself recursively.

### Food for thought

- Think about how this algorithm compares to searching on element at a time in order. Which one is faster and, more importantly, how much faster is it?

ANSWER: The main advantage of binary search is that it is much quicker than a serial search because the data that needs to be search halves with each step. Binary seach is like a divide and conquer technique. The average case time complexity of binary search is O(logN)

- Is there a way to approximately determine how many "bisections" it would take to find a number based on the length of the array?

ANSWER: arrayLength = 2^n
        
        where n is equal to the number of comparisons, or bisections, needed to locate the number. 