// const coding=["js","ruby","java","python","cpp"]
// const values=coding.forEach((item)=>{
//     console.log(item)
//     return item; // for each loop return undefined
// })
// console.log(values)

const myNums=[1,2,3,4,5,67,8,9,10]
// method 01 using implicit return
// const newNums=myNums.filter((num)=> num>4)
// console.log(newNums)

// // method 02 using return keyword
// const newNums=myNums.filter((num)=> {
//     return num>4
// })
// console.log(newNums)

const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);
const books=[
    
  {
    "title": "Radio whether try",
    "author": "Kyle Kramer",
    "year": 1901,
    "genre": "Non-Fiction",
    "isbn": "978-0-85925-227-0",
    "publisher": "Simon & Schuster",
    "pages": 931
  },
  {
    "title": "Term",
    "author": "Taylor Burns",
    "year": 2006,
    "genre": "Thriller",
    "isbn": "978-0-9639361-0-3",
    "publisher": "Hachette Livre",
    "pages": 639
  },
  {
    "title": "Design organization big",
    "author": "Sara Little",
    "year": 1935,
    "genre": "Mystery",
    "isbn": "978-0-85599-797-7",
    "publisher": "Macmillan Publishers",
    "pages": 198
  },
  {
    "title": "His whole certain",
    "author": "Eric Short",
    "year": 1970,
    "genre": "Fantasy",
    "isbn": "978-0-88842-326-9",
    "publisher": "Simon & Schuster",
    "pages": 643
  },
  {
    "title": "Official fund group",
    "author": "Christopher Woodard",
    "year": 1915,
    "genre": "Horror",
    "isbn": "978-1-376-59205-4",
    "publisher": "Simon & Schuster",
    "pages": 108
  },
  {
    "title": "Interest body interview",
    "author": "Amanda Graham",
    "year": 1938,
    "genre": "Thriller",
    "isbn": "978-0-617-97146-7",
    "publisher": "Hachette Livre",
    "pages": 602
  },
  {
    "title": "Edge",
    "author": "Hannah Anderson",
    "year": 1900,
    "genre": "Horror",
    "isbn": "978-1-149-41362-3",
    "publisher": "Random House",
    "pages": 140
  },
  {
    "title": "Part necessary organization use",
    "author": "Ronald Estrada",
    "year": 1900,
    "genre": "Horror",
    "isbn": "978-1-63799-333-0",
    "publisher": "Hachette Livre",
    "pages": 313
  },
  {
    "title": "Situation even",
    "author": "Mr. David Perkins",
    "year": 1968,
    "genre": "Romance",
    "isbn": "978-0-7798-4706-8",
    "publisher": "Simon & Schuster",
    "pages": 945
  },
  {
    "title": "Than red son field",
    "author": "Maria Williamson",
    "year": 1922,
    "genre": "Historical",
    "isbn": "978-0-325-98062-1",
    "publisher": "Simon & Schuster",
    "pages": 768
  },
  {
    "title": "Light week institution receive idea",
    "author": "Shelley Harris",
    "year": 2017,
    "genre": "Non-Fiction",
    "isbn": "978-0-942666-55-7",
    "publisher": "Hachette Livre",
    "pages": 251
  },
  {
    "title": "Clear ten",
    "author": "Angela Bates",
    "year": 1949,
    "genre": "Fantasy",
    "isbn": "978-0-377-71532-5",
    "publisher": "Macmillan Publishers",
    "pages": 971
  },
  {
    "title": "Campaign",
    "author": "Rachel Holland",
    "year": 1912,
    "genre": "Romance",
    "isbn": "978-1-61336-637-0",
    "publisher": "Hachette Livre",
    "pages": 198
  }
];

// Now we have to find those books whose genre is Romance
// const myBooks=books.filter((book)=> book.genre==="Romance");
// console.log(myBooks);

const myBooks=books.filter((book)=> {
 if(book.genre==="Romance"){
  return book.author;
 }
});

// give those books whose publish date is after 1900
const userBooks=books.filter((book)=>  book.year>1900  &&book.genre==="Romance")
// console.log(myBooks);
console.log(userBooks);