class EmployeeManager {
    constructor() {
        this.employees = [];
        this.nextId = 1;
        this.form = document.getElementById('employeeForm');
        this.messageContainer = document.getElementById('messageContainer');
        this.employeeCount = document.getElementById('employeeCount');
        this.employeeList = document.getElementById('employeeList');

        this.strictEvents()
        this.updateDisplay()
    }

    strictEvents() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.handleAddEmployee();
        });
    }

    handleAddEmployee() {
        const name = document.getElementById('name').value.trim();
        const profession = document.getElementById('profession').value.trim();
        const age = document.getElementById('age').value.trim();

        this.clearMessages()

        if (!name || !profession || !age) {
            this.showError('Error : Please make sure all fields are filled out.');
            return;
        }

        if (isNaN(age) || parseInt(age) <= 0) {
            this.showError('Error : Age must be a positive number.');
            return;
        }

        const employee = {
            id: this.nextId++,
            name: name,
            profession: profession,
            age: parseInt(age)
        }

        this.employees.push(employee);

        this.showSuccess('Employee added successfully!');
        this.clearForm();
        this.updateDisplay();
    }

    deleteEmployee(id) {
        this.employees = this.employees.filter(emp => emp.id !== id)

        const employeeDiv = document.getElementById(`employee-${id}`);
        if (employeeDiv) {
            employeeDiv.style.transition = 'opacity 0.5s ease';
            employeeDiv.style.opacity = '0';
            setTimeout(() => {
                if (employeeDiv.parentNode) {
                    employeeDiv.parentNode.removeChild(employeeDiv);
                }
            }, 300);
        }

        this.clearMessages()

        setTimeout(() => {
            this.updateDisplay()
        }, 300)
    }

}