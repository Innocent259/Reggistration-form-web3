// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract RegistrationFormat {
    uint public count = 0;
    

   mapping(uint => Student) public students;
  // uint[] Students;

    struct Student {
        uint count;
        string Name;
        uint studentId;
        string highschoolName;
        string universityFaculty;
       

    }
    event newStudent(uint count);
    
    function addStudent(string memory Name, uint studentId, string memory highschoolName, string memory universityFaculty) public {
        students[count] = Student(count, Name, studentId, highschoolName, universityFaculty);
        emit newStudent(count);
        incrementcount();

        // Student memory b;
        // b.Name = Name;
        // b.studentId = studentId;
        // b.highschoolName = highschoolName;
        // b.universityFaculty = universityFaculty;
    }
    function incrementcount() internal {
        count+=1;


    }

    function getStudents() public view returns(Student[] memory) {
    
        Student[] memory stds = new Student[](count);
        for(uint i=0; i<count; i++) {
            Student storage std = students[i];
            stds[i] = std;

        }
       return stds; 
    }
  }  




    
   


