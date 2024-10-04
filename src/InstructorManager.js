export default class InstructorManager {

    constructor() {
        this.instructors = this.loadInstructors();
    }

    getInstructors() {
        return [...this.instructors];
    }

    addInstructor(instructor) {
        this.instructors.push(instructor);
        this.saveInstructors();
    }

    deleteInstructor(index) {
        if (index >= 0 && index < this.instructors.length) {
            this.instructors.splice(index, 1);
            this.saveInstructors();
        } else {
            console.warn('Invalid index for deleteInstructor:', index);
        }
    }

    updateInstructor(index, instructor) {
        if (index >= 0 && index < this.instructors.length) {
            this.instructors[index] = instructor;
            this.saveInstructors();
        } else {
            console.warn('Invalid index for updateInstructor:', index);
        }
    }

    saveInstructors() {
        localStorage.setItem('instructors', JSON.stringify(this.instructors));
    }

    loadInstructors() {
        try {
            const instructors = JSON.parse(localStorage.getItem('instructors'));
            return instructors ? instructors : [];
        } catch (error) {
            console.error('Error loading instructors from localStorage:', error);
            return [];
        }
    }
}
