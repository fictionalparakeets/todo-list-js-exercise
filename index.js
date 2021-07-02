function newTask(title) {
  taskTitles.push(title);
  taskComplete.push(false);
}

function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,
    completeTask: function() {
      this.complete = true;
    },
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  }
  return task;
}

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasksArray = [task1, task2];

console.log('______________________________________');

task1.logTaskState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logTaskState(); // Clean Cat Litter has been completed
