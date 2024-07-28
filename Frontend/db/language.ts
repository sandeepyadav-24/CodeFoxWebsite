import { link } from "fs";

export const data = [
  {
    name: "Chapter 1 || Introduction to C++",
    videos: [
      {
        name: "Intro to Programming",
        link: "https://www.youtube.com/watch?v=WQoB2z67hvY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=1&pp=iAQB",
      },
      {
        name: "Write first C++ Program",
        link: "https://www.youtube.com/watch?v=t6zLJOCVqD0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=2&pp=iAQB",
      },
      {
        name: "If Else",
        link: "https://www.youtube.com/watch?v=WR31ByTzAVQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=3&pp=iAQB",
      },
      {
        name: "Solving Pattern",
        link: "https://www.youtube.com/watch?v=dr-pLeJBr38&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=4&pp=iAQB",
      },
      {
        name: "Bitwise Operator",
        link: "https://www.youtube.com/watch?v=yjdQHb2elqI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=5&pp=iAQB",
      },
      {
        name: "Binary & Decimal Number System",
        link: "https://www.youtube.com/watch?v=bWrsk0QizEk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=6&pp=iAQB",
      },
      {
        name: "Leetcode Problem Solving Session",
        link: "https://www.youtube.com/watch?v=0fwrMYPcGQ0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=7&pp=iAQB",
      },
      {
        name: "Switch statement & Function",
        link: "https://www.youtube.com/watch?v=8nNqk2NPbRA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=8&pp=iAQB",
      },
      {
        name: "Introduction to Arrays",
        link: "https://www.youtube.com/watch?v=sNrLlmOIn-c&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=9&pp=iAQB",
      },
      {
        name: "Solving Leetcode/CodeStudio ",
        link: "https://www.youtube.com/watch?v=oVa8DfUDKTw&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=10&pp=iAQB",
      },
      {
        name: "Time & Space Complexity",
        link: "https://www.youtube.com/watch?v=QovOdd80A4s&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=11&pp=iAQB",
      },
      {
        name: "Binary Search",
        link: "https://www.youtube.com/watch?v=YJeoQBevNVo&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=12&pp=iAQB",
      },
      {
        name: "Binary Search Interview Question Part 1",
        link: "https://www.youtube.com/watch?v=zD2Jg3alZV8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=13&pp=iAQB",
      },

      {
        name: "Binary Search Interview Question Part 2",
        link: "https://www.youtube.com/watch?v=6z2HK4o8qcU&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=14&pp=iAQB",
      },
      {
        name: "Book Allocation Problem",
        link: "https://www.youtube.com/watch?v=YTTdLgyqOLY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=15&pp=iAQB",
      },
      {
        name: "Selection Sort",
        link: "https://www.youtube.com/watch?v=UdO2NeHB46c&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=16&pp=iAQB",
      },
      {
        name: "Bubble Sort",
        link: "https://www.youtube.com/watch?v=zOhUavxlzw4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=18&pp=iAQB",
      },
      {
        name: "Insertion Sort",
        link: "https://www.youtube.com/watch?v=7kIVfVY6Axk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=19&pp=iAQB",
      },
      {
        name: "C++ STL",
        link: "https://www.youtube.com/watch?v=WgMPrLX-zsA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=20&pp=iAQB",
      },
      {
        name: "Solving Leetcode/CodeStudio Problem Part 1 ",
        link: "https://www.youtube.com/watch?v=MPvr-LmaZmA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=21&pp=iAQB",
      },
      {
        name: "Solving Leetcode/CodeStudio Problem Part 2 ",
        link: "https://www.youtube.com/watch?v=Z7_nMTHROZo&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=22&pp=iAQB",
      },
      {
        name: "All ABout Char",
        link: "https://www.youtube.com/watch?v=Wdjr6uoZ0e0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=24&pp=iAQB",
      },
      {
        name: "Introduction to 2D Arrays",
        link: "https://www.youtube.com/watch?v=1CdolnvxLs0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=25&pp=iAQB",
      },
      {
        name: "Basic Math",
        link: "https://www.youtube.com/watch?v=KdePjukNs98&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=26&pp=iAQB",
      },
      {
        name: "Pointers In C++ Part 1",
        link: "https://www.youtube.com/watch?v=YHwEIfrXZgE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=28&pp=iAQB",
      },
      {
        name: "Pointers In C++ Part 2",
        link: "https://www.youtube.com/watch?v=rlpw7oi-bpE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=29&pp=iAQB",
      },
      {
        name: "Double Pointers",
        link: "https://www.youtube.com/watch?v=P0UsAxtXq2Y&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=30&pp=iAQB",
      },
      {
        name: "Reference Variable",
        link: "https://www.youtube.com/watch?v=MMO2c57XHzM&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=31&pp=iAQB",
      },
      {
        name: "Dynamic Memeory Allocation to 2D Array",
        link: "https://www.youtube.com/watch?v=LlqgWQgm58g&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=32&pp=iAQB",
      },
      {
        name: "Imp Keywors in C++",
        link: "https://www.youtube.com/watch?v=0TEvaAiqo8Y&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=33&pp=iAQB",
      },
      {
        name: "Recursion Part 1",
        link: "https://www.youtube.com/watch?v=_-2u4EPHD88&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=34&pp=iAQB",
      },

      {
        name: "Recursion Part 2",
        link: "https://www.youtube.com/watch?v=zg8Y1oE4qYQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=35&pp=iAQB",
      },
      {
        name: "Recursion in Binary Search",
        link: "https://www.youtube.com/watch?v=UntSI7G5h20&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=36&pp=iAQB",
      },
      {
        name: "Recursion in String",
        link: "https://www.youtube.com/watch?v=WyY2Af3k1xI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=37&pp=iAQB",
      },
      {
        name: "Merge Sort",
        link: "https://www.youtube.com/watch?v=cdHEpbBVjRM&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=38&pp=iAQB",
      },
      {
        name: "Quick Sort",
        link: "https://www.youtube.com/watch?v=sNaHN4tZmRk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=40&pp=iAQB",
      },

      {
        name: "Recursion - subset in string",
        link: "https://www.youtube.com/watch?v=V0IgCltYgg4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=41&pp=iAQB",
      },
      {
        name: "Phone Keypad Recursion Problem",
        link: "https://www.youtube.com/watch?v=tWnHbSHwNmA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=42&pp=iAQB",
      },
      {
        name: "Permutation of an String",
        link: "https://www.youtube.com/watch?v=va3NEycUxsg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=43&pp=iAQB",
      },
      {
        name: "Rat in a Maze Problem ",
        link: "https://www.youtube.com/watch?v=GqtyVD-x_jY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=44&pp=iAQB",
      },

      {
        name: "Time & Space COmplexity of recursive Function ",
        link: "https://www.youtube.com/watch?v=BYCeh76OASc&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=45&pp=iAQB",
      },
    ],
  },
  {
    name: "Chapter 2 || All about OOPS",
    videos: [
      {
        name: "OOPS Concept in C++",
        link: "https://www.youtube.com/watch?v=i_5pvt7ag7E&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=46&pp=iAQB",
      },
      {
        name: "4 Pillars of OOPS",
        link: "https://www.youtube.com/watch?v=b3GccK5_KSQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=47&pp=iAQB",
      },
    ],
  },
  {
    name: "Chapter 3 ||  LinkedList",
    videos: [
      {
        name: "Introduction to LinkedList",
        link: "https://www.youtube.com/watch?v=q8gdBn9RPeI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=48&pp=iAQB",
      },
      {
        name: "Linkedlist Problem Part 1",
        link: "https://www.youtube.com/watch?v=vqS1nVQdCJM&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=49&pp=iAQB",
      },
      {
        name: "Linkedlist Problem Part 2",
        link: "https://www.youtube.com/watch?v=fi2vh0nQLi0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=51&pp=iAQB",
      },
      {
        name: "Detect $ remove loops in linkedlist",
        link: "https://www.youtube.com/watch?v=VxOFflTXlXo&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=52&pp=iAQB",
      },
      {
        name: "Remove dublicates from linkedlist",
        link: "https://www.youtube.com/watch?v=7pgs-wT5d4c&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=53&pp=iAQB",
      },
      {
        name: "Merge 2 Sorted Linkedlist",
        link: "https://www.youtube.com/watch?v=ogmBt6f9hw8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=54&pp=iAQB",
      },
      {
        name: "Check Palindrome in Linkeedlist",
        link: "https://www.youtube.com/watch?v=aD7mBVnKFEU&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=55&pp=iAQB",
      },
      {
        name: "Add 2 Number represented by linkedlist",
        link: "https://www.youtube.com/watch?v=HiRlTPf9aCg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=56&pp=iAQB",
      },
      {
        name: "Clone a linkedlist with random pointers",
        link: "https://www.youtube.com/watch?v=83mPr0i56Gg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=57&pp=iAQB",
      },
      {
        name: "Merge Sort in Linkedlist",
        link: "https://www.youtube.com/watch?v=rM5EEA_rbNY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=58&pp=iAQB",
      },
    ],
  },
  {
    name: "Chapter 4 || Stacks",
    videos: [
      {
        name: "Intro to Stacks",
        link: "https://www.youtube.com/watch?v=_6COl6V6mng&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=59&pp=iAQB",
      },
      {
        name: "Stack Interview Question ",
        link: "https://www.youtube.com/watch?v=BmZnJehDzyU&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=60&pp=iAQB",
      },
      {
        name: "Largest Rectangular Area in Histogram",
        link: "https://www.youtube.com/watch?v=lJLcqDsmYfg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=61&pp=iAQB",
      },
      {
        name: "Stack - Celebrity Problem",
        link: "https://www.youtube.com/watch?v=9u2BJfmWNEg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=62&pp=iAQB",
      },
      {
        name: "N - Stack in an array",
        link: "https://www.youtube.com/watch?v=lrSXKLmnMV8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=63&pp=iAQB",
      },
      {
        name: "Design Special Stack problem ",
        link: "https://www.youtube.com/watch?v=OpwYmEBcPh0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=64&pp=iAQB",
      },
    ],
  },

  {
    name: "Chapter 5 || Queues",
    videos: [
      {
        name: "Queue in C++",
        link: "https://www.youtube.com/watch?v=W7uB9-TKfTg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=65&pp=iAQB",
      },
      {
        name: "Queue FAANG Inetrview Question ",
        link: "https://www.youtube.com/watch?v=_gJ3to4RyeQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=66&pp=iAQB",
      },
    ],
  },
  {
    name: "Chapter 6 || Binary Tree",
    videos: [
      {
        name: "Binary tree & its Representation",
        link: "https://www.youtube.com/watch?v=5NiXlPrLslg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=67&pp=iAQB",
      },
      {
        name: "Binary FAANG Interview Question Part - 1 ",
        link: "https://www.youtube.com/watch?v=nHMQ33LZ6oA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=69&pp=iAQB",
      },
      {
        name: "Binary FAANG Interview Question Part - 2",
        link: "https://www.youtube.com/watch?v=s1d8UGDCCN8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=70&pp=iAQB",
      },
      {
        name: "Binary FAANG Interview Question Part - 3",
        link: "https://www.youtube.com/watch?v=QG0hE0R_ng4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=71&pp=iAQB",
      },
      {
        name: "Construct a Binary Tree",
        link: "https://www.youtube.com/watch?v=ffE1xj51EBQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=72&pp=iAQB",
      },
      {
        name: "Minimum time to Burn Binary Tree",
        link: "https://www.youtube.com/watch?v=XLdpy0_6MR4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=73&pp=iAQB",
      },
      {
        name: "Morris Traversal",
        link: "https://www.youtube.com/watch?v=2BdY9fixMrM&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=74&pp=iAQB",
      },
    ],
  },
  {
    name: "Chapter 7 || Binary Search Tree",
    videos: [
      {
        name: "Introduction to Binary Search Tree",
        link: "https://www.youtube.com/watch?v=UeRUKRJvPa4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=75&pp=iAQB",
      },
      {
        name: "Binary Search Tree FAANG Interview Question Part - 1",
        link: "https://www.youtube.com/watch?v=pDURIj98e0I&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=76&pp=iAQB",
      },
      {
        name: "Binary Search Tree FAANG Interview Question Part - 2",
        link: "https://www.youtube.com/watch?v=IGHyX15fLI8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=77&pp=iAQB",
      },
      {
        name: "Merge 2 Binary Search Tree",
        link: "https://www.youtube.com/watch?v=18w8VduomfI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=78&pp=iAQB",
      },
      {
        name: "Largest BST In Binary Tree ",
        link: "https://www.youtube.com/watch?v=fqx8z3VepMA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=79&pp=iAQB",
      },
    ],
  },
  {
    name: "Chapter 8 || Heaps",
    videos: [
      {
        name: "Heaps in C++",
        link: "https://www.youtube.com/watch?v=NKJnHewiGdc&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=80&pp=iAQB",
      },
      {
        name: "Heaps Inetrview Question Part - 1 ",
        link: "https://www.youtube.com/watch?v=_9F2VgZcvdw&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=81&pp=iAQB",
      },
      {
        name: "Heaps Inetrview Question Part - 2 ",
        link: "https://www.youtube.com/watch?v=eccAKrmffh8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=83&pp=iAQB",
      },
      {
        name: "Heaps Inetrview Question Part - 3 ",
        link: "https://www.youtube.com/watch?v=RrxpTWqj97A&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=84&pp=iAQB",
      },
    ],
  },
  {
    name: "Chapter 9 || HashMap",
    videos: [
      {
        name: "Hashmap in C++",
        link: "https://www.youtube.com/watch?v=7mUKGHznpfg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=85&pp=iAQB",
      },
    ],
  },
  {
    name: "Chapter 10 || Tries",
    videos: [
      {
        name: "Tries & its Implementation",
        link: "https://www.youtube.com/watch?v=Y6dOuGjwsxU&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=87&pp=iAQB",
      },
      {
        name: "Longest Common Prefix problem",
        link: "https://www.youtube.com/watch?v=VTr3Nh7BadI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=88&pp=iAQB",
      },
      {
        name: "Implement a Phone Directory including Tree",
        link: "https://www.youtube.com/watch?v=SK2S5lQegVg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=89&pp=iAQB",
      },
    ],
  },
  {
    name: "Chapter 11 || Graph ",
    videos: [
      {
        name: "Introduction to Graph ",
        link: "https://www.youtube.com/watch?v=EaK6aslcC5g&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=93&pp=iAQB",
      },
      {
        name: "BFS Traversal in Graph",
        link: "https://www.youtube.com/watch?v=b5kij1Akf9I&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=94&pp=iAQB",
      },
      {
        name: "DFS Traversal in Graph",
        link: "https://www.youtube.com/watch?v=aJa3U-hydXc&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=95&pp=iAQB",
      },
      {
        name: "Cycle Detection in undisrected Graph",
        link: "https://www.youtube.com/watch?v=1cSzxlhxOw8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=96&pp=iAQB",
      },
      {
        name: "Cycle Detection in disrected Graph ",
        link: "https://www.youtube.com/watch?v=Tl5qbEmEQyY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=97&pp=iAQB",
      },
      {
        name: "Topological Sort ( Using DFS )",
        link: "https://www.youtube.com/watch?v=T_boOrr0rvk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=98&pp=iAQB",
      },
      {
        name: "Topological Sort ( Using Kahn's Algorithm )",
        link: "https://www.youtube.com/watch?v=6XmzL04mlgQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=99&pp=iAQB",
      },
      {
        name: "Cycle Detection in disrected Graph ( using BFS )",
        link: "https://www.youtube.com/watch?v=X2_tYUuthH8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=101&pp=iAQB",
      },
      {
        name: "Shortest Path in Undirected Graph ",
        link: "https://www.youtube.com/watch?v=abIEXKFpLNE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=102&pp=iAQB",
      },
      {
        name: "Shortest Path in Directed Acyclic Graph ",
        link: "https://www.youtube.com/watch?v=P_bfy0LOU5g&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=103&pp=iAQB",
      },
      {
        name: "Dijkshtra's Algorithm",
        link: "https://www.youtube.com/watch?v=dVUR3Rm6biE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=104&pp=iAQB",
      },
      {
        name: "Minimum Spanning Tree || Prim's Algorithm",
        link: "https://www.youtube.com/watch?v=rnYBi9N_vw4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=105&pp=iAQB",
      },

      {
        name: "Bridges in Graph ",
        link: "https://www.youtube.com/watch?v=CiDPT1xMKI0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=107&pp=iAQB",
      },
      {
        name: "Articulation points in Graphs",
        link: "https://www.youtube.com/watch?v=fqkqx6OBRDE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=108&pp=iAQB",
      },
      {
        name: "Kosaraju's Algorithm",
        link: "https://www.youtube.com/watch?v=ndfjV_yHpgQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=109&pp=iAQB",
      },
      {
        name: "Bellmand Ford Algorithm",
        link: "https://www.youtube.com/watch?v=ijpVpsmpJtQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=110&pp=iAQB",
      },
    ],
  },
];
