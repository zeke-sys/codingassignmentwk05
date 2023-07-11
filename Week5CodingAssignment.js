document.write('WEEK 05 CODING ASSIGNMENT');

//Creating a menu program for students to add courses to different semesters in an effort to plan out their college career.

/* Create a menu app as seen in this week’s video. 
What you create is up to you as long as it meets the following requirements:
1. Use at least one array.
2. Use at least two classes.
3. Your menu should have the options to create, view, and delete elements. */

class Course {
    constructor(title, level) {
      this.title = title;
      this.level = level;
    }
    describe() {
      return `The course ${this.title} is a ${this.level} level class.`
    }
  }
  class Semester {
    constructor(name) {
      this.name = name;
      this.courses = [];
    }
  
    addCourse(course) {
      if (course instanceof Course) {
        this.courses.push(course);
      } else {
        throw new Error(`You can only add an instance of Course. Argument is not a course: ${course}`);
      }
  }
    describe() {
      return `You have ${this.courses.length} courses for the ${this.name} semester.`;
    }
  }
  
  class CourseChart {
    constructor() {
      this.semesters = [];
      this.selectedSemester = null;
    }
  
    start() {
    let selection = this.showCourseChartOptions();
    while (selection != 0) {
      switch(selection) {
        case '1':
          this.registerSemester();
          break;
        case '2':
          this.viewSemester();
          break;
        case '3':
          this.deleteSemester();
          break;
        case '4':
          this.displaySemesters();
          break;
        default:
          selection = 0;
      }
      selection = this.showCourseChartOptions();
    }
    alert('Goodbye!');
  }
  
  showCourseChartOptions() {
    return prompt(`
    0) exit
    1) register for new semester
    2) view courses per semester
    3) delete semester
    4) display all semesters
    `);
  }
  
  showSemesterMenuOptions(semesterInfo) {
    return prompt(`
    0) back
    1) add new course
    2) delete course
    ----------------
    ${semesterInfo}
    `);
  }
  
  displaySemesters() {
    let semesterString = '';
    for (let i = 0; i < this.semesters.length; i++) {
      semesterString += i+ ') ' + this.semesters[i].name + '\n';
    }
    alert(semesterString);
  }
  
  registerSemester() {
    let name = prompt(`Enter which semester youw would like to register for - Spring, Summer, or Fall`);
    this.semesters.push(new Semester(name));
  }
  
  viewSemester() {
    let index = prompt('Enter the index of the semester that you want to view:');
    if (index > -1 && index < this.semesters.length) {
      this.selectedSemester = this.semesters[index]; 
      let description = 'Semester Name: ' + this.selectedSemester.name + '\n';
      description += ' ' + this.selectedSemester.describe() + '\n';
      for (let i = 0; i < this.selectedSemester.courses.length; i++) {
        description += i + ') ' + this.selectedSemester.courses[i].describe() + '\n';
      }
      let selection1 = this.showSemesterMenuOptions(description);
      switch(selection1) {
        case '1':
          this.createCourse();
          break;
        case '2':
          this.deleteCourse();
      }
    }
    
  }
  
  deleteSemester() {
    let index = prompt('Enter the index of the semester that you wish to delete: ');
    if (index > -1 && index < this.semesters.length) {
      this.semesters.splice(index, 1);
    }
  }
  
  createCourse() {
    let name = prompt('Enter name of new course: ');
    let level = prompt('Enter level of new course: 100, 200, 300, or 400 ');
    if (level == 100) {
      prompt('Freshman (level 100) class.');
    } else if (level == 200) {
      prompt('Sophomore (level 200) class.');
    } else if (level == 300) {
      prompt('Junior (level 300) class.');
    } else {
      prompt('Senior (level 400) class.');
    }
    this.selectedSemester.addCourse(new Course(name, level));
  }
  
  deleteCourse() {
    let index = prompt('Enter the index of the course that you wish to delete: ');
    if (index > -1 && index < this.selectedSemester.courses.length) {
      this.selectedSemester.courses.splice(index, 1);
    }
  }
  }
  
  let coursechart = new CourseChart();
  coursechart.start();
  