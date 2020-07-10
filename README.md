# Big O Notation Exercise

1. What is the Big O for this?

    1. constant time
    2. linear time

2. Even or Odd

    - constant time O(1) becuase it is a simple arithmetic operation

3. Are you here?

    - polynomial time O(n^2) because it is two nested for loops

4. Doubler

    - linear time O(n) becuase it is one for loop with a sum calculation

5. Naive Search

    - linear time O(n) becuase it is one loop with a return

6. Creating Pairs

    - polynomial time O(n^2) because it is two nested loops

7. Compute the Sequence

    - linear time O(n) becuase it is one loop

8. An Efficient Search

    - logarithmic time O(log(n)) becuase each time through the loop, it cuts the problem size in half

9. Random Element

    - constant time O(1) because it is a simple arithmetic operation

10. What am I?
    - linear time O(n) because it is one loop with a simple arithmetic operation

11. Tower of Hanoi - not completed yet
    - There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
    - The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk
    1. Derive an algorithm to solve the Tower of Hanoi puzzle
    2. Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
    3. If you are given 5 disks, how do the rods look like after 7 recursive calls?
    4. How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
        - 3 disks - 7 moves
        - 4 disks - 15 moves
        - 5 disks - 31 moves
    5. What is the runtime of your algorithm? - polynomial - O(n^2)

12. Iterative Version

    -   solve the drills 1-7 from the algorithms section with an iterative solution

    1. Counting sheep
    2. Power Calculator
    3. Reverse String
    4. nth Triangular Number
    5. String Splitter
    6. Fibonacci
    7. Factorial

13. Recursive Big O

    -   take your solutions from the recursive exercises in the previous checkpoint and identify the time complexities of each

    1. Count Sheep - linear time - O(n)
    2. Power Calculator - linear time - O(n)
    3. Reverse string - linear time - O(n)
    4. nth Triangular Number - linear time - O(n)
    5. String Splitter - log time - O(n log n)
    6. Fibonacci - exponential time - O(2^n)
    7. Factorial - linear time - O(n)
    8. Find way out of maze - polynomial - O(n^2)
    9. Find all ways out of maze - polynomial - O(n^2)
    10. Anagrams - polynomial - O(n^3)
    11. Org Chart - polynomial - O(n^2)
    12. Binary Rep - linear time - O(n)

14. Iterative Big O
    -   take your solutions from the iterative exercises today and identify the time complexities of each
    1. Count Sheep - linear time - O(n)
    2. Power Calculator - linear time - O(n)
    3. Reverse String - linear time - O(n)
    4. nth Triangular Number - linear time - O(n)
    5. String Splitter - polynomial - O(n^4)
    6. Fibonacci - linear - O(n)
    7. Factorial - linear - O(n)
