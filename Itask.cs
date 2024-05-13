namespace MyReactApp
{
    public interface Itask
    {
        IEnumerable<Task> GetTasks();

        public Task GetTaskById(int id);
        public Task Add(Task newtask);
        public Task Update(Task updatedtask);
        public Task Delete(int id);
        int commit();
    }
}
