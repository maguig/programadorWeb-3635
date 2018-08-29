
function Student (firstName, lastName, dni, email) {
    
    var id = Math.random();

    this.firstName = firstName;
    this.lastName = lastName;
    this.dni = dni;
    this.email = email;

    this.getFullName = function () {
        var textFullName = this.firstName + ', ' + this.lastName;
        return textFullName;
    } 

    this.getId = function(){
        return id;
    }
}

var student1 = new Student( 'Juan', 'Perez', '45678987', 'juan@gmail.com');
console.log(student1.getFullName());

var student2 = new Student( 'Ana', 'Fernandez', '45678989', 'ana@gmail.com');
console.log(student2.getFullName());

var student3 = new Student( 'Pedro', 'Marmol', '4567898956', 'pedro@gmail.com');
console.log(student3.getFullName());

    
       