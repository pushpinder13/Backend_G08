// 1. Find students with age equal to 22 and marks equal to 90
db.Student.find({
    "age": 22,
    "marks": 90
});

// 2. Find students with marks greater than or equal to 80 and age greater than or equal to 18
db.Student.find({
    "marks": { $gte: 80 },
    "age": { $gte: 18 }
});

// 3. Find students whose grades are "A++"
db.Student.find({
    "grade": "A++"
});

/*

test> use Chitkara
switched to db Chitkara
Chitkara> db.Student.find({
...     "age": 22,
...     "marks": 90
... });

Chitkara> db.Student.find({
...     "marks": { $gte: 80 },
...     "age": { $gte: 18 }
... });
[
  {
    _id: ObjectId('66cf54e81629f696697c6e82'),
    name: 'Bob White',
    age: 21,
    subject: 'Chemistry',
    marks: 82,
    Stream: 'Data Science',
    Address: 'Chitkara ',
    date: ISODate('2024-08-28T17:35:28.698Z')
  },
  {
    _id: ObjectId('66cf54e81629f696697c6e83'),
    name: 'Charlie Black',
    age: 23,
    subject: 'Physics',
    marks: 91,
    Stream: 'Data Science',
    Address: 'Chitkara ',
    date: ISODate('2024-08-28T17:35:28.698Z')
  },
  {
    _id: ObjectId('66cf54e81629f696697c6e84'),
    name: 'Diana Blue',
    age: 22,
    subject: 'Mathematics',
    marks: 89,
    Stream: 'Data Science',
    Address: 'Chitkara ',
    date: ISODate('2024-08-28T17:35:28.698Z')
  },
  {
    _id: ObjectId('66cf54e81629f696697c6e85'),
    name: 'Evan Red',
    age: 24,
    subject: 'Geography',
    marks: 86,
    Stream: 'Data Science',
    Address: 'Chitkara ',
    date: ISODate('2024-08-28T17:35:28.698Z')
  }
]
Chitkara> db.Student.find({
...     "grade": "A++"
... });

Chitkara>

*/