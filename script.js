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
}