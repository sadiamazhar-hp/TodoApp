using Microsoft.AspNetCore.Http.HttpResults;

namespace MyReactApp
{
    public class DummyData : Itask
    {
        List<Task> tasks;

        public DummyData() {
            tasks = new List<Task>()
            {new Task(){ID=0,Text="Sweeping of Garage", Status=false },
            new Task(){ID=1,Text="Sweeping of Garage", Status=false },
            new Task(){ID=2,Text="Sweeping of Garage", Status=false },
            new Task(){ID=3,Text="Sweeping of Garage", Status=false }
            };
        }
        public Task Add(Task newtask)
        {
            tasks.Add(newtask);
            newtask.ID = tasks.Max(t => t.ID + 1);
            return newtask;
        }

        public int commit()
        {
            return 0;
        }

        public Task Delete(int id)
        {
            var task = tasks.FirstOrDefault(t => t.ID == id);
            if (task != null) { tasks.Remove(task); }
            return task;
        }

        public Task GetTaskById(int id)
        {
            return tasks.FirstOrDefault(t => t.ID == id);
        }

        public IEnumerable<Task> GetTasks()
        {
            return tasks;
            /*return from t in tasks
                   where (string.IsNullOrEmpty(name)|| t.Text.StartsWith(name))
                   select t;*/
        }

        public Task Update(Task updatedtask)
        {
            var task = tasks.FirstOrDefault(t=>t.ID == updatedtask.ID);
            if(task != null) { 
                task.Text = updatedtask.Text;
            }
            Console.WriteLine("Your data has been updated");
            return task;
        }


    }
}
