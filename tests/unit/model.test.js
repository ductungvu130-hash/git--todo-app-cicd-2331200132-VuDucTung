const { TodoService } = require('../../js/model');

describe('TodoService Unit Tests', () => {
    let service;

    beforeEach(() => {
        // Create a new service instance for each test to ensure isolation
        service = new TodoService();
        // This is a bit of a hack to reset the singleton for testing purposes
        service.todos = [];
    });

    test('should add a new todo', () => {
        const text = 'Buy groceries';
        service.addTodo(text);

        expect(service.todos).toHaveLength(1);
        expect(service.todos[0].text).toBe(text);
        expect(service.todos[0].completed).toBe(false);
    });

    test('should toggle the completed state of a todo', () => {
        service.addTodo('Walk the dog');
        const id = service.todos[0].id;

        // Toggle to true
        service.toggleTodoComplete(id);
        expect(service.todos[0].completed).toBe(true);

        // Toggle back to false
        service.toggleTodoComplete(id);
        expect(service.todos[0].completed).toBe(false);
    });

    test('should remove a todo', () => {
        service.addTodo('Read a book');
        const id = service.todos[0].id;

        service.removeTodo(id);

        expect(service.todos).toHaveLength(0);
    });

    test('should not add a todo if text is empty', () => {
        service.addTodo('');

        expect(service.todos).toHaveLength(0);
    });
});
