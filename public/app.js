

document.getElementById('addReminderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const datetime = document.getElementById('datetime').value;
    axios.post('https://mvxlx7x1tj.execute-api.us-east-1.amazonaws.com/dev/add-reminder', { title, datetime })
      .then(response => alert('Reminder Added'))
      .catch(error => alert('Error adding reminder'));
  });
  
  document.getElementById('deleteReminderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const reminderId = document.getElementById('deleteId').value;
    axios.delete(`https://mvxlx7x1tj.execute-api.us-east-1.amazonaws.com/dev/delete-reminder/${reminderId}`)
      .then(response => alert('Reminder Deleted'))
      .catch(error => alert('Error deleting reminder'));
  });
  
  document.getElementById('listReminders').addEventListener('click', function() {
    axios.get('https://mvxlx7x1tj.execute-api.us-east-1.amazonaws.com/dev/list-reminders')
      .then(response => {
        const remindersList = document.getElementById('remindersList');
        remindersList.innerHTML = '';
        response.data.reminders.forEach(reminder => {
          const listItem = document.createElement('li');
          listItem.textContent = `${reminder.title} - ${reminder.datetime}`;
          remindersList.appendChild(listItem);
        });
      })
      .catch(error => alert('Error listing reminders'));
  });
  