function Student(name, gender, age) {
    this.name = name
    this.gender = gender
    this.age = age
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName
}

Student.prototype.addMark = function (mark) {
    if(this.marks === undefined){
      this.marks = [mark]
      } else {
        this.marks.push(mark)
      }
}

Student.prototype.addMarks = function (mark1,mark2,mark3...) {
    if(this.marks === undefined){
      this.marks = []
      this.marks.push(mark1)
      this.marks.push(mark2)
      this.marks.push(mark3)
      } else {
          this.marks.push(mark1)
          this.marks.push(mark2)
          this.marks.push(mark3)
      }
}

Student.prototype.getAverage = function () {
    let sum = 0
    for( let mark in marks){
        sum += mark
    }

    return sum / marks.length
}

Student.prototype.exclude = function (reason) {
    this.excluded = reason
    delete this.marks
    delete this.subject
}