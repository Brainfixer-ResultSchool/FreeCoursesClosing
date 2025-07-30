function groupAndSortStudents(students) {
  const groups = {
    under20: [],
    '20to30': [],
    over30: [],
  };

  students.forEach((student) => {
    if (student.age < 20) {
      groups.under20.push(student);
    } else if (student.age <= 25) {
      groups['20to30'].push(student);
    } else {
      groups.over30.push(student);
    }
  });

  Object.keys(groups).forEach((group) => {
    groups[group].sort((a, b) => b.grade - a.grade);
  });

  return groups;
}

const students = [
  { name: 'Алексей', age: 18, grade: 4.5 },
  { name: 'Мария', age: 22, grade: 4.8 },
  { name: 'Иван', age: 27, grade: 4.2 },
  { name: 'Анна', age: 19, grade: 4.9 },
  { name: 'Сергей', age: 24, grade: 4.3 },
];

console.log(groupAndSortStudents(students));
