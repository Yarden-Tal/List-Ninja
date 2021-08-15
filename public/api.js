/* CRUD API operations with Axios */

// GET
async function getAllTasks() {
    const tasksData = await axios.get('/tasks')
    return tasksData.data
}
// POST
async function postTask(text) {
    const res = await axios.post('/tasks', { text })
    console.log(res);
    return res.data
}
// PUT
async function putTask(task) {
    const res = await axios.put('/tasks', { task })
    console.log(res);
    return res.data
}
// DELETE
async function deleteTask(taskId) {
    const res = await axios.delete(`/tasks/${taskId}`)
    console.log(res);
    return res.data

}